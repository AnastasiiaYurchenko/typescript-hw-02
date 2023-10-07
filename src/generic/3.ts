/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<TypeObjA extends object, TypeObjB extends object>(
  objA: TypeObjA,
  objB: TypeObjB
) {
  return Object.assign(objA, objB);
}

export {};
