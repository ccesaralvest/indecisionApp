import React from 'react';
import Option from './Option';

const Options = (props) => (
	<div>
		<div className='widget-header'>
			<h3 className='widget-header__title'>Your Options</h3>
			<button 
				className='button button--link'
				onClick={props.handleRemoveAll}
			>
			Remove All</button>
		</div>

		<ol>
			{
				props.options.length === 0 && 
				<p className='widget__message'>Please, insert a option</p>
			}

			{props.options.map((opt, index) => (
				<Option 
					key={opt}
					option={opt}
					count={index + 1}
					handleDeleteOption={props.handleDeleteOption} 
				/>
			))}
		</ol>
	</div>
);

export default Options;