<script>
	export let form;
</script>

<div class="w-3/4 h-fit flex flex-col gap-2 border border-gray-500 rounded-md p-4">
	<form class="form-control gap-4" action="" method="POST">
		<label for="title">Title</label>
		<input required class="input input-bordered input-md" type="text" id="title" name="title" />
		<label for="author">Author</label>
		<input required class="input input-bordered input-md" type="text" id="author" name="author" />
		<label for="genre">Genre</label>
		<input required class="input input-bordered input-md" type="text" id="genre" name="genre" />
		<button class="btn btn-success">Add</button>
	</form>

	{#if form?.err}
		<small class="text-error">{form?.err}</small>
	{/if}
</div>
