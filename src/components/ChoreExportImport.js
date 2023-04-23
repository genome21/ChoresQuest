import React, { useRef } from "react";
import { Button, Box } from "@mui/material";

const ChoreExportImport = ({ chores, importChores }) => {
  const fileInput = useRef(null);

  const exportChores = () => {
    const data = JSON.stringify(chores);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "chores.json";
    link.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data =       JSON.parse(event.target.result);
      importChores(data);
    };
    reader.readAsText(file);
  };

  const triggerFileUpload = () => {
    fileInput.current.click();
  };

  return (
    <Box>
      <Button onClick={exportChores} variant="contained" sx={{ mr: 1 }}>
        Export Chores
      </Button>
      <Button onClick={triggerFileUpload} variant="contained">
        Import Chores
      </Button>
      <input
        ref={fileInput}
        type="file"
        accept=".json"
        hidden
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default ChoreExportImport;

