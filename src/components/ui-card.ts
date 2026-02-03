import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ui-card')

export class UICard extends LitElement{
    @property({ type: String }) title = 'Bienvenido a Veggy';
    
  //version antes
  //    :host {
//       display: block;
//       width: 100%;
//       box-sizing: border-box;
//     }

//     .card {
//       background: #fff;
//       border-radius: 12px;
//       border: 1px solid #e5e7eb;
//       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
//       overflow: hidden;
//       max-width: 420px;
//       margin: auto;
//     }

//     .header,
//     .content,
//     .footer {
//       padding: 16px;
//     }

//     .header {
//       font-weight: 600;
//       font-size: 1.1rem;
//       border-bottom: 1px solid #e5e7eb;
//     }

//     .footer {
//       border-top: 1px solid #e5e7eb;
//       display: flex;
//       justify-content: flex-end;
//       gap: 8px;
//     }

//     /* Responsive */
//     @media (max-width: 600px) {
//       .card {
//         border-radius: 8px;
//       }

//       .header,
//       .content,
//       .footer {
//         padding: 12px;
//       }
//     }
//   `;
static styles = css`

:host {
      display: block;
      box-sizing: border-box;
      font-family: Roboto, Arial, sans-serif;
    }

    .card {
      background-color: #fff;
      border-radius: 12px;
       /* MARCO */
      border: 4px solid #dcdcdc;
      max.width: 360px;
      width:50%;
      margin:40px auto;

      /* Elevación tipo Material */
      box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.12),
        0 1px 3px rgba(0, 0, 0, 0.08);

      overflow: hidden;
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
   
      
    }

    .card:hover {
      box-shadow:
        0 4px 6px rgba(0, 0, 0, 0.2),
        0 2px 4px rgba(0, 0, 0, 0.14);
    }

    .header {
      padding: 16px;
      font-size: 1.25rem;
      font-weight: 500;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }

    .content {
      padding: 16px;
      font-size: 0.95rem;
      color: rgba(0, 0, 0, 0.87);
    }

    .footer {
      padding: 8px 16px;
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      border-top: 1px solid rgba(0, 0, 0, 0.12);
    }

    /* Responsive */
    @media (max-width: 600px) {
      .header {
        font-size: 1.1rem;
      }

      .header,
      .content {
        padding: 12px;
      }

      .footer {
        padding: 8px 12px;
      }
    }
  `;

  
  
render() {
    return html`
      <article class="card">
        <header class="header">
          <slot name="header"></slot>
        </header>

        <section class="content">
          <slot></slot>
        </section>

        <footer class="footer">
          <slot name="footer"></slot>
        </footer>
      </article>
    `;
  }

  
}
//  render() {
//     //con header y footer
//       return html`
 
    //header basica  
    //     <div class="card">
    //     <div class="header">
    //       <slot name="header"></slot>
    //     </div>

    //     <div class="content">
    //       <slot></slot>
    //     </div>

    //     <div class="footer">
    //       <slot name="footer"></slot>
    //     </div>
    //   </div>
    // `;
 // }
//basico    
//     return html`
//       <div class="card">
//         ${this.title
//           ? html`<div class="title">${this.title}</div>`
//           : null}

//         <!-- Slot para el contenido -->
//         <slot></slot>
//       </div>
//     `;
//   }



//}
