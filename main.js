const form=document.querySelector('form');
const campoA = document.querySelector('#num1');
const campoB = document.querySelector('#num2');
const valid= campoB.value<=campoA.value;
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!valid){
        document.querySelector('.sucess-messenger').style.display='block';
        campoA.value=' ';
        campoB.value=' ';
        
    }else {
        campoB.classList.add('.error');
        document.querySelector('.error-messenger').style.display='block';
        
    }
    
});