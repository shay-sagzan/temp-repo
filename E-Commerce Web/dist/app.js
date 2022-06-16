/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/tsc/scripts/app.js":
/*!*********************************!*\
  !*** ./dist/tsc/scripts/app.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createRows = exports.createLaptops = void 0;
const data_1 = __webpack_require__(/*! ./data */ "./dist/tsc/scripts/data.js");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./dist/tsc/scripts/utilities.js");
const filter_1 = __webpack_require__(/*! ./filter */ "./dist/tsc/scripts/filter.js");
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


/***/ }),

/***/ "./dist/tsc/scripts/data.js":
/*!**********************************!*\
  !*** ./dist/tsc/scripts/data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.laptops = void 0;
exports.laptops = [
    {
        price: 7890,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/mbp14-spacegray-gallery1-202110(3).png",
        currency: "₪",
        id: "Z15G-US",
        title: 'Apple MacBook Pro 14" Late 2021 M1 Pro Space Grey US Keyboard Layout Z15G-US',
        specs: {
            brand: "Apple",
            type: "Laptop",
            model: "MacBook Pro 14",
            ram: "16GB",
            memory: "512GB",
            processor: "Apple M1 Pro chip",
            resolution: "3024x1964",
            os: "macOS Monterey",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Apple_logo_black.svg.png",
    },
    {
        price: 11390,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/mbp14-spacegray-gallery1-202110(4).png",
        currency: "₪",
        id: "Z15H-32-HB",
        title: 'Apple MacBook Pro 14" Late 2021 M1 Pro Space Grey (32GB) Z15H-32-HB',
        specs: {
            brand: "Apple",
            type: "Laptop",
            model: "MacBook Pro 14",
            ram: "32GB",
            memory: "1TB",
            processor: "Apple M1 Pro chip",
            resolution: "3024x1964",
            os: "macOS Monterey",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Apple_logo_black.svg.png",
    },
    {
        price: 9490,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/mbp14-spacegray-gallery1-202110(3).png",
        currency: "₪",
        id: "Z15G-32-US",
        title: 'Apple MacBook Pro 14" Late 2021 M1 Pro Space Grey (32GB) US Keyboard Layout Z15G-32-US',
        specs: {
            brand: "Apple",
            type: "Laptop",
            model: "MacBook Pro 14",
            ram: "32GB",
            memory: "512GB",
            processor: "Apple M1 Pro chip",
            resolution: "3024x1964",
            os: "macOS Monterey",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Apple_logo_black.svg.png",
    },
    {
        price: 8790,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/la9520t_ctb_05030rf295_gy_5000x5.png",
        currency: "₪",
        id: "L9520-4-B",
        title: "Dell Latitude 9520 2-in-1 Touch (32GB)",
        specs: {
            brand: "Dell",
            type: "Laptop",
            model: "",
            ram: "32GB",
            memory: "1TB",
            processor: "Intel Core i7-1185G7 Processor 12M Cache up to 4.80 GHz with IPU",
            resolution: "1920x1080",
            os: "Windows 10 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Dell.jpg",
    },
    {
        price: 11390,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/mbp14-silver-gallery1-202110(4).png",
        currency: "₪",
        id: "Z15K-32-HB",
        title: 'Apple MacBook Pro 14" Late 2021 M1 Pro Silver (32GB) Z15K-32-HB',
        specs: {
            brand: "Apple",
            type: "Laptop",
            model: "",
            ram: "32GB",
            memory: "1TB",
            processor: "Apple M1 Pro chip",
            resolution: "3024x1964",
            os: "macOS Monterey",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Apple_logo_black.svg.png",
    },
    {
        price: 12190,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/mbp14-spacegray-gallery1-202110(3).png",
        currency: "₪",
        id: "Z15G-MAX32-HB",
        title: 'Apple MacBook Pro 14" Late 2021 M1 Max Space Grey (32GB) Z15G-MAX32-HB',
        specs: {
            brand: "Apple",
            type: "Laptop",
            model: "MacBook Pro 14",
            ram: "32GB",
            memory: "512GB",
            processor: "Apple M1 Max chip",
            resolution: "3024x1964",
            os: "macOS Monterey",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Apple_logo_black.svg.png",
    },
    {
        price: 11690,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/mbp14-spacegray-gallery1-202110.png",
        currency: "₪",
        id: "Z14V-MAX24-HB",
        title: 'Apple MacBook Pro 16" Late 2021 M1 Max Space Grey (32GB) Z14V-MAX24-HB',
        specs: {
            brand: "Apple",
            type: "Laptop",
            model: "",
            ram: "32GB",
            memory: "512GB",
            processor: "Apple M1 Max chip",
            resolution: "3456x2234",
            os: "macOS Monterey",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Apple_logo_black.svg.png",
    },
    {
        price: 4949,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/IdeaPad_Gaming_3_15IHU6_CT1_01.png",
        currency: "₪",
        id: "82K100K5IV",
        title: "Lenovo IdeaPad Gaming 3 15-IHU6 82K100K5IV",
        specs: {
            brand: "Lenovo",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "1TB",
            processor: "Intel Core i7-11370H 4C  8T 3.3  4.8GHz 12MB",
            resolution: "1920x1080",
            os: "Windows 11 Home",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",
    },
    {
        price: 7949,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/c07202757(1).png",
        currency: "₪",
        id: "4T9L1EAABT",
        title: "HP OMEN 16-b0004nj Gaming Laptop 4T9L1EA",
        specs: {
            brand: "HP",
            type: "Laptop",
            model: "",
            ram: "32GB",
            memory: "1TB",
            processor: "Intel Core i7-11800H Processor 24M Cache up to 4.60GHz",
            resolution: "2560x1440",
            os: "Windows 10 Home",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/New_Partner_Wh_Blu.png",
    },
    {
        price: 3975,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/ThinkBook_14s_Yoga_ITL_CT1_01.png",
        currency: "₪",
        id: "20WE006DIV",
        title: "Lenovo ThinkBook 14s Yoga ITL 20WE006DIV",
        specs: {
            brand: "Lenovo",
            type: "Laptop",
            model: "",
            ram: "24GB",
            memory: "512GB",
            processor: "Intel Core i5-1135G7 Processor 8M Cache up to 4.20GHz",
            resolution: "1920x1080",
            os: "Windows 11 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",
    },
    {
        price: 4449,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/ThinkPad_E14_Gen_2_Intel_CT1_01.png",
        currency: "₪",
        id: "20TA00EVIV",
        title: "Lenovo ThinkPad E14 Gen 2 20TA00EVIV",
        specs: {
            brand: "Lenovo",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "512GB",
            processor: "Intel Core i7-1165G7 Processor 12M Cache up to 4.70GHz",
            resolution: "1920x1080",
            os: "Windows 11 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",
    },
    {
        price: 3890,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/ThinkPad_E14_Gen_2_Intel_CT1_01.png",
        currency: "₪",
        id: "20TA00F5IV",
        title: "Lenovo ThinkPad E14 Gen 2 20TA00F5IV",
        specs: {
            brand: "Lenovo",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "512GB",
            processor: "Intel Core i5-1135G7 Processor 8M Cache up to 4.20GHz",
            resolution: "1920x1080",
            os: "Windows 11 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",
    },
    {
        price: 3675,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/ThinkBook_13s_G2_ITL_CT1_01.png",
        currency: "₪",
        id: "20V900AAIV",
        title: "Lenovo ThinkBook 13s G2 ITL 20V900AAIV",
        specs: {
            brand: "Lenovo",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "512GB",
            processor: "Intel Core i7-1165G7 Processor 12M Cache up to 4.70GHz",
            resolution: "1920x1200",
            os: "Windows 11 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",
    },
    {
        price: 2699,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/ThinkBook_15_G2_ITL_CT1_01.png",
        currency: "₪",
        id: "20VE00RNIV",
        title: "Lenovo ThinkBook 15 G2 ITL 20VE00RNIV",
        specs: {
            brand: "Lenovo",
            type: "Laptop",
            model: "",
            ram: "8GB",
            memory: "256GB",
            processor: "Intel Core i5-1135G7 Processor 8M Cache up to 4.20GHz",
            resolution: "1920x1080",
            os: "Windows 11 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",
    },
    {
        price: 6649,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/laptop_latitude_14_5421_gallery.png",
        currency: "₪",
        id: "L5421-7429",
        title: "Dell Latitude 5421 Laptop 14 i7-11850H 16GB 512GB MX450 (W11P) 3YR",
        specs: {
            brand: "Dell",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "512GB",
            processor: "Intel Core i7-11850H Processor 24M Cache up to 4.80 GHz",
            resolution: "1920x1080",
            os: "Windows 11 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Dell.jpg",
    },
    {
        price: 3249,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/dv5510nt_cnb_00000ff090_gy.png",
        currency: "₪",
        id: "V5510-5710",
        title: "Dell Vostro 15 5510 Laptop V5510-5710",
        specs: {
            brand: "Dell",
            type: "Laptop",
            model: "",
            ram: "8GB",
            memory: "512GB",
            processor: "Intel Core i5-11320H Processor 8M Cache up to 4.50 GHz with IPU",
            resolution: "1920x1080",
            os: "Windows 11 Home",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Dell.jpg",
    },
    {
        price: 3449,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/dv5510nt_cnb_00000ff090_gy.png",
        currency: "₪",
        id: "V5510-5723",
        title: "Dell Vostro 15 5510 Laptop V5510-5723",
        specs: {
            brand: "Dell",
            type: "Laptop",
            model: "",
            ram: "8GB",
            memory: "512GB",
            processor: "Intel Core i5-11320H Processor 8M Cache up to 4.50 GHz with IPU",
            resolution: "1920x1080",
            os: "Windows 11 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Dell.jpg",
    },
    {
        price: 4649,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/ThinkPad_E14_Gen_2_Intel_CT1_01.png",
        currency: "₪",
        id: "20TA00EXIV",
        title: "Lenovo ThinkPad E14 Gen 2 20TA00EXIV",
        specs: {
            brand: "Lenovo",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "1TB",
            processor: "Intel Core i7-1165G7 Processor 12M Cache up to 4.70GHz",
            resolution: "1920x1080",
            os: "Windows 11 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",
    },
    {
        price: 8849,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/ConceptD5_ConceptD-5-Pro_CN516-72P_CN516-72G_gallery_01.png",
        currency: "₪",
        id: "NXC6AET003",
        title: "Acer ConceptD 5 Professional Mobile Creation CN516-72P-77WE NX.C6AET.003 (32GB)",
        specs: {
            brand: "Acer",
            type: "Laptop",
            model: "",
            ram: "32GB",
            memory: "1TB",
            processor: "Intel Core i7-11800H Processor 24M Cache up to 4.60 GHz",
            resolution: "3072x1920",
            os: "Windows 11 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Acer.jpg",
    },
    {
        price: 3885,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/1(76).gif",
        currency: "₪",
        id: "82HS00USIV",
        title: "Lenovo IdeaPad Flex 5-14ITL Multi-touch 82HS00USIV",
        specs: {
            brand: "Lenovo",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "512GB",
            processor: "Intel Core i5-1135G7 Processor 8M Cache up to 4.20GHz",
            resolution: "1920x1080",
            os: "Windows 11 Home",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",
    },
    {
        price: 3890,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/la5520nt_cnb_05000ff090_gy_5000x.jpg",
        currency: "₪",
        id: "LT-RD33-12929",
        title: "Dell Latitude 5520 I5-1135G7 / 8GB / 256GB SSD / W10PRO",
        specs: {
            brand: "Dell",
            type: "Laptop",
            model: "",
            ram: "8GB",
            memory: "256GB",
            processor: "Intel Core i5-1135G7 Processor 8M Cache up to 4.20GHz",
            resolution: "1920x1080",
            os: "Windows 10 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Dell.jpg",
    },
    {
        price: 5690,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/laptop_latitude_15_5521_gallery.png",
        currency: "₪",
        id: "LT-RD33-12937",
        title: "Dell Latitude 5521 Laptop 15.6 / i7-11850H / 16GB / 512GB / Windows 10 Pro",
        specs: {
            brand: "Dell",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "512GB",
            processor: "Intel Core i7-11850H Processor 24M Cache up to 4.80 GHz",
            resolution: "1920x1080",
            os: "Windows 10 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Dell.jpg",
    },
    {
        price: 3190,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/IdeaPad_Flex_5_14ITL05_CT1_05(3).png",
        currency: "₪",
        id: "82HS00TGIV",
        title: "Lenovo IdeaPad Flex 5 14-ITL05 Touch 82HS00TGIV",
        specs: {
            brand: "Lenovo",
            type: "Laptop",
            model: "",
            ram: "8GB",
            memory: "512GB",
            processor: "Intel Core i5-1135G7 Processor 8M Cache up to 4.20GHz",
            resolution: "1920x1080",
            os: "Windows 11 Home",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",
    },
    {
        price: 5090,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/notebook-latitude-15-7520-campai.jpg",
        currency: "₪",
        id: "L7520-12-B",
        title: "Dell Latitude 7520 Business 15 / i7-1185G7 / 16GB / 512GB / Windows 10 Pro",
        specs: {
            brand: "Dell",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "512GB",
            processor: "Intel Core i7-1185G7 Processor 12M Cache up to 4.80GHz with IPU",
            resolution: "1920x1080",
            os: "Windows 10 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/Dell.jpg",
    },
    {
        price: 3549,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/IdeaPad_Flex_5_14ITL05_CT4_16%20(1).png",
        currency: "₪",
        id: "82HS00U0IV",
        title: "Lenovo IdeaPad Flex 5 14-ITL05 Touch / I5-1135G7 / 16GB / 512GB SSD / Windows 11 Home",
        specs: {
            brand: "Lenovo",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "512GB",
            processor: "Intel Core i5-1135G7 Processor 8M Cache up to 4.20GHz",
            resolution: "1920x1080",
            os: "Windows 11 Home",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",
    },
    {
        price: 4299,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/IdeaPad_Flex_5_15IIL05_CT3_01.png",
        currency: "₪",
        id: "82HT007GIV",
        title: "Lenovo IdeaPad Flex 5 15-15ITL05 / i7-1165G7 / 16GB / 1TB SSD / Windows 11 Home",
        specs: {
            brand: "Lenovo",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "1TB",
            processor: "Intel Core i7-1165G7 Processor 12M Cache up to 4.70GHz with IPU",
            resolution: "1920x1080",
            os: "Windows 11 Home",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/LenovoLogo-POS-Red.png",
    },
    {
        price: 5149,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/center_facing%20(4).png",
        currency: "₪",
        id: "401P3EAABT",
        title: "HP EliteBook 855 G8 Notebook PC (401P3EA)",
        specs: {
            brand: "HP",
            type: "Laptop",
            model: "",
            ram: "16GB",
            memory: "512GB",
            processor: "AMD Ryzen 7 PRO 5850U 1.9GHz base clock up to 4.4GHz max boost clock 16MB L3 cache 8cores",
            resolution: "1920x1080",
            os: "Windows 10 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/New_Partner_Wh_Blu.png",
    },
    {
        price: 5990,
        img: "https://creatixcdn.azureedge.net/fetch/pc365/w_230,h_147,mode_pad,v_13/https://www.pc365.co.il/images/center_facing%20(4).png",
        currency: "₪",
        id: "401F4EAABT",
        title: "HP EliteBook 855 G8 Notebook PC (401F4EA)",
        specs: {
            brand: "HP",
            type: "Laptop",
            model: "",
            ram: "32GB",
            memory: "1TB",
            processor: "AMD Ryzen 7 5800U up to 4.4GHz max boost clock 16 MB L3 cache 8 cores",
            resolution: "1920x1080",
            os: "Windows 10 Pro",
        },
        companyLogo: "https://creatixcdn.azureedge.net/fetch/pc365/w_93,h_53,mode_pad,v_13/https://www.pc365.co.il/images/New_Partner_Wh_Blu.png",
    },
];


/***/ }),

