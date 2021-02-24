import React, { Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Planetas = props => {
	return (
		<div className="card mx-4 bg-dark">
			<div className="card bg-dark">
				<h1 className="text-warning">Planetas</h1>
				<br />
				<div className="card" style={{ width: "18rem" }}>
					<img
						src="https://i.pinimg.com/564x/14/bf/42/14bf428e382cb2dfa752e1f674d8a32d.jpg"
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
							<strong>rotation: &nbsp;</strong>
							{props.rotation_period}
							<br />
							<strong>orbital: &nbsp;</strong>
							{props.orbital_period}
							<br />
							<strong>terrain: &nbsp;</strong>
							{props.terrain}
							<br />
							<strong>climate: &nbsp;</strong>
							{props.climate}
						</p>
						<div className="d-flex justify-content-between">
							<Link to={`/detallePlanetas/${props.id}`}>
								<button className="btn btn-primary">Apende mas...</button>
							</Link>
							<a className="float-right fa-2x color: red" href="#" role="button">
								<i className="far fa-heart text-danger" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Planetas.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	rotation_period: PropTypes.string,
	orbital_period: PropTypes.string,
	terrain: PropTypes.string,
	climate: PropTypes.string,
	id: PropTypes.number
};
