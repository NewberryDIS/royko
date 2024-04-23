<nav class="sidebar">
	<ul>
		<li><a href="/">Chapter I</a></li>
		<li><a href="/bg2">Chapter II</a></li>
		<li><a href="/bg3">Chapter III</a></li>
		<li><a href="/bg4">Chapter IV</a></li>
		<li><a href="/xp">Chapter V</a></li>
		<li><a href="/article">Chapter VI</a></li>
		<li><p>Chapter VII</p></li>
		<li><p>Chapter VIII</p></li>
		<li><p>Chapter IX</p></li>
		<li><p>Chapter X</p></li>
	</ul>
</nav>

<style>
	.sidebar {
		/* background: #fff; */
		flex-basis: 200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		flex: 1;
		border: 1px solid rgba(0, 0, 0, 0.1);
		background: rgba(233, 233, 255, 0.333);
		backdrop-filter: blur(10px);
		border-radius: 3px;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 200ms;
	}
	a {
		text-decoration: none;
	}
	li:has(a) {
		/* background: rgba(177, 177, 250, 0.3); */
	}
	li p,
	li a {
		color: #333;
		width: 50%;
		margin: 0;
	}
	li:hover {
		border: 1px solid rgba(0, 0, 0, 0.5);
	}
	ul {
		height: 95dvh;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2px;
	}
</style>
