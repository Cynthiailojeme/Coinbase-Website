<template>
    <nav class="fixed-top navbar navbar-expand-lg pt-3">
        <!-- <div class="navbar" id='nav'> -->
            <ul class="coin">
                <li><router-link :to="{name: 'home'}" class="coinlink">coinbase</router-link></li>
            </ul>

            <ul class="mid">
                <li class="nav-item2 ml-3">
                    <div class="dropdown" style="">
                        <a class="list dropbtn center nav-link" href="#" style="font-size: 14px;">Products<i class="fa fa-chevron-down ml-2"></i></a>
                            <div class="dropdown-content"  style="min-width: 800px; height: 460px; position: absolute; margin-left: -350px;">
                                <div class="rowpart">
                                    <div class="column">
                                        <span class="tophead">For Everyone</span>
                                            <div class="wordpic">
                                                <div class="circleimg">
                                                    <img src="../assets/coinbase.png">
                                                </div>
                                                <div class="wordings">
                                                    <h4>Coinbase</h4>
                                                    <p class="p2">Buy, sell, and use cryptocurrency</p>
                                                </div>
                                            </div>

                                            <div class="wordpic">
                                                <div class="circleimg">
                                                    <img src="../assets/wallet.png">
                                                </div>
                                                <div class="wordings">
                                                    <h4>Wallet</h4>
                                                    <p class="p2">Store your own crytocuurency</p>
                                                </div>
                                            </div>

                                            <div class="wordpic">
                                                <div class="circleimg">
                                                    <img src="../assets/usdcoin.png">
                                                </div>
                                                <div class="wordings">
                                                    <h4>USD Coin</h4>
                                                    <p class="p2">Cryptocurrency with a stable price</p>
                                                </div>
                                            </div>

                                            <div class="wordpic">
                                                <div class="circleimg">
                                                    <img src="../assets/earn.png">
                                                </div>
                                                <div class="wordings">
                                                    <h4>Earn</h4>
                                                    <p class="p2">Make money learning about crypto</p>
                                                </div>
                                            </div>
                                    </div>

                                    <div class="column">
                                        <span class="tophead">For Advanced traders</span>
                                            <div class="wordpic">
                                                <div class="circleimg">
                                                    <img src="../assets/pro.png">
                                                </div>
                                                <div class="wordings">
                                                    <h4>Pro</h4>
                                                    <p class="p2">Advanced cryptocurrency</p>
                                                </div>
                                            </div>

                                        <span class="tophead"></span>
                                            <div class="wordpic">
                                                <div class="circleimg">
                                                    <img src="../assets/commerce.png">
                                                </div>
                                                <div class="wordings">
                                                    <h4>Coinbase</h4>
                                                    <p class="p2">Accept crytocuurency payments</p>
                                                </div>
                                            </div>

                                            <div class="wordpic">
                                                <div class="circleimg">
                                                    <img src="../assets/custody.png">
                                                </div>
                                                <div class="wordings">
                                                    <h4>Custody</h4>
                                                    <p class="p2">Cryptocurrency custody for institutions</p>
                                                </div>
                                            </div>

                                            <div class="wordpic">
                                                <div class="circleimg">
                                                    <img src="../assets/ventures.png">
                                                </div>
                                                <div class="wordings">
                                                    <h4>Ventures</h4>
                                                    <p class="p2">Raise money for your crypto startup</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>

                                <div class="belowbelow">
                                    Our Products
                                </div>
                            </div>
                    </div>
                </li>
                <li style="font-size: 14px;">Prices</li>
                <li class="nav-item ml-3">
                    <div class="dropdown">
                        <a class="list dropbtn center nav-link" href="#" style="font-size: 14px;">Company<i class="fa fa-chevron-down ml-2"></i></a>
                            <div class="dropdown-content">
                                <a href="#" style="text-align:left;"><router-link :to="{name: 'aboutus'}" class="newlink" style="margin-left: -2px;">About Us</router-link></a>
                                <hr>
                                <a href="#" style="text-align:left;">Blog</a>
                                <hr>
                                <a href="#" style="text-align:left;">Support</a>
                                <hr>
                                <a href="#" style="text-align:left;">Careers</a>
