FROM node:18-bullseye

WORKDIR /app

RUN apt-get update && apt-get install -y \
  openjdk-17-jdk \
  libgtk2.0-0 \
  libgtk-3-0 \
  libgbm-dev \
  libnotify-dev \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  && rm -rf /var/lib/apt/lists/*
RUN npm install -g firebase-tools

COPY package*.json ./
RUN yarn install

COPY functions/package*.json ./functions/
RUN cd functions && yarn install

COPY frontend/package*.json ./frontend/
RUN cd frontend && yarn install

COPY e2e/package*.json ./e2e/
RUN cd e2e && yarn install

COPY . .

CMD ["yarn", "emu:test"]
