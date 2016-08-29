#!/usr/bin/env node

const dayone = require('./');
const path = require('path');
const notes = require(path.resolve(process.argv[2]));

dayone(notes);
