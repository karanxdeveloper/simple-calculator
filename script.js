let string = ``
let display = document.querySelector('input')
let numbers = document.querySelectorAll('.num')


const number = Array.from(numbers)
console.log(number)

number.forEach((item)=>{
    item.addEventListener('click', (e)=>{

        if(e.target.innerHTML == '='){
            string = eval(string).toLocaleString('fullwide', { useGrouping: false });
            display.value = string
        } else if(e.target.innerHTML == 'C'){
            string = ``;
            display.value = string
        }else{
            string = string + e.target.innerHTML
            display.value = string
           
        }

    })
})

    
