import dashboard from "../../assets/dashboard.png";
import sales from "../../assets/sales.png";
import purchase from "../../assets/purchase.png";
import inventory from "../../assets/inventory.png";
import hr from "../../assets/hr.png";

export const sidebarData = [
  { text: "Dashboard", link: "/", icon: <img src={dashboard} alt="" /> },
  { text: "Sales", link: "/", icon: <img src={sales} alt="" /> },
  { text: "Purchase", link: "/", icon: <img src={purchase} alt="" /> },
  { text: "Inventory", link: "/", icon: <img src={inventory} alt="" /> },
  { text: "HR", link: "/", icon: <img src={hr} alt="" /> },
];