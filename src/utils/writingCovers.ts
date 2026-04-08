type DevArticleCoverResponse = {
  title?: string;
  cover_image?: string | null;
  social_image?: string | null;
};

export type WritingCover = {
  coverImage: string;
  coverAlt: string;
};

const DEV_HOSTS = new Set(['dev.to', 'www.dev.to']);

const parseDevArticlePath = (url: string) => {
  try {
    const parsedUrl = new URL(url);

    if (!DEV_HOSTS.has(parsedUrl.hostname)) {
      return null;
    }

    const [username, slug] = parsedUrl.pathname.split('/').filter(Boolean);

    if (!username || !slug) {
      return null;
    }

    return { username, slug };
  } catch {
    return null;
  }
};

export const fetchWritingCover = async (
  url: string,
  signal?: AbortSignal,
): Promise<WritingCover | null> => {
  const articlePath = parseDevArticlePath(url);

  if (!articlePath) {
    return null;
  }

  const response = await fetch(
    `https://dev.to/api/articles/${encodeURIComponent(articlePath.username)}/${encodeURIComponent(articlePath.slug)}`,
    {
      headers: {
        Accept: 'application/json',
      },
      signal,
    },
  );

  if (!response.ok) {
    return null;
  }

  const article = (await response.json()) as DevArticleCoverResponse;
  const image = article.cover_image ?? article.social_image;

  if (!image) {
    return null;
  }

  return {
    coverImage: image,
    coverAlt: `Cover image for ${article.title ?? 'article'}`,
  };
};
