#!/bin/bash

set -e -o pipefail

ssh asiantech@172.16.110.189 "bash Source/deploy/run.sh $1 $2"
