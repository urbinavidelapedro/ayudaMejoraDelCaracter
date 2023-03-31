// const form = document.getElementById('character-flaws-form');
// const resultsContainer = document.getElementById('results');

// form.addEventListener('submit', function(event) {
// 	event.preventDefault();
// 	const formData = new FormData(form);
// 	const checkedBoxes = formData.getAll('flaw[]');
// 	const flawsPresent = [];

// 	for (const flaw of checkedBoxes) {
// 		flawsPresent.push(flaw);
// 	}

// 	resultsContainer.innerHTML = `<h2>Las fallas del carácter que has tenido son:</h2><ul>${flawsPresent.map(flaw => `<li>${flaw}</li>`).join('')}</ul>`;
// });

const form = document.getElementById('character-flaws-form');
const resultsContainer = document.getElementById('results');

const antonyms = {
    "Egoísmo": "Altruismo",
"Arrogancia": "Humildad",
"Envidia": "Admiración",
"Ira": "Paciencia",
"Avaricia": "Generosidad",
"Vanidad": "Modestia",
"Negatividad": "Positividad",
"Pesimismo": "Optimismo",
"Impaciencia": "Paciencia",
"Impulsividad": "Reflexión",
"Indiferencia": "Empatía",
"Falta de empatía": "Empatía",
"Falta de compasión": "Compasión",
"Falta de gratitud": "Agradecimiento",
"Falta de perdón": "Perdón",
"Falta de humildad": "Humildad",
"Irresponsabilidad": "Responsabilidad",
"Falta de autocontrol": "Autocontrol",
"Adicciones": "Autodominio",
"Falta de disciplina": "Disciplina",
"Falta de sentido de propósito": "Propósito",
"Falta de integridad": "Integridad",
"Falta de honestidad": "Honestidad",
"Falta de lealtad": "Lealtad",
"Falta de respeto": "Respeto",
"Falta de paciencia": "Paciencia",
"Falta de autoestima": "Autoestima",
"Inmadurez": "Madurez",
"Inseguridad": "Seguridad",
"Timidez": "Confianza",
"Soberbia": "Humildad",
"Falta de confianza": "Confianza",
"Falta de autoconciencia": "Autoconciencia",
"Miedo": "Valentía",
"Prejuicio": "Tolerancia",
"Falta de curiosidad": "Curiosidad",
"Falta de creatividad": "Creatividad",
"Falta de originalidad": "Originalidad",
"Falta de flexibilidad": "Flexibilidad",
"Falta de adaptabilidad": "Adaptabilidad",
"Falta de tolerancia": "Tolerancia",
"Falta de diversidad": "Diversidad",
"Falta de inclusión": "Inclusión",
"Falta de justicia": "Justicia",
"Falta de equidad": "Equidad",
"Falta de emprendimiento": "Emprendimiento",
"Falta de iniciativa": "Iniciativa",
"Falta de perseverancia": "Perseverancia",
"Falta de determinación": "Determinación",
"Falta de valentía": "Valentía",
    // Agregar antónimos para cada opción de respuesta
};

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const flaws = document.querySelectorAll('input[name="flaw[]"]:checked');
    let selectedFlaws = [];

    flaws.forEach(function(flaw) {
        selectedFlaws.push(flaw.value);
    });

    let resultsHtml = '<h2>Fallas del carácter seleccionadas:</h2><ul>';

    selectedFlaws.forEach(function(flaw) {
        resultsHtml += '<li>' + flaw + '</li>';
    });

    resultsHtml += '</ul>';

    resultsContainer.innerHTML = resultsHtml;

    let antonymsHtml = '<h2>Antónimos de las fallas del carácter:</h2><ul>';

    selectedFlaws.forEach(function(flaw) {
        antonymsHtml += '<li>' + antonyms[flaw] + '</li>';
    });

    antonymsHtml += '</ul>';

    const antonymsContainer = document.createElement('div');
    antonymsContainer.innerHTML = antonymsHtml;

    document.body.appendChild(antonymsContainer);
});



