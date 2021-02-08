//import React from "react";
import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [color, setColor] = useState("red");
	//useState declara el valor inicial de la variable
	useEffect(() => {
		const interval = setInterval(() => {
			color === "red"
				? setColor("green")
				: color === "yellow"
				? setColor("red")
				: color === "green"
				? setColor("yellow")
				: null;
			//null significa que si no es asi no haga nada
		}, 3000);

		return () => clearInterval(interval);
	}, [color]);
	return (
		<div className="text-center mt-5">
			<ul className="trafficLight">
				<li
					onClick={() => setColor("red")}
					className={color === "red" ? "selected" : ""}
				/>
				<li
					onClick={() => setColor("yellow")}
					className={color === "yellow" ? "selected" : ""}
				/>
				<li
					onClick={() => setColor("green")}
					className={color === "green" ? "selected" : ""}
				/>
			</ul>
		</div>
	);
}
