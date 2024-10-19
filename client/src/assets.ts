import logo from "/imgs/logo.svg";
import logoIcon from "/imgs/logoIcon.svg";
import loginBg from "/imgs/loginBg.png";

// hi2 
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IconType } from "react-icons";
// ========================================================
// fi
import { FiLock } from "react-icons/fi";
// ========================================================
// tb
import { TbEye, TbEyeClosed } from "react-icons/tb";
// =========================================================


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
// ==================
};

const assets: Assets = {
  logo: logo,
  logoIcon: logoIcon,
  loginBg: loginBg,
  emailIcon: HiOutlineEnvelope,
  passwordIcon: FiLock,
  viewPwdIcon: TbEye,
  closePwdIcon: TbEyeClosed,
};






export default assets;
