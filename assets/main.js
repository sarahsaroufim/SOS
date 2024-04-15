// D.R.Y... i know... be prepared for some wet ass code

// Function to render your items
const renderItems = (data) => {
	// The `ul` where the items will be inserted
	const dataList = document.getElementById('grid')

	// Loop through each item in the data array
	data.forEach((item) => {
		console.log(item.emergency_guides)

		// Make a “template literal” as we have before, inserting your data (and maybe the class)
		let listItem =
			`<button class="button-category">${item.emergency_guides}</button>

			<div class="instructions-container">
			<h3>${item.emergency_guides}</h3>
			<ol id="instructions">
				<h4>Instructions</h4>
				<li class="step"><a id="step1">${item.step1}</a></li><hr class="solid">
				<li class="step"><a id="step2">${item.step2}</a></li><hr class="solid">
				<li class="step"><a id="step3">${item.step3}</a></li><hr class="solid">
				<li class="step"><a id="step4">${item.step4}</a></li><hr class="solid">
				<li class="step"><a id="step5">${item.step5}</a></li><hr class="solid">
				<li class="step"><a id="step6">${item.step6}</a></li><hr class="solid">
				<li class="step"><a id="step7">${item.step7}</a></li><hr class="solid">
				<li class="step"><a id="step8">${item.step8}</a></li><hr class="solid">
				<li id="step-9"><a id="step9">${item.step9}</a></li>
			</ol>
			</div>

			<section id="step1_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step1}</h4>
				<p class="details">${item.step1_details}</p>
				<div class="image-container"><img src="${item.step1_image}"></div>
				<p class="details">${item.step1_details2}</p>
			</section>

			<section id="step2_details" class="instruction-details"> 
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step2}</h4>
				<p class="details">${item.step2_details}</p>
				<div class="image-container"><img src="${item.step2_image}"></div>
				<p class="details">${item.step2_details2}</p>
			</section>

			<section id="step3_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step3}</h4>
				<p class="details">${item.step3_details}</p>
				<div class="image-container"><img src="${item.step3_image}"></div>
				<p class="details">${item.step3_details2}</p>
			</section>

			<section id="step4_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step4}</h4>
				<p class="details">${item.step4_details}</p>
				<div class="image-container"><img src="${item.step4_image}"></div>
				<p class="details">${item.step4_details2}</p>
			</section>

			<section id="step5_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step5}</h4>
				<p class="details">${item.step5_details}</p>
				<div class="image-container"><img src="${item.step5_image}"></div>
				<p class="details">${item.step5_details2}</p>
			</section>

			<section id="step6_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step6}</h4>
				<p class="details">${item.step6_details}</p>
				<div class="image-container"><img src="${item.step6_image}"></div>
				<p class="details">${item.step6_details2}</p>
			</section>

			<section id="step7_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step7}</h4>
				<p class="details">${item.step7_details}</p>
				<div class="image-container"><img src="${item.step7_image}"></div>
				<p class="details">${item.step7_details2}</p>
			</section>

			<section id="step8_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step8}</h4>
				<p class="details">${item.step8_details}</p>
				<div class="image-container"><img src="${item.step8_image}"></div>
				<p class="details">${item.step8_details2}</p>
			</section>

			<section id="step9_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step9}</h4>
				<p class="details">${item.step9_details}</p>
				<div class="image-container"><img src="${item.step9_image}"></div>
				<p class="details">${item.step9_details2}</p>
			</section>
			`

		dataList.insertAdjacentHTML('beforeend', listItem) // Add it to the `ul`!
	})

	// opens instructions steps + back & done buttons

	let instructionsPage =  document.querySelectorAll('.button-category')
	let backButton = document.querySelector('#back-button')
	let doneButton = document.querySelector('#done-button')
	let homeBackButton = document.querySelector('#home-back-button')
	instructionsPage.forEach((openInstructions) => {
		openInstructions.onclick = () => {
			homeBackButton.classList.toggle('active')
			openInstructions.nextElementSibling.classList.toggle('active')
			backButton.classList.remove('active')
			doneButton.classList.toggle('inactive')
		}
	})

	// back button that works from every instruction details page

	backButton.onclick = () => {
		instructionDetailsPage.classList.remove('active')
		instructionDetailsPage2.classList.remove('active')
		instructionDetailsPage3.classList.remove('active')
		instructionDetailsPage4.classList.remove('active')
		instructionDetailsPage5.classList.remove('active')
		instructionDetailsPage6.classList.remove('active')
		instructionDetailsPage7.classList.remove('active')
		instructionDetailsPage8.classList.remove('active')
		instructionDetailsPage9.classList.remove('active')
		backButton.classList.remove('active')
		homeBackButton.classList.toggle('active')
	}


	// opens instruction details for bleeding steps

	let instructionDetails = document.querySelectorAll('#step1')
	let instructionDetailsPage = document.querySelector('#step1_details')
	instructionDetails.forEach((openInstructionDetails) => {
		openInstructionDetails.onclick = () => {
			instructionDetailsPage.classList.toggle('active')
			backButton.classList.toggle('active')
			homeBackButton.classList.remove('active')
		}
	})

	let instructionDetails2 = document.querySelectorAll('#step2')
	let instructionDetailsPage2 = document.querySelector('#step2_details')
	instructionDetails2.forEach((openInstructionDetails2) => {
		openInstructionDetails2.onclick = () => {
			instructionDetailsPage2.classList.toggle('active')
			backButton.classList.toggle('active')
			homeBackButton.classList.remove('active')
		}
	})

	let instructionDetails3 = document.querySelectorAll('#step3')
	let instructionDetailsPage3 = document.querySelector('#step3_details')
	instructionDetails3.forEach((openInstructionDetails3) => {
		openInstructionDetails3.onclick = () => {
			instructionDetailsPage3.classList.toggle('active')
			backButton.classList.toggle('active')
			homeBackButton.classList.remove('active')
		}
	})

	let instructionDetails4 = document.querySelectorAll('#step4')
	let instructionDetailsPage4 = document.querySelector('#step4_details')
	instructionDetails4.forEach((openInstructionDetails4) => {
		openInstructionDetails4.onclick = () => {
			instructionDetailsPage4.classList.toggle('active')
			backButton.classList.toggle('active')
			homeBackButton.classList.remove('active')
		}
	})

	let instructionDetails5 = document.querySelectorAll('#step5')
	let instructionDetailsPage5 = document.querySelector('#step5_details')
	instructionDetails5.forEach((openInstructionDetails5) => {
		openInstructionDetails5.onclick = () => {
			instructionDetailsPage5.classList.toggle('active')
			backButton.classList.toggle('active')
			homeBackButton.classList.remove('active')
		}
	})

	let instructionDetails6 = document.querySelectorAll('#step6')
	let instructionDetailsPage6 = document.querySelector('#step6_details')
	instructionDetails6.forEach((openInstructionDetails6) => {
		openInstructionDetails6.onclick = () => {
			instructionDetailsPage6.classList.toggle('active')
			backButton.classList.toggle('active')
			homeBackButton.classList.remove('active')
		}
	})

	let instructionDetails7 = document.querySelectorAll('#step7')
	let instructionDetailsPage7 = document.querySelector('#step7_details')
	instructionDetails7.forEach((openInstructionDetails7) => {
		openInstructionDetails7.onclick = () => {
			instructionDetailsPage7.classList.toggle('active')
			backButton.classList.toggle('active')
			homeBackButton.classList.remove('active')
		}
	})

	let instructionDetails8 = document.querySelectorAll('#step8')
	let instructionDetailsPage8 = document.querySelector('#step8_details')
	instructionDetails8.forEach((openInstructionDetails8) => {
		openInstructionDetails8.onclick = () => {
			instructionDetailsPage8.classList.toggle('active')
			backButton.classList.toggle('active')
			homeBackButton.classList.remove('active')
		}
	})

	let instructionDetails9 = document.querySelectorAll('#step9')
	let instructionDetailsPage9 = document.querySelector('#step9_details')
	instructionDetails9.forEach((openInstructionDetails9) => {
		openInstructionDetails9.onclick = () => {
			instructionDetailsPage9.classList.toggle('active')
			backButton.classList.toggle('active')
			homeBackButton.classList.remove('active')
		}
	})
}

// Fetch gets your (local) JSON file…
fetch('assets/emergencies.json')
	.then(response => response.json())
	.then(data => {
		console.log(data)
		// And passes the data to the function, above!
		renderItems(data)
	})

