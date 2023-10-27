import type { Document } from '@contentful/rich-text-types';
import { client } from './contentful.js';
import type {
  FootnoteContent,
  FootnoteContentItem,
  FootnoteEntry,
} from '../types/cmsFootnoteType.js';

/**
 * Fetches and returns a FootnoteContentItem object with content and media if either exists, otherwise returns null.
 *
 * @param {Document | null} content - The contentful rich text content of the footnote item.
 * @param {string | null} mediaId - The contentful Asset ID of the media associated with the footnote item.
 * @returns {Promise<FootnoteContentItem | null>} A FootnoteContentItem object if either content or media exists, otherwise null.
 */
async function getFootnoteContentItem(
  content: Document,
  mediaId: string
): Promise<FootnoteContentItem | null> {
  const media = mediaId ? await client.getAsset(mediaId) : null;

  if (!content && !media) {
    return null;
  }

  return { content: content || null, media };
}

export async function fetchFootnoteContent(entryId: string): Promise<FootnoteContent> {
  const entry: FootnoteEntry | undefined = await client.getEntry(entryId);

  if (!entry) {
    console.error(`Failed to fetch entry with id ${entryId}`);
    return;
  }

  const footnoteContent: FootnoteContent = {
    'Vidhiya Saagar': await getFootnoteContentItem(
      entry.fields.vidhiyaSaagarContent,
      entry.fields.vidhiyaSaagarMedia?.sys.id
    ),
    'Kamalpreet Singh': await getFootnoteContentItem(
      entry.fields.kamalpreetSinghContent,
      entry.fields.kamalpreetSinghMedia?.sys.id
    ),
    Manglacharan: await getFootnoteContentItem(entry.fields.manglacharanContent, null),
  };

  return footnoteContent;
}
