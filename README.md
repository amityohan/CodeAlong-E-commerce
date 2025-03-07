### Ecommerce Applications

## Milestone 1: Project Overview

1. User Authentication: The user can register or login.
2. Product Management: Can add, update or delete and also retrieve data about the products.
3. Orders page: This page shows the orders by the user.
4. Payment Gateway: This shows the payment to be done by the user.


## Milestone 2: Project Overview

**Frontend**
1. React: A javaScript library for building user interfaces, this was set up using the code (npm create vite@latest frontend).
2. Tailwind CSS: This was set up to make designs quickly and efficiently.

**Backend**
1. Express: This is a web framework for Node.js, this was set up using the code (npm install express).
2. Mongoose: This is mainly used to config the database with the backend, this was set up using the code (npm install mongoose).
3. Cors: This allows the web applications to access resources from different domains, this was set up using the code (npm install cors).
4. Nodemon: It helps in monitoring and a very faster development of Node.js, this was set up using the code(npm install nodemon).


## Milestone 3: Project Overview

 1. Set up specified folders which is used for the backend.
 2. Initialized and configured the Node.js server
 3. Connected to the MongoDB
 4. Provided clear error messages for debugging.


## Milestone 4: Project Overview

1. Created a user model which is like a blueprint to how the user's data will be stored in the database.
2. Created a user control which helps you manage whatever changes happens in your user data.
3. Enabled and configured multer which allows the app to accept the files which are uploaded by the user.

## Milestone 5: Project Overview

1. Created a sign up page where the user can enter their details i.e. to create a account this includes name, email, password.
2. Created a form validation which checks the entered information is correct and also in the right format, this basically prevents errors and ensures backend recieves clean and right data.

## Milestone 7: Project Overview

1. Encrypting of the password is done using bcrypt.
2. Bcrypt is basically used to hash the password entered by the user to ensure safety.
3. Created a login page which accepts user credentials such as username and password.
4. Using the credentials we fetch the user from the database.
5. Validation of password: This is done to compare the password entered by the user to the password which is stored in hash.
6. If the password matches we proceed with authentication if it is not authenticated we have to send an error to the user 

## Milestone 8: Project Overview

1. Created the Card Component: Designed a reusable card components , the card shows the details of the product such as name, image and price.
2. Designed the Homepage Layout: We created a flexbox or a grid layout which can be used to display many cards neatly.

## Milestone 9: Project Overview

1. Created a product input form.
2. This form allows users to add detailed information about new products that will be displayed on the product homepage.
3. Key Features:

    i)	Product Details Input:
	•	Users can provide essential details such as the product name, description, category, price, and stock quantity.
	ii)	Multiple Image Upload:
	•	The form supports uploading multiple images for a single product, enabling a comprehensive visual representation.

## Milestone 10: Project Overview

1.	Product Schema: Defines the structure of product data with validation.
2.	POST Endpoint: Allows for adding products with validation.
3.	Data Integrity: Ensures only valid data is saved.
4.	Future Enhancements: Features like admin access and shop profiles can be added.

## Milestone 11: Project Overview

1.	Wrote an endpoint that retrieves all products stored in MongoDB and sends it as a response.
2.	Receive the data on the frontend and display it dynamically.
3.	Pass the data to the ProductCard component to render each product dynamically.

## Milestone 12: Project Overview

1.	Wrote an endpoint that retrieved products from MongoDB, filtering them by the user’s email address.
2.	Fetched and received data on the frontend via an API call.
3.	Dynamically displayed the data on the frontend by passing it to the product card component we created earlier.

## Milestone 13: Project Overview

Backend Update

1. PUT Route for Updating Data:
   
• A PUT route was added to the backend API.

• This route allows updating the details of an existing product in the database.

Frontend Updates:

1. Button Added to Each Product Card:

• A button was added to each product card on the user interface.

• This button is used to open a form where the user can input new data for the product.

2. Form for Inputting New Data:

• When the button is clicked, a form pops up.

• The form allows the user to enter updated information for that specific product.

3. Data Submission to Backend:

• Once the form is submitted, the updated data is sent to the backend via the PUT route.

• The backend processes this request and updates the product’s data in the database.



## Milestone 14: Project Overview

1. Backend - Added a Delete Route Handler:

•	I wrote some code in the backend that handles a delete request. This means when you ask the server to delete something the server knows how to remove it from the database.

2.	Frontend - Created a Delete Button:

•	I added a delete button on the frontend (what the user sees). This button is usually next to each item  and lets the user choose to delete it.


## Milestone 15: Project Overview

1.	Reusable Nav Component
	
 •	A new navigation bar has been created with links to the following pages:

 •	Home

 •	My-products

 •	Add product
 
 •	Cart
	
 2.	Responsive Design
	
 •	The Nav component is fully responsive, adapting seamlessly to all screen sizes.
 
 •	A mobile-friendly hamburger menu is implemented for smaller devices.

## Milestone 16: Project Overview

1. We created single product page which gives the details of single product
2. We created Image Modal component.

## Milestone 17: Project Overview

1. Cart Schema (cart.model.js)

• 	Defines the database structure for storing cart data. It includes fields such as productId, quantity, and userId to track the products and their association with users.

2. Cart Route (cart.route.js)

• 	Provides a dedicated route /add-to-cart, which connects to the AddToCartController for handling product additions to the cart.

3. Cart Controller (cart.controller.js)

Handles the business logic for adding items to the user’s cart:

	•	Validates productId and userId to ensure proper input.

	•	Checks if the product is already present in the user’s cart.

	•	If validation passes, the product is added to the cart.

