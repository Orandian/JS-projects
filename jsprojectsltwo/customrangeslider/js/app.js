//UI
const range = document.getElementById('range');

range.addEventListener('input',(e)=>{
    // console.log("hay");
    const value = +e.target.value;
    // console.log(value);
    const label = e.target.nextElementSibling;

    const rangewidth = getComputedStyle(e.target).getPropertyValue('width');
    // console.log(rangewidth);
    // console.log(rangewidth.length);
    const labelwidth = getComputedStyle(label).getPropertyValue('width');
    // console.log(labelwidth);

    const numrangewidth = rangewidth.substring(0,rangewidth.length - 2);
    // console.log(numrangewidth);
    const numlabelwidth = labelwidth.substring(0,labelwidth.length - 2);
    // console.log(numlabelwidth);
    const min = +e.target.min;
    const max = +e.target.max;
    // console.log(min,max);

    const leftright = value * (numrangewidth / max) - numlabelwidth / 2 + scale(value,min,max,10,-10);
    // console.log(leftright);
    label.style.left = `${leftright}px`;
    label.textContent = value;
});

const scale = (num,inmin,inmax,outmin,outmax) => {
    return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
}