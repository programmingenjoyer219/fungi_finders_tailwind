<script>
	import { implementThroughViewTransitions } from '$lib';

	var mushroomCards = [
		{
			name: `Chanterelle`,
			isEdible: true,
			season: `summer`,
			description: `Golden-yellow, funnel-shaped mushroom with false gills`,
			importantNote: `Has toxic look-alikes - learn proper identification`
		},
		{
			name: `Morel`,
			isEdible: false,
			season: `spring`,
			description: `Distinctive honeycomb-like cap structure`,
			importantNote: `Must be cooked before eating`
		},
		{
			name: `Chicken of the Woods`,
			isEdible: true,
			season: `summer`,
			description: `Bright orange bracket fungus with yellow edges`,
			importantNote: `Avoid if growing on certain tree species`
		},
		{
			name: `Death Cap`,
			isEdible: false,
			season: `summer`,
			description: `Pale green to white cap with white gills`,
			importantNote: `Extremely toxic - study for safety awareness`
		},
		{
			name: `Oyster Mushroom`,
			isEdible: true,
			season: `fall`,
			description: `Fan-shaped caps growing in clusters`,
			importantNote: `Great beginner mushroom, few look-alikes`
		},
		{
			name: `Lion’s Mane`,
			isEdible: false,
			season: `fall`,
			description: `White, shaggy appearance like a lion's mane`,
			importantNote: `No toxic look-alikes`
		},
		{
			name: `Destroying Angel`,
			isEdible: false,
			season: `summer`,
			description: `Pure white mushroom with a sack-like base`,
			importantNote: `Deadly toxic - study for safety awareness`
		},
		{
			name: `King Bolete`,
			isEdible: true,
			season: `summer`,
			description: `Large brown cap with thick stem`,
			importantNote: `Learn to distinguish from similar species`
		},
		{
			name: `Shaggy Mane`,
			isEdible: true,
			season: `fall`,
			description: `Golden-yellow, funnel-shaped mushroom with false gills`,
			importantNote: `Must be harvested and eaten quickly`
		},
		{
			name: `Maitake`,
			isEdible: true,
			season: `fall`,
			description: `Large, feathery clusters with overlapping gray-brown caps`,
			importantNote: `Also known as Hen of the Woods - no toxic look-alikes`
		},
		{
			name: `False Morel`,
			isEdible: false,
			season: `spring`,
			description: `Brain-like, reddish-brown cap with irregular shape`,
			importantNote: `Highly toxic - often confused with true morels`
		},
		{
			name: `Matsutake`,
			isEdible: true,
			season: `fall`,
			description: `White to brown cap with thick stem and distinct spicy aroma`,
			importantNote: `Verify identification - has toxic look-alikes`
		}
	];

	var mushroomSeasonColorMap = {
		spring: 'bg-spring',
		fall: 'bg-fall',
		summer: 'bg-accent-main'
	};

	var faqCards = [
		{
			imgSrc: `/assets/start-foraging.webp`,
			imgAlt: `a basket full of a viarity of wild mushrooms`,
			title: `What do I need to start mushroom foraging?`,
			content: `You'll need a local field guide, a sharp knife or scissors, a basket or mesh bag for
						collecting, and paper bags for separating specimens. Bring a small brush for cleaning,
						wear sturdy boots, and carry a GPS device or compass to track your location. A camera
						is also helpful to document your finds.`,
			layoutStyles: `flex flex-col gap-4`,
			cardStyles: {
				img: ``,
				h3: ``,
				p: ``
			}
		},
		{
			imgSrc: `/assets/identify-mushrooms.webp`,
			imgAlt: `A wild mushroom on top of a page in a mushroom identification book, giving detailed information about that mushroom`,
			title: `How can I identify edible mushrooms?`,
			content: `Learn from experienced foragers and reliable guidebooks – never rely on apps alone.
						Study each mushroom's specific features like cap shape, gill structure, stem
						characteristics, and spore prints. Start with easily identifiable species that have no
						poisonous lookalikes, and never eat anything unless you're completely certain of its
						identification.`,
			layoutStyles: `flex flex-col gap-4 lg:flex-col-reverse`,
			cardStyles: {
				img: `h-full`,
				h3: ``,
				p: ``
			}
		},
		{
			imgSrc: `/assets/where-to-find.webp`,
			imgAlt: `A mushroom under a pile of leaves, with only one side of it visible`,
			title: `Where can I find foraging spots?`,
			content: `Look in deciduous forests, especially near oak and maple trees, and in damp, shaded
						areas. Fallen logs and dead trees are often productive spots. Only forage on public
						lands where it's allowed, and always check local regulations. Remember to get
						permission for private property and keep your best locations private to prevent
						over-harvesting.`,
			layoutStyles: `flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:row-start-2 lg:col-start-1 lg:col-span-2`,
			cardStyles: {
				img: `h-full object-cover`,
				h3: ``,
				p: ``
			}
		},
		{
			imgSrc: `/assets/best-seasons.webp`,
			imgAlt: `A white stemmed mushroom, with a bright orange cap with white spots`,
			title: `What are the best seasons for mushroom foraging?`,
			content: `Spring is ideal for morels, late summer brings chanterelles and boletes, and fall is
						peak season for most mushrooms including oysters and hen of the woods. Some species
						can even be found in winter, especially in milder climates. Each season offers
						different varieties, so year-round foraging is possible.`,
			layoutStyles: `flex flex-col gap-4 lg:row-span-2 lg:flex-col-reverse`,
			cardStyles: {
				img: `h-full object-cover`,
				h3: ``,
				p: ``
			}
		}
	];

	var season = $state('all');
	var edibleStatus = $state('all');

	var mushroomCardsToDisplay = $state(mushroomCards);

	$effect(function implementViewTransitions() {
		season;
		edibleStatus;

		implementThroughViewTransitions(function filterInCardsToDisplay() {
			mushroomCardsToDisplay = mushroomCards
				.filter(bySeason(season))
				.filter(byEdibleStatus(edibleStatus));
		});
	});

	// ************

	function bySeason(season) {
		return function predicate(mushroomCard) {
			if (season == 'all') return true;
			return mushroomCard.season == season;
		};
	}

	function byEdibleStatus(edibleStatus) {
		return function predicate(mushroomCard) {
			if (edibleStatus == 'all') return true;
			if (edibleStatus == 'edible' && mushroomCard.isEdible) return true;
			if (edibleStatus == 'toxic' && !mushroomCard.isEdible) return true;
			return false;
		};
	}
