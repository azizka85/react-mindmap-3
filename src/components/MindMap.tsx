import React from "react";
import { MindMapContainer } from './MindMapContainer';
import { MindMapList } from './MindMapList';
import { MindNode } from './MindNode';
import { MindMapToolbar } from './MindMapToolbar';
import { MindNodeData } from '../data/MindNodeData';

const data: MindNodeData = {
  label: 'Root',
  active: false,
  children: [
    {
      label: 'Node #1',
      active: false,
      children: [
        {
          label: 'Node #1.1',
          active: false          
        }, {
          label: 'Node #1.2',
          active: false
        }, {
          label: 'Node #1.3',
          active: true
        }
      ]
    }, {
      label: 'Node #2',
      active: false
    }, {
      label: 'Node #3',
      active: false,
      children: [
        {
          label: 'Node #3.1',
          active: false
        }, {
          label: 'Node #3.2',
          active: false
        }
      ]
    }
  ]
};

export function MindMap() {
  return (
    <MindMapContainer>
      <MindMapToolbar />
      <MindMapList>
        <MindNode data={data}/>
      </MindMapList>
    </MindMapContainer>
  );
}