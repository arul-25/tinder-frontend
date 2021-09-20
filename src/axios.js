import axios from "axios"

const instace = axios.create({
	baseURL: "https://arulproject-tinder.herokuapp.com"
})

export default instace
