import styled from "@emotion/styled";

export const MindNodeContainer = styled.article({
  padding: '0.5rem',
  border: '1px solid black',
  borderRadius: '0.5rem',
  outline: 'none',
  cursor: 'pointer',
  '&.active': {
    border: '3px dashed orange'
  },
  '&.collapsed': {
    boxShadow: '0px 1px 0px #888888, 0px 3px 0px #ffffff, 0px 4px 0px #888888, 0px 6px 0px #ffffff, 0px 7px 0px #888888'
  },
  '&.editable': {
    cursor: 'auto'
  }
});