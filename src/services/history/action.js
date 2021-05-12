import authType from "./actionType";
import axios from "axios";
import Web3 from 'web3';
import info from "../../utils/ErcInfo"
import setAddress from '../../utils/MetamaskInject'
import "react-toastify/dist/ReactToastify.min.css";
import { Flip, toast } from "react-toastify";
const allSettled = require("promise.allsettled");
var PromiseAll = require('promises-all');
//var web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/6a4dff93883f4e6f9dc42cf63319d789");
// var web3 = new Web3(Web3.givenProvider || "https://ropsten.infura.io/v3/f030c72616984ab7a70feef6007b7cd3");
// var web3 = new Web3(Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545/");
var web3 = new Web3(window.ethereum);

var BusdInstance = new web3.eth.Contract(info.Testnet_Abi(), info.Testnet_busd());
var TusdInstance = new web3.eth.Contract(info.Testnet_Abi(), info.Testnet_tusd());
var UsdcInstance = new web3.eth.Contract(info.Testnet_Abi(), info.Testnet_usdc());
var UsdtInstance = new web3.eth.Contract(info.Testnet_Abi(), info.Testnet_usdt());
var DaiInstance = new web3.eth.Contract(info.Testnet_Abi(), info.Testnet_dai());
var GfxInstance = new web3.eth.Contract(info.Testnet_Abi(), info.Testnet_gfx());
var GldInstance = new web3.eth.Contract(info.Testnet_Abi(), info.Testnet_gld());
var EGldInstance = new web3.eth.Contract(info.Testnet_Abi(), info.Testnet_egld());

var SwapInstance = new web3.eth.Contract(info.Testnet_swapAbi(), info.Testnet_swap());
var USDTStakeInstance = new web3.eth.Contract(info.Testnet_stakeAbi(), info.Testnet_USDT_stake());
var DAIStakeInstance = new web3.eth.Contract(info.Testnet_stakeAbi(), info.Testnet_DAI_stake());
var USDCStakeInstance = new web3.eth.Contract(info.Testnet_stakeAbi(), info.Testnet_USDC_stake());
var GFXStakeInstance = new web3.eth.Contract(info.Testnet_stakeAbi(), info.Testnet_GFX_stake());
var GLDStakeInstance = new web3.eth.Contract(info.Testnet_stakeAbi(), info.Testnet_GLD_stake());
var EGLDStakeInstance = new web3.eth.Contract(info.Testnet_stakeAbi(), info.Testnet_EGLD_stake());
var BUSDStakeInstance = new web3.eth.Contract(info.Testnet_stakeAbi(), info.Testnet_BUSD_stake());

