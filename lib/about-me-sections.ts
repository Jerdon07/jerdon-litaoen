import { myLife } from "./my-life";
import { skills } from "./tech-stacks";
import { timelineData } from "./timelines";

interface ISecction {
    title: string
    content: any
}

export const sections: ISecction[] = [
    {
        title: "Get to Know Me",
        content: myLife,
    }, {
        title: "Achievements and Progress",
        content: timelineData,
    }, {
        title: "Tech Skills",
        content: skills,
    }
]