#!/bin/bash

#echo 'test' > ./_build/html/h.html 

language="zh_CN en"
gateway="gateway"
node="node"

node_proj="test"
gateway_proj="test"


build () {
  python -m sphinx -t $3 -T -E -b html -d _build/$1/$2/$3/doctrees -D language=$1 $4 _build/html/$1/$2/$3
}


for l in $language
do
  for t in $node_proj
  do
    build $l $node $t "../${node}/source/"
  done
  for t in $gateway_proj
  do
    build $l $gateway $t "../${gateway}/source/"
  done
done


