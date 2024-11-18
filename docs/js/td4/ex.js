document.getElementById('changeColorBtn').addEventListener('click', function () {
  document.body.style.backgroundColor = document.body.style.backgroundColor === 'purple' ? 'white' : 'purple';
});

document.getElementById('addItemBtn').addEventListener('click', function () {
const itemValue = document.getElementById('itemInput').value;
if (itemValue) {
  const li = document.createElement('li');
  li.textContent = itemValue;
  document.getElementById('itemList').appendChild(li);
  document.getElementById('itemInput').value = '';
}
});

document.getElementById('addBtn').addEventListener('click', function () {
const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
if (!isNaN(num1) && !isNaN(num2)) {
  document.getElementById('result').textContent = `La somme est : ${num1 + num2}`;
} else {
  document.getElementById('result').textContent = 'Veuillez entrer deux nombres valides.';
}
});

document.getElementById('imageSelect').addEventListener('change', function () {
document.getElementById('displayImage').src = this.value;
});

document.getElementById('hoverElement').addEventListener('mouseover', function () {
alert('Vous avez survolé cet élément !');
});

function updateClock() {
const now = new Date();
const timeString = now.toLocaleTimeString();
document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

document.getElementById('deleteBtn').addEventListener('click', function () {
const confirmDelete = confirm('Voulez-vous vraiment supprimer cet élément ?');
if (confirmDelete) {
  document.getElementById('deleteElement').remove();
}
});

document.getElementById('toggleCheckbox').addEventListener('change', function () {
const element = document.getElementById('toggleElement');
element.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
event.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
console.log(`Nom: ${name}, Email: ${email}, Message: ${message}`);
});

"bt && bt.add = vérifier si bouton existe, sinon ne pas éxécuter le bout de code"