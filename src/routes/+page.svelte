<script>
	var gridCards = [
		{
			imgSrc: `/assets/outdoor-exploration.webp`,
			imgAlt: `Tightly grouped mushrooms growing up a mossy tree trunk`,
			title: `Outdoor Exploration`,
			content: `Mushroom foraging takes you off the beaten path and into the heart of nature. Learn to
						read the landscape, identifying prime mushroom habitats from lush forest floors to
						sun-dappled meadows. Every expedition is a new adventure, with the potential for
						exciting discoveries around every tree and under every log.`
		},
		{
			imgSrc: `/assets/botanical-expertise.webp`,
			imgAlt: `Wild mushrooms on a table`,
			title: `Botanical Expertise`,
			content: `Dive into the intricate world of fungal biology. Discover the unique structures of
						mushrooms, from caps to gills to spores. Learn to use field guides and identification
						keys to distinguish between species. With practice, you'll start to see the forest in a
						whole new light, recognizing the vital role fungi play in ecosystem health.`
		},
		{
			imgSrc: `/assets/culinary-delight.webp`,
			imgAlt: `A plate of food with mushrooms on top`,
			title: `Culinary Delights`,
			content: `Transform your foraged finds into delectable dishes. Many edible mushrooms offer unique
						flavors and textures that can elevate your cooking. From the earthy porcini to the
						delicate chanterelle, each variety brings its own character to the table. Explore
						recipes, preservation techniques, and the joy of cooking with nature's bounty.`
		}
	];
</script>

{#snippet gridCard({ imgSrc, imgAlt, title, content })}
	<div class="bg-light row-span-3 grid grid-rows-subgrid rounded-2xl p-4">
		<img class="w-full rounded-2xl" loading="lazy" src={imgSrc} alt={imgAlt} />
		<h3 class="text-brand text-heading-sm sm:text-heading-base font-outfit font-bold">
			{title}
		</h3>
		<p>
			{content}
		</p>
	</div>
{/snippet}

<!-- hero -->
<section style:background-image="url('/assets/hero.webp')" class="bg-cover bg-center">
	<div class="inline-wrapper">
		<div class="flow font-outfit text-center">
			<h1 class="text-high-contrast text-heading-md sm:text-heading-lg font-bold">
				Discover the World of
				<span class="text-brand sm:text-heading-xl block">Mushroom Foraging</span>
			</h1>
			<p class="text-high-contrast sm:text-md mx-auto max-w-[64ch]">
				Mushroom foraging is the art and science of identifying and collecting wild mushrooms.
			</p>
			<p class="text-high-contrast sm:text-md mx-auto max-w-[64ch]">
				It's a practice that combines outdoor exploration botanical knowledge, and culinary
				adventure. Foragers venture into forests, fields, and even urban green spaces to discover
				these hidden treasures.
			</p>
			<p class="text-high-contrast sm:text-md mx-auto max-w-[64ch]">
				But beware – this hobby requires careful study and respect for nature, as some mushrooms can
				be dangerous if misidentified.
			</p>
		</div>
	</div>
</section>

<!-- the joys of mushroom foraging -->
<section>
	<div class="inline-wrapper">
		<div class="flow text-contrast">
			<h2 class="text-high-contrast font-outfit text-heading-base sm:text-heading-md font-bold">
				The joys of mushroom foraging
			</h2>
			<p class="sm:text-md">
				Foraging for mushrooms can be a rewarding experience for many reasons. People may venture
				off into the woods to forage for mushrooms because it allows them to connect with nature,
				enjoy the thrill of the hunt, and savor the satisfaction of finding a hidden culinary
				treasure.
			</p>
			<!-- 3 cards -->
			<div class="grid gap-4 md:grid-cols-3">
				{#each gridCards as card}
					{@render gridCard(card)}
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- start your foraging adventure -->
<section class="bg-accent-dark">
	<div class="inline-wrapper">
		<div class="flow text-high-contrast text-center">
			<h2 class="font-outfit text-heading-base sm:text-heading-md font-bold">
				Start your
				<span class="text-brand">Foraging Adventure!</span>
			</h2>
			<p class="sm:text-md mx-auto max-w-[64ch]">
				Whether you're seeking a deeper connection with nature, a new outdoor hobby, or simply love
				the idea of finding your own food, mushroom foraging offers a uniquely rewarding experience.
			</p>
		</div>
	</div>
</section>

<!-- get to know your mushrooms -->
<section class="bg-extra-dark">
	<div class="inline-wrapper">
		<div class="text-contrast grid items-center gap-4 sm:gap-6 md:grid-cols-2">
			<img
				class="w-full rounded-2xl"
				loading="lazy"
				src="/assets/get-to-know.webp"
				alt="A man on his hands and knees harvesting a mushroom in the forest"
			/>
			<div class="flow">
				<h2 class="text-high-contrast font-outfit text-heading-base sm:text-heading-md font-bold">
					Get to know your mushrooms
				</h2>
				<p class="sm:text-md">
					Successful and safe mushroom foraging begins with a deep understanding of the species
					you'll encounter in the wild - not just what the edible ones look like, but their toxic
					look-alikes, seasonal patterns, and preferred habitats.
				</p>
				<p class="sm:text-md">
					It can feel like a big task, but
					<span class="font-bold"> we’ve got a handy reference guide </span>
					to help you out!
				</p>
				<a
					class="bg-accent-main hover:bg-accent-light text-high-contrast font-outfit class= sm:text-md inline-block rounded-md px-3 py-2 font-bold"
					href="/mushroom-guide"
				>
					<span class="sr-only">Get to know your mushrooms by using our handy</span>
					Reference Guide
				</a>
			</div>
		</div>
	</div>
</section>

<!-- connect with nature -->
<section>
	<div class="inline-wrapper">
		<div class="text-contrast grid items-center gap-4 sm:gap-6 md:grid-cols-2">
			<div class="flow">
				<h2 class="text-high-contrast font-outfit text-heading-base sm:text-heading-md font-bold">
					Connect with Nature
				</h2>
				<p class="sm:text-md">
					Experience the beauty of the great outdoors while foraging for mushrooms with fellow
					enthusiasts.
				</p>
				<a
					class="bg-accent-main hover:bg-accent-light text-high-contrast font-outfit class= sm:text-md inline-block rounded-md px-3 py-2 font-bold"
					href="/mushroom-guide"
				>
					Learn more
					<span class="sr-only">about mushrooms with our handy mushroom guide</span>
				</a>
			</div>
			<img
				class="w-full rounded-2xl"
				loading="lazy"
				src="/assets/nature.webp"
				alt="A small white mushroom growing on a mossy forest floor"
			/>
		</div>
	</div>
</section>
