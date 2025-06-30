// navbar started ----->

// small screen
var card = document.getElementById("card");
var maincontainer = document.getElementById("main-container");
function openmenu() {
  card.style.right = "0";
}
function closemenu() {
  card.style.right = "-275px";
}

// sign in
function togglePopupsignin() {
  let popup = document.getElementById("signin-popup");
  let overlay = document.querySelector(".overlaysignin");

  if (popup.style.display === "block") {
    popup.style.display = "none";
    overlay.style.display = "none";
  } else {
    popup.style.display = "block";
    overlay.style.display = "block";
  }
}
function signIn() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  togglePopup();
}

// sign up
function togglePopupsignup() {
  let popup = document.getElementById("signup-popup");
  let overlay = document.querySelector(".overlaysignup");

  if (popup.style.display === "block") {
    popup.style.display = "none";
    overlay.style.display = "none";
  } else {
    popup.style.display = "block";
    overlay.style.display = "block";
  }
}
function signUp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let password = document.getElementById("password").value;
  togglePopup();
  return false;
}

//switch signin-signup
function newuser(){
  let popup = document.getElementById("signin-popup");
  let overlay = document.querySelector(".overlaysignin");
  popup.style.display='none';
  overlay.style.display='none';
  togglePopupsignup();
}
function olduser(){
  let popup = document.getElementById("signup-popup");
  let overlay = document.querySelector(".overlaysignup");
  popup.style.display='none';
  overlay.style.display='none';
  togglePopupsignin();
}

// -----> navbar ended

// ----->   contact
// google sheet && span
const scriptURL = 'https://script.google.com/macros/s/AKfycbyHrWqQXy1ZOMkm3bUuYaVF9iiZMFnQwXhrsao8Ze_AVupViPTxGsKz4i5c6o3_cfJJ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
