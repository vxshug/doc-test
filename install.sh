#!/bin/bash

pwd

which python

df -h

echo 'test' > doc/main/_build/html/index.html
cat  doc/main/_build/html/index.html
rm doc/main/_build/html/index.html
cd doc/main/_build/html
tree
