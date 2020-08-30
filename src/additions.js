export const toggleItem = (array, element) => {
	const newArray = array.slice()

	if (newArray.includes(element)) {
		newArray.splice(newArray.indexOf(element), 1)
		return newArray
	}

	newArray.push(element)
	return newArray
}
