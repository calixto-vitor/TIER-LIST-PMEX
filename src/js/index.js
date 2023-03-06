function openTab(evt, tier) {
  let i = 0;

  let tabcontent = document.getElementsByClassName("tabcontent");

  for (i; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablinks");

  for (i; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tier).style.display = "block";
  evt.currentTarget.className += " active";
}
