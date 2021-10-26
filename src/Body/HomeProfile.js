import React, { Component } from 'react'



class HomeProfile extends Component {
    render(){
        return (
            <div className="card">
                <div className="card-body">
                    <div className="d-flex  align-items-center">
                        <div className="mr-2">
                            <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""/>
                        </div>
                        <div className="ml-2">
                            <div className="h5 m-0" style={{ fontSize: 18, textAlign: 'left' }}>@LeeCross1</div>
                            <div className="col-md-11 text-truncate">Developer of web applicationssdfgsd</div>
                        </div>
                    </div>
                </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="h6 text-muted mb-0">Followers</div>
                            <div className="h5">5.2342</div>
                        </li>
                        <li className="list-group-item">
                            <div className="h6 text-muted mb-0">Following</div>
                            <div className="h5">6758</div>
                        </li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
            </div>
        )
    }
}

export default HomeProfile
