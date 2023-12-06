<script>
	import StudentNavbar from '$lib/components/StudentNavbar.svelte';
</script>

<StudentNavbar />
<div class="bg-gray-200 h-screen flex justify-center pt-20">
	<slot />
</div>
