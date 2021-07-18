# Terminal Backend

###### In order to get to know the app better head over to [Wiki](https://github.com/adam-kostuch/terminal-backend/wiki)

---

### Table of Contents

1. [Instalation](#instalation)
2. [Heroku](#heroku)
3. [Endpoints](#endpoints)

### Instalation

In order to install follow the steps:

1. Copy `git clone https://github.com/adam-kostuch/terminal-backend.git`
2. Open _git bash_ in the directory in which you want to leave your project
3. Paste the code there
4. In the terminal write `cd ./terminal-backend` to enter project code
5. Download all the required packages using `npm install` or shortcut `npm i`
6. Then start the server using `npm run start:dev`
7. Enjoy coding! 🔥 :fire:

### Heroku

Our hosting for this application is [heroku](https://dashboard.heroku.com/)! To enter application visit [this](https://terminal-backend-service.herokuapp.com/) site. Next chapter will lead you through the endpoints.

### Endpoints

_Disclaimer: every response is expecting success, there are not wrong ones!_

#### - `/`

This endpoint is basically our main page for this message that drops simple message just to make sure that the app works correctly:

```javascript
Hello World
```

#### - `user/`

This endpoint means we're putting out all of our users that are registered in our database collection. Sample output:

```javascript
{
  "_id": "60e72573f3d5c625cc205c48",
  "firstName": "Name",
  "lastName": "Surnname",
  "email": "mail@mail.com",
  "password": "$2b$10$pYxO0IG8ROuWbwAOvepGmuyBa4EFo6TfP0SH70YrBAneYuIvY.VOW",
  "role": "User",
  "__v":0
}
```

#### - `user/register`

This one uses `POST` method to add new user to database. Input from body:

```javascript
{
  "firstName": "Name",
  "lastName": "Surname",
  "email": "mail@mail.com",
  "password": "StrongPassword123!",
  "role": "User"
}
```

and the output is (with the code _200_):

```javascript
Item with name Name succesfully saved to database
```

#### - `user/login`

Just like the _register_ endpoint _login_ uses `POST` method with the body attributes to send output the correct mail of our user thats trying to sign in. Input:

```javascript
{
  "email": "mail@mail.com",
  "password": "StrongPassword123!"
}
```

and the output is (with the code _200_):

```javascript
{
  "email": "mail@mail.com",
}
```

#### - `user/update`

Update is using `PUT` method for request and is changinng the data of item based on filter. Input from body:

```javascript
{
  "filter": "mail@mail.com",
  "firstName": "Name2",
  "lastName": "Surname2",
  "email": "mail2@mail.com",
  "password": "StrongPassword123!",
  "role": "User"
}
```

and the output is (with the code _200_):

```javascript
{
  "_id": "60e72573f3d5c625cc205c48",
  "firstName": "Name2",
  "lastName": "Surname2",
  "email": "mail2@mail.com",
  "password": "$2b$10$pYxO0IG8ROuWbwAOvepGmuyBa4EFo6TfP0SH70YrBAneYuIvY.VOW",
  "role": "User",
  "__v": 0
}
```

#### - `user/delete`

This is the last endpoint used by `user`. It simply deletes user by his email. Input from body:

```javascript
{
  "email": "mail@mail.com"
}
```

and the output is (with the code _200_):

```javascript
{
  "email": "mail@mail.com",
}
```

#### - `flight/`

Just like the `user/` endpoint this one returns all the flights in this database collection. Sample output is (with the code _200_):

```javascript
{
  "_id": "60eae2948487f62aa4e4ba26",
  "flightId": "WW154",
  "status": "Boarding",
  "departure": "Cracow",
  "arrival": "Warsow",
  "departureShortcut": "KRK",
  "arrivalShortcut": "WAW",
  "departureDate": "2021-11-07T16:50:00.000Z",
  "arrivalDate": "2021-11-07T20:00:00.000Z",
  "__v": 0
}
```

#### - `flight/add`

This endpoint simply adds another flight into our collection. To send this request we need to provide following data:

```javascript
{
  "flightId": "WW154",
  "status": "Boarding",
  "departure": "Cracow",
  "arrival": "Warsow",
  "departureShortcut": "KRK",
  "arrivalShortcut": "WAW",
  "departureDate": "11/07/2021 17:50",
  "arrivalDate": "11/07/2021 21:00"
}
```

and the output is (with the code _200_):

```javascript
Item with id WW154 succesfully saved to database
```

#### - `flight/update`

Just like the user one, this update is changing our data in collection based on provided filter. Sample input:

```javascript
{
  "filter": "WW154",
  "flightId": "WAW154",
  "status": "Boarding",
  "departure": "Cracow",
  "arrival": "Warsow",
  "departureShortcut": "KRK",
  "arrivalShortcut": "WAW",
  "departureDate": "11/07/2021 17:50",
  "arrivalDate": "11/07/2021 21:00"
}
```

#### - `flight/delete`

This last endpoint removes the data from the collection. You simply have to provide the `flightId` to remove it. Like so:

```javascript
{
  "flightId": "WAW154"
}

```

and the output is (with the code _200_):

```javascript
{
  "_id": "60eae2948487f62aa4e4ba26",
  "flightId": "WAW154",
  "status": "Boarding",
  "departure": "Cracow",
  "arrival": "Warsow",
  "departureShortcut": "KRK",
  "arrivalShortcut": "WAW",
  "departureDate": "2021-11-07T16:50:00.000Z",
  "arrivalDate": "2021-11-07T20:00:00.000Z",
  "__v": 0
}
```
