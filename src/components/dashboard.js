import React, { Component } from 'react'
import { connect } from 'react-redux';
import setAddress from '../utils/MetamaskInject'


class dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          loggedAddress:""
        }
     
        this.click = this.click.bind(this)
    }

    componentDidMount = async ()=> {
      const add = await setAddress()
      if(add){

          console.log("checkMetaMask",add)
          this.setState({loggedAddress:add})
      }
      else{
        this.props.history.push("/")
      }
      
        // if(this.props.location.state)
        // this.setState({loggedAddress:this.props.location.state.address})

      
    };    

    click=(e)=>{
      console.log("sdsdsd",e)
    
      this.props.history.push("/zap")
    }



    render() {
      return (
  
        <div className="main-container page services">
          <header className="p-4">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <a href="/">
                  <img className="img-fluid logo" src="assets/images/logo.png" alt="Logo" />
                </a>
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
          <div className="container-fluid">
            <div className="row m-0 viewport">
              <div className="col-md-6 p-0">
                <div className="d-flex justify-content-end align-items-center h-100 earn-card">
                  <div className="grey-bg-outter">
                    <div className="grey-bg" />
                    <div className="d-flex justify-content-end align-items-center">
                      <img className="img-fluid service-img" src="assets/images/Savings-amico-1.png" alt="Earn picture" />
                      <a href={"/earn"} >

                        <div className="earn">
                          <div className="icon-round">
                            <div className="icon" />
                          </div>
                          <h4 className="title">Earn</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-0">
                <div className="d-flex justify-content-start align-items-center h-100 zap-card">
                  <div className="grey-bg-outter">
                    <div className="grey-bg" />
                    <div className="d-flex justify-content-start align-items-center">
                    
                      <a href={"/platform"} >
                        <div className="zap">
                          <div className="icon-round">
                            <div className="icon" />
                          </div>
                          <h4 className="title">zap</h4>
                        </div>
                      </a>
                      <img className="img-fluid service-img" src="assets/images/Calculator-rafiki-1.png" alt="Zap picture" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
export default dashboard;
