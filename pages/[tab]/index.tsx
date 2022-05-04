import type { NextPage } from "next";
import { useAppSelector } from "../../app/hooks";
import { wrapper } from "../../app/store";
import PageLayout from "../../components/PageLayout";
import PluginCard from "../../components/PluginCard";
import { setCurrentTab } from "../../features/current-tab-slice";
import {
  fetchDataguardData,
  IPlugins,
  ITabData,
} from "../../features/dataguard-slice";
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
  const currentTab = useAppSelector((state) => state.currentTab.name);
  const data = useAppSelector((state) => state.dataguard.data);
  const plugins = data?.plugins;
  const tabData = data?.tabdata;

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
      <div className="flex flex-wrap justify-evenly">
        {mapPlugins(currentTab, "active", plugins, tabData)}
        {mapPlugins(currentTab, "disabled", plugins, tabData)}
        {mapPlugins(currentTab, "inactive", plugins, tabData)}
      </div>
    </PageLayout>
  );
};

// Helpers

const mapPlugins = (
  currentTab: string,
  pluginStatus: "active" | "disabled" | "inactive",
  plugins?: IPlugins,
  tabData?: ITabData
) => {
  return (
    plugins &&
    tabData &&
    tabData[currentTab][pluginStatus].map((plugin) => {
      return (
        <PluginCard
          key={plugin}
          pluginName={plugins[plugin].title}
          pluginDescription={plugins[plugin].description}
          active={pluginStatus === "active"}
          disabled={pluginStatus === "disabled"}
        />
      );
    })
  );
};

export default Home;
