import React, { useState } from "react";
import { Input, Select, Button } from "antd";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { message } from "antd";

const { Option } = Select;

const ChoreInputForm = ({ chores, setChores }) => {
  const [choreInput, setChoreInput] = useState("");
  const [valueInput, setValueInput] = useState(5);
  const [categoryInput, setCategoryInput] = useState("Fire");

  const categories = [
    "Fire", "Poison", "Psychic", "Radiant", "Thunder", "Acid", "Cold", "Force", "Slashing", "Attack", "Ranged", "Spell"
  ];

  const handleChoreSubmit = (event) => {
    event.preventDefault();
    if (choreInput.trim() !== "") {
      setChores([...chores, { chore: choreInput, value: valueInput, category: categoryInput }]);
      setChoreInput("");
    }
  };

  const handleExportChores = () => {
    const fileName = "chores.json";
    const jsonContent = JSON.stringify(chores);
    const element = document.createElement("a");
    const file = new Blob([jsonContent], { type: "application/json" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    element.click();
  };

  const handleImportChores = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (Array.isArray(data)) {
            setChores(data);
            message.success("Chores imported successfully.");
          } else {
            message.error("Invalid file format.");
          }
        } catch (error) {
          message.error("Error importing chores: " + error.message);
        }
      };
      reader.readAsText(file);
    }
  };
  

  return (
    <form onSubmit={handleChoreSubmit}>
      <Input
        placeholder="Enter Chore"
        value={choreInput}
        onChange={(e) => setChoreInput(e.target.value)}
      />
            <Input
        type="number"
        min="1"
        value={valueInput}
        onChange={(e) => setValueInput(parseInt(e.target.value, 10))}
        style={{ width: "100px" }}
      />
      <Select
        value={categoryInput}
        onChange={(value) => setCategoryInput(value)}
        style={{ width: "150px" }}
      >
        {categories.map((category, index) => (
          <Option key={index} value={category}>
            {category}
          </Option>
        ))}
      </Select>
      <Button htmlType="submit">Add Chore</Button>
      <Button icon={<DownloadOutlined />} onClick={handleExportChores}>
        Export Chores
      </Button>
      <Button icon={<UploadOutlined />}>
        <input
          type="file"
          accept=".json"
          onChange={handleImportChores}
          style={{ display: "none" }}
        />
        Import Chores
      </Button>
    </form>
  );
};

export default ChoreInputForm;
