<script >
	import Layout from '@component/Layout.svelte';
	import {Link, useLocation} from 'svelte-navigator'
	export let slug;

	import { onMount } from 'svelte';
	import  { AwesomeGraphQLClient }  from 'awesome-graphql-client';

	let client = new AwesomeGraphQLClient({
		endpoint: 'https://api-ap-northeast-1.graphcms.com/v2/ckuia1cja13ab01z0ddj67tnk/master'
	})

	let meta;

	const formatDate = (dateString) => {
	  	const options = { year: "numeric", month: "long", day: "numeric" }
	  	return new Date(dateString).toLocaleDateString(undefined, options)
	}


	let fetchPost = async( ) => {
		try {
			let data = await client.request(`
						query GetArticle {
						  post(where:{slug:"${slug}"}) {
						    title
						    createdAt
						    createdBy {
						      name
						    }
						    content {
						    	html
						    }
						    title
						    tags {
						      title
						      slug
						    }
						    coverImage {
						      url(transformation: {document: {output: {format: webp}}, image: {}})
						    }
						    description
						    keywords
						  }
						  posts(last: 5) {
						    slug
						    title
						    coverImage {
						      url(transformation: {document: {output: {format: webp}}, image: {}})
						    }
						    excerpt
						    date
						  }
						}
					`)

			return data;
		} catch (er){
			alert('Gagal memuat postingan');
			throw new Error('Gagal memuat data');
		} finally{
			window.focus();

			setTimeout(() =>{ 
				window.scrollTo(0,0)
			}, 200)
		}


	}

	// onMount(async() => {
	// 	try {
	// 		let data = (await )

	// 	console.log(data)

	// 	$: article = data['post'];
	// 	$: articles = data['posts'];

	// 	$: meta = data['post']['seo'] !== null ? data['post']['seo'] : { title: data['post']['title'] }

	// 	console.log(meta)


	// 	}catch(er){
	// 		console.error(er)
	// 	}


	// });

</script>

<svelte:head>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7660829943092451"
     crossorigin="anonymous"></script>
</svelte:head>

