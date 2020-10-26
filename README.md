<div align="center">
<h1>Setup your project with Jest.</h1>
</div>

**Setup repo with Github:**

```
git init 
git add . 
git commit -m "updated README"
git branch -M main
git remote add origin <Your repo url + .git>
git push -u origin main
```

<br>

**Setup Node:**

```
npm init -y
```

<br>

**Setup Jest:**

```
npm install --save-dev jest
```
```
npm install (to make sure everything was installed properly)
```

<br>

**Create folders for your code and tests:**
```
mkdir spec
```
```
mkdir src
```

<br>

**Make a change in package.json to use jest:**

_Before..._
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
_After..._
```
  "scripts": {
    "test": "jest"
  },
```

<br>

**Add babel dependencies to use Import instead of require**

_Before..._
```
  "devDependencies": {
    "jest": "^26.6.1"
  },
```
_After..._
```
  "devDependencies": {
    "@babel/plugin-transform-modules-commonjs": "^7.9.6",
    "babel-preset-env": "^1.7.0",
    "babel-register": "^6.26.0",
    "esm": "^3.2.25",
    "jest": "^26.6.1"
  },
```

<br>

**Add a Babel config file**
```
touch .babelrc
```

<br>

**Add the following to the babel config file**
```
{
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
}
```

<br>

**Install the new packages**

```
npm install
```

<br>

**Make your class file and test file**
```
cd spec
touch MyClass.test.js
cd ..
cd src
touch MyClass.js
```

<br>

**Write a test for your class (Babel will be configured so node can support Import statement)**
```
import MyClass from "../src/MyClass";

describe('#MyClass', () => {
  test('It has a name', () => {
    let myClass = new MyClass("Graham")
    expect(myClass.name).toBe("Graham")
  })
});

```

<br>

**Type your class**
```
export default class MyClass {
  constructor(name) {
    this.name = name
  }
}
```
<br>

**Run the test**
```
npm test
```

<br>

**... and voila! You're ready to test classes in Jest.**

