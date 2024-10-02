let select=document.querySelectorAll('.currency');
let amount=document.getElementById('InputAmount');
let OutputAmount=document.getElementById('OutputAmount');
let tocurr=0;
    const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {

    const entries=Object.entries(data);
    for(i=0; i<entries.length ;i++)
    {
        select[0].innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  });

  let inputamountvalue=0;
function convert()
{
    inputamountvalue=amount.value;
    if(select[0].value != select[1].value)
    {
        const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputamountvalue}&from=${select[0].value}&to=${select[1].value}`)
      .then(val => val.json())
      .then((val) => {
        OutputAmount.value=Object.values(val.rates)[0];
      });
    }
    else{
        alert('Please select two different currencies!')
    }
}
