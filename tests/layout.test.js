const renderDOM = require('./helpers')

let dom;
let document;

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('index.html', () => {
    beforeEach(async () => {
        dom = await renderDOM('index.html')
        document = await dom.window.document
    })

    test('it has a title', () => {
        const title = document.querySelector('title')
        expect(title).toBeTruthy()
    })

// 'it' and 'test' are interchangeable
    it('h1 is empty when the website loads', () => {
        const h1 = document.querySelector('h1')
        expect(h1.innerHTML).toContain('')
    })

    it('displays morning when button is clicked', () => {
        const btn = document.querySelector('button')
        btn.dispatchEvent(new dom.window.Event('click'))

        const h1 = document.querySelector('h1')
        expect(h1.innerHTML).toContain('morning')
        // on line above you could use toBe if you wanted an EXACT match - toContain will pass 'mornin' for example.
    })

    it('changes h1 according to form input', () => {
        const form = document.querySelector('form')
        const h1 = document.querySelector('h1')
        const input = document.querySelector('#name')

        input.value = 'baby yoda'
        form.dispatchEvent(new dom.window.Event('submit')) 

        expect(h1.innerHTML).toBe('baby yoda')

    })
})
