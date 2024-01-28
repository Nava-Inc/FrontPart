import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import useMediaQuery from "@mui/material/useMediaQuery";


function getFontSize(isSmallScreen) {
  return isSmallScreen ? '0.5rem' : '1rem';
}
function getIconSize(isSmallScreen) {
  return isSmallScreen ? '2.5rem' : '3.5rem';
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload() {
  const isSmallScreen = useMediaQuery('(max-width:550px)');
  return (
    <Button
       sx={{ fontSize:getFontSize(isSmallScreen)}}
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