export const getEthHistory = (address) => (dispatch) => {
    console.log(address)
    address = "0x8b7CDe4C9B374a3FE82a353d0595C712806Ef5Ec"
    axios({
        url: `http://34.65.25.175:4001/Allhistory/${address}`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(function (resp) {
        console.log("rsp from backend:", resp.data);
        dispatch({
            type: authType.GET_ETH_HISTORY,
            payload: resp.data,
        });
    })
    .catch((err) => {
        console.log(err)
    });
}

export const getTUSDHistory = (address) => (dispatch) => {
    console.log("calling tusd....", address)
   // address = "0x8b7CDe4C9B374a3FE82a353d0595C712806Ef5Ec"
    console.log(address)
    axios({
        url: `http://localhost:4001/Tusdhistory/${address}`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(function (resp) {
        console.log("rsp from backend tusd...:", resp.data);
        console.log("rsp from backend:", resp.data);
        dispatch({
            type: authType.GET_TUSD_HISTORY,
            payload: resp.data,
        });
    })
    .catch((err) => {
        console.log(err)
    });
}

export const getBUSDHistory = (address) => (dispatch) => {
    //0x4Fabb145d64652a948d72533023f6E7A623C7C53
 //   address = "0x8b7CDe4C9B374a3FE82a353d0595C712806Ef5Ec"
    console.log(address)
    axios({
        url: `http://34.65.25.175:4001/Busdhistory/${address}`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(function (resp) {
        console.log("rsp from backend:", resp.data);
        dispatch({
            type: authType.GET_BUSD_HISTORY,
            payload: resp.data,
        });
    })
    .catch((err) => {
        console.log(err)
    });
}

export const getDAIHistory = (address) => (dispatch) => {
    //0x4Fabb145d64652a948d72533023f6E7A623C7C53
  //  address = "0x8b7CDe4C9B374a3FE82a353d0595C712806Ef5Ec"
    console.log(address)
    axios({
        url: `http://34.65.25.175:4001/Daihistory/${address}`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(function (resp) {
        console.log("rsp from backend:", resp.data);
        dispatch({
            type: authType.GET_DAI_HISTORY,
            payload: resp.data,
        });
    })
    .catch((err) => {
        console.log(err)
    });
}

export const getUSDCHistory = (address) => (dispatch) => {
    //0x4Fabb145d64652a948d72533023f6E7A623C7C53
  //  address = "0x8b7CDe4C9B374a3FE82a353d0595C712806Ef5Ec"
    console.log(address)
    axios({
        url: `http://34.65.25.175:4001/Usdchistory/${address}`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(function (resp) {
            console.log("rsp from backend:", resp.data);
            dispatch({
                type: authType.GET_USDC_HISTORY,
                payload: resp.data,
            });
        })
        .catch((err) => {
            console.log(err)
        });
}

export const getUSDTHistory = (address) => (dispatch) => {
    //0x4Fabb145d64652a948d72533023f6E7A623C7C53
   // address = "0x8b7CDe4C9B374a3FE82a353d0595C712806Ef5Ec"
    console.log(address)
    axios({
        url: `http://34.65.25.175:4001/Usdthistory/${address}`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(function (resp) {
        console.log("rsp from backend:", resp.data);
        dispatch({
            type: authType.GET_USDT_HISTORY,
            payload: resp.data,
        });
    })
    .catch((err) => {
        console.log(err)
    });
}

export const getBUSDBalance = (address) => async (dispatch) => {
    //  address = "0xee7badafc1d6209b08476d56879d98f11dcfd324"
    await BusdInstance.methods
    .balanceOf(address).call()
    .then(function (resp) {
        console.log(resp)
        dispatch({
            type: authType.GET_BUSD_BALANCE,
            payload: resp / 10 ** 18,
        });
    })
    .catch((err) => {
        console.log(err)
    });
}

export const getTUSDBalance = (address) => async (dispatch) => {
    //address = "0x696E31282AEffF490a8480cB87C11113e5551B26"
    await TusdInstance.methods
    .balanceOf(address).call()
    .then(function (resp) {
        console.log(resp)
        dispatch({
            type: authType.GET_TUSD_BALANCE,
            payload: resp / 10 ** 18,
        });
    })
    .catch((err) => {
        console.log(err)
    });
}

export const getUSDTBalance = (address) => async (dispatch) => {
    // address = "0x080b4cd171bf8b1e784D0cdE6058A8E50c861301"
    await UsdtInstance.methods
    .balanceOf(address).call()
    .then(function (resp) {
        console.log(resp)
        dispatch({
            type: authType.GET_USDT_BALANCE,
            payload: resp / 10 ** 6,
        });
    })
    .catch((err) => {
        console.log(err)
    });
}

export const getUSDCBalance = (address) => async (dispatch) => {
    //address = "0x765a2488107aa2754e26c83c677c690ea7e0cac6"
    await UsdcInstance.methods
    .balanceOf(address).call()
    .then(function (resp) {
        console.log(resp)
        dispatch({
            type: authType.GET_USDC_BALANCE,
            payload: resp / 10 ** 6,
        });
    })
    .catch((err) => {
        console.log(err)
    });
}

export const getETHBalance = (address) => async (dispatch) => {
    //address = "0x080b4cd171bf8b1e784D0cdE6058A8E50c861301"
    web3.eth.getBalance(address)
    .then(function (resp) {
        console.log("eth balance:", resp);
        dispatch({
            type: authType.GET_ETH_BALANCE,
            payload: resp / 10 ** 18,
        });
    })
    .catch((err) => {
        console.log(err)
    });
}




export const getDAIBalance = (address) => async (dispatch) => {

    // address = "0x41f8d14c9475444f30a80431c68cf24dc9a8369a"

    await DaiInstance.methods
        .balanceOf(address).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.GET_DAI_BALANCE,
                payload: resp / 10 ** 18,
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });


}

export const approveDAI = (address, value,type) => async (dispatch) => {
    value = web3.utils.toWei(value.toString(), "ether")
console.log("dai type::::",type)
    const add = await setAddress()
    if (add) {
     var stakeSwapAddress = '' 
        console.log(
            "value:", value)


              if(type=="stake")
               stakeSwapAddress=info.Testnet_DAI_stake()
              else
               stakeSwapAddress=info.Testnet_swap()



        const tx_builder = await DaiInstance.methods.approve(
            stakeSwapAddress,
            value
        );
        let encoded_tx = tx_builder.encodeABI();
        console.log("encoded_tx:", encoded_tx)
        web3.eth.sendTransaction(
            {
                to: info.Testnet_dai(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_tx
            })
            .then(async function (resp) {
                console.log("approve response:", resp.transactionHash, ':::', resp.status)

                if (resp.status == true) {
                    resp.type = type
                    toast.configure();
                    toast("Approved: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.DAI_APPROVE,
                        payload: resp,
                    });

                }
                else {
                    dispatch({
                        type: authType.DAI_APPROVE,
                        payload: "failed"+new Date(),
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }


            })
            .catch((err) => {
                dispatch({
                    type: authType.DAI_APPROVE,
                    payload: "Rejected"+new Date(),
                });
                toast.configure();
                toast("Rejected...", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })



    }
}


export const swapDAI = (address, value) => async (dispatch) => {
    console.log("inside swapDai")
    value = web3.utils.toWei(value.toString(), "ether")

    const add = await setAddress()
    if (add) {
        const tx_swap_builder = await SwapInstance.methods.swap(
            info.Testnet_dai(),
            info.Testnet_btf(),
            value,
            2,
            0

        );
        let encoded_swap_tx = tx_swap_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_swap(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_swap_tx
            })
            .then(function (resp) {
                console.log("swap txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Swapped: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.DAI_SWAP,
                        payload: resp.status+new Date(),
                    });

                }
                else {
                    dispatch({
                        type: authType.DAI_SWAP,
                        payload: "failed....",
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }

            })
            .catch((err) => {
                dispatch({
                    type: authType.DAI_SWAP,
                    payload: "failed....",
                });
                toast.configure();
                toast("Failed to Swap...", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })
    }
}


export const approveBUSD = (address, value,type) => async (dispatch) => {
    value = web3.utils.toWei(value.toString())  //value * 10 ** 18;

console.log("busd type::::",type)
    const add = await setAddress()
    if (add) {
     var stakeSwapAddress = '' 
        console.log(
            "value:", value)


              if(type=="stake")
               stakeSwapAddress=info.Testnet_BUSD_stake()
              else
               stakeSwapAddress=info.Testnet_swap()



        const tx_builder = await BusdInstance.methods.approve(
            stakeSwapAddress,
            value
        );
        let encoded_tx = tx_builder.encodeABI();
        console.log("encoded_tx:", encoded_tx)
        web3.eth.sendTransaction(
            {
                to: info.Testnet_busd(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_tx
            })
            .then(async function (resp) {
                console.log("approve response:", resp.transactionHash, ':::', resp.status)

                if (resp.status == true) {
                    resp.type = type
                    toast.configure();
                    toast("Approved: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.BUSD_APPROVE,
                        payload: resp,
                    });

                }
                else {
                    dispatch({
                        type: authType.BUSD_APPROVE,
                        payload: "failed"+new Date(),
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }


            })
            .catch((err) => {
                dispatch({
                    type: authType.BUSD_APPROVE,
                    payload: "Rejected"+new Date(),
                });
                toast.configure();
                toast("Rejected...", {
                    position: toast.POSITION.BUSD_APPROVE,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })



    }
}

export const swapBUSD = (address, value) => async (dispatch) => {
    value = web3.utils.toWei(value.toString()) 

    const add = await setAddress()
    if (add) {
        const tx_swap_builder = await SwapInstance.methods.swap(
            info.Testnet_busd(),
            info.Testnet_btf(),
            value,
            7,
            0

        );
        let encoded_swap_tx = tx_swap_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_swap(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_swap_tx
            })
            .then(function (resp) {
                console.log("swap txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Swapped: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.BUSD_SWAP,
                        payload: resp.status+new Date(),
                    });

                }
                else {
                    dispatch({
                        type: authType.BUSD_SWAP,
                        payload: "failed....",
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }

            })
            .catch((err) => {
                dispatch({
                    type: authType.BUSD_SWAP,
                    payload: "failed....",
                });
                toast.configure();
                toast("Failed to Swap...", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })
    }
}






export const approveUSDT = (address, value,type) => async (dispatch) => {
    value = value * 10 ** 6;

    const add = await setAddress()
    if (add) {

        console.log(
            "value:", value)
        const tx_builder = await UsdtInstance.methods.approve(
            info.Testnet_swap(),
            value
        );
        let encoded_tx = tx_builder.encodeABI();
        console.log("encoded_tx:", encoded_tx)
        web3.eth.sendTransaction(
            {
                to: info.Testnet_usdt(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_tx
            })
            .then(async function (resp) {
                console.log("approve response:", resp.transactionHash, ':::', resp.status)

                if (resp.status == true) {
                    resp.type = type
                    toast.configure();
                    toast("Approved: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.USDT_APPROVE,
                        payload: resp,
                    });

                }
                else {
                    dispatch({
                        type: authType.USDT_APPROVE,
                        payload: "failed"+new Date(),
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }


            })
            .catch((err) => {
                dispatch({
                    type: authType.USDT_APPROVE,
                    payload: "Rejected"+new Date(),
                });
                toast.configure();
                toast("Rejected", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })



    }
}


export const swapUSDT = (address, value) => async (dispatch) => {
    value = value * 10 ** 6;

    const add = await setAddress()
    if (add) {
        const tx_swap_builder = await SwapInstance.methods.swap(
            info.Testnet_usdt(),
            info.Testnet_btf(),
            value,
            1,
            0

        );
        let encoded_swap_tx = tx_swap_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_swap(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_swap_tx
            })
            .then(function (resp) {
                console.log("swap txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Swapped: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.USDT_SWAP,
                        payload: resp.status+new Date(),
                    });

                }
                else {
                    dispatch({
                        type: authType.USDT_SWAP,
                        payload: "failed....",
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }

            })
            .catch((err) => {
                dispatch({
                    type: authType.USDT_SWAP,
                    payload: "failed....",
                });
                toast.configure();
                toast("Failed to Swap...", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })
    }
}





export const approveUSDC = (address, value,type) => async (dispatch) => {
    value = value * 10 ** 6;

    const add = await setAddress()
    var stakeSwapAddress="";
    if (add) {

        console.log(
            "value:", value)


            if(type=="stake")
            stakeSwapAddress=info.Testnet_USDC_stake()
           else
            stakeSwapAddress=info.Testnet_swap()


        const tx_builder = await UsdcInstance.methods.approve(
            stakeSwapAddress,
            value
        );
        let encoded_tx = tx_builder.encodeABI();
        console.log("encoded_tx:", encoded_tx)
        web3.eth.sendTransaction(
            {
                to: info.Testnet_usdc(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_tx
            })
            .then(async function (resp) {
                console.log("approve response:", resp.transactionHash, ':::', resp.status)

                if (resp.status == true) {
                    resp.type = type
                    toast.configure();
                    toast("Approved: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.USDC_APPROVE,
                        payload: resp,
                    });

                }
                else {
                    dispatch({
                        type: authType.USDC_APPROVE,
                        payload: "failed"+new Date(),
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }


            })
            .catch((err) => {
                dispatch({
                    type: authType.USDC_APPROVE,
                    payload: "Rejected"+new Date(),
                });
                toast.configure();
                toast("Rejected", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })



    }
}


export const swapUSDC = (address, value) => async (dispatch) => {
    value = value * 10 ** 6;

    const add = await setAddress()
    if (add) {
        const tx_swap_builder = await SwapInstance.methods.swap(
            info.Testnet_usdc(),
            info.Testnet_btf(),
            value,
            6,
            0

        );
        let encoded_swap_tx = tx_swap_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_swap(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_swap_tx
            })
            .then(function (resp) {
                console.log("swap txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Swapped: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.USDC_SWAP,
                        payload: resp.status+new Date(),
                    });

                }
                else {
                    dispatch({
                        type: authType.USDC_SWAP,
                        payload: "failed....",
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }

            })
            .catch((err) => {
                dispatch({
                    type: authType.USDC_SWAP,
                    payload: "failed....",
                });
                toast.configure();
                toast("Failed to Swap...", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })
    }
}



export const stakeUSDT = (address,value) => async (dispatch) => {
     value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {

        const tx_stake_builder = await USDTStakeInstance.methods.stake(
            value
        );
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_USDT_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {



                console.log("stake txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Staked: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.USDT_STAKE,
                        payload: resp.status+new Date(),
                    });

                }
                else {
                    dispatch({
                        type: authType.USDT_STAKE,
                        payload: "failed....",
                    });

                    toast.configure();
                    toast("Failed to Staked...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }




            })

    }

}


export const stakingInfoUSDT = (address) => async (dispatch) => {
    var promiseList = []
    await USDTStakeInstance.methods
    .getTotalCount(address).call()
    .then(function (resp) {
        console.log("getUSDTotalCount:",resp)
        var i = 0
        while (i <= resp) {
            promiseList.push(USDTStakeInstance.methods.stakingInfo(address, i).call())
    
    
            i++
        }
       
        allSettled(promiseList)
            .then(async(results) => {
               await results.map(item =>{
                    if(item.status === "fulfilled"){
                        item.value[2]= web3.utils.fromWei(item.value[2].toString(), "ether") 
                         console.log(" item.value.reward", item.value[2])
                    }
                })

                    dispatch({
                        type: authType.USDT_STAKE_BALANCE,
                        payload: results,
                    })

                
              
                })
               
            
    })
    .catch((err) => {
        console.log(err)

    });
    


 
}


export const getUSDTReward = (address) => async (dispatch) => {
    var promiseList = []
    await USDTStakeInstance.methods
    .getTotalCount(address).call()
    .then(function (resp) {
        console.log("getUSDTotalCount:",resp)
        var i = 0
        while (i <= resp) {
            promiseList.push(USDTStakeInstance.methods.getReward(address, i).call())
    
    
            i++
        }
       
        allSettled(promiseList)
            .then(async(results) => {
                await results.map(item =>{
                    if(item.status === "fulfilled"){
                        item.value= web3.utils.fromWei(item.value.toString(), "ether") 
                         console.log(" item.value.reward", item.value)
                    }
                })

                dispatch({
                    type: authType.GET_USDT_REWARD,
                    payload: results,
                });
                })

    })


    // await StakeInstance.methods
    //     .getReward(address,1).call()
    //     .then(function (resp) {
    //         console.log("getUSDTotalReward:",resp)
    //         dispatch({
    //             type: authType.GET_USDT_REWARD,
    //             payload: resp ,
    //         });
    //         // }
    //     })
    //     .catch((err) => {
    //         console.log(err)

    //     });
 
 }


 export const unStakeUSDT = (address,index) => async (dispatch) => {
   // value = value * 10 ** 6;
   const add = await setAddress()
   if (add) {

       const tx_stake_builder = await USDTStakeInstance.methods.unstake(
           index
       );
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_USDT_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("stake txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("UnStaked: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                   dispatch({
                       type: authType.USDT_UNSTAKE,
                       payload: resp.status,
                   });

               }
               else {
                   dispatch({
                       type: authType.USDT_UNSTAKE,
                       payload: "failed.... ",
                   });

                   toast.configure();
                   toast("Failed to UnStaked...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           }).catch((err) => {
           // console.log("failed")
            dispatch({
                type: authType.USDT_UNSTAKE,
                payload: "rejected"+new Date(),
            });
    
        });
        

   }

}

export const claimUSDT = (address,index) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        const tx_stake_builder = await USDTStakeInstance.methods.claim(
            index
        );
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_USDT_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("stake txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Claimed: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.USDT_CLAIM,
                        payload: resp.status,
                    });
 
                }
                else {
                    dispatch({
                        type: authType.USDT_CLAIM,
                        payload: "failed.... ",
                    });
 
                    toast.configure();
                    toast("Failed to Claimed...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            })  .catch((err) => {
               // console.log("failed")
                dispatch({
                    type: authType.USDT_CLAIM,
                    payload: "rejected"+new Date(),
                });
        
            });
            
 
    }
 
 }
 
export const exitUSDT = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        const tx_stake_builder = await USDTStakeInstance.methods.exit();
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_USDT_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("EXIT txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("EXIT: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                     dispatch({
                       type: authType.USDT_EXIT,
                        payload: resp.status,
                    });
 
                }
                else {
                    dispatch({
                        type: authType.USDT_EXIT,
                        payload: "failed.... ",
                    });
 
                    toast.configure();
                    toast("Failed to EXIT...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            })  .catch((err) => {
               // console.log("failed")
                dispatch({
                    type: authType.USDT_EXIT,
                    payload: "rejected"+new Date(),
                });
        
            });
            
 
    }
 
 }
  
 export const getTotalRewardUSDT = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await USDTStakeInstance.methods
        .getTotalReward(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.USDT_TOTAL_REWARD,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
        
 
 
            
 
    }
 
 }

export const getTotalStackedBalanceUSDT = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        await USDTStakeInstance.methods
        .getTotalStackedBalance(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.USDT_TOTAL_STAKED_BALANCE,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });









 
    }
 
 }

export const getTotalRewardInMemoryUSDT = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 console.log(USDTStakeInstance.methods)
        // await USDTStakeInstance.methods.getTotalRewardInMemory(add).call()
        await USDTStakeInstance.methods.getTotalReward(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.USDT_TOTAL_REWARD_IN_MEMORY,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
    }
 
 }










////////////////////////////BUSD////////////////////////////////////////////////
export const stakeBUSD = (address,value) => async (dispatch) => {
    value = web3.utils.toWei(value.toString()) 
   const add = await setAddress()
   try{
   if (add) {

       const tx_stake_builder = await BUSDStakeInstance.methods.stake(
           value
       );
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_BUSD_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("stake txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("Staked: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                   dispatch({
                       type: authType.BUSD_STAKE,
                       payload: resp.status+new Date(),
                   });

               }
               else {
                   dispatch({
                       type: authType.BUSD_STAKE,
                       payload: "failed....",
                   });

                   toast.configure();
                   toast("Failed to Staked...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           })

   }
}catch(e){
   toast.configure();
                   toast("Failed to Staked...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });
}

}


export const stakingInfoBUSD = (address) => async (dispatch) => {
   var promiseList = []
   await BUSDStakeInstance.methods
   .getTotalCount(address).call()
   .then(function (resp) {
       console.log("getBUSDotalCount:",resp)
       var i = 0
       while (i <= resp) {
           promiseList.push(BUSDStakeInstance.methods.stakingInfo(address, i).call())
   
   
           i++
       }
      
       allSettled(promiseList)
           .then(async(results) => {
              await results.map(item =>{
                   if(item.status === "fulfilled"){
                       item.value[2]= web3.utils.fromWei(item.value[2].toString(), "ether") 
                        console.log(" item.value.reward", item.value[2])
                   }
               })

                   dispatch({
                       type: authType.BUSD_STAKE_BALANCE,
                       payload: results,
                   })

               
             
               })
              
           
   })
   .catch((err) => {
       console.log("stakingInfoBUSD", err)

   });
   



}


export const getBUSDReward = (address) => async (dispatch) => {
   var promiseList = []
   await BUSDStakeInstance.methods
   .getTotalCount(address).call()
   .then(function (resp) {
       console.log("getBUSDTotalCount:",resp)
       var i = 0
       while (i <= resp) {
           promiseList.push(BUSDStakeInstance.methods.getReward(address, i).call())
   
   
           i++
       }
      
       allSettled(promiseList)
           .then(async(results) => {
               await results.map(item =>{
                   if(item.status === "fulfilled"){
                       item.value= web3.utils.fromWei(item.value.toString(), "ether") 
                        console.log(" item.value.reward", item.value)
                   }
               })

               dispatch({
                   type: authType.GET_BUSD_REWARD,
                   payload: results,
               });
               })

   })


   // await StakeInstance.methods
   //     .getReward(address,1).call()
   //     .then(function (resp) {
   //         console.log("getUSDTotalReward:",resp)
   //         dispatch({
   //             type: authType.GET_USDT_REWARD,
   //             payload: resp ,
   //         });
   //         // }
   //     })
   //     .catch((err) => {
   //         console.log(err)

   //     });

}


export const unStakeBUSD = (address,index) => async (dispatch) => {
  // value = value * 10 ** 6;
  const add = await setAddress()
  if (add) {

      const tx_stake_builder = await BUSDStakeInstance.methods.unstake(
          index
      );
      //31160000000000000 
      let encoded_stake_tx = tx_stake_builder.encodeABI();
      web3.eth.sendTransaction(
          {
              to: info.Testnet_BUSD_stake(),
              from: address,
              gasPrice: 50000000000,
              data: encoded_stake_tx
          })
          .then(function (resp) {



              console.log("stake txn result.....:", resp)
              if (resp.status == true) {
                  toast.configure();
                  toast("UnStaked: " + resp.transactionHash, {
                      position: toast.POSITION.TOP_RIGHT,
                      className: "success",
                      autoClose: 3000,
                      toastId: 4
                  });
                  dispatch({
                      type: authType.BUSD_UNSTAKE,
                      payload: resp.status,
                  });

              }
              else {
                  dispatch({
                      type: authType.BUSD_UNSTAKE,
                      payload: "failed.... ",
                  });

                  toast.configure();
                  toast("Failed to UnStaked...", {
                      position: toast.POSITION.TOP_RIGHT,
                      className: "fail",
                      autoClose: 5000,
                      toastId: 1,
                  });

              }




          }).catch((err) => {
          // console.log("failed")
           dispatch({
               type: authType.BUSD_UNSTAKE,
               payload: "rejected"+new Date(),
           });
   
       });
       

  }

}

export const claimBUSD = (address,index) => async (dispatch) => {
   // value = value * 10 ** 6;
   const add = await setAddress()
   if (add) {


       const tx_stake_builder = await BUSDStakeInstance.methods.claim(
           index
       );
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_BUSD_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("stake txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("Claimed: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                   dispatch({
                       type: authType.BUSD_CLAIM,
                       payload: resp.status,
                   });

               }
               else {
                   dispatch({
                       type: authType.BUSD_CLAIM,
                       payload: "failed.... ",
                   });

                   toast.configure();
                   toast("Failed to Claimed...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           })  .catch((err) => {
              // console.log("failed")
               dispatch({
                   type: authType.BUSD_CLAIM,
                   payload: "rejected"+new Date(),
               });
       
           });
           

   }

}

export const exitBUSD = (address) => async (dispatch) => {
   // value = value * 10 ** 6;
   const add = await setAddress()
   if (add) {


       const tx_stake_builder = await BUSDStakeInstance.methods.exit();
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_BUSD_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("EXIT txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("EXIT: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                    dispatch({
                      type: authType.BUSD_EXIT,
                       payload: resp.status,
                   });

               }
               else {
                   dispatch({
                       type: authType.BUSD_EXIT,
                       payload: "failed.... ",
                   });

                   toast.configure();
                   toast("Failed to EXIT...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           })  .catch((err) => {
              // console.log("failed")
               dispatch({
                   type: authType.BUSD_EXIT,
                   payload: "rejected"+new Date(),
               });
       
           });
           

   }

}
 
export const getTotalRewardBUSD = (address) => async (dispatch) => {
   // value = value * 10 ** 6;
   const add = await setAddress()
   if (add) {

       await BUSDStakeInstance.methods
       .getTotalReward(add).call()
       .then(function (resp) {
           console.log(resp)
           dispatch({
               type: authType.BUSD_TOTAL_REWARD,
               payload: resp 
           });
           // }
       })
       .catch((err) => {
           console.log(err)

       });
       


           

   }

}

export const getTotalStackedBalanceBUSD = (address) => async (dispatch) => {
   // value = value * 10 ** 6;
   const add = await setAddress()
   if (add) {


       await BUSDStakeInstance.methods
       .getTotalStackedBalance(add).call()
       .then(function (resp) {
           console.log(resp)
           dispatch({
               type: authType.BUSD_TOTAL_STAKED_BALANCE,
               payload: resp 
           });
           // }
       })
       .catch((err) => {
           console.log(err)

       });










   }

}

export const getTotalRewardInMemoryBUSD = (address) => async (dispatch) => {
   // value = value * 10 ** 6;
   const add = await setAddress()
   if (add) {
console.log(BUSDStakeInstance.methods)
    //    await BUSDStakeInstance.methods.getTotalRewardInMemory(add).call()
    await BUSDStakeInstance.methods.getTotalReward(add).call()
       .then(function (resp) {
           console.log(resp)
           dispatch({
               type: authType.BUSD_TOTAL_REWARD_IN_MEMORY,
               payload: resp 
           });
           // }
       })
       .catch((err) => {
           console.log(err)

       });
   }

}























































////////////////////DAI ////////////////////////////////////////////

 export const stakeDAI = (address,value) => async (dispatch) => {
    value = web3.utils.toWei(value.toString(), "ether")

   const add = await setAddress()
   if (add) {

       const tx_stake_builder = await DAIStakeInstance.methods.stake(
           value
       );
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_DAI_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("stake txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("Staked: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                   dispatch({
                       type: authType.DAI_STAKE,
                       payload: resp.status+new Date(),
                   });

               }
               else {
                   dispatch({
                       type: authType.DAI_STAKE,
                       payload: "failed...."+new Date(),
                   });

                   toast.configure();
                   toast("Failed to Staked...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           })

   }

}

////stakingInfoDAI
export const stakingInfoDAI = (address) => async (dispatch) => {
    var promiseList = []
    await DAIStakeInstance.methods
    .getTotalCount(address).call()
    .then(function (resp) {
        console.log("getUSDTotalCount:",resp)
        var i = 0
        while (i <= resp) {
            promiseList.push(DAIStakeInstance.methods.stakingInfo(address, i).call())
    
    
            i++
        }
       
        allSettled(promiseList)
            .then(async(results) => {
               await results.map(item =>{
                    if(item.status === "fulfilled"){
                        item.value[2]= web3.utils.fromWei(item.value[2].toString(), "ether") 
                         console.log(" item.value.reward", item.value[2])
                    }
                })

                    dispatch({
                        type: authType.DAI_STAKE_BALANCE,
                        payload: results,
                    })

                
              
                })
               
            
    })
    .catch((err) => {
        console.log(err)

    });
    


 
}


export const getDAIReward = (address) => async (dispatch) => {
    var promiseList = []
    await DAIStakeInstance.methods
    .getTotalCount(address).call()
    .then(function (resp) {
        console.log("getUSDTotalCount:",resp)
        var i = 0
        while (i <= resp) {
            promiseList.push(DAIStakeInstance.methods.getReward(address, i).call())
    
    
            i++
        }
       
        allSettled(promiseList)
            .then(async(results) => {
                await results.map(item =>{
                    if(item.status === "fulfilled"){
                        item.value= web3.utils.fromWei(item.value.toString(), "ether") 
                         console.log(" item.value.reward", item.value)
                    }
                })

                dispatch({
                    type: authType.GET_DAI_REWARD,
                    payload: results,
                });
                })

    })


    // await StakeInstance.methods
    //     .getReward(address,1).call()
    //     .then(function (resp) {
    //         console.log("getUSDTotalReward:",resp)
    //         dispatch({
    //             type: authType.GET_USDT_REWARD,
    //             payload: resp ,
    //         });
    //         // }
    //     })
    //     .catch((err) => {
    //         console.log(err)

    //     });
 
 }


 export const unStakeDAI = (address,index) => async (dispatch) => {
   // value = value * 10 ** 6;
   const add = await setAddress()
   if (add) {

       const tx_stake_builder = await DAIStakeInstance.methods.unstake(
           index
       );
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_DAI_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("stake txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("UnStaked: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                   dispatch({
                       type: authType.DAI_UNSTAKE,
                       payload: resp.status,
                   });

               }
               else {
                   dispatch({
                       type: authType.DAI_UNSTAKE,
                       payload: "failed.... ",
                   });

                   toast.configure();
                   toast("Failed to UnStaked...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           }).catch((err) => {
           // console.log("failed")
            dispatch({
                type: authType.DAI_UNSTAKE,
                payload: "rejected"+new Date(),
            });
    
        });
        

   }

}

export const claimDAI = (address,index) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        const tx_stake_builder = await DAIStakeInstance.methods.claim(
            index
        );
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_DAI_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("stake txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Claimed: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.DAI_CLAIM,
                        payload: resp.status,
                    });
 
                }
                else {
                    dispatch({
                        type: authType.DAI_CLAIM,
                        payload: "failed.... ",
                    });
 
                    toast.configure();
                    toast("Failed to Claimed...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            })  .catch((err) => {
               // console.log("failed")
                dispatch({
                    type: authType.DAI_CLAIM,
                    payload: "rejected"+new Date(),
                });
        
            });
            
 
    }
 
 }
 

export const exitDAI = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        const tx_stake_builder = await DAIStakeInstance.methods.exit();
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_DAI_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("EXIT txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("EXIT: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.DAI_EXIT,
                        payload: resp.status,
                    });
 
                }
                else {
                    dispatch({
                        type: authType.DAI_EXIT,
                        payload: "failed.... ",
                    });
 
                    toast.configure();
                    toast("Failed to EXIT...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            })  .catch((err) => {
               // console.log("failed")
                dispatch({
                    type: authType.DAI_EXIT,
                    payload: "rejected"+new Date(),
                });
        
            });
            
 
    }
 
 }
  
export const getTotalRewardDAI = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await DAIStakeInstance.methods
        .getTotalReward(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.DAI_TOTAL_REWARD,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
        // const tx_stake_builder = await DAIStakeInstance.methods.getTotalReward(add);
        // //31160000000000000 
        // let encoded_stake_tx = tx_stake_builder.encodeABI();
        // web3.eth.sendTransaction(
        //     {
        //         to: info.Testnet_DAI_stake(),
        //         from: address,
        //         gasPrice: 50000000000,
        //         data: encoded_stake_tx
        //     })
        //     .then(function (resp) {
 
 
 
        //         console.log("getTotalReward txn result.....:", resp)
        //         if (resp.status == true) {
        //            // toast.configure();
        //             // toast("getTotalReward: " + resp.transactionHash, {
        //             //     position: toast.POSITION.TOP_RIGHT,
        //             //     className: "success",
        //             //     autoClose: 3000,
        //             //     toastId: 4
        //             // });
        //             dispatch({
        //                 type: authType.DAI_TOTAL_REWARD,
        //                 payload: resp,
        //             });
 
        //         }
        //         else {
        //             dispatch({
        //                 type: authType.DAI_TOTAL_REWARD,
        //                 payload: "failed.... ",
        //             });
 
        //             // toast.configure();
        //             // toast("Failed to EXIT...", {
        //             //     position: toast.POSITION.TOP_RIGHT,
        //             //     className: "fail",
        //             //     autoClose: 5000,
        //             //     toastId: 1,
        //             // });
 
        //         }
 
 
 
 
        //     })  .catch((err) => {
        //        // console.log("failed")
        //         dispatch({
        //             type: authType.DAI_TOTAL_REWARD,
        //             payload: "rejected"+new Date(),
        //         });
        
        //     });
            
 
    }
 
 }

export const getTotalStackedBalanceDAI = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        await DAIStakeInstance.methods
        .getTotalStackedBalance(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.DAI_TOTAL_STAKED_BALANCE,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });











        // const tx_stake_builder = await DAIStakeInstance.methods.getTotalStackedBalance(add);
        // //31160000000000000 
        // let encoded_stake_tx = tx_stake_builder.encodeABI();
        // web3.eth.sendTransaction(
        //     {
        //         to: info.Testnet_DAI_stake(),
        //         from: address,
        //         gasPrice: 50000000000,
        //         data: encoded_stake_tx
        //     })
        //     .then(function (resp) {
 
 
 
        //         console.log("getTotalStackedBalance txn result.....:", resp)
        //         if (resp.status == true) {
        //            // toast.configure();
        //             // toast("getTotalReward: " + resp.transactionHash, {
        //             //     position: toast.POSITION.TOP_RIGHT,
        //             //     className: "success",
        //             //     autoClose: 3000,
        //             //     toastId: 4
        //             // });
        //             dispatch({
        //                 type: authType.DAI_TOTAL_STAKED_BALANCE,
        //                 payload: resp,
        //             });
 
        //         }
        //         else {
        //             dispatch({
        //                 type: authType.DAI_TOTAL_STAKED_BALANCE,
        //                 payload: "failed.... ",
        //             });
 
        //             // toast.configure();
        //             // toast("Failed to EXIT...", {
        //             //     position: toast.POSITION.TOP_RIGHT,
        //             //     className: "fail",
        //             //     autoClose: 5000,
        //             //     toastId: 1,
        //             // });
 
        //         }
 
 
 
 
        //     })  .catch((err) => {
        //        // console.log("failed")
        //         dispatch({
        //             type: authType.DAI_TOTAL_STAKED_BALANCE,
        //             payload: "rejected"+new Date(),
        //         });
        
        //     });
            
 
    }
 
 }

export const getTotalRewardInMemoryDAI = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 console.log(DAIStakeInstance.methods)
        // await DAIStakeInstance.methods.getTotalRewardInMemory(add).call()
        await DAIStakeInstance.methods.getTotalReward(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.DAI_TOTAL_REWARD_IN_MEMORY,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
    }
 
 }









 
////////////////////USDC ////////////////////////////////////////////

export const stakeUSDC = (address,value) => async (dispatch) => {
    value = value * 10 ** 6;

   const add = await setAddress()
   if (add) {

       const tx_stake_builder = await USDCStakeInstance.methods.stake(
           value
       );
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_USDC_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("stake txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("Staked: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                   dispatch({
                       type: authType.USDC_STAKE,
                       payload: resp.status+new Date(),
                   });

               }
               else {
                   dispatch({
                       type: authType.USDC_STAKE,
                       payload: "failed....",
                   });

                   toast.configure();
                   toast("Failed to Staked...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           })

   }

}

////stakingInfoDAI
export const stakingInfoUSDC = (address) => async (dispatch) => {
    var promiseList = []
    await USDCStakeInstance.methods
    .getTotalCount(address).call()
    .then(function (resp) {
        console.log("getUSDTotalCount:",resp)
        var i = 0
        while (i <= resp) {
            promiseList.push(USDCStakeInstance.methods.stakingInfo(address, i).call())
    
    
            i++
        }
       
        allSettled(promiseList)
            .then(async(results) => {
               await results.map(item =>{
                    if(item.status === "fulfilled"){
                        item.value[2]= web3.utils.fromWei(item.value[2].toString(), "ether") 
                         console.log(" item.value.reward", item.value[2])
                    }
                })

                    dispatch({
                        type: authType.USDC_STAKE_BALANCE,
                        payload: results,
                    })

                
              
                })
               
            
    })
    .catch((err) => {
        console.log(err)

    });
    


 
}


export const getUSDCReward = (address) => async (dispatch) => {
    var promiseList = []
    await USDCStakeInstance.methods
    .getTotalCount(address).call()
    .then(function (resp) {
        console.log("getUSDTotalCount:",resp)
        var i = 0
        while (i <= resp) {
            promiseList.push(USDCStakeInstance.methods.getReward(address, i).call())
    
    
            i++
        }
       
        allSettled(promiseList)
            .then(async(results) => {
                await results.map(item =>{
                    if(item.status === "fulfilled"){
                        item.value= web3.utils.fromWei(item.value.toString(), "ether") 
                         console.log(" item.value.reward", item.value)
                    }
                })

                dispatch({
                    type: authType.GET_USDC_REWARD,
                    payload: results,
                });
                })

    })


    // await StakeInstance.methods
    //     .getReward(address,1).call()
    //     .then(function (resp) {
    //         console.log("getUSDTotalReward:",resp)
    //         dispatch({
    //             type: authType.GET_USDT_REWARD,
    //             payload: resp ,
    //         });
    //         // }
    //     })
    //     .catch((err) => {
    //         console.log(err)

    //     });
 
 }


 export const unStakeUSDC = (address,index) => async (dispatch) => {
   // value = value * 10 ** 6;
   const add = await setAddress()
   if (add) {

       const tx_stake_builder = await USDCStakeInstance.methods.unstake(
           index
       );
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_USDC_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("stake txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("UnStaked: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                   dispatch({
                       type: authType.USDC_UNSTAKE,
                       payload: resp.status,
                   });

               }
               else {
                   dispatch({
                       type: authType.USDC_UNSTAKE,
                       payload: "failed.... "+new Date(),
                   });

                   toast.configure();
                   toast("Failed to UnStaked...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           }).catch((err) => {
           // console.log("failed")
             toast.configure();
                   toast("Rejected...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });
            dispatch({
                type: authType.USDC_UNSTAKE,
                payload: "rejected"+new Date(),
            });
    
        });
        

   }

}

export const claimUSDC = (address,index) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        const tx_stake_builder = await USDCStakeInstance.methods.claim(
            index
        );
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_USDC_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("stake txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Claimed: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.USDC_CLAIM,
                        payload: resp.status+new Date(),
                    });
 
                }
                else {
                    dispatch({
                        type: authType.USDC_CLAIM,
                        payload: "failed.... ",
                    });
 
                    toast.configure();
                    toast("Failed to Claimed...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            })  .catch((err) => {
               // console.log("failed")
                dispatch({
                    type: authType.USDC_CLAIM,
                    payload: "rejected"+new Date(),
                });
        
            });
            
 
    }
 
 }
 

export const exitUSDC = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        const tx_stake_builder = await USDCStakeInstance.methods.exit();
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_USDC_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("EXIT txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("EXIT: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.USDC_EXIT,
                        payload: resp.status,
                    });
 
                }
                else {
                    dispatch({
                        type: authType.USDC_EXIT,
                        payload: "failed.... ",
                    });
 
                    toast.configure();
                    toast("Failed to EXIT...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            })  .catch((err) => {
               // console.log("failed")
                dispatch({
                    type: authType.USDC_EXIT,
                    payload: "rejected"+new Date(),
                });
        
            });
            
 
    }
 
 }
  
