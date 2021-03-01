import React, { useState, useEffect, useContext } from "react"; //*
import { Context } from "../store/appContext"; //*
import { Link } from "react-router-dom";
import rigoImage from "../../img/img3.jpg";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { store, actions } = useContext(Context);

	const toggle = () => setDropdownOpen(prevState => !prevState);

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
						<Link to="/home" />
					</div>
				</div>
			</div>
			<div className="mr-5 bg-dark">
				<Dropdown isOpen={dropdownOpen} toggle={toggle}>
					<DropdownToggle caret>
						<text className="text-warning">Favoritos</text>
					</DropdownToggle>
					<DropdownMenu className="bg-dark">
						<DropdownItem header>
							<h5 className="text-warning">Seleccion VIP</h5>
						</DropdownItem>
						<DropdownItem header>
							<h5 className="text-warning">Personajes</h5>
						</DropdownItem>
						{store.favorites.map((favorites, i) => {
							if (favorites.type == "persona") {
								return (
									<div key={i}>
										<DropdownItem text>
											<h5 className="text-warning">{favorites.name}</h5>
										</DropdownItem>
									</div>
								);
							}
						})}
						<DropdownItem header>
							<h5 className="text-warning">Planetas</h5>
						</DropdownItem>
						{store.favorites.map((favorites, i) => {
							if (favorites.type == "planeta") {
								return (
									<div key={i}>
										<DropdownItem text>
											<h5 className="text-warning">{favorites.name}</h5>
										</DropdownItem>
									</div>
								);
							}
						})}
					</DropdownMenu>
				</Dropdown>
			</div>
		</nav>
	);
};
