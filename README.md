# Milestone 1: Project Overview to summarize what was covered in the session.

## CodeAlong-E-commerce 
This propject is a follow along project which consists of a login, sign up , product, an orders page and a payment page.
The project is built using html, css, and reactjs
### Authorization
    The authorization folder is going to contain all the sign in, sign out , login and logout pages.

### Product page:
    This page will contain all the products, that can be browsed by the user.

### Orders page
    This page will contain all the orders made by the user.

### Payment Gateway
    This is the page where the user will enter their credentials to make a payment.


# Milestone 2: Setting up the frontend and the backend.

## Setting up the frontend
    1. $ npm create vite@latest frontend:
        Using this command we created a frontend folder inside which we are goin to be building our frontend application.
    
    2. $ npm install
        By using this command we install all the depedencies required for our frontend application.
    
    3. $ npm install -D tailwindcss postcss autoprefixer
        By using this command we install tailwindcss, postcss and autoprefixer which are required for styling our frontend. 

    4. $ npx tailwindcss init -p
        Command used to initialize tailwindcss in our project, so that we can use it for styling the webpage.

    With this our frontend is setup.

### Setting up the backend
    1. create a new folder called backend using
        mkdir backend
    
    2. Go to the backend folder and then initialize the depedencies using
       $ npm init -y    

    3. Now install express, mongoose, cors and nodmon by using the following commands:
        $npm i express mongoose cors nodemon

    With this the backend in setup

### Folder structure (frontend)
    1. Add a components folder inside the src folder.
    2. Add two folders named Authorization and Navbar inside the  components folder.
    3. Inside the the Authorization folderadd a Login.js and a Signup.js file for creating the login page.