export const getTotalRewardUSDC = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await USDCStakeInstance.methods
        .getTotalReward(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.USDC_TOTAL_REWARD,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
        
 
    }
 
 }

export const getTotalStackedBalanceUSDC = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        await USDCStakeInstance.methods
        .getTotalStackedBalance(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.USDC_TOTAL_STAKED_BALANCE,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });











       
    }
 
 }

 export const getTotalRewardInMemoryUSDC = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 console.log(USDCStakeInstance.methods)
        // await USDCStakeInstance.methods.getTotalRewardInMemory(add).call()
        await USDCStakeInstance.methods.getTotalReward(add).call()
        .then(function (resp) {
            console.log("USDC_TOTAL_REWARD_IN_MEMORY:",resp)
            dispatch({
                type: authType.USDC_TOTAL_REWARD_IN_MEMORY,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });











       
    }
 
 }
 








 /////////////////////////GFX///////////////////////////////
 export const getGFXHistory = (address) => (dispatch) => {

    //0x4Fabb145d64652a948d72533023f6E7A623C7C53
  //  address = "0x8b7CDe4C9B374a3FE82a353d0595C712806Ef5Ec"
    console.log(address)
    axios({

        url: `http://34.65.25.175:4001/Gfxhistory/${address}`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(function (resp) {
            console.log("rsp from backend for gfx:", resp.data);



            dispatch({
                type: authType.GET_GFX_HISTORY,
                payload: resp.data,
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });

}

export const getGFXBalance = (address) => async (dispatch) => {

    //  address = "0xee7badafc1d6209b08476d56879d98f11dcfd324"

    await GfxInstance.methods
        .balanceOf(address).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.GET_GFX_BALANCE,
                payload: resp / 10 ** 18,
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });

}

export const approveGFX = (address, value,type) => async (dispatch) => {
    value = web3.utils.toWei(value.toString(), "ether")

    const add = await setAddress()
    if (add) {
     var stakeSwapAddress = '' 
        console.log(
            "value:", value)


              if(type=="stake")
               stakeSwapAddress=info.Testnet_GFX_stake()
              else
               stakeSwapAddress=info.Testnet_swap()



        const tx_builder = await GfxInstance.methods.approve(
            stakeSwapAddress,
            value
        );
        let encoded_tx = tx_builder.encodeABI();
        console.log("encoded_tx:", encoded_tx)
        web3.eth.sendTransaction(
            {
                to: info.Testnet_gfx(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_tx
            })
            .then(async function (resp) {
                console.log("approve response:", resp.transactionHash, ':::', resp.status)

                if (resp.status == true) {
                    resp.type = type
                    toast.configure();
                    toast("Approved: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.GFX_APPROVE,
                        payload: resp,
                    });

                }
                else {
                    dispatch({
                        type: authType.GFX_APPROVE,
                        payload: "failed"+new Date(),
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }


            })
            .catch((err) => {
                dispatch({
                    type: authType.GFX_APPROVE,
                    payload: "Rejected"+new Date(),
                });
                toast.configure();
                toast("Rejected", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })



    }
}


export const swapGFX = (address, value) => async (dispatch) => {
    value = web3.utils.toWei(value.toString(), "ether")

    const add = await setAddress()
    if (add) {
        const tx_swap_builder = await SwapInstance.methods.swap(
            info.Testnet_gfx(),
            info.Testnet_btf(),
            value,
            3,
            0

        );
        let encoded_swap_tx = tx_swap_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_swap(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_swap_tx
            })
            .then(function (resp) {
                console.log("swap txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Swapped: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.GFX_SWAP,
                        payload: resp.status+new Date(),
                    });

                }
                else {
                    dispatch({
                        type: authType.GFX_SWAP,
                        payload: "failed....",
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }

            })
            .catch((err) => {
                dispatch({
                    type: authType.GFX_SWAP,
                    payload: "failed....",
                });
                toast.configure();
                toast("Failed to Swap...", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })
    }
}


export const stakeGFX  = (address,value) => async (dispatch) => {
    value = web3.utils.toWei(value.toString(), "ether")


   const add = await setAddress()
   if (add) {

       const tx_stake_builder = await GFXStakeInstance.methods.stake(
           value
       );
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_GFX_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("stake txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("Staked: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                   dispatch({
                       type: authType.GFX_STAKE,
                       payload: resp.status+new Date(),
                   });

               }
               else {
                   dispatch({
                       type: authType.GFX_STAKE,
                       payload: "failed....",
                   });

                   toast.configure();
                   toast("Failed to Staked...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           })

   }

}


export const stakingInfoGFX = (address) => async (dispatch) => {
    var promiseList = []
    await GFXStakeInstance.methods
    .getTotalCount(address).call()
    .then(function (resp) {
        console.log("getGFXTotalCount:",resp)
        var i = 0
        while (i <= resp) {
            promiseList.push(GFXStakeInstance.methods.stakingInfo(address, i).call())
    
    
            i++
        }
       
        allSettled(promiseList)
            .then(async(results) => {
               await results.map(item =>{
                    if(item.status === "fulfilled"){
                        item.value[2]= web3.utils.fromWei(item.value[2].toString(), "ether") 
                         console.log(" item.value.reward", item.value[2])
                    }
                })

                    dispatch({
                        type: authType.GFX_STAKE_BALANCE,
                        payload: results,
                    })

                
              
                })
               
            
    })
    .catch((err) => {
        console.log(err)

    });
    


 
}


export const getGFXReward = (address) => async (dispatch) => {
    var promiseList = []
    await GFXStakeInstance.methods
    .getTotalCount(address).call()
    .then(function (resp) {
        console.log("getUSDTotalCount:",resp)
        var i = 0
        while (i <= resp) {
            promiseList.push(GFXStakeInstance.methods.getReward(address, i).call())
    
    
            i++
        }
       
        allSettled(promiseList)
            .then(async(results) => {
                await results.map(item =>{
                    if(item.status === "fulfilled"){
                        item.value= web3.utils.fromWei(item.value.toString(), "ether") 
                         console.log(" item.value.reward", item.value)
                    }
                })

                dispatch({
                    type: authType.GET_GFX_REWARD,
                    payload: results,
                });
                })

    })


 
 }


export const unStakeGFX = (address,index) => async (dispatch) => {
   // value = value * 10 ** 6;
   const add = await setAddress()
   if (add) {

       const tx_stake_builder = await GFXStakeInstance.methods.unstake(
           index
       );
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_GFX_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("stake txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("UnStaked: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                   dispatch({
                       type: authType.GFX_UNSTAKE,
                       payload: resp.status,
                   });

               }
               else {
                   dispatch({
                       type: authType.GFX_UNSTAKE,
                       payload: "failed.... "+new Date(),
                   });

                   toast.configure();
                   toast("Failed to UnStaked...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           }).catch((err) => {
           // console.log("failed")
            dispatch({
                type: authType.GFX_UNSTAKE,
                payload: "rejected"+new Date(),
            });
    
        });
        

   }

}

export const claimGFX = (address,index) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        const tx_stake_builder = await GFXStakeInstance.methods.claim(
            index
        );
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_GFX_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("stake txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Claimed: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.GFX_CLAIM,
                        payload: resp.status,
                    });
 
                }
                else {
                    dispatch({
                        type: authType.GFX_CLAIM,
                        payload: "failed.... ",
                    });
 
                    toast.configure();
                    toast("Failed to Claimed...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            })  .catch((err) => {
               // console.log("failed")
                dispatch({
                    type: authType.GFX_CLAIM,
                    payload: "rejected"+new Date(),
                });
        
            });
            
 
    }
 
 }
 

export const exitGFX = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        const tx_stake_builder = await GFXStakeInstance.methods.exit();
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_GFX_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("EXIT txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("EXIT: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.GFX_EXIT,
                        payload: resp.status,
                    });
 
                }
                else {
                    dispatch({
                        type: authType.GFX_EXIT,
                        payload: "failed.... ",
                    });
 
                    toast.configure();
                    toast("Failed to EXIT...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            })  .catch((err) => {
               // console.log("failed")
                dispatch({
                    type: authType.GFX_EXIT,
                    payload: "rejected"+new Date(),
                });
        
            });
            
 
    }
 
 }
  
