# Thai Tanic

Thai food for the easy minded

## Tech Stack

| Tech           | Version | Comment                                                           |
| -------------- | ------- | ----------------------------------------------------------------- |
| Ionic          | 5       | Used as framework to build PWA, mobile and or just plain web apps |
| Angular        | 11      | Used under the hood for framework of ionic                        |
| Strapi         | 3.5.4   | Used as backend                                                   |
| Node           | 14.15   |                                                                   |
| NPM            | 6.14    | Could also use yarn for more granular package management          |
| Auth0          | 5.0.2   |                                                                   |
| Formly         | 5.10.17 | Used for easier use of forms (Scaled to be use json forms)        |
| Docker         | 20.10   | Used for deployment                                               |
| Docker Compose | 128     | Used for easy development of backend with PostgresSQL             |
| Git            |         | Used for version control                                          |
| Github         |         | Used for hosting                                                  |
| PostgreSQL     | 12      | Used as backend for project                                       |

## Frontend setup

### Running Deployed app

1. Please run `docker build thaitanic:latest .`
   PS: You can rename `thaitanic` to anything you want
2. Once completed you can run this by executing `docker run -d --rm -p 80:80 thaitanic:latest`
   PS: If you renamed it please replace `thaitanic` with anything you want it to be
3. Please visit `http://localhost` and you should be presented with the front end.
   PS: To make sure it's fully working and to login please make sure the backend is also setup.

## Backend setup

### Local Setup

To run and work with the backend please make sure you are int he `backend` folder.

Note here, currently the choise of using postgres would be that this could be a big store which would require relationships for data.
For this demo it could also be used as a single mongoDB but i chose Postgres due speed in production env etc.
Again the use of strapi would let me use `sqlite` `PostgreSQL` `MongoDB` `MySQL` `MariaDB`

A NoSQL database would be great for this mini project but i prefer here to use postgres.

1. Please cd into `backend`
2. Please create a `.env` (Where the `docker-compse.yml` is located) to hold out docker files (This could also been used with secrets file but for simplicty i chose to use this)
   PS: If not using docker we could use the `.env` directy with strapi located inside app.

3. Paste the content below and replacing XX with random strings
   PS: You can use `openssl rand -base64 32` to generate the random string

```console
DATABASE_CLIENT=postgres
DATABASE_NAME=strapi
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=REPLACE ME WITH BASE 64 random string
SECRETKEY=REPLACE ME WITH BASE 64 random string
JWT_SECRET=REPLACE ME WITH BASE 64 random string
ADMIN_JWT_SECRET=REPLACE ME WITH BASE 64 random string
ENVIRONMENT=development
```

4. Please run `docker-compse up -d` this will run in the background.
   PS: it will take a few minutes first time start up as it will require to download postgres and npm install and bootstrap the application remove the `-d` to keep an eye on the docker-compose for any errors and first time setup
5. Once started you can setup your own admin user if wanted on `http://localhost:1337/admin`
6. You can now create a an admin user (Note that in strapi admin user and a normal user are seperated)
   TODO: Automate permissions on first time setup with bootstrap.js
