function isFlush(hand) {
   
    const suits = hand.map(card => card[card.length - 1]);
    return new Set(suits).size === 1;
  }
  