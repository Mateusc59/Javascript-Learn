let WashBtn = document.getElementById("btn1")
let MowBtn = document.getElementById("btn2")
let WeedsBtn = document.getElementById("btn3")
let SendInvoice = document.getElementById("invcbtn")

let SumWashCar = document.getElementById("washcardollar")
let SumMowLawn = document.getElementById("mowlawndollar")
let SumWeeds = document.getElementById("pullweedsdollar")
let TotalAmount = document.getElementById("dollar")

let WashCar = 10
let MowLawn = 20
let PullWeeds = 30
let sum = 0
let count = 0



WashBtn.addEventListener("click", function () {
  c += WashCar
  TotalAmount.textContent = "$" + sum
  SumWashCar.textContent = "$" + sum

  console.log(sum)
})

MowBtn.addEventListener("click", function () {
  sum += MowLawn
  TotalAmount.textContent = "$" + sum
  SumMowLawn.textContent = "$" + sum
  console.log(sum)

})

WeedsBtn.addEventListener("click", function () {
  sum += PullWeeds
  TotalAmount.textContent = "$" + sum
  SumWeeds.textContent = "$" + sum

  console.log(sum)
})




function save() {
  let sumDash = sum
}
