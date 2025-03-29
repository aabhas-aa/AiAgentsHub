#!/bin/bash

# Create temporary directory
rm -rf /tmp/deployment_src
mkdir -p /tmp/deployment_src

# Copy all project files
cp -r client server shared *.json *.ts *.js /tmp/deployment_src

# Remove node_modules if it exists
rm -rf /tmp/deployment_src/node_modules

# Create the zip file
cd /tmp
rm -f aiagentsdirectory_src.zip
zip -r aiagentsdirectory_src.zip deployment_src

echo "ZIP file created at /tmp/aiagentsdirectory_src.zip"