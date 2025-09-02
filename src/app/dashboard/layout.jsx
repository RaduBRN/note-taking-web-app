import NavbarTemplateComponent from "@/components/templates/Navbar";
import SidebarTemplateComponent from "@/components/templates/Sidebar";
import BottomNavigationTemplateComponent from "@/components/templates/BottomNavigation";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <SidebarTemplateComponent />
      <div className="bg-white dark:bg-neutral-800 w-full">
        <NavbarTemplateComponent />
        {children}
        <BottomNavigationTemplateComponent />
      </div>
    </div>
  );
};

export default DashboardLayout;
