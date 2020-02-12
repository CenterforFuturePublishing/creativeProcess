const puppeteer = require('puppeteer');

const apiData = {
    poem: "coucou poem",
    graisse: 10,
    contraste: 10,
    rigidite: 10
}

const css = `

<div class="container">
        <div class="column">
            <div class="text-container">
            </div>
        </div>
        <div class="column">
            <div class="text-container">
            </div>
        </div>
        <div class="column">
            <div class="text-container">
            </div>
        </div>
        <div class="column">
            <div class="text-container">
            </div>
        </div>
        <div class="column">
            <div class="text-container">
            </div>
        </div>
    </div>

    <style>
        body {
            margin: 0;
            color: red;
        }

        .container {
            background: azure;
            width: 100%;
            display: flex;
        }

        .column {
            padding: 0 1cm;
            width: 100%;
        }
    </style>
        `

const js = `
        const data = {
            poem: "coucou poem",
            graisse: 10,
            contraste: 10,
            rigidite: 10
        }

        const text = "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes)."

        const nodeListOfTextContainer = document.querySelectorAll(".text-container")

        const item = nodeListOfTextContainer[Math.floor(Math.random() * nodeListOfTextContainer.length)]

        item.innerText = text
`

puppeteer.launch({headless: true}).then(async browser => {
    const page = await browser.newPage();

    const result = await page.evaluate(data => {

        const {
            poem,
            graisse,
            contraste,
            rigidite
        } = data.apiData

        // // style
        // const styleContainer = document.createElement("style")
        // styleContainer.innerText = data.style
        document.body.innerHTML = data.style

        eval(data.js)

        // // column
        // const container = document.createElement("div")
        // container.classList.add(".container")
        //
        // document.body.appendChild(container)
        //
        //
        // // text Elemeent
        // const textElement = document.createElement("div")
        // textElement.innerText = poem
        //
        // document.body.appendChild(textElement)

        return document.body.getBoundingClientRect().width;
    }, {
        style: css,
        js: js,
        apiData: apiData,
    });

    await page.pdf({
        width:  '1067.00000mm',
        height: '1000.00000mm',
        path: './document.pdf',
    })

    await browser.close();
});
