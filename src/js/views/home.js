import React, { useState, useEffect, setState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Personajes } from "../component/personajes.js";
import { Planetas } from "../component/planetas.js";
import PropTypes from "prop-types";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadPeople();
		actions.loadPlanet();
	}, []);
	console.log(store.peoples);
	return (
		<div className="container-fluid bg-dark">
			<h2 className="text-center text-warning">
				<strong>LA FUERZA ESTA CONTIGO</strong>
			</h2>

			<img
				src="https://downloadhdwallpapers.in/wp-content/uploads/2018/09/Star-Wars-Animated-Gif-Epic-Hot.gif"
				alt="..."
				className="float-center"
				width="100%"
			/>

			<div className="container-fluid bg-dark">
				<div className="align-items-center text-center">
					<div style={{ overflow: "auto" }}>
						<div className="row">
							<div className="d-flex bg-dark">
								{store.peoples.map((people, i) => {
									return (
										<div key={i}>
											<Personajes
												name={people.name}
												gender={people.gender}
												height={people.height}
												mass={people.mass}
												eye_color={people.eye_color}
												id={i}
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />

			<div className="align-items-center text-center">
				<div style={{ overflow: "auto" }}>
					<div className="row">
						<div className="d-flex">
							{store.planets.map((planet, i) => {
								return (
									<div key={i}>
										<Planetas
											name={planet.name}
											rotation_period={planet.rotation_period}
											orbital_period={planet.orbital_period}
											terrain={planet.terrain}
											climate={planet.climate}
											id={i}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
Home.propTypes = {
	data: PropTypes.any
};
