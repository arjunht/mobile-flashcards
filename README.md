# Mobile Flashcards Project

This is the the final assessment project for Udacity's React Native course.

## TL;DR

Installation and Launch Instructions

* install all project dependencies with `yarn install`
* start the development server with `yarn start`

The application requires only yarn install and yarn start to install and launch. npm can be used in place of yarn.

## Platform

The app functions correctly in an Android platform using Genymotion as your simulator

## Project Structure

```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── actions # Contains all the action creators
│   └── index.js
├── components # Contains all the components
│   ├── Deck.js
│   ├── DeckList.js
│   ├── NewDeck.js
│   ├── NewQuestion.js
│   └── Quiz.js
├── reducers # Contains the reducers for different parts of the store
│   └── index.js # This is the root of the reducers.
├── utils # Contains the utility file for the project
│   ├── colors.js
│   ├── _flashcard.js
│   ├── helpers.js
│   └── api.js # File represents a fake database and methods that let you access the data. Instructions for the methods are below.
├── App.js # This is the root of the app.
```

## AsyncStorage Database

There is one type of object stored in our database:

* Decks

The provided file [`api.js`](src/utils/api.js) contains the methods you will need to perform necessary operations on the AsyncStorage database:

* `getDecks()`
* `saveDeckTitle`
* `addCardToDeck`

1) `getDecks()` Method

*Description*: return all of the decks along with their titles, questions, and answers.  

2) `saveDeckTitle` Method

*Description*: take in a single title argument and add it to the decks.

3) `addCardToDeck` Method

*Description*: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

## Create React Native App

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). You can find more information on how to perform common tasks [here](https://github.com/react-community/create-react-native-app/blob/master/README.md).
