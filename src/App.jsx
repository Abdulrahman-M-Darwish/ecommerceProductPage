import { useState } from "react";
import { Navbar, ProductImages, ProductDetails } from "./components";

const App = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div className="lg:px-40">
			<div className="mx-auto">
				<Navbar counter={counter} setCounter={setCounter} />
				<div className="sm:px-10 flex gap-4 flex-col lg:flex-row sm:gap-16 xl:gap-[100px] items-center justify-between sm:my-24">
					<ProductImages />
					<ProductDetails setCounter={setCounter} />
				</div>
			</div>
		</div>
	);
};

export default App;
