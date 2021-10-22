import React from 'react'

const HomeProfile = () => {
    return (
<div class="col-md-3">
    {/* <div class="fixed-position"> */}
    <div class="card">
        <div class="card-body">
            <div class="d-flex  align-items-center">
                <div class="mr-2">
                    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""/>
                </div>
                <div class="ml-2">
                    <div class="h5 m-0">@LeeCross</div>
                    <div class="col-md-11 text-truncate">Developer of web applicationssdfgsd</div>
                </div>
            </div>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div class="h6 text-muted">Followers</div>
                    <div class="h5">5.2342</div>
                </li>
                <li class="list-group-item">
                    <div class="h6 text-muted">Following</div>
                    <div class="h5">6758</div>
                </li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
    </div>
{/* </div> */}
</div>
    )
}

export default HomeProfile
