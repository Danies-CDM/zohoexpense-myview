import Layout from "../components/Layout";
import Trips from "../components/Trips";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes"
function trips() {
  return (
    <div styles={{margin:"0px"}}>
      <Head>
        <title>Add Trips</title>
      </Head>

      <Trips />
    </div>
  );
}
export default trips;
