export const dynamic = "force-dynamic"; // this is the fix

import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  // Determine the endpoint based on the genre
  let endpoint;
  switch (genre) {
    case "fetchTopRated":
      endpoint = "movie/top_rated";
      break;
    case "fetchUpcoming":
      endpoint = "movie/popular";
      break;
    default:
      endpoint = "trending/all/week";
      break;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 20000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
