let btn = document.querySelector('#togglebtn');

let body = document.querySelector('body');

let currColor = 'light';

const changeMode = ()=>{
  
    if(currColor === 'light'){
        body.style.backgroundColor = 'black';
        currColor = 'dark'
    }
    else{
        body.style.backgroundColor = 'white';
        currColor = 'light'
    }
}

btn.addEventListener('click' , changeMode);
