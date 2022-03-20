let span = document.getElementById("span");
span.onclick = openNav;

let a = document.getElementById("close");
a.onclick = closeNav;


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let rds = document.querySelector('.rds-1');

rds.onclick = () => {
    rds.style.animationPlayState = "running";
    setTimeout(bax, 5000);
}

let bax = () => {
    let world = document.querySelector('body');
    console.log();
    world.innerHTML = '';
    setTimeout(() => {
        let world = document.querySelector('body');
        world.style.background = "black"
    }, 2000)

}
