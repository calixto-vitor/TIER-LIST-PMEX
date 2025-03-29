const coolCharacters = [
  { nome: "Egg Ninetales", img: "eggninetales.png", query: "egg ninetales" },
  { nome: "Egg Blastoise", img: "eggblastoise.png", query: "egg blastoise" },
  { nome: "Egg Kabutops", img: "eggkabutops.png", query: "egg kabutops" },
  { nome: "Egg Lapras", img: "egglapras.png", query: "egg lapras" },
  { nome: "Misty", img: "misty.png", query: "misty" },
  { nome: "Viola", img: "viola.png", query: "viola" },
  { nome: "Hau", img: "hau.png", query: "hau" },
  { nome: "Professor Oak", img: "oak.png", query: "professor oak" },
  { nome: "Bugsy & Scyther", img: "bugsyscyther.png", query: "bugsy scyther" },
  { nome: "Surge & Raichu", img: "surgeraichu.png", query: "surge raichu" },
  { nome: "Erika & Tangela", img: "erikatangela.png", query: "erika tangela" },
  { nome: "Evelyn", img: "evelyn.png", query: "evelyn" },
  { nome: "Cobalion", img: "cobalion.png", query: "cobalion" },
  { nome: "Winona", img: "winona.png", query: "winona" },
  { nome: "Liza", img: "liza.png", query: "liza" },
  { nome: "Cheryl", img: "cheryl.png", query: "cheryl" },
  { nome: "Marley", img: "marley.png", query: "marley" },
  { nome: "Crasher Wake", img: "crasherwake.png", query: "crasher wake" },
  { nome: "Blaine", img: "blaine.png", query: "blaine" },
  { nome: "Drake", img: "drake.png", query: "drake" },
  { nome: "SS Elesa", img: "sselesa.png", query: "ss elesa" },
  { nome: "Dawn", img: "dawn.png", query: "dawn" },
  { nome: "Serena", img: "serena.png", query: "serena" },
  { nome: "Gladion", img: "gladion.png", query: "gladion" },
  { nome: "Lyra", img: "lyra.png", query: "lyra" },
  { nome: "Egg Jynx", img: "eggjynx.png", query: "egg jynx" },
  { nome: "Glacia EX", img: "glaciaex.png", query: "glacia ex" },
  { nome: "BP Clemont", img: "bpclemont.png", query: "bp clemont" },
  { nome: "BP Janine", img: "bpjanine.png", query: "bp janine" },
  { nome: "Mesprit", img: "mesprit.png", query: "mesprit" },
  { nome: "Nita", img: "nita.png", query: "nita" },
  { nome: "TL Serena", img: "tlserena.png", query: "tl serena" },
  { nome: "TL Dawn", img: "tldawn.png", query: "tl dawn" },
  { nome: "TL Gloria", img: "tlgloria.png", query: "tl gloria" },
  { nome: "Special Victor", img: "specialvictor.png", query: "special victor" },
  { nome: "Dana", img: "dana.png", query: "dana" },
  { nome: "Registeel", img: "registeel.png", query: "registeel" },
  { nome: "BP Valerie", img: "bpvalerie.png", query: "bp valerie" },
  { nome: "Eve", img: "eve.png", query: "eve" },
  { nome: "Riley", img: "riley.png", query: "riley" },
  { nome: "Morgan", img: "morgan.png", query: "morgan" },
  { nome: "BP Rose", img: "bprose.png", query: "bp rose" },
];

/**
 * Generates and appends character elements to the Uber panel.
 * This function creates anchor and image elements for each character,
 * sets their attributes, and appends them to the specified container.
 */
function generateCoolCharacters() {
  const container = document.querySelector("#Cool .panel");
  const fragment = document.createDocumentFragment();

  // Iterate over each character in the personagens array
  coolCharacters.forEach(({ nome, img, query, class: className }) => {
    const a = document.createElement("a");
    a.href = `https://www.youtube.com/c/CalixtoFull/search?query=${encodeURIComponent(
      query
    )}`;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    // Create an image element
    const image = document.createElement("img");
    image.src = `./src/images/mh/${img}`;
    image.alt = nome;

    // Add additional class if specified
    if (className) {
      image.classList.add(className);
    }

    // Append the image to the anchor and the anchor to the fragment
    a.appendChild(image);
    fragment.appendChild(a);
  });

  // Append the fragment to the container
  container.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", generateCoolCharacters);
