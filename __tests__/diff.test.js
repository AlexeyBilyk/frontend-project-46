import * as fs from 'fs';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const stylishExpectedResult = fs.readFileSync('__fixtures__/stylishExpectedResult', 'utf-8');
const plainExpectedResult = fs.readFileSync('__fixtures__/plainExpectedResult', 'utf-8');
const JSONExpectedResult = fs.readFileSync('__fixtures__/jsonExpectedResult', 'utf-8');

const extension = ['yaml', 'json'];

test.each(extension)('for different formats of files (.json .yaml)', (ext) => {
  const fileName1 = `__fixtures__/file1.${ext}`;
  const fileName2 = `__fixtures__/file2.${ext}`;

  expect(genDiff(fileName1, fileName2, 'stylish')).toEqual(stylishExpectedResult);
  expect(genDiff(fileName1, fileName2, 'plain')).toEqual(plainExpectedResult);
  expect(genDiff(fileName1, fileName2, 'json')).toEqual(JSONExpectedResult);
  expect(genDiff(fileName1, fileName2)).toEqual(stylishExpectedResult);
});
