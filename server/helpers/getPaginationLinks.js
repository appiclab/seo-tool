module.exports = link => {
  if (!link) {
    return null;
  }

  const next = link.match(/<https:\/\/[^\s]+>; rel="next"/);
  const previous = link.match(/<https:\/\/[^\s]+>; rel="previous"/);
  
  if (!next && !previous) {
    return null;
  }

  return {
    next: next && next[0].replace(/(<|>; rel="next")/g, "") || null,
    previous: previous && previous[0].replace(/(<|>; rel="previous")/g, "") || null
  };
}