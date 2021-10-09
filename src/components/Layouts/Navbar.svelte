<script>
	
	import { Link } from 'svelte-navigator';

	function handleExpandNavbar(){
	  	if (event.target.classList.contains("nse")) {
	    	document.getElementById("navbar--main").classList.toggle("show");
	  	} else if (event.target.classList.contains("nav-link")) {
	    	document.getElementById("navbar--main").classList.remove("show");
	  	}
	}

</script>

<header class="header custom-header">
    <!--start navbar-->
    <nav class="navbar navbar-expand-lg fixed-top custom-nav white-bg affix">
        <div class="container">
            <a class="navbar-brand" href="/">
            	<img src="//www.my-topup.store/assets/img/favicon.webp" width="60" alt="logo" class="img-fluid">
            </a>
            <button on:click={handleExpandNavbar} class="navbar-toggler navbar-toggler-d" type="button" id="mobile--nav-btn" aria-controls="navbar--main" aria-expanded="false" aria-label="Toggle navigation">
                <span class="ti-menu nse"></span>
            </button>

            <div class="collapse navbar-collapse main-menu" id="navbar--main">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link class="nav-link page-scroll" to="/" role="button">
                            Home
                        </Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link page-scroll dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services
                        </a>
                        <div class="dropdown-menu submenu" aria-labelledby="servicesDropdown">
                            <Link class="dropdown-item" to="/services/social-media-engagement">Social Media Engagement</Link>
                            <Link class="dropdown-item" to="/">Social Media Marketing <span class="badge badge-danger badge-pill ml-2">New</span></Link>
                            <Link class="dropdown-item" to="/">Website Solutions <span class="badge badge-danger badge-pill ml-2">New</span></Link>
                        </div>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="https://dash.my-topup.store/knowledge">How To</a>
                    </li>

                    <li class="nav-item">
                    	<Link class="nav-link page-scroll" to="/blogs">Blogs</Link>
                    </li>
                   	
                   	<li class="nav-item">
                        <Link class="nav-link page-scroll" to="/terms-of-services">Kentuan Layanan</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link page-scroll" to="/contact">Contact</Link>
                    </li>
                </ul>
                <div class="d-flex ml-4">
                	<Link to="/" class="btn outline-btn">Login</Link>
                </div>
            </div>
        </div>
    </nav>
    <!--end navbar-->
</header>