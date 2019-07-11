#!/bin/bash
cd /app
chmod -R 777 nest-test/
mv nest-test/* /app
rm -r nest-test
echo "Starting Service"
npm install
npm start