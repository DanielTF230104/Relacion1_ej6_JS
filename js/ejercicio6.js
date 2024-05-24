function verificarPalindromo() {
    const cadena = document.getElementById('cadena').value.trim();

    if (cadena === "") {
        alert('La cadena no puede estar vacía.');
        return;
    }

    const cadenaLimpia = cadena.replace(/[\W_]/g, '').toLowerCase();
    const cadenaReversa = cadenaLimpia.split('').reverse().join('');

    if (cadenaLimpia === cadenaReversa) {
        document.getElementById('resultado').textContent = `La cadena "${cadena}" es un palíndromo.`;
    } else {
        const palindromoGenerado = cadena + cadena.split('').reverse().join('');
        document.getElementById('resultado').textContent = `La cadena "${cadena}" no es un palíndromo. El palíndromo generado es: "${palindromoGenerado}".`;
    }
}