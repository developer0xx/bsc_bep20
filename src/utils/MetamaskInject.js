import Web3 from 'web3';

const setAddress = async() =>{



    // var web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/6a4dff93883f4e6f9dc42cf63319d789");
    var web3 = new Web3(Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545/");
    if (window.ethereum) {
         web3 = new Web3(window.ethereum);
        try {
            const account = await window.ethereum.enable();

            // this.state.account = account[0]
            // console.log(this.state.account)
            
            console.log("checkMetaMask",web3.utils.toChecksumAddress(account[0]))
           // alert('Metamask connected with address:',account[0]);
            return web3.utils.toChecksumAddress(account[0])
        }
        catch (e) {
            // User has denied account access to DApp...
        }
    }
    // Legacy DApp Browsers
    else if (window.web3) {
         web3 = new Web3(window.web3.currentProvider);
    }
    // Non-DApp Browsers
    else {
        alert('You have to install MetaMask !');
    }
}

export default setAddress;