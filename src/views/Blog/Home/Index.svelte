
<script>
	import { onMount } from 'svelte';
	import { Link } from 'svelte-navigator';
	import Layout from '@component/Layout.svelte';

	import  { AwesomeGraphQLClient }  from 'awesome-graphql-client';

	let client = new AwesomeGraphQLClient({
		endpoint: 'https://api-ap-northeast-1.graphcms.com/v2/ckuia1cja13ab01z0ddj67tnk/master'
	})

	let articles = [];
	let latest_article;

	const formatDate = (dateString) => {
	  	const options = { year: "numeric", month: "long", day: "numeric" }
	  	return new Date(dateString).toLocaleDateString(undefined, options)
	}

	onMount(async () => {

		try {

			articles = (await client.request(`
								query getArticles{
									posts {
									    id
									    seo() {
									      title
									      keywords
									      description
									    }
									    createdAt
									    author {
									      name
									    }
									    slug
									    title
									    tags
									    coverImage {
									      url
									    }
									    content {
									    	text
									    }
									}
								}
							`))['posts'];
		} catch (er){
			console.error(er);
			alert('Gagal mengambil postingan')
		}

		latest_article = articles[0];

		console.log(latest_article)

		articles.splice(0,1);
	});


</script>

<style lang="css">

	.blog-image-d {
		background-size: cover;
		height: 100px !important;
	}

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
</style>

<Layout title="Our Blog" normalize="false">


	<section class="our-blog-section ptb-100  mt-4" >
		<div class="circles">
            <div class="point animated-point-1"></div>
            <div class="point animated-point-2"></div>
            <div class="point animated-point-3"></div>
            <div class="point animated-point-4"></div>
            <div class="point animated-point-5"></div>
            <div class="point animated-point-6"></div>
        </div>

        <div class="container">
           <!--  <div class="row">
                <div class="col-md-12">
                    <div class="section-heading mb-5">
                        <h2>
                        	<span>	
                    		    Featured
                        	</span>
                        	
                        	<Link to="/" class="d-block pull-right blog-d-more">More</Link>
                    	</h2>
                        <hr>
                    </div>
                </div>
            </div> -->
            <div class="section-heading">
            	
					<h2 class="section-title" >
						<span>Featured Post &nbsp;</span>
					
					</h2>
            </div>
            <div class="row">

            	{#if articles.length !== 0}

	                <div class="col-md-4">
	                    <div class="single-blog-card card border shadow-sm">

	                    	{#each latest_article.tags as tag}
		                        <span class="category position-absolute badge badge-pill badge-primary">
		                        	{tag}
		                    	</span>
	                    	{/each}

	                        <img src="{latest_article.coverImage.url}" class="card-img-top position-relative" alt="{latest_article.title}">
	                        <div class="card-body">
	                            <div class="post-meta mb-2">
	                                <ul class="list-inline meta-list">
	                                    <li class="list-inline-item">{formatDate(latest_article.createdAt)}</li>
	                                    <li class="list-inline-item">{latest_article.author.name}</li>
	                                </ul>
	                            </div>
	                            <h3 class="h5 card-title"><a href="#">{latest_article.title}</a></h3>
	                            <p class="card-text">{latest_article.content.text.slice(0,50)}</p>
	                            <Link to="/blogs/{latest_article.slug}" class="detail-link">Read more <span class="ti-arrow-right"></span></Link>
	                        </div>
	                    </div>
	                </div>

	                <div class="col-md-8">
	                	<div class="row">
			            	{#each articles as article}
					            	<div class="col-md-6">
					                    <div class="single-blog-card card border shadow-sm">
					                        
					                        {#each article.tags as tag}
						                        <span class="category position-absolute badge badge-pill badge-primary">
						                        	{tag}
						                    	</span>
					                    	{/each}

					                        <div class="card-img-top position-relative blog-image-d" style="background-image: url('{article.coverImage.url}');"></div>
					                        <div class="card-body">
					                            <div class="post-meta mb-2">
					                                <ul class="list-inline meta-list">
					                                    <li class="list-inline-item">{formatDate(article.createdAt)}</li>
					                                    <li class="list-inline-item">{article.author.name}</li>
					                                </ul>
					                            </div>
					                            <h3 class="h5 card-title"><a href="#">{article.title}</a></h3>
					                            <p class="card-text">{article.content.text.slice(0,50)}</p>
					                            <Link to="/blogs/{article.slug}" class="detail-link">Read more <span class="ti-arrow-right"></span></Link>
					                        </div>
					                    </div>
					                </div>
			            	{/each}
	                		
	                	</div>
	                </div>
	            {:else}

	            	<div>Loading...</div>

                {/if}
            

            </div>

            <!--pagination start-->
            <div class="row">
                <div class="col-md-12">
                    <nav class="custom-pagination-nav mt-4">
                        <ul class="pagination justify-content-center">
                            <li class="page-item"><a class="page-link" href="#"><span class="ti-angle-left"></span></a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item"><a class="page-link" href="#"><span class="ti-angle-right"></span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!--pagination end-->

        </div>
    </section>
</Layout>