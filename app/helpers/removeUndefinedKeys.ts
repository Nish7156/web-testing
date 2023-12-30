function removeUndefinedKeys(obj: any): any {
  const result: any = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        result[key] = removeUndefinedKeys(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }

  return result;
}

export default removeUndefinedKeys;
