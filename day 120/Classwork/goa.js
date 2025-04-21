function unionOfSets(sets) {
    return new Set(sets.flatMap(set => [...set]));
  }
  