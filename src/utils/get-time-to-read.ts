export const getTimeToRead = (content: string): string => {
  const wordsPerMinute = 200;
  const wordAmount = content.split(' ').length;
  if (wordAmount <= wordsPerMinute) {
    return '< 1 min read';
  }

  const count = Math.ceil(wordAmount / wordsPerMinute);
  return `${count} min read`;
};
