/** A followed actress, as stored in chrome.storage.local under `following`. */
export interface Pornstar {
  /** Article type taken from the actress link on the detail page (e.g. "actress"). */
  type: string;
  /** Actress id on DMM. */
  id: string;
  /** Actress name. */
  name: string;
  /** Package (cover art) image URL of the work the follow was made from. */
  coverArtUrl: string;
}
