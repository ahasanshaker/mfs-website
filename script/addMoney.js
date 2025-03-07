document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const amount =document.getElementById('amount-input').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin-number').value;
    const ConvertPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const ConvertedMainBalance =parseFloat(mainBalance);
    
    if ( ConvertPin ===1234){
        const sum= ConvertedMainBalance +  convertedAmount ;
        document.getElementById('main-balance').innerText=sum;
    }
    else{
        console.log('pin thik na');
    }
})