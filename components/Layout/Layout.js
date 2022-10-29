import Head from "next/head";

const Layout = ({ title, children }) => (
  <>
    <Head>
      {/* title  */}
      <title>{title}</title>
      {/* favicon  */}
      <link
        rel="icon"
        type="image/x-icon"
        href="https://i.ibb.co/bXLsPMg/6840478.png"
      ></link>
    </Head>
    <main>{children}</main>
  </>
);
export default Layout;