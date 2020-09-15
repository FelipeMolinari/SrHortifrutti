import React, { useLayoutEffect, useState, useEffect } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
import Dropzone from 'react-dropzone';
import FileList from '../../components/FileList';
import { Container, DropContainer, UploadMessage, Wrapper } from './styles';
import { FileType } from '../../typescriptInterface/index';
import AuthorizedApi from '../../services/api/AuthorizedApi';

const Gallery: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileType[]>([]);
  // const [filesWaitingToUpload, setFilesWaitingToUpload] = useState<FileType[]>([])

  useLayoutEffect(() => {
    console.log(uploadedFiles);
    uploadedFiles.forEach((item) => processUpload(item));
  }, [uploadedFiles]);

  useEffect(() => {
    uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
  });
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
        url: null,
        id: uniqueId()
      };
    });

    setUploadedFiles(uploadedFiles.concat(upload));
  }

  function updateFile(id: string, data: object) {
    setUploadedFiles(
      uploadedFiles.map((file) => {
        console.log(id, file.id);

        if (file.id === id) {
          return { ...file, ...data };
        }
        return file;
      })
    );
  }

  function processUpload(upload: FileType) {
    const data = new FormData();
    data.append('file', upload.file, upload.name);
    AuthorizedApi.uploadImage(data, {
      onUploadProgress: (e) => {
        const progress = Math.round((e.loaded * 100) / e.total);
        updateFile(upload.id, { progress });
      }
    })
      .then((response) => {
        updateFile(upload.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(() => {
        updateFile(upload.id, {
          error: true
        });
      });
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
    <Container>
      <Wrapper>
        <Dropzone accept="image/*" onDropAccepted={handleUploads}>
          {({ getRootProps, isDragActive, isDragReject, getInputProps }) => (
            <DropContainer
              className="dropzone"
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              {renderDragMessage(isDragActive, isDragReject)}
            </DropContainer>
          )}
        </Dropzone>
        {!!uploadedFiles?.length && (
          <FileList files={uploadedFiles} onDelete={handleDelete} />
        )}
      </Wrapper>
    </Container>
  );
};

export default Gallery;
