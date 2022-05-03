import React, { ReactNode } from "react";
import Head from "next/head";

import TabNavigation from "../components/TabNavigation";

interface Header {
  title: string;
  meta: {
    name: string;
    content: string;
  };
  iconHref?: string;
}

interface PageProps {
  header: Header;
  children: ReactNode;
  footer?: ReactNode;
}

const PageLayout = ({
  header,
  children: Content,
  footer: Footer,
}: PageProps) => {
  const { title, meta, iconHref } = header;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={meta.name} content={meta.content} />
        <link rel="stylesheet" href={iconHref ?? "/favicon.ico"} />
      </Head>

      <div className="grid grid-cols-5 w-screen h-screen">
        <div className="col-span-1">
          <TabNavigation />
        </div>
        <div className="col-span-4">
          {/* {Content} */}
          <h1>4</h1>
        </div>
      </div>

      {Footer}
    </div>
  );
};

export default PageLayout;
