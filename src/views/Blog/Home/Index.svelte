
<script>
	import { onMount } from 'svelte';
	import { Link } from 'svelte-navigator';
	import Layout from '@component/Layout.svelte';
	import DoHero from '@component/DoHero.svelte';

	import  { AwesomeGraphQLClient }  from 'awesome-graphql-client';

	let client = new AwesomeGraphQLClient({
		endpoint: 'https://api-ap-northeast-1.graphcms.com/v2/ckuia1cja13ab01z0ddj67tnk/master'
	})

	export function preload(){
		console.log('ok')
	}


	const formatDate = (dateString) => {
	  	const options = { year: "numeric", month: "long", day: "numeric" }
	  	return new Date(dateString).toLocaleDateString(undefined, options)
	}

	let articles = client.request(`
							query getArticles {
							  posts(last: 25) {
							    title
							    createdAt
							    createdBy {
							      name
							    }
							    slug
							    title
							    tags {
							      title
							      slug
							    }
							    coverImage {
							      url(transformation: {document: {output: {format: webp}}, image: {}})
							    }
							    excerpt
							  }
							}
						`);

</script>

<svelte:head>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7660829943092451"
     crossorigin="anonymous"></script>
</svelte:head>

<Layout title="Our Blog">


	<section class="our-blog-section ptb-100  mt-5" >
		<div class="circles">
            <div class="point animated-point-1"></div>
            <div class="point animated-point-2"></div>
            <div class="point animated-point-3"></div>
            <div class="point animated-point-4"></div>
            <div class="point animated-point-5"></div>
            <div class="point animated-point-6"></div>
        </div>

        <div class="container">
        	{#await articles}
        		<div class="row">
		    		<div class="col-12">
		    			<div class="section-heading">
								<h2 class="section-title" >
									<span>Featured Post &nbsp;</span>
									<Link to="/blogs/featured-posts" style=" font-size: 15px;text-decoration: none;color: #999;">More</Link>
								</h2>
			            </div>
				            <div class="row">
				            		<script>
				            			window.scrollTo(0,0)
				            		</script>

				            		  <div class="col-md-4">
					                    <div class="single-blog-card card border shadow-sm">
					                    	<div class="ph-row">
					                    		<div class="ph-col-2"></div>
					                    	</div>

	        								<div class="ph-picture"></div>		

					                        <div class="card-body">
					                            <div class="post-meta mb-2">
					                                <ul class="list-inline meta-list">
					                                    <div class="ph-row">
															<div class="ph-col-4"></div>
															<div class="ph-col-3"></div>
														</div>
					                                </ul>
					                            </div>
					                            
					                            <div class="ph-row">
					                            	<br>
													<div class="ph-col-6 "></div>
													<br>
													<div class="ph-col-3"></div>
													<div class="ph-col-2"></div>
													<br>
													<div class="ph-col-5"></div>
													<br>
													<div class="ph-col-2"></div>
													<br>
													<div class="ph-col-5"></div>
													<div class="ph-col-4"></div>
													<br>
													<div class="ph-col-4"></div>
													<div class="ph-col-12"></div>
													<div class="ph-col-4"></div>
													<div class="ph-col-4"></div>
													<div class="ph-col-4"></div>
													<br>
													<div class="ph-col-6"></div>
													<div class="ph-col-4"></div>
													<div class="ph-col-4"></div>
													<div class="ph-col-5"></div>
												</div>
					                        </div>
					                    </div>
					                </div>

					                <div class="col-md-8">
					                	<div class="row">
							            	{#each [{},{},{},{}] as a}
								            	<div class="col-md-6">
									            	<div class="single-blog-card card border shadow-sm">
								                    	<div class="ph-row">
								                    		<div class="ph-col-2"></div>
								                    	</div>

			            								<div class="ph-picture"></div>		

								                        <div class="card-body">
								                            <div class="post-meta mb-2">
								                                <ul class="list-inline meta-list">
								                                    <div class="ph-row">
																		<div class="ph-col-2"></div>
																		<div class="ph-col-3"></div>
																	</div>
								                                </ul>
								                            </div>
								                            
								                            <div class="ph-row">
																<div class="ph-col-4"></div>
																<br>
																<div class="ph-col-12"></div>
																<div class="ph-col-2"></div>
																<div class="ph-col-8"></div>
																<div class="ph-col-4"></div>
															</div>
								                        </div>
								                    </div>
								                </div>
							            	{/each}
					                		
					                	</div>
					                </div>
				            </div>
				            <br>
				            <div class="row">
				            	{#each [{},{},{},{},{},{},{},{}] as a}
					            	<div class="col-md-4">
						            	<div class="single-blog-card card border shadow-sm">
					                    	<div class="ph-row">
					                    		<div class="ph-col-2"></div>
					                    	</div>

	        								<div class="ph-picture"></div>		

					                        <div class="card-body">
					                            <div class="post-meta mb-2">
					                                <ul class="list-inline meta-list">
					                                    <div class="ph-row">
															<div class="ph-col-2"></div>
															<div class="ph-col-3"></div>
														</div>
					                                </ul>
					                            </div>
					                            
					                            <div class="ph-row">
													<div class="ph-col-4"></div>
													<br>
													<div class="ph-col-12"></div>
													<div class="ph-col-2"></div>
													<div class="ph-col-8"></div>
													<div class="ph-col-4"></div>
												</div>
					                        </div>
					                    </div>
					                </div>
				            	{/each}
				            </div>
		    		</div>
		    	</div>
        	{:then {posts}}

        	
		    	<div class="row">
		    		<div class="col-12">
		    			<div class="section-heading">
								<h2 class="section-title" >
									<span>Featured Post &nbsp;</span>
									<Link to="/blogs/featured-posts" style=" font-size: 15px;text-decoration: none;color: #999;">More</Link>
								</h2>
			            </div>
				            <div class="row">
				            		<script>
				            			window.scrollTo(0,0)
				            		</script>

				            		  <div class="col-md-4">
					                    <div class="single-blog-card card border shadow-sm">
					                    	<a href="/blogs/tag/{posts[0].tags[0].slug}">
					                    		
						                        <span class="category position-absolute badge badge-pill badge-primary">
						                        	{posts[0].tags[0].title}
						                    	</span>
					                    	</a>

					                        <img src="{posts[0].coverImage.url}" class="card-img-top position-relative" alt="{posts[0].title}">
					                        <div class="card-body">
					                            <div class="post-meta mb-2">
					                                <ul class="list-inline meta-list">
					                                    <li class="list-inline-item">{formatDate(posts[0].createdAt)}</li>
					                                    <li class="list-inline-item">{posts[0].createdBy.name}</li>
					                                </ul>
					                            </div>
					                            <h3 class="h5 card-title"><Link to="/blog/{posts[0].slug}">{posts[0].title}</Link></h3>
					                            <p class="card-text">{posts[0].excerpt}</p>
					                            <Link to="/blog/{posts[0].slug}" class="detail-link">Read more <span class="ti-arrow-right"></span></Link>
					                        </div>
					                    </div>
					                </div>

					                <div class="col-md-8">
					                	<div class="row">
							            	{#each posts.slice(1,4) as article}
									            	<div class="col-md-6">
									                    <div class="single-blog-card card border shadow-sm">
									                        
									                        <span class="category position-absolute badge badge-pill badge-primary">
									                        	{article.tags[0].title}
									                    	</span>
								                    	
									                        <div class="card-img-top position-relative" style="background-image: url('{article.coverImage.url}'); background-size: cover;height: 100px !important;"></div>
									                        <div class="card-body">
									                            <div class="post-meta mb-2">
									                                <ul class="list-inline meta-list">
									                                    <li class="list-inline-item">{formatDate(article.createdAt)}</li>
									                                    <li class="list-inline-item">{article.createdBy.name}</li>
									                                </ul>
									                            </div>
									                            <h3 class="h5 card-title"><Link to="/blog/{article.slug}">{article.title}</Link></h3>
									                            <p class="card-text">{article.excerpt}</p>
									                            <Link to="/blog/{article.slug}" class="detail-link">Read more <span class="ti-arrow-right"></span></Link>
									                        </div>
									                    </div>
									                </div>
							            	{/each}
					                		
					                	</div>
					                </div>
				            </div>	
		    		</div>
		    	</div>

		    	<div class="row">
	            	{#each posts.slice(4) as article}
			            	<div class="col-md-6">
			                    <div class="single-blog-card card border shadow-sm">
			                        
			                        <span class="category position-absolute badge badge-pill badge-primary">
			                        	{article.tags[0].title}
			                    	</span>
		                    	
			                        <div class="card-img-top position-relative" style="background-image: url('{article.coverImage.url}'); background-size: cover;height: 100px !important;"></div>
			                        <div class="card-body">
			                            <div class="post-meta mb-2">
			                                <ul class="list-inline meta-list">
			                                    <li class="list-inline-item">{formatDate(article.createdAt)}</li>
			                                    <li class="list-inline-item">{article.createdBy.name}</li>
			                                </ul>
			                            </div>
			                            <h3 class="h5 card-title"><Link to="/blog/{article.slug}">{article.title}</Link></h3>
			                            <p class="card-text">{article.excerpt}</p>
			                            <Link to="/blog/{article.slug}" class="detail-link">Read more <span class="ti-arrow-right"></span></Link>
			                        </div>
			                    </div>
			                </div>
	            	{/each}
            		
            	</div>

        	{/await}

      
        </div>

    </section>


    <DoHero></DoHero>
</Layout>


<style >

	.section-title span {
	    border-bottom: 1px solid rgba(0,0,0,.44);
	    display: inline-block;
	    padding-bottom: 10px;
	    margin-bottom: -1px;
	    text-transform: capitalize;
	}

	.section-title h2 {
	    border-bottom: 1px solid #eee;
	    margin-bottom: 25px;
	    font-weight: 700;
	    font-size: 1.4rem;
	    margin-bottom: 30px;
	}

	@import url('https://unpkg.com/placeholder-loading@0.5.0/dist/css/placeholder-loading.min.css');
</style>