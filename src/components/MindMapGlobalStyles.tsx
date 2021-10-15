import { Global } from "@emotion/react";
import { map, merge, Data } from '../utils/object';

const defaultPrefix = '--mindmap-global-';

let variables = initVariables();
let values: GlobalVariables = {
  colors: {
    background: '#fff',
    backgroundToolbar: '#eee',
    border: '#bbb',
    borderActive: '#777',
    primary: '#777',
    secondary: '#777'
  }
};
let globalVariables: {[key: string]: string} = {};

map(variables, values, globalVariables);

export interface GlobalVariables extends Data {
  colors?: {
    background?: string,
    backgroundToolbar?: string,
    border?: string,
    borderActive?: string,
    primary?: string,
    secondary?: string
  }
}

function initVariables(prefix = defaultPrefix): GlobalVariables {
  return {
    colors: {
      background: prefix + 'colors-background',
      backgroundToolbar: prefix + 'colors-background-toolbar',
      border: prefix + 'colors-border',
      borderActive: prefix + 'colors-border-active',
      primary: prefix + 'colors-primary',
      secondary: prefix + 'colors-secondary'
    }
  };
}

export function setGlobalVariables(prefix?: string, newValues?: GlobalVariables) {
  prefix = prefix || defaultPrefix;
  variables = initVariables(prefix);

  if(newValues) {
    merge(newValues, values);
  }
  
  globalVariables = {};
  map(variables, values, globalVariables);
}

export function getGlobalVariables() {
  return variables;
}

export function getGlobalValues() {
  return values;
}

/// TODO: Need update css variables
export function updateValues(newValues: GlobalVariables) {
  const vars:{[key: string]: string} = {};

  merge(newValues, values);
  map(variables, newValues, vars);  
  merge(vars, globalVariables);  
}

export function MindMapGlobalStyles() {
  return (
    <Global 
      styles={{
        'html, body, #root': {
          width: '100%',
          height: '100%',
          margin: 0,
          fontFamily: "'Roboto', sans-serif"
        },
        ':root': {
          ...globalVariables                   
        }
      }}
    />
  );
}