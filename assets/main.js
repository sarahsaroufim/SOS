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
				<li class="step"><a id="step1_details">${item.step1}</a></li><hr class="solid">
				<li class="step"><a id="step2_details">${item.step2}</a></li><hr class="solid">
				<li class="step"><a id="step3_details">${item.step3}</a></li><hr class="solid">
				<li class="step"><a id="step4_details">${item.step4}</a></li><hr class="solid">
				<li class="step"><a id="step5_details">${item.step5}</a></li><hr class="solid">
				<li class="step"><a id="step6_details">${item.step6}</a></li><hr class="solid">
				<li class="step"><a id="step7_details">${item.step7}</a></li><hr class="solid">
				<li class="step"><a id="step8_details">${item.step8}</a></li><hr class="solid">
				<li id="step-9"><a id="step9_details">${item.step9}</a></li>
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
}

// Fetch gets your (local) JSON file…
fetch('assets/emergencies.json')
	.then(response => response.json())
	.then(data => {
		console.log(data)
		// And passes the data to the function, above!
		renderItems(data)
	})
