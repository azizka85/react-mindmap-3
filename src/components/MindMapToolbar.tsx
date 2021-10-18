import { MindMapToolbarContainer } from './MindMapToolbarContainer';
import { ActivateLeftNodeTool } from './ActivateLeftNodeTool';
import { ActivateUpNodeTool } from './ActivateUpNodeTool';
import { ActivateDownNodeTool } from './ActivateDownNodeTool';
import { ActivateRightNodeTool } from './ActivateRightNodeTool';
import { SaveTool } from './SaveTool';

export function MindMapToolbar() {
  return (
    <MindMapToolbarContainer>
      <ActivateLeftNodeTool />
      <ActivateUpNodeTool />      
      <ActivateDownNodeTool />
      <ActivateRightNodeTool />
      <SaveTool />
    </MindMapToolbarContainer>
  );
}