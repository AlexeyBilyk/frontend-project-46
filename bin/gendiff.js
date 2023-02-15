#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.1')
    .help('display help for command')
    .option('-V, --version', 'output the version number')
    .option('-h, --help', 'output commad list');


program.parse();
