import Head from 'next/head';
import { Navbar } from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div>Hello World</div>
    </div>
  );
}
