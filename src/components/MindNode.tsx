import React from "react";
import { MindNodeItem } from './MindNodeItem';
import { MindNodeContainer } from './MindNodeContainer';
import { MindNodeList } from './MindNodeList';
import { MindNodeData } from "../data/MindNodeData";

export interface MindNodeProps {
  data: MindNodeData
}

export function MindNode(props: MindNodeProps) {
  return (
    <MindNodeItem>
      <MindNodeContainer 
        className={props.data.active ? 'active collapsed' : null}
      >
        {props.data.label}
      </MindNodeContainer>
      {props.data.children &&
        <MindNodeList>
          {props.data.children.map(item => 
            <MindNode key={item.label} data={item} />
          )}
        </MindNodeList>      
      }
    </MindNodeItem>
  );
}