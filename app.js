const snake = document.querySelector('.header__snake');
console.log(snake);


function moovingSnake(){
    if(snake.style.background = 'greenyellow'){
        snake.style.background = 'red';
    }else if(snake.style.background = 'red'){
        snake.style.background = 'greenyellow';
    }
}
document.addEventListener('click', moovingSnake);