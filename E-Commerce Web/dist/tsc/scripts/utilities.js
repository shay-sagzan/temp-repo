"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=utilities.js.map