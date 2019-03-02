# Meal-Booking

[![Build Status](https://travis-ci.com/damikanye/Meal-Booking.svg?branch=develop)](https://travis-ci.com/damikanye/Meal-Booking)

[![Maintainability](https://api.codeclimate.com/v1/badges/75aeecbad97de64ec919/maintainability)](https://codeclimate.com/github/damikanye/Meal-Booking/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/75aeecbad97de64ec919/test_coverage)](https://codeclimate.com/github/damikanye/Meal-Booking/test_coverage)

[![Coverage Status](https://coveralls.io/repos/github/damikanye/Meal-Booking/badge.svg?branch=master)](https://coveralls.io/github/damikanye/Meal-Booking?branch=master)

Meal booking app.
[UI hosted on gh-pages](https://damikanye.github.io/Meal-Booking/frontend/index.html)

## API setup

- git clone into your repo
- cd into the api folder
- npm install
- npm start (server hosted on port 3000)

## API Endpoints

### Meals

- GET meals _/api/v1/meals_
- GET single meal _/api/v1/meals/:id_
- POST meal _/api/v1/meals/_
- PUT meal _/api/v1/meals/:id_
- DELETE meal _/api/v1/meals/:id_

### Orders

- GET orders _/api/v1/orders_
- GET single order _/api/v1/orders/:id_
- POST order _/api/v1/orders/_
- PUT order _/api/v1/orders/:id_

### Menu

- GET menu _/api/v1/menu_
- POST menu _/api/v1/menu/_
- PUT menu _/api/v1/menu/:id_

# Trello Board

Project is currently being built with the Project Management Tool. You can find the link https://trello.com/b/z6ye2AIn/alcwithforloop

#Testing

# Prerequisites

Postman - API Toolchain

# Testing with Postman

After installing 

Navigate to localhost:9000 in Postman to access the application

# Features

1. Users can create an account and log in
2. Admin (Caterer) should be able to manage (i.e: add, modify and delete) meal options in
the application. Examples of meal options are: Beef with rice, Beef with fries etc
3. Admin (Caterer) should be able to setup menu for a specific day by selecting from the
meal options available on the system.
4. Authenticated users (customers) should be able to see the menu for a specific day and
select an option out of the menu.
5. Authenticated users (customers) should be able to change their meal choice.
6. Admin (Caterer) should be able to see the orders made by the user
7. Admin should be able to see amount of money made by end of the day.