4. Middleware (jwt-verify.js)

•	Verifies user authentication by checking the provided token. Once validated, it attaches the userId to the request for further processing of cart-related actions.

5. Integration in app.js

•	Registers the cart routes under the /cart path, ensuring that all endpoints related to the cart are accessible.

## Milestone 18: Project Overview

1. Cart Route (cart.route.js)

•	Introduces the /get-user-cart-data endpoint, which is linked to the GetProductsForUser controller. This endpoint is designed to retrieve items from the user’s cart.

2. Cart Controller (cart.controller.js)

Handles the logic for fetching cart items for authenticated users:

•	Confirms the validity of the provided userId.
•	Retrieves the user’s cart data from the database to ensure accurate and up-to-date information.

## Milestone 19: Project Overview

•	Created Cart Forntend Page and displayed the products.
•	Fetched the card details of the user

## Milestone 20: Project Overview

•	Created a Backend endpoint which sends us the user data

•	In frontend, created a page where we can view our profile

•	In the profile page the photo, name and email is displayed in a section

• 	In the same page but in another section we have displayed address and a button to 
	add the address

•	And if there is no address , "No address found" will be displayed

## Milestone 21: Project Overview

• Created a frontend part for the address information where the user can enter the address

## Milestone 22: Project Overview

• Created a backend endpoint that will store the address which is entered by the user inside the userprofile in database.

• User authentication for adding the address details.

• After the address is added it is displayed in the user profile list.

## Milestone 23: Project Overview

• Created a placeorder button inside cart page.

• When the placeorder is clicked it's navigated to the select address page.

• Created a page that will display all the available address, this also an option to select any one of the address.

• Created a backend endpoint that will send all the saved addresses of the user.

## Milestone 24: Project Overview

• In this we created a order confirmation page in which it has all the products which was already added in the cart and also it shows the total amount of the products which is there in the cart.

## Milestone 25: Project Overview

• We created an endpoint that receive the details of the products, user and also the address.

• Also we have created a mailing system i.e., you will retrive the id of the user.

• Also each products are different and have the same address 

• Also created a order schema whihc helps to store the order details easily in the database

## Milestone 26: Project Overview

• We created an endpoint that will recieve user emails.

• Using the id we get to know what they have ordered.

. We also sent all the orders in the response.

## Milestone 27: Project Overview

• Created my orders page.

• Display all the orders in the orders page.

• Adding my orders page in the navigation bar to make it easily accessible.

## Milestone 28: Project Overview

• In orders page added cancel button.

• If the order was cancelled the button is not displayed.

• Created an endpoint to recieve the order-id.

• Get the order using the id and marking the status cancel once its cancelled.

## Milestone 29 and 30: Project Overview

• In this milestone, the Razorpay payment gateway has been integrated into the project. Users can make payments for their orders seamlessly. The backend handles payment processing, while the frontend provides a smooth user experience for completing transactions.

1. Backend Changes

• Payment Route:

i) Created Payment.route.js to handle payment-related API endpoints.

• Payment Controller:

i) Implemented Payment.controller.js with logic for creating and processing payments.

ii) API to create an order and process payment.

iii) Logging added for debugging Razorpay key verification.

• Payment Model:

i) Defined Payment.model.js to store payment-related data.

• App Configuration:

i) Integrated payment routes into app.js.

ii) Updated .env file with Razorpay API credentials for security.

2. Frontend Changes

• Payment SDK Integration:

i) Added Razorpay checkout script in index.html.

• Utility for Razorpay:

i) Created Razorpay.js to handle payment requests and responses.

• Order Confirmation Page:

i)Integrated handlePay function to initiate payments.

ii)Displays total amount before proceeding to payment.

iii)Redirects users to order history upon successful payment.

3. API Endpoints

• POST /payment/create-order:

i)Creates an order in Razorpay with the specified amount.

• POST /payment/pay-order:

i)Processes payment and stores transaction details.

• GET /payment/get-razorpay-key:

i)Fetches Razorpay public key for frontend integration.

## Milestone 31: Project Overview

• Use Redux to store and manage the user's email across the application.

• Ensure components can access and update global state efficiently without prop drilling.

• Structure the application to handle state management in a scalable and organized manner using Redux.

## Milestone 32: Project Overview

1.	Global State:
	
•	Redux Toolkit stores user email in UsersSlice upon login.

•	useSelector retrieves user info across components.

2.	Cart Management:

•	Fetches cart data from backend.

•	Redux stores cart info, showing dynamic item count.

3.	Order History:

•	API fetch for past orders.

•	Redux tracks and manages order data.

4.	Order Confirmation:

•	Retrieves total price, address, and cart items via useSelector.

5.	Product Entry:

•	Manages product name, price, quantity, and category with useState.

•	Redux stores product info and user-related data.

6.	Address Selection:

•	Fetches user addresses via API.

•	Redux stores and dynamically accesses addresses.

7.	Profile Management:

•	API fetch for user details.

•	Redux manages user info and allows address deletion.

## Milestone 33: Project Overview

•	User Login: Generates JWT tokens for authentication.

•	Token Generation: Uses generateToken with environment-based secret keys.

•	Secure Cookies: Stores JWT in HTTP-only, secure, SameSite-Strict cookies.

•	Response Update: Sends login success message with token.

•	Security Features: Protects against XSS & CSRF, ensures HTTPS-only cookies.

•	Token Expiry: Manages session duration with defined expiration.