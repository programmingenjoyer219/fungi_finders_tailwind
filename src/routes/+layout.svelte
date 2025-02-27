<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Fungi Finders</title>
	<!-- fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&family=Outfit:wght@100..900&display=swap"
		rel="stylesheet"
	/>
	<!-- preloading assets -->
	<link rel="preload" as="image" href="/assets/hero.webp" />
</svelte:head>

<a id="skip-to-main" href="#main-content">Skip to content</a>
<Header />
<main id="main-content">
	{@render children()}
</main>
<Footer />
