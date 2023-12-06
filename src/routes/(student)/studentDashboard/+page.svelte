<script>
	import { format, parseISO } from 'date-fns';

	export let data;

	let { borrowedBooks } = data;
</script>

<!-- <pre>
    {JSON.stringify(data, null, 2)}
</pre> -->

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
					<th>Return Date</th>
				</tr>
			</thead>
			<tbody>
				{#each borrowedBooks as borrowedBook (borrowedBook.id)}
					<tr class="">
						<td><small>{borrowedBook.id}</small></td>
						<td>{borrowedBook.expand['book'].title}</td>
						<td>{borrowedBook.expand['book'].author}</td>
						<td>{borrowedBook.expand['book'].genre}</td>
						<td>{format(parseISO(borrowedBook.return_date), 'MMMM dd ,yyyy')}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
