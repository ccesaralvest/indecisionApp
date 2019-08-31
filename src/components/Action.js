import React from 'react';

const Action = (props) => {
	return (
		<button disabled={!props.hasOption} onClick={props.handlePick}>What should i do ?</button>
	)
};

export default Action;