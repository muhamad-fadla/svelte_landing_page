<script>
	import { Router, Link, Route } from "svelte-navigator";

	import Home from '@view/Home/Index.svelte';
	import Contact from '@view/Contact/Index.svelte';
	import TermsOfService from '@view/TermsOfService/Index.svelte';
	import SocialMediaEngagement from '@view/Services/SocialMediaEngagement/Index.svelte';

	import HomeBlog from '@view/Blog/Home/Index.svelte';

</script>

<main>
	<Router>
		<Route path="/" component={Home} />
		<Route path="/terms-of-services" component={TermsOfService} />
		<Route path="/contact" component={Contact} />
		<Route path="/services/*">
			<Route path="/social-media-engagement" component={SocialMediaEngagement} />
		</Route>

		<Route path="/blogs/*">
			<Route path="/" component={HomeBlog} />
		</Route>
	</Router>
</main>

<style global lang="postcss">
	@import url("./assets/css/bootstrap.min.css");
	@import url("./assets/css/animate.min.css");
	@import url("./assets/css/style.css");
	@import url("./assets/css/responsive.css");
	@import url("./assets/css/fonts.css");
	@import url("//cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.min.css");

</style>