#!/bin/bash

cd ./server

docker-compose build && docker-compose run

cd ../client

yarn && yarn dev