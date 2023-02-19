#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .help('display help for command')
    .argument('<filepath1>', 'link to first file')
    .argument('<filepath2>', 'link to second file')
    .option('-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format')
    .option('-h, --help', `display ${help} for ${command}`, 'blue');



program.parse();
