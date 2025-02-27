<script>
	import { implementThroughViewTransitions } from '$lib';
	import { MediaQuery } from 'svelte/reactivity';

	var small = new MediaQuery('max-width: 640px');
	var ariaExpanded = $state('true');

	function toggleAriaExpanded() {
		if (ariaExpanded == 'false') ariaExpanded = 'true';
		else ariaExpanded = 'false';
	}
</script>

{#snippet navbar()}
	<nav class="bg-accent-main sm:bg-main absolute top-0 right-0 rounded p-12 sm:static sm:p-0">
		<ul
			class="font-outfit sm:font-fira-sans text-high-contrast flex flex-col flex-wrap gap-6 font-bold sm:flex-row sm:font-medium"
		>
			<li>
				<a class="hover:text-brand-light" href="/">Discover</a>
			</li>
			<li>
				<a class="hover:text-brand-light" href="/mushroom-guide">Mushroom Guide</a>
			</li>
			<li>
				<a class="hover:text-brand-light" href="/mushroom-guide#faq">FAQ</a>
			</li>
		</ul>
	</nav>
{/snippet}

<header>
	<div class="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between p-4">
		<img src="/assets/fungi-finders.svg" alt="" />

		<button
			class="bg-main z-10 rounded p-2 sm:hidden"
			aria-controls="primary-navigation"
			aria-expanded={ariaExpanded}
			onclick={function handleHamburgerClick() {
				implementThroughViewTransitions(toggleAriaExpanded);
			}}
		>
			<span class="sr-only">Menu</span>
			<img src="/assets/hamburger.svg" alt="" />
		</button>

		{#if small.current}
			{#if ariaExpanded == 'true'}
				{@render navbar()}
			{/if}
		{:else}
			{@render navbar()}
		{/if}
	</div>
</header>
