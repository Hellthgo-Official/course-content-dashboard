import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import uploadSvg from './../assets/images/uploader.svg';

function ImageUploader({ open }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Image src={uploadSvg} />
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

export default ImageUploader;
