import React from 'react'

const Navbar = () => {
    return (
<nav class="navbar navbar-light bg-white">
  <div class="container-fluid">
        <a href="#" class="navbar-brand">Social Media</a>
        <form class="form-inline">
            <div class="input-group">
                <input type="text" class="form-control" aria-label="Recipient's username" placeholder="Search social media" aria-describedby="button-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button" id="button-addon2">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</nav>

    )
}

export default Navbar
