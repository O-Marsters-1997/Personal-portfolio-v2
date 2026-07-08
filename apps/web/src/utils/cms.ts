import type { Post, Media } from "@/payload/payload-types";

const CMS_URL: string = import.meta.env.CMS_URL ?? "http://localhost:3000";

export const mediaUrl = (media: Media) => {
  const url = media.url ?? "";
  return url.startsWith("http") ? url : `${CMS_URL}${url}`;
};

export const readingTime = (html: string) => {
  const words = html
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(
    `${CMS_URL}/api/posts?limit=100&depth=1&sort=-publishedDate`
  );
  if (!res.ok) {
    throw new Error(
      `CMS fetch failed (${res.status}) — is the CMS running at ${CMS_URL}?`
    );
  }
  const { docs } = (await res.json()) as { docs: Post[] };
  return docs.map((post) => ({
    ...post,
    contentHtml: post.contentHtml?.replaceAll(
      'src="/api/',
      `src="${CMS_URL}/api/`
    ),
  }));
}
