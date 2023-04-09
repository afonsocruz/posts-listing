const stringManipulator = (string: string, divider: number) => {
  let str: string = string;
  let words: string[] = str.split(' ').slice(0, divider);
  let result: string = words.join(' ');

  return result;
};

export default stringManipulator;
