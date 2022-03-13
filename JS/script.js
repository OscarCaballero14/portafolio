const botonMenu = document.querySelector('.bx-menu');
const menunav = document.querySelector('.menu');

botonMenu.addEventListener('click', ()=>{
	menunav.classList.toggle("menu-modal")
})

window.addEventListener('click', e=>{
	if (menunav.classList.contains('menu-modal') && e.target!=menunav && e.target!=botonMenu)
		{
			menunav.classList.toggle("menu-modal")
		}
})

$(".goTop").click(function(){scroll(0,0)})