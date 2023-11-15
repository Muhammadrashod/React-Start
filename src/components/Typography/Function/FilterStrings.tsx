function filterStrings(arr: any[]): string[] {
    return arr.filter(item => typeof item === 'string');
  }

  console.log(filterStrings);
  