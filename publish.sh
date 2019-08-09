#!/usr/bin/bash
yarn build && \
git add --all && \
git commit -m "$1" && \
git push origin master 
cp -r build/* ../deploy && \
cd ../deploy && \
git add --all && \
git commit -m "publishing automatically-$1" && \
git push origin master && \
cd - 

