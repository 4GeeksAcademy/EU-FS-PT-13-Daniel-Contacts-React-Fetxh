import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "./../component/contactCard";

export const Agenda = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (params.agendaId) {
			actions.loadContacts(params.agendaId);
		}
	}, [])

	return (
		<div>
			<select onChange={(event) => actions.loadContacts(event.target.value)} >
				{
					store.agendas ? store.agendas.map((agenda, index) => <option value={agenda} > {agenda} </option>) : <option value="">Blank</option>
				}
			</select>

			<div className="d-flex flex-column align-items-center justify-content-center">
				<div className="p-2 ">
					<h2> New name is: {store.name}</h2>
					<Link to={"/display_contact"}>
						<span>See the contact page</span>
					</Link>
					<h2>{params.agendaId || store.currentAgenda}'s Agenda</h2>
				</div>

			</div>
			<div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">

				<div className="list-group">
					{
						store.contacts ? store.contacts.map((contact, index) => <ContactCard key={index} fullName={contact.full_name} />) : "There are no contacts availables"
					}
				</div>
			</div>
		</div>
	);
};
