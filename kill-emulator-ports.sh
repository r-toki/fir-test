#!/bin/bash

ports=(9099 5001 8080 5000 8085 9199 9299)

for port in "${ports[@]}"
do
    pid=$(lsof -t -i:$port)

    if [ ! -z "$pid" ]; then
        echo "$port: kill"
        kill $pid
    else
        echo "$port: not found"
    fi
done
