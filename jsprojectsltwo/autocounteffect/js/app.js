//UI
const counters = document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach(counter => {
    // console.log(counter);

    counter.innerText = '0';

    const updatecounter = ()=>{
        // console.log('hay');
        const target = +counter.getAttribute('data-target');
        //console.log(target);
        // console.log(typeof target, target);

        const ctr = +counter.innerText;
        // console.log(typeof ctr,ctr);

        // (100 is as you like, we can divide what we want)
        const increment = target / 100;
        // console.log(increment);

        if(ctr < target){
            counter.innerText = Math.ceil(ctr + increment);

            setTimeout(updatecounter, 50);
        }
    };

    updatecounter();

});