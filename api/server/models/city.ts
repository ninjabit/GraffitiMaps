import {Art} from "./art";
import {Location} from "./location";

export interface City {
    _id?: string;
    name?: string;
    picture?: string;
    arts?: Art[];
    artsNumber?: number;
    spotsNumber?: number;
    artistsNumber?: number;
    position?: Location;
}