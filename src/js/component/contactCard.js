import React, { useState, useEffect,useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
library.add(fas, faTwitter, faFontAwesome)
export const ContactCard = (props) => {
	const { store, actions } = useContext(Context);
	return (
		/*<a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
			<img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
			<div className="d-flex gap-2 w-100 justify-content-between">
				<div>
					<h6 className="mb-0">{props.fullName}</h6>
					<p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
				</div>
				<small className="opacity-50 text-nowrap">now</small>
			</div>
		</a>)*/

		<div className="row mx-auto w-100 border border-2 border-dark py-2 my-2">

			<div className="col-2">
				<img src="https://github.com/twbs.png" alt="twbs" width="150" height="150" className="rounded-circle flex-shrink-0" />
			</div>
			<div className="col-7">
				<p className="display-5">{props.fullName}</p>
				<div className="list-group">
					<p className="m-1"><FontAwesomeIcon className="me-3" icon="fa-solid fa-location-dot" size="lg" />{props.street}</p>
					<p className="m-1"><FontAwesomeIcon className="me-3" icon="fa-solid fa-phone" size="lg" />{props.phone}</p>
					<p className="m-1"><FontAwesomeIcon className="me-3" icon="fa-solid fa-envelope" size="lg" />{props.mail}</p>
				</div>
			</div>
			<div className="col">
				<Link to={"/contact/" + props.index}>
				<button className="btn border-0" ><FontAwesomeIcon icon="fa-solid fa-pencil" size="lg" /></button>
				</Link>
			</div>
			<div className="col">
				<button className="btn border-0" onClick={() => actions.deleteContact(props.contactId)}><FontAwesomeIcon icon="fa-solid fa-trash-can" size="lg" /></button>
			</div>
		</div>

	)
};
