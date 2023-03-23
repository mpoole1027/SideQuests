"use strict";

// On screen Buttons
const editBtn = document.querySelector(".editButton");
const submitBtn = document.querySelector(".submit");

// Pop-up stuff
const formBox = document.querySelector(".updateInformation");
const overlay = document.querySelector(".overlay");
const description = document.querySelector(".description");

// Input and label values
const nameInput = document.querySelector(".nameInput");
const jobInput = document.querySelector(".jobInput");
const dobInput = document.querySelector(".dobInput");
const nameVal = document.querySelector(".name");
const jobVal = document.querySelector(".job");
const dobVal = document.querySelector(".DOB");

// Trophy table data
const tableData = document.getElementsByTagName("td");

// getting current time when date is called
const date = new Date();

const isBirthday = (dateOfBirth, date) => {
  let currentDay,
    currentMonth,
    currentYear,
    birthDate,
    birthMonth,
    birthYear,
    age;

  // Get current day
  currentDay = date.getDate();

  // Get curreny month - Addition because of method is zero based
  currentMonth = date.getMonth() + 1;

  // Get current year
  currentYear = date.getFullYear();

  // get input day
  birthDate = Number(dateOfBirth.slice(-2));

  // get input month
  birthMonth = Number(dateOfBirth.slice(5, 7));

  // get input year
  birthYear = Number(dateOfBirth.slice(0, 4));

  // get age
  age = currentYear - birthYear;

  // check if today is user birthday
  if (currentDay === birthDate && currentMonth === birthMonth) {
    alert(`HAPPY BIRTHDAY YOU'RE ${age} YEARS OLD`);
    return true;
  } else {
    return false;
  }
};

// Shows box for profile information
editBtn.addEventListener("click", (event) => {
  // Stop page from refreshing on press
  event.preventDefault();

  // set Labels and input fields
  nameVal.textContent = "Name:";
  jobVal.textContent = "Occupation:";
  dobVal.textContent = "Date of Birth:";
  nameInput.value = "Name: ";
  jobInput.value = "Occupation: ";
  dobInput.value = "Date of Birth: ";

  // show form box
  formBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Empties input field when clicked
nameInput.addEventListener("click", () => {
  nameInput.value = "";
});

// Empties input field when clicked
jobInput.addEventListener("click", (event) => {
  jobInput.value = "";
});

// Fills out profile information with form information
submitBtn.addEventListener("click", (event) => {
  // stop page from refreshing on button press
  event.preventDefault();

  // Update website information
  nameInput.value === "Name: "
    ? ""
    : (nameVal.textContent += ` ${nameInput.value}`);
  jobInput.value === "Occupation: "
    ? ""
    : (jobVal.textContent += ` ${jobInput.value}`);
  dobInput.value === "Date of Birth: "
    ? ""
    : (dobVal.textContent += ` ${dobInput.value}`);

  // close form box
  formBox.classList.add("hidden");
  overlay.classList.add("hidden");

  // check if today is birthday
  isBirthday(dobInput.value, date);
});

// pulls up description of trophy
for (let index = 0; index < tableData.length; index++) {
  // get each trophy descriptor
  let indexClass = document.querySelector(`.description--${index}`);
  tableData[index].addEventListener("click", (event) => {
    // show actual trophy description
    overlay.classList.remove("hidden");
    indexClass.classList.remove("hidden");
  });

  // close description box and blur when blur is click
  overlay.addEventListener("click", (event) => {
    overlay.classList.add("hidden");
    indexClass.classList.add("hidden");
  });
}

// close description box/form box and blur when blur is click
overlay.addEventListener("click", (event) => {
  event.preventDefault();
  overlay.classList.add("hidden");
  description.classList.add("hidden");
  formBox.classList.add("hidden");
});

// close description/form box and blur when escape key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    overlay.classList.add("hidden");
    description.classList.add("hidden");
    formBox.classList.add("hidden");
  }
});
