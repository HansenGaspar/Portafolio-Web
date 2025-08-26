import SkillBox from "./SkillBox";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiFirebase, SiTypescript } from "react-icons/si";

function Skills() {
    return (
        <>

            <div className="m-4 p-4 bg-[#986cbc] border-4 border-[#201c1c] shadow-md">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
                    <SkillBox nombre="HTML" icon={<FaHtml5 className="text-black text-4xl" />} />
                    <SkillBox nombre="CSS" icon={<FaCss3Alt className="text-black text-4xl" />} />
                    <SkillBox nombre="JavaScript" icon={<FaJs className="text-black text-4xl" />} />
                    <SkillBox nombre="React" icon={<FaReact className="text-black text-4xl" />} />
                    <SkillBox nombre="Next.js" icon={<SiNextdotjs className="text-black text-4xl" />} />
                    <SkillBox nombre="Node.js" icon={<FaNodeJs className="text-black text-4xl" />} />
                    <SkillBox nombre="Express" icon={<SiExpress className="text-black text-4xl" />} />
                    <SkillBox nombre="MongoDB" icon={<SiMongodb className="text-black text-4xl" />} />
                    <SkillBox nombre="Firebase" icon={<SiFirebase className="text-black text-4xl" />} />
                    <SkillBox nombre="TypeScript" icon={<SiTypescript className="text-black text-4xl" />} />
                </div>
            </div>
        </>

    )
}
export default Skills;