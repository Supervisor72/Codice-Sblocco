// ▼▼▼ MODIFICA QUI ▼▼▼
// Inserisci il tuo username Telegram qui, senza la '@'
const ilTuoUsernameTelegram = "IL_TUO_USERNAME";
// ▲▲▲ MODIFICA QUI ▲▲▲


document.getElementById('requestForm').addEventListener('submit', function(event) {
    // Impedisce al modulo di inviare i dati nel modo tradizionale
    event.preventDefault();

    // 1. Raccoglie i dati dai campi del modulo
    const puntoVendita = document.getElementById('puntoVendita').value;
    const dataConsegna = document.getElementById('dataConsegna').value;
    const trasportatore = document.getElementById('trasportatore').value;
    const cliente = document.getElementById('cliente').value;

    // 2. Formatta la data in formato italiano (GG/MM/AAAA)
    const dataParts = dataConsegna.split('-'); // Formato YYYY-MM-DD
    const dataFormattata = `${dataParts[2]}/${dataParts[1]}/${dataParts[0]}`;

    // 3. Crea il messaggio di testo
    // Le %0A equivalgono a un "a capo" negli URL
    const messaggio = `
--- RICHIESTA SBLOCCO ---

Punto Vendita:
*${puntoVendita}*

Data Consegna:
*${dataFormattata}*

Trasportatore:
*${trasportatore}*

Cliente:
*${cliente}*
    `;

    // 4. Codifica il messaggio per inserirlo in un link
    // Usiamo encodeURIComponent per gestire correttamente spazi e caratteri speciali
    const messaggioCodificato = encodeURIComponent(messaggio);

    // 5. Crea il link per aprire Telegram
    // Questo link apre una chat con te (ilTuoUsernameTelegram)
    // e pre-compila il campo di testo con il messaggio.
    const telegramUrl = `https:t.me/${ilTuoUsernameTelegram}?text=${messaggioCodificato}`;

    // 6. Apre il link
    // Questo chiederà al browser di aprire l'app Telegram (desktop o mobile)
    window.open(telegramUrl, '_blank');
});
