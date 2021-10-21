<script>
	import Layout from '@component/Layout.svelte';
	import Hero from '@component/Hero.svelte';
</script>


<Layout title="Contact Us">

	<Hero top="Contact Us" 
		  headline="Kontak Kami"
		  paragraf=""
		  btn_text="Kontak"
		  btn_href="#read">
	</Hero>


      <!--about us section start-->
    <section id="read" class="about-us ptb-100 gray-light-bg">
        <div class="container">
            <div class="row">
                <div class="col-12 pb-3 message-box d-none">
                    <div class="alert alert-danger"></div>
                </div>
                <div class="col-md-5">
                    <div class="section-heading">
                        <h2>Contact With Us</h2>
                        <p>It's very easy to get in touch with us. Just use the contact form or pay us a
                            visit for a coffee at the office. Dynamically innovate competitive technology after an
                            expanded array of leadership.</p>
                    </div>
                    <div class="footer-address">
                        <h6><strong>Head Office</strong></h6>
                        <p>Jl Prof. Muh. Yamin, Jawa Tengah, Indonesia</p>
                        <ul>
                            <li><span>Phone: +628 5800 3929 76</span></li>
                            <li><span>Email : <a href="mailto:support@my-topup.store">support@my-topup.store</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

</Layout>