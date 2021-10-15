import React from "react";
import { MindMap } from "./components/MindMap";
import { MindMapGlobalStyles, updateValues } from './components/MindMapGlobalStyles';

export function App() {
  return (
    <>
      <MindMapGlobalStyles />
      <MindMap />    
    </>
  );
}