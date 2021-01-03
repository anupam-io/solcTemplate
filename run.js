const web3 = require("./web3");
const instance = require("./instance");

async function run(){
    try {
        const accounts = await web3.eth.getAccounts();
        
        await instance.methods.enter()
        .send({
            from: accounts[0], value: web3.utils.toWei('1000', 'ether')
        });await instance.methods.enter()
        .send({
            from: accounts[1], value: web3.utils.toWei('1000', 'ether')
        });await instance.methods.enter()
        .send({
            from: accounts[2], value: web3.utils.toWei('1000', 'ether')
        });await instance.methods.enter()
        .send({
            from: accounts[3], value: web3.utils.toWei('1000', 'ether')
        });await instance.methods.enter()
        .send({
            from: accounts[4], value: web3.utils.toWei('1000', 'ether')
        });



    } catch (err) {
        console.log("Error occured: ", err.message);
    }

    return process.exit(0);
}

run();