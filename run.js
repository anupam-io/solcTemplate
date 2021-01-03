const web3 = require("./web3");
const instance = require("./instance");

async function run(){
    try {
        const accounts = await web3.eth.getAccounts();
        
        await instance.methods.hello()
        .send({
            from: accounts[0],
            gas: '1000000',
            value: web3.utils.toWei('10', 'ether')
        });
    } catch (err) {
        console.log("Error occured: ", err.message);
    }

    return process.exit(0);
}

run();