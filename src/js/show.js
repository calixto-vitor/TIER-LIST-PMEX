const showCharacters = [
  { nome: "Rosa", img: "rosa.png", query: "" },
  { nome: "Skyla", img: "skyla.png", query: "" },
  {
    nome: "Giovanni",
    img: "giovanni.png",
    query: "GIOVANNI MEWTWO",
    class: "downgrade",
  },
  { nome: "Silver", img: "silver.png", query: "" },
  { nome: "Cyrus", img: "cyrus.png", query: "" },
  { nome: "Ghetsis", img: "ghetsis.png", query: "" },
  { nome: "Solgaleo", img: "solgaleo.png", query: "" },
  { nome: "Sycamore", img: "sycamore.png", query: "" },
  { nome: "Hop", img: "hop.png", query: "" },
  { nome: "Misty Psyduck", img: "mistypsyduck.png", query: "" },
  { nome: "Morty Mismagius", img: "mortymismagius.png", query: "" },
  { nome: "Roxanne", img: "roxanne.png", query: "" },
  { nome: "Brendan", img: "brendan.png", query: "" },
  { nome: "Phoebe", img: "phoebe.png", query: "" },
  { nome: "Olivia", img: "olivia.png", query: "" },
  { nome: "Blue Pidgeot", img: "bluepidgeot.png", query: "" },
  { nome: "Hilbert", img: "hilbert.png", query: "" },
  { nome: "Elesa", img: "elesa.png", query: "" },
  { nome: "Cynthia", img: "cynthia.png", query: "" },
  { nome: "Leaf", img: "leaf.png", query: "" },
  { nome: "Steven", img: "steven.png", query: "" },
  { nome: "Sabrina", img: "sabrina.png", query: "" },
  {
    nome: "SS RED",
    img: "ssred.png",
    query: "SS RED CHARIZARD",
    class: "downgrade",
  },
  { nome: "Guzma", img: "guzma.png", query: "" },
  { nome: "Jasmine", img: "jasmine.png", query: "" },
  { nome: "SS Cynthia", img: "sscynthia.png", query: "" },
  { nome: "SS LEAF", img: "ssleaf.png", query: "SS LEAF", class: "downgrade" },
  {
    nome: "SS BLUE",
    img: "ssblue.png",
    query: "SS BLUE BLASTOISE",
    class: "downgrade",
  },
  { nome: "Lillie", img: "lillie.png", query: "" },
  { nome: "Volkner", img: "volkner.png", query: "" },
  { nome: "Alder", img: "alder.png", query: "" },
  { nome: "N", img: "n.png", query: "N ZEKROM", class: "downgrade" },
  { nome: "MAY", img: "may.png", query: "MAY SWAMPERT", class: "downgrade" },
  { nome: "Champion Iris", img: "championiris.png", query: "" },
  { nome: "Diantha", img: "diantha.png", query: "" },
  { nome: "Nessa", img: "nessa.png", query: "" },
  { nome: "BEA", img: "bea.png", query: "BEA SIRFETCHD", class: "downgrade" },
  {
    nome: "Sidney",
    img: "sidney.png",
    query: "sidney absol",
    class: "downgrade",
  },
  { nome: "Kiawe", img: "kiawe.png", query: "" },
  { nome: "Falkner", img: "falkner.png", query: "" },
  { nome: "Red Snorlax", img: "redsnorlax.png", query: "" },
  { nome: "Caitlin Fall 21", img: "caitlinfall21.png", query: "" },
  { nome: "Alola Grimsley", img: "alolagrimsley.png", query: "" },
  { nome: "Leon Holiday 21", img: "leonholiday21.png", query: "" },
  { nome: "Sonia", img: "sonia.png", query: "" },
  { nome: "Volkner NY 22", img: "volknerny22.png", query: "" },
  { nome: "SS Cyrus", img: "sscyrus.png", query: "" },
  { nome: "SS Dawn", img: "ssdawn.png", query: "" },
  { nome: "Aaron", img: "aaron.png", query: "" },
  { nome: "Bertha", img: "bertha.png", query: "" },
  { nome: "Lucian", img: "lucian.png", query: "" },
  { nome: "Bede", img: "bede.png", query: "" },
  { nome: "N Summer 22", img: "nsummer22.png", query: "" },
  { nome: "Courtney", img: "courtney.png", query: "" },
  { nome: "Gordie", img: "gordie.png", query: "gordie" },
  { nome: "Melony", img: "melony.png", query: "melony" },
  { nome: "Iris Fall 22", img: "irisfall22.png", query: "fall 2022" },
  { nome: "Allister Fall 22", img: "allisterfall22.png", query: "fall 2022" },
  { nome: "SS N", img: "ssn.png", query: "ss n" },
  { nome: "Hugh", img: "hugh.png", query: "hugh" },
  { nome: "Colress", img: "colress.png", query: "colress" },
  { nome: "Dawn Oricorio", img: "ny2023dawn.png", query: "dawn oricorio" },
  { nome: "Shauna", img: "shauna.png", query: "shauna" },
  {
    nome: "Mallow Palentines 2023",
    img: "palentines2023mallow.png",
    query: "mallow palentines 2023 mallow",
  },
  { nome: "Anabel", img: "anabel.png", query: "anabel" },
  { nome: "Ball Guy", img: "ballguyex.png", query: "ball guy" },
  {
    nome: "Steven SC",
    img: "spcostume2023steven.png",
    query: "steven stoutland",
  },
  { nome: "Shauna SC", img: "spcostume2023shauna.png", query: "shauna klefki" },
  { nome: "Lyra SC", img: "spcostume2023lyra.png", query: "lyra phanphy" },
  { nome: "Eusine", img: "eusine.png", query: "eusine" },
  { nome: "Olympia", img: "olympia.png", query: "OLYMPIA" },
  { nome: "Drasna", img: "drasna.png", query: "DRASNA" },
  { nome: "Paulo", img: "paulo.png", query: "Paulo" },
  {
    nome: "Giovanni RHYDON",
    img: "giovanniRHYDON.png",
    query: "Giovanni RHYDON",
  },
  { nome: "Argenta", img: "argenta.png", query: "Argenta" },
  {
    nome: "Thorton Variety",
    img: "varietythorton.png",
    query: "Thorton Magnezone",
  },
  { nome: "Noland Variety", img: "varietynoland.png", query: "Noland Ninjask" },
  {
    nome: "Phoebe Fall 2023",
    img: "fall2023phoebe.png",
    query: "Phoebe Confagrigus",
  },
  { nome: "Ryuki", img: "ryuki.png", query: "ryuki" },
  { nome: "Elio Variety", img: "varietyelio.png", query: "elio espeon" },
  { nome: "Selene Variety", img: "varietyselene.png", query: "selene umbreon" },
  {
    nome: "New Year 2024 Wallace",
    img: "ny2024wallace.png",
    query: "wallace blacephalon",
  },
  {
    nome: "New Year 2024 Clair",
    img: "ny2024clair.png",
    query: "clair drampa",
  },
  {
    nome: "Victor Palentine's 2024",
    img: "palentines2024victor.png",
    query: "victor palentines",
  },
  {
    nome: "Candice Palentine's 2024",
    img: "palentines2024candice.png",
    query: "candice darmanitan",
  },
  {
    nome: "Adaman SC",
    img: "spcostume2024adaman.png",
    query: "adaman ursaluna",
  },
  { nome: "Barry SC", img: "spcostume2024barry.png", query: "barry heracross" },
  { nome: "Selene SC", img: "spcostume2024selene.png", query: "selene scizor" },
  { nome: "Brycen-Man", img: "brycenman.png", query: "Brycen-Man" },
  { nome: "Bellelba", img: "bellelba.png", query: "bellelba" },
  { nome: "Guzma Variety", img: "varietyguzma.png", query: "guzma variety" },
  {
    nome: "Plumeria Variety",
    img: "varietyplumeria.png",
    query: "plumeria variety",
  },
  { nome: "AVERY", img: "avery.png", query: "AVERY" },
  { nome: "GRETA", img: "greta.png", query: "GRETA" },
  {
    nome: "SHAUNTAL FALL 2024",
    img: "fall2024shauntal.png",
    query: "SHAUNTAL FALL 2024",
  },
  { nome: "SS INGO", img: "ssingo.png", query: "SS INGO" },
  { nome: "SS EMMET", img: "ssemmet.png", query: "SS EMMET" },
  { nome: "DEXIO", img: "dexio.png", query: "DEXIO" },
  { nome: "SINA", img: "sina.png", query: "SINA" },
  { nome: "MILO", img: "milo.png", query: "MILO" },
  {
    nome: "LILLIE HOLIDAYS 2024",
    img: "holiday2024lillie.png",
    query: "LILLIE PRIMARIA",
  },
  {
    nome: "BUGSY HOLIDAYS 2024",
    img: "holiday2024bugsy.png",
    query: "BUGSY KRICKETUNE",
  },
  {
    nome: "RAIHAN NEW YEAR 2025",
    img: "ny2025raihan.png",
    query: "RAIHAN SANDACONDA",
    class: "update",
  },
  {
    nome: "POPPY NEW YEAR 2025",
    img: "ny2025poppy.png",
    query: "POPPY STELLIX",
    class: "update",
  },
  { nome: "MELA", img: "mela.png", query: "MELA", class: "update" },
  {
    nome: "MARLEY PALENTINES 2025",
    img: "palentines2025marley.png",
    query: "MARLEY SHAYMIN",
    class: "update",
  },
  {
    nome: "ERIKA PALENTINES 2025",
    img: "palentines2025erika.png",
    query: "ERIKA LURANTIS",
    class: "update",
  },
];

/**
 * Generates and appends character elements to the Uber panel.
 * This function creates anchor and image elements for each character,
 * sets their attributes, and appends them to the specified container.
 */
function generateShowCharacters() {
  const container = document.querySelector("#Show .panel");
  const fragment = document.createDocumentFragment();

  // Iterate over each character in the personagens array
  showCharacters.forEach(({ nome, img, query, class: className }) => {
    const a = document.createElement("a");
    a.href = `https://www.youtube.com/c/CalixtoFull/search?query=${encodeURIComponent(
      query
    )}`;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    // Create an image element
    const image = document.createElement("img");
    image.src = `./src/images/tier show/${img}`;
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

document.addEventListener("DOMContentLoaded", generateShowCharacters);
