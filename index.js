function binaryToText(binary) {
  binary = binary.replace(/\s+/g, ' ').trim();
  const characters = binary.split(' ');
  return characters.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
}

function textToBinary(text) {
  return Array.from(text).map(char => char.charCodeAt(0).toString(2)).join(' ');
}

function binaryToEmoji(binary) {
  return Array.from(binary)
    .map(char => {
      if (char === '0') return ':thefuckisthis:';
      else if (char === '1') return ':morkovka:';
      return char;
    })
    .join('')
}

function emojiToBinary(emoji) {
  const words = emoji.trim().split(/\s+/g)
  return words.map(word => {
    return word.split(':')
      .map(char => {
        if (char === 'thefuckisthis') return '0';
        else if (char === 'morkovka') return '1';
        return '';
      })
      .filter(char => char !== '')
      .join('')
  })
    .join(' ')
}

function textToEmoji(text) {
  const binary = textToBinary(text);
  return binaryToEmoji(binary);
}

function emojiToText(emoji) {
  const binary = emojiToBinary(emoji);
  return binaryToText(binary);
}