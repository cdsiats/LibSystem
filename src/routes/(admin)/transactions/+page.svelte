<script>
	import { format, parseISO } from 'date-fns';
	export let data;
	export let form;

	let { transactions } = data;
</script>

<div class="w-2/3 h-fit flex flex-col gap-2 border border-gray-500 rounded-md p-4">
	<p>Transactions</p>

	<div>
		<table class="table">
			<thead>
				<tr class=" bg-gray-300">
					<th>#</th>
					<th>Book</th>
					<th>User</th>
					<th>Return Date</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each transactions as transaction (transaction.id)}
					<tr class="">
						<td><small>{transaction.id}</small></td>
						<td>{transaction.expand['book'].title}</td>
						<td>{transaction.expand['user'].name}</td>
						<td>{format(parseISO(transaction.return_date), 'MMMM dd ,yyyy')}</td>
						<td class="flex gap-1">
							<form action="" method="POST">
								<input hidden type="text" bind:value={transaction.id} name="transac_id" />
								<input
									hidden
									type="text"
									bind:value={transaction.expand['book'].id}
									name="book_id"
								/>
								<button class="btn btn-sm btn-primary">Return</button>
							</form>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	{#if form?.err}
		<small class="text-error">{form?.err}</small>
	{/if}
</div>
