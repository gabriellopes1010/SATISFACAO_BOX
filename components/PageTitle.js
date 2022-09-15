import React from "react";
import Head from "next/head";

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} - SatisfaçãoBox</title>
    </Head>
  )
}

export default PageTitle