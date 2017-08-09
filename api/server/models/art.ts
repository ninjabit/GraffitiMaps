import {Picture} from "./picture";
import {Video} from "./video";
import {Author} from "./author";
import {Location} from "./location";

export interface Art {
    _id?: string;
    title?: string;
    pictures?: Picture[];
    videos?: Video[];
    author?: Author;
    location?: Location;
}