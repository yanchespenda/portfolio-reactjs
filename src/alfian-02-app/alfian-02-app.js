import { LitElement, html } from '@polymer/lit-element';

/**
 * @customElement 
 * @polymer
 */
class Alfian02App extends LitElement {
  
  static get properties(){
    return {
      // Declare property here.
      title: { type: String },
	  sub_title: { type: String },
	  portList: { type: Array }
    };
  }
  
  constructor(){
    super();
    this.title='Hello, I\'m Alfian Rikzandi';
	this.sub_title='I\'m a student at the University of Pamulang and Web Developer.';
  }

  render(){
    return html`
		<style>
.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 95%; }

@media only screen and (min-width: 601px) {
  .container {
    width: 90%; } }
@media only screen and (min-width: 993px) {
  .container {
    width: 85%; } }
.container .row {
  margin-left: -0.75rem;
  margin-right: -0.75rem; }
  
.row {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px; }
.row:after {
    content: "";
    display: table;
    clear: both; }
.row .col {
    float: left;
    box-sizing: border-box;
    padding: 0 0.75rem;
    min-height: 1px; }
.row .col.s6 {
      width: 50%;
      margin-left: auto;
      left: auto;
      right: auto; }
.row .col.s12 {
      width: 100%;
      margin-left: auto;
      left: auto;
      right: auto; }
	  
@media only screen and (min-width: 601px) {
	.row .col.m6 {
        width: 50%;
        margin-left: auto;
        left: auto;
        right: auto; }
}

.title-container{
	padding-top: 2vh;
    padding-bottom: 2vh;
}
@media only screen and (min-width: 601px) {
	.title-container {
        padding-top: 16vh;
		padding-bottom: 16vh; }
}
.title-container .title{
	position: relative;
    margin-bottom: -14px;
    padding-right: 5%;
    font-size: 64px;
    font-weight: 400;
    line-height: 1.3em;
    text-indent: -4px;
	
	color: rgb(33,150,243);
}
.title-container .title:after {
	position: absolute;
    left: 0;
    bottom: 0px;
    height: 2px;
    width: 64px;
    content: "";
	
	background: rgb(33,150,243);
}
.title-container .title-caption{
	max-width: 640px;
    padding-right: 10%;
    line-height: 38px;
    font-size: 28px;
    font-weight: 400;
}

.subhead-title-container{
    padding-top: 24px;
    padding-bottom: 24px;
    margin: 0 auto;
    max-width: 350px;
    text-align: center;
}

.subhead-title-container .text{
    position: relative;
    margin-bottom: -14px;
    padding-right: 5%;
    font-size: 36px;
    font-weight: 400;
    line-height: 1.3em;
    text-indent: -4px;
	
	color: rgba(13,71,161 ,1);
}

.subhead-title-container .text:after {
	position: absolute;
    left: 0;
    bottom: 0px;
    height: 2px;
    width: 84px;
    content: "";
	display: none;
	background: rgba(13,71,161 ,1);
}

@media only screen and (min-width: 601px) {
	.subhead-title-container {
        margin: 0;
        max-width: 350px;
        text-align: left;
    }

    .subhead-title-container .text:after {
        display: block;
    }
}

.card {
    position: relative;
    margin: .5rem 0 1rem 0;
    background-color: #fff;
    -webkit-transition: -webkit-box-shadow .25s;
    transition: -webkit-box-shadow .25s;
    transition: box-shadow .25s;
    transition: box-shadow .25s, -webkit-box-shadow .25s;
    border-radius: 8px;
}
.card .card-image {
    position: relative;
}
.card .card-image img, .card .card-image plastic-image, .card .card-image iron-image {
    display: block;
    border-radius: 2px 2px 0 0;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
	
	border-style: none;
	border-top-left-radius: 8px;
    border-top-right-radius: 8px;
	
	height: 200px;
}
@media only screen and (min-width: 601px) {
	.card .card-image img, .card .card-image plastic-image, .card .card-image iron-image {
        height: 350px; }
}

.card .card-content {
    padding: 24px;
    border-radius: 0 0 2px 2px;
}
.card .card-content p {
    margin: 0;
}
.card-panel span, .card-content p {
    -webkit-font-smoothing: antialiased;
}
.card .card-content .card-title {
    display: block;
    line-height: 32px;
    margin-bottom: 8px;
}
.card .card-title {
    font-size: 24px;
    font-weight: 300;
}
.card .card-action:last-child {
    border-radius: 0 0 8px 8px;
}
.card .card-action {
    background-color: inherit;
    border-top: 1px solid rgba(160,160,160,0.2);
    position: relative;
    padding: 16px 24px;
}
.card .card-action a {
    color: rgb(33,150,243);
    margin-right: 24px;
    -webkit-transition: color .3s ease;
    transition: color .3s ease;
    text-transform: uppercase;
}

.md-shadow{
	-webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
}

footer {
    border-top: 1px solid #d9d9d9;
}
footer .f-container{
	margin-top: 24px;
}
footer .f-container .f-container-text{
	display: inline-block;
    vertical-align: top;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 24px;
}
a {
    text-decoration: none;
	color: rgb(33,150,243);
}


		</style>
	
    <div class="container">
		<div class="row">
			<div class="col s12">
				<div class="title-container">
					<h1 class="title">
						${this.title}
					</h1>
					<p class="title-caption">
						${this.sub_title}
					</p>
				</div>
			</div>
		</div>
		<div class="row">  
            <div class="subhead-title-container">
					<h1 class="text">
						Libraries
					</h1>
				</div>
			<div class="col s12 m6">
				<div class="card md-shadow">
					<div class="card-image">
						<img style="background-image: url(aset/image/ci-mongodb-query-builder.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat; " />
					</div>
					<div class="card-content">
						<span class="card-title">MongoDB Query Builder for Codeigniter</span>
					</div>
					<div class="card-action">
						<a href="//mongodb.projectf.cf/">Github</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row">  
            <div class="subhead-title-container">
					<h1 class="text">
						IoT
					</h1>
				</div>
			<div class="col s12 m6">
				<div class="card md-shadow">
					<div class="card-image">
						<img style="background-image: url(aset/image/iot-01.png); background-size: cover; background-position: center center; background-repeat: no-repeat; " />
					</div>
					<div class="card-content">
						<span class="card-title">Monitoring Cuaca</span>
						<p>
							Arduino used: NodeMCU, DHT11, Rain Sensor.
						</p>
						<p>
							FrontEnd used: Webpack, AngularJs, AngularJs Material, ChartJS
						</p>
						<p>
							BackEnd used: Laravel
						</p>
						<p>
							Demo Web: <a href="https://arduino.arproject.web.id/">Here</a>
						</p>
					</div>
					<div class="card-action">
						<a href="https://github.com/yanchespenda/ta-proposal-penelitian-frontend">Front-End</a>
						<a href="https://github.com/yanchespenda/ta-proposal-penelitian-backend">Back-End</a>
						<a href="https://github.com/yanchespenda/ta-proposal-penelitian-arduino">Arduino</a>
					</div>
				</div>
			</div>
		</div>
        <div class="row">
            <div class="subhead-title-container">
                <h1 class="text">
                    Web Apps
                </h1>
            </div>
			<div class="col s12 m6">
				<div class="card md-shadow">
					<div class="card-image">
						<img style="background-image: url(aset/image/app-web-01.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat; " />
					</div>
					<div class="card-content">
						<span class="card-title">URL Shorter | PHP CodeIgniter + MySQL/MongoDB</span>
					</div>
					<div class="card-action">
						<a href="//projectfbeta.000webhostapp.com/">View</a>
					</div>
				</div>
			</div>
            <div class="col s12 m6">
				<div class="card md-shadow">
					<div class="card-image">
						<img style="background-image: url(aset/image/app-web-02.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat; " />
					</div>
					<div class="card-content">
						<span class="card-title">URL Shorter | NodeJS Express + MongoDB ( A Elearning-App Project )</span>
					</div>
					<div class="card-action">
						<a href="//elearning-urlshorter.herokuapp.com/">View</a>
					</div>
				</div>
			</div>
            <div class="col s12 m6">
				<div class="card md-shadow">
					<div class="card-image">
						<img style="background-image: url(aset/image/app-web-03.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat; " />
					</div>
					<div class="card-content">
						<span class="card-title">Real Time Data Manager | NodeJS Express + Socket.IO ( A Elearning-App Project )</span>
					</div>
					<div class="card-action">
						<a href="//elearning-rtdm.herokuapp.com/">View</a>
					</div>
				</div>
			</div>
            <div class="col s12 m6">
				<div class="card md-shadow">
					<div class="card-image">
						<img style="background-image: url(aset/image/app-web-04.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat; " />
					</div>
					<div class="card-content">
						<span class="card-title">Company Profile</span>
					</div>
					<div class="card-action">
						<a href="//goldenisoconsulting.com/">View</a>
					</div>
				</div>
			</div>
		</div>
        <div class="row">
            <div class="subhead-title-container">
                <h1 class="text">
                    Under Development
                </h1>
            </div>
			<div class="col s12 m6">
				<div class="card md-shadow">
					<div class="card-image">
						<img style="background-image: url(aset/image/under-01.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat; " />
					</div>
					<div class="card-content">
						<span class="card-title">Elearning-App | PHP CodeIgniter & NodeJS Express + MySQL & MongoDB + Angular7</span>
					</div>
				</div>
			</div>
            <div class="col s12 m6">
				<div class="card md-shadow">
					<div class="card-image">
						<img style="background-image: url(aset/image/under-02.png); background-size: cover; background-position: center center; background-repeat: no-repeat; " />
					</div>
					<div class="card-content">
						<span class="card-title">Messenger ( Elearning-App project )</span>
					</div>
				</div>
			</div>
			<div class="col s12 m6">
				<div class="card md-shadow">
					<div class="card-image">
						<img style="background-image: url(aset/image/under-03.png); background-size: cover; background-position: center center; background-repeat: no-repeat; " />
					</div>
					<div class="card-content">
						<span class="card-title">Login Template (Google Style)</span>
						<p>
							Login Used: Angular 7, Angular Material, Rxjs.
						</p>
						<p>
							Demo Web: <a href="https://account.arproject.web.id/">Here</a>
						</p>
					</div>
					<div class="card-action">
						<a href="https://github.com/yanchespenda/project-account">Github</a>
					</div>
				</div>
			</div>
		</div>
    </div>
	  <footer>
		<div class="f-container container">
				<div class="f-container-text">
					Made in love with Polymer 3.0 • Created by <a target="_blank" href="https://fb.me/akagenomea">Alfian Rikzandi</a> | My <a target="_blank" href="https://github.com/yanchespenda">Github</a>.
				</div>
			</div>
	  </footer>
    `;
  }
  
  static get is(){
	return 'alfian-02-app';
  }
  
}

window.customElements.define(Alfian02App.is, Alfian02App);
