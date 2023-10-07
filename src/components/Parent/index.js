import React, { useRef } from "react";
import Board from "../Board"; // Import your Board component
import Menu from "../Menu"; // Import your Menu component
import Toolbox from "../Toolbox";
import { useDispatch } from "react-redux";
import { clearCanvas } from "@/slice/menuSlice";

const ParentComponent = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);

  // Define the clearCanvasHandler function
  const clearCanvasHandler = () => {
    dispatch(clearCanvas());
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <Menu clearCanvasHandler={clearCanvasHandler} />
      <Toolbox />
      <Board canvasRef={canvasRef} clearCanvasHandler={clearCanvasHandler} />
    </>
  );
};

export default ParentComponent;
