import { use } from "react";
import type { ITechnology } from "../types/technologyTypes";

interface TechnologyProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technology = ({ technologiesPromise }: TechnologyProps) => {
  const technologies = use(technologiesPromise);
  console.log(technologies, "Technologies");
  return <div></div>;
};

export default Technology;
