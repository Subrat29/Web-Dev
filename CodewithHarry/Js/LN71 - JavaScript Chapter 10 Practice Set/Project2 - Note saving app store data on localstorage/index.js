let note = localStorage.getItem("note");
alert("Your current note is : " + note);

let a = prompt("Enter your note");
if (a) {
  localStorage.setItem("note", a);
}

let c = confirm("Do you really want to delete this note? Bta re..");
if(c)
{
  localStorage.removeItem("note");
  alert("Note deleted")
}