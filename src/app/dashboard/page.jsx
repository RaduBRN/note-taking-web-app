import DashboardRedirect from "@/components/hooks/DashboardRedirect";

export async function generateMetadata({ params }) {
  return {
    title: "Notes",
  };
}

const DashboardPage = () => {
  return <DashboardRedirect />;
};

export default DashboardPage;
