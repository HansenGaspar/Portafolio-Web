import SkillBox from "./SkillBox";

import H2Tittle from "../../../components/H2Tittle";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiFirebase, SiTypescript } from "react-icons/si";

function Skills() {
    return (
        <>
            <H2Tittle>Habilidades</H2Tittle>

            <div className="m-4 p-4 bg-[#201c1c] rounded-xl shadow-md">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                    <SkillBox nombre="HTML" icon={<FaHtml5 className="text-orange-500 text-4xl" />} />
                    <SkillBox nombre="CSS" icon={<FaCss3Alt className="text-blue-500 text-4xl" />} />
                    <SkillBox nombre="JavaScript" icon={<FaJs className="text-yellow-400 text-4xl" />} />
                    <SkillBox nombre="React" icon={<FaReact className="text-cyan-400 text-4xl" />} />
                    <SkillBox nombre="Next.js" icon={<SiNextdotjs className="text-white text-4xl" />} />
                    <SkillBox nombre="Node.js" icon={<FaNodeJs className="text-green-500 text-4xl" />} />
                    <SkillBox nombre="Express" icon={<SiExpress className="text-gray-200 text-4xl" />} />
                    <SkillBox nombre="MongoDB" icon={<SiMongodb className="text-green-600 text-4xl" />} />
                    <SkillBox nombre="Firebase" icon={<SiFirebase className="text-yellow-500 text-4xl" />} />
                    <SkillBox nombre="TypeScript" icon={<SiTypescript className="text-blue-400 text-4xl" />} />
                </div>
            </div>
        </>

    )
}
export default Skills;