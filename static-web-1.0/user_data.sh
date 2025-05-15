#!/bin/bash
yum update -y
amazon-linux-extras enable docker
yum install -y docker
systemctl start docker
usermod -a -G docker ec2-user

# 该脚本是用于user data,暂时用不到
# 可选：clone 你的 Git 项目或拉远程 zip
# cd /home/ec2-user
# git clone https://github.com/yourname/static-web-1.0.git
# cd static-web-1.0
# ./start.sh