</script>

{#snippet mushroomCard({ name, isEdible, season, description, importantNote })}
	<div
		style:view-transition-name={name}
		class="bg-light text-contrast row-span-4 grid grid-rows-subgrid gap-4 rounded-2xl p-4"
	>
		<h3 class="text-high-contrast text-heading-sm font-outfit font-bold">
			{name}
		</h3>

		<div class="space-x-2">
			<span
				class="text-high-contrast font-outfit rounded px-2 py-1 {isEdible
					? 'bg-accent-main'
					: 'bg-toxic'}">{isEdible ? 'edible' : 'toxic'}</span
			>
			<span
				class="text-high-contrast font-outfit rounded px-2 py-1 {mushroomSeasonColorMap[season]}"
				>{season}</span
			>
		</div>

		<p>{description}</p>

		<div class="bg-extra-light rounded p-2">
			<p>
				<span class="font-bold">Note:</span>
				{importantNote}
			</p>
		</div>
	</div>
{/snippet}

{#snippet faqCard({ imgSrc, imgAlt, title, content, layoutStyles, cardStyles })}
	<div class="bg-light rounded-2xl p-4 {layoutStyles}">
		<img loading="lazy" class="w-full rounded-2xl {cardStyles.img}" src={imgSrc} alt={imgAlt} />
		<div class="flow">
			<h3
				class="text-high-contrast text-heading-sm sm:text-heading-base font-outfit font-bold {cardStyles.h3}"
			>
				{title}
			</h3>
			<p class="text-contrast {cardStyles.p}">{content}</p>
		</div>
	</div>
{/snippet}

<!-- hero -->
<section style:background-image="url('/assets/hero.webp')" class="bg-cover bg-center">
	<div class="inline-wrapper">
		<div class="flow font-outfit text-center">
			<h1 class="text-high-contrast text-heading-md sm:text-heading-lg font-bold">
				Quick reference
				<span class="text-brand sm:text-heading-xl block">Mushroom Guide</span>
			</h1>
			<p class="text-high-contrast sm:text-md mx-auto max-w-[64ch]">
				Discover a wide array of mushrooms from around the world, each with its own unique flavor
				profile and culinary uses.
			</p>
			<p class="text-high-contrast sm:text-md mx-auto max-w-[64ch]">
				Whether you're looking for earthy porcinis, delicate chanterelles, or meaty shiitakes, our
				selection has something for every palate.
			</p>
			<p class="text-high-contrast sm:text-md mx-auto max-w-[64ch]">
				Explore the diverse shapes, sizes, and colors of these fungi to elevate your dishes to new
				heights.
			</p>
		</div>
	</div>
</section>

<!-- where to look -->
<section class="bg-accent-dark">
	<div class="inline-wrapper">
		<div class="grid items-center gap-4 md:grid-cols-2 md:gap-6">
			<img
				class="w-full rounded-2xl"
				loading="lazy"
				src="/assets/where-to-look.webp"
				alt="A closeup of a mushroom growing on a lush green forest floor"
			/>
			<div class="text-contrast flow">
				<h2 class="text-high-contrast font-outfit text-heading-base sm:text-heading-md font-bold">
					Where to look
				</h2>
				<p class="sm:text-md">Different species grow in different types of environments.</p>
				<p class="sm:text-md">
					Forests are always a good starting place, though, with a wide range of species that grow
					in them.
				</p>
				<p class="sm:text-md">
					If you’re after something specific, you can use our reference guide below to help you out.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- get to know your mushrooms -->
<section>
	<div class="inline-wrapper">
		<div class="flow">
			<h2 class="text-high-contrast font-outfit text-heading-base sm:text-heading-md font-bold">
				Get to know your mushrooms
			</h2>

			<div class="flex items-center gap-4">
				<label for="season">
					<select
						bind:value={season}
						name="season"
						id="season"
						class="bg-accent-main text-high-contrast font-outfit rounded px-4 py-2"
					>
						<option value="all">Season: All</option>
						<option value="spring">Spring</option>
						<option value="summer">Summer</option>
						<option value="fall">Fall</option>
					</select>
				</label>
				<label for="mushroom-type">
					<select
						bind:value={edibleStatus}
						name="mushroom-type"
						id="mushroom-type"
						class="bg-accent-main text-high-contrast font-outfit rounded px-4 py-2"
					>
						<option value="all">Type: All</option>
						<option value="edible">Edible</option>
						<option value="toxic">Toxic</option>
					</select>
				</label>
			</div>

			<div class="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-4">
				<!-- 12 mushroom cards -->
				{#each mushroomCardsToDisplay as card (card.name)}
					{@render mushroomCard(card)}
				{:else}
					<p class="text-contrast font-medium">No mushrooms match these filters...</p>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- faq -->
<section id="faq" class="bg-extra-dark">
	<div class="inline-wrapper flow">
		<h2 class="text-high-contrast font-outfit text-heading-base sm:text-heading-md font-bold">
			Frequently Asked Questions
		</h2>

		<div class="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[66%,_33%]">
			<!-- 4 cards -->
			{#each faqCards as card}
				{@render faqCard(card)}
			{/each}
		</div>
	</div>
</section>
