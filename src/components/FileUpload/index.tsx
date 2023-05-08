import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export function FileUpload() {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {file ? (
        <p>{file.name}</p>
      ) : isDragActive ? (
        <p>Arraste e solte uma foto aqui</p>
      ) : (
        <p>Arraste e solte ou clique aqui para adicionar uma foto</p>
      )}
    </div>
  );
}
