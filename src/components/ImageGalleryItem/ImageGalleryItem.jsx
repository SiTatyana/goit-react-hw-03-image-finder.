import { Component } from "react";
import PropTypes from "prop-types"

export class ImageGalleryItem extends Component{
    handleClick = () => {
        this.props.onClick(this.props.largeImage);
    }
    render(){
        const {src, alt} = this.props;
        return(
            <li className="ImageGalleryItem">
                <img onClick={this.handleClick} className="ImageGalleryItem-image" src={src} alt={alt}/>
            </li>
        )
    }
}


ImageGalleryItem.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string,
    alt: PropTypes.string,
    largeImage: PropTypes.string
}
