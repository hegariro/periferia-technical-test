#!/bin/bash
docker compose down -v

docker compose up db -d
docker compose up backend --build -d