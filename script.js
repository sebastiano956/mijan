function confirmAction(button) {
    // Verificăm dacă butonul are deja clasa "green"
    if (!button.classList.contains('green')) {
        // Adăugăm clasa "green" care va schimba culoarea în verde
        button.classList.add('green');
    } else {
        // Dacă butonul este deja verde, îl putem lăsa ca atare sau îl putem reseta
        button.classList.remove('green');
    }
}
