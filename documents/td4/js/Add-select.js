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
