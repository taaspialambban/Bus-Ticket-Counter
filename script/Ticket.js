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
  SetInnerText('seat-counter',count)

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
const totalCost = document.getElementById('total-price');
const ConvertedTotalCost = parseInt(totalCost);
document.getElementById('total-price').innerText = ConvertedTotalCost + parseInt(seatPrice)
})
Class.addEventListener('click', function(e){
    seat = seat +1
    SetInnerText('Seat-Selected',seat);
    
})
}

function SetInnerText(id, value) {
    document.getElementById(id).innerText = value;
}