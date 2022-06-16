"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetRows = exports.priceFilter = exports.ramFilter = exports.brandFilter = void 0;
const data_1 = require("./data");
const app_1 = require("./app");
// Filter Laptops by Brand
function brandFilter(event) {
    const brand = event.target.innerHTML;
    const filtered = data_1.laptops.filter((laptop) => laptop.specs.brand === brand);
    resetRows();
    (0, app_1.createLaptops)(filtered);
}
exports.brandFilter = brandFilter;
///////////////////////////////////////////////////////////
// Filter Laptops by Ram
function ramFilter(event) {
    const ram = event.target.innerHTML;
    const filtered = data_1.laptops.filter((laptop) => laptop.specs.ram === ram);
    resetRows();
    (0, app_1.createLaptops)(filtered);
}
exports.ramFilter = ramFilter;
/////////////////////////////////////////////////////////////
// Filter Laptops by Price
function priceFilter(event) {
    const range = event.target.innerHTML;
    const first = range.split("-");
    const minPrice = Number(first[0].slice(0, first[0].length - 1));
    const maxPrice = minPrice + 3000;
    console.log(minPrice, maxPrice);
    const filtered = data_1.laptops.filter((laptop) => laptop.price > minPrice && laptop.price < maxPrice);
    resetRows();
    (0, app_1.createLaptops)(filtered);
}
exports.priceFilter = priceFilter;
////////////////////////////////////////////////////////////
function resetRows() {
    const trArray = document.querySelectorAll(".row");
    for (let row of trArray) {
        row.remove();
    }
}
exports.resetRows = resetRows;
//TODO: sort
//# sourceMappingURL=filter.js.map