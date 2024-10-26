import { Tag } from "./Tag";

export interface Project {
id: number ;
name: string;
summary: string;
describtion: string;
projectLink: string;
pictures: string[]
tags: Tag[]
}