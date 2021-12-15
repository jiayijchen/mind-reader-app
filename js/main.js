const mainText = document.getElementById('mainText');
const middleButton = document.getElementById('middleButton');
const subText = document.getElementById('subText');
const resetButton = document.getElementById('resetButton');

const symbolString = "!@#$%^&*?~"
const pages = [
    {
        // page 0,
        pageMainText: "I can read<br>your mind",
        middleButtonText: "NEXT",
        middleButtonVisibility: "hidden",
        pageSubText: "",
        resetButtonText: "<strong>GO</strong>"

    },
    {
        // page 1
        pageMainText: "Pick a<br>number<br>from<br>01 - 99",
        middleButtonText: "NEXT",
        middleButtonVisibility: "visible",
        pageSubText: "when you have your number<br>click next",
        resetButtonText: "<strong>RESET</strong>"
    },
    {
        // page 2
        pageMainText: "Add both<br>digits<br>together<br>to get a<br>new<br>number",
        middleButtonText: "NEXT",
        middleButtonVisibility: "visible",
        pageSubText: "Ex: 14 is 1 + 4 = 5<br><br>click next to proceed",
        resetButtonText: "<strong>RESET</strong>"
    },
    {
        // page 3
        pageMainText: "Subtract<br>your new<br>number<br>from the<br>original<br>number",
        middleButtonText: "NEXT",
        middleButtonVisibility: "visible",
        pageSubText: "Ex: 14 - 5 = 9<br><br>click next to proceed",
        resetButtonText: "<strong>RESET</strong>"
    },
    {
        // page 4
        pageMainText: ":insertsymbollist:",
        middleButtonText: "REVEAL",
        middleButtonVisibility: "visible",
        pageSubText: "Find your new number.<br><br>Note the symbol beside the number",
        resetButtonText: "<strong>RESET</strong>"
    },
    {
        // page 5
        pageMainText: ":insertsymbol:",
        middleButtonText: "",
        middleButtonVisibility: "hidden",
        pageSubText: "Your symbol is:<br><br>:insertsymbol:",
        resetButtonText: "<strong>RESET</strong>"
    }
]

var currentPage = 0;

updatePage();
updateSymbols();

middleButton.addEventListener('click', nextPage);
resetButton.addEventListener('click', resetPage);

function updatePage() {
    mainText.innerHTML = pages[currentPage].pageMainText;
    middleButton.innerHTML = pages[currentPage].middleButtonText;
    middleButton.style.visibility = pages[currentPage].middleButtonVisibility;
    subText.innerHTML = pages[currentPage].pageSubText;
    resetButton.innerHTML = pages[currentPage].resetButtonText;
}

function nextPage() {
    currentPage++;
    updatePage();
}

function resetPage() {
    if (currentPage == 0) {
        nextPage();
    } else {
        currentPage = 0;
        updatePage();
        updateSymbols();
    }
}

// Fisher-Yates shuffle
function shuffle(string) {
    var arr = string.split("");
    var n = arr.length;
    for (let i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr.join("");
}

function generateSymbolList() {
    var symbolList = shuffle(symbolString);
    var outputText = "0 - " + symbolList[0];
    counter = 1;
    while (counter < 100) {
        outputText += "<br>" + counter.toString() + " - " + 
            (counter % 9 == 0 ? 
                symbolList[0] : 
                symbolList[Math.floor(Math.random() * symbolList.length)]);
        // if (counter % 9 == 0) {
        //     outputText += "<br>" + counter.toString() + " - " + symbolList[0];
        // } else {
        //     outputText += "<br>" + counter.toString() + " - ";
        // }
        counter++;
    }
    return [outputText, symbolList[0]];
}

function updateSymbols() {
    var insertTextArray = generateSymbolList();
    pages[4].pageMainText = insertTextArray[0];
    pages[5].pageMainText = insertTextArray[1];
    pages[5].pageSubText = "Your symbol is:<br><br>"+ insertTextArray[1];
}