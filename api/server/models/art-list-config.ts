export class ArtListConfig {
    type: string = 'all';

    filters: {
        tag?: string,
        author?: string,
        favorite?: string,
        limit?: number,
        offset?: number
    } = {};
}
