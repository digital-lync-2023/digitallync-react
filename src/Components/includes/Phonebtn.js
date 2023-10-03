import React, { useState } from "react";
import {Link} from 'react-router-dom';

class Phonebtn extends React.Component{
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    render(){
      return (        
            <div>
                {
                    this.state.show?  <div className="modal_caller active">
                    <div className="head_caller"> <span className="contact_txt_caller">Call Us (Or) Whatsapp Us</span>   </div>
                    <div className="content_caller"> <a className="popupNumber" href="tel:+916304982304">+91 6304982304</a> 
                  </div></div> : null
                }
                <Link onClick={()=>{this.setState({show:!this.state.show})}} className="btn_caller">   <img src="images/call_o_o.png" alt="Digital Lync- Call" title="Digital Lync- Call" /> </Link>
            </div>
            );
    }
  }

  export default Phonebtn;


 