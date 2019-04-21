import { AsyncStorage } from 'react-native';
import { FLASHCARDS_STORAGE_KEY, formatFlashcardResults } from './_flashcard';

export function getDecks () {
	return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
		.then(formatFlashcardResults)
}

export function saveDeckTitle (deck) {
	return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
		[deck]: {
			title: deck,
			questions: []
	}}))
}

export function addCardToDeck ({deckTitle, card}) {
	return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
		.then((results) => {
			const data = JSON.parse(results)
			data[deckTitle]['questions'] = data[deckTitle]['questions'].concat([card])
			AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
		})
}