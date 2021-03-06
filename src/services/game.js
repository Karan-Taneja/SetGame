const generateAllCards = () => {
  const nums = ['ON', 'TW', 'TH']; //ONE, TWO, THREE
  const fills = ['EM', 'HA', 'FU']; //EMPTY, HALF, FULL
  const colors = ['RE', 'BL', 'GR']; //RED, BLUE, GREEN
  const shapes = ['ST', 'DM', 'CR']; //STAR, DIAMOND, CIRCLE
  const results = [];
  for(let num of nums){
    for(let fill of fills){
      for(let color of colors){
        for(let shape of shapes){
          const card = { 
            id: `${num}-${fill}-${color}-${shape}`,
            properties: { num, fill, color, shape },
            matches: {},
          };
          results.push(card);
        };
      };
    };
  };
  return results;
};

const checkForMatch = (cards) => { //Checks a given array for matches
  const nums = {}, colors={}, fills={}, shapes={};
  for(let i = 0; i < cards.length; i++){
      const c = cards[i];
      if(!nums[c.num]) nums[c.num] = 1;
      else nums[c.num]++
      if(!colors[c.color]) colors[c.color] = 1;
      else colors[c.color]++
      if(!fills[c.fill]) fills[c.fill] = 1;
      else fills[c.fill]++
      if(!shapes[c.shape]) shapes[c.shape] = 1;
      else shapes[c.shape]++
  };
  const numsL = Object.keys(nums).length;
  const colorsL = Object.keys(colors).length;
  const fillsL = Object.keys(fills).length;
  const shapesL = Object.keys(shapes).length;
  return (numsL !== 2 && colorsL !== 2 && fillsL !== 2 && shapesL !== 2);
};

const generateAllMatches = (cards) => { //Given cards, generates all possible matches for each card
  for(let i = 0; i < cards.length; i++){
    for(let j = 0; j < cards.length; j++){
      if(cards[j].id === cards[i].id) continue;
      else {
        cards[i].matches[cards[j].id] = {};
        const jMatches = cards[i].matches[cards[j].id];
        for(let k = 0; k < cards.length; k++){
          if(cards[k].id === cards[j].id || cards[k].id === cards[i].id) continue;
          else {
            let cardA = [cards[i].properties, cards[j].properties, cards[k].properties];
            let ev = checkForMatch(cardA);
            if(ev) jMatches[cards[k].id] = cards[k].id
          };
        };
        cards[i].matches[cards[j].id] = jMatches;
      };
    };
  };
  return cards;
};

const checkForMatches = (cards) => {
  for(let i = 0; i < cards.length; i++){
    for(let j = 0; j < cards.length; j++){
        if(cards[j].id === cards[i].id) continue;
      for(let k = 0; k < cards.length; k++){
        if(cards[k].id === cards[i].id || cards[k].id === cards[j].id) continue;
        else if (cards[i].matches[cards[j].id][cards[k].id]) return true;
      };
    };
  };
  return false;
};

const devGetMatches = (cards) => { //Function for testing purposes to get a match
  for(let i = 0; i < cards.length; i++){
    for(let j = 0; j < cards.length; j++){
        if(cards[j].id === cards[i].id) continue;
      for(let k = 0; k < cards.length; k++){
        if(cards[k].id === cards[i].id || cards[k].id === cards[j].id) continue;
        else if (cards[i].matches[cards[j].id][cards[k].id]) {
          console.log(`${cards[i].id}, ${[cards[j].id]}, ${[cards[k].id]}`);
        }
      };
    };
  };
  return false;
};

const shuffleDeck = (deck) => { //Given a deck, shuffles it
  let tempDeck = JSON.parse(JSON.stringify(deck));
  for (let i = tempDeck.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let temp = tempDeck[i];
    tempDeck[i] = tempDeck[j];
    tempDeck[j] = temp;
  };
  return tempDeck;
};

const dealCards = (n, deck) => { //Given a deck, returns an array with n cards
  const deal = [];
  for(let i = 0; i < n; i++) deal.push(deck.shift())
  return deal;
}

let oDeck = generateAllMatches(generateAllCards());
let deck = shuffleDeck(oDeck)

export { shuffleDeck, dealCards, checkForMatches, deck, oDeck, devGetMatches };