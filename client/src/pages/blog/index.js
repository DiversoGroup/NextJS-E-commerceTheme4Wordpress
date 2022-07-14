import Head from 'next/head';
import Link from 'next/link';

//data
import { getAllPosts } from '../../lib_/api.js.sa';

//styles
// import { GlobalStyle } from '../../assets/styles/globals.css';

const Blog = ({ allPosts: { edges } }) => (
  <>
    <h1>Hola Blog</h1>
  </>
);

export default Blog;