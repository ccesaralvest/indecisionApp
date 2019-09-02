import React from 'react';

const Option = (props) => {
	return (
		<li>{props.option}
			<button
				className='button button--link'
				onClick={(e) => {
					props.handleDeleteOption(props.option);
				}}
			>
				Remove
			</button>
		</li>
	);
};

export default Option;