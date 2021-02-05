export let products = [
  {
    name: "DIVA",
    description: "An advanced OTT player, synchronizing real-time data with rich interactivity.",
    quantity: 15,
    id: "w11H5lBZ2UPC5P6Hi9RzT"
  },
  {
    name: "AXIS",
    description: "A targeted UX management console and suite of multi-platform reference apps.",
    quantity: 100,
    id: "SY4pBCLf6ql4nl6E5m_E7"
  },
  {
    name: "FORGE",
    description: "The world's first sport-focused publishing platform.",
    quantity: 1,
    id: "JeC5pzjspJw2YZnV8ot1m"
  }
]

const find = id => {
  return products.find(product => product.id === id)
}

const add = product => {
  products = products.concat(product)
}

const remove = id => {
  products = products.filter(product => product.id !== id)
}

const data = {
  find,
  add,
  remove
}

export default data