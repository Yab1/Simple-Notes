function getTags(notes) {
  const tags = {};
  notes.map((note) => {
    if (note.tag in tags) {
      tags[note.tag] += 1;
    } else {
      tags[note.tag] = 1;
    }
  });

  const sortedKeys = Object.keys(tags).sort();

  const sortedTags = {};

  sortedKeys.forEach((key) => {
    sortedTags[key] = tags[key];
  });

  return sortedTags;
}

export default getTags;
