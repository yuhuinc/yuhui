import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import styled from "styled-components";
import { useContent, WithContentProps } from "../Content/Content";
import { AiOutlineClose } from "react-icons/ai";
import { colors } from "../shared/constants";
import fileDropIcon from "../static/file-drop.png";

const StyledOuterContainer = styled.div``;

const StyledContainer = styled.div`
  height: ${props => (props.filesUploaded ? "40px" : "110px")};
  display: flex;
  align-items: center;
  border: ${props =>
    props.isDragActive
      ? `1px solid ${props.theme?.colors?.primary?.light || colors.LIGHT_BLUE}`
      : `1px dashed ${props.theme?.colors?.primary?.medium || colors.GRAY}`};
  border-radius: 20px;
  margin: 10px 0px;
  justify-content: ${props => (props.isDragActive ? "center" : "auto")};
  background-color: ${props =>
    props.isDragActive
      ? props.theme?.colors?.primary?.light || colors.LIGHT_BLUE
      : props.theme?.colors?.background?.light || colors.WHITE};
  cursor: pointer;
`;

const StyledDropzoneText = styled.p`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.filesUploaded ? "row" : "column")};
  align-items: center;
  justify-content: ${props => (props.filesUploaded ? "space-between" : "auto")};
  line-height: 25px;
  margin: 10px 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const StyledDropHereText = styled.span`
  display: flex;
  flex-direction: ${props => (props.filesUploaded ? "row" : "column")};
  align-items: center;
  color: ${props =>
    props.isDragActive
      ? props.theme?.colors?.secondary?.medium || colors.PURE_BLUE
      : props.theme?.colors?.grey?.dark || colors.SLATE_GREY};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 10px;
`;

const StyledSpan = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 10px;
  display: inline-block;
`;

const StyledBrowseFileText = styled.span`
  color: ${props => props.theme?.colors?.secondary?.medium || colors.PURE_BLUE};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 10px;
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const StyledRemoveButton = styled.button`
  padding: 0;
  cursor: pointer;
  display: flex;
  border: none;
  font-size: 20px;
  background-color: transparent;
  color: ${props => props.theme?.colors?.primary?.dark || colors.PURE_BLUE};
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
  dropFileVerbiage: string;
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
  dropFileVerbiage,
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
              <StyledSpan>{dropFileVerbiage}</StyledSpan>
            </StyledDropHereText>
            <StyledBrowseFileText theme={theme}>
              {browseVerbiage}
            </StyledBrowseFileText>
          </StyledDropzoneText>
        )}
      </StyledContainer>
      {files.map(file => (
        <StyledFileContainer theme={theme} key={`uploaded-file-btn-${file.id}`}>
          <StyledFileNames
            key={`uploaded-file-name-${file.id}`}
            href={file.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            {file.name}
          </StyledFileNames>
          <StyledRemoveButton
            key={`uploaded-file-remove-${file.id}`}
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
          <StyledFileContainer theme={theme} key={`file-btn-${file.id}`}>
            <StyledFileNames
              key={`file-name-${file.id}`}
              href={file.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.name}
            </StyledFileNames>
            <StyledRemoveButton
              key={`file-remove-btn-${file.id}`}
              type="button"
              onClick={removeUploadedFiles(file)}
              theme={theme}
            >
              <AiOutlineClose />
            </StyledRemoveButton>
          </StyledFileContainer>
        )
      )}
      {rejectedFiles.length > 0 && <StyledError>{rejectFileError}</StyledError>}
    </StyledOuterContainer>
  );
};
