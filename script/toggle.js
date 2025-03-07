document.getElementById('cashout').style.display ='none';

document.getElementById('add-money-div')
.addEventListener('click',function(){
    document.getElementById('cashout').style.display ='none';
    document.getElementById('addMoney-section').style.display ='block';
})
document.getElementById('cashOut-div')
.addEventListener('click',function(){
    document.getElementById('addMoney-section').style.display ='none';
    document.getElementById('cashout').style.display ='block';
})