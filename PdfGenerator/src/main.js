const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
    const page = await browser.newPage();

    const result = await page.evaluate(data => {
        document.body.style.width = '1000px'

        const textElement = document.createElement("div")
        textElement.innerText = data.text

        document.body.appendChild(textElement)

        return document.body.getBoundingClientRect().width;
    }, {
        text: "coucou david",
    });

    await page.pdf({
        width: '20mm',
        height: '20mm',
        path: './document.pdf',
    })

    await browser.close();
});
