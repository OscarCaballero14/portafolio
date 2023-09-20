const btnInterruptor = document.querySelector("#checkbox");
const aside = document.querySelector('.aside');
const main = document.querySelector('.main');
const linea = document.querySelector('.linea');
const linea2 = document.querySelector('.linea2')
const nombre = document.querySelector('.nombre');
const celular = document.querySelector('.celular');
const email = document.querySelector('.email');
const hover1 = document.querySelector('.hover1');
const hover2 = document.querySelector('.hover2');
const hover3 = document.querySelector('.hover3');
const hover4 = document.querySelector('.hover4');
const hover5 = document.querySelector('.hover5');
const fecha1 = document.querySelector('.fecha1');
const fecha2 = document.querySelector('.fecha2');
const fecha3 = document.querySelector('.fecha3');
const tecnica = document.querySelector('.tecnica');
const universitaria = document.querySelector('.universitaria');
const interes = document.querySelector('.interes');
const habilidad = document.querySelector('.habilidad');
const subtitulo = document.querySelector('.subtitulo');
const byv = document.querySelector('.byv');
const proyectU = document.querySelector('.proyectU');
const gotop = document.querySelector('.goTop');

btnInterruptor.addEventListener("click", ()=>{

	aside.classList.toggle("asiderecolor")

	main.classList.toggle("mainrecolor")

	linea.classList.toggle("linearecolor")
	linea2.classList.toggle("linearecolor")

	nombre.classList.toggle("nombrerecolor")
	celular.classList.toggle("recolorcelular")
	email.classList.toggle("emailrecolor")
	hover1.classList.toggle("hover-recolor")
	hover2.classList.toggle("hover-recolor")
	hover3.classList.toggle("hover-recolor")
	hover4.classList.toggle("hover-recolor")
	hover5.classList.toggle("hover-recolor")

	fecha1.classList.toggle("fecha1-recolor")
	fecha2.classList.toggle("fecha2-recolor")
	fecha3.classList.toggle("fecha3-recolor")
	tecnica.classList.toggle("tecnica-recolor")
	universitaria.classList.toggle("universitaria-recolor")

	interes.classList.toggle("interesrecolor")

	habilidad.classList.toggle("habilidadrecolor")
	subtitulo.classList.toggle("subtitulorecolor")

	byv.classList.toggle("byv-recolor")
	proyectU.classList.toggle("proyectU-recolor")

	gotop.classList.toggle("goToprecolor")
});
