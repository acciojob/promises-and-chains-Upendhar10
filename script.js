let form = document.querySelector('#userForm');

form.addEventListener("submit", ValidateForm);

function ValidateForm(e) {
  e.preventDefault();

  let userName = form.elements["name"].value.trim();
  let userAge = parseInt(form.elements["age"].value.trim(), 10);

  if (!userName || isNaN(userAge)) {
    alert("Please enter valid details");
    return;
  }

  PromiseLogic(userName, userAge);
}

function PromiseLogic(userName, userAge) {
  // create a promise
  const submitForm = new Promise((resolve, reject) => {
    if (userName === "John" && userAge > 18) {
      resolve(`Welcome, ${userName}. You can vote`);
    } else if (userAge < 18 || userName === "Doe") {
      reject(`Oh Sorry, ${userName}. You aren't old enough`);
    } else {
      reject(`Invalid credentials for ${userName}`);
    }
  });

  HandlePromise(submitForm);
}

function HandlePromise(submitForm) {
  // Handle Promise Outcome
  submitForm
    .then((message) => {
      setTimeout(() => {
        alert(message);
        form.submit(); // submit form after success
      }, 4000);
    })
    .catch((error) => {
      setTimeout(() => {
        alert(error);
        // form not submitted on error
      }, 4000);
    });
}
