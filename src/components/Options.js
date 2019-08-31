import React from 'react';
import Option from './Option';

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleRemoveAll}>Remove All</button>
			<ol>
				{props.options.length === 0 && <p>Please, insert a option</p>}
				{props.options.map(opt => (
					<Option key={opt} option={opt} handleDeleteOption={props.handleDeleteOption} />
				))}
			</ol>
		</div>
	)
};

export default Options;