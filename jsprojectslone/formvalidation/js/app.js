  
const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');



// success
function showsuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}


//error
function showerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";

    const small = formcontrol.querySelector('small');
    small.innerText=message;
}

// check valid email (using regular express)
function isvalidemail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// Event Listener
form.addEventListener('submit',function(e){
    // console.log(username.value);

    //username
    if(username.value === ''){
        // error
        showerror(username,"Username is required");
    }else{
        //success
        showsuccess(username);
    }


    //email
    if(email.value===''){
        showerror(email,'Email is required');
    }else if(!isvalidemail(email.value)){
        showerror(email,"Email is not valid");
    }else{
        showsuccess(email);
    }

    //password
    if(password.value ===''){
        showerror(password,'Password is required');
    }else{
        showsuccess(password);
    }

    //confirm password
    if(cfmpassword.value === ''){
        showerror(cfmpassword,"Confirm Password is required");
    }else{
        // showsuccess(cfmpassword);
        if(password.value !== cfmpassword.value){
            showerror(cfmpassword,"Password do not match");
        }else{
            showsuccess(cfmpassword);
        }
    }

    e.preventDefault();
});



// ADVANCE
//Event Listener
// form.addEventListener('submit',function(e){

//     // console.log(username.value);


//     e.preventDefault();
// });