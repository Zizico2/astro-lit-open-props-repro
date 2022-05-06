import { html, css, LitElement } from "lit";

import { customElement, property, state } from "lit/decorators.js";

export const tagName = "my-counter";

@customElement(tagName)
export class Counter extends LitElement {
  public static styles = css`
    p {
      color: var(--indigo-9);
    }
  `;

  @state()
  private count = 0;

  private increment() {
    this.count++;
  }

  public render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>
        <button type="button" @click=${this.increment}>Increment</button>
      </div>
    `;
  }
}
