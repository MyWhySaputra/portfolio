var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    } else {
    document.getElementById("header").style.top = "-110px";
    document.getElementById('dropdown').style.display = 'none';
    document.getElementById('fa-bars').style.display = 'block';
    document.getElementById('fa-xmark').style.display = 'none';
    }
    prevScrollpos = currentScrollPos;
}

const project = document.getElementById('list-project').children;

const buttom = document.getElementById('show');

buttom.addEventListener('click', function handleClick() {
for (let i = 6; i < project.length; i++){
  if (project[i].style.display === 'block') {
    project[i].style.display = 'none';
    buttom.textContent = 'Show More';
  } else {
    project[i].style.display = 'block';
    buttom.textContent = 'Show Less';
  }
}
});

const intro = document.getElementById('intro');

const home = document.getElementById('home');

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    intro.setAttribute("id","intro-display-none");
  },2300);

  setTimeout(()=>{
    home.style.display = 'block';
    AOS.refresh();
  },2300);
});

const dropDownMenu = document.getElementById('dropdown');

const toggleBtn = document.getElementById('toggle-btn');

const bars = document.getElementById('fa-bars');

const xmark = document.getElementById('fa-xmark');

toggleBtn.addEventListener('click', function handleClick() {
  if (dropDownMenu.style.display === 'block') {
    dropDownMenu.style.display = 'none';
    bars.style.display = 'block';
    xmark.style.display = 'none';
  } else {
    dropDownMenu.style.display = 'block';
    bars.style.display = 'none';
    xmark.style.display = 'block';
  }
});
