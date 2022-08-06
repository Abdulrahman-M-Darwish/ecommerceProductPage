import React, { useRef, useEffect, useState } from "react";
import {
	imageProduct1,
	imageProduct1Thumbnail,
	imageProduct2,
	imageProduct2Thumbnail,
	imageProduct3,
	imageProduct3Thumbnail,
	imageProduct4,
	imageProduct4Thumbnail,
	iconNext,
	iconPrevious,
} from "../assets";
import { Lightbox } from "./";

const ProductImages = () => {
	const thumbs = [
		imageProduct1Thumbnail,
		imageProduct2Thumbnail,
		imageProduct3Thumbnail,
		imageProduct4Thumbnail,
	];
	const images = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
	const imagesDiv = useRef([]);
	const image = useRef(0);
	const [index, setIndex] = useState(0);
	const [showLightbox, setShowLightbox] = useState(false);
	const clearActiveClass = (array) => {
		for (let i = 0; i < array.length; i++) {
			array[i].classList.remove("active");
		}
	};
	const handelClick = (index) => {
		const images = imagesDiv.current.childNodes;
		clearActiveClass(images);
		images[index].classList.add("active");
		setIndex(index);
	};
	useEffect(() => {
		const images = imagesDiv.current.childNodes;
		clearActiveClass(images);
		images[0].classList.add("active");
	}, []);
	const decrement = () => {
		if (index > 0) {
			setIndex((p) => p - 1);
		} else {
			setIndex(images.length - 1);
		}
	};
	const increment = () => {
		if (index < images.length - 1) {
			setIndex((p) => p + 1);
		} else {
			setIndex(0);
		}
	};
	return (
		<div className="flex-1 flex flex-row-reverse lg:flex-col gap-8">
			<div
				onClick={() => setShowLightbox(true)}
				className="overflow-hidden relative flex-1 cursor-pointer"
			>
				<button
					onClick={decrement}
					className="absolute left-4 z-50 top-1/2 -translate-y-1/2 flex justify-center items-center bg-white rounded-full w-10 h-10 sm:hidden"
				>
					<img
						src={iconPrevious}
						alt="icon previous"
						className="w-2 pointer-events-none"
					/>
				</button>
				<button
					onClick={increment}
					className="absolute right-4 z-50 top-1/2 -translate-y-1/2 flex justify-center items-center bg-white rounded-full w-10 h-10 sm:hidden"
				>
					<img
						src={iconNext}
						alt="icon plus"
						className="w-2 pointer-events-none"
					/>
				</button>
				<div className="flex h-full pointer-events-none">
					{images.map((img, i) => (
						<img
							className="transition-all sm:rounded-2xl"
							key={"image-" + i}
							src={img}
							alt="image"
							ref={image}
							style={{
								transform: `translateX(${
									-image.current.clientWidth * index
								}px)`,
							}}
						/>
					))}
				</div>
			</div>
			<div
				ref={imagesDiv}
				className="hidden sm:flex flex-col lg:flex-row gap-7"
			>
				{thumbs.map((thumb, i) => (
					<div
						onClick={() => handelClick(i)}
						key={"thumb-" + i}
						className="active thumbnails"
					>
						<img src={thumb} alt="thumbnail" />
					</div>
				))}
			</div>
			{showLightbox && <Lightbox setShowLightbox={setShowLightbox} />}
		</div>
	);
};

export default ProductImages;
