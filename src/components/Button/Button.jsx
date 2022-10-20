import { Component } from "react";
import PropTypes from "prop-types";

export class Button extends Component{
    handleClick = () => {
        this.props.onClick();
    }
    render(){
        return(
            <button type="button" className="Button" onClick={this.handleClick}>Load more</button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func
}

