import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiSass, DiFirebase } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { GiMongolia } from "react-icons/gi";
import {
  SiTailwindcss,
  SiMaterialui,
  SiJavascript,
  SiJquery,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiNetlify,
  SiHeroku,
  SiPostman,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaNpm, FaGitAlt, FaAws } from "react-icons/fa";

const frontEndApi = [
  { id: 1, icon: AiFillHtml5, cls: "hover:text-red-400" },
  { id: 2, icon: DiCss3, cls: "hover:text-blue-400" },
  { id: 3, icon: DiSass, cls: "hover:text-pink-400" },
  { id: 4, icon: BsFillBootstrapFill, cls: "hover:text-blue-500" },
  { id: 5, icon: SiTailwindcss, cls: "hover:text-blue-500" },
  { id: 6, icon: SiMaterialui, cls: "hover:text-blue-400" },
  { id: 7, icon: SiJavascript, cls: "hover:text-yellow-500" },
  { id: 8, icon: SiJquery, cls: "hover:text-sky-600" },
  { id: 9, icon: FaReact, cls: "hover:text-sky-500" },
  { id: 10, icon: SiRedux, cls: "hover:text-purple-500" },
];
const backEndApi = [
  { id: 1, icon: FaNodeJs, cls: "hover:text-green-500" },
  { id: 2, icon: SiExpress, cls: "hover:text-gray-400" },
  { id: 3, icon: SiMongodb, cls: "hover:text-green-400" },
  { id: 4, icon: GiMongolia, cls: "hover:text-gray-500" },
  { id: 5, icon: SiTypescript, cls: "hover:text-sky-600" },
];
const otherToolsApi = [
  { id: 1, icon: FaNpm, cls: "hover:text-red-600" },
  { id: 2, icon: FaGitAlt, cls: "hover:text-red-400" },
  { id: 3, icon: AiFillGithub, cls: "hover:text-gray-700" },
  { id: 4, icon: DiFirebase, cls: "hover:text-gray-500" },
  { id: 5, icon: SiNetlify, cls: "hover:text-teal-500" },
  { id: 6, icon: SiHeroku, cls: "hover:text-purple-500" },
  { id: 7, icon: SiPostman, cls: "hover:text-orange-600" },
  { id: 8, icon: FaAws, cls: "hover:text-orange-500" },
];
export default frontEndApi;
export {backEndApi,otherToolsApi};
