#!/bin/bash
emcc test.c -O2 -s WASM=1 -s SIDE_MODULE=1 -o test.wasm