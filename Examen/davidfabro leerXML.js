function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let cine = xmlDoc.querySelectorAll("mensaje")
	for(let i=0; i<cine.length; i++)
		if (i % 2 == 0)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='par'>" + cine[i].textContent + "</p>"
	else
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='impar'>" + cine[i].textContent + "</p>"
	
}
function CargarFichero()
{
	loadDocA("mensajes.xml","xml")
	
}
	setInterval(CargarFichero, 5000);