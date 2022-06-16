import { laptops } from "./data"
import { createHtmlElements, createElement } from "./utilities"
import { brandFilter, ramFilter, priceFilter } from "./filter"

// const showPrices = document.querySelector(".show-prices") as HTMLButtonElement
const mainDiv = document.querySelector(".main-section") as HTMLDivElement
const table = createElement("table", [], ["table1"]) as HTMLTableElement
const tableDiv = createElement("div", [table], ["table-section"]) as HTMLDivElement
mainDiv.append(tableDiv)

let imgDiv = ""
let titleDiv = ""
let contentDiv = ""
let idDiv = ""
let logoDiv = ""
let priceDiv = ""

createLaptops(laptops)

/**
 * Creates a new rows and cells for the table of the laptops

 *
 * @param {Object} data - tableData element from the begining of the code
 */
export function createLaptops(data: Object[]) {
  for (let i = 0; i < data.length; i++) {
    const td = createElement("td", [], [`tableData${i}`]) as HTMLTableElement
    const tr = createElement("tr", [td], [`tableRow${i}`], {
      id: "tr",
    }) as HTMLTableRowElement
    tr.classList.add("row")
    table.append(tr)

    createRows(data, td, i)
  }
}

/**
 * Creates a new rows with all the laptops and the data

 *
 * @param {String} str - tableData element from the begining of the code
 * @param {Number} num - The index of the for loop
 */
export function createRows(data: any[], str: any, num: number) {
  // Create Img's
  imgDiv = `<img src="${data[num].img}"></img>`
  str.append(createHtmlElements(`<div>${imgDiv}</div>`))

  // Create Title
  titleDiv = `<h3>${data[num].title}</h3>`
  str.append(createHtmlElements(`<div class="title-div${num}">${titleDiv}</div>`))

  // Create Content
  Object.entries(data[num].specs).forEach((el) => {
    const first = el[0]
    const sec = el[1]
    contentDiv = `<span>${first}:${" " + sec}</span>`
    const tempDivForContent = document.querySelector(
      `.title-div${num}`
    ) as HTMLElement

    tempDivForContent.appendChild(createHtmlElements(`<div>${contentDiv}</div>`))
  })

  // Create ID Div
  idDiv = `<span>${data[num].id}</span>`
  str.append(
    createHtmlElements(`<section class="idDiv${num}">${'מק"ט: ' + idDiv}</section>`)
  )
  const tempDivForId = document.querySelector(`.idDiv${num}`) as HTMLElement

  // Create Logo Div
  logoDiv = `<img src="${data[num].companyLogo}"></img>`
  tempDivForId.append(createHtmlElements(`<div>${logoDiv}</div>`))

  // Create Price Div
  priceDiv = `<h2 class="priceDiv${num}">${"₪" + data[num].price}</h2>`
  tempDivForId.append(createHtmlElements(`<div>${priceDiv}</div>`))
}

const buttonsBrand = document.getElementsByClassName("brandFilter")
for (let i = 0; i < buttonsBrand.length; i++) {
  const buttonBrand = buttonsBrand[i]
  buttonBrand.addEventListener("click", brandFilter)
}

const buttonsRam = document.getElementsByClassName("ramFilter")
for (let i = 0; i < buttonsRam.length; i++) {
  const buttonRam = buttonsRam[i]
  buttonRam.addEventListener("click", ramFilter)
}

const priceButtons = document.querySelectorAll(".priceButton") as any
for (let i = 0; i < priceButtons.length; i++) {
  const priceButton = priceButtons[i]
  priceButton.addEventListener("click", priceFilter)
}
