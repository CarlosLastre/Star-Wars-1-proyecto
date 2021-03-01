import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Planetas = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card mx-4 bg-dark">
			<div className="card bg-dark">
				<div className="card" style={{ width: "18rem" }}>
					<img
						src="https://i.pinimg.com/564x/14/bf/42/14bf428e382cb2dfa752e1f674d8a32d.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body bg-dark">
						<h5 className="card-title text-white">
							<h1 className="text-warning">Planeta</h1>
							<strong>
								<h3 className="text-warning">{props.name}</h3>
							</strong>
						</h5>
						<p className="card-text text-white">
							<img
								src="https://steamuserimages-a.akamaihd.net/ugc/865113185712647003/7F7433319103C512CD9150C27DF77DC0A4468CC5/"
								className="card-img-top"
								alt="..."
							/>

							<br />
						</p>
						<div className="d-flex justify-content-between">
							<Link to={`/detallePlanetas/${props.id}`}>
								<button className="btn btn-primary bg-dark">
									<h5 className="text-warning">Aprende mas...</h5>
								</button>
							</Link>
							<Link onClick={() => actions.addFavorite(props.name, "planeta")}>
								<a className="float-right fa-2x color: red" href="#" role="button">
									<i className="far fa-heart text-danger" />
								</a>
							</Link>
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
