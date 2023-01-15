# devto-clone-mongo-cloudinary

# 🚀 A DEV.to clone using MERN stack and Cloudinary 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/devto-clone-mongo-cloudinary

From / By: https://github.com/marwanm-dev/Devto-clone

Client: https://marwanm-devto-clone.vercel.app

Server: https://marwanm-devto-clone-server.onrender.com

## Environment Values

```
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

In `client/.env`:

REACT_APP_BASE_URL=http://localhost:5000/api
REACT_APP_SOCKET_IO_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=<GOOGLE_CLIENT_ID>
REACT_APP_FB_APP_ID=<FACEBOOK_CLIENT_ID>

In `.env`:

DB_USER = //user name for db
DB_PASSWORD = //password for db
DB_NAME = // name for db
JWT_KEY = //random string
COOKIE_KEY = //random string;
NODE_ENV = 'development';
CLIENT_URL = //the port of React app, ex: 'http://localhost:3000';

//Google will provide you with the following credentials
GOOGLE_API_KEY = //API key

//Github will provide you with the following credentials
GH_CLIENT_ID = //Github's Client ID
GH_CLIENT_SECRET = //Github's Client Secret

// Twitter will provide you with the following credentials
TWITTER_CONSUMER_KEY = //Twitter's Consumer key
TWITTER_CONSUMER_SECRET = //Twitter's Consumer Secret
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/devto-clone-mongo-cloudinary.git
git push -u origin main
```

## Server works

```
Dev.to clone backend API server is Live
```

## Client gives errors

```
npm run build

> devto-clone@1.0.0 build
> vite build

failed to load config from /mnt/volume_nyc1_01/devto-clone-mongo-cloudinary/client/vite.config.js
error during build:
RangeError: Maximum call stack size exceeded
    at RegExp.exec (<anonymous>)
    at /mnt/volume_nyc1_01/devto-clone-mongo-cloudinary/client/node_modules/vite/dist/node/chunks/dep-80fe9c6b.js:305:49
    at Array.reduce (<anonymous>)
    at interpolate (/mnt/volume_nyc1_01/devto-clone-mongo-cloudinary/client/node_modules/vite/dist/node/chunks/dep-80fe9c6b.js:304:20)
    at /mnt/volume_nyc1_01/devto-clone-mongo-cloudinary/client/node_modules/vite/dist/node/chunks/dep-80fe9c6b.js:320:17
    at Array.reduce (<anonymous>)
    at interpolate (/mnt/volume_nyc1_01/devto-clone-mongo-cloudinary/client/node_modules/vite/dist/node/chunks/dep-80fe9c6b.js:304:20)
    at /mnt/volume_nyc1_01/devto-clone-mongo-cloudinary/client/node_modules/vite/dist/node/chunks/dep-80fe9c6b.js:320:17
    at Array.reduce (<anonymous>)
    at interpolate (/mnt/volume_nyc1_01/devto-clone-mongo-cloudinary/client/node_modules/vite/dist/node/chunks/dep-80fe9c6b.js:304:20)
```

<div align="center">
  <a href="https://marwanm-devto-clone.vercel.app">
        <img src="https://user-images.githubusercontent.com/90101257/190815704-8d15a2f7-0eac-4a4e-9f39-26b093f5068c.png" width="200">
  </a>
  <br />
  <h1>Dev.to-clone</h1>
  <br />
</div>

> A Dev.to clone created with MERN stack and more (Essentially FB without stories feature)

<a href="https://marwanm-devto-clone.vercel.app">
  <img src='https://user-images.githubusercontent.com/90101257/190000739-e824f9a6-2014-4df1-8aca-6ce64e11f4dd.PNG' />
</a>

## Tech used with *vite*🔥:

> Frontend

- React
- Redux toolkit (Advanced RTK)
- Tailwind
- Styled components
- Framer motion
- React router
- Cloudinary (Image hosting)

> Backend

- MongoDB
- Express
- Node.js
- OAuth (Google/Github)
- JWT
- Socket.io (Real-time)
- Cloudinary
- Mongoose
- Axios

## Features

- Login / Signup
- View / Edit Profile
- Google / Github OAuth
- Ultimate mobile responsiveness
- Real-time Notifications Toasted
- CRUD Posts / Comments / Replies / Tags
- Follow / Unfollow Users
- Follow / Unfollow Tags
- Like / Unicorn / Bookmark Posts
- Like comments
- Advanced Search engine for posts, people and tags
- Filter for posts
- Reading List
- Dashboard

## Screenshots

### Login / Signup / Edit / Delete

![Login - Signup -Edit - Delete profile](https://user-images.githubusercontent.com/90101257/190129885-a618117c-71c5-48c8-a091-01e5f03266e3.gif)

### Google / Github OAuth

![Login OAuth](https://user-images.githubusercontent.com/90101257/190130170-31e95df0-86e9-4b79-8325-9bc3fcc3f164.gif)

### Create / Update / Edit / Delete Posts

![CRUD Posts](https://user-images.githubusercontent.com/90101257/190130345-68b6275c-743c-48da-9c65-e5c5515989d8.gif)

### Reactions / Comments / Follows with Real-time notifications (Toasted)

![Real time notifications - Reactions - Comments - Replies - Follows](https://user-images.githubusercontent.com/90101257/190132480-e07976d2-936a-49c2-897c-e6be5527b465.gif)

### Tags / ReadingList

![Tags - ReadingList](https://user-images.githubusercontent.com/90101257/190130607-7e6a7035-dc56-4dc7-b2e9-d2c6d00d5a87.gif)

### Dashboard

![Dashboard](https://user-images.githubusercontent.com/90101257/190119722-fb78a3ad-082c-45ad-b438-ee30606825ef.gif)

### Search Engine

![Search engine](https://user-images.githubusercontent.com/90101257/190130621-24249495-af37-4ecb-a57f-8909a5d13dbb.gif)

## Live

> Client: https://marwanm-devto-clone.vercel.app

> Server: https://marwanm-devto-clone-server.onrender.com

## How to setup locally

### Clone Repo

Clone the repo to your local machine by `https://github.com/marwanm-dev/Devto-clone`

### Setup

Install all dependencies in both `client` and `server` subdirectories by `npm i`

```shell
$ cd server && npm i
$ cd client && npm i
```

### Create

A MongoDB database either locally or online via <a href='https://www.mongodb.com/cloud/atlas'>MongoDB Atlas</a>

A <a href="https://cloudinary.com/">Cloudinary account</a>

A new project on <a href='https://console.cloud.google.com'>Google Cloud Platform</a>

A `.env` file in in both `client` and `server` subdirectories

ENV variables

`client/.env`:

```js
BASE_URL=
GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}
GITHUB_CLIENT_ID=${GITHUB_CLIENT_ID}
GITHUB_CLIENT_SECRET=${GITHUB_CLIENT_SECRET}
```

`server/.env`:

```js
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=

CLIENT_URL=

GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}
GITHUB_CLIENT_ID=${GITHUB_CLIENT_ID}
GITHUB_CLIENT_SECRET=${GITHUB_CLIENT_SECRET}

DB_NAME=
DB_USER=
DB_PASSWORD=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_DEFAULT_URL= // default image url
CLOUDINARY_DEFAULT_PUBLIC_ID= // default image public_id
```

Finally, run <code>npm run stack</code> on the root of the two subdirectories

## Credit

> Dev.to clone by me
