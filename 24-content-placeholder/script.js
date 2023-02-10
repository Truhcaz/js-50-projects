
const header = document.getElementById('header')
const title = document.getElementById('title')
const description = document.getElementById('description')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1676012120403-42a8ae3f998e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="header_img">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    description.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, distinctio'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/49.jpg" alt="profile_img">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'Oct 08, 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}   