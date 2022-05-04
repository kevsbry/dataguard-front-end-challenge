export const getServerSideProps = () => {
  return {
    redirect: {
      destination: "/tab1",
      permanent: true,
    },
  };
};
