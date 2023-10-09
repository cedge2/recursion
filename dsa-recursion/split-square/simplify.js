function simplify(s) {
    if (s === 0 || s === 1) {
      return s;
    }

    s = s.map(simplify);

    if (s.every(q => typeof q === 'number' && q === s[0])) {
      return s[0];
    }
  
    return s;
  }
  