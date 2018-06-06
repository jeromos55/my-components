// Get the parent DIV, add click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
  // e.target was the clicked element
  if (e.target && e.target.matches("a.classA")) {
    console.log("Anchor element clicked!");
  }

  if (e.target && e.target.nodeName == "LI") {
    // List item found!  Output the ID!
    console.log(
      "List item ",
      e.target.id.replace("post-", ""),
      " was clicked!"
    );
  }
});
