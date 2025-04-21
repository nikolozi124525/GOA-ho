function battle(group1, group2) {
    function getPower(str) {
      return [...str].reduce((sum, char) => sum + (char.charCodeAt(0) - 64), 0);
    }
  
    const power1 = getPower(group1);
    const power2 = getPower(group2);
  
    if (power1 > power2) return group1;
    if (power2 > power1) return group2;
    return "Tie!";
  }
  