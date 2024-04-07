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
			<h2>${item.emergency_guides}</h2>
			<ol id="instructions">
				<h3>Instructions</h3>
				<li class="step">${item.step1}</li><hr class="solid">
				<li class="step">${item.step2}</li><hr class="solid">
				<li class="step">${item.step3}</li><hr class="solid">
				<li class="step">${item.step4}</li><hr class="solid">
				<li class="step">${item.step5}</li><hr class="solid">
				<li class="step">${item.step6}</li><hr class="solid">
				<li class="step">${item.step7}</li><hr class="solid">
				<li class="step">${item.step8}</li><hr class="solid">
				<li id="step-9">${item.step9}</li>
			</ol>
		</div>
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

