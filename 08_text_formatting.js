/**
 * Text Formatting
 *
 *
 *
 * 1. Strings
 *
 * Javascript String type is used to represent textual data .It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0 , the next at index 1, and so on. The length of a String is the number of elements in it.
 */
// Creating a String literal
const string = "Hello World";
console.log(string);

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}

/**
 * Hexadecimal Escape Sequences
 * The number after \x is interpreted as a hexadecimal number.
 */
console.log(`Hexadecimal Escape Sequences\n`);

console.log("\x41");
console.log("\xA9");

/**
 * Unicode escape sequences
 * The Unicode escape sequences require at least four hexadecimal digits following \u.
 */
console.log(`Unicode escape sequences\n`);
console.log("\u00A9");

/**
 * Unicode code point escapes
 *
 */
console.log(`Unicode code point escapes\n`);
console.log("\u{2F804}");

/**
 * String objects
 * The String object is a wrapper around the string primitive data type.
 */
console.log(`String objects\n`);
const stringObject = new String("Hello World");
console.log(stringObject);
console.log(typeof stringObject);

const str1 = "2+2";
const str2 = new String("2+2");
console.log(eval(str1));
console.log(eval(str2));

// Methods of String
/**
 * Methods of String                        Description
 * charAt()                                Returns the character at the specified index.
 * charCodeAt()                            Returns the Unicode of the character at the specified index.
 * concat()                                Joins two or more strings, and returns a new joined strings.
 * 
 * indexOf()                               Returns the position of the first found occurrence of a specified value in a string.
 * 
 * lastIndexOf()                           Returns the position of the last found occurrence of a specified value in a string.
 * 
 * localeCompare()                         Compares two strings in the current locale.
 * 
 * match()                                 Searches a string for a match against a regular expression, and returns the matches.
 * 
 * replace()                               Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
 * 
 * search()                                Searches a string for a specified value, or regular expression, and returns the position of the match.
 * 
 * slice()                                 Extracts a part of a string and returns a new string.
 * 
 * split()                                 Splits a string into an array of substrings.
 * 
 * substr()                                Extracts the characters from a string, beginning at a specified start position, and through the specified number of character.
 * 
 * substring()                             Extracts the characters from a string, between two specified indices.
 * 
 * toLocaleLowerCase()                     Converts a string to lowercase letters, according to the host's locale.
 * 
 * toLocaleUpperCase()                     Converts a string to uppercase letters, according to the host's locale.
 * 
 * toLowerCase()                           Converts a string to lowercase letters.
 * 
 * toString()                              Returns the value of a String object.
 * 
 * toUpperCase()                           Converts a string to uppercase letters.
 * 
 * trim()                                  Removes whitespace from both ends of a string.
 * 
 * normalize()                             Returns the Unicode Normalization Form of the string.
 * 
 * repeat()                                Returns a new string with a specified number of copies of an existing string.
 * 

 */

/**
 *
 * Multi-line template literals
 *
 */
console.log(`
    string text line 1
    string text line 2
    `);

/**
 * Embedding expressions
 *
 */
const name = "John";

console.log(`Hello ${name}!`);

/**
 * Internationalization
 */
console.log(`Internationalization\n`);
const date = new Date();

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};

const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;
console.log(americanDateTime(date));

console.log(`Number Formatting\n`);
const petrolPrice = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
});

console.log(petrolPrice.format(99.12));

console.log(`Collation\n`);
const names = ["Hochberg", "Hönigswald", "Holzman"];
const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

console.log(names.sort(germanPhonebook.compare).join(", "));