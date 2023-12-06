<script>
	export let data;

	let { books } = data;
</script>

<div class="w-2/3 h-fit flex flex-col gap-2 border border-gray-500 rounded-md p-4">
	<p>Borrowed Books</p>

	<div>
		<table class="table">
			<thead>
				<tr class=" bg-gray-300">
					<th>#</th>
					<th>Title</th>
					<th>Author</th>
					<th>Genre</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{#each books as book (book.id)}
					<tr class="">
						<td><small>{book.id}</small></td>
						<td>{book.title}</td>
						<td>{book.author}</td>
						<td>{book.genre}</td>
						<td>{book.status}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
