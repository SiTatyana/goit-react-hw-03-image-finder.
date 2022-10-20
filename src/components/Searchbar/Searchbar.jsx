import { Component } from "react";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";

export class SearchBar extends Component{
    state = {
      request: ""
    }
    handleChage = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.request.trim());
    }
    render(){
        return(
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <FiSearch size={20}/>
                    </button>
                    <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleChage}
                    name="request"
                    value={this.state.request}
                    />
                </form>
            </header>
        )
    } 
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func
}