export const getTotalRewardGFX = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await GFXStakeInstance.methods
        .getTotalReward(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.GFX_TOTAL_REWARD,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
        
 
    }
 
 }

export const getTotalStackedBalanceGFX = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        await GFXStakeInstance.methods
        .getTotalStackedBalance(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.GFX_TOTAL_STAKED_BALANCE,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });











       
    }
 
 }

export const getTotalRewardInMemoryGFX = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 console.log(GFXStakeInstance.methods)
        // await GFXStakeInstance.methods.getTotalRewardInMemory(add).call()
        await GFXStakeInstance.methods.getTotalReward(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.GFX_TOTAL_REWARD_IN_MEMORY,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
    }
 
 }





 ///////////////////GLD//////////////////////////
export const getGLDHistory = (address) => (dispatch) => {

   axios({

        url: `http://34.65.25.175:4001/Gldhistory/${address}`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(function (resp) {
            console.log("rsp from backend for gfx:", resp.data);



            dispatch({
                type: authType.GET_GLD_HISTORY,
                payload: resp.data,
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });

}

export const getGLDBalance = (address) => async (dispatch) => {

    //  address = "0xee7badafc1d6209b08476d56879d98f11dcfd324"

    await GldInstance.methods
        .balanceOf(address).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.GET_GLD_BALANCE,
                payload: resp / 10 ** 18,
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });

}

export const approveGLD = (address, value,type) => async (dispatch) => {
    value = web3.utils.toWei(value.toString(), "ether")

    const add = await setAddress()
    if (add) {
     var stakeSwapAddress = '' 
        console.log(
            "value:", value)


              if(type=="stake")
               stakeSwapAddress=info.Testnet_GLD_stake()
              else
               stakeSwapAddress=info.Testnet_swap()



        const tx_builder = await GldInstance.methods.approve(
            stakeSwapAddress,
            value
        );
        let encoded_tx = tx_builder.encodeABI();
        console.log("encoded_tx:", encoded_tx)
        web3.eth.sendTransaction(
            {
                to: info.Testnet_gld(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_tx
            })
            .then(async function (resp) {
                console.log("approve response:", resp.transactionHash, ':::', resp.status)

                if (resp.status == true) {
                    resp.type = type
                    toast.configure();
                    toast("Approved: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.GLD_APPROVE,
                        payload: resp,
                    });

                }
                else {
                    dispatch({
                        type: authType.GLD_APPROVE,
                        payload: "failed"+new Date(),
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }


            })
            .catch((err) => {
                dispatch({
                    type: authType.GLD_APPROVE,
                    payload: "Rejected"+new Date(),
                });
                toast.configure();
                toast("Rejected", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })



    }
}


export const swapGLD = (address, value) => async (dispatch) => {
    value = web3.utils.toWei(value.toString(), "ether")

    const add = await setAddress()
    if (add) {
        const tx_swap_builder = await SwapInstance.methods.swap(
            info.Testnet_gld(),
            info.Testnet_btf(),
            value,
            4,   
            0

        );
        let encoded_swap_tx = tx_swap_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_swap(),
                from: address,
                gasPrice: 5000000000,
                data: encoded_swap_tx
            })
            .then(function (resp) {
                console.log("swap txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Swapped: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 3
                    });
                    dispatch({
                        type: authType.GLD_SWAP,
                        payload: resp.status+new Date(),
                    });

                }
                else {
                    dispatch({
                        type: authType.GLD_SWAP,
                        payload: "failed....",
                    });

                    toast.configure();
                    toast("Failed to Approve...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });

                }

            })
            .catch((err) => {
                dispatch({
                    type: authType.GLD_SWAP,
                    payload: "failed....",
                });
                toast.configure();
                toast("Failed to Swap...", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 2,
                });

            })
    }
}


export const stakeGLD  = (address,value) => async (dispatch) => {
    value = web3.utils.toWei(value.toString(), "ether")


   const add = await setAddress()
   if (add) {

       const tx_stake_builder = await GLDStakeInstance.methods.stake(
           value
       );
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_GLD_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("stake txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("Staked: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                   dispatch({
                       type: authType.GLD_STAKE,
                       payload: resp.status+new Date(),
                   });

               }
               else {
                   dispatch({
                       type: authType.GLD_STAKE,
                       payload: "failed....",
                   });

                   toast.configure();
                   toast("Failed to Staked...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           })

   }

}


export const stakingInfoGLD = (address) => async (dispatch) => {
    var promiseList = []
    await GLDStakeInstance.methods
    .getTotalCount(address).call()
    .then(function (resp) {
        console.log("getGLDTotalCount:",resp)
        var i = 0
        while (i <= resp) {
            promiseList.push(GLDStakeInstance.methods.stakingInfo(address, i).call())
    
    
            i++
        }
       
        allSettled(promiseList)
            .then(async(results) => {
               await results.map(item =>{
                    if(item.status === "fulfilled"){
                        item.value[2]= web3.utils.fromWei(item.value[2].toString(), "ether") 
                         console.log(" item.value.reward", item.value[2])
                    }
                })

                    dispatch({
                        type: authType.GLD_STAKE_BALANCE,
                        payload: results,
                    })

                
              
                })
               
            
    })
    .catch((err) => {
        console.log(err)

    });
    


 
}


export const getGLDReward = (address) => async (dispatch) => {
    var promiseList = []
    await GLDStakeInstance.methods
    .getTotalCount(address).call()
    .then(function (resp) {
        console.log("getGLDTotalCount:",resp)
        var i = 0
        while (i <= resp) {
            promiseList.push(GLDStakeInstance.methods.getReward(address, i).call())
    
    
            i++
        }
       
        allSettled(promiseList)
            .then(async(results) => {
                await results.map(item =>{
                    if(item.status === "fulfilled"){
                        item.value= web3.utils.fromWei(item.value.toString(), "ether") 
                         console.log(" item.value.reward", item.value)
                    }
                })

                dispatch({
                    type: authType.GET_GLD_REWARD,
                    payload: results,
                });
                })

    })


 
 }


export const unStakeGLD = (address,index) => async (dispatch) => {
   // value = value * 10 ** 6;
   const add = await setAddress()
   if (add) {

       const tx_stake_builder = await GLDStakeInstance.methods.unstake(
           index
       );
       //31160000000000000 
       let encoded_stake_tx = tx_stake_builder.encodeABI();
       web3.eth.sendTransaction(
           {
               to: info.Testnet_GLD_stake(),
               from: address,
               gasPrice: 50000000000,
               data: encoded_stake_tx
           })
           .then(function (resp) {



               console.log("stake txn result.....:", resp)
               if (resp.status == true) {
                   toast.configure();
                   toast("UnStaked: " + resp.transactionHash, {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "success",
                       autoClose: 3000,
                       toastId: 4
                   });
                   dispatch({
                       type: authType.GLD_UNSTAKE,
                       payload: resp.status,
                   });

               }
               else {
                   dispatch({
                       type: authType.GLD_UNSTAKE,
                       payload: "failed.... "+new Date(),
                   });

                   toast.configure();
                   toast("Failed to UnStaked...", {
                       position: toast.POSITION.TOP_RIGHT,
                       className: "fail",
                       autoClose: 5000,
                       toastId: 1,
                   });

               }




           }).catch((err) => {
           // console.log("failed")
            dispatch({
                type: authType.GLD_UNSTAKE,
                payload: "rejected"+new Date(),
            });
    
        });
        

   }

}

export const claimGLD = (address,index) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        const tx_stake_builder = await GLDStakeInstance.methods.claim(
            index
        );
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_GLD_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("stake txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Claimed: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.GLD_CLAIM,
                        payload: resp.status,
                    });
 
                }
                else {
                    dispatch({
                        type: authType.GLD_CLAIM,
                        payload: "failed.... ",
                    });
 
                    toast.configure();
                    toast("Failed to Claimed...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            })  .catch((err) => {
               // console.log("failed")
                dispatch({
                    type: authType.GLD_CLAIM,
                    payload: "rejected"+new Date(),
                });
        
            });
            
 
    }
 
 }
 

