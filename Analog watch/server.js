
setInterval(()=>{
data=new Date();
htime=data.getHours();
mtime=data.getMinutes();
stime=data.getSeconds();
hrotation=30*htime + mtime/2 +stime/120;
mrotation=6*mtime + stime/10;
srotation=6*stime;


document.querySelector("#hour").style.transform =`rotate(${hrotation}deg)`
document.querySelector("#min").style.transform =`rotate(${mrotation}deg)`
document.querySelector("#sec").style.transform =`rotate(${srotation}deg)`

},1000);
