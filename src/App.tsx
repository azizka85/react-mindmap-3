import React from "react";
import { MindMap } from "./components/MindMap";
import { MindMapGlobalStyles } from './components/MindMapGlobalStyles';

export function App() {
  return (
    <>
      <MindMapGlobalStyles />
      <MindMap />    
    </>
  );
}