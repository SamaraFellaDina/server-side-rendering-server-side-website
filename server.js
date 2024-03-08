// Stap 1 | Importeren van de bestanden 
// om zo de server te draaien

// Het importeren van express uit de node_module mappen
import express from 'express'

// Importeer deze zelfgemaakte functie in de code om 
// zo url's goed te kunnen ontvangen
import fetchJson from './helpers/fetch-json.js'

// Express denieren naar "app"
const app = express()

// de link naar de data definieren
const apiUrl = 'https://redpers.nl/wp-json/wp/v2'
const apiPosts = apiUrl + '/posts'
const apiUsers = apiUrl + '/user'
const apiCategories = apiUrl + '/category'


// Stap 2 | Stel de juiste mappen in voor de server

// Hier stel je in dat de bestanden 
// die worden gelezen ejs zijn
app.set('view engine', 'ejs')

//  De map toewijzen waar deze bestanden staan
app.set('views', './views')

// waar je de statische data kan terugvinden
app.use(express.static('public'))

// Is makkelijker om te gebruiken bij forms
app.use(express.urlencoded({ extended: true }))

// Stap 3 | Het maken van routes van de server

// een route voor je data(index)
app.get('/', function (request, response) {

    // Hier haal je de url op en maak je er een
    // Json file van ipv een link. Waarna 
    // het wordt vernoemd naar apiData
    fetchJson(apiPosts).then((apiData) => {

        // Deze info wordt daarna 
        // meegegeven aan de toegewezen EJS
        response.render('home', {
            articles: apiData,
        })

        // Hiermee kan je checken of hij 
        // de juiste data ophaald van de API
        // console.log(apiData)
    })
})

app.get('/artikel/:id',function(request,response) {
    fetchJson(apiUrl + "?filter={'id'}" + request.params.id).then((artikelData) => {
        // console.log(artikelData)
        artikel:artikelData.data.id

    })
})

// Hoe weet hij dat het gaat om de header?
app.get('/:category', function (request, response) {
    fetchJson(apiUrl).then((apiData) => {
        // data word meegenomen naar category.ejs
        response.render('category'), {
            category: apiData.articleSection
        }
        // console.log(apiData)
    })
})


// Stap 4 | Een route geven aan de server om te draaien

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 6969)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
