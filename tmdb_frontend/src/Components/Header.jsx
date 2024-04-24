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
		{
			name: "SERIES",
			icon: HiTv,
		},
		{
			name: "WATCHLIST",
			icon: HiPlus,
		},
	];

	return (
		<div className="p-2 flex w-full content-center justify-between">
			<img src={logo} className="w-[100px] md:w-[200px] object-cover" />
			<SearchBar />
			<div className="flex ">
				<div className="w-[0px] flex md:w-[100%] pl-8 pr-8 gap-8 font-semibold cursor-pointer">
					{menu.map((item) => (
						<HeaderItem name={item.name} Icon={item.icon} key={item.name} />
					))}
				</div>

			</div>
		</div>
	);
}

export default Header;
