import React, { useEffect } from "react";
import logo from "./../assets/images/logo.png";
import {
	HiHome,
	HiMagnifyingGlass,
	HiStar,
	HiPlayCircle,
	HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import SearchBar from "./SearchBar";



function Header() {

	const menu = [
		{
			name: "MOVIES",
			icon: HiPlayCircle,
		},
		// {
		// 	name: "SERIES",
		// 	icon: HiTv,
		// },
		{
			name: "WATCHLIST",
			icon: HiPlus,
		},
	];

	return (
		<div className="flex w-full items-center gap-8">
			<div className="flex gap-8 items-center">
				<img src={logo} className="w-[200px] md:w-[300px] object-cover" />
				<div className="flex gap-8 items-center font-semibold cursor-pointer">
					{menu.map((item) => (
						<HeaderItem name={item.name} Icon={item.icon} key={item.name} />
					))}
				</div>
				<SearchBar className="focus-within:border-primary relative"/>
			</div>

		</div>
	);
}

export default Header;
