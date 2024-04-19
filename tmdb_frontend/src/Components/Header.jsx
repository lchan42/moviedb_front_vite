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

function Header() {

	const menu = [
		{
			name: "HOME",
			icon: HiHome,
		},
		{
			name: "SEARCH",
			icon: HiMagnifyingGlass,
		},
		{
			name: "WATCHLIST",
			icon: HiPlus,
		},
		{
			name: "ORIGINALS",
			icon: HiStar,
		},
		{
			name: "MOVIES",
			icon: HiPlayCircle,
		},
		{
			name: "SERIES",
			icon: HiTv,
		},
	];

	return (
		<div className="flex items-center gap-8 w-full">
			<div className="flex gap-8 items-center">
				<img src={logo} className="w-[200px] md:w-[300px] object-cover" />
				<div className="flex gap-8">
					{menu.map((item) => (
						<HeaderItem name={item.name} Icon={item.icon} key={item.name} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Header;
