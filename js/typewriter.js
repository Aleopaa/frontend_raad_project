let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString(`Drink more water! ${String.fromCodePoint(128688)}`)
    .pauseFor(1000)
    .deleteAll()
    .typeString(`Run a marathon!${String.fromCodePoint(127939)}`)
    .pauseFor(1000)
    .deleteAll()
    .typeString(`<strong>Clean the house!</strong> ${String.fromCodePoint(127968)}`)
    .pauseFor(1000)
    .deleteAll()
    .typeString(`Find Waldo! ${String.fromCodePoint(128373)}`)
    .pauseFor(1000)
    .start();
