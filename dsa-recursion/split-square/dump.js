function dump(s) {
    if (s === 0 || s === 1) {
      return s.toString();
    } else if (Array.isArray(s)) {
      return s.map(dump).join(" ");
    }
  }
  
  