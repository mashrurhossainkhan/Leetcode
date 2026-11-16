var groupAnagrams = function (strs) {
  const groups = new Map();

  for (const word of strs) {
    const key = word.split('').sort().join('');
    console.log(
      'Word:',
      JSON.stringify(word),
      '| Sorted key:',
      JSON.stringify(key),
    );

    if (!groups.has(key)) {
      console.log('New key: creating an empty group');
      groups.set(key, []);
    }

    groups.get(key).push(word);
    console.log('Groups so far:', JSON.stringify(Object.fromEntries(groups)));
  }

  return Array.from(groups.values());
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// Expected groups (any order): [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

/*
Logic:
1. Create a Map to store groups of anagrams.
2. For each word, sort its letters to create a key.
   Example: 'eat', 'tea', and 'ate' all produce the key 'aet'.
3. If the key is not in the Map yet, create an empty array for it.
4. Add the original word to the array stored under that key.
   Words with the same sorted key belong to the same anagram group.
5. Return the Map's values as an array of groups.

Example walkthrough:
'eat' -> 'aet' -> ['eat']
'tea' -> 'aet' -> ['eat', 'tea']
'tan' -> 'ant' -> ['tan']
'ate' -> 'aet' -> ['eat', 'tea', 'ate']
'nat' -> 'ant' -> ['tan', 'nat']
'bat' -> 'abt' -> ['bat']

Time: O(n * k log k), where n is the number of words and k is the
maximum word length, because we sort each word's letters.
Space: O(n * k) for the keys and grouped output.
*/
