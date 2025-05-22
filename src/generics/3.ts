function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

// merge(34, "ff");
// merge({ a: "sds" }, 54);
// merge({ a: "sds" }, {});
