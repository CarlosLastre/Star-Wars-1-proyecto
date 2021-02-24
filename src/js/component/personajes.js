import React, { Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Personajes = props => {
	return (
		<div className="card mx-4 fluid bg-dark">
			<h1 className="text-warning">Personajes</h1>
			<br />
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://i.pinimg.com/564x/bd/8d/20/bd8d20f8c0be7846bdf2a2fb7ade78ff.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body bg-dark">
					<h5 className="card-title text-white">
						<strong>{props.name}</strong>
					</h5>
					<p className="card-text text-white">
						<strong>Name: &nbsp;</strong>
						{props.name}
						<br />
						<strong>Gender: &nbsp;</strong>
						{props.gender}
						<br />
						<strong>Height: &nbsp;</strong>
						{props.height}
						<br />
						<strong>Mass: &nbsp;</strong>
						{props.mass}
						<br />
						<strong>Eye_color: &nbsp;</strong>
						{props.eye_color}
					</p>
					<div className="d-flex justify-content-between">
						<Link to={`/detallePersonajes/${props.id}`}>
							<i className="fas fa-jedi">Aprende mas...</i>
						</Link>
						<a className="float-right fa-2x color: red" href="#" role="button">
							<i className="far fa-heart text-danger" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

//Validando props
Personajes.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	eye_color: PropTypes.string,
	id: PropTypes.number
};
