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
				<p>${item.step1_details}</p>
				<div class="image-container"><img src="${item.step1_image}"></div>
				<p>${item.step1_details2}</p>
			</section>

			<section id="step2_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step2}</h4>
				<p>${item.step2_details}</p>
				<div class="image-container"><img src="${item.step2_image}"></div>
				<p>${item.step2_details2}</p>
			</section>

			<section id="step3_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step3}</h4>
				<p>${item.step3_details}</p>
				<div class="image-container"><img src="${item.step3_image}"></div>
				<p>${item.step3_details2}</p>
			</section>

			<section id="step4_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step4}</h4>
				<p>${item.step4_details}</p>
				<div class="image-container"><img src="${item.step4_image}"></div>
				<p>${item.step4_details2}</p>
			</section>

			<section id="step5_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step5}</h4>
				<p>${item.step5_details}</p>
				<div class="image-container"><img src="${item.step5_image}"></div>
				<p>${item.step5_details2}</p>
			</section>

			<section id="step6_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step6}</h4>
				<p>${item.step6_details}</p>
				<div class="image-container"><img src="${item.step6_image}"></div>
				<p>${item.step6_details2}</p>
			</section>

			<section id="step7_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step7}</h4>
				<p>${item.step7_details}</p>
				<div class="image-container"><img src="${item.step7_image}"></div>
				<p>${item.step7_details2}</p>
			</section>

			<section id="step8_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step8}</h4>
				<p>${item.step8_details}</p>
				<div class="image-container"><img src="${item.step8_image}"></div>
				<p>${item.step8_details2}</p>
			</section>

			<section id="step9_details" class="instruction-details">
				<h3>${item.emergency_guides}</h3>
				<h4 class="step-bold">${item.step9}</h4>
				<p>${item.step9_details}</p>
				<div class="image-container"><img src="${item.step9_image}"></div>
				<p>${item.step9_details2}</p>
			</section>
			`

		dataList.insertAdjacentHTML('beforeend', listItem) // Add it to the `ul`!
	})

	// open instructions list + back & done buttons

	let instructionsPage =  document.querySelectorAll('.button-category')
	let backButton = document.querySelector('#back-button')
	let doneButton = document.querySelector('#done-button')
	instructionsPage.forEach((openInstructions) => {
		openInstructions.onclick = () => {
			openInstructions.nextElementSibling.classList.toggle('active')
			backButton.classList.toggle('active')
			doneButton.classList.toggle('inactive')
		}
	})

	backButton.onclick = () => {
		instructionDetailsPage.classList.remove('active')
	}

	// this is not working... i think it's calling the details for bleeding on every emergency
	// open instruction details 1

	let instructionDetails = document.querySelectorAll('#step1')
	let instructionDetailsPage = document.querySelector('#step1_details')
	instructionDetails.forEach((openInstructionDetails) => {
		openInstructionDetails.onclick = () => {
			instructionDetailsPage.classList.toggle('active')
		}
	})

	// open instruction details 2

	let instructionDetails2 = document.querySelectorAll('#step2')
	let instructionDetailsPage2 = document.querySelector('#step2_details')
	instructionDetails2.forEach((openInstructionDetails2) => {
		openInstructionDetails2.onclick = () => {
			instructionDetailsPage2.classList.toggle('active')
		}
	})

	let instructionDetails3 = document.querySelectorAll('#step3')
	let instructionDetailsPage3 = document.querySelector('#step3_details')
	instructionDetails3.forEach((openInstructionDetails3) => {
		openInstructionDetails3.onclick = () => {
			instructionDetailsPage3.classList.toggle('active')
		}
	})

	let instructionDetails4 = document.querySelectorAll('#step4')
	let instructionDetailsPage4 = document.querySelector('#step4_details')
	instructionDetails4.forEach((openInstructionDetails4) => {
		openInstructionDetails4.onclick = () => {
			instructionDetailsPage4.classList.toggle('active')
		}
	})

	let instructionDetails5 = document.querySelectorAll('#step5')
	let instructionDetailsPage5 = document.querySelector('#step5_details')
	instructionDetails5.forEach((openInstructionDetails5) => {
		openInstructionDetails5.onclick = () => {
			instructionDetailsPage5.classList.toggle('active')
		}
	})

	let instructionDetails6 = document.querySelectorAll('#step6')
	let instructionDetailsPage6 = document.querySelector('#step6_details')
	instructionDetails6.forEach((openInstructionDetails6) => {
		openInstructionDetails6.onclick = () => {
			instructionDetailsPage6.classList.toggle('active')
		}
	})

	let instructionDetails7 = document.querySelectorAll('#step7')
	let instructionDetailsPage7 = document.querySelector('#step7_details')
	instructionDetails7.forEach((openInstructionDetails7) => {
		openInstructionDetails7.onclick = () => {
			instructionDetailsPage7.classList.toggle('active')
		}
	})

	let instructionDetails8 = document.querySelectorAll('#step8')
	let instructionDetailsPage8 = document.querySelector('#step8_details')
	instructionDetails8.forEach((openInstructionDetails8) => {
		openInstructionDetails8.onclick = () => {
			instructionDetailsPage8.classList.toggle('active')
		}
	})

	let instructionDetails9 = document.querySelectorAll('#step9')
	let instructionDetailsPage9 = document.querySelector('#step9_details')
	instructionDetails9.forEach((openInstructionDetails9) => {
		openInstructionDetails9.onclick = () => {
			instructionDetailsPage9.classList.toggle('active')
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

