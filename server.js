// Stap 1 | Importeren van de bestanden 
// om zo de server te draaien

// Het importeren van express uit de node_module mappen
import express, { json } from 'express'

// Importeer deze zelfgemaakte functie in de code om 
// zo url's goed te kunnen ontvangen
import fetchJson from '../helpers/fetch-json.js'







// Stap 3 | Een route geven aan de server om te draaien

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
