//CALL FOR THE API AND FETCH

async function getFromApi(endPoint) {
  let array = await fetch(endPoint);
  let json = await array.json();
  console.log(json);
  return json;
}

function showArray() {
  getFromApi('https://voltmotors.com.ar/api/exam/')
  .then(showCars) 
  .catch(function (error) {
    console.log('Error', error);
  });
}

showArray();



function showCars(data) {

  //TOUCH BUTTON AND DISPLAY Z1 CAR
  const showZ = () => {
    document.getElementById ('z1').hidden = false;
  }
  let boton1 = document.getElementById ('boton-z1');
  boton1.addEventListener ('click', showZ);

  //DISPLAY OF Z1 CAR
  
  for (let i = 0; i < data.cars.length-2; i++) {
    let modelContainerZ = document.getElementById("model-containerZ");
    let modelZ = document.createElement('p');
    modelZ.classList.add ('model-style');
    modelZ.innerHTML = data.cars[0].model;
    modelContainerZ.appendChild(modelZ);

    let imageContainerZ = document.getElementById ('image-containerZ');
    let imageZ = document.createElement ('img');
    imageZ.src = data.cars[0].image; 
    imageZ.innerHTML;
    imageContainerZ.appendChild (imageZ);
    imageZ.classList.add ('image-style');
      
    let descriptionContainerZ = document.getElementById ('description-containerZ');
    let descriptionZ = document.createElement ('p');
    descriptionZ.innerHTML = data.cars[0].description;
    descriptionContainerZ.appendChild (descriptionZ);

    let caracsContainerZ = document.getElementById ('caracs-containerZ');
    let caracsZ = document.createElement ('p');
    caracsZ.innerHTML = data.cars[0].caracs;
    caracsContainerZ.appendChild (caracsZ);
  }

   //TOUCH BUTTON AND DISPLAY Z1 CAR
   const showw = () => {
    document.getElementById ('w1').hidden = false;
  }
  let boton2 = document.getElementById ('boton-w1');
  boton2.addEventListener ('click', showw);

  //DISPLAY OF W1 CAR 

  for (let i = 1; i < data.cars.length-1; i++) {
    let mainContainerW = document.getElementById("model-containerW");
    let modelW = document.createElement('p');
    modelW.classList.add ('parrafo');
    modelW.innerHTML = data.cars[1].model;
    modelW.classList.add ('model-style');
    mainContainerW.appendChild(modelW);

    let imageContainerW = document.getElementById ('image-containerW');
    let imageW = document.createElement ('img');
    imageW.src = data.cars[1].image; 
    imageW.innerHTML;
    imageW.classList.add ('image-style')
    imageContainerW.appendChild (imageW);
      
    let descriptionContainerW = document.getElementById ('description-containerW');
    let descriptionW = document.createElement ('p');
    descriptionW.innerHTML = data.cars[1].description;
    descriptionContainerW.appendChild (descriptionW);

    let caracsContainerW = document.getElementById ('caracs-containerW');
    let caracsW = document.createElement ('p');
    caracsW.innerHTML = data.cars[1].caracs;
    caracsContainerW.appendChild (caracsW);
  }
  
  //TOUCH BUTTON AND DISPLAY Z1 CAR
  const showE = () => {
    document.getElementById ('e1').hidden = false;
  }
  let boton3 = document.getElementById ('boton-e1');
  boton3.addEventListener ('click', showE);


  //DISPLAY OF E1 CAR
  
  for (i= 1 ; i <data.cars.length-1; i++) {
    let mainContainerE = document.getElementById("model-containerE");
    let modelE = document.createElement('p');
    modelE.classList.add ('parrafo');
    modelE.innerHTML = data.cars[2].model;
    modelE.classList.add ('model-style');
    mainContainerE.appendChild(modelE);

    let imageContainerE = document.getElementById ('image-containerE');
    let imageE = document.createElement ('img');
    imageE.src = data.cars[2].image; 
    imageE.innerHTML;
    imageE.classList.add ('image-style');
    imageContainerE.appendChild (imageE);
      
    let descriptionContainerE = document.getElementById ('description-containerE');
    let descriptionE = document.createElement ('p');
    descriptionE.innerHTML = data.cars[2].description;
    descriptionContainerE.appendChild (descriptionE);

    let caracsContainerE = document.getElementById ('caracs-containerE');
    let caracsE = document.createElement ('p');
    caracsE.innerHTML = data.cars[2].caracs;
    caracsContainerE.appendChild (caracsE);
  } 
}




