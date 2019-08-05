/**
 * Created by Tobia on 28/04/17.
 */
import {Picture} from "./picture";

// export const DEFAULT_PICTURE_URL = '/assets/default-profile-pic.svg';

export interface Profile {
  name?: string;
  bio?: string;
  following?: boolean;
  picture?: Picture;
}
