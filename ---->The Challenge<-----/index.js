const WashBtn = document.getElementById("btn1")
const MowBtn = document.getElementById("btn2")
const WeedsBtn = document.getElementById("btn3")
const SendInvoice = document.getElementById("invcbtn")

let SumWashCar = document.getElementById("washcardollar")
let SumMowLawn = document.getElementById("mowlawndollar")
let SumWeeds = document.getElementById("pullweedsdollar")
let TotalAmount = document.getElementById("dollar")

let WashCar = 10
let MowLawn = 20
let PullWeeds = 30
let sum = 0
let total = []




WashBtn.addEventListener("click", function () {
  sum += WashCar
  SumWashCar.textContent = "$" + sum
  TotalAmount.textContent = "$" + sum
})

MowBtn.addEventListener("click", function () {
  sum += MowLawn
  SumMowLawn.textContent = "$" + sum
  TotalAmount.textContent = "$" + sum

  console.log(sum)

})

WeedsBtn.addEventListener("click", function () {
  sum += PullWeeds
  TotalAmount.textContent = "$" + sum
  SumWeeds.textContent = "$" + sum

  console.log(sum)
})




function save() {
  let globalsum = allTask()
  sum += globalsum
  total.push(globalsum)
  console.log(sum)

}

function allTask() {
  for (let i = 0; i < total.length; i++)
    return total[i]
}