`                           </div>
                    </div>
                </li>
            </ul>

            <ul class="end">
                <li><router-link :to="{name: 'signin'}" class="link" style="font-size: 14px;">Sign in</router-link></li>
                <li><router-link :to="{name: 'getstarted'}"><button id="navBtn" style="font-size: 14px;">Get Started</button></router-link></li>
            </ul>
	    </nav>
    <!-- </div> -->
</template>

<script>
export default{
    name:"navbar",
    mounted() {
        $(document).scroll(function(){
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $("#navBtn").toggleClass('btn-success', $(this).scrollTop() > $nav.height());
    });
}
};
</script>

<style scoped>
nav {
    background-color: rgb(22, 82, 240);
    width: 100%;
    height: 90px;
    padding-top: 5px;
    padding-left: 15px;
    padding-right: 15px;
    position: fixed;
    top: 0px;
    font-weight: 500;
    text-align: center;
    transition: .5s;
}
nav ul{
    list-style-type: none;
    display:inline-block;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: .5s;
}
.fixed-top.scrolled{
    background-color: #ffffff !important;
    color: #000000;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    transition: background-color 200ms linear;
}

.fixed-top.scrolled a{
    color: #000000 !important;
}

.fixed-top.scrolled li{
    color:#000!important;
}

.fixed-top.scrolled button{
    background-color: #05b169 !important;
}
.fixed-top.scrolled:hover {
    background-color: rgb(0, 165, 93);
    border-color: rgb(0, 165, 93);
}
.fixed-top.scrolled .coinlink{
    color: #1652f0 !important;
}

.fixed-top{
    background-color: #1652f0 !important;

}
.coinlink {
    text-decoration: none;
    color: white;
}
.coin {
    margin-left: 40px;
}
.coin li {
    font-family: 'Cantarell', sans-serif;
    font-weight: 600;
    font-size: 30px;
}
nav li {
     display:inline-block;
     padding-left: 10px;
     padding-top: 0px;
}
.mid {
    margin-left: 280px;
}
.mid li:hover{
    color: #c4c4c4;
}
.dropdown {
    position: relative;
    display: inline-block;
}
.rowpart {
    display: flex;
    flex-direction: row;
}
.column {
    display: flex;
    flex-direction: column;
    width: 396px;
    position: relative;
    background-color: rgb(255, 255, 255);
    padding-bottom: 8px;
    padding-left: 0px;
    text-align: left;
}
.tophead {
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(17, 51, 83, 0.6);
    margin-top: 20px;
    margin-left: 18px;
    margin-bottom: 0px;
    margin-right: 28px;
}
.wordpic {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    -webkit-box-align: center;
    align-items: center;
    min-width: 400px;
    margin-left: 30px;
    margin-top: 10px;
    border-bottom: none;
}
.wordings {
    padding-right: 10px;
}
.circleimg {
    margin-top: -20px;
    margin-right: 10px;
    margin-left: -10px;
}
h4 {
    margin-top: 0px;
    margin-bottom: 6px;
    color: rgb(5, 15, 25);
    font-size: 17px;
    font-weight: 500 
}
.p2 {
    color: rgba(17, 51, 83, 0.6);
    font-weight: 400;
    font-size: 15px;
}
.belowbelow {
    display: flex;
    cursor: pointer;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: row;
    font-size: 16px;
    color: rgba(17, 51, 83, 0.6);
    padding: 15px;
    border-top: 1px solid rgb(236, 239, 241);
} 
/*drop down content hidden by default*/
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffff;
    min-width: 130px;
    border-radius: 4px;
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
.newlink {
    color: black;
    margin-left: 10px;
    text-align:left;
    margin-top: 5px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    display: block;
}
.list {
    color: #ffffff;
    margin-left: -20px;
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
.link>.active {
    color: #000000;
}
.link:hover{
    color: #c4c4c4;
}
.end {
    margin-left: 170px;
}
button {
    border: 1px solid #ffffff;
    background: rgb(22, 82, 240);
    width: 110px;
    height: 40px;
    color: #ffffff;
    border-radius: 4px;
    margin-right: 60px;
    margin-left: 30px;
}
button:hover {
    background: #ffffff;
    color: #000000;
}
.fa {
    margin-top: 16px;
    font-size: 10px;
} 
</style>