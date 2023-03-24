import contentful from "contentful";

export const client = contentful.createClient({
  space: import.meta.env.CMS_SPACE_ID,
  accessToken: import.meta.env.CMS_ACCESS_TOKEN,
});
