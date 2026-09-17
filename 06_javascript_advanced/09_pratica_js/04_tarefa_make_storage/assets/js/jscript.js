function makeStorage() {
  const newCreate = {};

  function storage() {
    return { ...newCreate };
  }

  storage.setValue = (key, value) => {
    newCreate[key] = value;
  };

  storage.getValue = (key) => {
    return newCreate[key];
  };

  return storage;
}


const storage = makeStorage();

storage.setValue('name', 'Peter');
storage.setValue('age', 30);

console.log(storage.getValue('name')); // Peter
console.log(storage.getValue('age')); // 30

storage.setValue('age', 31);

console.log(storage.getValue('age')); // 31
console.log(storage.getValue('occupation')); // undefined

storage.setValue('getValue', 42);
console.log(storage.getValue('getValue')); // 42

storage.setValue('setValue', 'hello');
storage.setValue('x', 10);

console.log(storage.getValue('x')); // 10
console.log(storage.getValue('setValue')); // hello
