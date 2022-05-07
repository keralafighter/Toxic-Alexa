FROM fusuf/whatsasena:latest

RUN git clone https://github.com/KERALAFIGHTER/Sappu-Drozoxo /root/Drozoxo
WORKDIR /root/Drozoxo/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines

CMD ["node", "bot.js"]
 
