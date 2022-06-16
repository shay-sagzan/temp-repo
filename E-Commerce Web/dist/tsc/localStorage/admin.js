"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../scripts/data");
const utilities_1 = require("../scripts/utilities");
const mainDiv = document.querySelector(".laptops");
const table = (0, utilities_1.createElement)("table", [], ["table"]);
const tableDiv = (0, utilities_1.createElement)("div", [table], ["table-section"]);
mainDiv.append(tableDiv);
let imgDiv = "";
let titleDiv = "";
let contentDiv = "";
let idDiv = "";
let logoDiv = "";
let priceDiv = "";
let editIcon = "";
let removeIcon = "";
for (let i = 0; i < data_1.laptops.length; i++) {
    const td = (0, utilities_1.createElement)("td", [], [`tableData${i}`]);
    const tr = (0, utilities_1.createElement)("tr", [td], [`tableRow${i}`]);
    table.append(tr);
    createLaptops(td);
    /*
    Function to create lists of computers
    */
    function createLaptops(str) {
        // Create Img'spriceDiv
        imgDiv = `<img src="${data_1.laptops[i].img}"></img>`;
        str.append((0, utilities_1.createHtmlElements)(`<div>${imgDiv}</div>`));
        // Create Title
        titleDiv = `<h3>${data_1.laptops[i].title}</h3>`;
        str.append((0, utilities_1.createHtmlElements)(`<div class="title-div${i}">${titleDiv}</div>`));
        // Create Content
        Object.entries(data_1.laptops[i].specs).forEach((el) => {
            const first = el[0];
            const sec = el[1];
            contentDiv = `<span>${first}:${" " + sec}</span>`;
            const tempDivForContent = document.querySelector(`.title-div${i}`);
            tempDivForContent.appendChild((0, utilities_1.createHtmlElements)(`<div>${contentDiv}</div>`));
        });
        // Create ID Div
        idDiv = `<span>${data_1.laptops[i].id}</span>`;
        str.append((0, utilities_1.createHtmlElements)(`<section class="idDiv${i}">${'מק"ט: ' + idDiv}</section>`));
        const tempDivForId = document.querySelector(`.idDiv${i}`);
        // Create Logo Div
        logoDiv = `<img src="${data_1.laptops[i].companyLogo}"></img>`;
        tempDivForId.append((0, utilities_1.createHtmlElements)(`<div>${logoDiv}</div>`));
        // Create Price Div
        priceDiv = `<h2 class="priceDiv${i}">${"₪" + data_1.laptops[i].price}</h2>`;
        tempDivForId.append((0, utilities_1.createHtmlElements)(`${priceDiv}`));
        // Create Edit Icon
        editIcon = `<a href="edit.html"><button class="edit-button${i} edit">Edit</button></a>`;
        str.append((0, utilities_1.createHtmlElements)(editIcon));
        // Remove Icon
        removeIcon = `<button class="remove-button${i} remove">Remove</button>`;
        str.append((0, utilities_1.createHtmlElements)(removeIcon));
    }
    // Remove Elements from list of laptops
    const remove = document.querySelector(`.remove-button${i}`);
    const trToRemove = document.querySelector(`.tableRow${i}`);
    remove.addEventListener("click", () => {
        data_1.laptops.splice(i, 1);
        trToRemove.remove();
    });
}
const addButton = document.querySelector(".add-laptop");
addButton.addEventListener("click", () => { });
//# sourceMappingURL=admin.js.map