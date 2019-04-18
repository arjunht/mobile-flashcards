import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions'

export default function decks(state = {}, action) {
	switch(action.type) {
		case RECEIVE_DECKS :
			return {
				...state,
				...action.decks
			}
		case ADD_DECK :
			return {
				...state,
				[action.deck]: {
					title: [action.deck],
					questions: []
				}
			}
		case ADD_QUESTION :
			return {
				...state,
				[action.deck]: {
					...state[action.deck],
					questions: state[action.deck].questions.push(action.question)
				}
			}
		default :
			return state
	}
}