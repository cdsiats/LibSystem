<script>
	export let data;

	let { title, author, genre } = data.book;
</script>

<div class="w-2/3">
	<form class="form-control gap-4" action="" method="POST">
		<label for="title">Title</label>
		<input class="input input-bordered" bind:value={title} type="text" id="title" name="title" />
		<label for="author">Author</label>
		<input class="input input-bordered" bind:value={author} type="text" id="author" name="author" />
		<label for="genre">Genre</label>
		<input class="input input-bordered" bind:value={genre} type="text" id="genre" name="genre" />
		<button class="btn btn-primary">Update</button>
	</form>
</div>
