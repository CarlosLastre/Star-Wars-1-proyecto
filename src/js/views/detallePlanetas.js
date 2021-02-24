import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Planetas } from "/workspace/react-hello-webapp/src/js/component/planetas.js";
import rigoImage from "/workspace/react-hello-webapp/src/img/img2.jpg";

export const Planetassvista = () => {
	var parametros = useParams();
	console.log(parametros);

	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">Personajes Start Wars detalles</h1>
				<div className="row">
					<img
						src="https://i3.wp.com/68.media.tumblr.com/e4bb6d4024abb506330572eef33a0fd4/tumblr_ojnf8w7UTI1t7b5qro3_1280.gif"
						alt="Trulli"
						width="400"
					/>
				</div>
				<div className="col-8 float-right">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>

				<hr className="my-4" />
				<img
					src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/12/20/14506409651930.gif"
					width="800"
				/>
				<div>
					<Link to="/">
						<img className="text-right" src={rigoImage} height="80px" />
					</Link>
				</div>
			</div>
		</div>
	);
};
