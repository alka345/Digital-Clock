const clock =document.getElementById("clock")
setInterval(()=>{
    let d= new Date();
    // console.log(d);
    htime=d.getHours();
    // console.log(htime);
    mtime=d.getMinutes();
    // console.log(mtime);
    stime=d.getSeconds();
    // console.log(stime);

    //how to display it over digital clock
    clock.innerHTML=`<h3>${htime}:${mtime}:${stime}</h3>`
    //continuosly run kre clock --used setInterval
    
},1000)
