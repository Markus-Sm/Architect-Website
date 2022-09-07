window.onload =() => {
	setTimeout(() =>{
		document.querySelector("body").classList.add("display");
	}, 1000)
}


document.querySelector('.hamburger-menu').addEventListener('click', () => {
	document.querySelector('.container').classList.toggle('change')
})

document.querySelectorAll('.field').forEach(field => {
	field.addEventListener('focus', () => {
		field.nextElementSibling.style.cssText = 'transform: translateY(-3rem); font-size: 1.2rem;'
		field.style.borderBottomStyle = 'solid'
	})

	field.addEventListener('focusout', () => {
		if (!field.value) {
			field.nextElementSibling.style.cssText = 'transform: translateY(0); font-size: 1.6rem;'
			field.style.borderBottomStyle = 'dashed'
		} else {
			field.nextElementSibling.style.cssText = 'transform: translateY(-3rem); font-size: 1.2rem;'
			field.style.borderBottomStyle = 'solid'
		}
	})
})

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

/* ------------------------------------------------------------------------*/

const menuLinkHome = document.getElementById("Home");
const menuLinkAboutUs = document.getElementById("About-Us");
const menuLinkTeam = document.getElementById("Team");
const menuLinkContact = document.getElementById("Contact");

document.getElementById('Team').addEventListener('click', () => {
	document.querySelector('.container').classList.remove('change')
})

document.getElementById('About-Us').addEventListener('click', () => {
	document.querySelector('.container').classList.remove('change')
})

document.getElementById('Contact').addEventListener('click', () => {
	document.querySelector('.container').classList.remove('change')
})

document.getElementById('Home').addEventListener('click', () => {
	document.querySelector('.container').classList.remove('change')
})
/* ________________________________________________________________________________*/

const nav = document.querySelector('.sidebar');
const navBtn = document.querySelector('.hamburger-menu');
const allNacItems = document.querySelectorAll('.menu-item');
const navBtnBars = document.querySelectorAll('.line')
const allSections = document.querySelector('.section')
const footerYear = document.querySelector('.footer-year')

const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}

handleCurrentYear();



