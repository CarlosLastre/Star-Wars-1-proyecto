import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Planetas } from "../component/planetas.js";

export const Planetassvista = () => {
	var { theid } = useParams();
	console.log(theid);
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadPeople();
	}, []);

	return (
		<div className="container-md bg-dark">
			{store.planets.map((planets, i) => {
				if (i == theid) {
					return (
						<div className="jumbotron bg-dark">
							<h1 className="text-warning">Nombre de Planeta:</h1>
							<br />
							<h1 className="display-4 text-warning">{planets.name}</h1>
							<br />
							<div className="row">
								<div className="col-7">
									<img
										className="rounded float-right"
										src="https://i.pinimg.com/originals/4c/5d/91/4c5d91eac9a21738d10d68ae30f9928d.jpg"
										alt="Circle image"
									/>
								</div>

								<div className="col-5 text-warning ">
									<h2 className="font-size: 30px">
										Los planetas de Star Wars pueden parecen un tema secundario, pero son
										verdaderamente importantes. Tanto para justificar la personalidad de un
										personaje y el origen que podría haber tenido como para justificar la trama
										narrativa de una película o de una situación o un contexto sociopolítico
										concretos que provocarán un efecto dominó en la historia y nos llevarán hacia el
										lugar que la misma quiera llevarnos. Vamos, que no es tema baladí. Sin embargo,
										no todos los planetas que existen en Star Wars y son importantes han visto la
										luz en el cine.
									</h2>
								</div>
								<table className="table table-striped text-warning">
									<thead>
										<tr>
											<th scope="col">
												<h3 className="font-size: 30px">Planeta</h3>
											</th>
											<th scope="col">
												<h3 className="font-size: 30px">Rotacion</h3>
											</th>
											<th scope="col">
												<h3 className="font-size: 30px">Orbita</h3>
											</th>
											<th scope="col">
												<h3 className="font-size: 30px">Diametro</h3>
											</th>
											<th scope="col">
												<h3 className="font-size: 30px">Clima</h3>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">
												<h3 className="font-size: 30px">{planets.name}</h3>
											</th>
											<td>
												<h3 className="font-size: 30px">{planets.rotation_period}</h3>
											</td>
											<td>
												<h3 className="font-size: 30px">{planets.orbital_period}</h3>
											</td>
											<td>
												<h3 className="font-size: 30px">{planets.diameter}</h3>
											</td>
											<td>
												<h3 className="font-size: 30px">{planets.climate}</h3>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					);
				}
			})}
			;
		</div>
	);
};
