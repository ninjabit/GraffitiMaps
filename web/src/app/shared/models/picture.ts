/**
 * Created by Tobia on 29/05/17.
 */

export interface Picture {
    _id?: string;
    complete?: boolean;
    extension?: string;
    name?: string;
    progress?: number;
    size?: number;
    store?: string;
    token?: string;
    type?: string;
    uploadedAt?: Date;
    uploading?: boolean;
    url?: string;
    userId?: string;
}
