// import Hero from 'components/Hero';
// import Landing from 'components/Landing';
// import CardDetails from 'components/CardDetails';
// import Catalogue from './Catalogue';
// import 'assets/styles/globals.css';

import Login from './Login';

function Home() {
  // fetch(process.env.NEXT_PUBLIC_WP_API_URL, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     query: `
  //     query AllPosts {
  //       posts {
  //         edges {
  //           node {
  //             databaseId
  //             date
  //             title
  //             slug
  //           content
  //           }
  //           }
  //       }
  //     }
  //     `,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((res) => console.log(res.data));

  return (
    // <Catalogue />
    // <CardDetails />
    // <Landing />;
    <Login />
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
