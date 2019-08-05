import {Picture} from "./picture";
import {Video} from "./video";
import {Author} from "./author";
import {Location} from "./location";
import {Tag} from "./tag";

export interface Art {
    _id?: string;
    title?: string;
    slug?: string;
    description?: string;
    tags?: Array<Tag>;
    pictures?: Picture[];
    videos?: Video[];
    authors?: Array<Author>;
    location?: Location;
    favorite?: boolean;

    createdAt: string;
    updatedAt: string;

}