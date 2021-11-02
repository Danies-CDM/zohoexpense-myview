import Layout from "../components/Layout";
// import TripMain from "../components/TripMain";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes"
import AdminTrip from "../components/Admintrip";
function home() {
  return (
    <div>
      
      <Head>
        <title>Trips Page </title>
      </Head>
      <Layout />
      <AdminTrip />
    </div>
  );
}

export default withAuth(home);