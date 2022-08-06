import { useState } from "react";
import { Logo, iconCart, imageAvatar, iconMenu } from "../assets";
import { Cart } from "../components/";

const Navbar = ({ counter, setCounter }) => {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<div className="flex items-center px-6 justify-between w-full py-7 border-gray-300 lg:px-0 lg:border-b relative">
			<img src={iconMenu} className="lg:hidden block mr-4" alt="menu icon" />
			<img src={Logo} className="mr-auto lg:mr-0" alt="logo" />
			<ul className="hidden lg:flex gap-7 ml-12 mr-auto">
				{["Collections", "Men", "Women", "About", "Contact"].map((item, i) => (
					<li
						className="text-blue-dark relative cursor-pointer hover:text-blue-vark before:absolute before:w-full before:h-1 before:bg-primary-100 before:-bottom-0 before:-mb-11 before:-translate-x-5 hover:before:translate-x-0 before:opacity-0 hover:before:opacity-100 before:transition-all before:ease-in-out"
						key={"item-" + i}
					>
						{item}
					</li>
				))}
			</ul>
			<div className="flex gap-10 items-center">
				<div className="relative">
					<img
						className="cursor-pointer"
						onClick={() => setIsClicked((p) => !p)}
						src={iconCart}
						alt="Cart"
					/>
					{counter > 0 && (
						<span className="text-[9px] absolute -top-2 right-[-50%] bg-primary-100 text-white px-2 rounded-full">
							{counter}
						</span>
					)}
				</div>
				<img
					className="w-[50px] h-[50px] rounded-full border-[3px] transition-all duration-200 hover:border-primary-100"
					src={imageAvatar}
					alt="profile image"
				/>
				{isClicked && (
					<Cart
						setIsClicked={setIsClicked}
						counter={counter}
						setCounter={setCounter}
					/>
				)}
			</div>
		</div>
	);
};

export default Navbar;
