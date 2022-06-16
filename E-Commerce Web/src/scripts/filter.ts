import { laptops } from "./data"
import { createLaptops } from "./app"

// Filter Laptops by Brand
export function brandFilter(this: any, event: any) {
  const brand = event.target.innerHTML
  const filtered = laptops.filter((laptop) => laptop.specs.brand === brand)
  resetRows()
  createLaptops(filtered)
}

///////////////////////////////////////////////////////////

// Filter Laptops by Ram
export function ramFilter(this: any, event: any) {
  const ram = event.target.innerHTML
  const filtered = laptops.filter((laptop) => laptop.specs.ram === ram)
  resetRows()
  createLaptops(filtered)
}

/////////////////////////////////////////////////////////////

// Filter Laptops by Price
export function priceFilter(this: any, event: any) {
  const range = event.target.innerHTML
  const first: string[] = range.split("-")
  const minPrice = Number(first[0].slice(0, first[0].length - 1))
  const maxPrice = minPrice + 3000
  console.log(minPrice, maxPrice)
  const filtered = laptops.filter(
    (laptop) => laptop.price > minPrice && laptop.price < maxPrice
  )
  resetRows()
  createLaptops(filtered)
}

////////////////////////////////////////////////////////////

export function resetRows(): void {
  const trArray = document.querySelectorAll(".row") as any
  for (let row of trArray) {
    row.remove()
  }
}

//TODO: sort
