import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Personajes } from "../component/personajes.js";

export const Personajesvista = props => {
	var { theid } = useParams();
	console.log(theid);
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadPeople();
	}, []);

	return (
		<div className="container-md bg-dark">
			{store.peoples.map((people, i) => {
				if (i == theid) {
					return (
						<div className="jumbotron bg-dark">
							<h1 className="text-warning">Nombre de Personaje:</h1>
							<br />
							<h1 className="display-4 text-warning">{people.name}</h1>
							<br />
							<div className="row">
								<div className="col-7">
									<img
										className="rounded float-right"
										src="https://i.pinimg.com/564x/17/79/06/177906a44f656563bad7efe083c22b5c.jpg"
										alt="Circle image"
									/>
								</div>

								<div className="col-5 text-warning ">
									<h3 className="font-size: 30px">
										Además de la raza humana, se describen múltiples tipos de especies
										extraterrestres procedentes de los numerosos planetas y satélites que forman
										dicha galaxia y que pertenecen a la alianza de planetas de la República
										Galáctica. Existen dos grupos de humanos que son sensibles a la Fuerza pero que
										poseen ideologías diferentes entre sí: los Jedi y los Sith. La estructura
										jerárquica de la orden Jedi incluye a los maestros, como Obi-Wan Kenobi, Luke
										Skywalker y Yoda; sus aprendices o también conocidos como padawan; los iniciados
										o younglings que suelen ser menores de edad; y los caballeros, cuyo estatus
										progresa al de un maestro una vez que concluyen el entrenamiento de su
										respectivo aprendiz.
									</h3>
								</div>
								<table className="table table-striped text-warning">
									<thead>
										<tr>
											<th scope="col">
												<h3 className="font-size: 30px">Personaje</h3>
											</th>
											<th scope="col">
												<h3 className="font-size: 30px">Peso</h3>
											</th>
											<th scope="col">
												<h3 className="font-size: 30px">Masa</h3>
											</th>
											<th scope="col">
												<h3 className="font-size: 30px">Color de Cabello</h3>
											</th>
											<th scope="col">
												<h3 className="font-size: 30px">Color de Piel</h3>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">
												<h3 className="font-size: 30px">{people.name}</h3>
											</th>
											<td>
												<h3 className="font-size: 30px">{people.height}</h3>
											</td>
											<td>
												<h3 className="font-size: 30px">{people.mass}</h3>
											</td>
											<td>
												<h3 className="font-size: 30px">{people.hair_color}</h3>
											</td>
											<td>
												<h3 className="font-size: 30px">{people.skin_color}</h3>
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
