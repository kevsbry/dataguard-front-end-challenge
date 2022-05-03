import type { NextPage } from "next";
import { wrapper } from "../../app/store";
import PageLayout from "../../components/PageLayout";
import { setCurrentTab } from "../../features/current-tab-slice";
import { TabVariants } from "../../typings/tab-variants";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const param = params as { tab: TabVariants };

      if (!param || !["tab1", "tab2", "tab3"].includes(param.tab)) {
        return {
          redirect: {
            destination: "/tab1",
            permanent: false,
          },
        };
      }

      store.dispatch(setCurrentTab({ name: param.tab }));

      return {
        props: {},
      };
    }
);

const Home: NextPage = () => {
  return (
    <PageLayout
      header={{
        title: "Home",
        meta: {
          name: "Home",
          content: "dataguard coding challenge",
        },
      }}
    >
      <h1>sdf</h1>
    </PageLayout>
  );
};

export default Home;
