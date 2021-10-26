import React, { Component } from 'react'


class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-light bg-white sticky-top">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">Social Media</a>
                    <form className="form-inline">
                        <div className="input-group">
                            <input type="text" className="form-control" aria-label="Recipient's username" placeholder="Search social media" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="button" id="button-addon2">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navbar
