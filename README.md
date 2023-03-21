# Python or NodeJS or Typescript Backend Challenge

## Task:
Build a RESTful api that services requests for sprocket factory data and sprockets.
The app should be built using either Python or NodeJS.
For data retention, a database or cache can be used.
Ideally, use docker/docker-compose for standing up the datastore.
The code should be on a github repository that should be shared with your engineering contact.

## Requirements:
RESTful Endpoints
*An endpoint that returns all sprocket factory data
*An endpoint that returns factory data for a given factory id
*An endpoint that returns sprockets for a given id
*An endpoint that will create new sprocket
*An endpoint that will update sprocket for a given id
   ** Seed data/examples of the factory and sprocket are in the attached JSON files
   ** Include a README with instructions on how to stand up the database and application

# Installation
To run this repo all you have to do is follow this simple steps

```
Run npm i on the root of the project

npm i

You need Docker installed in order to run the service and DB, if you do, all you have to do is run

docker-compose up -d --build

The migration and initial data will be populated on the run and only the first time that the program is executed



