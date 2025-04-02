let numberInput = document.querySelector('.number-input');
let passwordInput = document.querySelector('#password');
let button = document.querySelector('.enter');
let form = document.querySelector('form');

let adhamjonMarsian = {
  name: 'Adhamjon',
  surname: 'Jabborov',
  coin: 258,
  hp: 9340,
  group: 'f2-1275',
  login: 909090, 
  password: 55555,
  teacher: 'Akmal Mordayev'
};

let name = 'Azam';

localStorage.setItem('azam', name);
localStorage.setItem('adhamjonMarsian', JSON.stringify(adhamjonMarsian));
let marsian = JSON.parse(localStorage.getItem('adhamjonMarsian'));

button.disabled = true;
button.style.cursor = 'not-allowed';

let myButtonActive = function () {
  if (numberInput.value.length === 6 && passwordInput.value.length === 5 ) { 
    button.disabled = false;
    button.style.cursor = 'pointer';
    button.style.backgroundColor = 'green';
  } else {
    button.disabled = true;
    button.style.cursor = 'not-allowed';
    button.style.backgroundColor = 'red';
  }
};

numberInput.addEventListener('input', myButtonActive);
passwordInput.addEventListener('input', myButtonActive);

button.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    Number(numberInput.value) === marsian.login &&
    Number(passwordInput.value) === marsian.password
  ) {
    window.location.href = 'profile.html';
  } else {
    alert('Login yoki parol xato ❌');
  }
});


function eyeClose() {
  let passwordInput = document.querySelector("#password");
  let iClose = document.querySelector("#close-eye");
  let iOpen = document.querySelector("#open-eye");

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      iOpen.style.display = "inline-block";
      iClose.style.display = "none";
  } else {
      passwordInput.type = "password";
      iClose.style.display = "inline-block";
      iOpen.style.display = "none";
  }
}

document.querySelector("#close-eye").addEventListener("click", eyeClose);
document.querySelector("#open-eye").addEventListener("click", eyeClose);
