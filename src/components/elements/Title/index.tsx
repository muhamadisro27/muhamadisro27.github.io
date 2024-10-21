import Head from "next/head";

const Title = ({ suffix = "" }: { suffix: string }) => {
  return (
    <Head>
      <title>Muhamad Isro | {suffix}</title>
    </Head>
  );
};

export default Title;
