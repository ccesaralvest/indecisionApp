import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal 
		isOpen={!!props.selectedOption}
		contentLabel='firstModal'
		ariaHideApp={false}
		onRequestClose={props.handleRemoveSelectedOption}
	>
		<h3>Selected Option</h3>
		<p>{props.selectedOption}</p>
		<button onClick={props.handleRemoveSelectedOption}>OK</button>
	</Modal>
);

export default OptionModal;