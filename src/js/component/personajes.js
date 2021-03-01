import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Personajes = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card mx-4 fluid bg-dark">
			<div className="card bg-dark">
				<div className="card" style={{ width: "18rem" }}>
					<img
						src="https://i.pinimg.com/564x/bd/8d/20/bd8d20f8c0be7846bdf2a2fb7ade78ff.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body bg-dark">
						<h5 className="card-title text-white">
							<h2 className="text-warning">Personaje</h2>
							<strong>
								<h3 className="text-warning">{props.name}</h3>
							</strong>
						</h5>
						<p className="card-text text-white">
							<img
								src="https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/04/star-wars-juegos.gif"
								className="card-img-top"
								alt="..."
							/>
						</p>
						<div className="d-flex justify-content-between">
							<Link to={`/detallePersonajes/${props.id}`}>
								<button className="btn btn-primary bg-dark">
									<h5 className="text-warning">Aprende mas...</h5>
								</button>
							</Link>
							<Link onClick={() => actions.addFavorite(props.name, "persona")}>
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

//Validando props
Personajes.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	eye_color: PropTypes.string,
	id: PropTypes.number
};
