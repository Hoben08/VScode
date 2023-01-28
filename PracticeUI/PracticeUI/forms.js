var signupTab = document.getElementById("signup-tab");
var loginTab = document.getElementById("login-tab");
var signupButton = document.getElementsByClassName("forms-signup")[0];
var loginButton = document.getElementsByClassName("forms-login")[0];
var formsSelector = document.getElementsByClassName("forms-selector");

function activateTab(tab) {
  if (tab) {
    loginButton.classList.add("active-button");
    formsSelector[1].classList.add("active-selector");
    loginTab.classList.add("active-tab");
    signupButton.classList.remove("active-button");
    formsSelector[0].classList.remove("active-selector");
    signupTab.classList.remove("active-tab");
  } else {
    loginButton.classList.remove("active-button");
    formsSelector[1].classList.remove("active-selector");
    loginTab.classList.remove("active-tab");
    signupButton.classList.add("active-button");
    formsSelector[0].classList.add("active-selector");
    signupTab.classList.add("active-tab");
  }
}

loginButton.onclick = function () {
  loginButton.classList.add("active-button");
  formsSelector[1].classList.add("active-selector");
  loginTab.classList.add("active-tab");
  signupButton.classList.remove("active-button");
  formsSelector[0].classList.remove("active-selector");
  signupTab.classList.remove("active-tab");
};

signupButton.onclick = function () {
  loginButton.classList.remove("active-button");
  formsSelector[1].classList.remove("active-selector");
  loginTab.classList.remove("active-tab");
  signupButton.classList.add("active-button");
  formsSelector[0].classList.add("active-selector");
  signupTab.classList.add("active-tab");
};

window.onload = function () {
  var tab = new URLSearchParams(window.location.search).get("tab");
  activateTab(parseInt(tab));
  console.log(tab);
};
