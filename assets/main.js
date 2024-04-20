// Function to render your items
const renderItems = (data) => {

	// set display
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
		
		// level 1
		let level1Item = `<button class="button-category">${item.emergency_guides}</button>`
		level1.insertAdjacentHTML('beforeend', level1Item);
		
		// level 2
		let level2Item = `
			<div id='${item.emergency_guides}' class="instructions-container">
			<ol id="instructions">
			`
			// <h4>Instructions</h4>

		// render the line for item.number_of_steps times > remove null steps by stopping at "number_of_steps" (json)
		for (let i = 1; i <= item.number_of_steps; i++){

			let temp = 'item.step' + i;
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
		let level3Item = ``

		if ( item.number_of_steps >= 1 ){
			level3Item +=
			`
			<section id="${item.emergency_guides}_step1_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step1}</h4>
				<div class="image-container"><img src="${item.step1_image}"></div>
				<p class="details details-background">${item.step1_details}</p>
				<p class="details details-background">${item.step1_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 2 ){
			level3Item +=
			`
			<section id="${item.emergency_guides}_step2_details" class="instruction-details ${item.emergency_guides}"> 
				<h4 class="step-bold">${item.step2}</h4>
				<div class="image-container"><img src="${item.step2_image}"></div>
				<p class="details details-background">${item.step2_details}</p>
				<p class="details details-background">${item.step2_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 3 ){
			level3Item +=
			`
			<section id="${item.emergency_guides}_step3_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step3}</h4>
				<div class="image-container"><img src="${item.step3_image}"></div>
				<p class="details details-background">${item.step3_details}</p>
				<p class="details details-background">${item.step3_details2}</p>
			</section>
			`

		}
		if ( item.number_of_steps >= 4 ){
			level3Item +=
			`
			<section id="${item.emergency_guides}_step4_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step4}</h4>
				<div class="image-container"><img src="${item.step4_image}"></div>
				<p class="details details-background">${item.step4_details}</p>
				<p class="details details-background">${item.step4_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 5 ){
			level3Item +=
			`
			<section id="${item.emergency_guides}_step5_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step5}</h4>
				<div class="image-container"><img src="${item.step5_image}"></div>
				<p class="details details-background">${item.step5_details}</p>
				<p class="details details-background">${item.step5_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 6 ){
			level3Item +=
			`
			<section id="${item.emergency_guides}_step6_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step6}</h4>
				<div class="image-container"><img src="${item.step6_image}"></div>
				<p class="details details-background">${item.step6_details}</p>
				<p class="details details-background">${item.step6_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 7 ){
			level3Item +=
			`
			<section id="${item.emergency_guides}_step7_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step7}</h4>
				<div class="image-container"><img src="${item.step7_image}"></div>
				<p class="details details-background">${item.step7_details}</p>
				<p class="details details-background">${item.step7_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 8 ){
			level3Item +=
			`
			<section id="${item.emergency_guides}_step8_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step8}</h4>
				<div class="image-container"><img src="${item.step8_image}"></div>
				<p class="details details-background">${item.step8_details}</p>
				<p class="details details-background">${item.step8_details2}</p>
			</section>
			`
		}
		if ( item.number_of_steps >= 9 ){
			level3Item +=
			`
			<section id="${item.emergency_guides}_step9_details" class="instruction-details ${item.emergency_guides}">
				<h4 class="step-bold">${item.step9}</h4>
				<div class="image-container"><img src="${item.step9_image}"></div>
				<p class="details details-background">${item.step9_details}</p>
				<p class="details details-background">${item.step9_details2}</p>
			</section>
			`
		}
		level3.insertAdjacentHTML('beforeend', level3Item);
	})

	// opens instructions list + back & done buttons
	let instructionsPage = document.querySelectorAll('.button-category')
	let backButton = document.querySelector('#back-button')
	let doneButton = document.querySelector('#done-button')

	instructionsPage.forEach((openInstructions) => {
		openInstructions.onclick = () => {

			backButton.classList.add('active')
			doneButton.classList.add('inactive')

			// from level 1 to level 2 (instructions list to instruction details)
			pageLevel = 2;

			// hide level 1
			document.getElementById('level-1').style.display = 'none';

			// show level 2
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
			document.querySelector('h2').innerHTML = 'EMERGENCY GUIDES';
			onLoad();

		// if we are at 3rd level, go back to 2nd
		} else {
			pageLevel = 2;
			level2.style.display = "block";
			level3.style.display = 'none';
		}
	}

	// level 2 to 3
	// opens instruction details for "bleeding" steps 1-9
	let level2StepButtons =  document.querySelectorAll('.step');
	let level3Displays = document.querySelectorAll('.instruction-details');
	let arrows = document.querySelectorAll('.light-gray-arrow');

	// make certain steps unclickable + remove arrow
	for ( let i = 0; i<level3Displays.length ; i++){

		// manually choose every step without details (count steps from 0 to 67)
		if ( i== 1 || i== 2 || i== 3 || i== 6 || i== 8 || i== 15 || i== 17 || i== 20 || i== 24 || i== 25 || i== 26 || i== 27 || i== 28 || i== 29 || i== 30 || i== 32 || i== 33 || i== 35 || i== 36 || i== 37 || i== 38 || i== 40 || i== 44 || i== 59 || i== 66 || i== 67) {
			arrows[i].style.display = 'none';

		} else {
			level2StepButtons[i].onclick = () => {
				pageLevel = 3;
				level2.style.display = "none";
				level3.style.display = 'block';
				level3Displays.forEach(display => { display.style.display = "none";});
				level3Displays[i].style.display = "block";
				}
		}
	}
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