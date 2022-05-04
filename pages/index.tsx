import type { NextPage } from "next";

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: "/tab1",
      permanent: true,
    },
  };
};

const Home: NextPage = () => {
  return <div></div>;
};

export default Home;
