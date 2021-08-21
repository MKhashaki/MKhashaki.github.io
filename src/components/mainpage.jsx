import React, { Component } from "react";
class main extends Component {
	state = {};
	render() {
		const repoClasses = "h-60 w-60 bg-green-800 flex rounded-xl relative object-cover text-white";

		return (
			<div className="absolute w-full h-[3000px] bg-gray-800">
				<div className="bg-blue-600 absolute w-full h-10 top-0">
					<p className="top-1/2 absolute -translate-y-1/2 ml-2 font-semibold text-white z-10">
						Portfolio [WIP]
					</p>
				</div>
				<div className="mt-10"></div>
				<p className="text-white p-3">Repos</p>
				<div className="bg-red-800 relative m-4 flex items-center justify-around">
					<a href="./react-tailwind-FEM">
						<div className={repoClasses}>
							<img
								src="./src/images/ooo.png"
								alt="repo1"
								className="object-cover rounded-xl"
							/>
							<div className="absolute bottom-0 p-3 h-52 bg-gradient-to-t from-gray-800 w-full">
								<p className="bottom-3 absolute">FEM Projects</p>
							</div>
						</div>
					</a>
					<div className={repoClasses}></div>
					<div className={repoClasses}></div>
				</div>
			</div>
		);
	}
}

export default main;
