FROM nginx:alpine

# 清空默认 nginx 内容
RUN rm -rf /usr/share/nginx/html/*

# 拷贝你自己的静态资源进去（假设已经 build 好）
COPY ./index.html /usr/share/nginx/html/
COPY ./FWDao.png /usr/share/nginx/html/
COPY ./src /usr/share/nginx/html/src

# 自定义 nginx 配置（如果需要）
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
