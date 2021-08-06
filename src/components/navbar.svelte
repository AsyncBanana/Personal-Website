<div class="rounded-lg shadow bg-base-200 drawer">
	<input id="toggle" type="checkbox" class="drawer-toggle" />
	<div class="flex flex-col drawer-content" style="scroll-behavior: smooth;">
		<div class="w-3/4 top-0 mt-3 rounded-box navbar bg-base-100 sticky m-auto z-30">
			<div class="flex-1 px-2 mx-2">
				<a class="font-extrabold text-xl" href="/">AsyncBanana</a>
			</div>
			<div class="flex-none hidden lg:block">
				<ul class="menu horizontal">
					<li>
						<a href="/#Skills">Skills</a>
					</li>
					<li>
						<a href="/#Projects">Projects</a>
					</li>
					<li>
						<a href="/#Contact">Contact</a>
					</li>
				</ul>
			</div>
			<div class="flex-none lg:hidden">
				<label for="toggle" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</label>
			</div>
		</div>
		<slot />
	</div>
	<div class="drawer-side">
		<label for="toggle" class="drawer-overlay" />
		<ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
			<li>
				<a href="/#Skills">Skills</a>
			</li>
			<li>
				<a href="/#Projects">Projects</a>
			</li>
			<li>
				<a href="/#Contact">Contact</a>
			</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	a {
		@apply rounded-btn;
	}
</style>
