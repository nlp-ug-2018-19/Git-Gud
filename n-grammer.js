const input = document.querySelector(".input");
input.innerText = "Enter text here";

function nGram() {
    let e = document.getElementById("idSelect");
    let n = e.options[e.selectedIndex].value;

    grams();

    function grams() {
        let input = document.getElementById('input');
        var value = input.value;

        var splitTable = [];
        var nGrams = []
        var index

        if (value === null || value === undefined) {
            return nGrams
        }

        splitTable = value.split(' ');
        index = splitTable.length - n + 1

        if (index < 1) {
            return nGrams
        }

        let i = 0;
        if (n === '2') {
            while (index--) {
                nGrams[i] = splitTable[i] + ' ' + splitTable[i + 1];
                i++;
            }
        } else if (n === '3') {
            while (index--) {
                nGrams[i] = splitTable[i] + ' ' + splitTable[i + 1] + ' ' + splitTable[i + 2];
                i++;
            }
        } else if (n === '4') {
            while (index--) {
                nGrams[i] = splitTable[i] + ' ' + splitTable[i + 1] + ' ' + splitTable[i + 2] + ' ' + splitTable[i + 3];
                i++;
            }
        } else if (n === '5') {
            while (index--) {
                nGrams[i] = splitTable[i] + ' ' + splitTable[i + 1] + ' ' + splitTable[i + 2] + ' ' + splitTable[i + 3] + ' ' + splitTable[i + 4];
                i++;
            }
        }

        let output = document.getElementById('output');
        output.value = nGrams;
    }
}