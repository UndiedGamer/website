import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col items-stretch space-y-9 justify-between">
        <h1 className="text-blue-500 font-bold text-4xl">
          Welcome To My Portfolio
        </h1>
        <p className="dark:text-gray-400">
          Hello my name is Undied and I am an average frontend web developer
        </p>
      </div>
    </>
  );
}
