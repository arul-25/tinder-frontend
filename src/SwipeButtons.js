import React from "react"
import "./SwipeButtons.css"
import {Replay, Close, StarRate, Favorite, FlashOn} from "@material-ui/icons"
import {IconButton} from "@material-ui/core"

function SwipeButtons() {
	return (
		<div className="swipeButtons">
			<IconButton className="swipeButtons__repeat">
				<Replay fontSize="large" />
			</IconButton>

			<IconButton className="swipeButtons__left">
				<Close fontSize="large" />
			</IconButton>

			<IconButton className="swipeButtons__start">
				<StarRate fontSize="large" />
			</IconButton>

			<IconButton className="swipeButtons__right">
				<Favorite fontSize="large" />
			</IconButton>

			<IconButton className="swipeButtons__lightning">
				<FlashOn fontSize="large" />
			</IconButton>
		</div>
	)
}

export default SwipeButtons
