#!/usr/bin/env bash

set -e

if [ "$TRAVIS_BRANCH" == "master" ]; then
  echo "Building docker image"
  docker --version
  docker build -t rainbowloutre/civilitelu .
  docker login -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD";
  docker push rainbowloutre/civilitelu;
else
  echo "Nothing to build as this is not the master branch"
fi
