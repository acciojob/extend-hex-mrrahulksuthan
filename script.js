const extendHex = (shortHex) => {
  // write your code here
	 let hex = shortHex.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const fullHex = "#" + hex;
  return fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
