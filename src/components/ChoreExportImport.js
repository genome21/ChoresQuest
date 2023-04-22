import React, { useRef } from "react";
import { Button } from "react-bootstrap";

const ChoreExportImport = ({ chores, importChores }) => {
  const fileInputRef = useRef();

  const exportChores = () => {
    const data = JSON.stringify(chores);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "chores.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = JSON.parse(e.target.result);
        importChores(data);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <Button onClick={exportChores} className="mr-2">
        Export Chores
      </Button>
      <Button onClick={() => fileInputRef.current.click()}>
        Import Chores
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default ChoreExportImport;
