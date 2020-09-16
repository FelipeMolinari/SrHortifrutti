// @ts-nocheck

export function isEquivalent(a: object, b: object) {
  const cloneA = Object.assign({}, a);
  const cloneB = Object.assign({}, b);
  cloneA.toDelete.forEach((item) => {
    delete cloneA.objectData[item];
  });

  cloneB.toDelete.forEach((item) => {
    delete cloneB.objectData[item];
  });
  var aProps = Object.getOwnPropertyNames(cloneA.objectData);
  var bProps = Object.getOwnPropertyNames(cloneB.objectData);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    if (cloneA.objectData[propName] !== cloneB.objectData[propName]) {
      return false;
    }
  }

  return true;
}
