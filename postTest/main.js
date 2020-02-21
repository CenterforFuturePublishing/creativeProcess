const axios = require('axios')

axios.post('http://localhost:3000/api/poem', {
    poem: "test très simplé\coucou comment allez vous?",
    graisse: 5000,
    contraste: 50,
    rigidite: 25,
})
    .then((res) => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    })