{#await fetchPost()}

		<Layout>
		<div class="module ptb-100 mt-5">
	        <div class="container">
	            <div class="row">
	                <div class="col-lg-8 col-md-8">
	                    <!-- Post-->
	                    <article class="post ">
	                        <div class="post-preview">
	                        	
								<div class="ph-picture"></div>		
	                        <div class="post-wrapper">
	                            <div class="post-header">
	                                <h1 class="post-title">
	                                	<div class="ph-col-12"></div>
	                                </h1>
	                                <ul class="post-meta">
	                                    <div class="ph-row">
											<div class="ph-col-2"></div>
											<div class="ph-col-3"></div>
										</div>
									</ul>
	                            </div>
	                            <div class="prose md:prose lg:prose-lg xl:prose-xl">
	                                <div class="ph-row">
										<div class="ph-col-12 big"></div>
										<div class="ph-col-12 big"></div>
										<div class="ph-col-10"></div>
										<div class="ph-col-10"></div>
										<div class="ph-col-12"></div>
										<br>
										<div class="ph-col-11"></div>
										<div class="ph-col-6"></div>
									</div>
	                            </div>
	                            <div class="post-footer">
	                                <div class="post-tags">
	                                	<div class="ph-row">
	                                		<div class="ph-col-2"></div>
	                                		<div class="ph-col-2"></div>
	                                		<div class="ph-col-2"></div>
	                                	</div>
	                                </div>
	                            </div>
	                        </div>
	                    </article>
	                    <!-- Post end-->

	                    
	                </div>
	                <div class="col-lg-4 col-md-4">
	                    <div class="sidebar-right pl-4">

	                        <!-- Search widget-->
	                        <aside class="widget widget-search">
	                            <form>
	                                <input class="form-control" type="search" placeholder="Type Search Words">
	                                <button class="search-button" type="submit"><span class="ti-search"></span></button>
	                            </form>
	                        </aside>


	                        

	                        <!-- Recent entries widget-->
	                        <aside class="widget widget-recent-entries-custom">
	                            <div class="widget-title">
	                                <h6>Recent Posts</h6>
	                            </div>
	                            <ul>
                                <li class="clearfix">
                                    <div class="ph-item">
										<div class="ph-col-4">
											<div class="ph-picture"></div>
										</div>
										<div>
											<div class="ph-row">
												<div class="ph-col-12 big"></div>
												<div class="ph-col-10"></div>
												<div class="ph-col-10"></div>
												<br>
												<div class="ph-col-6"></div>
											</div>
										</div>
									</div>
                                </li>
	                                
	                            </ul>
	                        </aside>

	                        

	                        <!-- Tags widget-->
	                        <aside class="widget widget-tag-cloud">
	                            <div class="widget-title">
	                                <h6>Tags</h6>
	                            </div>
	                            <div class="tag-cloud">
						        	<div class="ph-row">
						        		<div class="ph-col-2"></div>
						        		<div class="ph-col-2"></div>
						        		<div class="ph-col-2"></div>
						        	</div>
	                            	
	                            </div>
	                        </aside>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</Layout>

{:then {post,posts}}

	<Layout title={post.title} description={post.description} keywords={post.keywords} image={post.coverImage.url}>
		<div class="module ptb-100 mt-5">
	        <div class="container">
	            <div class="row">
	                <div class="col-lg-8 col-md-8">
	                    <!-- Post-->
	                    <article class="post ">
	                        <div class="post-preview">
	                        	<img src={post.coverImage.url} alt={post.title} class="img-fluid"></div>
	                        <div class="post-wrapper">
	                            <div class="post-header">
	                                <h1 class="post-title">{post.title}</h1>
	                                <ul class="post-meta">
	                                    <li>{formatDate(post.createdAt)}</li>
	                                    {#if post.tags.length != 0}
		                                    <li>In 
	                                    		<Link to="/blogs/tags/{post.tags[0].slug}">{post.tags[0].title}</Link>	
		                                    </li>
		                                {/if}
									</ul>
	                            </div>
	                            <div class="prose md:prose lg:prose-lg xl:prose-xl">
	                                {@html post.content.html}
	                            </div>
	                            <div class="post-footer">
	                                <div class="post-tags">
	                                	{#if post.tags.length != 0}
		                                  
	                                    	{#each post.tags as tag}
	                                    		<Link to="/blogs/tags/{tag.slug}">{tag.title}</Link>
	                                    	{/each}
		                                  
		                                {/if}

	                                </div>
	                            </div>
	                        </div>
	                    </article>
	                    <!-- Post end-->

	                    
	                </div>
	                <div class="col-lg-4 col-md-4">
	                    <div class="sidebar-right pl-4">

	                        <!-- Search widget-->
	                        <aside class="widget widget-search">
	                            <form>
	                                <input class="form-control" type="search" placeholder="Type Search Words">
	                                <button class="search-button" type="submit"><span class="ti-search"></span></button>
	                            </form>
	                        </aside>


	                        

	                        <!-- Recent entries widget-->
	                        <aside class="widget widget-recent-entries-custom">
	                            <div class="widget-title">
	                                <h6>Recent Posts</h6>
	                            </div>
	                            <ul>
                      
                      			{#each posts as artc}
          				          	<li class="clearfix">
	                                    <div class="wi">
	                                    	<a href="/blog/{artc.slug}">
	                                    		<img src={artc.coverImage.url} alt="{artc.title}" class="img-fluid rounded">
	                                    	</a>
	                                    </div>
	                                    <div class="wb">
	                                    	<h6>{artc.title}</h6>
	                                    	<a href="/blog/{artc.slug}">
	                                    		{artc.excerpt.substr(0, 50)}
	                                    	</a>
	                                    	<span class="post-date">
		                                    	{formatDate(artc.date)}
		                                	</span>
	                            		</div>
	                                </li>
                      			{/each}


	                            </ul>
	                        </aside>

	                        <!-- Subscribe widget-->
	                        <aside class="widget widget-categories">
	                            <div class="widget-title">
	                                <h6>Newsletter</h6>
	                            </div>
	                            <p>Enter your email address below to subscribe to my newsletter</p>
	                            <form action="#" method="post" class="d-none d-md-block d-lg-block">
	                                <input type="text" class="form-control input" id="email-footer" name="email" placeholder="info@yourdomain.com">
	                                <button type="submit" class="btn solid-btn btn-block btn-not-rounded mt-3">Subscribe</button>
	                            </form>
	                        </aside>

	                        <!-- Tags widget-->
	                        <aside class="widget widget-tag-cloud">
	                            <div class="widget-title">
	                                <h6>Tags</h6>
	                            </div>
	                            <div class="tag-cloud">

			                    	{#if post.tags.length != 0}
			                              
			                        	{#each post.tags as tag}
			                        		<Link to="/blogs/tags/{tag.slug}">{tag.title}</Link>
			                        	{/each}
			                          
			                        {/if}
                            	
	                            </div>
	                        </aside>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</Layout>


{/await}


<style lang="postcss">
	@import url('https://unpkg.com/@tailwindcss/typography@0.4.1/dist/typography.min.css');
	@import url('https://unpkg.com/placeholder-loading@0.5.0/dist/css/placeholder-loading.min.css');
</style>