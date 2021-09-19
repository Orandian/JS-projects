const filter = document.getElementById('filter');
const ulresult = document.getElementById('result');
const url = 'https://randomuser.me/api/?results=';
const totalusers = 50;

const listitems = [];

// AJAX request
async function getdata(){
    // console.log('hay');

    const res =await fetch(`${url}${totalusers}`);
    // console.log(res);

    /* const data =await res.json();
    console.log(data); */

    const {results} = await res.json();
    // console.log(results);

    ulresult.innerHTML = '';

    results.forEach(result=>{
        // console.log(result);
        const li = document.createElement('li');
        //console.log(li);

        li.innerHTML=`
        <img src="${result.picture.large}" alt="${result.name.first}" />
        <div class="userinfo">
            <h4>${result.name.first} ${result.name.last}</h4>
            <p>${result.location.city}, ${result.location.country}</p>
        </div>
        `;
        // console.log(li);

        ulresult.appendChild(li);

        listitems.push(li);
    });
}

getdata();


// Event Listener
/* filter.addEventListener('input',function(e){
    filterdata(e.target.value);
}); */
filter.addEventListener('input',(e)=>filterdata(e.target.value));

// console.log(listitems);

function filterdata(search){
    // console.log(search);

    listitems.forEach(listitem=>{
        // console.log(listitem);

        if(listitem.innerText.toLocaleLowerCase().includes(search.toLowerCase())){
            listitem.classList.remove('hide');
        }else{
            listitem.classList.add('hide');
        }
    });
}

// 1AUGL2 WDFXXXX

/* 
await ဆိုတာကို သုံးမယ်ဆိုရင် function က async ပါမှရမယ် vise-versa
သူကပြောမယ်ဆိုရင် ဟိုဘက်လာတဲ့ data ကိုစောင့်တာ
ဘာဖြစ်မလဲ ဘာပြန်လာမလဲဆိုတာကိုစောင့်တာ
data ရောက်တယ် မိတယ်ဆိုရင် status = 200 ဆိုပြီပြလိမ့်မယ် means ok တယ်
data မရောက်ဘူး ဆိုရင် status = 404 ဆိုပြီပြလိမ့်မယ် means not ok
*/