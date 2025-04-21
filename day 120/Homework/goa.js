function isSubset(subset, superset) {
    for (let item of subset) {
      if (!superset.has(item)) return false;
    }
    return true;
  }
  