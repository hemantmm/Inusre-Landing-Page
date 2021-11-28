
function openForm()
{
    document.getElementById('myForm').style.display = "block";
}

function closeForm()
{
    document.getElementById('myForm').style.display = "none";
}


function openForm1()
{
    document.getElementById('myForm1').style.display = "block";
}

function closeForm1()
{
    document.getElementById('myForm1').style.display = "none";
}

function openForm2()
{
    document.getElementById('myForm2').style.display="block";
}

function closeForm2()
{
    document.getElementById('myForm2').style.display="none";
}



const burger = document.getElementById('burger')
const navUl = document.getElementById('nav-ul')
const logoImg = document.getElementById('logo-img')

burger.addEventListener('click',()=>{
    navUl.classList.toggle('show');
})

logoImg.addEventListener('click',()=>{
    navUl.classList.toggle('hide');
})