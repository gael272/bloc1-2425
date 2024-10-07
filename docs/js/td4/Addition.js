function calculerSomme() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const somme = num1 + num2;
    document.getElementById('resultatAddition').textContent = 'La somme est : ' + somme;