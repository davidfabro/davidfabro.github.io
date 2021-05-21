function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let cine = xmlDoc.querySelectorAll("pelicula")
	for(let i=0; i<cine.length; i++)
	
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='par'>" + cine[i].textContent + "</p>
	
}
function CargarFichero()
{
	loadDocA("peliculas.xml","xml")
	
}
	setInterval(CargarFichero, 5000);
