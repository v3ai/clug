class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		<ul>
  			<li><a href="index.html">Home</a></li>
  			<li><a href="contact.html">Contact</a></li>
  			<li><a href="about.html">About</a></li>
   			<li><a href="members.html">Members</a></li>
   			<li><a href="meetings.html">Meetings</a></li>
   			<li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdhasvr7teGdi8tPATjRKXqVJM7ZSmm0MaFO-0VTeUzTVvmMw/viewform?usp=sharing" target="_blank">Application</a></li>
   			<li><a href="recs.html">Recs</a></li>
		</ul>
		<h2 style="text-align: center">Crimson Linux User's Group</h2>
		<br>
		<div class="line"></div>

    `;
  }
}

customElements.define('header-component', Header);
