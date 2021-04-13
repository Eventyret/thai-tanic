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
