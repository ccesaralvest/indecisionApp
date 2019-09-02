import React from 'react';

const Action = (props) => (
	<button 
		disabled={!props.hasOption}
		onClick={props.handlePick}
		className='big-buttom'
		>
		What should i do ?
		</button>
);

export default Action;