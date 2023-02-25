import dashboard from "../../assets/dashboard.png";
import sales from "../../assets/sales.png";
import purchase from "../../assets/purchase.png";
import inventory from "../../assets/inventory.png";
import hr from "../../assets/hr.png";

export const sidebarData = [
  { text: "Dashboard", link: "/", icon: <img className="w-4" src={dashboard} alt="" /> },
  { text: "Sales", link: "/sales", icon: <img className="w-4" src={sales} alt="" /> },
  { text: "Purchase", link: "/purchase", icon: <img className="w-4" src={purchase} alt="" /> },
  { text: "Inventory", link: "/inventory", icon: <img className="w-4" src={inventory} alt="" /> },
  { text: "HR", link: "/hr", icon: <img className="w-4" src={hr} alt="" /> },
];
