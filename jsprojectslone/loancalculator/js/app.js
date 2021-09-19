const terms = document.getElementById('years');
const bubble = document.querySelector('.bubble');

//list for terms

terms.addEventListener('input',function(){
    const val = terms.value;
    // console.log(val);
   bubble.innerHTML = val > 1 ? `${val} Months` : `${val} Month`;
 });

//listen for submit

document.getElementById('loan-form').addEventListener('submit',function(e){

    //hide result
    document.getElementById('results').style.display= 'none';

    //show loader

    document.getElementById('loading').style.display='block';

    setTimeout(calculateresult,1000);

    e.preventDefault();
});

 // Calculate Result

 function calculateresult(){
    //console.log('calculating');

    //ui

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');

    const monthlypayment = document.getElementById('monthly-payment');
    const totalpayment = document.getElementById('total-payment');
    const totalinterest = document.getElementById('total-interest');

    const getprincipal = parseFloat(amount.value);
    const getinterest = parseFloat(interest.value)/12;
    const getterm = parseFloat(terms.value);

    //compute monthly payment

    const monthly = Math.round((getprincipal*(getterm*getinterest))/100);

    // console.log(monthly);

   if(monthly){
       monthlypayment.value = ((getprincipal+monthly)/getterm).toFixed(2);
       totalinterest.value = monthly.toFixed(2);
       totalpayment.value = (monthlypayment.value * getterm).toFixed(2);

        //show result
        document.getElementById('results').style.display = 'block';

        //hide loader
        document.getElementById('loading').style.display = 'none';

    }else{
        //console.log("Please check your number");

        showerror("Please check your number");
    }  
 };

 // Show Error

function showerror(message){

    //hide loaderbar
    document.getElementById('loading').style.display = 'none';

    const errordiv = document.createElement('div');

    //add class
    errordiv.className = "alert alert-danger";

    //create textnode
    errordiv.appendChild(document.createTextNode(message));

    //get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //insert error above heading
    card.insertBefore(errordiv,heading);

    setTimeout(clearerror,3000);
}

//clear error

function clearerror(){
    document.querySelector('.alert').remove();
}

