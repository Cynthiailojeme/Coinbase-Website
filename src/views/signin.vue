<template>
    <div class="total">
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

        <div class="next">
            <h2>Sign in to Coinbase</h2>
            <div class="account-form">
                <div class="form">
                    <form>
                        <div class="control-group1">
                            <div class="controls">
                                <input type="email" name="email" placeholder="Email" class="mail">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="controls">
                                <input type="password" name="password" placeholder="Password" class="pasword">
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="fix">
                                <input type="checkbox" class="check"><span>Keep me signed in on this computer</span>            
                                <button class="btn btn-primary pull-right">sign in</button>
                            
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        <div class="account">
            <p>
                <a href="/password_resets/new">Forgot password?</a>
                · <a href="/signup">Don't have an account?</a>
                · <a href="/legal/privacy">Privacy Policy</a><br>
            </p>
            <p>
                <a href="#">Have an issue with 2-factor authentication?</a>
            </p>
        </div>
    </div>
    
    </div>
</template>

<style scoped>
.total {
    font-family: helvetica neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    width: 100%;
    height: 100vh;
    background: #0667d0;
}
.navbar {
    position: absolute;
    background-color: #0667d0;
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
.sign {
    font-weight: 600;
    font-size: 13px;
}
.next {
    margin: auto;
    margin-top: 100px;
}
h2 {
    font-family: proxima-nova,helvetica neue,Helvetica,Arial,sans-serif;
    margin-bottom: 40px;
    margin-top: 100px;
    height: 34px;
    font-size: 30px;
    font-weight: 400;
    line-height: 1.13;
    text-align: center;
    color: #fff;
}
.account-form {
    margin: auto;
    width: 400px;
    height: 230px;
    display: block;
    background: #fff;
    box-shadow: 0 1px 46px -4px rgba(0,0,0,.28);
    border-radius: 4px;
}
input {
    display: inline-block;
    background-color: rgb(232, 240, 254);
    border: none;
    margin-left: 20px;
    width: 352px;
    height: 42px;
    margin-top: 20px;
    padding: 4px 6px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #555;
    border-radius: 4px;
    vertical-align: middle;
}
.fix {
    display: flex;
}
.check {
    background-color: initial;
    cursor: default;
    -webkit-appearance: checkbox;
    box-sizing: border-box;
    height: 13px;
    width: 13px;
    float: right;
    margin-top: 35px;
}
span {
    margin-top: 32px;
    margin-left: 8px;
    font-size: 13px;
}
.btn-primary {
    background-image: linear-gradient(#1d90cb,#0e86c4);
    border-color: #137dba;
    font-size: 11px;
    text-transform: uppercase;
    height: 42px;
    letter-spacing: .05em;
    text-shadow: none;
    font-weight: 500;
    box-shadow: none;
    height: 42px;
    width: 90px;
    float: right;
    color: #fff;
    border-radius: 2px;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 25px;
}
.account {
    /* margin: auto; */
    text-align: center;
    padding: 30px 0 0;
    font-size: 13px;
}
.account a {
    font-size: 15px;
    color: #fff!important;
}
.account a:hover {
    text-decoration: underline;
}
</style>