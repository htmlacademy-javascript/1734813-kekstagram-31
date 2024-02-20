function stringCheker (string , number) {
  if (string.length < number) {
    return true;
  }
  return false;
}

function palidrome(str) {
  str = str.toLowerCase().replace(/\s/g,'');
  return str === str.split('').reverse().join('');
}

