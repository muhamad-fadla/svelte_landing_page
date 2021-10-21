<script>
	export let top,
			   headline,
			   paragraf,
			   btn_text,
			   btn_href;
</script>

<section class="hero-section hero-section-3 ptb-100">
        <!--animated circle shape start-->
        <div class="circles">
            <div class="point animated-point-1"></div>
            <div class="point animated-point-2"></div>
            <div class="point animated-point-3"></div>
            <div class="point animated-point-4"></div>
            <div class="point animated-point-5"></div>
            <div class="point animated-point-6"></div>
        </div>
        <!--animated circle shape end-->
        <div class="container" id="animation-area-1">
            <div class="row align-items-center justify-content-center">
                <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div class="hero-content section-title text-center text-lg-left my-5 mt-lg-0">
                        <span class="text-uppercase color-secondary font-weight-bold">
                        	{top}
                    	</span>
                        <h1 class="font-weight-bold">
                        	{headline}
                    	</h1>
                        <p class="lead">
                        	{paragraf}
                    	</p>
                        <div class="action-btn mt-4">
                            <a href="{btn_href}" class="btn solid-btn">{btn_text}</a>
                        </div>
                    </div>
                </div>
                <div class="col-9 col-md-7 col-lg-5 offset-xl-1 align-self-sm-end">
                    <div class="hero-img position-relative">
                        <div class="image-bg-positioning">
                            <img src="https://miaw.my-topup.store/assets/img/details-1.webp" alt="" class="img-fluid">
                        </div>
                        <div class="animation-item d-none d-md-block d-lg-block">
                            <div class="p-4 w-75 rounded-custom d-flex white-bg hero-animated-card-1">
                                <p class="gr-text-11 mb-0 text-mirage-2">“Wah udah murah, kualitas nya mantep banget lagi”</p>
                                <div class="small-card-img ml-3">
                                    <img src="https://miaw.my-topup.store/assets/img/people/team-2.webp" alt="My Topup Store" width="80px" class="rounded-circle img-fluid">
                                </div>
                            </div>
                            <div class="p-4 w-75 rounded-custom d-flex secondary-bg hero-animated-card-2">
                                <div class="small-card-img mr-3 text-white">
                                    <img src="https://miaw.my-topup.store/assets/img/people/team-5.webp" alt="My Topup Store" width="80px" class="rounded-circle img-fluid">
                                </div>
                                <p class="gr-text-11 mb-0 text-white">“Mantep dah, bintang 5 untuk my topup.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>