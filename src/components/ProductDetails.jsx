import { useState } from "react";
import { iconMinus, iconPlus, iconCartWhite } from "../assets";

const ProductDetails = ({ setCounter }) => {
	const [num, setNum] = useState(0);
	return (
		<div className="flex-1 p-6 sm:p-0">
			<h1 className="flex flex-col gap-4 mb-4 sm:mb-8">
				<span className="uppercase text-primary-100  sm:text-lg lg:text-sm font-bold tracking-widest">
					sneaker company
				</span>
				<span className="font-bold text-4xl sm:text-6xl lg:text-4xl xl:text-5xl text-blue-vark">
					Fall Limited Edition Sneakers
				</span>
			</h1>
			<p className="text-blue-dark md:text-xl lg:text-base">
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sale, they'll withstand everything the
				weather can offer.
			</p>
			<div className="flex flex-col">
				<div className="flex sm:block mt-8 flex-row items-center justify-between">
					<h2 className="text-blue-vark text-3xl lg:text-3xl sm:text-4xl font-bold flex items-center gap-4">
						$125.00
						<span className="sm:text-base text-sm bg-primary-200 py-1 px-2 text-primary-100 rounded-md">
							50%
						</span>
					</h2>
					<h3 className="text-blue-grayish line-through font-bold sm:mt-2">
						$250.00
					</h3>
				</div>
				<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 mt-8">
					<div className="bg-blue-light justify-between flex rounded-md px-5 py-4 gap-10 font-bold text-blue-vark">
						<button
							disabled={num == 0 ? true : false}
							onClick={() => setNum((p) => p - 1)}
						>
							<img
								className="pointer-events-none select-none"
								src={iconMinus}
								alt="iconMinus"
							/>
						</button>
						<span className="w-8 text-center">{num}</span>
						<button
							disabled={num == 101 ? true : false}
							onClick={() => setNum((p) => p + 1)}
						>
							<img
								className="pointer-events-none select-none"
								src={iconPlus}
								alt="iconPlus"
							/>
						</button>
					</div>
					<button
						onClick={() => {
							setCounter(num);
							setNum(0);
						}}
						className="flex-1 py-4 bg-primary-100 text-white flex justify-center items-center rounded-lg gap-2 font-bold relative after:absolute after:w-full after:h-full after:bg-primary-100 after:blur-md after:opacity-50 after:-bottom-3 after:-z-10 transition-all hover:opacity-70"
					>
						<img src={iconCartWhite} alt="icon cart" /> Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
