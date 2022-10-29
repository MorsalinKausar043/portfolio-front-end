import React from "react";
import {Fade} from "react-reveal";
import Layout from "../components/Layout/Layout";
import Shelf from "../components/shelf/Shelf";

const blog = () => {
  return (
    <>
      <Layout title="shelf | Morsalin Kausar">
        <section className="overflow-hidden">
          <Fade right>
            <Shelf/>
          </Fade>
        </section>
      </Layout>
    </>
  );
};

export default blog;
