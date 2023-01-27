import React, {useCallback} from 'react'
import { Button, Image } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import uploadSvg from './../assets/images/uploader.svg';
let binaryStr;
let files;

function ImageUploader({ open }) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      files = acceptedFiles.map((file) => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  
  
  console.log(binaryStr)

  return (
    <div className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Image src={uploadSvg} />
      </div>
      <aside>
        <ul className='mt-5'>{files}</ul>
      </aside>
    </div>
  );
}

export default ImageUploader;
