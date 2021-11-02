import Layout from "../components/Layout";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes"
function home() {
  return (
    <div>
      <Layout />
      <h1 style={{margin:"200px"}}>Reports Page</h1>
      <Head>
        <title>Reports Page </title>
      </Head>
    </div>
  );
}

export default withAuth(home);
