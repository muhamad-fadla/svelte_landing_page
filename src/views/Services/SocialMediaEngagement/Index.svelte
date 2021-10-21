<script>
	import { onMount } from 'svelte';
	import Layout from '@component/Layout.svelte';
	import Hero from '@component/Hero.svelte';
	import { Grid } from "gridjs";

	let tables = new Grid({
		  columns: ['#', 'Nama Layanan', 'Kategori', 'Harga', 'Harga Reseller'],
		  data: [
		  	['no data','no data','no data','no data','no data']
		  ],
		  search: true,
		  sort: true,
		})

	onMount(() => {
		tables.render(document.getElementById("servicesTable"));
	})

</script>

<style lang="postcss">
	@import url("https://unpkg.com/gridjs@5.0.2/dist/theme/mermaid.min.css");
</style>

<Layout title="Social Media Engagement" description="Social Media Engagement - Jasa Social Media & Digital Marketing Indonesia dengen harga terjangkau.">

	<div class="main">

	<Hero top="SME" 
		  headline="Social Media Engagement"
		  paragraf="Layanan meningkatkan interaksi akun untuk menambah kepercayaan konsumen terhadap brand Anda di Social Media."
		  btn_text="Harga & Detail"
		  btn_href="#read">
	</Hero>

    <!--hero section end-->


      <!-- ======= App Features Section ======= -->
    <section id="read" class="features ptb-100 gray-light-bg">
      <div class="container">

        <div class="section-title">
        	<span class="text-uppercase color-secondary sub-title">Kami Hadir</span>
   		    <h2>Daftar Layanan</h2>
        </div>

        <div class="row mt-4">
        	<div class="col-12">
				<div id="servicesTable"></div>
        	</div>
        </div>

      </div>
    </section><!-- End App Features Section -->
</div>

	
</Layout>