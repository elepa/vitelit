import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js'; 

@customElement('ui-button')

export class UIButton extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: String }) variant: 'primary' | 'secondary' | 'danger' = 'primary';
//  background-color: #2563eb;
  static styles = css`
    button {
      padding: 10px 20px;
     
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }
      button:hover {
      background-color: #1e40af;
    }
  
       /* Estilos por variante */
    .primary { background-color: #2563eb; }
    .primary:hover { background-color: #1e40af; }

    .secondary { background-color: #64748b; }
    .secondary:hover { background-color: #475569; }

    .danger { background-color: #ef4444; }
    .danger:hover { background-color: #b91c1c; }
  `;

  private onClick() {
    console.log('CLICK EN UI-BUTTON'); 
    this.dispatchEvent(
    new CustomEvent('ui-click', {
      bubbles: true,
      composed: true
    })
  );
  
  }

 
//caso botones con index y no main
  render() {
   //Creamos un objeto donde la llave es la clase y el valor es un booleano
    // const classes = {
    //   primary: this.variant === 'primary',
    //   secondary: this.variant === 'secondary',
    //   danger: this.variant === 'danger',
    // };
    //  return html`
    //   <button class=${classMap(classes)}>
    //     ${this.label}
    //   </button>
    // `;

   //caso gral botones del formulario 
  //    return html`
  //   <button class=${this.variant}>
  //     <slot></slot>
  //   </button>
  // `;

  //caso con eventos
  return html`
      <button class=${this.variant} @click=${this.onClick}>
        <slot></slot>
      </button>
    `;
  }


   //caso boton basico
   //  return html`<button>${this.label}</button>`;
  //}
}