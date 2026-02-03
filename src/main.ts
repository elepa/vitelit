import './components/ui-button'; // componente
//import type { UIButton } from './components/ui-button';
import './components/ui-card';
import type { UICard } from './components/ui-card';
import './components/ui-input';


//forma de generar varios botones
// eso es par el ejemplo basico const labels = ['Guardar', 'Cancelar', 'Enviar'];
const app = document.getElementById('app');

// Definimos los botones con su texto y su variante deseada
const botonesConfig = [
  { texto: 'Guardar', color: 'primary' },
  { texto: 'Cancelar', color: 'secondary' },
  { texto: 'Enviar', color: 'danger' }
];


// botonesConfig.forEach(config => {
//   const btn = document.createElement('ui-button') as UIButton;
//   btn.label = config.texto;
//   // IMPORTANTE: Aquí asignas la variante
//   btn.variant = config.color as 'primary' | 'secondary' | 'danger'; 
  
//   app?.appendChild(btn);
// });


// labels.forEach(texto => {
//   const btn = document.createElement('ui-button') as UIButton;
//   btn.label = texto; // Gracias a que tienes la clase bien definida, esto funciona
//   app?.appendChild(btn);
// });

//creo el elemento boton ok
// const app = document.getElementById('app');
// app!.innerHTML = `<ui-button label="Enviar"></ui-button>`;

//Crear el elemento boton directamente ok
// const button = document.createElement('ui-button');
// button.setAttribute('label', 'Guardar');
// app!.appendChild(button);


//metodo2 ok
// Esperar a que el DOM esté listo
// window.addEventListener('DOMContentLoaded', () => {
//   const app = document.getElementById('app');

//   if (app) {
//     const button = document.createElement('ui-button');
//     button.setAttribute('label', 'Guardar');
//     app.appendChild(button);
//   }
// });
/////////////////////////////////////////////////////////////////////////////////


//validacion
const card = document.getElementById('formCard') as UICard | null;

if (card) {
  card.addEventListener('ui-click', (e: Event) => {
    const evt = e as CustomEvent;
    console.log('CLICK DETECTADO', evt.detail);

    // Buscar los inputs **dentro del card** al momento del click
    const inputs = card.querySelectorAll('ui-input');
    let valid = true;

    inputs.forEach((input: any) => {
      if (!input.validate()) {
        valid = false;
      }
    });

    if (valid) {
      const values = Array.from(inputs).map((i: any) => i.value);
      console.log('Formulario OK:', values);
    } else {
      console.log('Formulario NO válido');
    }
  });
}