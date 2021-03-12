import React, { useState } from "react";

const Accordion = ({
	label,
	id1,
	id2,
	id3,
	name,
	id1Title,
	id1Text,
	id2Title,
	id2Text,
	id3Title,
	id3Text,
}) => {
	const [open, setOpen] = useState(true);

	return (
		<div className='accordion'>
			<button
				className={` btn-clear accordion_btn ${
					open ? "" : "accordion__button--active"
				} `}
				onClick={(e) => setOpen(!open)}
			>
				{label}
			</button>
			<div
				className={`accordion__content ${
					open ? " " : "accordion__content--open"
				} `}
			>
				<form action='#' className='accordion_groupsWrapper'>
					<input type='radio' name={name} id={id1} class='input-hidden' />
					<label for={id1}>
						<div class='accordion_groupContainer'>
							<div className='accordion_groupTitle'>{id1Title}</div>
							<p className='accordion_groupText'>{id1Text}</p>
						</div>
					</label>

					<input type='radio' name={name} id={id2} class='input-hidden' />
					<label for={id2}>
						<div class='accordion_groupContainer'>
							<div className='accordion_groupTitle'>{id2Title}</div>
							<p className='accordion_groupText'>{id2Text}</p>
						</div>
					</label>
					<input type='radio' name={name} id={id3} class='input-hidden' />
					<label for={id3}>
						<div class='accordion_groupContainer'>
							<div className='accordion_groupTitle'>{id3Title}</div>
							<p className='accordion_groupText'>{id3Text}</p>
						</div>
					</label>
				</form>
			</div>
		</div>
	);
};

export default Accordion;
