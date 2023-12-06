<script>
	export let data;
	export let form;
</script>

<div class="w-2/3">
	<form class="form-control gap-4" action="" method="POST">
		<label for="bookID">Book ID</label>
		<input
			required
			autocomplete="off"
			name="bookID"
			class="input input-bordered"
			type="text"
			list="books"
		/>
		<datalist id="books">
			{#each data.books as book}
				<option value={book.id}>{book.id} {book.title}</option>
			{/each}
		</datalist>
		<label for="userID">User ID</label>

		<input
			required
			autocomplete="off"
			name="userID"
			class="input input-bordered"
			type="text"
			list="users"
		/>
		<datalist id="users">
			{#each data.users as user}
				<option value={user.id}>{user.id} {user.name}</option>
			{/each}
		</datalist>
		<label for="returnDate">Return Date</label>
		<input
			required
			class="input input-bordered"
			type="datetime-local"
			id="returnDate"
			name="returnDate"
		/>
		<button class="btn btn-primary">Issue</button>
	</form>
	{#if form?.err}
		<small class="text-error">{form?.err}</small>
	{/if}
</div>
