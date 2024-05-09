const currency_one = document.getElementById('currency-one')
const currency_two = document.getElementById('currency-two')

const amount_one = document.getElementById('amount-one')

const amount_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')


function calculate(){
    const cur_one = currency_one.value;
    const cur_two = currency_two.value;

    fetch('https://api.exchangerate-api.com/v4/latest/'+cur_one).then(res => res.json()).then(data =>{
        const rate = data.rates[cur_two]

        rateEl.innerText = '1 ' + cur_one +' = '+ rate +" " + cur_two +".";

        amount_two.value = amount_one.value * rate.toFixed(2);
    })

}

currency_one.addEventListener('change', calculate)
currency_two.addEventListener('change', calculate)
amount_one.addEventListener('input', calculate)
amount_two.addEventListener('input', calculate)

swap.addEventListener('click', ()=>{
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculate()
})

calculate();