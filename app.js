// ABOUT ME SECTION

// select the two classes we will be needing
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

// the funtion
function opentab(tabname) {
  // to remove the red underline
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  //   to remove the contents of the tab
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  //   to add the 'active-link'(red underline) class to what ever is targeted
  event.currentTarget.classList.add("active-link");
  //   to add the 'active tab' class to whatever is selected
  document.getElementById(tabname).classList.add("active-tab");
}
// END OF ABOUT

// SCRIPT FOR SIDE BAR IN SMALLER SCREENS

var sideMenu = document.getElementById("sidemenu");
function openmenu() {
  sideMenu.style.right = "0";
  sideMenu.style.transition = ".5s";
}

function closemenu() {
  sideMenu.style.right = "-200px";
  sideMenu.style.transition = ".5s";
}

// FOR THE WEBAPP TO BE LINKED TO GOOGLE SPREADSHEETS

const scriptURL =
  "https://script.google.com/macros/s/AKfycby_llpSayfxjjsU_LdrZzDr1laymKyxSKkcJBf9czGkZzpP3zXxwBt3SyOFdhlA_UPwcA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

const msg = document.getElementById("msg");
