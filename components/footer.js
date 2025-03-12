class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		<div class="line"></div>
		<br>
    `;
  }
}

customElements.define('footer-component', Footer);
