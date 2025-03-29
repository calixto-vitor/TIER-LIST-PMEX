const uberCharacters = [
  { nome: "Ash", img: "ash.png", query: "ash pikachu" },
  { nome: "SS Cynthia Aura", img: "ssacynthia.png", query: "cynthia lucario" },
  { nome: "SS Red Thunderbolt", img: "sstred.png", query: "red pikachu" },
  { nome: "Serena Champion", img: "champserena.png", query: "serena champion" },
  { nome: "Calem Champion", img: "champcalem.png", query: "calem champion" },
  {
    nome: "Marnie Champion",
    img: "neochampmarnie.png",
    query: "marnie champion",
  },
  { nome: "Hop Champion", img: "neochamphop.png", query: "hop champion" },
  { nome: "Bede Champion", img: "neochampbede.png", query: "bede champion" },
  { nome: "Adaman", img: "adaman.png", query: "badaman" },
  { nome: "Irida", img: "irida.png", query: "irida" },
  { nome: "RED ARTICUNO", img: "neochampred.png", query: "RED ARTICUNO" },
  { nome: "LEAF MOLTRES", img: "neochampleaf.png", query: "LEAF MOLTRES" },
  { nome: "BLUE ZAPDOS", img: "neochampblue.png", query: "BLUE ZAPDOS" },
  { nome: "NATE CHAMPION", img: "neochampnate.png", query: "NATE CHAMPION" },
  { nome: "ROSA CHAMPION", img: "neochamprosa.png", query: "ROSA CHAMPION" },
  { nome: "SS GLADION", img: "ssgladion.png", query: "SS GLADION" },
  { nome: "GEETA", img: "geeta.png", query: "geeta" },
  {
    nome: "SILVER CHAMPION",
    img: "neochampsilver.png",
    query: "Silver champion",
  },
  {
    nome: "CHEREN CHAMPION",
    img: "neochampcheren.png",
    query: "Cheren champion",
  },
  {
    nome: "BIANCA CHAMPION",
    img: "neochampbianca.png",
    query: "Bianca champion",
  },
  { nome: "SS NEMONA", img: "ssnemona.png", query: "ssnemona" },
  {
    nome: "ARC SUIT CYNTHIA",
    img: "arcsuitcynthia.png",
    query: "arc suit cynthia",
  },
  {
    nome: "ARC SUIT STEVEN",
    img: "acrsuitsteven.png",
    query: "arc suit steven",
  },
  { nome: "ARC SUIT LANCE", img: "arcsuitlance.png", query: "ARC SUIT LANCE" },
  { nome: "SS LEAR", img: "sslear.png", query: "sslear" },
  { nome: "ARC SUIT LEON", img: "acrsuitleon.png", query: "ARC SUIT LEON" },
  { nome: "FLORIAN", img: "florian.png", query: "florian", class: "update" },
];

/**
 * Generates and appends character elements to the Uber panel.
 * This function creates anchor and image elements for each character,
 * sets their attributes, and appends them to the specified container.
 */
function generateUberCharacters() {
  const container = document.querySelector("#Uber .panel");
  const fragment = document.createDocumentFragment();

  // Iterate over each character in the personagens array
  uberCharacters.forEach(({ nome, img, query, class: className }) => {
    const a = document.createElement("a");
    a.href = `https://www.youtube.com/c/CalixtoFull/search?query=${encodeURIComponent(query)}`;
    a.target = "_blank"; 
    a.rel = "noopener noreferrer"; 

    // Create an image element
    const image = document.createElement("img");
    image.src = `./src/images/tier uber/${img}`;
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

document.addEventListener("DOMContentLoaded", generateUberCharacters);
