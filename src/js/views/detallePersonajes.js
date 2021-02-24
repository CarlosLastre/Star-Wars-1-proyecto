import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Personajes } from "../component/personajes.js";
import rigoImage from "/workspace/react-hello-webapp/src/img/img.5.jpg";

export const Personajesvista = props => {
	var parametros = useParams();
	console.log(parametros);

	return (
		<div className="container-md bg-dark">
			<div className="jumbotron">
				<h1 className="display-4">Caracteristicas</h1>
				<div className="row">
					<img
						className="rounded float-right"
						src="https://i.pinimg.com/564x/17/79/06/177906a44f656563bad7efe083c22b5c.jpg"
						alt="Circle image"
					/>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	);
};
