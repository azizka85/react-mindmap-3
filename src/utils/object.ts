export interface Data {
  [key: string]: string | Data
}

export function map(keys: Data, values: Data, data: {[key: string]: string}) {
  for(let key of Object.keys(values)) {
    if(key in keys) {
      let param = keys[key];
      let val = values[key];

      if(param instanceof Object) {
        map(param, val as Data, data);
      } else {
        data[param] = val as string;
      }
    }
  }
}

export function merge(src: Data, dest: Data) {
  for(let key of Object.keys(src)) {
    if(key in dest) {
      let val = src[key];

      if(val instanceof Object) {
        merge(val, dest[key] as Data);
      } else {
        dest[key] = val;
      }
    }
  }
}