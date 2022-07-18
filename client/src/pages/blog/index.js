import client from '../../apollo/client';
import { GET_MENUS } from '../../apollo/queries/getMenus';

function Blog({ data }) {
  const { headerMenus, footerMenus } = data || {};

  const { edges } = headerMenus || {};

  console.log(headerMenus);

  return (
    <div className="flex h-screen min-h-[660px] flex-col items-center justify-center space-y-[9vh] overflow-hidden bg-hero-pattern bg-cover bg-center bg-no-repeat px-8">
      <h1 className="text-red-400">Hola Blog</h1>
      <h1>{edges[2].node.label}</h1>
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_MENUS,
  });

  return {
    props: {
      data: data || {},
    },
  };
}