/***/ "./dist/tsc/scripts/filter.js":
/*!************************************!*\
  !*** ./dist/tsc/scripts/filter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetRows = exports.priceFilter = exports.ramFilter = exports.brandFilter = void 0;
const data_1 = __webpack_require__(/*! ./data */ "./dist/tsc/scripts/data.js");
const app_1 = __webpack_require__(/*! ./app */ "./dist/tsc/scripts/app.js");
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


/***/ }),

/***/ "./dist/tsc/scripts/utilities.js":
/*!***************************************!*\
  !*** ./dist/tsc/scripts/utilities.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createElement = exports.createHtmlElements = void 0;
/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"}, {click: (...) => {...}})
 *
 * @param {String} str - the type of the element
 */
function createHtmlElements(str) {
    const temp = document.createElement("template");
    temp.innerHTML = str;
    return temp.content.firstElementChild;
}
exports.createHtmlElements = createHtmlElements;
/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"}, {click: (...) => {...}})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 * @param {Object} eventListeners - the event listeners on the element
 */
function createElement(tagName, children = [], classes = [], attributes = {}, eventListeners = {}) {
    let el = document.createElement(tagName);
    for (const child of children) {
        el.append(child);
    }
    for (const cls of classes) {
        el.classList.add(cls);
    }
    for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }
    for (const event in eventListeners) {
        el.addEventListener(event, eventListeners[event]);
    }
    return el;
}
exports.createElement = createElement;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/tsc/scripts/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map