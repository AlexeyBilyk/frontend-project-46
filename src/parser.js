import * as yaml from 'js-yaml';

const parseData = (data, type) => {
  switch (type) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return yaml.load(data);
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown data type: ${type}`);
  }
};

export default parseData;
