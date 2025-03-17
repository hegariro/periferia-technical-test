#!/bin/bash
docker compose down -v

docker compose up db -d
docker compose up backend --build -d
docker compose up frontend --build -d