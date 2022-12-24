<script>
	import { menus } from '$lib/constants/menus';
</script>

<header class="border-b-2 border-blue-border">
	<div class="max-w-[1280px] mx-auto py-4 flex flex-row justify-between">
		<a href="/" class="text-2xl">GOLF <span class="text-orange"> CTio</span> </a>
		<nav class="flex flex-row gap-8">
			{#each menus.topMenu as item}
				<a href={item.link}>{item.name}</a>
			{/each}
		</nav>
		<div class="flex flex-row justify-between gap-4">
			<a href="/users/login">Login</a>
			<a href="/users/signup">Signup</a>
		</div>
	</div>
</header>
