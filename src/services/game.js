import HTMLCard from '../components/card';

const generateAllCards = () => {

  const nums = ['ON', 'TW', 'TH']; //ONE, TWO, THREE
  const fills = ['EM', 'HA', 'FU']; //EMPTY, HALF, FULL
  const colors = ['RE', 'BL', 'OR']; //RED, BLUE, ORANGE
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
      if(!nums[cards[i].num]) nums[cards[i].num] = 1;
      else nums[cards[i].num]++
      if(!colors[cards[i].color]) colors[cards[i].color] = 1;
      else colors[cards[i].color]++
      if(!fills[cards[i].fill]) fills[cards[i].fill] = 1;
      else fills[cards[i].fill]++
      if(!shapes[cards[i].shape]) shapes[cards[i].shape] = 1;
      else shapes[cards[i].shape]++
  };
  const numsA = Object.keys(nums);
  if(numsA.length === 2) return false;
  const colorsA = Object.keys(colors);
  if(colorsA.length === 2) return false;
  const fillsA = Object.keys(fills);
  if(fillsA.length === 2) return false;
  const shapesA = Object.keys(shapes);
  if(shapesA.length === 2) return false;
  return true;
};

const generateAllMatches = (cards) => { //Give cards, generates all possible matches for each card
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