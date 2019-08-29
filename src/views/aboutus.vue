<template>
    <div>
        <div class="intro">
            <div class="navbar">
                <ul class="left">
                    <li><router-link :to="{name: 'home'}" class="coinlink">coinbase</router-link></li>
                </ul>

                <ul class="right">
                    <li class="nav-item ml-3">
                        <div class="dropdown">
                            <a class="list dropbtn center nav-link" href="#">Products <i class="fa fa-caret-down"></i></a>
                                <div class="dropdown-content">
                                    <a href="#" style="text-align:left;">Buy/Sell Digital Currency</a>
                                    <a href="#" style="text-align:left;">Coinbase Pro <img src="../assets/arrownew.png" style="float: right; margin-right: 10px;"></a>
                                    <a href="#" style="text-align:left;">Coinbase Prime <img src="../assets/arrownew.png" style="float: right; margin-right: 10px;"></a>
                                    <a href="#" style="text-align:left;">Developer Platform <img src="../assets/arrownew.png" style="float: right; margin-right: 10px;"></a>
                                    <a href="#" style="text-align:left;">Coinbase Commerce <img src="../assets/arrownew.png" style="float: right; margin-right: 10px;"></a>
    `                            </div>
                        </div>
                    </li>
                    <li>Help</li>
                    <li class="prices">Prices</li>
                    <li class="sign">Sign In</li>
                    <li><a href="#" class="signuplink"><router-link :to="{name: 'getstarted'}" class="up">Sign Up</router-link></a></li>
                </ul>
            </div>

            <h1>About Coinbase</h1>
        </div>

        <div class="subnav">
            <ul class="nav">
                <li class="active">
                    <a href="#">About</a>
                </li>
                <li class="">
                    <a href="#">Careers</a>
                </li>
                <li class="">
                    <a href="#">Mission</a>
                </li>
                <li class="">
                    <a href="#">Press</a>
                </li>
            </ul>
        </div>

        <div class="container">
            <div class="row">
                <div class="span61">
                    <h3>In brief</h3>
                    <p class="span6first">Founded in June of 2012, Coinbase is a digital currency wallet and platform where merchants and consumers can transact with new digital currencies like bitcoin, ethereum, and litecoin. We're based in San Francisco, California.</p>
                    <p class="span6first">Bitcoin is the world's most widely used alternative currency with a total market cap of over $100 billion. The bitcoin network is made up of thousands of computers run by individuals all over the world.</p>
                </div>
                <div class="span5">
                    <h3>Stats</h3>
                    <h4>30M+ <p class="light">Users</p></h4>
                    <h4>$150B+ <p class="light">Traded</p></h4>
                </div>
            </div>
        </div>

        <hr>

        <section class="container">
            <h3 style="margin-left: -30px;">$217M raised from world's leading investors</h3>
            <br>
            <div class="row-center">
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-ah-e268482098d114f6e3bf86e58bfe42bcc1076080ed63d82d96407c3803555bd4.png" alt="Logo ah">
                </div>
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-usv-6175cc3cfa72b32085e1241f6eee97c0aba55f4e8eed59053bd91509988946f3.png" alt="Logo usv">
                </div>
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-dfj-489e7e219b5d34cd1b5607373d501f776778ad786ce9571e93424436ab567c21.png" alt="Logo dfj">
                </div>
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-ice-28eec732374208a9e25f6f9ced8520ea4ee025d2920dcf89a83ef1d90b2715e9.png" alt="Logo ice">
                </div>
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-mu-dbb5397e5e0f29bdaadb5fb4731ed4383217f17b4cd29c1222f92d333a6d74d3.png" alt="Logo mu">
                </div>
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-bbva-18420f0b27c9147fd949bccc1327e3d705be3de005b990efdc6e46aec225b64c.png" alt="Logo bbva">
                </div>
            </div>  
            
            <div class="row-center">
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-usaa-0bc7455701d1d87241638cc98a8d0614e2ca297f3673b38d211e670c1ba7593a.png" alt="Logo usaa">
                </div>
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-rb-d8de5f3645b5e87fede57931191cfa2614e45f8d2a7206c60b62e827066284b3.png" alt="Logo rb">
                </div>
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-svangel-d2c2d3bb5b87906ea61c005a8b1fa1c1ed6a2b45a69ce098a3084c8ab5a73bc3.png" alt="Logo svangel">
                </div>
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-sv-a83eb6173de766a202fff17a41dfb0e5bf141bc8c821b3f8a2d1b7d0e6823daa.png" alt="Logo sv">
                </div>
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-idg-7eef060aef5fc9e2c4771cb22d3cf4dd04321bb1d64996b5a578f704dd1b378c.png" alt="Logo idg">
                </div>
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-fc-535e22b884b066e92a9fedeec7458b90f353be7d9f1c1747898e5b7643864a49.png" alt="Logo fc">
                </div>
            </div>
                
            <div class="row-center2">
                 <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-sf-c674e5505edf064d373f13517eb72568c82b6c6eefde74909cc2c631cfce6aee.png" alt="Logo sf">
                </div>
                <div class="span2">
                    <img src="https://www.coinbase.com/assets/about/investors/logo-yc-70c988d071be9d5d147e835312d663c66f6be5dc28117f6a76a5d13d887dfde2.png" alt="Logo yc">
                </div>
                <div class="span2">
                    <span>Adam Draper</span>
                </div>
                <div class="span2">
                    <span class="gerry">Greg Kidd</span>
                </div>
                <div class="span2">
                    <span class="gary">Garry Tan</span>
                </div>
            </div>
    </section>

    <section id="office">
        <div class="container">
            <div class="officeright">
                <h3>Working at Coinbase</h3>
                <p>Digital currencies are changing how we use and think about money. Coinbase, the most trusted company in the space, is looking for you to join our rapidly growing team.</p>
                <p><a href="#">Open positions ›</a></p>
            </div>
        </div>
    </section>

    <section class="container" id="extras">
        <div class="row">
            <div class="span6 center">
                <img width="80" src="https://www.coinbase.com/assets/about/i-people-da1e6feb341a19262d0a7442eaa8e17f079a1751732fcf9870d2215964412b70.png" alt="I people">
                <h3>We're Hiring - Join the Team</h3>
                <p class="span6second">Digital currencies are changing how we use and think about money. Coinbase, the most trusted company in the space, is looking for you to join our rapidly growing team.</p>
                <p class="span6first"><a href="#" class="btn btn-outline">Open Positions ›</a></p>
            </div>
            <div class="span6 center" id="secondone">
                <img width="80" src="https://www.coinbase.com/assets/about/values-3f6157d76c4f5e57c96dce6e4fefc04ce19a6e2678c55b554e833f9eab378ad8.png" alt="Values">
                <h3>Our Guiding Values</h3>
                <p class="span6first">We make cryptocurrency easy to use, strive to be the trusted brand in the space, and have built the world's leading platform for digital currency integration.</p>
                <p class="span6first"><a href="#" class="btn btn-outline">Our Values ›</a></p>
            </div>
        </div>
    </section>

    <hr>

    <section class="container" id="contact-us">
        <h3>Contact Us</h3>
        <br>
        <div class="row">
            <div class="span4 wrapper">
                <div class="support">
                    <p class="contact-type">Support</p>
                    <a href="#">Help Center</a> <br>
                </div>
            </div>
            <div class="span4 wrapper">
                <div class="press">
                    <p class="contact-type">Press</p>
                    <a href="#" class="wrapbottom">press@coinbase.com</a> <br>
                    <a href="#">Press Page ›</a>
                </div>
            </div>
                <div class="span4 wrapper">
                <div class="mail">
                    <p class="contact-type">Mailing Address</p>
                    <p class="market">
                    548 Market St #23008<br>
                    San Francisco, CA 94104
                    </p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="row-fluid">
                <div class="span2 footer__logo">
                    <a href="#" class="smallest"><svg xmlns="http://www.w3.org/2000/svg" width="122" height="28" viewBox="0 0 122 28" role="button" style="
                    width: 96px;
                    height: 22px;
                    fill: #0667d0;
                    cursor: pointer;
                    "><path fill-rule="evenodd" d="M10.34 23.89c.93 0 1.8-.17 2.62-.5 0 .03 1.67 2.62 1.7 2.63a9.88 9.88 0 0 1-4.81 1.17C4.72 27.2 1 23.81 1 18.42c0-5.43 3.9-8.8 8.85-8.8 1.75 0 3.14.38 4.53 1.12l-1.6 2.7c-.84-.33-1.7-.48-2.6-.48-3.03 0-5.38 1.93-5.38 5.46 0 3.34 2.27 5.47 5.54 5.47zM23.27 9.62c5.04 0 8.69 3.57 8.69 8.8 0 5.2-3.65 8.77-8.7 8.77-5 0-8.65-3.57-8.65-8.77 0-5.23 3.65-8.8 8.66-8.8zm0 3.22c-2.81 0-4.86 2.17-4.86 5.58 0 3.38 2.05 5.55 4.86 5.55 2.88 0 4.9-2.17 4.9-5.55 0-3.41-2.02-5.58-4.9-5.58zm11.08 13.97V10h3.76V26.8h-3.76zm-.5-21.98a2.36 2.36 0 0 1 4.71 0 2.4 2.4 0 0 1-2.35 2.4 2.4 2.4 0 0 1-2.35-2.4zm7.54 6.23a22.54 22.54 0 0 1 7.7-1.44c4.3 0 7.02 1.63 7.02 6.37v10.82H52.4V16.34c0-2.43-1.51-3.3-3.6-3.3-1.33 0-2.66.18-3.65.49V26.8H41.4V11.06zM59.26 1h3.76v9.45c.8-.42 2.35-.83 3.83-.83 4.86 0 8.5 3.1 8.5 8.5 0 5.43-3.6 9.07-9.82 9.07-2.43 0-4.56-.5-6.27-1.1V1zm3.76 22.62c.72.23 1.67.35 2.62.35 3.45 0 5.92-1.9 5.92-5.77 0-3.27-2.32-5.2-5.16-5.2-1.48 0-2.62.38-3.38.8v9.82zm23.2-8.08c0-1.82-1.38-2.66-3.24-2.66-1.93 0-3.45.57-4.85 1.37v-3.27a11.21 11.21 0 0 1 5.46-1.36c3.68 0 6.3 1.52 6.3 5.73v11.12c-1.6.42-3.87.68-5.77.68-4.36 0-7.55-1.32-7.55-5.12 0-3.42 2.92-5.09 7.78-5.09h1.86v-1.4zm0 3.9h-1.6c-2.62 0-4.33.77-4.33 2.48 0 1.74 1.6 2.42 3.87 2.42.57 0 1.37-.07 2.05-.18v-4.71zm6.4 2.82a8.82 8.82 0 0 0 5.13 1.9c1.67 0 2.77-.57 2.77-1.9 0-1.37-.99-1.86-3.15-2.43-3.5-.8-4.97-2.2-4.97-5.13 0-3.41 2.58-5.08 6-5.08 1.9 0 3.41.41 4.82 1.29v3.45a7.79 7.79 0 0 0-4.71-1.7c-1.63 0-2.5.8-2.5 1.9 0 1.1.71 1.66 2.65 2.2 3.84.83 5.5 2.27 5.5 5.3 0 3.54-2.69 5.13-6.33 5.13a9.87 9.87 0 0 1-5.2-1.36v-3.57zm16.69-3v.07c.23 3 2.8 4.64 5.43 4.64 2.31 0 3.98-.54 5.65-1.64v3.3c-1.52 1.07-3.76 1.56-5.92 1.56-5.24 0-8.8-3.34-8.8-8.65 0-5.35 3.49-8.92 8.12-8.92 4.9 0 7.21 3.15 7.21 7.74v1.9h-11.7zm8.16-2.43c-.08-2.62-1.37-4.06-3.8-4.06-2.16 0-3.75 1.52-4.25 4.06h8.05z"></path></svg>
                    <span style="margin-left: -90px;">© 2019 Coinbase</span></a>
                </div>

                <div class="span2">
                    <h4 class="collapsible__toggle">Products</h4>
                    <nav class="collapsible">
                        <a href="#">Buy/Sell Digital Currency</a>
                        <a href="#">Coinbase Pro</a>
                        <a href="#">Coinbase Prime</a>
                        <a href="#">Developer Platform</a>
                        <a href="#">Coinbase Commerce</a>
                    </nav>
                </div>
                <div class="span2">
                    <h4 class="collapsible__toggle">Learn</h4>
                    <nav class="collapsible">
                        <a href="#">Buy Bitcoin</a>
                        <a href="#">Buy Bitcoin Cash</a>
                        <a href="#">Buy Ethereum</a>
                        <a href="">Buy Litecoin</a>
                        <a href="#">Supported Countries</a>
                        <a href="#">Status</a>
                    </nav>
                </div>
                <div class="span2">
                    <h4 class="collapsible__toggle">Company</h4>
                    <nav class="collapsible">
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Press</a>
                        <div class="dropup">
                            <a class="dropbtn" href="#">Legal &amp; Privacy</a>
                            <div class="dropup-content">
                                <a href="#">User Agreement</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Licenses &amp; Disclosures</a>
                            </div>
                        </div>
                        <a href="#">Support</a>
                    </nav>
                </div>
                <div class="span2">
                    <h4 class="collapsible__toggle">Social</h4>
                    <nav class="collapsible">
                        <a href="#">Blog</a>
                        <a href="#">Twitter</a>
                        <a href="#">Facebook</a>
                    </nav>
                </div>
                <div class="span2">
                    <div class="footer-locale-select">
                        <h4>Language</h4>
                        <p><select name="locale" id="locale_select">
                            <option value="de">Deutsch</option>
                            <option selected="selected" value="en">English</option>
                            <option value="en-US">English - United States</option>
                            <option value="es">Español</option>
                            <option value="es-mx">Español - Méjico</option>
                            <option value="fr">Français</option>
                            <option value="id">bahasa Indonesia</option>
                            <option value="it">Italiano</option>
                            <option value="nl">Nederlands</option>
                            <option value="pt">Português</option>
                            <option value="pt-br">Português - Brazil</option>
                            <option value="ja">日本語</option></select>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<style scoped>
.intro {
    background-position: center center;
    background-image: url(../assets/about.jpg);
    padding: 170px 0 100px;
    color: #fff;
    text-align: center;
    background-size: cover;
}
.navbar {
    position: absolute;
    width: 100%;
    height: 100px;
    width: 100%;
    height: 100px;
    padding-top: 5px;
    padding-left: 15px;
    padding-right: 15px;
    top: 0px;
    font-weight: 500;
    text-align: center;
    transition: .5s;
}
.navbar ul{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: .5s;
}
.left li {
    float: left;
    display: block;
    font-size: 25px;
    margin-left: 20px;
    text-decoration: none;
    cursor: pointer;
    color: #ffffff;
}
.coinlink {
    font-family: 'Cantarell', sans-serif;
    font-weight: 500;
    text-decoration: none;
    color: white;
}
.right {
    margin-right: 50px;
}
.right li {
    font-size: 13px;
    margin-top: 13px;
    margin-right: 20px;
    color: rgba(255,255,255,.95);
    font-weight: 600;
}
.fa {
    opacity: 0.7;
}
.dropdown {
    position: relative;
    display: inline-block;
}
/*drop down content hidden by default*/
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffff;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}
/* / Links inside the dropdown / */
.dropdown-content a {
    color: black;
    margin-left: 10px;
    margin-top: 5px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    display: block;
}
.dropdown-content a:hover {
    color: #0667d0;
}
.list {
    color: #ffffff;
    margin-top: -20px;
}
.list a:hover{
    color: #fff;
    opacity: 0.8;
}
/* / Show the dropdown menu on hover / */
.dropdown:hover .dropdown-content {
    display: block;
}
.link {
    text-decoration: none;
    color: white;
}
.link:hover{
    color: #c4c4c4;
}
li .signuplink {
    display: block;
    font-weight: 600;
    text-shadow: none;
    text-decoration: none;
    padding: 8px 10px;
    margin-top: -10px;
    font-size: 13px;
    border-radius: 2px;
    background: 0 0;
    border: 2px solid #fff;
}
li .up {
    color: rgba(255,255,255,.95);
    text-decoration: none;
}
h1 {
    text-transform: uppercase;
    font-family: proxima-nova,helvetica neue,Helvetica,Arial,sans-serif;
    color: #fff;
    font-weight: 700;
    letter-spacing: .1em;
    font-size: 42px;
    margin-bottom: 0;
}
.subnav {
    padding: 0;
    position: relative;
    font-size: 14px;
    z-index: 1;
    color: #444;
    margin-bottom: -1px;
    border-bottom: 1px solid #ddd;
}
.subnav .nav {
    margin-left: 480px;
    text-align: center;
    list-style: none;
}
.nav>li>a {
    display: block;
}
.subnav .nav li {
    display: inline-block;
    font-size: 1em;
    color: #3e4552;
    line-height: 20px;
}
.subnav .nav .active a {
    color: #111;
    border-bottom: 1px solid #444;
}
.subnav .nav a {
    color: #888;
    margin: 0 20px;
    font-size: 12px;
    padding: 20px 0;
    font-weight: 700;
    letter-spacing: .4px;
    transition: .15s ease all;
    text-transform: uppercase;
}
.subnav .nav a:hover {
    color: #111;
}
.container {
    margin-right: auto;
    margin-left: auto;
    padding-top: 80px;
    padding-right: 0px;
    padding-bottom: 60px;
    padding-left: 0px;
}
.span61 {
    width: 570px;
    margin-left: -30px;
    border-right: none;
}
.span5 {
    width: 470px;
    margin-left: 130px;
}
h3 {
    margin-bottom: 1.2em;
    text-transform: uppercase;
    font-size: 17px;
    color: #3e4552;
    font-weight: 700;
    letter-spacing: 1px;
}
.span6first {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    color: #3e4552;
    margin: 0 0 10px;
    font-family: helvetica neue,Helvetica,Arial,sans-serif;
}
h4 {
    font-weight: 100;
    color: #1874c1;
    font-size: 32px;
    padding: 0;
    text-align: left;
    margin: 20px 0 0;
    font-family: proxima-nova,helvetica neue,Helvetica,Arial,sans-serif;
}
.light {
    color: #536676;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 300;
}
hr {
    margin: 20px 0;
    border: 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #fff;
}
.row-center {
    margin-left: -40px;
    display: flex;
    justify-content: space-between;
}
.row-center2 {
    margin-left: -40px;
    display: flex;
}
.span2 img{
    width: 170px;
    height: auto;
}
.row-center2>.span2>span {
    width: 170px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    line-height: 106px;
    margin-right: 50px;
}
.row-center2>.span2>img {
    width: 170px;
    height: auto;
    margin-right: 50px;
}
.gary {
    margin-left: 50px;
}
.gerry {
    margin-left: 30px;
}
#office {
    background: left center #fff no-repeat;
    background-size: cover;
    padding-top: 90px;
    padding-right: 0px;
    padding-bottom: 100px;
    padding-left: 0px;
    background-image: url(../assets/office.jpg);
    border-bottom: 1px solid #eee;
}
.officeright {
    max-width: 380px;
    background: #fff;
    padding: 20px 30px 30px 40px;
    float: right;
    margin-top: -120px;
}
.officeright p {
    font-size: 16px;
    line-height: 1.4;
    color: #3e4552;
}
.officeright p a:hover, a:focus {
    color: #005580;
    text-decoration: underline;
}
#extras {
    padding: 60px 0;
    padding-bottom: 40px 0;
}
.span6 {
    padding-top: 40px;
    padding-bottom: 40px;
    width: 570px;
    border-right: 1px solid #d4dce4;
}
.span6 img {
    margin-bottom: 25px;
}
.center {
    text-align: center!important;
}
.span6second {
    max-width: 25em;
    margin: 0 auto 1.5em;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 1.5em;
    margin-left: auto;
    text-align: center;
    font-size: 17px;
}
.btn-outline {
    color: #2b71b1;
    border-radius: 2px;
    border: 2px solid #2b71b1;
    background: 0 0;
    text-transform: uppercase;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: .8em 1.6em;
    font-weight: 700;
    font-size: 13px;
}
#secondone {
    padding-top: 40px;
    padding-bottom: 40px;
    width: 570px;
    float: left;
    min-height: 1px;
    margin-left: 30px;
    border-right: none;
}
.span4 {
    padding-bottom: 50px;
    width: 360px;
    float: left;
    min-height: 1px;
    margin-left: 30px;
}
.support {
    background: #fff left/55px url(../assets/question.svg) no-repeat;
    padding-left: 83px;
}
.press {
    background: #fff left/55px url(../assets/press.svg) no-repeat;
    padding-left: 83px;
}
.mail {
    background: #fff left/55px url(../assets/mailbox.svg) no-repeat;
    padding-left: 83px;
}
.wrapbottom {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}
.market {
    font-size: 14px;
    line-height: 1.4;
    color: #3e4552;
}
footer {
    background-color: #f8f8f8;
    font-size: 14px;
    padding: 10px 0 20px;
    /* margin-top: -50px; */
    line-height: 1.6;
}
footer .row-fluid {
   display: flex;
   justify-content: space-between;
   font-family: proxima-nova,helvetica neue,Helvetica,Arial,sans-serif;
}
footer>.row>.span2 {
    width: 170px;
    display: block;
    margin-left: 2.5641%;
}
footer svg {
    margin-top: -80px;
}
.smallest {
    font-size: 85%;
    color: #9196aa;
    font-weight: 400;
}
footer h4 {
    font-size: 14px;
    font-weight: 600;
    margin-top: -20px;
    color: #9196aa;
}
footer a {
    display: block;
    color: #9196aa;
    margin-top: 2px;
    font-weight: 400;
    text-decoration: none;
}
footer a:hover {
    text-decoration: underline;
}
.footer-locale-select select {
    font-size: 12px;
    margin: 5px 10px 0 0;
    height: 28px;
    max-width: 80%;
    padding-top: 0;
    padding-bottom: 0;
}
select {
    width: 142px;
    height: 25px;
    border: 1px solid #ccc;
    background-color: #fff;
    border: 1px solid #d4dce4;
    border-radius: 1px;
    background-image: url(../assets/icon-arrows.png);
    background-repeat: no-repeat;
    background-size: auto 11px;
    background-position: calc(100% - 10px) center;
    color: #555;
    margin-top: 10px;
}
.collapsible>.dropbtn {
    color: #9196aa;
    margin-top: 2px;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
}
.dropup {
  position: relative;
  display: inline-block;
}
.dropup-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 170px;
  bottom: 20px;
  z-index: 1;
}
.dropup-content a {
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 10px;
  padding-bottom: 5px;
  font-weight: 500;
  color: #444;
  font-size: 13px;
  text-decoration: none;
  display: block;
}
.dropup-content a:hover {
	color: #2b71b1;
}
.dropup:hover .dropup-content {
  display: block;
}
.dropup:hover .dropbtn {
  color: #9196aa;
}
</style>