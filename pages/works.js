import React from "react";
import Project from "../components/works/Project";
import { Fade } from "react-reveal";
import Layout from "../components/Layout/Layout";

const works = () => {
  return (
    <>
      <Layout title="works | Morsalin Kausar">
        <section className="overflow-hidden">
          <Fade right>
            <Project />
          </Fade>
        </section>
      </Layout>
    </>
  );
};

export default works;
