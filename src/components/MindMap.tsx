import React from "react";
import { MindMapContainer } from './MindMapContainer';
import { MindMapList } from './MindMapList';
import { MindNode } from './MindNode';

export function MindMap() {
  return (
    <MindMapContainer>
      <MindMapList>
        <MindNode />
        <MindNode />
        <MindNode />
      </MindMapList>
    </MindMapContainer>
  );
}