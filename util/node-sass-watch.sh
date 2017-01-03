#!/usr/bin/env bash
cd ..
cd src
node-sass --watch --recursive --output css/ --source-map true --source-map-contents sass/
