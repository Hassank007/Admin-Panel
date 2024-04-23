import { AiOutlineHome } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { RiBillLine } from "react-icons/ri";

export const navLinks = [
    {
      id: "Dashboard",
      title: "Dashboard",
      icon: <AiOutlineHome/>
    },
    {
      id: "Doctor",
      title: "Doctor",
      icon: <FaUserDoctor/>
    },
    {
      id: "Admin",
      title: "Admin",
      icon: <MdAdminPanelSettings/>
    },
    {
      id: "Users",
      title: "User",
      icon: <CiUser/>
    },
    {
        id: "Claim",
        title: "Claim",
         icon: <RiBillLine/>
      },
  ];