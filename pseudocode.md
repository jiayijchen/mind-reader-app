
INIT()
    DIV for main text
    DIV for middle button
    DIV for text for after button
    DIV for reset button

INITIALIZE array of pages (objects?)
    each page has values:
        mainText
        middleButton
        postButtonText
        resetButton

INITIALIZE variable to hold page number

INITIALIZE home page using initial page (1) values
    OUTPUT main text, middle button, text for after button, reset button
        to document

IF resetButton is click ("GO" button)
    increment page number by 1
    load page from array based on page number
ENDFOR
