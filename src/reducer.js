import { SET_CARD2, SET_CARD3, SET_CARD4, SET_CARD5 } from "./Boilerplate"
import { addToArray } from "./functions"

export default function reducer(state, action) {
	switch (action.type) {
		case SET_CARD2:
			return {
				...state,
				card2: action.payload
			}

		case SET_CARD3:
			return {
				...state,
				// Тут в соответствии с логикой?
				card3: addToArray(state.card3, action.payload)
			}

		case SET_CARD4:
			return {
				...state,
				card4: action.payload
			}

		case SET_CARD5:
			return {
				...state,
				card5: action.payload
			}

		default:
			return {
				...state
			}
	}
}
