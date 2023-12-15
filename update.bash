#!/bin/bash

for i in mods/*.pw.toml; do export temp=${i#*/}; export final=$(basename $temp .pw.toml);packwiz upgrade $final; done