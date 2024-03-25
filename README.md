# Forward-Security-Notes-Page-Application

Notes webpage created for application purposes. 

# Usage

### Creating a Note
To add a note, the user can click on the add note button on the top left of the webpage. A pop-up form will appear for the user to fill out. To create a note, the user can click on the Add Note button within the form.

### Editing a Note
To edit a note, click on the edit button on the top right, then the user will be given a form to fill out. Once the edit is complete, the user can click on the Edit Note button within the form to submit the changes.

### Delete a Note
To delete a note, the user can click on the delete button on the top right of the webpage.

# Setup for Local and Docker

### Local Setup Instructions

Step 1:

Open Two Terminals

Step 2: 

Start up the frontend in the first terminal by writing down the following commands:

`cd notes-page-application-frontend`

`npm install`

`npm start`

Step 3:

Start up the backend in the second terminal by writing down the following commands:

`cd notes-page-application-backend-server`

`npm install`

`npm start`

Step 4: 

Go to your local browser and enter the following to access the notes page: http://localhost:3000/

### Docker Setup Instructions

With .tar files

Please use the following commands within this folder to run the application through docker:

Download the Dockers Containers folder and then open up a terminal

in the terminal please cd into the Docker Containers folder and use the following commands:

`docker load -i frontend.tar`

`docker load -i backend.tar`

`docker-compose up`


# Design Choice and Technology Usage

I made use of HTML, CSS and JavaScript to handle the frontend functionality as well as styling the frontend.

I used React to create the frontend which helped me isolate individual components that could be added to App.js. 

I also made use of redux and store to maintain the state of the notes within the application and to enable access to the note state through different components

I made use of Node.js as the backend and Express.js as the server. With these, I was able to create a RESTful API to communicate between the frontend and backend to create, read, update and delete notes. 



# Future Plans

Given the opportunity to improve upon this project, I would change the backend component such that it uses a backend server such as MongoDB to improve the scalability of the application for larger amounts of data handling. 

I also plan on changing the CSS layout such that the webpage is more easily accessible on various other platforms such as mobile phones and tablets.

As of the creation of this application, I have mainly relied on manual testing, however, it might be wise to create more automated tests if I plan to make the project larger in order to simplify the process. 

# Challenges
There was some challenges with the creation of the docker container due to the fact that I am using a local storage over non-local due to the fact that docker containers do not have permission to access local text files. As such, there are two versions of this application code. The docker version utilizes docker volume as a means to store data whereas the non-docker version utilizes a local txt file to store data.