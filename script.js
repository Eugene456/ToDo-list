'use strict';

const list = document.querySelector('.list'),
    input = document.querySelector('input'),
    button = document.querySelector('button');

list.addEventListener('click', event => {
    let li = document.querySelectorAll('li'),
        target = event.target;
    target = target.closest('li');
        
    li.forEach(item =>{ 
        if(item === target){
            target.classList.toggle('done')
                        
        }
    });
});

button.addEventListener('click', () =>{
    
    if (input.value === ''){
        alert('Вы ничего не ввели в тектовое поле. Повторите попытку');
    } else{
        let newLi = document.createElement('li');
        newLi.textContent = input.value;
        list.appendChild(newLi);
        input.value = '';
    }
});
