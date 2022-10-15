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
