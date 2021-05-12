import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import $ from 'jquery';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
    getEthHistory, getBUSDHistory, getTUSDHistory,
    getUSDTHistory, getUSDCHistory, getDAIHistory,
    getETHBalance, getBUSDBalance, getTUSDBalance,
    getUSDTBalance, getUSDCBalance, getDAIBalance,
    approveDAI, swapDAI, approveUSDT, swapUSDT,
    approveUSDC, swapUSDC, approveBUSD, swapBUSD, stakeUSDT, stakingInfoUSDT,
    getUSDTReward, unStakeUSDT, claimUSDT,
    stakeDAI, stakingInfoDAI, getDAIReward,
    unStakeDAI, claimDAI, exitDAI, exitUSDT,
    getTotalRewardDAI, getTotalStackedBalanceDAI,
    getTotalRewardInMemoryDAI,
    getTotalRewardUSDT, getTotalStackedBalanceUSDT,
    getTotalRewardInMemoryUSDT,


    stakeBUSD, stakingInfoBUSD,
    getBUSDReward, unStakeBUSD, claimBUSD,
    exitBUSD,getTotalRewardBUSD, getTotalStackedBalanceBUSD,
    getTotalRewardInMemoryBUSD,
    

    stakeUSDC, stakingInfoUSDC, getUSDCReward,
    unStakeUSDC, claimUSDC, exitUSDC,
    getTotalRewardUSDC, getTotalStackedBalanceUSDC,
    getTotalRewardInMemoryUSDC,

    getGFXHistory, getGFXBalance, approveGFX,
    swapGFX, stakeGFX, stakingInfoGFX, getGFXReward,
    unStakeGFX, claimGFX, exitGFX,
    getTotalRewardGFX, getTotalStackedBalanceGFX,
    getTotalRewardInMemoryGFX,


    // getGLDHistory, getGLDBalance, approveGLD,
    // swapGLD, stakeGLD, stakingInfoGLD, getGLDReward,
    // unStakeGLD, claimGLD, exitGLD,
    // getTotalRewardGLD, getTotalStackedBalanceGLD,
    // getTotalRewardInMemoryGLD,

    // getEGLDHistory, getEGLDBalance, approveEGLD,
    // swapEGLD, stakeEGLD, stakingInfoEGLD, getEGLDReward,
    // unStakeEGLD, claimEGLD, exitEGLD,
    // getTotalRewardEGLD, getTotalStackedBalanceEGLD,
    // getTotalRewardInMemoryEGLD,

    getUSDTInterest,getUSDCInterest,getBUSDInterest,
    getGLDInterest,getEGLDInterest,getGFXInterest,
    getDAIInterest,
} from '../services/history/action'
import setAddress from '../utils/MetamaskInject'
import "react-toastify/dist/ReactToastify.min.css";
import { Flip, toast } from "react-toastify";



import PreventMultiTabs from "./PreventMultiTabs/PreventMultiTabs"
import { constants, localStorage } from "../helper";


// import loader from './loader/loader'


