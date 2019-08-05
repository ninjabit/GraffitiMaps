import {Art} from "./art";

export interface Author {
    _id?: string;
    nickname?: string;
    arts?: Art[];
}