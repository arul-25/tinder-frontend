import React from "react"
import "./Header.css"
import {Person, Forum} from "@material-ui/icons"
import {IconButton} from "@material-ui/core"

function Header() {
	return (
		<div className="header">
			<IconButton>
				<Person fontSize="large" className="header__icon" />
			</IconButton>

			<img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png" className="header__logo" alt="Tinder Logo" />

			<IconButton>
				<Forum fontSize="large" className="header__icon" />
			</IconButton>
		</div>
	)
}

export default Header
