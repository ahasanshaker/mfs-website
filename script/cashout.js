document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const pin =document.getElementById('cashout-pin').value;
    const convertedPin =parseInt(pin);
    const  cashoutAmount= document.getElementById('cashout-amount').value;
    const convertedCashoutAmount =parseFloat(cashoutAmount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const ConvertedMainBalance =parseFloat(mainBalance);
    if ( convertedPin ===1234){
        const sum= ConvertedMainBalance -  convertedCashoutAmount ;
        document.getElementById('main-balance').innerText=sum;
    }
    else{
        alert('Enter valid pin')
    }
})
