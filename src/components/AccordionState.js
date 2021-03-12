import Accordion from "./Accordion.js";
import React, { useState, useEffect } from "react";
const AccordionState = () => {
	const [openOne, setOpenOne] = useState(false);
	const [openTwo, setOpenTwo] = useState(true);
	const [openThree, setOpenThree] = useState(true);
	const [openFour, setOpenFour] = useState(true);
	const [openFive, setOpenFive] = useState(true);

	const [radioCheckOne, setRadioCheck] = useState(false);
	const [radioCheckTwo, setRadioCheckTwo] = useState(false);
	const [radioCheckThree, setRadioCheckThree] = useState(false);
	const [radioCheckFour, setRadioCheckFour] = useState(false);
	const [radioCheckFive, setRadioCheckFive] = useState(false);

	const [textMe, setTextMe] = useState(
		"I drink coffee ___,with a ___type of bean. _____ ground ala _____, sent to me _____."
	);

	const [disablebutton, setDisablebutton] = useState(false);

	const [preference, setpreference] = useState("___");
	const [type, settype] = useState("___");
	const [amount, setamount] = useState("___");
	const [time, settime] = useState("___");
	const [grind, setgrind] = useState("___");

	useEffect(() => {
		let ordertext = `I drink coffee as ${preference},with a ${type}type of bean. ${amount} ground ala ${grind}, sent to me ${time}.`;
		setTextMe(ordertext);
		console.log(ordertext);
	}, [preference, type, amount, grind, time]);

	const OrderSummaryText = async (e) => {
		const name = e.target.name;
		const value = e.target.value;
		let preference = "___";
		let type = "___";
		let amount = "___";
		let grind = "___";
		let time = "___";

		if (name === "preference") {
			if (value === "Capsule") {
				preference = await "Capsule";
				setpreference(preference);
			} else if (value === "FilterType") {
				preference = "Filter";
				setpreference(preference);
			} else if (value === "Espresso") {
				preference = await "Espresso";
				setpreference(preference);
			}
		} else if (name === "type") {
			if (value === "Single Origin") {
				type = await "Espresso";
				settype(type);
			} else if (value === "Decaf") {
				type = "Single Origin";
				settype(type);
			} else if (value === "Blended") {
				type = "Blended";
				settype(type);
			}
		} else if (name === "amount") {
			if (value === "250g") {
				amount = await "250g";
				setamount(amount);
			} else if (value === "500g") {
				amount = await "500g";
				setamount(amount);
			} else if (value === "1000g") {
				amount = "1000g";
				setamount(amount);
			}
		} else if (name === "grind") {
			if (value === "Wholebean") {
				grind = await "Wholebean";
				setgrind(grind);
			} else if (value === "Filter") {
				grind = await "Filter";
				setgrind(grind);
			} else if (value === "Cafetiére") {
				grind = "Cafetiére";
				setgrind(grind);
			}
		} else if (name === "time") {
			if (value === "week") {
				time = await "Every week";

				settime(time);
			} else if (value === "2weeks") {
				time = await "Every 2 weeks";
				settime(time);
			} else if (value === "month") {
				time = await "Every month";
				settime(time);
			}
		}
	};

	const testMe = (e) => {
		let element = document.getElementById("four");

		if (e.target.value === "Capsule" && e.target.name === "coffee") {
			setOpenFour(true);
			setDisablebutton(true);
			element.classList.add("mystyle");
		} else if (e.target.name === "coffee" && e.target.value !== "Capsule") {
			console.log("Now");

			setDisablebutton(false);
			element.classList.remove("mystyle");
		} else {
		}
	};

	useEffect(() => {
		if (radioCheckOne === true) {
			setOpenTwo(false);
		}
	}, [radioCheckOne]);

	useEffect(() => {
		if (radioCheckTwo === true) {
			setOpenThree(false);
		}
	}, [radioCheckTwo]);

	useEffect(() => {
		if (radioCheckThree === true && disablebutton === false) {
			setOpenFour(false);
		} else if (radioCheckThree === true) {
			setOpenFive(false);
		}
	}, [radioCheckThree, disablebutton]);

	useEffect(() => {
		if (radioCheckFour === true) {
			setOpenFive(false);
		}
	}, [radioCheckFour]);

	return (
		<>
			<Accordion
				name='preference'
				idhere='one'
				label='How do you drink you?'
				id1='Capsule'
				id1Title='Capsule'
				id1Text='Compatible with Nespresso systems and similar brewers'
				id2='FilterType'
				id2Title='Filter'
				id2Text='For pour over or drip methods like Aeropress, Chemex, and V60'
				id3='Espresso'
				id3Title='Espresso'
				id3Text='Dense and finely ground beans for an intense, flavorful experience'
				OpenState={openOne}
				OpenFunction={setOpenOne}
				radioCheckOne={radioCheckOne}
				setRadioCheck={setRadioCheck}
				test={testMe}
				OrderSummaryText={OrderSummaryText}
			></Accordion>
			<Accordion
				name='type'
				idhere='two'
				label='What type of coffee?'
				id1='Single Origin'
				id1Title='Single Origin'
				id1Text='Distinct, high quality coffee from a specific family-owned farm'
				id2='Decaf'
				id2Title='Decaf'
				id2Text='Just like regular coffee, except the caffeine has been removed'
				id3='Blended'
				id3Title='Blended'
				id3Text='Combination of two or three dark roasted beans of organic coffees'
				OpenState={openTwo}
				OpenFunction={setOpenTwo}
				radioCheckOne={radioCheckTwo}
				setRadioCheck={setRadioCheckTwo}
				test={testMe}
				OrderSummaryText={OrderSummaryText}
			></Accordion>
			<Accordion
				name='amount'
				idhere='three'
				label='How much would you like?'
				id1='250g'
				id1Title='250g'
				id1Text='Perfect for the solo drinker. Yields about 12 delicious cups.'
				id2='500g'
				id2Title='500g'
				id2Text='Perfect option for a couple. Yields about 40 delectable cups.'
				id3='1000g'
				id3Title='1000g'
				id3Text='Perfect for offices and events. Yields about 90 delightful cups.'
				OpenState={openThree}
				OpenFunction={setOpenThree}
				radioCheckOne={radioCheckThree}
				setRadioCheck={setRadioCheckThree}
				test={testMe}
				OrderSummaryText={OrderSummaryText}
			></Accordion>
			<Accordion
				name='grind'
				idhere='four'
				label='Want us to grind the?'
				id1='Wholebean'
				id1Title='Wholebean'
				id1Text='Best choice if you cherish the full sensory experience'
				id2='Filter'
				id2Title='Filter'
				id2Text='For drip or pour-over coffee methods such as V60 or Aeropress'
				id3='Cafetiére'
				id3Title='Cafetiére'
				id3Text='Course ground beans specially suited for french press coffee'
				OpenState={openFour}
				OpenFunction={setOpenFour}
				radioCheckOne={radioCheckFour}
				setRadioCheck={setRadioCheckFour}
				disablebutton={disablebutton}
				test={testMe}
				OrderSummaryText={OrderSummaryText}
			></Accordion>
			<Accordion
				name='time'
				idhere='five'
				label='How often should we'
				id1='week'
				id1Title='Every week'
				id1Text='$14.00 per shipment. Includes free first-class shipping.'
				id2='2weeks'
				id2Title='Every 2 weeks'
				id2Text='$17.25 per shipment. Includes free priority shipping.'
				id3='month'
				id3Title='Every month'
				id3Text='$22.50 per shipment. Includes free priority shipping.'
				OpenState={openFive}
				OpenFunction={setOpenFive}
				radioCheckOne={radioCheckFive}
				setRadioCheck={setRadioCheckFive}
				test={testMe}
				OrderSummaryText={OrderSummaryText}
			></Accordion>
			<div class='textMe'>{textMe}</div>
		</>
	);
};

export default AccordionState;