export const exitGLD = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        const tx_stake_builder = await GLDStakeInstance.methods.exit();
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_GLD_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("EXIT txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("EXIT: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.GLD_EXIT,
                        payload: resp.status,
                    });
 
                }
                else {
                    dispatch({
                        type: authType.GLD_EXIT,
                        payload: "failed.... ",
                    });
 
                    toast.configure();
                    toast("Failed to EXIT...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            })  .catch((err) => {
               // console.log("failed")
                dispatch({
                    type: authType.GLD_EXIT,
                    payload: "rejected"+new Date(),
                });
        
            });
            
 
    }
 
 }
  
export const getTotalRewardGLD = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await GLDStakeInstance.methods
        .getTotalReward(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.GLD_TOTAL_REWARD,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
        
 
    }
 
 }

export const getTotalStackedBalanceGLD = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 

        await GLDStakeInstance.methods
        .getTotalStackedBalance(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.GLD_TOTAL_STAKED_BALANCE,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });











       
    }
 
 }

 export const getTotalRewardInMemoryGLD = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 console.log(GLDStakeInstance.methods)
        // await GLDStakeInstance.methods.getTotalRewardInMemory(add).call()
        await GLDStakeInstance.methods.getTotalReward(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.GLD_TOTAL_REWARD_IN_MEMORY,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
    }
 
 }


 ///////////////////EGLD//////////////////////////
 export const getEGLDHistory = (address) => (dispatch) => {

    axios({
 
         url: `http://34.65.25.175:4001/Egldhistory/${address}`,
         method: "get",
         headers: {
             "Content-Type": "application/json",
         }
     })
         .then(function (resp) {
             console.log("rsp from backend for gfx:", resp.data);
 
 
 
             dispatch({
                 type: authType.GET_EGLD_HISTORY,
                 payload: resp.data,
             });
             // }
         })
         .catch((err) => {
             console.log(err)
 
         });
 
 }
 
 export const getEGLDBalance = (address) => async (dispatch) => {
 
     //  address = "0xee7badafc1d6209b08476d56879d98f11dcfd324"
 
     await EGldInstance.methods
         .balanceOf(address).call()
         .then(function (resp) {
             console.log(resp)
             dispatch({
                 type: authType.GET_EGLD_BALANCE,
                 payload: resp / 10 ** 18,
             });
             // }
         })
         .catch((err) => {
             console.log(err)
 
         });
 
 }
 
 export const approveEGLD = (address, value,type) => async (dispatch) => {
     value = web3.utils.toWei(value.toString(), "ether")
 
     const add = await setAddress()
     if (add) {
      var stakeSwapAddress = '' 
         console.log(
             "value:", value)
 
 
               if(type=="stake")
                stakeSwapAddress=info.Testnet_EGLD_stake()
               else
                stakeSwapAddress=info.Testnet_swap()
 
 
 
         const tx_builder = await EGldInstance.methods.approve(
             stakeSwapAddress,
             value
         );
         let encoded_tx = tx_builder.encodeABI();
         console.log("encoded_tx:", encoded_tx)
         web3.eth.sendTransaction(
             {
                 to: info.Testnet_egld(),
                 from: address,
                 gasPrice: 5000000000,
                 data: encoded_tx
             })
             .then(async function (resp) {
                 console.log("approve response:", resp.transactionHash, ':::', resp.status)
 
                 if (resp.status == true) {
                     resp.type = type
                     toast.configure();
                     toast("Approved: " + resp.transactionHash, {
                         position: toast.POSITION.TOP_RIGHT,
                         className: "success",
                         autoClose: 3000,
                         toastId: 3
                     });
                     dispatch({
                         type: authType.EGLD_APPROVE,
                         payload: resp,
                     });
 
                 }
                 else {
                     dispatch({
                         type: authType.EGLD_APPROVE,
                         payload: "failed"+new Date(),
                     });
 
                     toast.configure();
                     toast("Failed to Approve...", {
                         position: toast.POSITION.TOP_RIGHT,
                         className: "fail",
                         autoClose: 5000,
                         toastId: 1,
                     });
 
                 }
 
 
             })
             .catch((err) => {
                 dispatch({
                     type: authType.EGLD_APPROVE,
                     payload: "Rejected"+new Date(),
                 });
                 toast.configure();
                 toast("Rejected", {
                     position: toast.POSITION.TOP_RIGHT,
                     className: "fail",
                     autoClose: 5000,
                     toastId: 2,
                 });
 
             })
 
 
 
     }
 }
 
 
 export const swapEGLD = (address, value) => async (dispatch) => {
     value = web3.utils.toWei(value.toString(), "ether")
 
     const add = await setAddress()
     if (add) {
         const tx_swap_builder = await SwapInstance.methods.swap(
             info.Testnet_egld(),
             info.Testnet_btf(),
             value,
             5,   
             0
 
         );
         let encoded_swap_tx = tx_swap_builder.encodeABI();
         web3.eth.sendTransaction(
             {
                 to: info.Testnet_swap(),
                 from: address,
                 gasPrice: 5000000000,
                 data: encoded_swap_tx
             })
             .then(function (resp) {
                 console.log("swap txn result.....:", resp)
                 if (resp.status == true) {
                     toast.configure();
                     toast("Swapped: " + resp.transactionHash, {
                         position: toast.POSITION.TOP_RIGHT,
                         className: "success",
                         autoClose: 3000,
                         toastId: 3
                     });
                     dispatch({
                         type: authType.EGLD_SWAP,
                         payload: resp.status+new Date(),
                     });
 
                 }
                 else {
                     dispatch({
                         type: authType.EGLD_SWAP,
                         payload: "failed....",
                     });
 
                     toast.configure();
                     toast("Failed to Approve...", {
                         position: toast.POSITION.TOP_RIGHT,
                         className: "fail",
                         autoClose: 5000,
                         toastId: 1,
                     });
 
                 }
 
             })
             .catch((err) => {
                 dispatch({
                     type: authType.EGLD_SWAP,
                     payload: "failed....",
                 });
                 toast.configure();
                 toast("Failed to Swap...", {
                     position: toast.POSITION.TOP_RIGHT,
                     className: "fail",
                     autoClose: 5000,
                     toastId: 2,
                 });
 
             })
     }
 }
 
 
 export const stakeEGLD  = (address,value) => async (dispatch) => {
     value = web3.utils.toWei(value.toString(), "ether")
 
 
    const add = await setAddress()
    if (add) {
 
        const tx_stake_builder = await EGLDStakeInstance.methods.stake(
            value
        );
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_EGLD_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("stake txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("Staked: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.EGLD_STAKE,
                        payload: resp.status+new Date(),
                    });
 
                }
                else {
                    dispatch({
                        type: authType.EGLD_STAKE,
                        payload: "failed....",
                    });
 
                    toast.configure();
                    toast("Failed to Staked...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            })
 
    }
 
 }
 
 
 export const stakingInfoEGLD = (address) => async (dispatch) => {
     var promiseList = []
     await EGLDStakeInstance.methods
     .getTotalCount(address).call()
     .then(function (resp) {
         console.log("getEGLDTotalCount:",resp)
         var i = 0
         while (i <= resp) {
             promiseList.push(EGLDStakeInstance.methods.stakingInfo(address, i).call())
     
     
             i++
         }
        
         allSettled(promiseList)
             .then(async(results) => {
                await results.map(item =>{
                     if(item.status === "fulfilled"){
                         item.value[2]= web3.utils.fromWei(item.value[2].toString(), "ether") 
                          console.log(" item.value.reward", item.value[2])
                     }
                 })
 
                     dispatch({
                         type: authType.EGLD_STAKE_BALANCE,
                         payload: results,
                     })
 
                 
               
                 })
                
             
     })
     .catch((err) => {
         console.log(err)
 
     });
     
 
 
  
 }
 
 
 export const getEGLDReward = (address) => async (dispatch) => {
     var promiseList = []
     await EGLDStakeInstance.methods
     .getTotalCount(address).call()
     .then(function (resp) {
         console.log("getEGLDTotalCount:",resp)
         var i = 0
         while (i <= resp) {
             promiseList.push(EGLDStakeInstance.methods.getReward(address, i).call())
     
     
             i++
         }
        
         allSettled(promiseList)
             .then(async(results) => {
                 await results.map(item =>{
                     if(item.status === "fulfilled"){
                         item.value= web3.utils.fromWei(item.value.toString(), "ether") 
                          console.log(" item.value.reward", item.value)
                     }
                 })
 
                 dispatch({
                     type: authType.GET_EGLD_REWARD,
                     payload: results,
                 });
                 })
 
     })
 
 
  
  }
 
 
 export const unStakeEGLD = (address,index) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        const tx_stake_builder = await EGLDStakeInstance.methods.unstake(
            index
        );
        //31160000000000000 
        let encoded_stake_tx = tx_stake_builder.encodeABI();
        web3.eth.sendTransaction(
            {
                to: info.Testnet_EGLD_stake(),
                from: address,
                gasPrice: 50000000000,
                data: encoded_stake_tx
            })
            .then(function (resp) {
 
 
 
                console.log("stake txn result.....:", resp)
                if (resp.status == true) {
                    toast.configure();
                    toast("UnStaked: " + resp.transactionHash, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "success",
                        autoClose: 3000,
                        toastId: 4
                    });
                    dispatch({
                        type: authType.EGLD_UNSTAKE,
                        payload: resp.status,
                    });
 
                }
                else {
                    dispatch({
                        type: authType.EGLD_UNSTAKE,
                        payload: "failed"+new Date(),
                    });
 
                    toast.configure();
                    toast("Failed to UnStaked...", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "fail",
                        autoClose: 5000,
                        toastId: 1,
                    });
 
                }
 
 
 
 
            }).catch((err) => {
            // console.log("failed")
             dispatch({
                 type: authType.EGLD_UNSTAKE,
                 payload: "rejected"+new Date(),
             });
     
         });
         
 
    }
 
 }
 
 export const claimEGLD = (address,index) => async (dispatch) => {
     // value = value * 10 ** 6;
     const add = await setAddress()
     if (add) {
  
 
         const tx_stake_builder = await EGLDStakeInstance.methods.claim(
             index
         );
         //31160000000000000 
         let encoded_stake_tx = tx_stake_builder.encodeABI();
         web3.eth.sendTransaction(
             {
                 to: info.Testnet_EGLD_stake(),
                 from: address,
                 gasPrice: 50000000000,
                 data: encoded_stake_tx
             })
             .then(function (resp) {
  
  
  
                 console.log("stake txn result.....:", resp)
                 if (resp.status == true) {
                     toast.configure();
                     toast("Claimed: " + resp.transactionHash, {
                         position: toast.POSITION.TOP_RIGHT,
                         className: "success",
                         autoClose: 3000,
                         toastId: 4
                     });
                     dispatch({
                         type: authType.EGLD_CLAIM,
                         payload: resp.status,
                     });
  
                 }
                 else {
                     dispatch({
                         type: authType.EGLD_CLAIM,
                         payload: "failed.... ",
                     });
  
                     toast.configure();
                     toast("Failed to Claimed...", {
                         position: toast.POSITION.TOP_RIGHT,
                         className: "fail",
                         autoClose: 5000,
                         toastId: 1,
                     });
  
                 }
  
  
  
  
             })  .catch((err) => {
                // console.log("failed")
                 dispatch({
                     type: authType.EGLD_CLAIM,
                     payload: "rejected"+new Date(),
                 });
         
             });
             
  
     }
  
  }
  
 
 export const exitEGLD = (address) => async (dispatch) => {
     // value = value * 10 ** 6;
     const add = await setAddress()
     if (add) {
  
 
         const tx_stake_builder = await EGLDStakeInstance.methods.exit();
         //31160000000000000 
         let encoded_stake_tx = tx_stake_builder.encodeABI();
         web3.eth.sendTransaction(
             {
                 to: info.Testnet_EGLD_stake(),
                 from: address,
                 gasPrice: 50000000000,
                 data: encoded_stake_tx
             })
             .then(function (resp) {
  
  
  
                 console.log("EXIT txn result.....:", resp)
                 if (resp.status == true) {
                     toast.configure();
                     toast("EXIT: " + resp.transactionHash, {
                         position: toast.POSITION.TOP_RIGHT,
                         className: "success",
                         autoClose: 3000,
                         toastId: 4
                     });
                     dispatch({
                         type: authType.EGLD_EXIT,
                         payload: resp.status,
                     });
  
                 }
                 else {
                     dispatch({
                         type: authType.EGLD_EXIT,
                         payload: "failed.... ",
                     });
  
                     toast.configure();
                     toast("Failed to EXIT...", {
                         position: toast.POSITION.TOP_RIGHT,
                         className: "fail",
                         autoClose: 5000,
                         toastId: 1,
                     });
  
                 }
  
  
  
  
             })  .catch((err) => {
                // console.log("failed")
                 dispatch({
                     type: authType.EGLD_EXIT,
                     payload: "rejected"+new Date(),
                 });
         
             });
             
  
     }
  
  }
   
 export const getTotalRewardEGLD = (address) => async (dispatch) => {
     // value = value * 10 ** 6;
     const add = await setAddress()
     if (add) {
  
         await EGLDStakeInstance.methods
         .getTotalReward(add).call()
         .then(function (resp) {
             console.log(resp)
             dispatch({
                 type: authType.EGLD_TOTAL_REWARD,
                 payload: resp 
             });
             // }
         })
         .catch((err) => {
             console.log(err)
 
         });
         
  
     }
  
  }
 
 export const getTotalStackedBalanceEGLD = (address) => async (dispatch) => {
     // value = value * 10 ** 6;
     const add = await setAddress()
     if (add) {
  
 
         await EGLDStakeInstance.methods
         .getTotalStackedBalance(add).call()
         .then(function (resp) {
             console.log(resp)
             dispatch({
                 type: authType.EGLD_TOTAL_STAKED_BALANCE,
                 payload: resp 
             });
             // }
         })
         .catch((err) => {
             console.log(err)
 
         });
 
 
 
 
 
 
 
 
 
 
 
        
     }
  
  }
 
 
 export const getTotalRewardInMemoryEGLD = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 console.log(EGLDStakeInstance.methods)
        // await EGLDStakeInstance.methods.getTotalRewardInMemory(add).call()
        await EGLDStakeInstance.methods.getTotalReward(add).call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.EGLD_TOTAL_REWARD_IN_MEMORY,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
    }
 
 }
 
 
 
  export const getEGLDInterest = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await EGLDStakeInstance.methods
        .interestRate().call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.EGLD_TOTAL_INTEREST,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
        
 
    }
 
 }


 export const getGLDInterest = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await GLDStakeInstance.methods
        .interestRate().call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.GLD_TOTAL_INTEREST,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
        
 
    }
 
 }


 export const getGFXInterest = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await GFXStakeInstance.methods
        .interestRate().call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.GFX_TOTAL_INTEREST,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
        
 
    }
 
 }


 export const getUSDCInterest = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await USDCStakeInstance.methods
        .interestRate().call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.USDC_TOTAL_INTEREST,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
        
 
    }
 
 }


 export const getDAIInterest = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await DAIStakeInstance.methods
        .interestRate().call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.DAI_TOTAL_INTEREST,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
       
    }
 
 }



export const getBUSDInterest = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await BUSDStakeInstance.methods
        .interestRate().call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.BUSD_TOTAL_INTEREST,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)
 
        });
        
 
 
            
 
    }
 
 }


export const getUSDTInterest = (address) => async (dispatch) => {
    // value = value * 10 ** 6;
    const add = await setAddress()
    if (add) {
 
        await USDTStakeInstance.methods
        .interestRate().call()
        .then(function (resp) {
            console.log(resp)
            dispatch({
                type: authType.USDT_TOTAL_INTEREST,
                payload: resp 
            });
            // }
        })
        .catch((err) => {
            console.log(err)

        });
        
 
 
            
 
    }
 
 }

