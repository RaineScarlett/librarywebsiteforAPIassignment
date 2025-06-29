import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
  const searchRes = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(params.query)}`);
  const searchData = await searchRes.json();

  if (searchData.numFound === 0) {
    throw error(404, `No books found for "${params.query}"`);
  }

  const book = searchData.docs?.[0];

  let description = null;

  if (book?.key) {
    const workRes = await fetch(`https://openlibrary.org${book.key}.json`);
    if (workRes.ok) {
      const workData = await workRes.json();
      const desc = workData.description;
      description = typeof desc === 'string' ? desc : desc?.value ?? null;
    }
  }

  return {
    book,
    description
  };
}