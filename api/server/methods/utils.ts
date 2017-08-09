/**
 * Created by Tobia on 28/04/17.
 */
export const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});
