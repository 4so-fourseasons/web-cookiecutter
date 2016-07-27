#!/usr/bin/env bash
cd ..
node-sass --watch --recursive --output css/ --source-map true --source-map-contents sass/
