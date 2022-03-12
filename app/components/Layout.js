import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";

import React, { useCallback, useMemo } from "react";
import { styled } from "@stitches/react";

const DRAWER_WIDTH = 250;
const HEADER_HEIGHT = 64;
const PAGE_MARGIN = 64;

const Layout = ({ pageTitle, children }) => {
  const router = useRouter();
  const tab = useMemo(() => router.asPath.replace(/^\/#?/, ""), [router]);

  return (
    <PageContent>
      <Head>
        <title>NFT Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardSidebar>
        <LinkContainer>
          <LogoLink>
            <Link href="/">
              <a>NFT Products</a>
            </Link>
          </LogoLink>
          <Tab to={"products"}>Products</Tab>
          <Tab to={"settings"}>Settings</Tab>
        </LinkContainer>
      </DashboardSidebar>
      {pageTitle && (
        <PageHeader>
          <PageHeaderTitle>{pageTitle}</PageHeaderTitle>
        </PageHeader>
      )}

      <PageMain>{children}</PageMain>
    </PageContent>
  );
};

const TabContainer = styled("div", {
  margin: "12px 0",
  cursor: "pointer",
  textTransform: "uppercase",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20.8px",
  variants: {
    active: {
      true: {
        color: "$wheat",
      },
      false: {
        color: "$sand",
      },
    },
  },
});

const Tab = ({ children, to }) => {
  const router = useRouter();
  const tab = useMemo(() => router.asPath.replace(/^\/#?/, ""), [router]);
  const onClick = useCallback(() => router.push(`/${to}`), [router, to]);
  return (
    <TabContainer active={tab === to} onClick={onClick}>
      {to}
    </TabContainer>
  );
};

const PageContent = styled("div", {
  maxWidth: "1100px",
  backgoundColor: "#f7f7f7",
  padding: `${PAGE_MARGIN}px`,
});

const PageHeader = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: DRAWER_WIDTH,
  height: HEADER_HEIGHT,
  width: `calc(100% - ${DRAWER_WIDTH}px)`,
});

const PageHeaderTitle = styled("h1", {
  fontWeight: 600,
  fontFamily: "$mono",
  fontSize: 32,
  lineHeight: "41.67px",
});

const PageMain = styled("main", {
  height: `calc(100vh - ${HEADER_HEIGHT + 2 * PAGE_MARGIN}px)`,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  marginLeft: DRAWER_WIDTH,
  padding: `40px 0`,
  width: `calc(100% - 255px)`,
});

const DashboardSidebar = styled("div", {
  width: DRAWER_WIDTH,
  flex: "0 0 auto",
});

const LinkContainer = styled("div", {
  width: DRAWER_WIDTH,
  boxSizing: "border-box",
  background: "white",
  fontFamily: "$mono",
  height: "100%",
  color: "$sand",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  flex: "1 0 auto",
  zIndex: 2,
  position: "fixed",
  top: 0,
  outline: 0,
  left: 0,
  padding: "24px",
});

const LogoLink = styled("div", {
  fontFamily: "$sans",
  fontSize: "32px",
  lineHeight: "48px",
  marginBottom: "24px",
  fontWeight: 600,
  textTransform: "unset",
});

export default Layout;
