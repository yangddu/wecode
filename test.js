function findEvenNumber() {
  const array = new Array();
  for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
}
findEvenNumber();
