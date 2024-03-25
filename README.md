# Forward-Security-Notes-Page-Application

Notes webpage created for assessment purposes. For submission purposes, I have made it possible for the user to access this application either locally or through Docker. If the user wishes to run this application through a local file, please access the `Note Page Application Local Version` folder if the user wishes to run this application through a Docker container please access the `Note Page Application Docker Version` folder. There are instructions within each of these folders to help the user run this application on their setup.

# Usage

### Creating a Note
To add a note, the user can click on the add note button on the top left of the webpage. A pop-up form will appear for the user to fill out. To create a note, the user can click on the Add Note button within the form.

### Viewing a Note

To view a note, a user can click on the note's preview on the left hand sidebar which has a list of all the user created notes. Then the note will appear on the right side after the user clicks on the note preview.

### Editing a Note
To edit a note, the user must first click to view the note which they wish to edit. The user can then click on the edit button on the top right, then the user will be given a form to fill out. Once the edit is complete, the user can click on the Edit Note button within the form to submit the changes.

### Delete a Note
To delete a note, the user must first click to view the note which they wish to delete. The user can then click on the delete button on the top right of the webpage to delete the note.

# Setup for Local and Docker

### Local Setup Instructions

1. Get the repository through this command:

    `git clone https://github.com/johnsonwlu/Forward-Security-Notes-Page-Application.git`

2. Open Two Terminals

3.  Navigate to the `Forward-Security-Notes-Page-Application` folder through the terminal and then start up the frontend in the first terminal by writing down the following commands:

    `cd notes-page-application-frontend`

    `npm install`

    `npm start`

4.  Navigate to the `Forward-Security-Notes-Page-Application` folder through the terminal and then start up the backend in the second terminal by writing down the following commands:

    `cd notes-page-application-backend-server`

    `npm install`

    `npm start`

5.  The user can now go to their local browser and enter the following to access the notes page: http://localhost:3000/

### Docker Setup Instructions

For this assessment, I have submitted the Docker containers as .tar files. Please do the following within this folder to run the application through Docker:

1. Download the `Dockers Containers` zip file

2. Unzip the downloaded file and then open up a terminal

2. In the terminal please navigate to the `Docker Containers` folder within the unzipped file (it is possible that the unzipped file will also be named `Docker Containers` so please navigate to the `Docker Containers` folder within the folder named `Docker Containers` if there is one) and use the following commands:

    `docker load -i frontend.tar`

    `docker load -i backend.tar`

    These two commands above serve to load the Docker containers for both the frontend and the backend

    if the user is facing permission issues, please type in the following two commands instead (the user will also be prompted for their admin password in this scenario):

    `sudo docker load -i frontend.tar`

    `sudo docker load -i backend.tar`

3. Finally in the terminal, please use the following command:

    `docker-compose up`

    if the user is facing permission issues, please type in the following command instead (the user might be prompted for their admin password in this scenario):

    `sudo docker-compose up`

    Due to the fact that this application has a need for a local storage, I create a docker-compose file which serves to run the two Docker containers while also creating a local storage for the backend Docker container to both create and manipulate data.

4.  The user can now go to their local browser and enter the following to access the notes page: http://localhost:3000/

# Design Choice and Technology Usage

### Frontend Technology
I made use of HTML, CSS and JavaScript to handle both frontend functionality and styling. I used React to help me create individual components that could be used within the frontend.

### State Management with Redux
I made use of Redux and Redux store to maintain the state of the notes within the application. With the use of Redux I was able to manage the application state of inidividual notes across different components

### Backend Technology and RESTful API
I made use of Node.js as the backend and Express.js as the server. With Express.js, I was able to create a RESTful API to communicate between the frontend and backend to create, read, update and delete notes. 

# Challenges

There was some challenges with the creation of the Docker container due to the fact that I am using a local file as a storage means rather than a database such as MongoDB. Docker containers do not have permission to access local text files which made it impossible for me to use a local file to store my data. To overcome this, I made use of Docker volumes which is a feature for Docker containers to access and modify data files outside of the containers that are currently running. There are two versions of this application code. The Docker version utilizes Docker volume to store data whereas the non-Docker version utilizes a local txt file to store data.

# Future Plans

Given the opportunity to improve upon this project, I would improve on the following:

- My application is currently dependent on either a local txt for or Docker volumes as a means to store my data. I would change the backend component such that it uses a backend server such as MongoDB which would help the scalability, fault tolerance and the overall application performance.

- I also plan on changing the CSS layout such that the webpage is more easily accessible on various other platforms such as mobile phones and tablets.

- As of the creation of this application, I have mainly relied on manual testing, however, for the future I would create more automated tests if I plan to make the project larger in order to simplify the testing process.



