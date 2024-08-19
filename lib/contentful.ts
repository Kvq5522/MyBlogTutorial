import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.SPACE_ID ?? "",
  accessToken: process.env.CD_ACCESS_TOKEN ?? "",
});
