import { AsyncStorage } from 'react-native';

export const FLASHCARDS_STORAGE_KEY = 'Knowledge:flashcards';

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