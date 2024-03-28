// 1_Misol:
function let_Values(arr) {
     return Array.from(new Set(arr));
   }
   
   let orgArray = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 1];
   let Array = let_Values(orgArray);
   console.log(Array);  //[1, 2, 3, 4, 5, 6, 7, 8]
   

   //2_misol
   function Chars(str) {
     let charMap = new Map();
     for (let char of str) {
       charMap.set(char, (charMap.get(char) || 0) + 1);
     }
   
     let uniqueMap = new Map();
     for (let [char, count] of charMap) {
       if (count === 1) {
         uniqueMap.set(char, count);
       }
     }
   
     return uniqueMap;
   }
   
   let inputString = "hello world";
   let uniqueCharacters = Chars(inputString);
   console.log(uniqueCharacters);  // { 'h' => 1, 'e' => 1, 'w' => 1, 'r' => 1, 'd' => 1 }
   

   //3_misol
   function isUnique(arr) {
     let uniqueSet = new Set(arr);
     if (uniqueSet.size === arr.length) {
       return true;
     } else {
       return false;
     }
   }
   
   let first_Array = [1, 2, 3, 4, 5];
   let secnd_Array = [1, 2, 3, 4, 4];
   console.log(isUnique(first_Array));  // rost
   console.log(isUnique(secnd_Array));  // yolg'on
   
   //4_misol
   function merge_Array(arr1, arr2) {
     let set_1 = new Set(arr1);
     let set_2 = new Set(arr2);
     let mergedSet = new Set([...set_1, ...set_2]);
     return Array.from(mergedSet);
   }
      let array1 = [1, 2, 3, 4, 5];
   let array2 = [3, 4, 5, 6, 7];
   let mergedArray = merge_Array(array1, array2);
   console.log(mergedArray);  // Natija: [1, 2, 3, 4, 5, 6, 7]
   
   //5_misol
   function countUniqueWords(str) {}
    let wordMap = new Map();
    let words = str.split(" ");
  
    words.forEach(function(word) {
      if (wordMap.has(word)) {
        let count = wordMap.get(word);
        wordMap.set(word, count + 1);
      } else {
        wordMap.set(word, 1);
      }
    });
    let uniqueWordCount = 0;
    wordMap.forEach(function(count) {
      if (count === 1) {
        uniqueWordCount++;
      }
    });
    return uniqueWordCount;
  
  let sentence = "Bu bir test satridir bu testda bir nechta bir so'z bor";
  let uniqueCount = countUniqueWords(sentence);
  console.log("Noyob so'zlar soni:", uniqueCount);
  

   //6_misol   
   function removeDuplicates(arr) {
    let uniqueArray = Array.from(new Set(arr));
  
    return uniqueArray;
  }
  let array = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8];
  let newArray = removeDuplicates(array);
  console.log("Takrorlashsiz seriyalar:", newArray);


   //7_misol
   function subsetCheck(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    for (let item of set1) {
        if (!set2.has(item)) {
            return "yolg'on";
        }
    }
    return "rost";
}

const arr_1 = [1, 2, 3];
const arr_2 = [5, 3, 1, 2, 4];

console.log(subsetCheck(arr_1, arr_2)); // rost

//8_misol

function getUniqueCharacters(str1, str2) {
  let combinedStr = str1 + str2;

  let uniqueCharacters = new Set(combinedStr);

  let uniqueString = Array.from(uniqueCharacters).join("");
  return uniqueString;
}
let string1 = "abcde";
let string2 = "defgh";
let uniqueString = getUniqueCharacters(string1, string2);
console.log("Noyob belgilar:", uniqueString);


//9_misol
function calculateSumOfValues(values) {

  let valueMap = new Map();

  values.forEach(function(value, index) {
    valueMap.set(index, value);
  });

  let sum = 0;
  valueMap.forEach(function(value) {
    sum += value;
  });

}
let number_Values = [10, 20, 30, 40, 50];
let total_Sum = calculateSumOfValues(number_Values);
console.log("Qiymatlar yig'indisi:", total_Sum);

//10_misol
function calculateSumOfValues(values) {

  let valueMap = new Map();

  values.forEach(function(value, index) {
    valueMap.set(index, value);
  });

  let sum = 0;
  valueMap.forEach(function(value) {
    sum += value;
  });

}
let num_Values = [10, 20, 30, 40, 50];
let totalSum = calculateSumOfValues(num_Values);
console.log("Qiymatlar yig'indisi:", totalSum);