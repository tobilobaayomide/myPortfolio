export const getLeadSentence = (text: string) => {
  const normalized = text.replace(/\s+/g, ' ').trim();

  if (!normalized) {
    return '';
  }

  const match = normalized.match(/^.*?[.!?](?=\s|$)/);

  return match ? match[0].trim() : normalized;
};
