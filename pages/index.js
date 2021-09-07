import Head from "next/head";

const { NotionDoc } = require("@benborgers/notion-api");

const doc = new NotionDoc("Projects-81896168267b2a9ba3988b1831897691");

export default function Home() {
  return (
    <div>
      <Head>
        <title>A Pale Blue Dot</title>
        <meta
          name="description"
          content="Libro de tesis - Facundo Brahim - UMAI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{doc.title()}</p>
    </div>
  );
}
