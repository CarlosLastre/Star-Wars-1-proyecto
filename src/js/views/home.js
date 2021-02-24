import React, { useState, useEffect, setState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "/workspace/react-hello-webapp/src/js/store/appContext.js";
import { Personajes } from "../component/personajes.js";
import { Planetas } from "/workspace/react-hello-webapp/src/js/component/planetas.js";
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
				src="data:image/png;base64,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"
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
