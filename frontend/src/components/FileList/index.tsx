import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';
import { Container, FileInfo, Preview } from './styles';
import { FileType } from '../../typescriptInterface';

interface FileListInterface {
  files: FileType[];
  onDelete: (id: string) => void;
}
const FileList: React.FC<FileListInterface> = ({ files, onDelete }) => {
  return (
    <Container>
      {files.map((file) => (
        <li key={file.id}>
          <FileInfo>
            <Preview src={file.preview}></Preview>
            <div>
              <strong>{file.name}</strong>

              <span>
                {file.readableSize}
                {file.url && <button onClick={() => onDelete(file.id)}>Excluir</button>}
              </span>
            </div>
          </FileInfo>
          <div>
            {!file.uploaded && !file.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: '#5280E0' }
                }}
                strokeWidth={10}
                value={file.progress}
              ></CircularProgressbar>
            )}
            {file.url && (
              <a href={file.url} target="_blank" rel="noopener noreferrer">
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}
            {file.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
            {file.error && <MdError size={24} color="#e57878" />}
          </div>
        </li>
      ))}
    </Container>
  );
};

export default FileList;
