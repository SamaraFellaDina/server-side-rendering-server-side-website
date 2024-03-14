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
const apiUsers = apiUrl + '/users'
const apiCategories = apiUrl + '/categories'


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
        response.render('home.ejs', {
            articles: apiData
        })
        
        // Hiermee kan je checken of hij 
        // de juiste data ophaald van de API
        // console.log(apiData)
    })
})


app.get('/artikel/:slug', function (request, response) {
 
  // Hier haal je de url op en maak je er een
  // Json file van ipv een link. Waarna
  // het wordt vernoemd naar apiData
  fetchJson(apiPosts + '?slug=' + request.params.slug).then((apiData) => {
 
      // Deze info wordt daarna
      // meegegeven aan de toegewezen EJS
      response.render('article.ejs', {
        // .data is belangrijk om er bij te schrijven
        // alle id's zijn een soort van mappen, en door .data te schrijven ga je eigenlijk een map 'dieper'
          article: apiData
    })
      // console.log(apiData)
  })
})


// Stap 4 | Het maken van categorieeen in routes
const categoryRoutes = [
    'binnenland',
    'buitenland',
    'column',
    'economie',
    'kunst & media',
    'podcast',
    'politiek',
    'wetenschap'
  ]
  //  https://redpers.nl/wp-json/wp/v2/posts?filter=[articleSection]=%22binnenland%22
  categoryRoutes.forEach(category => {
    app.get("/" + category, function (request, response) {
        fetchJson(apiCategories + "?filter=" + category).then((categoryApi) => {

          // Kijken of alle goede dat is binnengekomen
          // console.log(categoryApi)

          response.render('category.ejs')
      });
    });
  })

// Stap 5 | Een route geven aan de server om te draaien

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 7000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
