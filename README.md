<div align="center">
<h1>Example Review.</h1>
</div>

Setup repo with Github:

```
git init 
git add . 
git commit -m "updated README"
git branch -M main
git remote add origin https://github.com/grahamfalconer/jest-refresher.git
git push -u origin main
```

<br>

Setup Node:

```
npm init -y
```

<br>

Setup Jest:

```
npm install --save-dev jest
```
```
npm install (to make sure everything was installed properly)
```

<br>

Create folders for your code and tests:
```
mkdir spec
```
```
mkdir src
```



Example input - output
A string is the input ...
['red', 'green', 'red', 'red', 'amber']
['red', 'green', 'amber', 'red']
