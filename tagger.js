// Select button - assign to a variable
const btn = document.querySelector('.submit');

// Add an event listener to the button
btn.addEventListener('click', tag);

function tag(e) {
    // Select html items and assign them to variables
    const input = document.querySelector(".input");
    const output = document.querySelector(".output");

    // Assign the contents of the input textarea item to a variable
    let rawInputText = String(input.value);

    // Process the text to lower case
    rawInputText = rawInputText.toLowerCase();

    // Remove special characters
    rawInputText = rawInputText.replace(/,/g, " ");

    // Split the text into words
    let words = rawInputText.split(" ");

    // Assign words to result
    let result = Array();
    for (let i = 0; i < words.length; i++) {
        if (words[i]==="i") {
            result.push("'" + words[i] + "'" + " (Noun)");
        }
        else if (words[i]==="you") {
            result.push("'" + words[i] + "'" + " (Noun)");
        }
        else {
            result.push("'" + words[i] + "'" + " (?)");
        }
    }

    // Turn the array into one string
    result = result.join(', ')

    // Show the results
    output.innerText = result;
}