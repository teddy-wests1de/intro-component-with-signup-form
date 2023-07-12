"use strict";
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector(".submit");
const form = document.querySelectorAll(".signup");
const errIcon = document.querySelectorAll(".icon-error");

const validEmail = function (inputEmail) {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return regex.test(inputEmail);
};

const validate = function (input, message) {
    // console.log(message);
    input.parentNode.classList.add("error"); 
    if (!validEmail(email.value)) {
      console.log("Please enter a valid email address...!");
      email.parentNode.classList.add("error");
    }
};

const success = function (input) {
  input.parentNode.classList.add('success')
  input.parentNode.classList.remove("error");
}
submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (firstName.value === '') {
    validate(firstName, "Please enter your First Name...!");
  } else {
    success(firstName)
  }
  if (lastName.value === '') {
    validate(lastName, "Please enter your Last Name...!");
  } else {
    success(lastName)
  }
  if (email.value === '') {
    validate(email, "Please enter your email...!");
  } else {
    success(email)
  }
  if (password.value === '') {
    validate(password, "Please enter your password...!");
  } else {
    success(password)
  }

 
});
