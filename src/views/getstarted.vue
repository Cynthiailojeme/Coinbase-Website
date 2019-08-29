<template>
    <div class="getstarted">
        <navbar/>

        <div>
            <div id="main">
                <h2>Create your account</h2>
                    <div class="SignupForm">
                        <form>
                            <div class="firstpart">
                                <label class="firstname">
                                    <div>First name</div>
                                    <input name="firstName" placeholder="First name">
                                </label>

                                <label class="lastname">
                                    <div>Last name</div>
                                    <input name="lastName" placeholder="Last name">
                                </label>
                            </div>
                            
                            <div class="message">
                                <label>
                                    <div class="email">Email</div>
                                    <input name="email" type="email" placeholder="Your email address">
                                </label>
                            </div>

                            <div class="pass">
                                <label>
                                   <div class="separate">
                                        <div class="password">Password</div>
                                        <div>
                                            <span class="show">Show password</span>
                                        </div>
                                   </div>
                                    <input name="password" type="password" placeholder="Choose a password">
                                    <img src="../assets/circlenew.png" alt="circle">
                                </label>
                            </div>
                            
                            <div class="checkarea">
                            <input type="checkbox" class="Checkbox__Check-sc-1l7wlbz-2 dZdCva">
                                <label>
                                    <span class="agreement">By continuing I certify that I am 18 years of age, and I agree to the 
                                        <a href="#"><span>User Agreement</span></a> and 
                                        <a href="#"><span>Privacy Policy</span></a>.
                                    </span>
                                </label>
                            </div>

                            <button>Create account</button>
                        </form>
                    </div>

                <div class="login">Already have a Coinbase account? <a href="#">Log in</a></div>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue'

export default {
  name: 'home',
  components: {
    navbar
  }
}
</script>

<style scoped>
#main {
    width: 100%;
    margin-top: 90px;
    background-color: rgb(22, 82, 240);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
}
h2 {
    font-family: 'Cantarell', sans-serif;
    margin-bottom: 40px;
    margin-top: 15px;
    height: 34px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.13;
    text-align: center;
    color: rgb(255, 255, 255);
}
.SignupForm {
    display: flex;
    flex-direction: row;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
    margin-bottom: 24px;
    border-radius: 4px;
    padding: 24px;
    width: 480px;
}
.firstname {
    font-size: 14px;
    font-weight: 500;
    color: rgb(5, 15, 25);
    margin-right: 16px;
    margin-bottom: 7px;
}
.lastname, .email , .password {
    font-size: 14px;
    font-weight: 500;
    color: rgb(5, 15, 25);
    margin-bottom: 7px;
}
.firstpart input {
    z-index: 0;
    width: 100%;
    height: 65px;
    font-weight: 400;
    font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: rgb(5, 15, 25);
    line-height: 23px;
    font-size: 16px;
    margin: 0px;
    padding: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(236, 239, 241);
    border-radius: 4px;
    background: none;
    margin-bottom: 7px;
}
.message input, .pass input {
    z-index: 0;
    width: 432px;
    height: 65px;
    font-weight: 400;
    font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: rgb(5, 15, 25);
    line-height: 23px;
    font-size: 16px;
    margin: 0px;
    padding: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(236, 239, 241);
    border-radius: 4px;
    background: none;
    margin-bottom: 7px;
}
input:focus {
    border-color: rgb(22, 82, 240);
    outline: none;
}
.separate {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: row;
}
.show {
    color: rgba(17, 51, 83, 0.6);
    font-size: 14px;
    font-weight: 500;
    user-select: none;
    cursor: pointer;
}
img {
    margin-left: 380px;
    margin-top: -100px;
}
.checkarea {
    display: flex;
    align-items: flex-start;
}
.checkarea input {
    width: 30px;
    height: 30px;
    background-color: initial;
    cursor: default;
    -webkit-appearance: checkbox; 
    margin-top: 1px;
    text-align: center;
    user-select: none;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(236, 239, 241);
    border-image: initial;
    border-radius: 4px;
    background: rgb(255, 255, 255);
}
.agreement {
    font-size: 14px;
    font-weight: 500;
    color: rgb(5, 15, 25);
    margin-left: 14px;
}
button {
    position: relative;
    width: 100%;
    font-weight: 500;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 18px;
    background-color: rgb(22, 82, 240);
    margin: 0px;
    border-radius: 4px;
    padding: 25px 35px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(22, 82, 240);
    border-image: initial;
}
.login {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: rgb(255, 255, 255);
}
.login a {
    color: rgb(255, 255, 255);
}
</style>

