// 1

const desk = {
    cellElements: [],

    initCells() {
        for (let row = 0; row < 8; row++) {
            const trElem = document.createElement(tagName: 'tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < 8; col++) {
                const cell = document.createElement(tagName: 'td');
                trElem.appendChild(cell);

                this.cellElements.push(cell);
            }
        }
    }
}

desk.initCells();