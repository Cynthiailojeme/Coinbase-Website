<template>
       <div class="map">
           <table class="table">
                <thead>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Change</td>
                    <td>Chart</td>
                    <td class="green">Table</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div class="no">
                            <h4>1</h4>
                        </div>
                    </td>
                    <td>
                        <div class="name">
                            <img src="../assets/btclogonew.png">
                            <span>Bitcoin</span>
                            <h4>BTC</h4>
                        </div>
                    </td>
                    <td>
                        <div class="price"><h4>NGN&nbsp;3,787,058.98</h4></div>
                    </td>
                    <td>
                        <div class="change">+ 0.78%</div>
                    </td>
                    <td>
                        <div>
                            <img src="../assets/btcgraph.png">
                        </div>
                    </td>
                    <td>
                        <div>
                            <button>Buy</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="no">
                            <h4>2</h4>
                        </div>
                    </td>
                    <td>
                        <div class="name">
                            <img src="../assets/ethlogonew.png">
                            <span>Ethereum</span>
                            <h4>ETH</h4>
                        </div>
                    </td>
                    <td>
                        <div class="price"><h4>NGN&nbsp;67,089.92</h4></div>
                    </td>
                    <td>
                        <div class="change">+ 0.95%</div>
                    </td>
                    <td>
                        <div>
                            <img src="../assets/ethgraphnew.png">
                        </div>
                    </td>
                    <td>
                        <div>
                            <button>Buy</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="no">
                            <h4>3</h4>
                        </div>
                    </td>
                    <td>
                        <div class="name">
                            <img src="../assets/bchlogonew.png">
                            <span>Bitcoin Cash</span>
                            <h4>BCH</h4>
                        </div>
                    </td>
                    <td>
                        <div class="price"><h4>NGN&nbsp;112,512.41</h4></div>
                    </td>
                    <td>
                        <div class="change2">- 1.01%</div>
                    </td>
                    <td>
                        <div>
                            <img src="../assets/bchgraphnew.png">
                        </div>
                    </td>
                    <td>
                        <div>
                            <button>Buy</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="no">
                            <h4>4</h4>
                        </div>
                    </td>
                    <td>
                        <div class="name">
                            <img src="../assets/ltclogonew.png">
                            <span>Litecoin</span>
                            <h4>LTC</h4>
                        </div>
                    </td>
                    <td>
                        <div class="price"><h4>NGN&nbsp;26,750.14</h4></div>
                    </td>
                    <td>
                        <div class="change2">- 2.06%</div>
                    </td>
                    <td>
                        <div>
                            <img src="../assets/ltcgraphnew.png">
                        </div>
                    </td>
                    <td class="green">
                        <div>
                            <button>Buy</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div> 
</template>

<style scoped>
.map {
    flex-direction: row;
    max-width: 1180px;
    width: 1180px;
    height: 365px;
    display: block;
    margin: -150px auto 0px;
    padding: 0px;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(236, 239, 241);
    background: #ffffff;
}
table {
    width: 100%;
    border-collapse: separate;
    padding: 0px;
    background: rgb(255, 255, 255);
    border-spacing: 0px;
    border: none;
    border-bottom-color: grey;
}
thead tr {
   height: 53px;
   font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.6;
    color: rgba(17, 51, 83, 0.6);
    transition: color 80ms ease-in-out 0s;
}
td {
    text-align: left;
    padding: 16px 16px 16px 25px;
}
tbody tr {
    font-size: 18px;
    height: 70px;
}
tbody tr:hover {
    background: rgba(17, 51, 83, 0.02);
}
h4 {
    color: rgba(17, 51, 83, 0.6);
    font-size: 18px;
    font-weight: 400;
}
.no {
    margin-top: 10px;
}
.name {
    display: flex;
    width: 350px;
}
.name img, span {
    margin-right: 15px;
}
.name span {
    margin-top: 7px; 
}
.name h4 {
    margin-top: 10px; 
}
.price h4 {
    margin-top: 10px;
    color: #000000;
}
.change {
    color: rgb(5, 177, 105);
    text-align: left;
    margin-top: 7px;
}
.change2 {
    color: rgb(223, 95, 103);;
    text-align: left;
    margin-top: 7px;
}
.green {
    width: 200px;
}
button {
    width: auto;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 14px;
    background-color: rgb(5, 177, 105);
    margin: 0px;
    border-radius: 4px;
    transition: all 80ms ease-in-out 0s;
    padding: 10px 14px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(5, 177, 105);
    border-image: initial;
}
button:hover {
    background-color: rgb(0, 165, 93);
    border-color: rgb(0, 165, 93);
}
</style>