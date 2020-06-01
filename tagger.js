// Select html items and assign them to variables
const input = document.querySelector(".input");
const output = document.querySelector(".output");

input.innerText = "Enter text here";

// Select button - assign to a variable
const btn = document.querySelector('.submit');

// Add an event listener to the button
btn.addEventListener('click', tag);

var dict = {
    "the": "art",
    "be": "verb",
    "to": "prep",
    "of": "prep",
    "and": "conj",
    "a": "art",
    "in": "prep",
    "that": "conj",
    "have": "verb",
    "I": "pron",
    "it": "prep",
    "for": "prep",
    "not": "adv",
    "on": "prep",
    "with": "prep",
    "he": "pron",
    "as": "adv",
    "you": "pron",
    "do": "verb",
    "at": "prep",
    "this": "det",
    "but": "prep",
    "his": "pron",
    "by": "prep",
    "from": "prep",
    "they": "pron",
    "we": "pron",
    "say": "verb",
    "her": "pron",
    "she": "pron",
    "or": "conj",
    "an": "art",
    "will": "verb",
    "my": "pron",
    "one": "noun",
    "all": "adj",
    "would": "verb",
    "there": "adv",
    "their": "pron",
    "what": "pron",
    "so": "conj",
    "up": "adv",
    "out": "prep",
    "if": "conj",
    "about": "prep",
    "who": "pron",
    "get": "verb",
    "which": "pron",
    "go": "verb",
    "me": "pron",
    "when": "adv",
    "make": "verb",
    "can": "verb",
    "like": "prep",
    "time": "noun",
    "no": "det",
    "just": "adj",
    "him": "pron",
    "know": "verb",
    "take": "verb",
    "people": "noun",
    "into": "prep",
    "year": "noun",
    "your": "pron",
    "good": "adj",
    "some": "det",
    "could": "verb",
    "them": "pron",
    "see": "verb",
    "other": "adj",
    "than": "conj",
    "then": "adv",
    "come": "verb",
    "its": "pron",
    "over": "prep",
    "think": "verb",
    "also": "adv",
    "back": "noun",
    "after": "prep",
    "use": "verb",
    "two": "noun",
    "how": "adv",
    "our": "pron",
    "work": "verb",
    "first": "adj",
    "well": "adv",
    "way": "noun",
    "even": "adj",
    "new": "adj",
    "want": "verb",
    "because": "conj",
    "any": "pron",
    "these": "pron",
    "give": "verb",
    "day": "noun",
    "most": "adv",
    "us": "pron",
    "is": "verb",
    "am": "verb",
}

function tag(e) {
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
    var temp = ""
    for (let i=0; i <words.length; i++) {
        if (words[i] in dict === true) {
            let key=words[i];
            let output = "'" + words[i] + "'" + ' : '+ "(" + String(dict[key]) + ")";
            result.push(output);
        }
        else if (temp === "an" || temp === "the" || temp === "a") {
            result.push("'" + words[i] + "'" + " : " + "(noun)");
        }
        else if ((temp == "is" || temp == "are" || temp == "were" || temp == "been" || temp == "be") && words[i].substr(words[i].length - 3) === "ing") {
            result.push("'" + words[i] + "'" + " : " + "(verb)");
        }
        else if ((temp == "has" || temp == "have") && (words[i].substr(words[i].length - 2) === "ed" || words[i].substr(words[i].length - 2) === "en")) {
            result.push("'" + words[i] + "'" + " : " + "(verb)");
        }
        else {
            result.push("'" + words[i] + "'" + " : " + "(?)");
        }
        temp = String(words[i])
    }

    // Turn the array into one string
    result = result.join(', ')

    // Show the results
    output.innerText = result;
}
