<script>
  import { goto } from '$app/navigation';
  let searchTerm = '';
  
  function handleSubmit(event) {
    event.preventDefault();
    if (searchTerm.trim()) {
      goto(`/results/${encodeURIComponent(searchTerm)}`);
    }
  }
</script>


<div class="flex flex-col items-center justify-start pt-32 min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
  <h1 class="text-3xl font-bold font-dancing text-center text-gray-900 dark:text-gray-100">
    Search for books
  </h1>
  <div class="w-full max-w-md mt-6">
    <form class="flex items-center" on:submit={handleSubmit}>
      <input
        bind:value={searchTerm}
        type="text"
        placeholder="Title, for example, Dracula"
        class="w-full px-4 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
      />
    </form>
  </div>
</div>