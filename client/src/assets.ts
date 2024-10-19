import { IconType } from "react-icons";
import logo from "/imgs/logo.svg";
import logoIcon from "/imgs/logoIcon.svg";
import loginBg from "/imgs/loginBg.png";
import direction from "/imgs/direction.png";
import gridLayers from "/imgs/gridLayers.png";

// hi2 
import { HiOutlineEnvelope, HiOutlineUsers } from "react-icons/hi2";
// ========================================================
// fi
import { FiLock } from "react-icons/fi";
// ========================================================
// tb
import { TbEye, TbEyeClosed, TbUserHexagon } from "react-icons/tb";
// =========================================================
// ci
import { CiHome } from "react-icons/ci";
// ===========================================================
// io
import { IoIosTrendingUp } from "react-icons/io";
// ============================================================
// go
import { GoArrowUpRight } from "react-icons/go";
// ================================================================
// lu
import { LuPanelLeftClose } from "react-icons/lu";






type Assets = {
// logo
    logo: string,
//   =================
// Login
    logoIcon: string,
    loginBg: string,
    emailIcon: IconType,
    passwordIcon: IconType,
    viewPwdIcon: IconType,
    closePwdIcon: IconType,
// ==========================
// dashboard
  homeIcon: IconType,
  clientsIcon: IconType,
  analyticsIcon: IconType,
  logOutIcon: IconType,
  direction: string,
  gridLayers: string,
  // =========================
  closeActionBarIcon: IconType,
  userIcon: IconType,
};

const assets: Assets = {
  logo: logo,
  logoIcon: logoIcon,
  loginBg: loginBg,
  emailIcon: HiOutlineEnvelope,
  passwordIcon: FiLock,
  viewPwdIcon: TbEye,
  closePwdIcon: TbEyeClosed,
  homeIcon: CiHome,
  clientsIcon: HiOutlineUsers,
  analyticsIcon: IoIosTrendingUp,
  logOutIcon: GoArrowUpRight,
  direction: direction,
  gridLayers: gridLayers,
  closeActionBarIcon: LuPanelLeftClose,
  userIcon: TbUserHexagon,

};






export default assets;
