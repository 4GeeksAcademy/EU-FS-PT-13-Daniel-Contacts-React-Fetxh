import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Newone = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const [nome, setNome] = useState(nome);
    const [email, setEmail] = useState(email);
    const [telemovel, setTelemovel] = useState(telemovel);
    const [morada, setMorada] = useState(morada);
   
    return (
        <div className="container-fluid">
            <div className="col-10 p-3 mx-auto border border-2 border-dark ">


                <div className="mb-3">
                    <label for="fullname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullname" placeholder="Full Name" onChange={(e) => setNome(e.target.value)} value={nome} />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} value={email}></input>
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter Phone" onChange={(e) => { setTelemovel(e.target.value) }} value={telemovel}></input>
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Address" onChange={(e) => { setMorada(e.target.value) }} value={morada}></input>
                </div>
                <div className="mb-3">              
                <button type="submit" className="btn btn-primary" onClick={() => actions.newContact(nome, morada, email, telemovel)}>Save</button>
                </div>
                <div className="mb-3">
                <Link to="/">
                    <span className="" href="#" role="button">
                        or get back to Contacts
                    </span>
                    
                </Link>
                </div>
            </div>
        </div>
    );
};