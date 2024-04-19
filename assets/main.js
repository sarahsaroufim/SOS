// Function to render your items
const renderItems = (data) => {

	//set display
	document.getElementById('level-1').style.display = 'grid';
	document.getElementById('level-2').style.display = 'none';
	document.getElementById('level-3').style.display = 'none';

	// The `ul` where the items will be inserted
	const level1 = document.getElementById('level-1')
	level1.innerHTML = '';
	const level2 = document.getElementById('level-2')
	level2.innerHTML = '';
	const level3 = document.getElementById('level-3')
	level3.innerHTML = '';

	// Loop through each item in the data array
	data.forEach((item) => {
		
		//level 1
		let level1Item = `<button class="button-category">${item.emergency_guides}</button>`
		level1.insertAdjacentHTML('beforeend', level1Item);
		
		//level 2
		let level2Item = `
			<div id='${item.emergency_guides}' class="instructions-container">
			<ol id="instructions">
			<h4>Instructions</h4>
			`

		// render the line for item.number_of_steps times / remove null steps by stopping at "number_of_steps" (json)
		for (let i = 1; i <= item.number_of_steps; i++){

			let temp = 'item.step' + i;
			// console.log('temp:'+temp);
			level2Item += `<li class="step"><a id="step${i}">`

			if( i == 1 ){
				level2Item += `${item.step1}`;
			} else if ( i == 2 ){
				level2Item += `${item.step2}`;
			} else if ( i == 3 ){
				level2Item += `${item.step3}`;
			} else if ( i == 4 ){
				level2Item += `${item.step4}`;
			} else if ( i == 5 ){
				level2Item += `${item.step5}`;
			} else if ( i == 6 ){
				level2Item += `${item.step6}`;
			} else if ( i == 7 ){
				level2Item += `${item.step7}`;
			} else if ( i == 8 ){
				level2Item += `${item.step8}`;
			} else if ( i == 9 ){
				level2Item += `${item.step9}`;
			}
			
			// unless it's the last step, add the hr line + add gray arrow either way
			if (i < item.number_of_steps){
				level2Item +=`</a><img src='assets/images/light-gray-arrow.svg' class="light-gray-arrow"></li><hr class="solid">`
			} else {
				level2Item +=`</a><img src='assets/images/light-gray-arrow.svg' class="light-gray-arrow"></li>`
			}
		}

		level2Item +=	
			`
			</ol>
			</div>
			`
		level2.insertAdjacentHTML('beforeend', level2Item);


		// level 3
		// item.number_of_steps

		let level3Item = ``

		if ( item.number_of_steps >= 1 ){
			level3Item +=
			`<section id="${item.emergency_guides}_step1_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step1}</h4>
				<p class="details">${item.step1_details}</p>
				<div class="image-container"><img src="${item.step1_image}"></div>
				<p class="details">${item.step1_details2}</p>
			</section>`
		}
		if ( item.number_of_steps >= 2 ){
			level3Item +=
			`<section id="${item.emergency_guides}_step2_details" class="instruction-details ${item.emergency_guides}"> 
				<h4 class="step-bold">${item.step2}</h4>
				<p class="details">${item.step2_details}</p>
				<div class="image-container"><img src="${item.step2_image}"></div>
				<p class="details">${item.step2_details2}</p>
			</section>`
		}
		if ( item.number_of_steps >= 3 ){
			level3Item +=`
			<section id="${item.emergency_guides}_step3_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step3}</h4>
				<p class="details">${item.step3_details}</p>
				<div class="image-container"><img src="${item.step3_image}"></div>
				<p class="details">${item.step3_details2}</p>
			</section>`

		}
		if ( item.number_of_steps >= 4 ){
			level3Item +=`
			<section id="${item.emergency_guides}_step4_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step4}</h4>
				<p class="details">${item.step4_details}</p>
				<div class="image-container"><img src="${item.step4_image}"></div>
				<p class="details">${item.step4_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 5 ){
			level3Item +=`
			<section id="${item.emergency_guides}_step5_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step5}</h4>
				<p class="details">${item.step5_details}</p>
				<div class="image-container"><img src="${item.step5_image}"></div>
				<p class="details">${item.step5_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 6 ){
			level3Item +=`
			<section id="${item.emergency_guides}_step6_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step6}</h4>
				<p class="details">${item.step6_details}</p>
				<div class="image-container"><img src="${item.step6_image}"></div>
				<p class="details">${item.step6_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 7 ){
			level3Item +=`
			<section id="${item.emergency_guides}_step7_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step7}</h4>
				<p class="details">${item.step7_details}</p>
				<div class="image-container"><img src="${item.step7_image}"></div>
				<p class="details">${item.step7_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 8 ){
			level3Item += `
			<section id="${item.emergency_guides}_step8_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step8}</h4>
				<p class="details">${item.step8_details}</p>
				<div class="image-container"><img src="${item.step8_image}"></div>
				<p class="details">${item.step8_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 9 ){
			level3Item +=`
			<section id="${item.emergency_guides}_step9_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step9}</h4>
				<p class="details">${item.step9_details}</p>
				<div class="image-container"><img src="${item.step9_image}"></div>
				<p class="details">${item.step9_details2}</p>
			</section>
			`
		}
		level3.insertAdjacentHTML('beforeend', level3Item);
	})

	// opens instructions list + back & done buttons
	let instructionsPage = document.querySelectorAll('.button-category')
	let backButton = document.querySelector('#back-button')
	let doneButton = document.querySelector('#done-button')
	// let homeBackButton = document.querySelector('#home-back-button')

	instructionsPage.forEach((openInstructions) => {
		openInstructions.onclick = () => {

			// openInstructions.nextElementSibling.classList.toggle('active')
			backButton.classList.add('active')
			doneButton.classList.add('inactive')

			// from level 1 to level 2 (instructions list to instruction details)
			pageLevel = 2;

			// hide level 1
			document.getElementById('level-1').style.display = 'none';

			// show level 2
			// console.log(openInstructions.innerHTML);
			document.getElementById('level-2').style.display = 'block';
			document.getElementById(openInstructions.innerHTML).style.display = 'block';
			
			// put emergency name in h2's place
			document.querySelector('h2').innerHTML = openInstructions.innerHTML;
		}
	})

	// back button that works from every page
	backButton.onclick = () => {

		// if we are at 2nd level, go back to 1st
		if(pageLevel == 2){
			backButton.classList.remove('active');
			document.querySelector('h2').innerHTML = 'Emergency Guides';
			onLoad();

		// if we are at 3rd level, go back to 2nd
		} else {
			pageLevel = 2;
			level2.style.display = "block";
			level3.style.display = 'none';
			// instructionDetailsPage.classList.remove('active')
			// instructionDetailsPage2.classList.remove('active')
			// instructionDetailsPage3.classList.remove('active')
			// instructionDetailsPage4.classList.remove('active')
			// instructionDetailsPage5.classList.remove('active')
			// instructionDetailsPage6.classList.remove('active')
			// instructionDetailsPage7.classList.remove('active')
			// instructionDetailsPage8.classList.remove('active')
			// instructionDetailsPage9.classList.remove('active')
		}
	}

	// level 2 to 3
	// opens instruction details for "bleeding" steps 1-9
	let level2StepButtons =  document.querySelectorAll('.step');
	let level3Displays = document.querySelectorAll('.instruction-details');
	let arrows = document.querySelectorAll('.light-gray-arrow');

	// level2StepButtons.forEach((btn)=>{
	// 	btn.onclick = () => {

	// 	}
	// })

	// make certain steps unclickable + remove arrow
	for ( let i = 0; i<level3Displays.length ; i++){

		// manually choose every step without details (count steps from 0 to 67)
		if ( i== 1 || i== 2 ) {
			arrows[i].style.display = 'none';

		} else {
			level2StepButtons[i].onclick = () => {
				pageLevel = 3;
				console.log('clicked');
				level2.style.display = "none";
				level3.style.display = 'block';
				level3Displays.forEach(display => { display.style.display = "none";});
				level3Displays[i].style.display = "block";
				}
		}

	}

	// let instructionDetails = document.querySelectorAll('#step1')
	// let instructionDetailsPage = document.querySelector('#step1_details')

	// instructionDetails.forEach((openInstructionDetails) => {
	// 	openInstructionDetails.onclick = () => {
	// 		instructionDetailsPage.classList.toggle('active')
	// 		backButton.classList.add('active')
	// 		pageLevel = 3;
	// 	}
	// })

	// let instructionDetails2 = document.querySelectorAll('#step2')
	// let instructionDetailsPage2 = document.querySelector('#step2_details')
	// instructionDetails2.forEach((openInstructionDetails2) => {
	// 	openInstructionDetails2.onclick = () => {
	// 		instructionDetailsPage2.classList.toggle('active')
	// 		backButton.classList.add('active')
	// 		pageLevel = 3;
	// 	}
	// })

	// let instructionDetails3 = document.querySelectorAll('#step3')
	// let instructionDetailsPage3 = document.querySelector('#step3_details')
	// instructionDetails3.forEach((openInstructionDetails3) => {
	// 	openInstructionDetails3.onclick = () => {
	// 		instructionDetailsPage3.classList.toggle('active')
	// 		backButton.classList.add('active')
	// 		pageLevel = 3;
	// 	}
	// })

	// let instructionDetails4 = document.querySelectorAll('#step4')
	// let instructionDetailsPage4 = document.querySelector('#step4_details')
	// instructionDetails4.forEach((openInstructionDetails4) => {
	// 	openInstructionDetails4.onclick = () => {
	// 		instructionDetailsPage4.classList.toggle('active')
	// 		backButton.classList.add('active')
	// 		pageLevel = 3;
	// 	}
	// })

	// let instructionDetails5 = document.querySelectorAll('#step5')
	// let instructionDetailsPage5 = document.querySelector('#step5_details')
	// instructionDetails5.forEach((openInstructionDetails5) => {
	// 	openInstructionDetails5.onclick = () => {
	// 		instructionDetailsPage5.classList.toggle('active')
	// 		backButton.classList.add('active')
	// 		pageLevel = 3;
	// 	}
	// })

	// let instructionDetails6 = document.querySelectorAll('#step6')
	// let instructionDetailsPage6 = document.querySelector('#step6_details')
	// instructionDetails6.forEach((openInstructionDetails6) => {
	// 	openInstructionDetails6.onclick = () => {
	// 		instructionDetailsPage6.classList.toggle('active')
	// 		backButton.classList.add('active')
	// 		pageLevel = 3;
	// 	}
	// })

	// let instructionDetails7 = document.querySelectorAll('#step7')
	// let instructionDetailsPage7 = document.querySelector('#step7_details')
	// instructionDetails7.forEach((openInstructionDetails7) => {
	// 	openInstructionDetails7.onclick = () => {
	// 		instructionDetailsPage7.classList.toggle('active')
	// 		backButton.classList.add('active')
	// 		pageLevel = 3;
	// 	}
	// })

	// let instructionDetails8 = document.querySelectorAll('#step8')
	// let instructionDetailsPage8 = document.querySelector('#step8_details')
	// instructionDetails8.forEach((openInstructionDetails8) => {
	// 	openInstructionDetails8.onclick = () => {
	// 		instructionDetailsPage8.classList.toggle('active')
	// 		backButton.classList.add('active')
	// 		pageLevel = 3;
	// 	}
	// })

	// let instructionDetails9 = document.querySelectorAll('#step9')
	// let instructionDetailsPage9 = document.querySelector('#step9_details')
	// instructionDetails9.forEach((openInstructionDetails9) => {
	// 	openInstructionDetails9.onclick = () => {
	// 		instructionDetailsPage9.classList.toggle('active')
	// 		backButton.classList.add('active')
	// 		pageLevel = 3;
	// 	}
	// })
}

// Fetch gets your (local) JSON file…
function onLoad() {
	fetch('assets/emergencies.json')
		.then(response => response.json())
		.then(data => {
			// And passes the data to the function, above!
			pageLevel = 1;
			document.querySelector('#done-button').classList.remove('inactive');
			renderItems(data)
		})
};

onLoad();
let pageLevel = 1;