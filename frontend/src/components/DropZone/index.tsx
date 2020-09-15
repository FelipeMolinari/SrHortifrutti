import React, { useState, useEffect } from 'react';
import { uniqueId } from 'lodash';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import filesize from 'filesize';
import Dropzone from 'react-dropzone';
import FileList from '../../components/FileList';
import { DropContainer, UploadMessage, Wrapper } from './styles';
import { FileType, GalleryResponseInterface } from '../../typescriptInterface/index';
import AuthorizedApi from '../../services/api/AuthorizedApi';

interface DropZoneProps {
  uploadedDone: GalleryResponseInterface[];
  setUploadedDone: (toAppend: GalleryResponseInterface[]) => void;
}
const DropZone: React.FC<DropZoneProps> = ({ setUploadedDone, uploadedDone }) => {
  const [uploadedFiles, setUploadedFiles] = useState<FileType[]>([]);
  const [actualIndex, setActualIndex] = useState(0);
  useEffect(() => {
    return () => {
      uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, []);

  useEffect(() => {
    console.log('render', actualIndex);
    if (uploadedFiles[actualIndex]) {
      if (
        !uploadedFiles[actualIndex].error &&
        uploadedFiles[actualIndex].progress === 0
      ) {
        processUpload(uploadedFiles[actualIndex]);
      }
    }
  }, [uploadedFiles]);

  function handleUploads(files: File[]) {
    const upload: FileType[] = files.map((file) => {
      return {
        file,
        name: file.name,
        readableSize: filesize(file.size),
        preview: URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: false,
        id: uniqueId(),
        query: false
      };
    });

    setUploadedFiles(uploadedFiles.concat(upload));
  }

  function updateFile(id: string, data: object) {
    setUploadedFiles(
      uploadedFiles.map((file) => {
        if (file.id === id) {
          return { ...file, ...data };
        }
        return file;
      })
    );
  }

  async function processUpload(upload: FileType) {
    const data = new FormData();
    data.append('file', upload.file!!, upload.name);

    try {
      const response: GalleryResponseInterface = await AuthorizedApi.uploadImage(data, {
        onUploadProgress: (e) => {
          const progress = Math.round((e.loaded * 100) / e.total);
          updateFile(upload.id, { progress, query: true });
        }
      });
      const newIndex = actualIndex + 1;

      setActualIndex(newIndex);

      updateFile(upload.id, {
        uploaded: true,
        progress: 100
      });
      setUploadedDone([...uploadedDone, response]);
    } catch (error) {
      console.log(error, 'error');
      const newIndex = actualIndex + 1;

      setActualIndex(newIndex);

      updateFile(upload.id, {
        error: true
      });
    }
  }

  async function handleDelete(id: string) {
    try {
      await AuthorizedApi.deleteImage(id);
      setUploadedFiles(uploadedFiles.filter((file) => file.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  function renderDragMessage(isDragActive: boolean, isDragReject: boolean) {
    if (!isDragActive) {
      return (
        <UploadMessage>
          <span className="default">Arraste arquivos aqui ...</span>
        </UploadMessage>
      );
    }
    if (isDragReject) {
      return (
        <UploadMessage>
          <span className="error">Arquivo não suportado ...</span>
        </UploadMessage>
      );
    }
    return (
      <UploadMessage>
        <span className="success">Solte os arquivos aqui</span>
      </UploadMessage>
    );
  }

  return (
    <Wrapper>
      <Dropzone accept="image/*" onDropAccepted={handleUploads}>
        {({ getRootProps, isDragActive, isDragReject, getInputProps }) => (
          <DropContainer
            className="dropzone"
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <AiOutlineCloudUpload size={36} color="#ddd" />
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
      {!!uploadedFiles?.length && (
        <FileList files={uploadedFiles} onDelete={handleDelete} />
      )}
    </Wrapper>
  );
};

export default DropZone;
