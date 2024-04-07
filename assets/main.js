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
			<h2>BLEEDING</h2>
			<ol id="instructions">
				<h3>Instructions</h3>
				<li class="step">${item.step1}</li><hr class="solid">
				<li class="step">${item.step2}</li><hr class="solid">
				<li class="step">3. Raise injury above heart</li><hr class="solid">
				<li class="step">4. Bandage pad firmly in place without <span class="indent">releasing</span> pressure</li><hr class="solid">
				<li class="step">5. Do not remove or cut an embedded <span class="indent">foreign</span> body</li><hr class="solid">
				<li class="step">6. Apply additional pad if leaking</li><hr class="solid">
				<li class="step">7. Reassure the patient</li><hr class="solid">
				<li class="step">8. If excessive bleeding persists, apply <span class="indent">a</span> tourniquet</li><hr class="solid">
				<li id="step-9">9. Call Emergency Services</li>
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

