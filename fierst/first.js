function ramdoncolour() {
    const ran=Math.ceil(Math.random()*255);
    const ran1=Math.ceil(Math.random()*255);
    const ran2=Math.ceil(Math.random()*255);
    return `rgb(${ran},${ran1},${ran2})`;  
}
const boxes=document.querySelectorAll('.box');
boxes.forEach(e => {
      e.style.backgroundColor=ramdoncolour();  
});
