#!/bin/bash

cd ./server

docker-compose build && docker-compose up

cd ../client

yarn && yarn dev