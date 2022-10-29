import React from "react";
import Navbar from "../components/Navigation/Navbar";
import Layout from "../components/Layout/Layout";
import Resumes from "../components/resume/Resumes";
import { Fade } from "react-reveal";

const resume = () => {
  return (
    <>
      <Layout title="resume | Morsalin Kausar">
        <section className="overflow-hidden">
          <Fade right>
            <Resumes />
          </Fade>
        </section>
      </Layout>
    </>
  );
};

export default resume;
