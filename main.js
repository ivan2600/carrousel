const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');


//Recorrer TODOS los punto
punto.forEach( ( cadaPunto, i)=>{
  //asignamos un CLICK a cadaPunto
  punto[i].addEventListener('click', ()=>{
    //guardar la posicion de ese PUNTO
    let position = i;
    //calculando el espacio que debe despalarse el GRANDE
    let operacion = position * -50;
    //Movemos el grande
    grande.style.transform = `translateX(${ operacion }%)`
    //recorremos todos los puntos
    punto.forEach( ( cadaPunto , i )=>{
      //Quitamos la clase ACTIVO a todos los puntos
      punto[i].classList.remove('activo')
    })

  //Añadir la clase activo en el punto que hemos hecho CLICK
    punto[i].classList.add('activo')
  })
})
