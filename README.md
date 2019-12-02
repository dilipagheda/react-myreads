# MyReads Project

This is the first project as part of the Udacity's React Nanodegree. The goal of this project to add interactivity to the app by refactoring the static code provided in the starter template. As part of adding interactive, all components are built from scratch along with designing state management and how the data flows through parent to child components.

Notes:
* As user types in the search bar, app employes throttle & debounce techniques to limit the number of network calls.

## Components
* Book.js : Renders an individual book
* BookCover.js: Render an image as a book cover
* BookShelf.js: Renders an entire bookshelf.
* MainPage.js: Renders landing page and displays three different bookshelves.
* SearchPage.js: Renders a search page

## How to run this project locally

* Clone this project to your local
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Run it via Docker
- You can pull the public image for this project via https://hub.docker.com/repository/docker/dilipagheda/myreads.  
- Map port 3000 and then do `docker run dilipagheda/myreads`
- access it via localhost:3000

## Deployment to AWS
This project is configured to deploy it to AWS. I have created a Dockerfile to containerize the application and also Dockerrun.aws.json file to deploy to AWS via Elastic Beanstalk. I deployed it and tested that it works. It is not running on AWS at the moment though to avoid billing!

## File Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Backend Server

Backend logic is in the file [`BooksAPI.js`](src/BooksAPI.js) which contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. 

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
