import styled from "@emotion/styled";

export const MindNodeItem = styled.li({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  margin: '1rem',
  lineHeight: 1,
  position: 'relative',
  '& > ul:before': {
    content: '""',
    border: '1px solid black',
    borderTop: 'none',
    borderLeft: 'none',
    width: 'calc(1rem - 2px)',
    height: 0,
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)'
  },
  '&:before': {
    content: '""',
    border: '1px solid black',
    borderTop: 'none',
    borderLeft: 'none',
    width: '1rem',
    height: 0,
    position: 'absolute',
    left: 'calc(-1rem - 1px)'
  },
  '&:after': {
    content: '""',
    border: '1px solid black',
    borderTop: 'none',
    borderLeft: 'none',
    width: 0,
    height: 'calc(100% + 1rem)',
    position: 'absolute',
    left: 'calc(-1rem - 2px)'
  },
  '&:first-of-type:after': {
    top: '50%',
    height: 'calc(100% / 2 + 1rem)'    
  },
  '&:first-of-type:nth-last-of-type(1):after': {
    height: 0
  },
  '&:last-of-type:after': {
    bottom: '50%',
    height: 'calc(100% / 2 + 1rem)'
  }
});