function runTest(test, times = 1) {
    let conuter = times;
    let results = [];
    while (conuter) {
        let t0 = performance.now();
        test.testFunction();
        let t1 = performance.now();
        results.push((t1 - t0));
        conuter--;
    }
    exportToCsv(results, `${test.id}_${times}_${new Date().toLocaleString()}`);
    console.log(results)
    document.getElementById("avgTime").innerHTML = `Średni czas ${times - 1} wykonań: ${getAvg(results)} ms`
    document.getElementById("firstRunTime").innerHTML = `Czas pierwszego wykonania: ${results[0]} ms`
}

function getAvg(results) {
    var sum = 0;
    for (var i = 1; i < results.length; i++) {
        // sum += parseInt(results[i], 10);
        sum += results[i]
    }
    return sum / results.length;
}

function prepareTest(id){
    document.querySelectorAll('.test').forEach(item=>{
        item.id === id ? item.style.display = 'block' : item.style.display = 'none'
    })
};

function exportToCsv(data, fileName){
    fileName += '.csv';
    let csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(function(result) {
        csvContent += result + ';' + "\r\n";
    });
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    link.textContent = fileName;
    document.getElementById('result-list').append(link); // Required for FF
}

(function (testList) {

    const elemSelectTest = document.querySelector("#select-test"),
        elemRepeatAmount = document.querySelector("#repeat-amount"),
        runTestsBtn = document.querySelector("#run-test-btn");

        elemSelectTest.innerHTML = ""
        testList.map(test=>{
            elemSelectTest.innerHTML += `<option value=${test.id}>${test.name}</option>`
        })

    prepareTest(elemSelectTest.value);
    elemSelectTest.addEventListener('change', (e) => {
        prepareTest(e.target.value);
    })

    runTestsBtn.addEventListener('click', (e) => {
        runTest(testList[elemSelectTest.selectedIndex], elemRepeatAmount.value);
    })

})(document.testList);
