let hour_hand=document.querySelector(".hour-hand")
let min_hand=document.querySelector(".min-hand")
let sec_hand=document.querySelector(".sec-hand")
let dh=document.querySelector(".dh")
let dm=document.querySelector(".dm")
let ds=document.querySelector(".ds")

setInterval(() => {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    // Correct rotation formulas
    let hrotation = 30 * h + m / 2; // 30° per hour + 0.5° per minute
    let mrotation = 6 * m;          // 6° per minute
    let srotation = 6 * s;          // 6° per second

    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    min_hand.style.transform = `rotate(${mrotation}deg)`;
    sec_hand.style.transform = `rotate(${srotation}deg)`;
    dh.innerHTML=h<10?'0'+h:h;
    dm.innerHTML=m<10?'0'+m:m;
    ds.innerHTML=s<10?'0'+s:s;
}, 1000); // runs every 1 second
