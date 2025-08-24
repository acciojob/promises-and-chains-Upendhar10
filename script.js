//your JS code here. If required.
let form = document.querySelector('#userForm');

form.addEventListener("submit", ValidateForm);

function ValidateForm(e){
	e.preventDefault();

	let userName = form.elements["name"].value.trim();
	let userAge = form.elements["age"].value.trim();

	if(!userName || !userAge){
		alert("Please enter valid details");
		return;
	}

	// create a promise
	const submitForm = new Promise((resolve, reject) => {

		if(userName === "John" && userAge > 18){
			resolve(`Welcome, ${userName}. You can vote`);
		
		}else if (userName === 'Doe' && userAge < 18){
			reject(`Oh Sorry, ${userName}. You aren't old enough`);
	})

	// Handle Promise Outcome
	submitForm
		.then((message) => {
			setTimeout(() => {
				alert(message);
				form.submit();
			}, 4000);
		})
		.catch(() => {
			setTimeout(() => {
				alert(message);
				form.submit();
			}, 4000);
		})
}