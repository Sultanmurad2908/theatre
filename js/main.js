let mobNav = document.querySelector('.mobNav'),
    stick1 = document.querySelector('.path1'),
    stick2 = document.querySelector('.path2'),
    stick3 = document.querySelector('.path3');

function openNav() {
    document.body.classList.toggle('overfl');
    mobNav.classList.toggle('openedNav');
    stick1.classList.toggle('opened1');
    stick2.classList.toggle('opened2');
    stick3.classList.toggle('opened3');
}