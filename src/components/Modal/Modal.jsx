import { Component } from "react";
import PropTypes from "prop-types"
import { createPortal } from "react-dom";
const modalPortal = document.querySelector("#modal-root");

export class Modal extends Component{
    closeByEsc = () => {
        this.props.onClick("");
    }
    overlayClickHendler = event => {
        if(event.target === event.currentTarget){
            this.props.onClick("");
        }
    }
    componentDidMount(){
        window.addEventListener("keydown", this.closeByEsc);
    }
    componentWillUnmount(){
        window.removeEventListener("keydown", this.closeByEsc);
    }
    render(){
        return(
            createPortal(<div onClick={this.overlayClickHendler} className="Overlay">
                <div className="Modal">
                    <img src={this.props.source} alt="Big img"/>
                </div>
            </div>, modalPortal)
        )
    }
}

Modal.propTypes = {
    source: PropTypes.string,
    onClick: PropTypes.func
}