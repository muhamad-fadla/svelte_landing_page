<script>
	import { onMount } from 'svelte';

	import Navbar from './Layouts/Navbar.svelte';
	import Footer from './Layouts/Footer.svelte';
	import { fade } from 'svelte/transition';

	let brand_name = "Sociality"
	let brand_domain = "sociality.my.id"

	export let title = "Jasa Social Media & Digital Marketing Indonesia - " + brand_name;
	export let description = "Jasa Social Media & Digital Marketing Indonesia dengen harga terjangkau";
	export let keywords = "social media, social media marketing, digital merketing, followers, instgram followers free - " + brand_domain;
	export let image = "https://miaw.my-topup.store/assets/img/favicon.webp";

	// onMount(() => {

	// 	console.log(normalize)
	// 	console.log(typeof Boolean(normalize))
	// 	if(Boolean(normalize)){
	// 		if (window.pageYOffset > 60) {
	//             document.querySelector(".navbar").classList.add("affix");
	//         } else {
	//             document.querySelector(".navbar").classList.remove("affix");
	//         }
	// 	}
	// });


	// // if(Boolean(normalize) === true){
	// // 	window.addEventListener( 'scroll', function () {        
	// //         if (window.pageYOffset > 60) {
	// //             document.querySelector(".navbar").classList.add("affix");
	// //         } else {
	// //             document.querySelector(".navbar").classList.remove("affix");
	// //         }
	// //     });
	// // }

    if (typeof gtag !== "undefined") {
        gtag("event", "page_view", {
            page_title: title,
            page_location: window.location.href,
            page_path: window.location.hash.slice(1),
            send_to: "G-SV6EXBTFVH",
        });
    }

	onMount(() => {
		window.focus();

	    window.scrollTo(0, 0);
	})

</script>	

<Navbar />
 
<div class="main" transition:fade|local="{{delay: 150, duration: 300}}">		
	<slot />
</div>

<Footer />


<svelte:head>
	<title>{title}</title>
    <meta name="description" itemprop="description"  content="{description}" />
    <meta name="keywords"  content="{keywords}" />

    <meta property="og:description" content="{description}" />
    <meta property="og:title"  content="{title}" />

    <meta property="og:image:alt"  content="{brand_name} solusi online shop indonesia" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:site" content="@{brand_domain}" />
    <meta name="twitter:image" content="/assets/img/favicon.webp" />
    <meta name="twitter:description"  content="{description}">

    <meta property="og:url" content="https://{brand_domain}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="id-ID" />
    <meta property="og:locale:alternate" content="en-us" />
    <meta property="og:site_name" content="{brand_name}" />
    <meta  property="og:image" itemprop="image"  content={image} />
    <meta property="og:image" content={image} />
    <meta property="og:image:url" content={image} />
    
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","name":"{title}"}</script>
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"{title}"}</script>
</svelte:head>