class header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            closeaside:false,
            selectValue: "ETH",
            selectValueZap: "DAI",
            selectValueStake: "USDT",
            loggedAddress: "",
            eth_history: "",
            tusd_history: "",
            usdt_history: "",
            busd_history: "",
            usdc_history: "",
            dai_history: "",
            all_history: "",
            ETH_balance: 0,
            ETH_25: 0,
            ETH_50: 0,
            ETH_75: 0,
            ETH_100: 0,
            TUSD_balance: "-",
            TUSD_25: 0,
            TUSD_50: 0,
            TUSD_75: 0,
            TUSD_100: 0,
            USDT_balance: "-",
            USDT_25: 0,
            USDT_50: 0,
            USDT_75: 0,
            USDT_100: 0,
            BUSD_balance: "-",
            BUSD_25: 0,
            BUSD_50: 0,
            BUSD_75: 0,
            BUSD_100: 0,
            USDC_balance: "-",
            USDC_25: 0,
            USDC_50: 0,
            USDC_75: 0,
            USDC_100: 0,
            DAI_balance: "-",
            DAI_25: '',
            DAI_50: 0,
            DAI_75: 0,
            DAI_100: 0,
            send_amount: 0,                  //to get zap value Onchange
            selected_percentage: 25,        // selected % value
            active: true,                 //for zap 25% button
            active1: false,               //for zap  50% buttom
            active2: false,              //for zap 75% button
            active3: false,             //for zap 100% buttom
            onchangeSendAmount: false, // for zap User input instead of % button




            selectedStake: '',


            usdt_stake: '',
            usdt_txn_log: '',
            usdt_txn_log_reward: '',
            usdt_claim_index: -1,
            usdt_unStake_index: -1,
            usdt_approve_swap: '',
            usdt_approve_stake: '',
            usdt_swap: '',


            busd_stake: '',
            busd_txn_log: '',
            busd_txn_log_reward: '',
            busd_claim_index: -1,
            busd_unStake_index: -1,
            busd_approve_swap: '',
            busd_approve_stake: '',
            busd_swap: '',


            dai_stake: '',
            dai_txn_log: '',
            dai_txn_log_reward: '',
            dai_claim_index: -1,
            dai_unStake_index: -1,
            dai_approve_stake: '',
            dai_approve_swap: '',
            dai_swap: '',

            usdc_stake: '',
            usdc_txn_log: '',
            usdc_txn_log_reward: '',
            usdc_claim_index: -1,
            usdc_unStake_index: -1,
            usdc_approve_swap: '',
            usdc_approve_stake: '',
            usdc_swap: '',


            gfx_history: "",
            GFX_balance: 0,
            GFX_25: 0,
            GFX_50: 0,
            GFX_75: 0,
            GFX_100: 0,
            gfx_approve_stake: '',
            gfx_approve_swap: '',
            gfx_swap: '',
            gfx_stake: '',
            gfx_txn_log: '',
            gfx_txn_log_reward: '',
            gfx_claim_index: -1,
            gfx_unStake_index: -1,

            // gld_history: "",
            // GLD_balance: 0,
            // GLD_25: 0,
            // GLD_50: 0,
            // GLD_75: 0,
            // GLD_100: 0,
            // gld_approve_swap: '',
            // gld_approve_stake: '',
            // gld_swap: '',
            // gld_stake: '',
            // gld_txn_log: '',
            // gld_txn_log_reward: '',
            // gld_claim_index: -1,
            // gld_unStake_index: -1,


            // egld_history: "",
            // EGLD_balance: 0,
            // EGLD_25: 0,
            // EGLD_50: 0,
            // EGLD_75: 0,
            // EGLD_100: 0,
            // egld_approve_swap: '',
            // egld_approve_stake: '',
            // egld_swap: '',
            // egld_stake: '',
            // egld_txn_log: '',
            // egld_txn_log_reward: '',
            // egld_claim_index: -1,
            // egld_unStake_index: -1,


            exit_called: false,

            value: '',
            copied: false,


        }

        this.openTransactionHistory = this.openTransactionHistory.bind(this);
        this.closeTransactionHistory = this.closeTransactionHistory.bind(this)
        this.setPercentageValue = this.setPercentageValue.bind(this)
        this.swap = this.swap.bind(this)
        this.stakeModal = this.stakeModal.bind(this)
        this.loadTxnLog = this.loadTxnLog.bind(this)
        this.claim = this.claim.bind(this)
        this.unStake = this.unStake.bind(this)
        this.exit = this.exit.bind(this)


    }

    close=()=>{

        $(".close-aside").on("click", function() {
            $(".aside-inner").css("right", "-100vw");
        });

    }

    componentWillMount() {
        const myId = Date.now().toString();
        console.log("firstId:", myId);
        localStorage.setItem(constants.localStorage.enter, myId);
        const enterSub = localStorage.subscribe(
            constants.localStorage.enter,
            () => {
                localStorage.setItem(constants.localStorage.reject, myId);
            }
        );
        const rejectSub = localStorage.subscribe(
            constants.localStorage.reject,
            id => {
                if (id && id !== myId) {
                    this.setState({ multiTabs: true });
                    localStorage.unsubscribe(rejectSub);
                    localStorage.unsubscribe(enterSub);
                    localStorage.removeItem(constants.localStorage.reject);
                }
            }
        );
    }






    exit = async (token) => {

        console.log("exist_called:", this.state.exit_called)
        const add = await setAddress()
        if (token == "USDT") {
            if (this.props.usdt_total_reward != 0 || this.props.usdt_total_staked_balance != 0) {
                this.setState({ exit_called: true })
                this.props.exitUSDT(add)
            }
            else
            //alert("Funds already 0")
                toast.configure();
            toast.error("Funds already 0...", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                toastId: 1,
            });
        }
        else if (token == "DAI") {

            if (this.props.dai_total_reward != 0 || this.props.dai_total_staked_balance != 0) {
                this.setState({ exit_called: true })
                this.props.exitDAI(add)
            }
            else
                toast.configure();
            toast.error("Funds already 0...", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                toastId: 1,
            });
        }
        else if (token == "USDC") {
            console.log("00this.props.usdc_total_reward", this.props.usdc_total_reward)
            console.log("11this.props.usdc_total_staked_balance", this.props.usdc_total_staked_balance)
            console.log("22this.props.usdc_total_reward_in_memory", this.props.usdc_total_reward_in_memory)
            if ((this.props.usdc_total_reward != 0 || this.props.usdc_total_reward_in_memory != 0) || this.props.usdc_total_staked_balance != 0) {
                this.setState({ exit_called: true })
                this.props.exitUSDC(add)
            }
            else
                toast.configure();
            toast.error("Funds already 0...", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                toastId: 1,
            });
        }
        else if (token == "GFX") {

            if (this.props.gfx_total_reward != 0 || this.props.gfx_total_staked_balance != 0) {
                this.setState({ exit_called: true })
                this.props.exitGFX(add)
            }
            else
                toast.configure();
            toast.error("Funds already 0...", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                toastId: 1,
            });
        }

        // else if (token == "GLD") {

        //     if (this.props.gld_total_reward != 0 || this.props.gld_total_staked_balance != 0) {
        //         this.setState({ exit_called: true })
        //         this.props.exitGLD(add)
        //     }
        //     else
        //         toast.configure();
        //     toast.error("Funds already 0...", {
        //         position: toast.POSITION.TOP_RIGHT,
        //         autoClose: 5000,
        //         toastId: 1,
        //     });
        // }

        // else if (token == "EGLD") {

        //     if (this.props.egld_total_reward != 0 || this.props.egld_total_staked_balance != 0) {
        //         this.setState({ exit_called: true })
        //         this.props.exitEGLD(add)
        //     }
        //     else
        //         toast.configure();
        //     toast.error("Funds already 0...", {
        //         position: toast.POSITION.TOP_RIGHT,
        //         autoClose: 5000,
        //         toastId: 1,
        //     });
        // }
        else if (token == "BUSD") {
            if (this.props.busd_total_reward != 0 || this.props.busd_total_staked_balance != 0) {
                this.setState({ exit_called: true })
                this.props.exitBUSD(add)
            }
            else
            //alert("Funds already 0")
                toast.configure();
            toast.error("Funds already 0...", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                toastId: 1,
            });
        }
    }



    claim = async (index, token) => {

        if (token == "USDT") {
            console.log("usdt_claim_index::::",this.state.usdt_claim_index)
            if (this.state.usdt_claim_index < 0) {
                this.setState({ usdt_claim_index: index })
                const add = await setAddress()
                if (add) {

                    await this.props.claimUSDT(add, index)
                }

            }
            else {
                alert(this.state.usdt_claim_index + ' index Claming is in progress for USDT, pLease Wait! ')
            }
        }
        else if (token == "DAI") {
            if (this.state.dai_claim_index < 0) {
                this.setState({ dai_claim_index: index })
                const add = await setAddress()
                if (add) {

                    await this.props.claimDAI(add, index)
                }

            }
            else {
                alert(this.state.dai_claim_index + ' index Claming is in progress for DAI, pLease Wait! ')
            }
        }
        else if (token == "USDC") {
            if (this.state.usdc_claim_index < 0) {
                this.setState({ usdc_claim_index: index })
                const add = await setAddress()
                if (add) {

                    await this.props.claimUSDC(add, index)
                }

            }
            else {
                alert(this.state.usdc_claim_index + ' index Claming is in progress for USDC, pLease Wait! ')
            }
        }
        else if (token == "GFX") {
            if (this.state.gfx_claim_index < 0) {
                this.setState({ gfx_claim_index: index })
                const add = await setAddress()
                if (add) {

                    await this.props.claimGFX(add, index)
                }

            }
            else {
                alert(this.state.gfx_claim_index + ' index Claming is in progress for GFX, pLease Wait! ')
            }
        }

        // else if (token == "GLD") {
        //     if (this.state.gld_claim_index < 0) {
        //         this.setState({ gld_claim_index: index })
        //         const add = await setAddress()
        //         if (add) {

        //             await this.props.claimGLD(add, index)
        //         }

        //     }
        //     else {
        //         alert(this.state.gld_claim_index + ' index Claming is in progress for GLD, pLease Wait! ')
        //     }
        // }
        // else if (token == "EGLD") {
        //     if (this.state.egld_claim_index < 0) {
        //         this.setState({ egld_claim_index: index })
        //         const add = await setAddress()
        //         if (add) {

        //             await this.props.claimEGLD(add, index)
        //         }

        //     }
        //     else {
        //         alert(this.state.egld_claim_index + ' index Claming is in progress for EGLD, pLease Wait! ')
        //     }
        // }
        else if (token == "BUSD") {
            console.log("busd_claim_index::::",this.state.busd_claim_index)
            if (this.state.busd_claim_index < 0) {
                this.setState({ busd_claim_index: index })
                const add = await setAddress()
                if (add) {

                    await this.props.claimBUSD(add, index)
                }

            }
            else {
                alert(this.state.busd_claim_index + ' index Claming is in progress for BUSD, pLease Wait! ')
            }
        }

    }

    unStake = async (index, token) => {
        if (token == "USDT") {
            if (this.state.usdt_unStake_index < 0) {
                this.setState({ usdt_unStake_index: index })
                const add = await setAddress()
                if (add) {

                    await this.props.unStakeUSDT(add, index)
                }

            }
            else {
                alert(this.state.usdt_unStake_index + ' index Claming is in progress for USDT, pLease Wait! ')
            }
        }
        else if (token == "DAI") {
            if (this.state.dai_unStake_index < 0) {
                this.setState({ dai_unStake_index: index })
                const add = await setAddress()
                if (add) {

                    await this.props.unStakeDAI(add, index)
                }

            }
            else {
                alert(this.state.dai_unStake_index + ' index Claming is in progress for DAI, pLease Wait! ')
            }
        }
        else if (token == "USDC") {
            if (this.state.usdc_unStake_index < 0) {
                this.setState({ usdc_unStake_index: index })
                const add = await setAddress()
                if (add) {

                    await this.props.unStakeUSDC(add, index)
                }

            }
            else {
                alert(this.state.usdc_unStake_index + ' index Claming is in progress for USDC, pLease Wait! ')
            }
        }
        else if (token == "GFX") {
            if (this.state.gfx_unStake_index < 0) {
                this.setState({ gfx_unStake_index: index })
                const add = await setAddress()
                if (add) {

                    await this.props.unStakeGFX(add, index)
                }

            }
            else {
                alert(this.state.gfx_unStake_index + ' index Claming is in progress for GFX, pLease Wait! ')
            }
        }

        // else if (token == "GLD") {
        //     if (this.state.gld_unStake_index < 0) {
        //         this.setState({ gld_unStake_index: index })
        //         const add = await setAddress()
        //         if (add) {

        //             await this.props.unStakeGLD(add, index)
        //         }

        //     }
        //     else {
        //         alert(this.state.gld_unStake_index + ' index Claming is in progress for GLD, pLease Wait! ')
        //     }
        // }
        // else if (token == "EGLD") {
        //     if (this.state.egld_unStake_index < 0) {
        //         this.setState({ egld_unStake_index: index })
        //         const add = await setAddress()
        //         if (add) {

        //             await this.props.unStakeEGLD(add, index)
        //         }

        //     }
        //     else {
        //         alert(this.state.egld_unStake_index + ' index Claming is in progress for EGLD, pLease Wait! ')
        //     }
        // }

        else if (token == "BUSD") {
            if (this.state.busd_unStake_index < 0) {
                this.setState({ busd_unStake_index: index })
                const add = await setAddress()
                if (add) {

                    await this.props.unStakeBUSD(add, index)
                }

            }
            else {
                alert(this.state.busd_unStake_index + ' index Claming is in progress for BUSD, pLease Wait! ')
            }
        }
    }


    loadTxnLog = async () => {
        const add = await setAddress()
        if (add) {
            await this.props.stakingInfoUSDT(add)
            await this.props.stakingInfoDAI(add)
            await this.props.stakingInfoUSDC(add)
            await this.props.stakingInfoGFX(add)
            // await this.props.stakingInfoGLD(add)
            // await this.props.stakingInfoEGLD(add)
            await this.props.stakingInfoBUSD(add)
        }
        console.log("earning called....")
    }

    stakeModal = async (value) => {
        console.log("stakeModal", value)
        await this.setState({ selectedStake: value });
        // console.log(".......", this.state.active)

    }





    stake = async () => {
        console.log("selectValueStake:::", this.state.selectedStake)

        if (this.state.send_amount)



            if (this.state.selectedStake == "DAI" && this.state.send_amount <= this.props.dai_balance) {
                this.setState({ dai_approve_stake: "processing" })
                await this.props.approveDAI(this.state.loggedAddress, this.state.send_amount, "stake")
            }



            else if (this.state.selectedStake == "USDT" && this.state.send_amount <= this.props.usdt_balance) {
                console.log("stake value:::", this.state.send_amount)
                console.log("valvalval:", this.props.usdt_balance)
                this.setState({ usdt_approve_stake: "processing" })
                await this.props.approveUSDT(this.state.loggedAddress, this.state.send_amount, "stake")

            }



            else if (this.state.selectedStake == "USDC" && this.state.send_amount <= this.props.usdc_balance) {
                this.setState({ usdc_approve_stake: "processing" })
                await this.props.approveUSDC(this.state.loggedAddress, this.state.send_amount, "stake")

            }


            else if (this.state.selectedStake == "GFX" && this.state.send_amount <= this.props.gfx_balance) {
                this.setState({ gfx_approve_stake: "processing" })
                await this.props.approveGFX(this.state.loggedAddress, this.state.send_amount, "stake")

            }


            // else if (this.state.selectedStake == "GLD" && this.state.send_amount <= this.props.gld_balance) {
            //     this.setState({ gld_approve_stake: "processing" })
            //     await this.props.approveGLD(this.state.loggedAddress, this.state.send_amount, "stake")

            // }



            // else if (this.state.selectedStake == "EGLD" && this.state.send_amount <= this.props.egld_balance) {
            //     this.setState({ egld_approve_stake: "processing" })
            //     await this.props.approveEGLD(this.state.loggedAddress, this.state.send_amount, "stake")

            // }

            else if (this.state.selectedStake == "BUSD" && this.state.send_amount <= this.props.busd_balance) {
                console.log("stake value:::", this.state.send_amount)
                console.log("valvalval:", this.props.busd_balance)
                this.setState({ busd_approve_stake: "processing" })
                await this.props.approveBUSD(this.state.loggedAddress, this.state.send_amount, "stake")

            }




            else {
                toast.configure();
                toast("Passed amount is greater than existing Balance.", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "fail",
                    autoClose: 5000,
                    toastId: 1,
                });
            }

    }





    swap = async () => {
        //  console.log("selectValueZap:::",this.state.selectValueZap)





        if (this.state.selectValueZap == "DAI" && this.state.send_amount <= this.props.dai_balance) {
            this.setState({ dai_approve_swap: "processing" })
            await this.props.approveDAI(this.state.loggedAddress, this.state.send_amount, "swap")
        }



        else if (this.state.selectValueZap == "USDT" && this.state.send_amount <= this.props.usdt_balance) {
            console.log("swap value:::", this.state.send_amount)
            console.log("valvalval:", this.props.usdt_balance)
            this.setState({ usdt_approve_swap: "processing" })
            await this.props.approveUSDT(this.state.loggedAddress, this.state.send_amount, "swap")

        }


        else if (this.state.selectValueZap == "GFX" && this.state.send_amount <= this.props.gfx_balance) {
            this.setState({ gfx_approve_swap: "processing" })
            await this.props.approveGFX(this.state.loggedAddress, this.state.send_amount, "swap")

        }


        else if (this.state.selectValueZap == "USDC" && this.state.send_amount <= this.props.usdc_balance) {
            this.setState({ usdc_approve_swap: "processing" })
            await this.props.approveUSDC(this.state.loggedAddress, this.state.send_amount, "swap")

        }

        // else if (this.state.selectValueZap == "GLD" && this.state.send_amount <= this.props.gld_balance) {
        //     this.setState({ gld_approve_swap: "processing" })
        //     await this.props.approveGLD(this.state.loggedAddress, this.state.send_amount, "swap")

        // }

        // else if (this.state.selectValueZap == "EGLD" && this.state.send_amount <= this.props.egld_balance) {
        //     this.setState({ egld_approve_swap: "processing" })
        //     await this.props.approveEGLD(this.state.loggedAddress, this.state.send_amount, "swap")

        // }
       
        else if (this.state.selectValueZap == "BUSD" && this.state.send_amount <= this.props.busd_balance) {
            console.log("swap value:::", this.state.send_amount)
            console.log("valvalval:", this.props.busd_balance)
            this.setState({ busd_approve_swap: "processing" })
            await this.props.approveBUSD(this.state.loggedAddress, this.state.send_amount, "swap")

        }

        else {
            toast.configure();
            toast("Passed amount is greater than existing Balance.", {
                position: toast.POSITION.TOP_RIGHT,
                className: "fail",
                autoClose: 5000,
                toastId: 1,
            });
        }

    }



    async openTransactionHistory() {


        console.log("openTransactionHistory.......", this.state.selectValue)
        document.getElementById("transaction-history-popup").style.height = "100vh";
        document.getElementById("main-page").style.marginTop = "-100vh";
    }

    closeTransactionHistory() {
        document.getElementById("transaction-history-popup").style.height = "0";
        document.getElementById("main-page").style.marginTop = "0";
    }


    // Tp active clicked button, & deactive other ones
    setPercentageValue = async (e, value) => {
        console.log(" value:", this.state.selectValueZap)
        var amount ;
        if (this.state.selectValueZap == "DAI")
            amount = Math.round(this.props.dai_balance)
        else if (this.state.selectValueZap == "USDT")
            amount = Math.round(this.props.usdt_balance)
        else if (this.state.selectValueZap == "USDC")
            amount = Math.round(this.props.usdc_balance)
        else if (this.state.selectValueZap == "GFX")
            amount = Math.round(this.props.gfx_balance)
        else if (this.state.selectValueZap == "BUSD")
            amount = Math.round(this.props.busd_balance)


        console.log("selected_percentage::::",e)

        if (e == '25') {
            this.setState({ send_amount: amount / 100 * 25, onchangeSendAmount: false, selected_percentage: e, active: true, active1: false, active2: false, active3: false })
        }
        else if (e == '50') {
            this.setState({ send_amount: amount / 100 * 50, onchangeSendAmount: false, selected_percentage: e, active: false, active1: true, active2: false, active3: false })
        }
        else if (e == '75') {
            this.setState({ send_amount: amount / 100 * 75, onchangeSendAmount: false, selected_percentage: e, active: false, active1: false, active2: true, active3: false })
        }
        else if (e == '100') {
            this.setState({ send_amount: amount, onchangeSendAmount: false, selected_percentage: e, active: false, active1: false, active2: false, active3: true})
        }
        else {

        }

    }

    //for Transaction history drop down
    handleChange = async (e) => {
        console.log(e.target)
        await this.setState({ selectValue: e.target.value });


    }


    SendAmountChange = async (e) => {
        console.log("Math.round(e.target.value):",Math.round(e.target.value))
        await this.setState({ onchangeSendAmount: true, send_amount:   e.target.value === "" ? "" : Math.round(e.target.value), active: false, active1: false, active2: false, active3: false });


    }


    //for Zap drop down
    handleChangeZap = async (e) => {
        console.log(e.target)
        await this.setState({ selectValueZap: e.target.value });
        // console.log(".......", this.state.active)

    }






    async componentWillReceiveProps(nextProps) {
        console.log('MY NEXT PROPS: ', this.props.usdt_claim)

        // if (nextProps.eth_balance !== this.props.eth_balance) {
        //     this.setState({
        //         ETH_balance: nextProps.eth_balance,
        //         ETH_25: nextProps.eth_balance / 100 * 25,
        //         ETH_50: nextProps.eth_balance / 100 * 50,
        //         ETH_75: nextProps.eth_balance / 100 * 75,
        //         ETH_100: nextProps.eth_balance / 100 * 100,
        //     });

        // }

        if (nextProps.usdt_balance !== this.props.usdt_balance) {
            this.setState({
                USDT_balance: nextProps.usdt_balance,
                USDT_25: nextProps.usdt_balance / 100 * 25,
                USDT_50: nextProps.usdt_balance / 100 * 50,
                USDT_75: nextProps.usdt_balance / 100 * 75,
                USDT_100: nextProps.usdt_balance / 100 * 100,
            });
        }


        if (nextProps.busd_balance !== this.props.busd_balance) {
            this.setState({
                BUSD_balance: nextProps.busd_balance,
                BUSD_25: nextProps.busd_balance / 100 * 25,
                BUSD_50: nextProps.busd_balance / 100 * 50,
                BUSD_75: nextProps.busd_balance / 100 * 75,
                BUSD_100: nextProps.busd_balance / 100 * 100,
            });
        }

        if (nextProps.usdc_balance !== this.props.usdc_balance) {
            this.setState({
                USDC_balance: nextProps.usdc_balance,
                USDC_25: nextProps.usdc_balance / 100 * 25,
                USDC_50: nextProps.usdc_balance / 100 * 50,
                USDC_75: nextProps.usdc_balance / 100 * 75,
                USDC_100: nextProps.usdc_balance / 100 * 100,
            });
        }



        if (nextProps.dai_balance !== this.props.dai_balance) {
            this.setState({
                DAI_balance: nextProps.dai_balance,
                DAI_25: nextProps.dai_balance / 100 * 25,
                DAI_50: nextProps.dai_balance / 100 * 50,
                DAI_75: nextProps.dai_balance / 100 * 75,
                DAI_100: nextProps.dai_balance / 100 * 100,
            });
        }



        // if (nextProps.eth_history !== this.props.eth_history) {
        //     var obj = [];
        //     nextProps.eth_history.data.forEach(item => {
        //         obj.push(item)
        //     })

        //     this.setState({ eth_history: obj });
        //     console.log("state History...:", this.state.eth_history)
        // }


        // if (nextProps.tusd_history !== this.props.tusd_history) {
        //     var Tusdobj = [];
        //     nextProps.tusd_history.data.forEach(item => {
        //         Tusdobj.push(item)
        //     })

        //     this.setState({ tusd_history: Tusdobj });
        //     console.log("tusd state History...:", this.state.tusd_history)
        // }


        if (nextProps.busd_history !== this.props.busd_history) {
            var Busdobj = [];
            nextProps.busd_history.data.forEach(item => {
                Busdobj.push(item)
            })

            this.setState({ busd_history: Busdobj });
            console.log("busd state History...:", this.state.busd_history)
        }



        if (nextProps.usdt_history !== this.props.usdt_history) {
            var Usdtobj = [];
            nextProps.usdt_history.data.forEach(item => {
                Usdtobj.push(item)
            })

            this.setState({ usdt_history: Usdtobj });
            console.log("usdt state History...:", this.state.usdt_history)
        }




        //////////////////usdt//////////////////

        if (nextProps.usdt_stake_balance !== this.props.usdt_stake_balance) {
            this.setState({ usdt_txn_log: nextProps.usdt_stake_balance })

        }

        if (nextProps.usdt_stake_reward !== this.props.usdt_stake_reward) {
            this.setState({ usdt_txn_log_reward: nextProps.usdt_stake_reward })

        }



        if (nextProps.usdt_approve !== this.props.usdt_approve) {

            if (nextProps.usdt_approve.status == true) {
                console.log("nextProps.usdt_approve:", nextProps.usdt_approve)
                if (nextProps.usdt_approve.type == "swap") {
                    this.setState({ usdt_swap: 'processing' })
                    this.props.swapUSDT(this.state.loggedAddress, this.state.send_amount)
                    //  this.setState({ usdt_approve_swap: nextProps.usdt_approve });

                } else if (nextProps.usdt_approve.type == "stake") {
                    this.setState({ usdt_stake: 'processing' })
                    this.props.stakeUSDT(this.state.loggedAddress, this.state.send_amount)
                    console.log("nextProps.usdt_stake:", nextProps.usdt_stake)
                    //    this.setState({ usdt_approve_stake: nextProps.usdt_approve });

                }

            }

            this.setState({ usdt_approve_swap: nextProps.usdt_approve, usdt_approve_stake: nextProps.usdt_approve });
            console.log("usdt state History...:", this.state.usdt_approve)
        }


        if (nextProps.usdt_swap !== this.props.usdt_swap) {
            this.setState({ usdt_swap: nextProps.usdt_swap })
        }
        // if (nextProps.usdt_stake !== this.props.usdt_stake) {
        //     const add = await setAddress()
        //     await this.props.getUSDTReward(add)

        //     await this.props.stakingInfoUSDT(add)
        //     await this.props.getTotalRewardUSDT(add)
        //     await this.props. getTotalStackedBalanceUSDT(add)
        //     this.setState({ usdt_stake: nextProps.usdt_stake })
        // }




        if (nextProps.usdt_claim != undefined)
            if (nextProps.usdt_claim == true || this.props.usdt_claim.toString().substring(0, 8) == 'rejected' || nextProps.usdt_claim.toString().substring(0, 8) == 'rejected') {

                this.setState({ usdt_claim_index: -1 })
                console.log("nextProps.usdt_claim:::", nextProps.usdt_claim)
            }

        if (nextProps.usdt_unstake != undefined)
            if (nextProps.usdt_unstake == true || this.props.usdt_unstake.toString().substring(0, 8) == 'rejected' || nextProps.usdt_unstake.toString().substring(0, 8) == 'rejected') {

                this.setState({ usdt_unStake_index: -1 })
                console.log("nextProps.usdt_unstake:::", nextProps.usdt_unstake)
            }

        if (nextProps.usdt_stake !== this.props.usdt_stake || nextProps.usdt_claim !== this.props.usdt_claim || nextProps.usdt_unstake !== this.props.usdt_unstake || nextProps.usdt_exit !== this.props.usdt_exit) {
            const add = await setAddress()

            console.log("nextProps.usdt_stake::::", nextProps.usdt_stake)
            await this.props.getUSDTReward(add)
            await this.props.stakingInfoUSDT(add)
            await this.props.getTotalRewardUSDT(add)
            await this.props.getTotalStackedBalanceUSDT(add)
            this.setState({ usdt_stake: nextProps.usdt_stake, "exit_called": false })



        }


        if (this.props.usdt_exit.toString().substring(0, 8) == 'rejected') {
            this.setState({ "exit_called": false })
        }


        //////////////////////////BUSD//////////////////////////////////////////////
        if (nextProps.busd_stake_balance !== this.props.busd_stake_balance) {
            this.setState({ busd_txn_log: nextProps.busd_stake_balance })

        }

        if (nextProps.busd_stake_reward !== this.props.busd_stake_reward) {
            this.setState({ busd_txn_log_reward: nextProps.busd_stake_reward })

        }



        if (nextProps.busd_approve !== this.props.busd_approve) {

            if (nextProps.busd_approve.status == true) {
                console.log("nextProps.busd_approve:", nextProps.busd_approve)
                if (nextProps.busd_approve.type == "swap") {
                    this.setState({ busd_swap: 'processing' })
                    this.props.swapBUSD(this.state.loggedAddress, this.state.send_amount)
                    //  this.setState({ usdt_approve_swap: nextProps.usdt_approve });

                } else if (nextProps.busd_approve.type == "stake") {
                    this.setState({ busd_stake: 'processing' })
                    this.props.stakeBUSD(this.state.loggedAddress, this.state.send_amount)
                    console.log("nextProps.busd_stake:", nextProps.busd_stake)
                    //    this.setState({ usdt_approve_stake: nextProps.usdt_approve });

                }

            }

            this.setState({ busd_approve_swap: nextProps.busd_approve, busd_approve_stake: nextProps.busd_approve });
            console.log("busd state History...:", this.state.busd_approve)
        }


        if (nextProps.busd_swap !== this.props.busd_swap) {
            this.setState({ busd_swap: nextProps.busd_swap })
        }
        // if (nextProps.usdt_stake !== this.props.usdt_stake) {
        //     const add = await setAddress()
        //     await this.props.getUSDTReward(add)

        //     await this.props.stakingInfoUSDT(add)
        //     await this.props.getTotalRewardUSDT(add)
        //     await this.props. getTotalStackedBalanceUSDT(add)
        //     this.setState({ usdt_stake: nextProps.usdt_stake })
        // }




        if (nextProps.busd_claim != undefined)
            if (nextProps.busd_claim == true || this.props.busd_claim.toString().substring(0, 8) == 'rejected' || nextProps.busd_claim.toString().substring(0, 8) == 'rejected') {

                this.setState({ busd_claim_index: -1 })
                console.log("nextProps.busd_claim:::", nextProps.busd_claim)
            }

        if (nextProps.busd_unstake != undefined)
            if (nextProps.busd_unstake == true || this.props.busd_unstake.toString().substring(0, 8) == 'rejected' || nextProps.busd_unstake.toString().substring(0, 8) == 'rejected') {

                this.setState({ busd_unStake_index: -1 })
                console.log("nextProps.busd_unstake:::", nextProps.busd_unstake)
            }

        if (nextProps.busd_stake !== this.props.busd_stake || nextProps.busd_claim !== this.props.busd_claim || nextProps.busd_unstake !== this.props.busd_unstake || nextProps.busd_exit !== this.props.busd_exit) {
            const add = await setAddress()

            console.log("nextProps.busd_stake::::", nextProps.busd_stake)
            await this.props.getBUSDReward(add)
            await this.props.stakingInfoBUSD(add)
            await this.props.getTotalRewardBUSD(add)
            await this.props.getTotalStackedBalanceBUSD(add)
            this.setState({ busd_stake: nextProps.busd_stake, "exit_called": false })



        }


       
        if (this.props.busd_exit.toString().substring(0, 8) == 'rejected') {
            this.setState({ "exit_called": false })
        }




        ////////////////////dai////////////////////////////////////////////////
        if (nextProps.dai_history !== this.props.dai_history) {
            var Daiobj = [];
            console.log("nextProps.dai_history:", nextProps.dai_history.data)
            nextProps.dai_history.data.forEach(item => {
                Daiobj.push(item)
            })

            this.setState({ dai_history: Daiobj });
            console.log("tusd state History...:", this.state.dai_history)
        }

        if (nextProps.dai_approve !== this.props.dai_approve) {

            if (nextProps.dai_approve.status == true) {
                console.log("nextProps.dai_approve:", nextProps.dai_approve)
                if (nextProps.dai_approve.type == "swap") {
                    this.setState({ dai_swap: 'processing' })
                    this.props.swapDAI(this.state.loggedAddress, this.state.send_amount)
                    console.log("approve_loader:", this.state.approve_loader)


                } else if (nextProps.dai_approve.type == "stake") {
                    this.setState({ dai_stake: 'processing' })
                    this.props.stakeDAI(this.state.loggedAddress, this.state.send_amount)
                    console.log("nextProps.dai_stake:", nextProps.dai_stake)


                }

            }



            // if (nextProps.dai_approve == true) {
            //     this.setState({ dai_swap: 'processing' })
            //     this.props.swapDAI(this.state.loggedAddress, this.state.send_amount)
            // } this.setState({ dai_approve_stake: nextProps.dai_approve });
            this.setState({ dai_approve_swap: nextProps.dai_approve, dai_approve_stake: nextProps.dai_approve });
            console.log("dai approve swap ...:", nextProps.dai_approve)
        }

        if (nextProps.dai_swap !== this.props.dai_swap) {
            this.setState({ dai_swap: nextProps.dai_swap })
        }


        // if (nextProps.dai_stake !== this.props.dai_stake) {
        //     const add = await setAddress()
        //     await this.props.getDAIReward(add)

        //     await this.props.stakingInfoDAI(add)
        //     await this.props.getTotalRewardDAI(add)
        //     await this.props. getTotalStackedBalanceDAI(add)
        //     this.setState({ dai_stake: nextProps.dai_stake })
        // }



        if (nextProps.dai_claim != undefined)
            if (nextProps.dai_claim == true || this.props.dai_claim.toString().substring(0, 8) == 'rejected' || nextProps.dai_claim.toString().substring(0, 8) == 'rejected') {

                this.setState({ dai_claim_index: -1 })
                console.log("nextProps.dai_claim:::", nextProps.dai_claim)
            }

        if (nextProps.dai_unstake != undefined)
            if (nextProps.dai_unstake == true || this.props.dai_unstake.toString().substring(0, 8) == 'rejected' || nextProps.dai_unstake.toString().substring(0, 8) == 'rejected') {

                this.setState({ dai_unStake_index: -1 })
                console.log("nextProps.dai_unstake:::", nextProps.dai_unstake)
            }


        if (nextProps.dai_stake_balance !== this.props.dai_stake_balance) {
            this.setState({ dai_txn_log: nextProps.dai_stake_balance })

        }

        if (nextProps.dai_stake_reward !== this.props.dai_stake_reward) {
            this.setState({ dai_txn_log_reward: nextProps.dai_stake_reward })

        }

        if (nextProps.dai_stake !== this.props.dai_stake || nextProps.dai_claim !== this.props.dai_claim || nextProps.dai_unstake !== this.props.dai_unstake || nextProps.dai_exit !== this.props.dai_exit) {
            const add = await setAddress()

            console.log("dai_calim::::", nextProps.dai_claim)
            await this.props.getDAIReward(add)

            await this.props.stakingInfoDAI(add)
            await this.props.getTotalRewardDAI(add)
            await this.props.getTotalStackedBalanceDAI(add)
            this.setState({ dai_stake: nextProps.dai_stake, exit_called: false })

        }

        if (this.props.dai_exit.toString().substring(0, 8) == 'rejected') {
            this.setState({ "exit_called": false })
        }
        ////////////////////USDC///////////////////////////

        if (nextProps.usdc_history !== this.props.usdc_history) {
            var Usdcobj = [];
            nextProps.usdc_history.data.forEach(item => {
                Usdcobj.push(item)
            })

            this.setState({ usdc_history: Usdcobj });
            console.log("usdc state History...:", this.state.usdc_history)
        }


        if (nextProps.usdc_approve !== this.props.usdc_approve) {

            if (nextProps.usdc_approve.status == true) {
                console.log("nextProps.usdc_approve:", nextProps.usdc_approve)
                if (nextProps.usdc_approve.type == "swap") {
                    this.setState({ usdc_swap: 'processing' })
                    this.props.swapUSDC(this.state.loggedAddress, this.state.send_amount)
                    //   this.setState({ usdc_approve_swap: nextProps.usdc_approve });

                } else if (nextProps.usdc_approve.type == "stake") {
                    this.setState({ usdc_stake: 'processing' })
                    this.props.stakeUSDC(this.state.loggedAddress, this.state.send_amount)
                    console.log("nextProps.usdc_stake:", nextProps.usdc_stake)
                    //  this.setState({ usdc_approve_stake: nextProps.usdc_approve });

                }

            }



            // if (nextProps.dai_approve == true) {
            //     this.setState({ dai_swap: 'processing' })
            //     this.props.swapDAI(this.state.loggedAddress, this.state.send_amount)
            // }
            this.setState({ usdc_approve_swap: nextProps.usdc_approve, usdc_approve_stake: nextProps.usdc_approve });
            console.log("usdc state History...:", this.state.usdc_approve)
        }

        if (nextProps.usdc_swap !== this.props.usdc_swap) {
            this.setState({ usdc_swap: nextProps.usdc_swap })
        }

        // if (nextProps.usdc_stake !== this.props.usdc_stake) {
        //     const add = await setAddress()
        //     await this.props.getUSDCReward(add)

        //     await this.props.stakingInfoUSDC(add)
        //     await this.props.getTotalRewardUSDC(add)
        //     await this.props. getTotalStackedBalanceUSDC(add)
        //     this.setState({ usdc_stake: nextProps.usdc_stake })
        // }




        if (nextProps.usdc_claim != undefined){
            console.log("nextProps.usdc_claim.toString().substring(0, 4)::",nextProps.usdc_claim.toString())
            if (nextProps.usdc_claim.toString().substring(0, 4) == "true") {
                console.log("aqeel.....")
                const add = await setAddress()
                // await this.props.getUSDCReward(add)
                // await this.props.getTotalRewardUSDC(add)
                // await this.props. getTotalStackedBalanceUSDC(add)
                await this.props.getUSDCReward(add)
                //  await this.props.getTotalRewardUSDC(add)
                // await this.props.getTotalRewardInMemoryUSDC(add)
                this.setState({ usdc_claim_index: -1 })

                console.log("nextProps.usdc_claim:::", nextProps.usdc_claim)
            } else if (nextProps.usdc_claim.toString().substring(0, 8) == 'rejected') {
                this.setState({ usdc_claim_index: -1 })

            }
        }


        if (nextProps.usdc_unstake != undefined)
            if (nextProps.usdc_unstake == true ) {
                const add = await setAddress()
                // await this.props.getUSDCReward(add)
                // await this.props.getTotalRewardUSDC(add)
                // await this.props. getTotalStackedBalanceUSDC(add)
                this.setState({ usdc_unStake_index: -1 })
                // await this.props.getUSDCReward(add)
                await this.props.getTotalRewardUSDC(add)
                await this.props.getTotalRewardInMemoryUSDC(add)


                // await this.props. getTotalStackedBalanceUSDC(add)

                console.log("nextProps.usdc_unstake:::", nextProps.usdc_unstake)
            } else if (nextProps.usdc_unstake.toString().substring(0, 8) == 'rejected') {
                this.setState({ usdc_unStake_index: -1 })

            }


        if (nextProps.usdc_stake_balance !== this.props.usdc_stake_balance) {
            this.setState({ usdc_txn_log: nextProps.usdc_stake_balance })

        }

        if (nextProps.usdc_stake_reward !== this.props.usdc_stake_reward) {
            this.setState({ usdc_txn_log_reward: nextProps.usdc_stake_reward })

        }

        //|| nextProps.usdc_unstake !== this.props.usdc_unstake
        //  || nextProps.usdc_claim !== this.props.usdc_claim
        if (nextProps.usdc_stake !== this.props.usdc_stake ) {
            const add = await setAddress()

            //    console.log("usdc_calim::::", nextProps.usdc_claim)


            await this.props.stakingInfoUSDC(add)
            // await this.props.getUSDCReward(add)
            await this.props.getTotalRewardUSDC(add)
            await this.props.getTotalStackedBalanceUSDC(add)
            this.setState({ usdc_stake: nextProps.usdc_stake})

        }


        if(nextProps.usdc_exit !== this.props.usdc_exit){
            const add = await setAddress()

            await this.props.stakingInfoUSDC(add)
            // await this.props.getUSDCReward(add)
            await this.props.getTotalRewardUSDC(add)
            await this.props.getTotalStackedBalanceUSDC(add)
            this.setState({"exit_called": false })
        }

        if (this.props.usdc_exit.toString().substring(0, 8) == 'rejected') {
            this.setState({ "exit_called": false })
        }

        //////////////GFX/////////////////////
        if (nextProps.gfx_balance !== this.props.gfx_balance) {
            this.setState({
                GFX_balance: nextProps.gfx_balance,
                GFX_25: nextProps.gfx_balance / 100 * 25,
                GFX_50: nextProps.gfx_balance / 100 * 50,
                GFX_75: nextProps.gfx_balance / 100 * 75,
                GFX_100: nextProps.gfx_balance / 100 * 100,
            });
        }

        if (nextProps.gfx_history !== this.props.gfx_history) {
            var Gfxobj = [];
            nextProps.gfx_history.data.forEach(item => {
                Gfxobj.push(item)
            })

            this.setState({ gfx_history: Gfxobj });
            console.log("gfx state History...:", this.state.gfx_history)
        }

        if (nextProps.gfx_approve !== this.props.gfx_approve) {

            if (nextProps.gfx_approve.status == true) {
                console.log("nextProps.gfx_approve:", nextProps.gfx_approve)
                if (nextProps.gfx_approve.type == "swap") {
                    this.setState({ gfx_swap: 'processing' })
                    this.props.swapGFX(this.state.loggedAddress, this.state.send_amount)
                    //   this.setState({ gfx_approve_swap: nextProps.gfx_approve });

                } else if (nextProps.gfx_approve.type == "stake") {
                    this.setState({ gfx_stake: 'processing' })
                    this.props.stakeGFX(this.state.loggedAddress, this.state.send_amount)
                    console.log("nextProps.gfx_stake:", nextProps.gfx_stake)
                    //    this.setState({ gfx_approve_stake: nextProps.gfx_approve });

                }

            }



            // if (nextProps.dai_approve == true) {
            //     this.setState({ dai_swap: 'processing' })
            //     this.props.swapDAI(this.state.loggedAddress, this.state.send_amount)
            // }
            this.setState({ gfx_approve_swap: nextProps.gfx_approve, gfx_approve_stake: nextProps.gfx_approve });
            console.log("gfx state History...:", this.state.gfx_approve)
        }

        if (nextProps.gfx_swap !== this.props.gfx_swap) {
            this.setState({ gfx_swap: nextProps.gfx_swap })
        }


        // if (nextProps.dai_stake !== this.props.dai_stake) {
        //     const add = await setAddress()
        //     await this.props.getDAIReward(add)

        //     await this.props.stakingInfoDAI(add)
        //     await this.props.getTotalRewardDAI(add)
        //     await this.props. getTotalStackedBalanceDAI(add)
        //     this.setState({ dai_stake: nextProps.dai_stake })
        // }



        if (nextProps.gfx_claim != undefined)
            if (nextProps.gfx_claim == true || this.props.gfx_claim.toString().substring(0, 8) == 'rejected' || nextProps.gfx_claim.toString().substring(0, 8) == 'rejected') {

                this.setState({ gfx_claim_index: -1 })
                console.log("nextProps.gfx_claim:::", nextProps.gfx_claim)
            }

        if (nextProps.gfx_unstake != undefined)
            if (nextProps.gfx_unstake == true || this.props.gfx_unstake.toString().substring(0, 8) == 'rejected' || nextProps.gfx_unstake.toString().substring(0, 8) == 'rejected') {

                this.setState({ gfx_unStake_index: -1 })
                console.log("nextProps.gfx_unstake:::", nextProps.gfx_unstake)
            }


        if (nextProps.gfx_stake_balance !== this.props.gfx_stake_balance) {
            this.setState({ gfx_txn_log: nextProps.gfx_stake_balance })

        }

        if (nextProps.gfx_stake_reward !== this.props.gfx_stake_reward) {
            this.setState({ gfx_txn_log_reward: nextProps.gfx_stake_reward })

        }

        if (nextProps.gfx_stake !== this.props.gfx_stake || nextProps.gfx_claim !== this.props.gfx_claim || nextProps.gfx_unstake !== this.props.gfx_unstake || nextProps.gfx_exit !== this.props.gfx_exit) {
            const add = await setAddress()

            console.log("gfx_calim::::", nextProps.gfx_claim)
            await this.props.getGFXReward(add)

            await this.props.stakingInfoGFX(add)
            await this.props.getTotalRewardGFX(add)
            await this.props.getTotalStackedBalanceGFX(add)
            this.setState({ gfx_stake: nextProps.gfx_stake, exit_called: false })

        }

        if (this.props.gfx_exit.toString().substring(0, 8) == 'rejected') {
            this.setState({ "exit_called": false })
        }








        //////////////GLD/////////////////////
        // if (nextProps.gld_balance !== this.props.gld_balance) {
        //     this.setState({
        //         GLD_balance: nextProps.gld_balance,
        //         GLD_25: nextProps.gld_balance / 100 * 25,
        //         GLD_50: nextProps.gld_balance / 100 * 50,
        //         GLD_75: nextProps.gld_balance / 100 * 75,
        //         GLD_100: nextProps.gld_balance / 100 * 100,
        //     });
        // }

        // if (nextProps.gld_history !== this.props.gld_history) {
        //     var Gldobj = [];
        //     nextProps.gld_history.data.forEach(item => {
        //         Gldobj.push(item)
        //     })

        //     this.setState({ gld_history: Gldobj });
        //     console.log("gld state History...:", nextProps.gld_history)
        // }

        // if (nextProps.gld_approve !== this.props.gld_approve) {

        //     if (nextProps.gld_approve.status == true) {
        //         console.log("nextProps.gld_approve:", nextProps.gld_approve)
        //         if (nextProps.gld_approve.type == "swap") {
        //             this.setState({ gld_swap: 'processing' })
        //             this.props.swapGLD(this.state.loggedAddress, this.state.send_amount)
        //             //  this.setState({ gld_approve_swap: nextProps.gld_approve });

        //         } else if (nextProps.gld_approve.type == "stake") {
        //             this.setState({ gld_stake: 'processing' })
        //             this.props.stakeGLD(this.state.loggedAddress, this.state.send_amount)
        //             console.log("nextProps.gld_stake:", nextProps.gld_stake)
        //             //  this.setState({ gld_approve_stake: nextProps.gld_approve });

        //         }

        //     }



        //     // if (nextProps.dai_approve == true) {
        //     //     this.setState({ dai_swap: 'processing' })
        //     //     this.props.swapDAI(this.state.loggedAddress, this.state.send_amount)
        //     // }
        //     this.setState({ gld_approve_swap: nextProps.gld_approve, gld_approve_stake: nextProps.gld_approve });


        //     console.log("gld state History...:", this.state.gld_approve)
        // }

        // if (nextProps.gld_swap !== this.props.gld_swap) {
        //     this.setState({ gld_swap: nextProps.gld_swap })
        // }


        // if (nextProps.dai_stake !== this.props.dai_stake) {
        //     const add = await setAddress()
        //     await this.props.getDAIReward(add)

        //     await this.props.stakingInfoDAI(add)
        //     await this.props.getTotalRewardDAI(add)
        //     await this.props. getTotalStackedBalanceDAI(add)
        //     this.setState({ dai_stake: nextProps.dai_stake })
        // }



        // if (nextProps.gld_claim != undefined)
        //     if (nextProps.gld_claim == true || this.props.gld_claim.toString().substring(0, 8) == 'rejected' || nextProps.gld_claim.toString().substring(0, 8) == 'rejected') {

        //         this.setState({ gld_claim_index: -1 })
        //         console.log("nextProps.gld_claim:::", nextProps.gld_claim)
        //     }

        // if (nextProps.gld_unstake != undefined)
        //     if (nextProps.gld_unstake == true || this.props.gld_unstake.toString().substring(0, 8) == 'rejected' || nextProps.gld_unstake.toString().substring(0, 8) == 'rejected') {

        //         this.setState({ gld_unStake_index: -1 })
        //         console.log("nextProps.gld_unstake:::", nextProps.gld_unstake)
        //     }


        // if (nextProps.gld_stake_balance !== this.props.gld_stake_balance) {
        //     this.setState({ gld_txn_log: nextProps.gld_stake_balance })

        // }

        // if (nextProps.gld_stake_reward !== this.props.gld_stake_reward) {
        //     this.setState({ gld_txn_log_reward: nextProps.gld_stake_reward })

        // }

        // if (nextProps.gld_stake !== this.props.gld_stake || nextProps.gld_claim !== this.props.gld_claim || nextProps.gld_unstake !== this.props.gld_unstake || nextProps.gld_exit !== this.props.gld_exit) {
        //     const add = await setAddress()

        //     console.log("gld_calim::::", nextProps.gld_claim)
        //     await this.props.getGLDReward(add)

        //     await this.props.stakingInfoGLD(add)
        //     await this.props.getTotalRewardGLD(add)
        //     await this.props.getTotalStackedBalanceGLD(add)
        //     this.setState({ gld_stake: nextProps.gld_stake, exit_called: false })

        // }


        // if (this.props.gld_exit.toString().substring(0, 8) == 'rejected') {
        //     this.setState({ "exit_called": false })
        // }






        //////////////EGLD/////////////////////
        // if (nextProps.egld_balance !== this.props.egld_balance) {
        //     this.setState({
        //         EGLD_balance: nextProps.egld_balance,
        //         EGLD_25: nextProps.egld_balance / 100 * 25,
        //         EGLD_50: nextProps.egld_balance / 100 * 50,
        //         EGLD_75: nextProps.egld_balance / 100 * 75,
        //         EGLD_100: nextProps.egld_balance / 100 * 100,
        //     });
        // }

        // if (nextProps.egld_history !== this.props.egld_history) {
        //     var EGldobj = [];
        //     nextProps.egld_history.data.forEach(item => {
        //         EGldobj.push(item)
        //     })

        //     this.setState({ egld_history: EGldobj });
        //     console.log("gld state History...:", this.state.egld_history)
        // }

        // if (nextProps.egld_approve !== this.props.egld_approve) {

        //     if (nextProps.egld_approve.status == true) {
        //         console.log("nextProps.egld_approve:", nextProps.egld_approve)
        //         if (nextProps.egld_approve.type == "swap") {
        //             this.setState({ egld_swap: 'processing' })
        //             this.props.swapEGLD(this.state.loggedAddress, this.state.send_amount)
        //             // this.setState({ egld_approve_swap: nextProps.egld_approve });

        //         } else if (nextProps.egld_approve.type == "stake") {
        //             this.setState({ egld_stake: 'processing' })
        //             this.props.stakeEGLD(this.state.loggedAddress, this.state.send_amount)
        //             console.log("nextProps.egld_stake:", nextProps.egld_stake)
        //             //  this.setState({ egld_approve_stake: nextProps.egld_approve });

        //         }

        //     }



        //     // if (nextProps.dai_approve == true) {
        //     //     this.setState({ dai_swap: 'processing' })
        //     //     this.props.swapDAI(this.state.loggedAddress, this.state.send_amount)
        //     // }
        //     this.setState({ egld_approve_swap: nextProps.egld_approve, egld_approve_stake: nextProps.egld_approve });

        //     console.log("egld state History...:", this.state.egld_approve)
        // }

        // if (nextProps.egld_swap !== this.props.egld_swap) {
        //     this.setState({ egld_swap: nextProps.egld_swap })
        // }


        // // if (nextProps.dai_stake !== this.props.dai_stake) {
        // //     const add = await setAddress()
        // //     await this.props.getDAIReward(add)

        // //     await this.props.stakingInfoDAI(add)
        // //     await this.props.getTotalRewardDAI(add)
        // //     await this.props. getTotalStackedBalanceDAI(add)
        // //     this.setState({ dai_stake: nextProps.dai_stake })
        // // }




        // if (nextProps.egld_claim != undefined)
        //     if (nextProps.egld_claim == true || this.props.egld_claim.toString().substring(0, 8) == 'rejected' || nextProps.egld_claim.toString().substring(0, 8) == 'rejected') {

        //         this.setState({ egld_claim_index: -1 })
        //         console.log("nextProps.egld_claim:::", nextProps.egld_claim)
        //     }

        // if (nextProps.egld_unstake != undefined)
        //     if (nextProps.egld_unstake == true || this.props.egld_unstake.toString().substring(0, 8) == 'rejected' || nextProps.egld_unstake.toString().substring(0, 8) == 'rejected') {

        //         this.setState({ egld_unStake_index: -1 })
        //         console.log("nextProps.egld_unstake:::", nextProps.egld_unstake)
        //     }


        // if (nextProps.egld_stake_balance !== this.props.egld_stake_balance) {
        //     this.setState({ egld_txn_log: nextProps.egld_stake_balance })

        // }

        // if (nextProps.egld_stake_reward !== this.props.egld_stake_reward) {
        //     this.setState({ egld_txn_log_reward: nextProps.egld_stake_reward })

        // }

        // if (nextProps.egld_stake !== this.props.egld_stake || nextProps.egld_claim !== this.props.egld_claim || nextProps.egld_unstake !== this.props.egld_unstake || nextProps.egld_exit !== this.props.egld_exit) {
        //     const add = await setAddress()

        //     console.log("gld_calim::::", nextProps.egld_claim)
        //     await this.props.getEGLDReward(add)

        //     await this.props.stakingInfoEGLD(add)
        //     await this.props.getTotalRewardEGLD(add)
        //     await this.props.getTotalStackedBalanceEGLD(add)
        //     this.setState({ egld_stake: nextProps.egld_stake, exit_called: false })

        // }

        // if (this.props.egld_exit.toString().substring(0, 8) == 'rejected') {
        //     this.setState({ "exit_called": false })
        // }
    }



    componentDidMount = async () => {
        // console.log("usdt_clain componentDidMount::::", this.props.usdt_claim)
        const add = await setAddress()
        console.log("looged on with:", add)
        if (add) {
            this.setState({ loggedAddress: add })
            //await this.props.getUSDTStakeBalance(add)
            await this.props.getUSDTReward(add)
            await this.props.getDAIReward(add)
            await this.props.getUSDCReward(add)
            await this.props.getGFXReward(add)
            // await this.props.getGLDReward(add)
            // await this.props.getEGLDReward(add)
            await this.props.getBUSDReward(add)


            await this.props.getTotalRewardDAI(add)
            await this.props.getTotalStackedBalanceDAI(add)

            await this.props.getTotalRewardUSDT(add)
            await this.props.getTotalStackedBalanceUSDT(add)

            await this.props.getTotalRewardUSDC(add)
            await this.props.getTotalStackedBalanceUSDC(add)

            await this.props.getTotalRewardBUSD(add)
            await this.props.getTotalStackedBalanceBUSD(add)

            await this.props.getTotalRewardGFX(add)
            await this.props.getTotalStackedBalanceGFX(add)

            // await this.props.getTotalRewardGLD(add)
            // await this.props.getTotalStackedBalanceGLD(add)


            // await this.props.getTotalRewardEGLD(add)
            // await this.props.getTotalStackedBalanceEGLD(add)

            console.log("checkMetaMask:::", add)

            //  await this.props.getEthHistory(this.state.loggedAddress);
            // await this.props.getTUSDHistory(this.state.loggedAddress);
            await this.props.getUSDTHistory(add);
            await this.props.getUSDCHistory(add);
            await this.props.getDAIHistory(add);
            await this.props.getGFXHistory(add);
            // await this.props.getGLDHistory(add);
            // await this.props.getEGLDHistory(add);
            await this.props.getBUSDHistory(add);

            //  await this.props.getBUSDHistory(this.state.loggedAddress);
            //await this.props.approveUSDT(this.state.loggedAddress,1)
            // .then(async function(){
            //await this.props.stakeUSDT()
            // })


            await this.props.getETHBalance(this.state.loggedAddress);
            await this.props.getGFXBalance(this.state.loggedAddress);
            // await this.props.getTUSDBalance(this.state.loggedAddress);
            await this.props.getUSDTBalance(this.state.loggedAddress);
            await this.props.getUSDCBalance(this.state.loggedAddress);
            await this.props.getDAIBalance(this.state.loggedAddress);
            // await this.props.getGLDBalance(this.state.loggedAddress);
            // await this.props.getEGLDBalance(this.state.loggedAddress);
            await this.props.getBUSDBalance(this.state.loggedAddress);




            await this.props.getTotalRewardInMemoryUSDC(this.state.loggedAddress)
            await this.props.getTotalRewardInMemoryBUSD(this.state.loggedAddress)

            // Uncomment when added in smart contracts
            //  await this.props.getTotalRewardInMemoryUSDT(this.state.loggedAddress)

            //  await this.props.getTotalRewardInMemoryDAI(this.state.loggedAddress)

            //  await this.props.getTotalRewardInMemoryGFX(this.state.loggedAddress)

            //  await this.props.getTotalRewardInMemoryGLD(this.state.loggedAddress)
            //  await this.props.getTotalRewardInMemoryEGLD(this.state.loggedAddress)



            await this.props.getUSDTInterest(this.state.loggedAddress)
            await this.props.getUSDCInterest(this.state.loggedAddress)
            await this.props.getBUSDInterest(this.state.loggedAddress)
            await this.props.getDAIInterest(this.state.loggedAddress)
            await this.props.getGFXInterest(this.state.loggedAddress)
            // await this.props.getGLDInterest(this.state.loggedAddress)
            // await this.props.getEGLDInterest(this.state.loggedAddress)



        }
        else {
            console.log("checkMetaMask not coonnected")
            this.props.history.push("/")
        }
    };


    render() {
        let appl =  !this.state.active ?  "btn flex-fill FirstStep" : 'btn flex-fill FirstStep active'
        let appl1 = !this.state.active1 ? "btn flex-fill SecondStep" : 'btn flex-fill SecondStep active'
        let appl2 = !this.state.active2 ? "btn flex-fill ThirdStep" : 'btn flex-fill ThirdStep active'
        let appl3 = !this.state.active3 ? "btn flex-fill fourthStep" : 'btn flex-fill fourthStep active'

        //For All history display
        // var all_history = [];
        // // all_history.push(this.state.eth_history.data)
        // // all_history.push(this.state.tusd_history)
        // all_history.push(this.state.usdc_history)
        // all_history.push(this.state.usdt_history)
        // all_history.push(this.state.dai_history)
        // all_history.push(this.state.gfx_history)
        // console.log("all_history", all_history)

        console.log("dai+++",this.state.dai_history)
        const { multiTabs } = this.state;
        if (multiTabs) {
            return <PreventMultiTabs />;
        }
        return (
            <React.Fragment>
                {/* <loader /> */}
                <ReactTooltip />
                <div id="main-page" className="page earn-page">
                    <header className="px-4">
                        <div className="container-fluid">
                            <div className="d-flex justify-content-between align-items-center">
                                <a href={"/"}>
                                    <img className="img-fluid logo" src="assets/images/logo.png" alt="Logo" />
                                </a>
                                <nav className="services-tabs">
                                    <div className="nav nav-tabs" id="services-tab" role="tablist">
                                        <a className="nav-item nav-link" id="nav-earn-tab" data-toggle="tab" href="#nav-earn" role="tab" aria-controls="nav-earn" aria-selected="true">
                                            <span className="earn-icon" />
                                            <span className="title" onClick={this.loadTxnLog}>Earn</span>
                                        </a>
                                        <a className="nav-item nav-link active" id="nav-zap-tab" data-toggle="tab" href="#nav-zap" role="tab" aria-controls="nav-zap" aria-selected="false">
                                            <span className="zap-icon" />
                                            <span className="title">Zap</span>
                                        </a>

                                       
                                    </div>
                                </nav>
                                <a href="#" className="btn cstm-btn-addr">
                                    <span className="wolf-icon" />
                                    <span className="d-flex flex-column mr-4 text-left">
                                        <span>Connected</span>
                                        <span className="small">{this.state.loggedAddress}</span>
                                    </span>
                                    <span className="deactive-icon active-icon ml-2" />
                                </a>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="tab-content w-100" id="services-tabContent">
                                <div className="tab-pane fade" id="nav-earn" role="tabpanel" aria-labelledby="nav-earn-tab">
                                    <table className="table table-reponsive">
                                        <thead>
                                        <tr>
                                            <th>Cryptocurrency</th>
                                            <th>Interest Rate</th>
                                            <th >Available Balance</th>
                                            <th>Total Staked</th>
                                            <th colSpan={4}>Total Reward</th>

                                        </tr>
                                        </thead>
                                        <tbody>

<tr onClick={() => this.stakeModal('USDC')}>
    <td>
        <div className="d-flex align-items-center" >
            <div className="icon">
                <img className="img-fluid" src="assets/images/usdc.svg" alt="USDC icon" />
            </div>
            <div className="d-flex flex-column">
                <p className="title">usdc</p>
                <p className="description"><span className="text-uppercase">usd</span> Stablecoin</p>
            </div>
        </div>
    </td>
    <td>
    <p className="title">{typeof this.props.usdc_interest != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.usdc_interest.toString() / 1000000 }</p>
    </td>
    <td>
        <p className="title">{this.state.USDC_balance == "-" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.state.USDC_balance}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.usdc_total_staked_balance != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.usdc_total_staked_balance.toString() / 1000000}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.usdc_total_reward != "string"
            ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.usdc_total_reward.toString()/  10 ** 18 < this.props.usdc_total_reward_in_memory.toString() /  10 ** 18
                ? this.props.usdc_total_reward_in_memory.toString()/  10 ** 18 : this.props.usdc_total_reward.toString() /  10 ** 18}</p>
    </td>

    <td>
        <div className="arrow-icon" />
    </td>
