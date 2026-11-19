function verAuto(nombre){
    let informacion = "";
    if(nombre == "Toyota Corolla"){
        informacion = "El Toyota Corolla Sedán con motor 1.8 litros es un automóvil compacto muy conocido por su bajo consumo de combustible, durabilidad y variantes que incluyen opciones de gasolina y tecnología híbrida. Precio: $22.000.";
    }
    else if(nombre == "BMW Serie 3"){
        informacion = "El BMW Serie 3 con motor de 2.0 litros (cuatro cilindros en línea) es una de las opciones más populares de la marca, equilibrando eficiencia, consumos contenidos y deportividad. Precio: $35.000.";
    }
    else if(nombre == "Mercedes-Benz"){
        informacion = "El motor de 2.0 litros de Mercedes-Benz es un bloque de cuatro cilindros en línea (con cilindrada de 1.991 cc) que se utiliza en una amplia variedad de modelos, desde sedanes y SUVs hasta versiones deportivas de alta gama. Precio: $42.000.";
    }
    else if(nombre == "Honda Civic"){
        informacion = "El motor de 2.0 litros del Honda Civic se presenta en dos configuraciones principales según el modelo y la versión: aspirado (sin turbo) y híbrido (e:HEV), además de la versión deportiva de alto rendimiento Type . Precio: $25.000.";
    }
    else if(nombre == "Hyundai Tucson"){
        informacion = "El Hyundai Tucson con motor 2.0 litros (gasolina atmosférico / MPI) es una de las configuraciones más populares y equilibradas de la marca por su mecánica sencilla y de fácil mantenimiento Precio: $29.000.";
    }
    else if(nombre == "Audi A4"){
        informacion = "El motor de 2.0 litros del Audi A4 es uno de los bloques más populares y versátiles de la marca, disponible a lo largo de los años tanto en versiones de gasolina (TFSI) como diésel (TDI), incluyendo variantes con tecnología mild-hybrid (MHEV). Precio: $38.000.";
    }
    document.getElementById("informacion").innerHTML = informacion;
    document.getElementById("ventana").style.display = "flex";
}
function cerrarVentana(){

    document.getElementById("ventana").style.display = "none";
}
let cantidadFavoritos = 0;

function agregarFavorito(boton){

    if(boton.innerHTML == "❤️ Favorito"){

        cantidadFavoritos++;
        boton.innerHTML = "❤️ Agregado";
    }
    else{

        cantidadFavoritos--;
        boton.innerHTML = "❤️ Favorito";
    }
    document.getElementById("contador").innerHTML =
    "❤️ Favoritos: " + cantidadFavoritos;
}
function buscarAutos(){

    let texto = document.getElementById("buscar").value.toLowerCase();
    let marca = document.getElementById("filtro").value;
    let tarjetas = document.getElementsByClassName("card");
    let encontrados = 0;

    for(let i = 0; i < tarjetas.length; i++){

        let nombre = tarjetas[i].getAttribute("data-nombre").toLowerCase();
        let marcaAuto = tarjetas[i].getAttribute("data-marca");

        if(nombre.includes(texto) && (marca == "todos" || marca == marcaAuto)){

            tarjetas[i].style.display = "block";
            encontrados++;
        }
        else{
            tarjetas[i].style.display = "none";
        }
    }
    if(encontrados == 0){
        document.getElementById("sinResultados").style.display = "block";
    }
    else{
        document.getElementById("sinResultados").style.display = "none";
    }
}
document.getElementById("buscar").addEventListener("keyup", buscarAutos);
document.getElementById("filtro").addEventListener("change", buscarAutos);

