import React from 'react';

const Action = (props) => (
	<button 
		disabled={!props.hasOption}
		onClick={props.handlePick}
		className='big-button'
		>
		What should i do ?
		</button>
);

export default Action;