import './../assets/styles/appStyle.scss'

const tutorialInfo = function () {
	console.log('TutorialInfo');

	const title = document.createElement('h2');
	title.textContent = 'Tutoial 3 - Example 3';
	
	const description = document.createElement('p');
	description.textContent = 'This tutorial try to explain the basic concepts of webpack plugins';

	const container = document.querySelector('#container');
	container.appendChild(title);
	container.appendChild(description);
};

tutorialInfo();
