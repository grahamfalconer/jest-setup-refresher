<div align="center">
<h1>Example Review.</h1>
</div>

**Setup repo with Github:**

```
git init 
git add . 
git commit -m "updated README"
git branch -M main
git remote add origin https://github.com/grahamfalconer/jest-refresher.git
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

Install the new packages
```
npm install
```

<br>

Example input - output
A string is the input ...
['red', 'green', 'red', 'red', 'amber']
['red', 'green', 'amber', 'red']
