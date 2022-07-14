import Hero from '../components/Hero';
import Link from 'next/link';
// import 'assets/styles/globals.css';

function Home() {
  fetch(process.env.NEXT_PUBLIC_WP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query AllPosts {
        posts {
          edges {
            node {
              databaseId
              date
              title
              slug
            content
            }
            }
        }
      }
      `,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res.data));

  return (
    <>
      <Hero />
    </>
  );
}

export default Home;

// Fetch from WordPress API
// const fetchAPI = async (query) => {
//   const response = await fetch(process.env.NEXT_PUBLIC_WP_API_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify({ query }),
//   });

//   const json = await response.json();

//   return json;
// };

// console.log('Se ve');
// console.log(fetchAPI);
