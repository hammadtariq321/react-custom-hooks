import React from "react";
import useToggle from "../hooks/useToggle";
import Button from "../elements/Button";
import "./file.css";

const Toggle = () => {
  const [values, toggle] = useToggle({
    toggle1: false,
    toggle2: false,
  });

  return (
    <div>
      <h1>Toggle</h1>
      <Button onClick={() => toggle("toggle1")}>
        Toggle 1: {values.toggle1 ? "ON" : "OFF"}
      </Button>
      <Button
        style={{ color: "white" }}
        className="ba"
        onClick={() => toggle("toggle2")}
      >
        Toggle 2: {values.toggle2 ? "ON" : "OFF"}
      </Button>
    </div>
  );
};

export default Toggle;
