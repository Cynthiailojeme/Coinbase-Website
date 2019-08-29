<template>
    <div class="top">
        <div class="words">
            <h2>Buy and sell cryptocurrency</h2>
            <p>Coinbase is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</p>
            <form>
                <input type="email" name="email" placeholder="Email address">
                <button>Get Started</button>
            </form>
        </div>
    </div>
    
</template>

<style scoped>
.top {
    background-color: rgb(22, 82, 240);
    width: 100%;
    height: 433px;
    margin-top: -30px;
}
.words {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;
    max-width: 660px;
    margin: auto;
    margin-top: 100px;
}
h2 {
    font-family: 'Cantarell', sans-serif;
    font-size: 48px;
    font-weight: 600;
    font-style: normal;
    line-height: 1.17;
    margin: 0px;
    margin-top: 50px;
}
p {
    opacity: 0.9;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.75;
    color: rgb(255, 255, 255);
    margin: 24px 0px;
}
input {
    margin-right: 10px;
    -webkit-appearance: none;
    font-family: Graphik, sans-serif;
    font-size: 16px;
    font-weight: normal;
    color: rgb(11, 52, 102);
    padding-left: 13px;
    border-radius: 4px;
    height: 70px;
    width: 320px;
    border: none;
}
button {
    width: auto;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    background-color: rgb(5, 177, 105);
    margin-top: 5px;
    border-radius: 4px;
    transition: all 80ms ease-in-out 0s;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(5, 177, 105);
    height: 70px;
    width: 130px;
    border: none;
}
button:hover {
    background-color: rgb(0, 165, 93);
    border-color: rgb(0, 165, 93);
}
</style>