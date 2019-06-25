# Trial Task: CRUD Employee

Implement the User Story “As an HR Manager, I want to create, edit, delete and view basic
employee data like name and date of birth, so I have every data I need for HR administration
easily accessible.” Please use a very basic Employee Object with few different fields like
firstName, lastName, dateOfBirth, primaryLanguage, languages (ISO-Codes).

For the **backend** server please use NodeJS with Express Framework and add the Apollo
GraphQL Server (​https://www.apollographql.com/docs/apollo-server/​). Implement the
interface with GraphQL and NOT REST. Use MongoDB with MongooseJS to store the data.
The design of the data structure on the DB side (MongoDB) and the business logic side
(GraphQL) is up to you.

For the **frontend** part please use React with the Apollo GraphQL Client
(​https://www.apollographql.com/docs/react/​), do NOT use Redux, because we do not work
with REST at all. Please use Semantic (​https://react.semantic-ui.com/​) for the styling. How
you layout and style the frontend is up to you. The target is to provide a basic frontend with
no / less overhead to satisfy the user story.

Backend and frontend should be in one project folder. Please use Docker to pack the
implemented solution into a Container, the Dockerfile should be part of the project folder.
Please also not forget to include a gitignore file, to exclude common files for NodeJS, React
and Docker from commits.

Authentication between frontend and backend is not needed for this project. But please
include in your result a concept how would you implement a basic Authentication
mechanism in GraphQL with JWT. Please keep this very short, we just need to understand
how would you approach this issue, so no detailed documentation needed.
We use the Airbnb Coding Style for JS (​https://github.com/airbnb/javascript​). Please use
ES6 syntax where possible. Comments in the code would be an advantage. Maybe you need
to setup Babel and / or Webpack to use all modern functionalities.

Please upload the result to a Git-Repository and grant us reading access to review the
results. The repository should contain a very short readme which explains how to run the
project, so that we can verify the functions.

As a bonus you can also implement one test for the frontend and the backend with Jest
(FE+BE) and Enzyme (FE only). But please see this part as optional bonus task.

If anything from the specification is not clear or if some information is missing, please just
do your own assumptions to complete the task on your own. You can comment your
assumptions right in the code, like “I/we assume that an employee can have multiple
languages, but only one primary language”. Please only ask if you can’t proceed otherwise.

#How to run
install docker and docker-compose

run command "docker-compose up"

Open url http://localhost:8081
