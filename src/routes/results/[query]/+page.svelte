<script>
  export let data;
  let { book, description } = data;
</script>

<div class="relative flex flex-col items-center px-4 pt-6 md:pt-6 min-h-screen bg-gray-100 dark:bg-gray-900">
  <a href="/" class="absolute top-4 left-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 flex items-center space-x-1">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    <span class="hidden sm:inline text-sm">Back</span>
  </a>

  <section class="w-full text-center mt-6">
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-dancing">
      {book.title}
    </h1>
  </section>

  {#if book.cover_i}
    <section class="flex justify-center mb-4">
      <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} 
      alt="Book cover" 
      class="w-2/3 max-w-xs sm:max-w-sm md:max-w-sm rounded shadow-lg" />
    </section>
  {/if}

  <section class="w-full text-center mb-6">
      <p class="text-lg text-gray-700 dark:text-gray-300">
        By:
        {#if book.author_name?.[0]}
          <a
            href={`https://openlibrary.org/search/authors?q=${encodeURIComponent(book.author_name[0])}`}
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            {book.author_name[0]}
          </a>
        {:else}
          <span class="font-medium">Unknown author</span>
        {/if}
      </p>
    </section>

  <section class="w-full max-w-2xl px-4 py-6 text-gray-800 dark:text-gray-100">
    {#if description}
      <p class="whitespace-pre-line text-justify">{description}</p>
    {:else}
      <p class="text-center text-gray-500 dark:text-gray-400">No description available.</p>
    {/if}
  </section>

  {#if book.key}
    <section class="w-full text-center mt-4 mb-16">
      <a
        href={`https://openlibrary.org${book.key}`}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block w-full max-w-xs px-8 py-4 text-2xl font-bold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition duration-300"
      >Read</a>
    </section>
  {/if}
</div>