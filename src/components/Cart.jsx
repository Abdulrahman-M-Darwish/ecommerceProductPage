import { useState } from "react";
import { iconDelete, imageProduct1Thumbnail } from "../assets";

const Cart = ({ counter, setCounter, setIsClicked }) => {
	const [isCheckedOut, setIsCheckedOut] = useState(false);
	const handelCheckout = () => {
		setCounter(0);
		setIsCheckedOut(true);
		setTimeout(() => {
			setIsCheckedOut(false);
			setIsClicked(false);
		}, 2000);
	};
	return (
		<div className="absolute top-full translate-y-4 sm:-translate-y-5 bg-white drop-shadow-2xl shadow-2xl rounded-lg translate-x-1/2 sm:translate-x-0 sm:right-2 right-1/2 flex flex-col z-[99] w-[300px] sm:w-[350px]">
			<h2 className="text-lg font-bold text-blue-vark py-4 px-4 border-b border-blue-grayish">
				Cart
			</h2>
			<div>
				{counter == 0 && !isCheckedOut && (
					<div className="text-blue-dark font-bold w-[300px] sm:w-[350px] h-48 flex items-center justify-center">
						Your cart is empty.
					</div>
				)}
				{counter > 0 && (
					<div className="px-4 py-8">
						<div className="flex items-center justify-between">
							<div className="w-12">
								<img
									className="rounded"
									src={imageProduct1Thumbnail}
									alt="fall limited edition thumbnail"
								/>
							</div>
							<div className="text-blue-dark">
								<h3 className="text-sm">Fall Limited Edition Sneakers</h3>
								<span>
									$125.00 x {counter}{" "}
									<b className="font-bold text-blue-vark">${counter * 125}</b>
								</span>
							</div>
							<img
								src={iconDelete}
								className="cursor-pointer"
								alt="trashcan icon"
								onClick={() => setCounter(0)}
							/>
						</div>
						<button
							onClick={handelCheckout}
							className="bg-primary-100 mt-7 w-full py-4 rounded-lg text-white font-bold"
						>
							Checkout
						</button>
					</div>
				)}
				{isCheckedOut && (
					<p className="text-primary-100 font-bold h-48 flex items-center justify-center">
						Thank You For Buying Our Product :"&gt;
					</p>
				)}
			</div>
		</div>
	);
};

export default Cart;
