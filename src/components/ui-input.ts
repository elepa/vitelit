import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('ui-input')
export class UIInput extends LitElement{
  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: Boolean }) required = false;
  @state() private error = '';

  static styles = css`
    .field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    label {
      font-size: 0.85rem;
      color: #555;
    }

    input {
      padding: 8px;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 0.9rem;
    }

    input.error {
      border-color: #f44336;
    }

    .error-text {
      font-size: 0.75rem;
      color: #f44336;
    }
  `;

  private onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;

    if (this.required && !this.value.trim()) {
      this.error = 'Este campo es obligatorio';
    } else {
      this.error = '';
    }
  }

  public validate(): boolean {
  if (this.required && !this.value.trim()) {
    this.error = 'Este campo es obligatorio';
    return false;
  }
  this.error = '';
  return true;
}

  render() {
    return html`
      <div class="field">
        ${this.label ? html`<label>${this.label}</label>` : null}

        <input
          .value=${this.value}
          class=${this.error ? 'error' : ''}
          @input=${this.onInput}
        />

        ${this.error
          ? html`<span class="error-text">${this.error}</span>`
          : null}
      </div>
    `;
  }

}