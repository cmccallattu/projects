//Basic card counting strategy game
var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  
  if (count>0) {
    return count + " Bet";
  }
  else if (count<=0) {
    return count + " Hold";
  }

}
//test items below
cc(2); cc(3); cc(7); cc('K'); cc('A');
