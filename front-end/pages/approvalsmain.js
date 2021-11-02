import Layout from "../components/Layout";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes"
function home() {
  return (
    <div>
      <Layout />
      <h1 style={{margin:"200px"}}>Approvals Page</h1>
      <Head>
        <title>Approvals Page | Zoho Expenses</title>
      </Head>
    </div>
  );
}

export default withAuth(home);
