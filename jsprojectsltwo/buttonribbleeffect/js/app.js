const buttons = document.querySelectorAll('.btnripple');

buttons.forEach((button) => {
    // console.log(button);

    button.addEventListener('click',(e)=>{
        // console.log('hay');
        const cx = e.clientX;
        const cy = e.clientY;
        // console.log(cx,cy);

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;
        // console.log(btntop,btnleft);

        const xinside = cx - btnleft;
        const yinside = cy - btntop;
        // console.log(xinside, yinside);

        // Create Circle
        const circle = document.createElement('span');
        // circle.className = "circle";
        circle.classList.add('circle');

        circle.style.top = yinside + 'px';
        circle.style.left = xinside + 'px';

        e.target.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },400)
    });
});