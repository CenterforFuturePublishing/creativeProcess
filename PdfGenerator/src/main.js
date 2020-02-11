const puppeteer = require('puppeteer');

const css = `
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
        }
        `

puppeteer.launch({headless: false}).then(async browser => {
    const page = await browser.newPage();

    const result = await page.evaluate(data => {

        const {
            poem,
            graisse,
            contraste,
            rigidite
        } = data.apiData

        // style
        const styleContainer = document.createElement("style")
        styleContainer.innerText = data.style
        document.head.appendChild(styleContainer)

        // column
        const container = document.createElement("div")
        container.classList.add(".container")

        document.body.appendChild(container)


        // text Elemeent
        const textElement = document.createElement("div")
        textElement.innerText = poem

        document.body.appendChild(textElement)

        return document.body.getBoundingClientRect().width;
    }, {
        style: css,
        apiData: apiData,
    });

    await page.pdf({
        width: '20mm',
        height: '20mm',
        path: './document.pdf',
    })

    await browser.close();
});
