import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/img3.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-1">
			<Link to="/">
				<i className="fab fa-jedi-order fa-6x text-warning" />
			</Link>
			<div className="text-right">
				<Link to="/home">
					<i className="fas fa-meteor text-warning float-right " />
				</Link>
				<div className="btn-group" role="group">
					<div className="btn-group">
						<Link to="/home">
							<button
								type="button"
								className="btn btn-primary dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Favoritos
							</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
