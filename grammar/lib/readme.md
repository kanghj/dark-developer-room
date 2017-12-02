
- [tracery-grammar](https://www.npmjs.com/package/tracery-grammar)
- [animals](https://www.npmjs.com/package/animals)
- [word-list](https://www.npmjs.com/package/word-list)

## Tracery

```sh
sed -i '' 's/^module.exports.*//g' tracery.js
```

## animals

```sh
echo 'if (!window.words) { words = {}; } words.animals =' > animals.js
cat words.json >> animals.js
```

## word-list

```sh
echo 'if (!window.words) { words = {}; } words.words =' > words.js
jq --raw-input --slurp 'split("\n")' words.txt >> words.js
```
