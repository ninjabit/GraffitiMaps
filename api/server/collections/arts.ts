import {MongoObservable} from "meteor-rxjs";
import {Art} from "../models/art";

export interface ArtsCollection<T> extends MongoObservable.Collection<T> {
    getArtUrl(selector?: Object | string): string;
}

export const Arts = new MongoObservable.Collection<Art>('arts') as ArtsCollection<Art>;