</tr>

<tr onClick={() => this.stakeModal('BUSD')}>
    <td>
        <div className="d-flex align-items-center" >
            <div className="icon">
                <img className="img-fluid" src="assets/images/usdc.svg" alt="BUSD icon" />
            </div>
            <div className="d-flex flex-column">
                <p className="title">busd</p>
                <p className="description"><span className="text-uppercase">busd</span></p>
            </div>
        </div>
    </td>
    <td>
    <p className="title">{typeof this.props.busd_interest != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.busd_interest.toString() / 10 ** 18 }</p>
    </td>
    <td>
        <p className="title">{this.state.BUSD_balance == "-" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.state.BUSD_balance}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.busd_total_staked_balance != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.busd_total_staked_balance.toString() / 10 ** 18}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.busd_total_reward != "string"
            ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.busd_total_reward.toString()/  10 ** 18 < this.props.busd_total_reward_in_memory.toString() /  10 ** 18
                ? this.props.busd_total_reward_in_memory.toString()/  10 ** 18 : this.props.busd_total_reward.toString() /  10 ** 18}</p>
    </td>

    <td>
        <div className="arrow-icon" />
    </td>
</tr>


<tr onClick={() => this.stakeModal('USDT')}>
    <td >
        <div className="d-flex align-items-center">
            <div className="icon">
                <img className="img-fluid" src="assets/images/usdt.svg" alt="USDT icon" />
            </div>
            <div className="d-flex flex-column">
                <p className="title">usdt</p>
                <p className="description"><span className="text-uppercase">usd</span> tether</p>
            </div>
        </div>
    </td>
    <td>
    <p className="title">{typeof this.props.usdt_interest != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.usdt_interest.toString()/1000000 }</p>
    </td>
    <td>
        <p className="title">{this.state.USDT_balance == "-" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.state.USDT_balance}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.usdt_total_staked_balance != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.usdt_total_staked_balance.toString() / 1000000}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.usdt_total_reward != "string"
            ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.usdt_total_reward.toString()/  10 ** 18 < this.props.usdt_total_reward_in_memory.toString() /  10 ** 18
                ? this.props.usdt_total_reward_in_memory.toString()/  10 ** 18 : this.props.usdt_total_reward.toString() /  10 ** 18}</p>
    </td>
    <td>
        <div className="arrow-icon" />
    </td>
