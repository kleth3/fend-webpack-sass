function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  if (inputText.score_tag === ("N" || "N+")) {
    alert("Sentiment is negative!");
  } else if (inputText.score_tag === "NEU") {
    alert("Sentiment is neutral");
  } else if (inputText.score_tag === ("P" || "P+")) {
    alert("Sentiment is positive");
  } else {
    alert("No sentiment found");
  }
}

export { checkForName };
