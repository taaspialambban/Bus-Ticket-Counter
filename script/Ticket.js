function HideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function ShowElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function SetBackGroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
    // element.classList.add('color-white')
}


const allClass = document.getElementsByClassName('common-btn');
let count = 40;
let seat = 0
for( const Class of allClass){
Class.addEventListener('click',function(e){
  count = count-1;
  SetInnerText('seat-counter',count);
  const price = document.getElementById('Seat-price').innerText;

  const SeatName = e.target.innerText;
//   const SeatClass = 
const seatPrice = price;
const SelectedContainer = document.getElementById('Name-part') ;
const li = document.createElement('li');
const h1 = document.createElement('h1');
h1.innerText = SeatName;

// const p =
const p2 = document.createElement('p');
p2.innerText =seatPrice

li.appendChild(h1);
li.appendChild(p2);

SelectedContainer.appendChild(li);

const totalPrice = document.getElementById
('total-money').innerText;
const ConvertedTotalPrice = parseInt(totalPrice);
const sum = ConvertedTotalPrice + parseInt(seatPrice);
SetInnerText('total-money', sum);

const grandTotal = document.getElementById('Grand-price').innerText;
const ConvertedGrandTotalPrice = parseInt(grandTotal);
const sum2 = ConvertedGrandTotalPrice + parseInt(seatPrice);
console.log(sum2)
SetInnerText('Grand-price',sum2)
})

Class.addEventListener('click', function(e){
    seat = seat +1
    SetInnerText('Seat-Selected',seat);
    
})
}

// function CouponCard(params) {
//     document.getElementById('delete-confirm').addEventListener('keyup',function (event) {
//         const text = event.target.value
//         console.log(text)  
//       })
// }
document.getElementById('delete-confirm').addEventListener('keyup',function (event) {
    const text = event.target.value
    // console.log(text)
    const CouponBtn = document.getElementById('Disable-btn')
    if(text === 'New15' || text === 'couple20'){
        CouponBtn.removeAttribute('disabled')
    }  
    else{
        CouponBtn.setAttribute('disabled')
    }
  })

const price = 5000;
if(price >= 5000){
    const discount = price * 10/100;
    const payAmount = price - discount
}
  

// function Coupon() {
//     document.getElementById("delete-confirm").addEventListener("keyup",function (e) {
//         const text = e.target.value;
//         console.log(text)
//     })
// }


function SetInnerText(id, value) {
    document.getElementById(id).innerText = value;
}