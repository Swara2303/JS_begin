bt1 = document.querySelector('#bt1');

// bt1.onclick = (e) => {
//     // console.log("HANDLER1");
//     // // let a = 25;
//     // // a++;
//     // // console.log(a); 
//     console.log(e);
//     console.log(e.type)
//     console.log(e.target);
    

// }

// bt1.onclick = () =>{
//     console.log("HANDLER 2")
// }

// let box = document.querySelector('#box');
// box.onmouseover = () => {
//  console.log("You're inside Box");
// }


bt1.addEventListener('click' , ()=>{
    console.log('Button btn1 is clicked!!')
})

bt1.addEventListener('click' , (e)=>{
    console.log('Button btn1 is clicked!! Handler - 2')
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target )
})


const handler3 = ()=>{
    console.log('Button btn1 is clicked!! Handler-3')
}


bt1.addEventListener('click' , handler3);

bt1.removeEventListener('click' , handler3);