var letters = {"a":0, "b":0, "c":0, "d":0, "e":0, "f":0, "g":0, "h":0, "i":0, "j":0, "k":0, "l":0, "m":0, "n":0, "o":0, "p":0, "q":0, "r":0, "s":0, "t":0, "u":0, "v":0, "w":0, "x":0, "y":0, "z":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0, "G":0, "H":0, "I":0, "J":0, "K":0, "L":0, "M":0, "N":0, "O":0, "P":0, "Q":0, "R":0, "S":0, "T":0, "U":0, "V":0, "W":0, "X":0, "Y":0, "Z":0};

function genKey(length) {
  var key = "";
  for (var i = 0; i < length; i++) {
    var rand = Math.round(Math.random() * 51 + 1);
    letter = getLetterOfAlphabet(rand);
    key += letter;
    letters[letter]++;
  }
  return key;
}

document.write(genKey(25) + "</br>");

var toAvg = 0;

for(var i = 1; i < 53; i++) {
  targLetter = getLetterOfAlphabet(i);
  var instances = letters[targLetter];
  if(i % 3 === 0) {
    document.write(targLetter + ": " + instances + "</br>");
  } else {
    document.write(targLetter + ": " + letters[targLetter] + " ");
  }
  toAvg += instances;
}

var avg = Math.floor(toAvg / 52 * 100000) / 100000;
document.write("</br>Average " + avg);
document.write("</br>Average to Total Ratio: " + avg + " : " + toAvg + "</br>");

document.write(genKey(500) + "</br>");

toAvg = 0;

for(var i = 1; i < 53; i++) {
  targLetter = getLetterOfAlphabet(i);
  instances = letters[targLetter];
  if(i % 3 === 0) {
    document.write(targLetter + ": " + instances + "</br>");
  } else {
    document.write(targLetter + ": " + letters[targLetter] + " ");
  }
  toAvg += instances;
}

avg = Math.floor(toAvg / 52 * 100000) / 100000;
document.write("</br>Average " + avg);
document.write("</br>Average to Total Ratio: " + avg + " : " + toAvg+ "</br>");

document.write(genKey(10000) + "</br>");

toAvg = 0;

for(var i = 1; i < 53; i++) {
  targLetter = getLetterOfAlphabet(i);
  instances = letters[targLetter];
  if(i % 3 === 0) {
    document.write(targLetter + ": " + instances + "</br>");
  } else {
    document.write(targLetter + ": " + letters[targLetter] + " ");
  }
  toAvg += instances;
}

avg = Math.floor(toAvg / 52 * 100000) / 100000;
document.write("</br>Average " + avg);
document.write("</br>Average to Total Ratio: " + avg + " : " + toAvg);

function getLetterOfAlphabet(num) {
  switch (num) {
    case 1:
      return "a";
      break;
    case 2:
      return "b";
      break;
    case 3:
      return "c";
      break;
    case 4:
      return "d";
      break;
    case 5:
      return "e";
      break;
    case 6:
      return "f";
      break;
    case 7:
      return "g";
      break;
    case 8:
      return "h";
      break;
    case 9:
      return "i";
      break;
    case 10:
      return "j";
      break;
    case 11:
      return "k";
      break;
    case 12:
      return "l";
      break;
    case 13:
      return "m";
      break;
    case 14:
      return "n";
      break;
    case 15:
      return "o";
      break;
    case 16:
      return "p";
      break;
    case 17:
      return "q";
      break;
    case 18:
      return "r";
      break;
    case 19:
      return "s";
      break;
    case 20:
      return "t";
      break;
    case 21:
      return "u";
      break;
    case 22:
      return "v";
      break;
    case 23:
      return "w";
      break;
    case 24:
      return "x";
      break;
    case 25:
      return "y";
      break;
    case 26:
      return "z";
      break;
    case 27:
      return "A";
      break;
    case 28:
      return "B";
      break;
    case 29:
      return "C";
      break;
    case 30:
      return "D";
      break;
    case 31:
      return "E";
      break;
    case 32:
      return "F";
      break;
    case 33:
      return "G";
      break;
    case 34:
      return "H";
      break;
    case 35:
      return "I";
      break;
    case 36:
      return "J";
      break;
    case 37:
      return "K";
      break;
    case 38:
      return "L";
      break;
    case 39:
      return "M";
      break;
    case 40:
      return "N";
      break;
    case 41:
      return "O";
      break;
    case 42:
      return "P";
      break;
    case 43:
      return "Q";
      break;
    case 44:
      return "R";
      break;
    case 45:
      return "S";
      break;
    case 46:
      return "T";
      break;
    case 47:
      return "U";
      break;
    case 48:
      return "V";
      break;
    case 49:
      return "W";
      break;
    case 50:
      return "X";
      break;
    case 51:
      return "Y";
      break;
    case 52:
      return "Z";
      break;
  }
}
