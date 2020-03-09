const axios = require('axios')

postArrayOfPoemData([
    {
        poem: "Des petits et des des. Le passant s'est mise.\n" +
            "Cette soleil de l'autre souffle d'une devant,\n" +
            'Où la monte se repose et se retire en son voyage\n' +
            'Le muse est le reste ; le plus sonore et sa mai !',
        graisse: 30,
        contraste: 0,
        rigidite: 0,
    },
    {
        poem: "Des petits et des des. Le passant s'est mise.\n" +
            "Cette soleil de l'autre souffle d'une devant,\n" +
            'Où la monte se repose et se retire en son voyage\n' +
            'Le muse est le reste ; le plus sonore et sa mai !',
        graisse: 30,
        contraste: 50,
        rigidite: 80,
    },
])


function postArrayOfPoemData(arrayOfPoemData, index = 0) {

    const poemData = arrayOfPoemData[index]

    postPoemData(poemData)

    index++

    if (index < arrayOfPoemData.length) {
        setTimeout(() => {

            postArrayOfPoemData(arrayOfPoemData, index)

        }, 1_000)
    }

}

function postPoemData(poemData) {

    console.log("post poem:", poemData)

    axios.post('http://localhost:3000/api/poem', poemData)
        .then((res) => {
            // console.log(`statusCode: ${res.statusCode}`)
            console.log(res.data)
        })
        .catch((error) => {
            console.error(error)
        })

}
