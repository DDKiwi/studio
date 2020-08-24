const map = (obj, fun) =>
  Object.entries(obj).reduce(
    (prev, [key, value]) => ({
      ...prev,
      [key]: fun(key, value),
    }),
    {}
  );

const filter = (obj, fun) =>
  Object.entries(obj).reduce(
    (prev, [key, value]) => ({
      ...prev,
      ...(fun(key, value) ? { [key]: value } : {}),
    }),
    {}
  );

const reduce = (obj, fun, initialValue) =>
  Object.entries(obj).reduce(
    (prev, [key, value]) => fun(prev, key, value),
    initialValue
  );

export { map, filter, reduce };
