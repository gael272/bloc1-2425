function changerCouleurFond() {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}


function ajouterElement() {
  const ul = document.getElementById('liste');
  const newElement = document.getElementById('newElement').value;
  if (newElement) {
      const li = document.createElement('li');
      li.textContent = newElement;
      ul.appendChild(li);
      document.getElementById('newElement').value = '';
  }
}


function calculerSomme() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const somme = num1 + num2;
  document.getElementById('resultatAddition').textContent = 'La somme est : ' + somme;
}


function afficherImage() {
  const choix = document.getElementById('choixImage').value;
  const img = document.getElementById('image');
  if (choix === 'chat') {
      img.src = 'https://placekitten.com/200/300';
  } else if (choix === 'chien') {
      img.src = 'https://placedog.net/200/300';
  } else {
      img.src = '';
  }
}


function afficherAlerte() {
  alert('Vous avez passé la souris sur la zone!');
}


function demarrerHorloge() {
  setInterval(() => {
      const now = new Date();
      document.getElementById('horloge').textContent = now.toLocaleTimeString();
  }, 1000);
}
demarrerHorloge();


function confirmerSuppression() {
  const confirmation = confirm('Voulez-vous vraiment supprimer cet élément ?');
  if (confirmation) {
      document.getElementById('suppressionStatus').textContent = 'Élément supprimé !';
  } else {
      document.getElementById('suppressionStatus').textContent = 'Suppression annulée.';
  }
}


function toggleElement() {
  const checkbox = document.getElementById('toggleCheck');
  const element = document.getElementById('elementCache');
  if (checkbox.checked) {
      element.style.display = 'block';
  } else {
      element.style.display = 'none';
  }
}


function envoyerFormulaire() {
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  document.getElementById('formStatus').textContent = `Merci ${nom}, nous avons bien reçu votre message : "${message}".`;
  console.log(`Nom: ${nom}, Email: ${email}, Message: ${message}`);
  return false;
}