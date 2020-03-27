import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import styled from "styled-components";
import { useContent, WithContentProps } from "../Content/Content";
import { AiOutlineClose } from "react-icons/ai";
import { colors } from "../shared/constants";
const fileDropIcon = require("./file-drop.png");

const StyledOuterContainer = styled.div``;

const StyledContainer = styled.div`
  height: ${props => (props.filesUploaded ? "40px" : "110px")};
  display: flex;
  align-items: center;
  border: ${props =>
    props.isDragActive
      ? `1px solid ${props.theme.colors.primary.light || colors.LIGHT_BLUE}`
      : `1px dashed ${props.theme.colors.primary.medium || colors.GRAY}`};
  border-radius: 20px;
  margin: 10px 0px;
  justify-content: ${props => (props.isDragActive ? "center" : "auto")};
  background-color: ${props =>
    props.isDragActive
      ? `${props.theme.colors.primary.light || colors.LIGHT_BLUE}`
      : "#ffffff"};
`;

const StyledDropzoneText = styled.p`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.filesUploaded ? "row" : "column")};
  align-items: center;
  justify-content: ${props => (props.filesUploaded ? "space-between" : "auto")};
  line-height: 25px;
  margin: 10px 20px;
`;

const StyledDropHereText = styled.span`
  display: flex;
  flex-direction: ${props => (props.filesUploaded ? "row" : "column")};
  align-items: center;
  color: ${props =>
    props.isDragActive
      ? props.theme.colors.primary.dark || colors.BLUE_DENIM
      : "#65666d"};
`;

const StyledBrowseFileText = styled.span`
  color: ${props => props.theme.colors.secondary.medium || colors.BLUE_DENIM};
`;

const StyledFileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 30px;
  border: 1px solid #d9d9e3;
  border-radius: 35px;
  margin-bottom: 15px;
`;

const StyledFileNames = styled.a`
  color: #65666d;
  text-decoration: none !important;
`;

const StyledRemoveButton = styled.button`
  width: 5%;
  border: none;
  font-size: 20px;
  background-color: transparent;
  color: ${props => props.theme.colors.primary.dark};
`;

const StyledDropIcon = styled.img`
  height: 20px;
  width: 16px;
  margin: 5px 20px;
`;

const StyledError = styled.div`
  color: red;
  margin: 0px;
  padding-left: 17px;
`;

export interface InputFileProps extends WithContentProps {
  newFiles: any;
  onChange: any;
  onDropVerbiage: string;
  dropFileVeriage: string;
  browseVerbiage: string;
  acceptedFiles?: string;
  rejectFileError?: string;
  maxSize?: number;
  [key: string]: any;
}

export type InputFile = React.ComponentType<InputFileProps>;

export const InputFile: InputFile = ({
  contentKey,
  newFiles,
  data,
  onChange,
  onDropVerbiage,
  dropFileVeriage,
  browseVerbiage,
  acceptedFiles,
  rejectFileError,
  maxSize = 15000000,
  ...rest
}) => {
  const { theme } = useContent();
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [filesUploaded, setFilesUploaded] = useState(false);

  useEffect(() => {
    if (data) {
      setUploadedFiles(data);
      if (files.length > 0 || data.some(d => d.keep === true))
        setFilesUploaded(true);
    }
  }, [data]);

  const onDrop = acceptedFiles => {
    let newFiles = [...files];
    newFiles.push(...acceptedFiles);
    setFilesUploaded(true);
    setFiles(newFiles);
    if (onChange) {
      onChange(newFiles, uploadedFiles);
    }
  };

  const removeFile = file => () => {
    let newFiles = [...files];
    let index = newFiles.indexOf(file);
    newFiles.splice(index, 1);
    setFiles(newFiles);
    if (files.length === 0 || uploadedFiles.every(file => file.keep === false))
      setFilesUploaded(false);
    if (onChange) {
      onChange(newFiles, uploadedFiles);
    }
  };

  const removeUploadedFiles = file => () => {
    let newFiles = [...uploadedFiles];
    let index = newFiles.indexOf(file);
    newFiles[index].keep = false;
    setUploadedFiles(newFiles);
    if (files.length === 0 || uploadedFiles.every(file => file.keep === false))
      setFilesUploaded(false);
    if (onChange) {
      onChange(files, newFiles);
    }
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    rejectedFiles
  } = useDropzone({
    onDrop,
    accept: acceptedFiles,
    maxSize: maxSize
  });

  return (
    <StyledOuterContainer theme={theme} {...rest}>
      {files.map(file => (
        <StyledFileContainer theme={theme}>
          <StyledFileNames
            href={file.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            {file.name}
          </StyledFileNames>
          <StyledRemoveButton
            type="button"
            onClick={removeFile(file)}
            theme={theme}
          >
            <AiOutlineClose />
          </StyledRemoveButton>
        </StyledFileContainer>
      ))}
      {uploadedFiles.map(file =>
        file.keep === false ? null : (
          <StyledFileContainer theme={theme}>
            <StyledFileNames
              href={file.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.name}
            </StyledFileNames>
            <StyledRemoveButton
              type="button"
              onClick={removeUploadedFiles(file)}
              theme={theme}
            >
              <AiOutlineClose />
            </StyledRemoveButton>
          </StyledFileContainer>
        )
      )}
      <StyledContainer
        {...getRootProps({ isDragActive })}
        theme={theme}
        filesUploaded={filesUploaded}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <StyledDropHereText theme={theme} isDragActive={isDragActive}>
            {onDropVerbiage}
          </StyledDropHereText>
        ) : (
          <StyledDropzoneText theme={theme} filesUploaded={filesUploaded}>
            <StyledDropHereText theme={theme} filesUploaded={filesUploaded}>
              <StyledDropIcon src={fileDropIcon} />
              {dropFileVeriage}
            </StyledDropHereText>
            <StyledBrowseFileText theme={theme}>
              {browseVerbiage}
            </StyledBrowseFileText>
          </StyledDropzoneText>
        )}
      </StyledContainer>
      {rejectedFiles.length > 0 && <StyledError>{rejectFileError}</StyledError>}
    </StyledOuterContainer>
  );
};
