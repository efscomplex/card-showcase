#!bin/bash
docker stop runner-container
docker rm runner-container
docker build . -t runner
docker run -p 8080:8080 --name runner-container runner yarn docker:start