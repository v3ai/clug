class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
		body {
			max-width: 45em;
			margin: auto;
			font-family: 'Courier New', monospace;
			background-color: #000000;
			color: white;
		}
		
		.line {
			border: dashed 0.1em white;
		}
		
		.content {
			margin-top: 2em;	
			margin-bottom: 2em;	
		}
		
		p {
			padding-left: 3em;
		}
		
		a {
			color: #AE87FE;
		}
		
		ul {
  			list-style-type: none;
  			margin: 0;
  			padding: 0;
  			overflow: hidden;
  			background-color: #000000;
		}
		
		li {
  			float: left;
		}
		
		li a {
  			display: block;
  			color: #AE87FE;
  			text-align: center;
  			padding: 14px 16px;
  			text-decoration: none;
  			border-style: solid;
  			border-width: 0.07em;
  			border-color: #000000;
		}
		 
		li a:hover {
			border-style: solid;
			border-width: 0.07em;
  			border-color: #AE87FE;
		}
      </style>
		<ul>
  			<li><a href="index.html">Home</a></li>
  			<li><a href="contact.html">Contact</a></li>
  			<li><a href="about.html">About</a></li>
   			<li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdhasvr7teGdi8tPATjRKXqVJM7ZSmm0MaFO-0VTeUzTVvmMw/viewform?usp=sharing" target="_blank">Application</a></li>
   			<li><a href="members.html">Members</a></li>
		</ul>
		<h2 style="text-align: center">Crimson Linux User's Group</h2>
		<br>
		<div class="line"></div>

    `;
  }
}

customElements.define('header-component', Header);
