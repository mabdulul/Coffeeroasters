import "./App.scss";
import CoffeeButton from "./components/CoffeeButton.js";

import AccordionState from "./components/AccordionState";

function App() {
	return (
		<div className='App'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-2 col-lg-4'>
						<CoffeeButton>Button</CoffeeButton>
					</div>
					<div className='col-md-10 col-lg-8'>
						<AccordionState />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
