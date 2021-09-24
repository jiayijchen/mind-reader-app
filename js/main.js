const mainText = document.getElementById('mainText');
const middleButton = document.getElementById('middleButton');
const subText = document.getElementById('subText');
const resetButton = document.getElementById('resetButton');

const symbolString = "~!@#$%^&*?"
const pages = [
    {
        pageNumber: 0,
        pageMainText: "I can read your mind",
        middleButtonText: "NEXT",
        middleButtonVisibility: "hidden",
        pageSubText: "",
        resetButtonText: "GO"

    },
    {
        pageNumber: 1,
        pageMainText: "Pick a number from 01 - 99",
        middleButtonText: "NEXT",
        middleButtonVisibility: "visible",
        pageSubText: "when you have your number click next",
        resetButtonText: "icon"
    },
    {
        pageNumber: 2,
        pageMainText: "Add both digits together to get a new number",
        middleButtonText: "NEXT",
        middleButtonVisibility: "visible",
        pageSubText: "Ex: 14 is 1 + 4 = 5\n click next to proceed",
        resetButtonText: "icon"
    },
    {
        pageNumber: 3,
        pageMainText: "Subtract your new number from the original number",
        middleButtonText: "NEXT",
        middleButtonVisibility: "visible",
        pageSubText: "Ex: 14 - 5 = 9\n click next to proceed",
        resetButtonText: "icon"
    },
    {
        pageNumber: 4,
        pageMainText: ":insertsymbollist:",
        middleButtonText: "REVEAL",
        middleButtonVisibility: "visible",
        pageSubText: "Find your new number.\nNote the symbol beside the number",
        resetButtonText: "icon"
    },
    {
        pageNumber: 5,
        pageMainText: ":insertsymbol:",
        middleButtonText: "",
        middleButtonVisibility: "hidden",
        pageSubText: "Your symbol is:\n:insertsymbol:",
        resetButtonText: "icon"
    }
]

var currentPage = 0;

updatePage();

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
}