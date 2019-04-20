import { AsyncStorage } from 'react-native';

export const FLASHCARDS_STORAGE_KEY = 'Knowledge:flashcards';

export function saveDeckTitle (deck) {
	return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
		[deck]: {
			title: deck,
			questions: []
	}}))
}