import MyClass from "../src/MyClass";

describe('#MyClass', () => {
  test('It has a name', () => {
    let myClass = new MyClass("Graham")
    expect(myClass.name).toBe("Graham")
  })
});
