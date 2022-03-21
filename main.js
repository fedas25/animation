let span = document.getElementById("span");
span.onclick = openNav;

let a = document.getElementById("close");
a.onclick = closeNav;

let losos = document.querySelector('.button'); // что - то с градиентом сделать
losos.onclick = () => {
    let world = document.getElementById('body');
    let color = `linear-gradient(-45deg, rgb(${Math.floor(Math.random() * 255)}), rgb(${Math.floor(Math.random() * 255)}), rgb(${Math.floor(Math.random() * 255)}), rgb(${Math.floor(Math.random() * 255)}) )`;
    // color = "linear-gradient(-45deg, #c0c0c0, #c0c0c0, #c0c0c0, #c0c0c0)";
    debugger
    // background: linear-gradient(#e66465, #9198e5);
    document.body.style.backgroundImage;
    // world.style.backgroundImage = ;
    body.style.background = "linear-gradient(#e66465, rgb(231,122,11) )";
    "linear-gradient(-45deg, #50352d, #d61818, #000000, #e6ff09)";
   
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let rds = document.querySelector('.rds-1');

rds.onclick = () => {
    rds.style.animationPlayState = "running";debugger
    setTimeout(bax, 5000);
}

let bax = () => {
    debugger
    let world = document.querySelector('body');
    console.log();
    world.hidden = true;
    setTimeout(() => {
          let world = document.querySelector('body');
          world.hidden = false;
          world.style.background = "#c0c0c0";
          }, 4000);
}
