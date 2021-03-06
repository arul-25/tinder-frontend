import React, {useEffect, useState} from "react"
import TinderCard from "react-tinder-card"
import "./tinderCards.css"
import axios from "./axios"

function TinderCards() {
	const [people, setPeople] = useState([])

	const swiped = (direction, nameToDelete) => {
		console.log("removing " + nameToDelete)
	}

	const outOfFrame = name => {
		console.log(name + " left the screen!")
	}

	useEffect(() => {
		async function fetData() {
			const req = await axios.get("/tinder/cards")
			setPeople(req.data)
		}

		fetData()
	}, [])

	console.log(people)

	return (
		<div className="tinderCards">
			<div className="tinderCards__cardContainer">
				{people.map(person => (
					<TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]} onSwipe={dir => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
						<div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	)
}

export default TinderCards
