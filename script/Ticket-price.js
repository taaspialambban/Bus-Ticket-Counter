let allClass = document.getElementsByClassName('common-btn');
for(const btn of allClass){
    btn.addEventListener('click', function (event) {
        const seat = event.target.innerText;
        const price = document.getElementById('Seat-price').innerText;
        
        const SelectedContainer = document.getElementById('Name-part');
        event.target.setAttribute('disabled',false)

        const lessSeatCount = getConvertedValue('seat-counter');
        if(lessSeatCount +1  <2){
            alert('There is no empty seat ');
            return;
        }

        // event.target.style.background = '#1DD100'

        const lessSeat = getConvertedValue('seat-counter');
        document.getElementById('seat-counter').innerText = lessSeat - 1;

        const countSeat = getConvertedValue('Seat-Selected');
        document.getElementById('Seat-Selected').innerText = countSeat+1;

        const li = document.createElement ('li');
        const h3 = document.createElement('h3');
        h3.innerHTML = seat;
        const p = document.createElement('p');
        p.innerText = price;
        li.appendChild(h3);
        li.appendChild(p)
        SelectedContainer.appendChild(li);

        updateTotalPrice(price)
        GrandTotalPrice()
        NextButton()
    })
}

function GrandTotalPrice(status) {
    const totalCost = getConvertedValue('total-money');
    if(status ==undefined){
        document.getElementById('Grand-price').innerText = totalCost
    }
    else{
        const couponCode = document.getElementById('delete-confirm').value ;
        if(couponCode == 'New15'){
            const discount = totalCost * .02;
        document.getElementById('Grand-price').innerText = totalCost - discount;
        }
        else if(couponCode == 'couple20'){
            const discount = totalCost * 15 / 100;
            document.getElementById('Grand-price').innerText = totalCost - discount
        }
        else{
            alert('please enter valid coupon code');
        }
    }
    
}


function updateTotalPrice(price) {
    const totalPrice = getConvertedValue('total-money');
    const convertedPrice = parseInt(price);
    const Sum = totalPrice + convertedPrice;
    document.getElementById('total-money').innerText = Sum
}



function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}

function HideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function ShowElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}