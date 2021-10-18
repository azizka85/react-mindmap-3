import styled from "@emotion/styled";

export const MindMapList = styled.ul({
  flex: 1,
  margin: 0,
  padding: 0,
  overflow: 'auto',
  '& > li': {
    '&:after, &:before': {
      display: 'none'
    }
  }
});