</tr>
<tr onClick={() => this.stakeModal('DAI')}>
    <td>
        <div className="d-flex align-items-center">
            <div className="icon">
                <img className="img-fluid" src="assets/images/dai.svg" alt="DAI icon" />
            </div>
            <div className="d-flex flex-column">
                <p className="title">dai</p>
                <p className="description">DAI stablecoin</p>
            </div>
        </div>
    </td>
    <td>
    <p className="title">{typeof this.props.dai_interest != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.dai_interest.toString() / 10 ** 18 }</p>
    </td>
    <td>
        <p className="title">{this.state.DAI_balance == "-" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.state.DAI_balance}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.dai_total_staked_balance != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.dai_total_staked_balance.toString() / 10 ** 18}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.dai_total_reward != "string"
            ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.dai_total_reward.toString()/  10 ** 18 < this.props.dai_total_reward_in_memory.toString() / 10 ** 18
                ? this.props.dai_total_reward_in_memory.toString()/  10 ** 18 : this.props.dai_total_reward.toString() / 10 ** 18}</p>
    </td>

    <td>
        <div className="arrow-icon" />
    </td>
</tr>
<tr onClick={() => this.stakeModal('GFX')}>
    <td>
        <div className="d-flex align-items-center" >
            <div className="icon">
                <img className="img-fluid" src="assets/images/gfx.svg" alt="GFX icon" />
            </div>
            <div className="d-flex flex-column">
                <p className="title">gfx</p>
                <p className="description"><span className="text-uppercase">gfx</span> </p>
            </div>
        </div>
    </td>
    <td>
    <p className="title">{typeof this.props.gfx_interest != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.gfx_interest.toString()/ 10 ** 18 }</p>
    </td>
    <td>
        <p className="title">{this.state.GFX_balance == "-" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.state.GFX_balance}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.gfx_total_staked_balance != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.gfx_total_staked_balance.toString() / 10 ** 18}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.gfx_total_reward != "string"
            ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.gfx_total_reward.toString()/  10 ** 18 < this.props.gfx_total_reward_in_memory.toString() / 10 ** 18
                ? this.props.gfx_total_reward_in_memory.toString()/  10 ** 18 : this.props.gfx_total_reward.toString() / 10 ** 18}</p>
    </td>

    <td>
        <div className="arrow-icon" />
    </td>
