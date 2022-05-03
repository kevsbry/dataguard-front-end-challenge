import type { NextPage } from "next";
import { useAppSelector } from "../../app/hooks";
import { wrapper } from "../../app/store";
import PageLayout from "../../components/PageLayout";
import PluginCard from "../../components/PluginCard";
import { setCurrentTab } from "../../features/current-tab-slice";
import { fetchDataguardData } from "../../features/dataguard-slice";
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
      await store.dispatch(fetchDataguardData());

      return {
        props: {},
      };
    }
);

const Home: NextPage = () => {
  const plugins = useAppSelector((state) => state.dataguard.data?.plugins);

  return (
    <PageLayout
      header={{
        title: "Plugins",
        meta: {
          name: "Home",
          content: "dataguard coding challenge",
        },
      }}
    >
      {plugins &&
        Object.keys(plugins).map((pKey) => {
          return (
            <PluginCard
              key={pKey}
              pluginName={plugins[pKey].title}
              pluginDescription={plugins[pKey].description}
            />
          );
        })}
    </PageLayout>
  );
};

export default Home;
