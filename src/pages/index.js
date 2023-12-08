import Login from "@/components/appComponent/authentication/Login";
import Company from "@/components/appComponent/company/Company";
import  Layout  from "./layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Company />
      </Layout>
    </>
  );
}
