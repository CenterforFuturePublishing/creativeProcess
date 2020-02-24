const axios = require('axios')

axios.post('http://localhost:3000/api/poem', {
    poem: "Des petits et des des. Le passant s'est mise.\n" +
        "Cette soleil de l'autre souffle d'une devant,\n" +
        'Où la monte se repose et se retire en son voyage\n' +
        'Le muse est le reste ; le plus sonore et sa mai !',
    graisse: 30,
    contraste: 0,
    rigidite: 0
})
    .then((res) => {
        // console.log(`statusCode: ${res.statusCode}`)
        console.log(res.data)
    })
    .catch((error) => {
        console.error(error)
    })
