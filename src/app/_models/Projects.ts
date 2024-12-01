import { Tag } from "./Tag";

export interface Project {
Id: number ;
Name: string;
Summary: string;
Describtion: string;
ProjectLink: string;
Pictures: string[]
Tags: Tag[]
}