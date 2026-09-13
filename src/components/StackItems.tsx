import type { ITechnology } from "../types/technologyTypes";


interface StackItemsProps{
    technologies: ITechnology[];
}

const StackItems = ({technologies}:StackItemsProps) => {
    return (
        <div className="">
            {technologies.map((technology) => (
                <div key={technology.id}><h3>{technology.name}</h3></div>
            ))}
            
        </div>
    );
};

export default StackItems;