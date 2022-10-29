import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import Preloader from "../components/preloader/Preloader";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navigation/Navbar";
import Icons from "../components/innerIcon/Icons";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  // load state setup
  const [load, setLoad] = useState(true);
  // cursor state setup
  // const [cursor, setCursor] = useState({ x: 0, y: 0 });
  // setup loader
  useEffect(() => {
    setTimeout(() => window.addEventListener(load, setLoad(false)), 1000);
    // const mousemove = (e) => {
    //   setCursor({ x: e.clientX, y: e.clientY });
    // };
    // window.addEventListener("mousemove", mousemove);

    // return () => {
    //   window.removeEventListener("mousemove", mousemove);
    // };
  }, [load]);
  // render data in jsx
  if (load) {
    return (
      <>
        <Preloader />
      </>
    );
  }
  return (
    <>
      <ThemeProvider attribute="class">
        <Layout>
          <main className="pt-0 md:pt-16 lg:pt-20 w-screen transition-opacity flex flex-col items-center bg-gray-200 dark:bg-zinc-900 h-screen overflow-y-scroll">
            <section className="container relative md:shadow-2xl md:rounded-lg bg-white dark:bg-zinc-800 p-4 md:px-8 md:py-4">
              {/* nevbar  */}
              <div>
                <Navbar />
              </div>
              {/* main part  */}
              <div className="px-0 md:pl-10 lg:pl-16 md:pr-4 py-4 md:py-8 ">
                <Component {...pageProps} />
              </div>
              {/* link icon  */}
              <div className="hidden md:flex justify-center items-center flex-col absolute left-5 top-64">
                <Icons />
              </div>
            </section>
            {/* footer section  */}
            <section className="container mt-10 md:mt-16 px-4 md:px-6">
              <Footer />
            </section>
            {/* cursor 
            <div
              style={{ left: cursor.x + 5 + "px", top: cursor.y + 5 + "px" }}
              className="cursor big_cursor"
            ></div>
            <div
              style={{ left: cursor.x + 5 + "px", top: cursor.y + 5 + "px" }}
              className="cursor small_cursor"
            ></div> */}
          </main>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
