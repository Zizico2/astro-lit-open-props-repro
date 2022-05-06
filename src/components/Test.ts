import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

export const tagName = "calc-add";

@customElement(tagName)
export class CalcAdd extends LitElement {
  @property({ type: Number })
  public num = 0;

  public render() {
    return html`<div>Number: ${this.num}</div> `;
  }
}
