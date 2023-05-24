console.log("hello, world!")

const clockElm = document.getElementById("clock")
const completedOrdersElm = document.getElementsByClassName("completed-orders")
const lastUpdatedElm = document.getElementById("lastUpdated")
const pendingOrdersElm = document.getElementById("pendingOrders")

setInterval(() => {
  clockElm.innerHTML = `<div id="clockDate">${new Date().toLocaleDateString()}</div><div id="clockTime">${new Date().toLocaleTimeString()}</div>`
}, 1500)

fetch("http://localhost:8181/latest").then((resp) => {
  resp.json().then((data) => {
    lastUpdatedElm.innerHTML = data.lastUpdated
    const ordersPending = parseInt(data.orders.ordersPending)
    pendingOrdersElm.innerHTML = ordersPending
    if (ordersPending > 50) pendingOrdersElm.className += " text-red-500"
    completedOrdersElm.innerHTML = parseInt(data.completedOrders)
  })
})