</tr>
{/* <tr onClick={() => this.stakeModal('GLD')}>
    <td>
        <div className="d-flex align-items-center" >
            <div className="icon">
                <img className="img-fluid" src="assets/images/GLD.svg" alt="GLD icon" />
            </div>
            <div className="d-flex flex-column">
                <p className="title">gld</p>
                <p className="description"><span className="text-uppercase">gld</span> </p>
            </div>
        </div>
    </td>
    <td>
    <p className="title">{typeof this.props.gld_interest != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.gld_interest.toString() / 10 ** 18}</p>
    </td>
    <td>
        <p className="title">{this.state.GLD_balance == "-" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.state.GLD_balance}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.gld_total_staked_balance != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.gld_total_staked_balance.toString() / 10 ** 18}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.gld_total_reward != "string"
            ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.gld_total_reward.toString() < this.props.gld_total_reward_in_memory.toString() / 10 ** 18
                ? this.props.gld_total_reward_in_memory.toString() : this.props.gld_total_reward.toString() / 10 ** 18}</p>
    </td>

    <td>
        <div className="arrow-icon" />
    </td>
</tr> */}
{/* <tr onClick={() => this.stakeModal('EGLD')}>
  
    <td>
        <div className="d-flex align-items-center" >
            <div className="icon">
                <img className="img-fluid" src="assets/images/eGLD.svg" alt="GLD icon" />
            </div>
            <div className="d-flex flex-column">
                <p className="title">egld</p>
                <p className="description"><span className="text-uppercase">egld</span> </p>
            </div>
        </div>
    </td>
    <td>
    <p className="title">{typeof this.props.egld_interest != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.egld_interest.toString() / 10 ** 18}</p>
    </td>
    <td>
        <p className="title">{this.state.EGLD_balance == "-" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.state.EGLD_balance}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.egld_total_staked_balance != "string" ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.egld_total_staked_balance.toString() / 10 ** 18}</p>
    </td>
    <td>
        <p className="title">{typeof this.props.egld_total_reward != "string"
            ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
            : this.props.egld_total_reward.toString() < this.props.egld_total_reward_in_memory.toString() / 10 ** 18
                ? this.props.egld_total_reward_in_memory.toString() : this.props.egld_total_reward.toString() / 10 ** 18}</p>
    </td>

    <td>
        <div className="arrow-icon" />
    </td>
</tr> */}


