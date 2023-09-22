import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "./../component/contactCard";

export const Agenda = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		

			actions.loadContacts(params.agendaId);
	
	}, [])
			console.log('funciona',store.contacts)
	return (

		<div className="container-fluid">
			<div className="col-3 mx-auto">
				<select className="form-select" onChange={(event) => actions.loadContacts(event.target.value)}>
					{
						store.agendas ? store.agendas.map((index) => <option value={index}>{index}</option>) : <option value="">Blank</option>
					}
				</select>
			</div>
			<div className=" d-flex align-items-center justify-content-center">
				<div className="p-2 ">
					<h2>{params.agendaId || store.currentAgenda}'s Agenda</h2>
				</div>
				<div className="p-2">
					<Link to="/new">
						<button type="button" className="btn btn-success" >Create New</button>
					</Link>
				</div>

			</div>
			<div className="col-10 mx-auto d-flex flex-column">

				<div className="">
					{

						store.contacts ? store.contacts.map((contact, index) => <ContactCard contactId={contact.id} index={index} fullName={contact.full_name} street={contact.address} phone={contact.phone} mail={contact.email} />) : "There are no contacts availables"
					}
				</div>
			</div>
		</div>
	);
};
