#!/bin/bash
set -e

echo "Checking and installing Docker..."
if ! command -v docker &> /dev/null; then
  sudo yum update -y
  sudo yum install -y docker
  sudo systemctl start docker
  sudo usermod -aG docker ec2-user
  echo "Docker installed."
else
  echo "Docker already installed."
fi

echo "Checking and installing Node.js..."
if ! command -v node &> /dev/null; then
  curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
  sudo yum install -y nodejs
  echo "Node.js installed."
else
  echo "Node.js already installed."
fi

echo "Global setup complete. You can now run ./start.sh"
