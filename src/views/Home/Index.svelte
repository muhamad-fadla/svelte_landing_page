<script>
	import Layout from '@component/Layout.svelte';
	import DoHero from '@component/DoHero.svelte'
	import Hero from '@component/Hero.svelte'
</script>


<Layout >
	<!--hero section start-->

	<Hero top="Untuk Anda" 
		  headline="Sebuah Solusi Untuk UMKM Indonesia"
		  paragraf="Sebuah layanan peningkatkan interaksi akun untuk menambah kepercayaan konsumen terhadap brand Anda di Social Media."
		  btn_text="Daftar Sekarang"
		  btn_href="/">
	</Hero>
    <!--hero section end-->

    <section class="pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-4 mb-lg-0">
                    <div class="single-fact p-3 text-center">
                        <h3 class="title display-3 font-weight-bolder">236</h3>
                        <p class="mb-0">Total Pengguna Aktif.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-4 mb-lg-0">
                    <div class="single-fact p-3 text-center">
                        <h3 class="title display-3 font-weight-bolder">1.398</h3>
                        <p class="mb-0">Total Pesanan.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-4 mb-lg-0">
                    <div class="single-fact p-3 text-center">
                        <h3 class="title display-3 font-weight-bolder">200+</h3>
                        <p class="mb-0">Total Layanan.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


   	<!--about us section start-->
   	<DoHero />
    <!--about us section end-->

</Layout>