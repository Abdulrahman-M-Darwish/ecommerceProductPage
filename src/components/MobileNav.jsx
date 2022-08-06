import React from "react";

const MobileNav = () => {
	return (
		<div>
			<nav>
				<ul className="hidden lg:flex gap-7 ml-12 mr-auto">
					{["Collections", "Men", "Women", "About", "Contact"].map(
						(item, i) => (
							<li
								className="text-blue-dark relative cursor-pointer hover:text-blue-vark before:absolute before:w-full before:h-1 before:bg-primary-100 before:-bottom-0 before:-mb-11 before:-translate-x-5 hover:before:translate-x-0 before:opacity-0 hover:before:opacity-100 before:transition-all before:ease-in-out"
								key={"mobile-item-" + i}
							>
								{item}
							</li>
						)
					)}
				</ul>
			</nav>
		</div>
	);
};

export default MobileNav;
