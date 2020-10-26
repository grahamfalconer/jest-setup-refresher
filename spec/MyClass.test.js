import MyClass from "../src/MyClass";

let myClass;

beforeEach(() => {
  myClass = new MyClass("Graham")
})

describe('#MyClass', () => {
  test('It has a name', () => {
    expect(myClass.name).toBe("Gram")
  })
});
