

# Real Estate Project

Real Estate website is a clone of Magicbricks where a user can browse and see various properties available in that location. User can filter properties based on location and status.

User can Search a property based on City, Property Type and Price.

User can also post a property from Post Property page. User can also give a Feedback and ask for a Legal Advice.


## Features of this project

- User Login and Registration
- User MyProfile page
- User Authentication
- User can Post Properties
- Property filter based on City and Status
- Search functionality with Location, Property Type and Price 
- Complete information redarding a particular Property
- Help center, T&C and Privacy Policy page
- User can Post Feedbacks
- User can Contact Owner
- Having tools like Legal Advice, EMI Calculator, Unit Converter


## Tech Stack

**Client:** React Js, Context Api, Sass, Bootstrap

**Server:** Node Js, Express Js

**Database:** MongoDB


## Software Requirements

To run this project in your machine, following software need to be installed in your system.
If you don't have Admin access, first reach out to support team to get Admin access.

- [Git](https://git-scm.com/downloads)
-  [NodeJs](https://nodejs.org/en/download)
- [Vscode](https://code.visualstudio.com/download)
- [MongoDB](https://www.mongodb.com/try/download/community)


## Installation

First clone this project.

```bash
 git clone https://github.com/dhing-palak/Real-Estate-Project.git
```

Open this project in Vscode and move to real-estate-project directory.

```bash
 cd real-estate-project
```

Now you need to move to branch feature/login-register-pages.   


```bash
 git checkout feature/login-register-pages
```

Now move to root directory and use the following commands to install all the dependent packages in project. After executing this command, node modules folder is created inside root directory.

```bash
 cd root
 npm install
```

If you get any linting and prettier warning then use the following commands.

```bash
 npm run pretty
 npm run lint
 npm run lint:fix
```
Now open MongoDB compass and click on connect. Once MongoDB is connected run the following command to start the project. 

```bash
 npm start
```
## Folder Structure

- Once you clone the project, root is the parent folder for this project. So if you want to add any packages or dependencies, you need to first come inside root folder.

- Backend folder will contain all the code related to backend.

- src folder contain all the code related to clint side.

**Backend**
- Inside backend folder their are other folders which contain code related to backend.

- app.js inside backend is the starting point of backend. When backend runs, first control goes to app.js and the the files inside this will call accordingly.

- Inside "db" folder the code for connection with database is written.

- Inside "middleware" folder the logic for authentication is written. For checking Authentication user token is verified which is generated at the time of registration.

- Inside "model" folder all the schemas are defined.

- Inside "router" folder all the server side routes and api endpoints are defined.

**Client**
- Inside src folder all the code for client side is written.

- "test" folder will contain all the test cases. to run the test cases use the command.

```bash
 npm run test
```
- Inside "api" folder all the client side api's are defined.

- Inside "common" folder the code which is commonly used in application are defined.

- Inside "components" folder all the components are defined.

- Inside "images" folder all the images which are used in this project are defined.

- Inside "pages" folder all the pages are defined.

- Inside "state" folder, the code for Global State Management is Defined.

- In this project React Context Api is used for global state management.

- Whichever the state whose data need to access in different components need to define here.

- Inside "styles" folder all the style code is defined. For Styling, Saas is used in this project.

- Inside "validation" folder, all the code related to form validation is defined.


## Code Quality

For code quality, Prettier and Eslint is used in this project.


## Detail Description and Working


**Login and Registration Page**

- If user is visiting first time in this project, then need to do registration first. User need to provide a valid email address and password  should contain alphanumeric character with minimum length of 6 characters.

- When user do the registration successfull, the data will be store in MongoDB. Database name is Estate and Collection is users.

- For security purpose user password is store in Encrypted form. For this Bcrypt library is used.

- Once the user is registered, a unique token is generated which is stored in cookie. This token is used for user Authentication. For generating this token JWT is used.

- After successfull registration user can login in website. After login, user will redirect to home page where user can see all the properties listed.

**Home Page**
- In Home page all the properties which are listed are shown.
 
- User can check detail description of property by clicking on a particular property.

- User can contact owner by clicking on Contact Owner button. Details of user will be stored in Usercontacts schema.

**Search Functionality**
- User can search a property based on City, Property Type and Price.  

**Property Filteration**
- User can filter the properties based on the City Dropdown.

- User can also filter property based status of property. Like Ready to move and Under Construction. This option is present in Buy option inside Sub Header.

**MyProfile Page**
- User can visit MyProfile page and see their personal details.

- This page is only visible if user is already logged in otherwise it will redirect to login page.

**Post Property Page**
- This page is used to post the properties. Once the property is posted, the date is stored in postproperties schema.

- All the properties which are present in database will be display in Home page.

- All fields are mandatory to post a property.

**Sub Header**
- Inside Sub header 4 options are present for Buy, Sell, Help and Tools.

- Inside Buy option, user can filter property based on property status.

- Inside sell option, user can view their profile and user can access post property page.

- Inside Help option, user can access Help page, T&C page, Privacy Policy page and Feedback page.

- Inside Tools option, user can access tools like Legal Advice Check, Unit Converter, EMI Calculator.

**FeedBack Page**
- User can send feedback. This page is accessible only if user is already logged in otherwise it will redirect to the login page.

**Tools**
- Inside tools option user can access tools.

- Legal Advice check is a tool so that user can ask a question. This tool is only accessible if user is already logged in otherwise it will redirect to login page.

- Unit Converter tools is used to convert units.

- EMI Calculator is used to calculate EMI.





