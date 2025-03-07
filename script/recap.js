const addMoney = document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const pin=document.getElementById('pin-number').value;
    const convertedPin =parseInt(pin);
    const amount =document.getElementById('amount-input').value;
    const convertAmount = parseFloat(amount);
    const mainBalance =document.getElementById('main-balance').innerText;
    const ConvertedMainBalance =parseFloat(mainBalance);
    if(amount && pin){
        if(convertedPin===1234){
         const sum= ConvertedMainBalance + convertAmount;
         document.getElementById('main-balance').innerText=sum;
         
        }
        else{
            alert('Enter your pin')
        }

        
    }
    else{
        alert('enter amount')
    }
    
})