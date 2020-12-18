# **Project 4**

Wheel Of Fortune -  guess hidden phrases by guessing letters one at a time.

### Installation

No installation

### &#x1F535; APP URL

<a href="https://wheel-of-reaction.herokuapp.com/" target="_blank">Wheel of Reaction</a>

### GitHub Project Repo

<a href="https://github.com/d-mayo/project4-frontend/" target="_blank">React Frontend</a><br>
<a href="https://github.com/ycjessie/project4-backend/" target="_blank">Express MongoDB Backend</a>

### &#x1F535; Project Team

Design - Development - Layout

<ul>
<li>Jessie Chen</li>
<li>Lawrence DeMaio</li>
<li>Cory Trast</li>
</ul>

### &#x1F535; Approach

<ul>
<li>We had a planning meeting to dicuss and generate user stories and technologies to use</li>
<li>We worked independently on backend/frontend also collaboratively with pair programming on UI styling  </li>
</ul>

### &#x1F535; User Stories
* As an admin user, can seed the database
* As an admin user, can create new categories with phrases to the database
* As an admin user, can delete categories
* Stretch - As a user can run the Mocha javascript testing

### &#x1F535; Routes -CRUD functionality for Categories and Phrases
 
GET - All Categories
https://project-4-wheel-of-fortune.herokuapp.com/

POST - New Category - with phrases
https://project-4-wheel-of-fortune.herokuapp.com/new

DELETE - Category
https://project-4-wheel-of-fortune.herokuapp.com/{cat_id}

GET - Random Category
https://project-4-wheel-of-fortune.herokuapp.com/getRanCat

PUT - Update Category/Phrases
https://project-4-wheel-of-fortune.herokuapp.com/{cat_id}


### &#x1F535; **Technologies Used**

Frontend

<ul>
<li>HTML - Hyper Text Mark Up Language </li>
<li>CSS, <a href="https://react.semantic-ui.com/" target="_blank">Semantic UI React</a></li>
<li><a href="https://reactjs.org/" target="_blank">React</a>  the JavaScript library for building user interfaces</li>


</ul>
Middleware
<ul>
<li>Environment file Credential(.env) </li>
<li>Express <a href="https://expressjs.com/en/resources/middleware/cors.html" target="_blank">CORS</a></li>

</ul>
Backend 
   <ul>
   <li><a href="https://www.nodejs.org/" target="_blank"> Node.js</a></li>
   <li>RESTful Routes <ul>
   <li>Route methods<a href="https://expressjs.com/" target="_blank"> Express.js</a>
   <li>Route Testing<a href="https://www.postman.com/" target="_blank"> Postman</a></li></li></ul>
   <li>Database - AWS hosted<a href="https://www.mongodb.com/" target="_blank"> MongoDB</a></li>
   <li>Data Modeling<a href="https://www.mongoose.com/" target="_blank"> Mongoose ODM</a></li>
   <ul>
      <li>Model/Schema</li>
      <li>MongoDB connection</li>
      <li>Authentication</li>
      <li>Authorization</li>
   </ul>
   <li>Javascript Test Framework<a href="https://mochajs.org/" target="_blank"> Mocha</a> </li>

</ul>

DevOps

<ul>
<li>Heroku - Platform as a service (PaaS) used to build and deploy applications</li>
</ul>

### &#x1F535; **Mocha Testing**

![Mocha](https://github.com/ycjessie/project4-backend/blob/master/public/image/Mocha%20testing1.png)
![Mocha](https://github.com/ycjessie/project4-backend/blob/master/public/image/Mocha%20testing2.png)

### &#x1F535; Future Enhancement

<ul>
<li>Save the Game</li>
<li>Multiple players over the web</li>
</ul>
