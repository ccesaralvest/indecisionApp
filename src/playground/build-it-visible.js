const appWrapper = document.getElementById('app');

const buildVisible = {
	title: 'Visibility Toggle',
	contentText: ''
};
const hideDetails = () => {
	buildVisible.contentText ='';
	renderBuildVisible();
};
const showDetails = () => {
	buildVisible.contentText ='Some Details';	
	renderBuildVisible();
};

const renderBuildVisible = () => {
	const templatebuild = (
		<div>
			<h1>{buildVisible.title}</h1>			
			{
				buildVisible.contentText ? <button onClick={hideDetails}>Hide details</button> : <button onClick={showDetails}>Show Details</button> 
			}
			{buildVisible.contentText && <p>{buildVisible.contentText}</p>}
		</div>
	);
	ReactDOM.render(templatebuild, appWrapper);
};

renderBuildVisible();