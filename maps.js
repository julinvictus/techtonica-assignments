// Create a map and try performing set, get, clear, delete, has etc methods on it.

let animals = new Map();
animals.set('mammal','dog');
animals.set('reptile','snake');
animals.set('rodent','mouse');
animals.size //3
animals.get("mammal"); //rabbit
animals.delete("mammal");
animals.size //2
animals.has("mammal"); //false
animals.clear();
animals.size //0