</tbody>
                                    </table>
                                </div>
                                <div className="tab-pane fade show active" id="nav-zap" role="tabpanel" aria-labelledby="nav-zap-tab">
                                    <div className="zap-container">
                                        <form id="zap-form">
                                            <h3 className="title">I have</h3>
                                            <p className="text-right mb-1">Balance: {
                                                this.state[this.state.selectValueZap + "_balance"]
                                            }
                                                <span className="text-uppercase"> {this.state.selectValueZap}</span></p>
                                            <div className="select">
                                                <select className="w-100 selectpicker" onChange={this.handleChangeZap}>
                                                    <option data-icon="icon usdc" value="USDC" >USDC</option>
                                                    <option data-icon="icon busd" value="BUSD" >BUSD</option>
                                                    <option data-icon="icon usdt" value="USDT">USDT</option>
                                                    <option data-icon="icon dai" value="DAI" selected>DAI</option>
                                                    <option data-icon="icon gfx" value="GFX">GFX</option>
                                                    {/* <option data-icon="icon gld" value="GLD">GLD</option>
                                                    <option data-icon="icon egld" value="EGLD">EGLD</option> */}
                                                </select>
                                            </div>
                                            <h3 className="title mt-5 mb-3">Send amount</h3>
                                            <div className="position-relative">

                                                <input id="send-amount" type="number" placeholder="0" className="form-control" name="send-amount" value={this.state.onchangeSendAmount ? this.state.send_amount : this.state[this.state.selectValueZap + '_' + this.state.selected_percentage]} onChange={this.SendAmountChange} />
                                                <div className="type">{this.state.selectValueZap}</div>
                                            </div>
                                            <div class="d-flex justify-content-between stake ProgressSlider">
                                                <button type="button" class={appl} onClick={() => this.setPercentageValue('25', this.state[this.state.selectValueZap + '_' + this.state.selected_percentage])}>25%</button>
                                                <button type="button" class={appl1} onClick={() => this.setPercentageValue("50", this.state[this.state.selectValueZap + '_' + this.state.selected_percentage])}>50%</button>
                                                <button type="button" class={appl2} onClick={() => this.setPercentageValue("75", this.state[this.state.selectValueZap + '_' + this.state.selected_percentage])}>75%</button>
                                                <button type="button" class={appl3} onClick={() => this.setPercentageValue("100", this.state[this.state.selectValueZap + '_' + this.state.selected_percentage])}>MAX</button>
                                            </div>
                                            <h3 className="title mt-5 mb-3">I will receive</h3>
                                            <div className="select receive">
                                                <select className="w-100 selectpicker">
                                                    <option data-icon="icon bite" value="BITE" selected>GFI</option>
                                                    {/* <option data-icon="icon usdc" value="USDC">USDC</option>
                                                    <option data-icon="icon busd" value="BUSD">BUSD</option>
                                                    <option data-icon="icon usdt" value="USDT">USDT</option>
                                                    <option data-icon="icon eth" value="ETH">ETH</option2>
                                                    <option data-icon="icon dai" value="DAI">DAI</option>
                                                    <option data-icon="icon tusd" value="TUSD">TUSD</option> */}
                                                </select>
                                            </div>
                                            {
                                                this.state.busd_approve_swap == 'processing' ||  this.state.dai_approve_swap == 'processing' || this.state.usdt_approve_swap == 'processing' || this.state.usdc_approve_swap == 'processing' || this.state.gfx_approve_swap == 'processing'?// || this.state.gld_approve_swap == 'processing' || this.state.egld_approve_swap == 'processing' ?
                                                    <div class="text-center pt-4">Approving
                                                        <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
                                                    </div>
                                                    :
                                                    this.state.busd_swap == 'processing' || this.state.dai_swap == 'processing' || this.state.usdt_swap == 'processing' || this.state.usdc_swap == 'processing' || this.state.gfx_swap == 'processing'?// || this.state.gld_swap == 'processing' || this.state.egld_swap == 'processing' ?
                                                        <div class="text-center pt-4">Swapping
                                                            <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
                                                        </div>
                                                        :
                                                        <>
                                                        <button id="confirm-box" type="button" onClick={this.swap} className="d-flex align-items-center justify-content-center w-100"><span className="icon-white" />Zap</button>
                                                        <a id="confirm-box" type="button" href="https://app.uniswap.org/#/swap" className="d-flex align-items-center justify-content-center w-100" >
                                                        <span>Uniswap</span>
                                                        </a>
                                                        </>

                                            }
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="floating-btns">
                    <ul>
                        <li>
                            <a href="#" class="icon">
                                <span class="send"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="icon">
                                <span class="twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="icon">
                                <span class="facebook"></span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={this.openTransactionHistory} class="icon transaction-history-btn">
                                <span class="transaction-history"></span>
                            </a>
                        </li>
                    </ul>
                </div>



                <div id="transaction-history-popup" class="transaction-history-popup">
                    <header>
                        <div class=" container custom-container ">
                            <div class="d-flex justify-content-center align-items-center position-relative">
                                <div class="select">
                                    <select class="selectpicker" onChange={this.handleChange} >
                                        {/* <option value="ALL" >All</option> */}
                                        {/* <option value="BUSD">BUSD</option> */}
                                        <option value="USDC">USDC</option>
                                        <option value="USDT">USDT</option>
                                        <option value="BUSD">BUSD</option>
                                        {/* <option value="ETH" >ETH</option> */}
                                        <option value="DAI" selected>DAI</option>
                                        {/* <option value="TUSD">TUSD</option> */}
                                        <option value="GFX">GFX</option>
                                        {/* <option value="GLD">GLD</option>
                                        <option value="EGLD">EGLD</option> */}
                                    </select>
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div class="history">
                                        <span class="icon transaction-history-btn">
                                            <span class="transaction-history"></span>
                                        </span>
                                        <span class="text-capitalize">transaction history</span>
                                    </div>
                                    <div class="close-btn" onClick={this.closeTransactionHistory}>&times;</div>
                                </div>
                            </div>

                        </div>
                    </header>
                    <div class="container custom-container">
                        <table id="transaction-history-table" class="table table-reponsive mt-5">
                            <thead>
                            <tr>
                                <th>Txn hash</th>
                                <th>OrderID</th>
                                <th>DepositedAmount</th>
                                <th >WithdrawAmount</th>
                                <th>Deposited</th>
                                <th>Withdrawn</th>
                                <th>WithdrawToken</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>


                            {


                                this.state.selectValue === "GFX" ?
                                    (this.state.gfx_history != '' ? (
                                            this.state.gfx_history.map((item) => (


                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">





                                                            <ReactTooltip id={item.transactionHash} place="top" effect="solid">
                                                                {item.transactionHash}
                                                            </ReactTooltip>



                                                            <CopyToClipboard text={item.transactionHash}
                                                                             onCopy={() => {
                                                                                 this.setState({ copied: true })

                                                                                 toast.configure();
                                                                                 toast("Copied!", {
                                                                                     position: toast.POSITION.TOP_RIGHT,
                                                                                     className: "success",
                                                                                     autoClose: 1000,
                                                                                     toastId: { item }
                                                                                 });

                                                                             }}>
                                                                <span> <p class="long-text" data-tip data-for={item.transactionHash}>
                                                                    {item.transactionHash}
                                                                </p></span>
                                                            </CopyToClipboard>

                                                        </div>
                                                    </td>
                                                    <td>{item.orderID ? item.orderID : "-"} </td>
                                                    <td>
                                                        <p>{item.depositAmount ? item.depositAmount / 10 ** 18 + "GFX" : "-"} </p>
                                                    </td>
                                                    <td class="long-text">{item.withdrawAmount ? item.withdrawAmount / 1e18 : "-"}</td>
                                                    {/* <td><span class="bg-green">in</span></td> */}
                                                    <td class="long-text">{item.isDeposited ? item.isDeposited.toString() : "-"}</td>
                                                    <td class="text-uppercase">{item.isWithdrawn ? item.isWithdrawn.toString() : "-"} </td>
                                                    <td>{item.withdrawTokenName ? item.withdrawTokenName : "-"}</td>
                                                    <td> {item.event ? item.event : "Swap"} </td>
                                                </tr>
                                            ))
                                        ) : (null)
                                    )

                                    // : this.state.selectValue === "ETH" ?
                                    //     (this.state.eth_history != '' ? (
                                    //         this.state.eth_history.map((item) => (


                                    //             <tr>
                                    //                 <td>
                                    //                     <div class="d-flex align-items-center">
                                    //                         <div class="icon">
                                    //                             <img class="img-fluid" src="assets/images/alert-octagon.svg" alt="alert icon" />
                                    //                         </div>
                                    //                         <p class="long-text">{item.transactionHash}</p>
                                    //                     </div>
                                    //                 </td>
                                    //                 <td>{item.orderID}</td>
                                    //                 <td>
                                    //                     <p>{item.depositAmount / 10 ** 18} ETH</p>
                                    //                 </td>
                                    //                 <td class="long-text">{item.withdrawAmount}</td>
                                    //                 {/* <td><span class="bg-green">in</span></td> */}
                                    //                 <td class="long-text">{item.isDeposited.toString()}</td>
                                    //                 <td class="text-uppercase">{item.isWithdrawn.toString()} </td>
                                    //                 <td>{item.withdrawTokenName}</td>
                                    //             </tr>
                                    //         ))
                                    //     ) : (null)
                                    //     )




                                    : this.state.selectValue === "USDC" ?
                                    (this.state.usdc_history != '' ? (
                                            this.state.usdc_history.map((item) => (


                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="icon">
                                                                <img class="img-fluid" src="assets/images/alert-octagon.svg" alt="alert icon" />
                                                            </div>




                                                            <ReactTooltip id={item.transactionHash} place="top" effect="solid">
                                                                {item.transactionHash}
                                                            </ReactTooltip>



                                                            <CopyToClipboard text={item.transactionHash}
                                                                             onCopy={() => {
                                                                                 this.setState({ copied: true })

                                                                                 toast.configure();
                                                                                 toast("Copied!", {
                                                                                     position: toast.POSITION.TOP_RIGHT,
                                                                                     className: "success",
                                                                                     autoClose: 1000,
                                                                                     toastId: { item }
                                                                                 });

                                                                             }}>
                                                                    <span> <p class="long-text" data-tip data-for={item.transactionHash}>
                                                                        {item.transactionHash}
                                                                    </p></span>
                                                            </CopyToClipboard>

                                                        </div>
                                                    </td>
                                                    <td>{item.orderID ? item.orderID : "-"} </td>
                                                    <td>
                                                        <p>{item.depositAmount ? item.depositAmount / 10 ** 6 + "USDC" : "-"} </p>
                                                    </td>
                                                    <td class="long-text">{item.withdrawAmount ? item.withdrawAmount / 1e18 : "-"}</td>
                                                    {/* <td><span class="bg-green">in</span></td> */}
                                                    <td class="long-text">{item.isDeposited ? item.isDeposited.toString() : "-"}</td>
                                                    <td class="text-uppercase">{item.isWithdrawn ? item.isWithdrawn.toString() : "-"} </td>
                                                    <td>{item.withdrawTokenName ? item.withdrawTokenName : "-"}</td>
                                                    <td> {item.event ? item.event : "Swap"} </td>
                                                </tr>
                                            ))
                                        ) : (null)
                                    )





                                    : this.state.selectValue === "BUSD" ?
                                    (this.state.busd_history != '' ? (
                                            this.state.busd_history.map((item) => (


                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="icon">
                                                                <img class="img-fluid" src="assets/images/alert-octagon.svg" alt="alert icon" />
                                                            </div>




                                                            <ReactTooltip id={item.transactionHash} place="top" effect="solid">
                                                                {item.transactionHash}
                                                            </ReactTooltip>



                                                            <CopyToClipboard text={item.transactionHash}
                                                                             onCopy={() => {
                                                                                 this.setState({ copied: true })

                                                                                 toast.configure();
                                                                                 toast("Copied!", {
                                                                                     position: toast.POSITION.TOP_RIGHT,
                                                                                     className: "success",
                                                                                     autoClose: 1000,
                                                                                     toastId: { item }
                                                                                 });

                                                                             }}>
                                                                    <span> <p class="long-text" data-tip data-for={item.transactionHash}>
                                                                        {item.transactionHash}
                                                                    </p></span>
                                                            </CopyToClipboard>

                                                        </div>
                                                    </td>
                                                    <td>{item.orderID ? item.orderID : "-"} </td>
                                                    <td>
                                                        <p>{item.depositAmount ? item.depositAmount / 10 ** 18 + "BUSD" : "-"} </p>
                                                    </td>
                                                    <td class="long-text">{item.withdrawAmount ? item.withdrawAmount / 1e18 : "-"}</td>
                                                    {/* <td><span class="bg-green">in</span></td> */}
                                                    <td class="long-text">{item.isDeposited ? item.isDeposited.toString() : "-"}</td>
                                                    <td class="text-uppercase">{item.isWithdrawn ? item.isWithdrawn.toString() : "-"} </td>
                                                    <td>{item.withdrawTokenName ? item.withdrawTokenName : "-"}</td>
                                                    <td> {item.event ? item.event : "Swap"} </td>
                                                </tr>
                                            ))
                                        ) : (null)
                                    )




                                    : this.state.selectValue === "USDT" ?
                                        (this.state.usdt_history != '' ? (
                                                this.state.usdt_history.map((item) => (


                                                    <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div class="icon">
                                                                    <img class="img-fluid" src="assets/images/alert-octagon.svg" alt="alert icon" />
                                                                </div>




                                                                <ReactTooltip id={item.transactionHash} place="top" effect="solid">
                                                                    {item.transactionHash}
                                                                </ReactTooltip>



                                                                <CopyToClipboard text={item.transactionHash}
                                                                                 onCopy={() => {
                                                                                     this.setState({ copied: true })

                                                                                     toast.configure();
                                                                                     toast("Copied!", {
                                                                                         position: toast.POSITION.TOP_RIGHT,
                                                                                         className: "success",
                                                                                         autoClose: 1000,
                                                                                         toastId: { item }
                                                                                     });

                                                                                 }}>
                                                                        <span> <p class="long-text" data-tip data-for={item.transactionHash}>
                                                                            {item.transactionHash}
                                                                        </p></span>
                                                                </CopyToClipboard>

                                                            </div>
                                                        </td>
                                                        <td>{item.orderID ? item.orderID : "-"} </td>
                                                        <td>
                                                            <p>{item.depositAmount ? item.depositAmount / 10 ** 6 + "USDT" : "-"} </p>
                                                        </td>
                                                        <td class="long-text">{item.withdrawAmount ? item.withdrawAmount / 1e18 : "-"}</td>
                                                        {/* <td><span class="bg-green">in</span></td> */}
                                                        <td class="long-text">{item.isDeposited ? item.isDeposited.toString() : "-"}</td>
                                                        <td class="text-uppercase">{item.isWithdrawn ? item.isWithdrawn.toString() : "-"} </td>
                                                        <td>{item.withdrawTokenName ? item.withdrawTokenName : "-"}</td>
                                                        <td> {item.event ? item.event : "Swap"} </td>
                                                    </tr>
                                                ))
                                            ) : (null)
                                        )



                                        : this.state.selectValue === "DAI" ?
                                            (this.state.dai_history != '' ? (
                                                    this.state.dai_history.map((item) => (


                                                        <tr>
                                                            <td>
                                                                <div class="d-flex align-items-center">
                                                                    <div class="icon">
                                                                        <img class="img-fluid" src="assets/images/alert-octagon.svg" alt="alert icon" />
                                                                    </div>




                                                                    <ReactTooltip id={item.transactionHash} place="top" effect="solid">
                                                                        {item.transactionHash}
                                                                    </ReactTooltip>



                                                                    <CopyToClipboard text={item.transactionHash}
                                                                                     onCopy={() => {
                                                                                         this.setState({ copied: true })

                                                                                         toast.configure();
                                                                                         toast("Copied!", {
                                                                                             position: toast.POSITION.TOP_RIGHT,
                                                                                             className: "success",
                                                                                             autoClose: 1000,
                                                                                             toastId: { item }
                                                                                         });

                                                                                     }}>
                                                                            <span> <p class="long-text" data-tip data-for={item.transactionHash}>
                                                                                {item.transactionHash}
                                                                            </p></span>
                                                                    </CopyToClipboard>

                                                                </div>
                                                            </td>
                                                            <td>{item.orderID ? item.orderID : "-"} </td>
                                                            <td>
                                                                <p>{item.depositAmount ? item.depositAmount / 10 ** 18 + "DAI" : "-"} </p>
                                                            </td>
                                                            <td class="long-text">{item.withdrawAmount ? item.withdrawAmount / 1e18 : "-"}</td>
                                                            {/* <td><span class="bg-green">in</span></td> */}
                                                            <td class="long-text">{item.isDeposited ? item.isDeposited.toString() : "-"}</td>
                                                            <td class="text-uppercase">{item.isWithdrawn ? item.isWithdrawn.toString() : "-"} </td>
                                                            <td>{item.withdrawTokenName ? item.withdrawTokenName : "-"}</td>
                                                            <td> {item.event ? item.event : "Swap"} </td>
                                                        </tr>
                                                    ))
                                                ) : (null)
                                            )


                                            // : this.state.selectValue === "GLD" ?
                                            //     (this.state.gld_history != '' ? (
                                            //             this.state.gld_history.map((item) => (


                                            //                 <tr>
                                            //                     <td>
                                            //                         <div class="d-flex align-items-center">
                                            //                             <div class="icon">
                                            //                                 <img class="img-fluid" src="assets/images/alert-octagon.svg" alt="alert icon" />
                                            //                             </div>




                                            //                             <ReactTooltip id={item.transactionHash} place="top" effect="solid">
                                            //                                 {item.transactionHash}
                                            //                             </ReactTooltip>



                                            //                             <CopyToClipboard text={item.transactionHash}
                                            //                                              onCopy={() => {
                                            //                                                  this.setState({ copied: true })

                                            //                                                  toast.configure();
                                            //                                                  toast("Copied!", {
                                            //                                                      position: toast.POSITION.TOP_RIGHT,
                                            //                                                      className: "success",
                                            //                                                      autoClose: 1000,
                                            //                                                      toastId: { item }
                                            //                                                  });

                                            //                                              }}>
                                            //                                     <span> <p class="long-text" data-tip data-for={item.transactionHash}>
                                            //                                         {item.transactionHash}
                                            //                                     </p></span>
                                            //                             </CopyToClipboard>

                                            //                         </div>
                                            //                     </td>
                                            //                     <td>{item.orderID ? item.orderID : "-"} </td>
                                            //                     <td>
                                            //                         <p>{item.depositAmount ? item.depositAmount / 10 ** 18 + "GLD" : "-"} </p>
                                            //                     </td>
                                            //                     <td class="long-text">{item.withdrawAmount ? item.withdrawAmount / 1e18 : "-"}</td>
                                            //                     {/* <td><span class="bg-green">in</span></td> */}
                                            //                     <td class="long-text">{item.isDeposited ? item.isDeposited.toString() : "-"}</td>
                                            //                     <td class="text-uppercase">{item.isWithdrawn ? item.isWithdrawn.toString() : "-"} </td>
                                            //                     <td>{item.withdrawTokenName ? item.withdrawTokenName : "-"}</td>
                                            //                     <td> {item.event ? item.event : "Swap"} </td>
                                            //                 </tr>
                                            //             ))
                                            //         ) : (null)
                                            //     )

                                                // : this.state.selectValue === "EGLD" ?
                                                //     (this.state.egld_history != '' ? (
                                                //             this.state.egld_history.map((item) => (


                                                //                 <tr>
                                                //                     <td>
                                                //                         <div class="d-flex align-items-center">
                                                //                             <div class="icon">
                                                //                                 <img class="img-fluid" src="assets/images/alert-octagon.svg" alt="alert icon" />
                                                //                             </div>




                                                //                             <ReactTooltip id={item.transactionHash} place="top" effect="solid">
                                                //                                 {item.transactionHash}
                                                //                             </ReactTooltip>



                                                //                             <CopyToClipboard text={item.transactionHash}
                                                //                                              onCopy={() => {
                                                //                                                  this.setState({ copied: true })

                                                //                                                  toast.configure();
                                                //                                                  toast("Copied!", {
                                                //                                                      position: toast.POSITION.TOP_RIGHT,
                                                //                                                      className: "success",
                                                //                                                      autoClose: 1000,
                                                //                                                      toastId: { item }
                                                //                                                  });

                                                //                                              }}>
                                                //                                     <span> <p class="long-text" data-tip data-for={item.transactionHash}>
                                                //                                         {item.transactionHash}
                                                //                                     </p></span>
                                                //                             </CopyToClipboard>

                                                //                         </div>
                                                //                     </td>
                                                //                     <td>{item.orderID ? item.orderID : "-"} </td>
                                                //                     <td>
                                                //                         <p>{item.depositAmount ? item.depositAmount / 10 ** 18 + "eGLD" : "-"} </p>
                                                //                     </td>
                                                //                     <td class="long-text">{item.withdrawAmount ? item.withdrawAmount / 1e18 : "-"}</td>
                                                //                     {/* <td><span class="bg-green">in</span></td> */}
                                                //                     <td class="long-text">{item.isDeposited ? item.isDeposited.toString() : "-"}</td>
                                                //                     <td class="text-uppercase">{item.isWithdrawn ? item.isWithdrawn.toString() : "-"} </td>
                                                //                     <td>{item.withdrawTokenName ? item.withdrawTokenName : "-"}</td>
                                                //                     <td> {item.event ? item.event : "Swap"} </td>
                                                //                 </tr>
                                                //             ))
                                                //         ) : (null)
                                                //     )

                                                    // : this.state.selectValue === "ALL" ?
                                                    //     (all_history != '' ? (
                                                    //         all_history.map((item1) => (
                                                    //             item1.map((item) => (

                                                    //                 <tr>
                                                    //                     <td>
                                                    //                         <div class="d-flex align-items-center">
                                                    //                             <div class="icon">
                                                    //                                 <img class="img-fluid" src="assets/images/alert-octagon.svg" alt="alert icon" />
                                                    //                             </div>
                                                    //                             <p class="long-text">{item.transactionHash}</p>
                                                    //                         </div>
                                                    //                     </td>
                                                    //                     <td>{item.orderID}</td>
                                                    //                     <td>
                                                    //                         <p>{item.depositAmount} Gwei </p>
                                                    //                     </td>
                                                    //                     <td class="long-text">{item.withdrawAmount}</td>
                                                    //                     {/* <td><span class="bg-green">in</span></td> */}
                                                    //                     <td class="long-text">{item.isDeposited.toString()}</td>
                                                    //                     <td class="text-uppercase">{item.isWithdrawn.toString()} </td>
                                                    //                     <td>{item.withdrawTokenName}</td>
                                                    //                 </tr>
                                                    //             ))
                                                    //         ))
                                                    //     ) : (null)
                                                    //     )


                                                    : null}

                            </tbody>
                        </table>
                    </div>
                </div>




                {/* <div className="aside">
                    <div className="aside-inner">
                        <div className="close-aside" />
                        <div className="d-flex align-items-center mt-2">
                            <div className="icon">
                                <img className="img-fluid" src="assets/images/usdc.svg" alt="USDC icon" />
                            </div>
                            <div className="d-flex flex-column">
                                <p className="text-left title">{this.state.selectedStake}</p>
                            </div>
                        </div>
                        <div className="item-box">
                            <form id="stake-form">
                                <h3 className="title">Stake</h3>
                                <p>Balance11: {this.state[this.state.selectedStake + "_balance"]} <span className="text-uppercase">{this.state.selectedStake}</span></p>
                                <input type="number" value={this.state.onchangeSendAmount ? this.state.send_amount : this.state[this.state.selectedStake + '_' + this.state.selected_percentage]} onChange={this.SendAmountChange} className="form-control" placeholder={0.00} />
                                <div class="d-flex justify-content-between stake">
                                                <button type="button" class={appl} onClick={() => this.setPercentageValue('25', this.state[this.state.selectedStake + '_' + this.state.selected_percentage])}>25%</button>
                                                <button type="button" class={appl1} onClick={() => this.setPercentageValue("50", this.state[this.state.selectedStake + '_' + this.state.selected_percentage])}>50%</button>
                                                <button type="button" class={appl2} onClick={() => this.setPercentageValue("75", this.state[this.state.selectedStake + '_' + this.state.selected_percentage])}>75%</button>
                                                <button type="button" class={appl3} onClick={() => this.setPercentageValue("100", this.state[this.state.selectedStake + '_' + this.state.selected_percentage])}>100%</button>

                                </div>
                                <button type="submit" className="btn w-100 justify-content-center cstm-btn"><span className="earn-icon" />Earn</button>
                            </form>

                        </div>
                    </div>
                </div> */}




                {/* Transaction log drawer start */}
                <div className="aside">
                    <div className="aside-inner">
                        <header>
                            <div className="container custom-container">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center mt-2">
                                        {/* <div className="icon">
                                            <img className="img-fluid" src="assets/images/usdc.svg" alt="USDC icon" />
                                        </div> */}
                                        <div className="d-flex flex-column">
                                            <p className="text-left title">{this.state.selectedStake}</p>
                                            {/* <p className="description"><span className="text-uppercase">usd</span> Stablecoin</p> */}
                                        </div>
                                    </div>
                                    {/* else if (nextProps.usdt_approve.type == "stake") {
                    this.setState({ usdt_stake: 'processing' })
                    this.props.stakeUSDT(this.state.loggedAddress, this.state.send_amount)
                    console.log("nextProps.usdt_stake:", nextProps.usdt_stake)
                    //    this.setState({ usdt_approve_stake: nextProps.usdt_approve });

                } */}

                                    {
                                        this.state.exit_called== true ||
                                        this.state.usdt_approve_stake == 'processing' ||
                                        this.state.usdt_stake == 'processing' ||
                                        this.state.usdc_approve_stake == 'processing' ||
                                        this.state.usdc_stake == 'processing' ||
                                        this.state.gfx_approve_stake == 'processing'  ||
                                        this.state.gfx_stake == 'processing' ||
                                        // this.state.gld_approve_stake == 'processing'  ||
                                        // this.state.gld_stake == 'processing' ||
                                        // this.state.egld_approve_stake == 'processing' ||
                                        // this.state.egld_stake == 'processing' ||
                                        this.state.dai_approve_stake == 'processing'  ||
                                        this.state.dai_stake == 'processing' ||
                                        this.state.busd_approve_stake == 'processing'  ||
                                        this.state.busd_stake == 'processing'

                                            ?
                                            null
                                            :
                                            <div onClick={()=>{this.close()}}
                                                 className="close-aside"
                                            />
                                    }



                                </div>
                            </div>
                        </header>
                        <div className="container custom-container table-content">
                            <div className="row w-100">
                                <div className="col-md-4">
                                    <div className="item-box">
                                        <form id="stake-form">
                                            <h3 className="title">Stake</h3>
                                            <p>Balance: {this.state[this.state.selectedStake + "_balance"]} <span className="text-uppercase">{this.state.selectedStake}</span></p>
                                            <input type="number" value={this.state.onchangeSendAmount ? this.state.send_amount : this.state[this.state.selectedStake + '_' + this.state.selected_percentage]} onChange={this.SendAmountChange} className="form-control" placeholder={0.00} />
                                            <div class="d-flex justify-content-between stake ProgressSlider">
                                                <button type="button" class={appl} onClick={() => this.setPercentageValue('25', this.state[this.state.selectedStake + '_' + this.state.selected_percentage])}>25%</button>
                                                <button type="button" class={appl1} onClick={() => this.setPercentageValue("50", this.state[this.state.selectedStake + '_' + this.state.selected_percentage])}>50%</button>
                                                <button type="button" class={appl2} onClick={() => this.setPercentageValue("75", this.state[this.state.selectedStake + '_' + this.state.selected_percentage])}>75%</button>
                                                <button type="button" class={appl3} onClick={() => this.setPercentageValue("100", this.state[this.state.selectedStake + '_' + this.state.selected_percentage])}>MAX</button>

                                            </div>
                                            {
                                                this.state.busd_approve_stake == 'processing' ||this.state.dai_approve_stake == 'processing' || this.state.usdt_approve_stake == 'processing' || this.state.usdc_approve_stake == 'processing' || this.state.gfx_approve_stake == 'processing'?// || this.state.gld_approve_stake == 'processing' || this.state.egld_approve_stake == 'processing' ?
                                                    <div class="text-center pt-4">Approving
                                                        <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
                                                    </div>
                                                    :
                                                    this.state.busd_stake == 'processing' || this.state.dai_stake == 'processing' || this.state.usdt_stake == 'processing' || this.state.usdc_stake == 'processing' || this.state.gfx_stake == 'processing'?// || this.state.gld_stake == 'processing' || this.state.egld_stake == 'processing' ?
                                                        <div class="text-center pt-4">Staking
                                                            <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
                                                        </div>
                                                        :
                                                        <button id={this.stake} type="button" onClick={this.stake} className="btn w-100 justify-content-center cstm-btn"><span className="earn-icon" />Earn</button>


                                            }
                                            {/* <button type="submit" className="btn w-100 justify-content-center cstm-btn"><span className="earn-icon" />Earn</button> */}
                                        </form>

                                        {
                                            this.state.exit_called == false ?

                                                (this.props[this.state.selectedStake.toLocaleLowerCase().toString() + "_total_reward_in_memory"] != 0 && this.props[this.state.selectedStake.toLocaleLowerCase().toString() + "_total_reward"] == 0) && (this.props[this.state.selectedStake.toLocaleLowerCase().toString() + "_total_reward_in_memory"] == 0 && this.props[this.state.selectedStake.toLocaleLowerCase().toString() + "_total_reward"] != 0) && this.props[this.state.selectedStake.toLocaleLowerCase().toString() + "_total_staked_balance"] == 0 ?
                                                    <button id={this.state.selectedStake} type="button" onClick={() => { this.exit(this.state.selectedStake) }} className="btn w-100 justify-content-center cstm-btn" disabled><span className="earn-icon" />Exit</button>
                                                    : (this.props[this.state.selectedStake.toLocaleLowerCase().toString() + "_total_reward_in_memory"] != 0 || this.props[this.state.selectedStake.toLocaleLowerCase().toString() + "_total_reward"] != 0) || this.props[this.state.selectedStake.toLocaleLowerCase().toString() + "_total_staked_balance"] != 0 ?
                                                    <button id={this.state.selectedStake} type="button" onClick={() => { this.exit(this.state.selectedStake) }} className="btn w-100 justify-content-center cstm-btn"><span className="earn-icon" />Exit</button>
                                                    :
                                                    <button id={this.state.selectedStake} type="button" onClick={() => { this.exit(this.state.selectedStake) }} className="btn w-100 justify-content-center cstm-btn"><span className="earn-icon" />Exit</button>


                                                :
                                                <div class="text-center pt-4">Processing
                                                    <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" />
                                                </div>
                                        }

                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="left-spacing">
                                        <h3 className="text-capitalize">Transaction log</h3>
                                        <table id="transaction-log-table" className="table table-reponsive">
                                            <thead>
                                            <tr>
                                                <th>Amount</th>
                                                <th>Date</th>
                                                <th>Reward</th>
                                                <th className="text-center">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>


                                            {
                                                this.state.selectedStake == "USDT" && this.state.usdt_txn_log && this.state.usdt_txn_log_reward ? this.state.usdt_txn_log.map((item, index) => (
                                                        item.status == 'fulfilled' ?
                                                            // item.map(detailed=>(

                                                            <tr>
                                                                <td>{this.state.selectedStake == "USDT" ? item.value[0] / 1000000 : 0}</td>
                                                                <td>{new Date(item.value[1] * 1000).toLocaleDateString("en-US")}</td>
                                                                <td>
                                                                    {this.state.usdt_txn_log_reward[index].value != 0 && item.value[2] == 0
                                                                        ? this.state.usdt_txn_log_reward[index].value
                                                                        : item.value[2] != 0 && this.state.usdt_txn_log_reward[index].value == 0
                                                                            ? item.value[2]
                                                                            : 0}<span className="text-uppercase"> gfi</span></td>
                                                                <td className="btns">
                                                                    {
                                                                        item.value[0] != 0 && (this.state.usdt_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.usdt_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>} {this.state.usdt_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                                            : item.value[0] == 0 && (this.state.usdt_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.usdt_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>}<button class="btn unstake-btn" disabled>unstaked</button></>
                                                                            : item.value[0] != 0 && (this.state.usdt_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claimed</button> {this.state.usdt_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                                                : item.value[0] == 0 && (this.state.usdt_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claimed</button> <button class="btn unstake-btn" disabled>unstaked</button></>
                                                                                    : null
                                                                    }

                                                                    {/* <button className="btn exit-btn">exit</button> */}
                                                                </td>
                                                            </tr>
                                                            // ))

                                                            : null
                                                    )

                                                    )

                                                    : this.state.selectedStake == "GFX" && this.state.gfx_txn_log && this.state.gfx_txn_log_reward ? this.state.gfx_txn_log.map((item, index) => (
                                                        item.status == 'fulfilled' ?
                                                            // item.map(detailed=>(

                                                            <tr>
                                                                <td>{this.state.selectedStake == "GFX" ? item.value[0] / 1000000000000000000 : 0}</td>
                                                                <td>{new Date(item.value[1] * 1000).toLocaleDateString("en-US")}</td>
                                                                <td>
                                                                    {this.state.gfx_txn_log_reward[index].value != 0 && item.value[2] == 0
                                                                        ? this.state.gfx_txn_log_reward[index].value/ 1000000 
                                                                        : item.value[2] != 0 && this.state.gfx_txn_log_reward[index].value == 0
                                                                            ? item.value[2]/ 1000000 
                                                                            : 0}<span className="text-uppercase"> gfi</span></td>
                                                                <td className="btns">
                                                                    {
                                                                        item.value[0] != 0 && (this.state.gfx_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.gfx_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>} {this.state.gfx_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                                            : item.value[0] == 0 && (this.state.gfx_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.gfx_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>}<button class="btn unstake-btn" disabled>unstaked</button></>
                                                                            : item.value[0] != 0 && (this.state.gfx_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claimed</button> {this.state.gfx_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                                                : item.value[0] == 0 && (this.state.gfx_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claimed</button> <button class="btn unstake-btn" disabled>unstaked</button></>
                                                                                    : null
                                                                    }

                                                                    {/* <button className="btn exit-btn">exit</button> */}
                                                                </td>
                                                            </tr>
                                                            // ))

                                                            : null
                                                    )

                                                    )



                                                    // : this.state.selectedStake == "GLD" && this.state.gld_txn_log && this.state.gld_txn_log_reward ? this.state.gld_txn_log.map((item, index) => (
                                                    //         item.status == 'fulfilled' ?
                                                    //             // item.map(detailed=>(

                                                    //             <tr>
                                                    //                 <td>{this.state.selectedStake == "GLD" ? item.value[0] / 1000000000000000000 : 0}</td>
                                                    //                 <td>{new Date(item.value[1] * 1000).toLocaleDateString("en-US")}</td>
                                                    //                 <td>
                                                    //                     {this.state.gld_txn_log_reward[index].value != 0 && item.value[2] == 0
                                                    //                         ? this.state.gld_txn_log_reward[index].value
                                                    //                         : item.value[2] != 0 && this.state.gld_txn_log_reward[index].value == 0
                                                    //                             ? item.value[2]
                                                    //                             : 0}<span className="text-uppercase"> gld</span></td>
                                                    //                 <td className="btns">
                                                    //                     {
                                                    //                         item.value[0] != 0 && (this.state.gld_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.gld_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>} {this.state.gld_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                    //                             : item.value[0] == 0 && (this.state.gld_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.gld_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>}<button class="btn unstake-btn" disabled>unstake</button></>
                                                    //                             : item.value[0] != 0 && (this.state.gld_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claim</button> {this.state.gld_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                    //                                 : item.value[0] == 0 && (this.state.gld_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claim</button> <button class="btn unstake-btn" disabled>unstake</button></>
                                                    //                                     : null
                                                    //                     }

                                                    //                     {/* <button className="btn exit-btn">exit</button> */}
                                                    //                 </td>
                                                    //             </tr>
                                                    //             // ))

                                                    //             : null
                                                    //     )

                                                    //     )

                                                    //     : this.state.selectedStake == "EGLD" && this.state.egld_txn_log && this.state.egld_txn_log_reward ? this.state.egld_txn_log.map((item, index) => (
                                                    //             item.status == 'fulfilled' ?
                                                    //                 // item.map(detailed=>(

                                                    //                 <tr>
                                                    //                     <td>{this.state.selectedStake == "EGLD" ? item.value[0] / 1000000000000000000 : 0}</td>
                                                    //                     <td>{new Date(item.value[1] * 1000).toLocaleDateString("en-US")}</td>
                                                    //                     <td>
                                                    //                         {this.state.egld_txn_log_reward[index].value != 0 && item.value[2] == 0
                                                    //                             ? this.state.egld_txn_log_reward[index].value
                                                    //                             : item.value[2] != 0 && this.state.egld_txn_log_reward[index].value == 0
                                                    //                                 ? item.value[2]
                                                    //                                 : 0}<span className="text-uppercase"> egld</span></td>
                                                    //                     <td className="btns">
                                                    //                         {
                                                    //                             item.value[0] != 0 && (this.state.egld_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.egld_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>} {this.state.egld_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                    //                                 : item.value[0] == 0 && (this.state.egld_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.egld_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>}<button class="btn unstake-btn" disabled>unstake</button></>
                                                    //                                 : item.value[0] != 0 && (this.state.egld_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claim</button> {this.state.egld_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                    //                                     : item.value[0] == 0 && (this.state.egld_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claim</button> <button class="btn unstake-btn" disabled>unstake</button></>
                                                    //                                         : null
                                                    //                         }

                                                    //                         {/* <button className="btn exit-btn">exit</button> */}
                                                    //                     </td>
                                                    //                 </tr>
                                                    //                 // ))

                                                    //                 : null
                                                    //         )

                                                    //         )


                                                            : this.state.selectedStake == "BUSD" && this.state.busd_txn_log && this.state.busd_txn_log_reward ? this.state.busd_txn_log.map((item, index) => (
                                                                item.status == 'fulfilled' ?
                                                                    // item.map(detailed=>(

                                                                    <tr>
                                                                        <td>{this.state.selectedStake == "BUSD" ? item.value[0] / 1000000000000000000 : 0}</td>
                                                                        <td>{new Date(item.value[1] * 1000).toLocaleDateString("en-US")}</td>
                                                                        <td>
                                                                            {this.state.busd_txn_log_reward[index].value != 0 && item.value[2] == 0
                                                                                ? this.state.busd_txn_log_reward[index].value / 1000000 
                                                                                : item.value[2] != 0 && this.state.busd_txn_log_reward[index].value == 0
                                                                                    ? item.value[2] / 1000000 
                                                                                    : 0}<span className="text-uppercase"> gfi</span></td>
                                                                        <td className="btns">
                                                                            {
                                                                                item.value[0] != 0 && (this.state.busd_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.busd_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>} {this.state.busd_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                                                    : item.value[0] == 0 && (this.state.busd_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.busd_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>}<button class="btn unstake-btn" disabled>unstaked</button></>
                                                                                    : item.value[0] != 0 && (this.state.busd_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claimed</button> {this.state.busd_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                                                        : item.value[0] == 0 && (this.state.busd_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claimed</button> <button class="btn unstake-btn" disabled>unstaked</button></>
                                                                                            : null
                                                                            }

                                                                            {/* <button className="btn exit-btn">exit</button> */}
                                                                        </td>
                                                                    </tr>
                                                                    // ))

                                                                    : null
                                                            )

                                                            )




                                                            : this.state.selectedStake == "DAI" && this.state.dai_txn_log && this.state.dai_txn_log_reward ? this.state.dai_txn_log.map((item, index) => (
                                                                    item.status == 'fulfilled' ?
                                                                        // item.map(detailed=>(

                                                                        <tr>
                                                                            <td>{this.state.selectedStake == "DAI" ? item.value[0] / 1000000000000000000 : 0}</td>
                                                                            <td>{new Date(item.value[1] * 1000).toLocaleDateString("en-US")}</td>
                                                                            <td>
                                                                                {this.state.dai_txn_log_reward[index].value != 0 && item.value[2] == 0
                                                                                    ? this.state.dai_txn_log_reward[index].value / 1000000 
                                                                                    : item.value[2] != 0 && this.state.dai_txn_log_reward[index].value == 0
                                                                                        ? item.value[2] / 1000000 
                                                                                        : 0}<span className="text-uppercase"> gfi</span></td>
                                                                            <td className="btns">
                                                                                {
                                                                                    item.value[0] != 0 && (this.state.dai_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.dai_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>} {this.state.dai_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                                                        : item.value[0] == 0 && (this.state.dai_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.dai_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>}<button class="btn unstake-btn" disabled>unstake</button></>
                                                                                        : item.value[0] != 0 && (this.state.dai_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claimed</button> {this.state.dai_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstaked</button>}</>
                                                                                            : item.value[0] == 0 && (this.state.dai_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claimed</button> <button class="btn unstake-btn" disabled>unstaked</button></>
                                                                                                : null
                                                                                }

                                                                                {/* <button className="btn exit-btn">exit</button> */}
                                                                            </td>
                                                                        </tr>
                                                                        // ))

                                                                        : null
                                                                )

                                                          
                                                            
                                                                ) : this.state.selectedStake == "USDC" && this.state.usdc_txn_log && this.state.usdc_txn_log_reward ? this.state.usdc_txn_log.map((item, index) => (
                                                                    item.status == 'fulfilled' ?
                                                                        // item.map(detailed=>(

                                                                        <tr>
                                                                            <td>{this.state.selectedStake == "USDC" ? item.value[0] / 1000000 : 0}</td>
                                                                            <td>{new Date(item.value[1] * 1000).toLocaleDateString("en-US")}</td>
                                                                            <td>
                                                                                {this.state.usdc_txn_log_reward[index].value != 0 && item.value[2] == 0
                                                                                    ? this.state.usdc_txn_log_reward[index].value
                                                                                    : item.value[2] != 0 && this.state.usdc_txn_log_reward[index].value == 0
                                                                                        ? item.value[2]
                                                                                        : 0}<span className="text-uppercase"> gfi</span></td>
                                                                            <td className="btns">
                                                                                {
                                                                                    item.value[0] != 0 && (this.state.usdc_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.usdc_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>} {this.state.usdc_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                                                        : item.value[0] == 0 && (this.state.usdc_txn_log_reward[index].value != 0 || item.value[2] != 0) ? <>{this.state.usdc_claim_index == index ? <div class="spinner-border " style={{ color: "rgb(197 77 197)" }} role="status" /> : <button onClick={() => this.claim(index, this.state.selectedStake)} className="btn claim-btn">claim</button>}<button class="btn unstake-btn" disabled>unstaked</button></>
                                                                                        : item.value[0] != 0 && (this.state.usdc_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claimed</button> {this.state.usdc_unStake_index == index ? <div class="spinner-border " style={{ color: "#13BFB1" }} role="status" /> : <button onClick={() => this.unStake(index, this.state.selectedStake)} class="btn unstake-btn">unstake</button>}</>
                                                                                            : item.value[0] == 0 && (this.state.usdc_txn_log_reward[index].value == 0 || item.value[2] == 0) ? <><button className="btn claim-btn" disabled>claimed</button> <button class="btn unstake-btn" disabled>unstaked</button></>
                                                                                                : null
                                                                                }

                                                                                {/* <button className="btn exit-btn">exit</button> */}
                                                                            </td>
                                                                        </tr>
                                                                        // ))

                                                                        : null
                                                                )

                                                                ) :

                                                                <>
                                                                    <tr>
                                                                        <td colspan="4">


                                                                            <div class="text-center pt-5 mt-5">
                                                                                <div class=" spinner-border " style={{ color: "#E573E5", width: "70px", height: "70px" }} role="status" />
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </>
                                            }












                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Transaction log drawer end */}


            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    eth_history: state.historyStore.eth_history,
    busd_history: state.historyStore.busd_history,
    tusd_history: state.historyStore.tusd_history,
    usdt_history: state.historyStore.usdt_history,
    usdc_history: state.historyStore.usdc_history,
    dai_history: state.historyStore.dai_history,
    eth_balance: state.historyStore.eth_balance,
    busd_balance: state.historyStore.busd_balance,
    tusd_balance: state.historyStore.tusd_balance,
    usdt_balance: state.historyStore.usdt_balance,
    usdc_balance: state.historyStore.usdc_balance,
    dai_balance: state.historyStore.dai_balance,
    dai_swap: state.historyStore.dai_swap,
    dai_approve: state.historyStore.dai_approve,
    dai_swap: state.historyStore.dai_swap,
    usdt_approve: state.historyStore.usdt_approve,
    usdt_swap: state.historyStore.usdt_swap,
    usdc_approve: state.historyStore.usdc_approve,
    usdc_swap: state.historyStore.usdc_swap,
    usdt_stake: state.historyStore.usdt_stake,
    usdt_stake_balance: state.historyStore.usdt_stake_balance,
    usdt_stake_reward: state.historyStore.usdt_stake_reward,
    usdt_unstake: state.historyStore.usdt_unstake,
    usdt_claim: state.historyStore.usdt_claim,
    usdt_exit: state.historyStore.usdt_exit,
    usdt_total_reward: state.historyStore.usdt_total_reward,
    usdt_total_staked_balance: state.historyStore.usdt_total_staked_balance,
    usdt_total_reward_in_memory: state.historyStore.usdt_total_reward_in_memory,
    usdt_interest: state.historyStore.usdt_interest,



    busd_approve: state.historyStore.busd_approve,
    busd_swap: state.historyStore.busd_swap,
    busd_stake: state.historyStore.busd_stake,
    busd_stake_balance: state.historyStore.busd_stake_balance,
    busd_stake_reward: state.historyStore.busd_stake_reward,
    busd_unstake: state.historyStore.busd_unstake,
    busd_claim: state.historyStore.busd_claim,
    busd_exit: state.historyStore.busd_exit,
    busd_total_reward: state.historyStore.busd_total_reward,
    busd_total_staked_balance: state.historyStore.busd_total_staked_balance,
    busd_total_reward_in_memory: state.historyStore.busd_total_reward_in_memory,
    busd_interest: state.historyStore.busd_interest,






    dai_stake: state.historyStore.dai_stake,
    dai_stake_balance: state.historyStore.dai_stake_balance,
    dai_stake_reward: state.historyStore.dai_stake_reward,
    dai_unstake: state.historyStore.dai_unstake,
    dai_claim: state.historyStore.dai_claim,
    dai_exit: state.historyStore.dai_exit,
    dai_total_reward: state.historyStore.dai_total_reward,
    dai_total_staked_balance: state.historyStore.dai_total_staked_balance,
    dai_total_reward_in_memory: state.historyStore.dai_total_reward_in_memory,
    dai_interest: state.historyStore.dai_interest,



    usdc_stake: state.historyStore.usdc_stake,
    usdc_stake_balance: state.historyStore.usdc_stake_balance,
    usdc_stake_reward: state.historyStore.usdc_stake_reward,
    usdc_unstake: state.historyStore.usdc_unstake,
    usdc_claim: state.historyStore.usdc_claim,
    usdc_exit: state.historyStore.usdc_exit,
    usdc_total_reward: state.historyStore.usdc_total_reward,
    usdc_total_staked_balance: state.historyStore.usdc_total_staked_balance,
    usdc_total_reward_in_memory: state.historyStore.usdc_total_reward_in_memory,
    usdc_interest: state.historyStore.usdc_interest,



    gfx_history: state.historyStore.gfx_history,
    gfx_balance: state.historyStore.gfx_balance,
    gfx_swap: state.historyStore.gfx_swap,
    gfx_approve: state.historyStore.gfx_approve,
    gfx_stake: state.historyStore.gfx_stake,
    gfx_stake_balance: state.historyStore.gfx_stake_balance,
    gfx_stake_reward: state.historyStore.gfx_stake_reward,
    gfx_unstake: state.historyStore.gfx_unstake,
    gfx_claim: state.historyStore.gfx_claim,
    gfx_exit: state.historyStore.gfx_exit,
    gfx_total_reward: state.historyStore.gfx_total_reward,
    gfx_total_staked_balance: state.historyStore.gfx_total_staked_balance,
    gfx_total_reward_in_memory: state.historyStore.gfx_total_reward_in_memory,
    gfx_interest: state.historyStore.gfx_interest,


    // gld_history: state.historyStore.gld_history,
    // gld_balance: state.historyStore.gld_balance,
    // gld_swap: state.historyStore.gld_swap,
    // gld_approve: state.historyStore.gld_approve,
    // gld_stake: state.historyStore.gld_stake,
    // gld_stake_balance: state.historyStore.gld_stake_balance,
    // gld_stake_reward: state.historyStore.gld_stake_reward,
    // gld_unstake: state.historyStore.gld_unstake,
    // gld_claim: state.historyStore.gld_claim,
    // gld_exit: state.historyStore.gld_exit,
    // gld_total_reward: state.historyStore.gld_total_reward,
    // gld_total_staked_balance: state.historyStore.gld_total_staked_balance,
    // gld_total_reward_in_memory: state.historyStore.gld_total_reward_in_memory,
    // gld_interest: state.historyStore.gld_interest,



    // egld_history: state.historyStore.egld_history,
    // egld_balance: state.historyStore.egld_balance,
    // egld_swap: state.historyStore.egld_swap,
    // egld_approve: state.historyStore.egld_approve,
    // egld_stake: state.historyStore.egld_stake,
    // egld_stake_balance: state.historyStore.egld_stake_balance,
    // egld_stake_reward: state.historyStore.egld_stake_reward,
    // egld_unstake: state.historyStore.egld_unstake,
    // egld_claim: state.historyStore.egld_claim,
    // egld_exit: state.historyStore.egld_exit,
    // egld_total_reward: state.historyStore.egld_total_reward,
    // egld_total_staked_balance: state.historyStore.egld_total_staked_balance,
    // egld_total_reward_in_memory: state.historyStore.egld_total_reward_in_memory,
    // egld_interest: state.historyStore.egld_interest,


});


export default connect(mapStateToProps, {
    getEthHistory, getTUSDHistory, getBUSDHistory,
    getUSDTHistory, getUSDCHistory, getDAIHistory,
    getETHBalance, getBUSDBalance, getTUSDBalance,
    getUSDTBalance, getUSDCBalance, getDAIBalance,
    approveDAI, swapDAI, approveUSDT, swapUSDT,
    approveUSDC, swapUSDC, stakeUSDT, stakingInfoUSDT,
    getUSDTReward, unStakeUSDT, claimUSDT,
    stakeDAI, stakingInfoDAI, getDAIReward,
    unStakeDAI, claimDAI, exitDAI, exitUSDT,
    getTotalRewardDAI, getTotalStackedBalanceDAI,
    getTotalRewardUSDT, getTotalStackedBalanceUSDT,
    stakeUSDC, stakingInfoUSDC, getUSDCReward,
    unStakeUSDC, claimUSDC, exitUSDC,
    getTotalRewardUSDC, getTotalStackedBalanceUSDC,
    getTotalRewardInMemoryUSDC,
    getGFXHistory, getGFXBalance, approveGFX,
    swapGFX, stakeGFX, stakingInfoGFX, getGFXReward,
    unStakeGFX, claimGFX, exitGFX,
    getTotalRewardGFX, getTotalStackedBalanceGFX,
    // getGLDHistory, getGLDBalance, approveGLD,
    // swapGLD, stakeGLD, stakingInfoGLD, getGLDReward,
    // unStakeGLD, claimGLD, exitGLD,
    // getTotalRewardGLD, getTotalStackedBalanceGLD,
    // getEGLDHistory, getEGLDBalance, approveEGLD,
    // swapEGLD, stakeEGLD, stakingInfoEGLD, getEGLDReward,
    // unStakeEGLD, claimEGLD, exitEGLD,
    // getTotalRewardEGLD, getTotalStackedBalanceEGLD,
    stakeBUSD, stakingInfoBUSD,
    getBUSDReward, unStakeBUSD, claimBUSD,
    exitBUSD,getTotalRewardBUSD, getTotalStackedBalanceBUSD,
    getTotalRewardInMemoryBUSD,approveBUSD, swapBUSD,
    getUSDTInterest,getUSDCInterest,getBUSDInterest,
    getGLDInterest,getEGLDInterest,getGFXInterest,
    getDAIInterest,
    
})(
    header
);
