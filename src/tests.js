// test 0 - zmiana tekstu
document.testList = [{
    id: "test0",
    name: "DOM - Podmiana tekstu",
    testFunction: test0
}]

function test0() {
    document.getElementById("test0").childNodes.forEach(element => {
        element.textContent = '';
    })
    document.getElementById('test0-h1').textContent = 'Nowy tekst dla <h1>';
    document.getElementById('test0-h3').textContent = 'Nowy tekst dla <h3>';
    document.getElementById('test0-p').textContent = 'Nowy tekst dla <p>';
    document.getElementById('test0-a').textContent = 'Nowy tekst dla <a>'
    document.getElementById('test0-label').textContent = 'Nowy tekst dla <label>'
    document.getElementById('test0-span').textContent = 'Nowy tekst dla <span>'

}