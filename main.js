const { createMarble } = require("./marbleMaker.js")
const { weaveBag } = require("./bagMaker.js")

const marble = createMarble("Huge")
console.log(marble)

const bag = weaveBag("silk")
console.log(bag)