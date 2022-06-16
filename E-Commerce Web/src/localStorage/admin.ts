import { laptops } from "../scripts/data"
import { createHtmlElements, createElement } from "../scripts/utilities"

const mainDiv = document.querySelector(".laptops") as HTMLDivElement
const table = createElement("table", [], ["table"])
const tableDiv = createElement("div", [table], ["table-section"])
mainDiv.append(tableDiv)

let imgDiv = ""
let titleDiv = ""
let contentDiv = ""
let idDiv = ""
let logoDiv = ""
let priceDiv = ""
let editIcon = ""
let removeIcon = ""

for (let i = 0; i < laptops.length; i++) {
  const td = createElement("td", [], [`tableData${i}`]) as HTMLTableElement
  const tr = createElement("tr", [td], [`tableRow${i}`]) as HTMLTableRowElement
  table.append(tr)

  createLaptops(td)

  /*
  Function to create lists of computers
  */
  function createLaptops(str: any) {
    // Create Img'spriceDiv
    imgDiv = `<img src="${laptops[i].img}"></img>`
    str.append(createHtmlElements(`<div>${imgDiv}</div>`))

    // Create Title
    titleDiv = `<h3>${laptops[i].title}</h3>`
    str.append(createHtmlElements(`<div class="title-div${i}">${titleDiv}</div>`))

    // Create Content
    Object.entries(laptops[i].specs).forEach((el) => {
      const first = el[0]
      const sec = el[1]
      contentDiv = `<span>${first}:${" " + sec}</span>`
      const tempDivForContent = document.querySelector(
        `.title-div${i}`
      ) as HTMLElement

      tempDivForContent.appendChild(createHtmlElements(`<div>${contentDiv}</div>`))
    })

    // Create ID Div
    idDiv = `<span>${laptops[i].id}</span>`
    str.append(
      createHtmlElements(`<section class="idDiv${i}">${'מק"ט: ' + idDiv}</section>`)
    )
    const tempDivForId = document.querySelector(`.idDiv${i}`) as HTMLElement

    // Create Logo Div
    logoDiv = `<img src="${laptops[i].companyLogo}"></img>`
    tempDivForId.append(createHtmlElements(`<div>${logoDiv}</div>`))

    // Create Price Div
    priceDiv = `<h2 class="priceDiv${i}">${"₪" + laptops[i].price}</h2>`
    tempDivForId.append(createHtmlElements(`${priceDiv}`))

    // Create Edit Icon
    editIcon = `<a href="edit.html"><button class="edit-button${i} edit">Edit</button></a>`

    str.append(createHtmlElements(editIcon))

    // Remove Icon
    removeIcon = `<button class="remove-button${i} remove">Remove</button>`
    str.append(createHtmlElements(removeIcon))
  }

  // Remove Elements from list of laptops
  const remove = document.querySelector(`.remove-button${i}`) as HTMLElement
  const trToRemove = document.querySelector(`.tableRow${i}`) as HTMLElement
  remove.addEventListener("click", () => {
    laptops.splice(i, 1)
    trToRemove.remove()
  })
}

const addButton = document.querySelector(".add-laptop") as HTMLElement
addButton.addEventListener("click", () => {})
