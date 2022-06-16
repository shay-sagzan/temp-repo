"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRows = exports.createLaptops = void 0;
const data_1 = require("./data");
const utilities_1 = require("./utilities");
const filter_1 = require("./filter");
// const showPrices = document.querySelector(".show-prices") as HTMLButtonElement
const mainDiv = document.querySelector(".main-section");
const table = (0, utilities_1.createElement)("table", [], ["table1"]);
const tableDiv = (0, utilities_1.createElement)("div", [table], ["table-section"]);
mainDiv.append(tableDiv);
let imgDiv = "";
let titleDiv = "";
let contentDiv = "";
let idDiv = "";
let logoDiv = "";
let priceDiv = "";
createLaptops(data_1.laptops);
/**
 * Creates a new rows and cells for the table of the laptops

 *
 * @param {Object} data - tableData element from the begining of the code
 */
function createLaptops(data) {
    for (let i = 0; i < data.length; i++) {
        const td = (0, utilities_1.createElement)("td", [], [`tableData${i}`]);
        const tr = (0, utilities_1.createElement)("tr", [td], [`tableRow${i}`], {
            id: "tr",
        });
        tr.classList.add("row");
        table.append(tr);
        createRows(data, td, i);
    }
}
exports.createLaptops = createLaptops;
/**
 * Creates a new rows with all the laptops and the data

 *
 * @param {String} str - tableData element from the begining of the code
 * @param {Number} num - The index of the for loop
 */
function createRows(data, str, num) {
    // Create Img's
    imgDiv = `<img src="${data[num].img}"></img>`;
    str.append((0, utilities_1.createHtmlElements)(`<div>${imgDiv}</div>`));
    // Create Title
    titleDiv = `<h3>${data[num].title}</h3>`;
    str.append((0, utilities_1.createHtmlElements)(`<div class="title-div${num}">${titleDiv}</div>`));
    // Create Content
    Object.entries(data[num].specs).forEach((el) => {
        const first = el[0];
        const sec = el[1];
        contentDiv = `<span>${first}:${" " + sec}</span>`;
        const tempDivForContent = document.querySelector(`.title-div${num}`);
        tempDivForContent.appendChild((0, utilities_1.createHtmlElements)(`<div>${contentDiv}</div>`));
    });
    // Create ID Div
    idDiv = `<span>${data[num].id}</span>`;
    str.append((0, utilities_1.createHtmlElements)(`<section class="idDiv${num}">${'מק"ט: ' + idDiv}</section>`));
    const tempDivForId = document.querySelector(`.idDiv${num}`);
    // Create Logo Div
    logoDiv = `<img src="${data[num].companyLogo}"></img>`;
    tempDivForId.append((0, utilities_1.createHtmlElements)(`<div>${logoDiv}</div>`));
    // Create Price Div
    priceDiv = `<h2 class="priceDiv${num}">${"₪" + data[num].price}</h2>`;
    tempDivForId.append((0, utilities_1.createHtmlElements)(`<div>${priceDiv}</div>`));
}
exports.createRows = createRows;
const buttonsBrand = document.getElementsByClassName("brandFilter");
for (let i = 0; i < buttonsBrand.length; i++) {
    const buttonBrand = buttonsBrand[i];
    buttonBrand.addEventListener("click", filter_1.brandFilter);
}
const buttonsRam = document.getElementsByClassName("ramFilter");
for (let i = 0; i < buttonsRam.length; i++) {
    const buttonRam = buttonsRam[i];
    buttonRam.addEventListener("click", filter_1.ramFilter);
}
const priceButtons = document.querySelectorAll(".priceButton");
for (let i = 0; i < priceButtons.length; i++) {
    const priceButton = priceButtons[i];
    priceButton.addEventListener("click", filter_1.priceFilter);
}
//# sourceMappingURL=app.js.map