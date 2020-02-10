const puppeteer = require('puppeteer');

const css = `
            body {
                margin: 0;
                color: red;
            }
            
            .container {
                background: azure;
                width: 100%;
            }
        `

puppeteer.launch({headless: false}).then(async browser => {
    const page = await browser.newPage();

    const result = await page.evaluate(data => {

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
        textElement.innerText = data.text

        document.body.appendChild(textElement)

        return document.body.getBoundingClientRect().width;
    }, {
        text: "coucou david",
        style: css
    });

    await page.pdf({
        width: '20mm',
        height: '20mm',
        path: './document.pdf',
    })

    await browser.close();
});
