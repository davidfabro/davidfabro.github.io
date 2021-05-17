function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let mensajes = xmlDoc.querySelectorAll("mensaje")
	for(let i=0; i<mensajes.length; i++)
		if (i % 2 == 0)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='par'>" + mensajes[i].textContent + "</p>"
	else
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='impar'>" + mensajes[i].textContent + "</p>"
	
}

function CargarFichero()
{
	loadDocA("mensajes.xml","xml")
	
}
	setInterval(CargarFichero, 3000);
