import React from 'react';
import { connect } from "react-redux";
import setAddress from '../utils/MetamaskInject'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // const web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/6a4dff93883f4e6f9dc42cf63319d789");
        // console.log(web3)
        this.checkMetaMask = this.checkMetaMask.bind(this);

    }



    checkMetaMask = async () => {
        const add = await setAddress()
        if(add){

            console.log("checkMetaMask",add)
            this.props.history.push("/dashboard",{ address:add })
        }
        else{
            alert("First connect Metamask!")
        }
        





    }
    render() {
        return (

            <div class="main-container">
                <div class="video-container">
                    <div class="overlay"></div>
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src="assets/videos/landing-page-video.mov" type="video/mp4" />
                    </video>
                    <div class="content-container h-100">
                        <div class="d-flex justify-content-center align-items-center h-100">
                            <div class="text-center d-flex flex-column content">
                                <a href="index.html" class="logo">
                                    <img class="img-fluid" src="assets/images/g-logo.svg" alt="Logo" />
                                </a>
                                <img class="img-fluid gold-finance" src="assets/images/gold-finance.svg" alt="Gold Finance img" />
                                <a onClick={this.checkMetaMask} class="btn cstm-btn white-bg"><span class="wolf-icon"></span>Connect via metamask</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default Home;
