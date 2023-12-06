<script>
	export let data;

	let { books } = data;
</script>

<div class="w-2/3 h-fit flex flex-col gap-2 border border-gray-500 rounded-md p-4">
	<p>Library</p>
	<div>
		<a href="/createbook" class="btn btn-success btn-sm">Add a new Book</a>
	</div>
	<div>
		<table class="table">
			<thead>
				<tr class=" bg-gray-300">
					<th>#</th>
					<th>Title</th>
					<th>Author</th>
					<th>Genre</th>
					<th>Status</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each books as book (book.id)}
					<tr class="">
						<td>{book.id}</td>
						<td>{book.title}</td>
						<td>{book.author}</td>
						<td>{book.genre}</td>
						<td><span class="badge badge-accent">{book.status}</span></td>
						<td class="flex gap-1">
							<a href="/books/{book.id}" class="btn btn-sm btn-secondary">Update</a>
							<form action="" method="POST">
								<input hidden type="text" bind:value={book.id} name="id" />
								<button class="btn btn-sm btn-error">Delete</button>
							</form>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
