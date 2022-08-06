import { useState, useRef, useEffect } from "react";
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

const Lightbox = ({ setShowLightbox }) => {
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
			handelClick(index - 1);
		} else {
			setIndex(images.length - 1);
			handelClick(images.length - 1);
		}
	};
	const increment = () => {
		if (index < images.length - 1) {
			setIndex((p) => p + 1);
			handelClick(index + 1);
		} else {
			setIndex(0);
			handelClick(0);
		}
	};
	return (
		<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-[100] flex items-center justify-center flex-col">
			<div className="max-w-[450px] p-6">
				<div className="relative flex flex-col">
					<button
						onClick={() => setShowLightbox(false)}
						className="self-end mb-4"
					>
						<svg
							width="14"
							height="15"
							xmlns="http://www.w3.org/2000/svg"
							className="pointer-events-none"
						>
							<path
								d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
								fill="#FFF"
								className="hover:fill-primary-100 transition-all"
								fillRule="evenodd"
							/>
						</svg>
					</button>
					<button
						onClick={decrement}
						className="absolute left-0 -translate-x-5 z-50 top-1/2 -translate-y-1/2 flex justify-center items-center bg-white rounded-full w-10 h-10"
					>
						<img
							src={iconPrevious}
							alt="icon previous"
							className="w-2 pointer-events-none"
						/>
					</button>
					<button
						onClick={increment}
						className="absolute right-0 translate-x-5 z-50 top-1/2 -translate-y-1/2 flex justify-center items-center bg-white rounded-full w-10 h-10"
					>
						<img
							src={iconNext}
							alt="icon plus"
							className="w-2 pointer-events-none"
						/>
					</button>
					<div className="flex h-full pointer-events-none overflow-hidden">
						{images.map((img, i) => (
							<img
								className="transition-all rounded-2xl"
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
				<div ref={imagesDiv} className="flex gap-7 mt-4">
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
			</div>
		</div>
	);
};

export default Lightbox;
