/* add(s) - add two split squares */

function add(s1, s2) {
    if (Number.isInteger(s1) && Number.isInteger(s2)) {
      return s1 | s2;
    }
  
    const ensureArray = (s) => (Array.isArray(s) ? s : [s, s, s, s]);

    s1 = ensureArray(s1);
    s2 = ensureArray(s2);

    return [
      add(s1[0], s2[0]),
      add(s1[1], s2[1]),
      add(s1[2], s2[2]),
      add(s1[3], s2[3])
    ];
  }
  