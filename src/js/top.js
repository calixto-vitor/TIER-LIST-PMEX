const topCharacters = [
  { nome: "LEON", img: "leon.png", query: "LEON CHARIZARD" },
  { nome: "MAXIE", img: "maxie.png", query: "", class: "upgrade" }, // Adicionado (não tinha alt)
  { nome: "ARCHIE", img: "archie.png", query: "ARCHIE KYOGRE" },
  { nome: "INGO", img: "ingo.png", query: "INGO EXCADRILL" },
  { nome: "Lillie ANNI 22", img: "lillieanni21.png", query: "lillie lunala" },
  {
    nome: "N ANNI 21",
    img: "nanni21.png",
    query: "n reshiram",
    class: "downgrade",
  },
  {
    nome: "Steven ANNI 21",
    img: "stevenanni21.png",
    query: "steven mega rayquaza shiny",
  },
  { nome: "SS Erika", img: "sserika.png", query: "ss erika" },
  {
    nome: "SS Lusamine",
    img: "sslusamine.png",
    query: "ss lusamine",
    class: "downgrade",
  },
  { nome: "SSR Cynthia", img: "ssrcynthia.png", query: "SSR CYNTHIA", class: "upgrade" }, // Adicionado (não tinha alt)
  {
    nome: "Lucas",
    img: "lucas.png",
    query: "lucas dialga",
    class: "downgrade",
  },
  { nome: "May ANNI 22", img: "mayanni22.png", query: "may latias" },
  { nome: "Skyla ANNI 22", img: "skylaanni22.png", query: "skyla tornadus" },
  { nome: "Raihan ANNI 22", img: "raihananni22.png", query: "raihan flygon" },
  {
    nome: "SS Serena",
    img: "ssserena.png",
    query: "ss serena",
    class: "downgrade",
  },
  { nome: "SS Morty", img: "ssmorty.png", query: "ss morty ho-oh" },
  { nome: "SS Giovanni", img: "ssgiovanni.png", query: "ss giovanni nidoking" },
  {
    nome: "SS Ethan",
    img: "ssethan.png",
    query: "ss ethan",
    class: "downgrade",
  },
  { nome: "SS Lyra", img: "sslyra.png", query: "ss lyra", class: "downgrade" },
  { nome: "SS Kris", img: "sskris.png", query: "ss kris", class: "downgrade" },
  { nome: "Gloria Dojo Uniform", img: "gloriadojo.png", query: "gloria dojo" },
  { nome: "SS Korrina", img: "sskorrina.png", query: "ss korrina marshadow" },
  { nome: "SS May", img: "ssmay.png", query: "ss may blaziken" },
  {
    nome: "SS Brendan",
    img: "ssbrendan.png",
    query: "ss brendan latios",
    class: "upgrade",
  }, 
  {
    nome: "SS Steven",
    img: "sssteven.png",
    query: "ss steven deoxys",
    class: "downgrade",
  },
  { nome: "Rosa SC", img: "spcostume2022rosa.png", query: "rosa shaymin" },
  { nome: "SS Wally", img: "sswally.png", query: "ss wally" },
  { nome: "Victor", img: "victor.png", query: "victor" },
  { nome: "SS Hilda", img: "sshilda.png", query: "ss hilda" },
  { nome: "SS Hilbert", img: "sshilbert.png", query: "ss hilbert" },
  {
    nome: "Jasmine Holidays 2022",
    img: "holiday2022jasmine.png",
    query: "jasmine ampharos",
  },
  {
    nome: "Whitney Holidays 2022",
    img: "holiday2022whitney.png",
    query: "whitney sawsbuck",
  },
  { nome: "Lisia NY 2023", img: "ny2023lisia.png", query: "lisia rapidash" },
  { nome: "SS Diantha", img: "ssdiantha.png", query: "ss diantha" },
  { nome: "SS Lysandre", img: "sslysandre.png", query: "ss lysandre" },
  { nome: "Emma", img: "emma.png", query: "emma" },
  {
    nome: "Zinnia SC",
    img: "spcostume2023zinnia.png",
    query: "zinnia thievul",
  },
  { nome: "SS Hau", img: "sshau.png", query: "ss hau" },
  { nome: "SS Mina", img: "ssmina.png", query: "ss mina" },
  { nome: "SS Acerola", img: "ssacerola.png", query: "ss acerola" },
  { nome: "SS Lana", img: "sslana.png", query: "ss lana" },
  { nome: "SS Silver", img: "sssilver.png", query: "ss silver" },
  {
    nome: "Summer 2023 Tate",
    img: "summer2023tate.png",
    query: "tate jirachi",
  },
  {
    nome: "Summer 2023 Liza",
    img: "summer2023liza.png",
    query: "liza celesteela",
  },
  { nome: "Rose", img: "rose.png", query: "rose" },
  { nome: "Oleana", img: "oleana.png", query: "oleana" },
  { nome: "Leon Battle Tower", img: "towerleon.png", query: "leon dragapult" },
  {
    nome: "Gloria Challenger",
    img: "gymgloria.png",
    query: "gloria cinderace",
  },
  { nome: "Nemona", img: "nemona.png", query: "nemona" },
  { nome: "Palmer", img: "palmer.png", query: "Palmer" },
  { nome: "Akari", img: "akari.png", query: "Akari" },
  { nome: "Rei", img: "rei.png", query: "Rei" },
  {
    nome: "Roxanne Fall 2023",
    img: "fall2023roxanne.png",
    query: "roxanne rune",
  },
  { nome: "SS Roxie", img: "ssroxie.png", query: "ss roxie" },
  { nome: "SS Piers", img: "sspiers.png", query: "ss piers" },
  { nome: "Penny", img: "penny.png", query: "penny" },
  { nome: "Elaine", img: "elaine.png", query: "elaine" },
  {
    nome: "Viola Holidays 2023",
    img: "holiday2023viola.png",
    query: "viola vivilion",
  },
  {
    nome: "Sycamore Holidays 2023",
    img: "holiday2023sycamore.png",
    query: "sycamore gogoat",
  },
  { nome: "Iono", img: "iono.png", query: "iono" },
  { nome: "Grusha", img: "grusha.png", query: "grusha" },
  { nome: "Chase", img: "chase.png", query: "chase" },
  { nome: "Irida SC", img: "spcostume2024irida.png", query: "irida zoroark" },
  { nome: "dahlia", img: "dahlia.png", query: "dahlia" }, // Mantido em minúsculo como no alt
  { nome: "volo", img: "volo.png", query: "volo" }, // Mantido em minúsculo como no alt
  { nome: "jacq", img: "jacq.png", query: "jacq" }, // Mantido em minúsculo como no alt
  { nome: "rika", img: "rika.png", query: "rika" }, // Mantido em minúsculo como no alt
  { nome: "poppy", img: "poppy.png", query: "poppy" }, // Mantido em minúsculo como no alt
  { nome: "larry", img: "larry.png", query: "larry" }, // Mantido em minúsculo como no alt
  { nome: "kabu", img: "kabu.png", query: "kabu" }, // Mantido em minúsculo como no alt
  { nome: "KLARA", img: "klara.png", query: "KLARA" }, // Mantido em maiúsculo como no alt
  { nome: "ULTRA ELIO", img: "ultraelio.png", query: "ELIO STAKATAKA" },
  { nome: "ULTRA SELENE", img: "ultraselene.png", query: "SELENE NIHILEGO" },
  { nome: "ARVEN", img: "arven.png", query: "ARVEN" },
  {
    nome: "LILLIE ANNI 24",
    img: "lillieanni24.png",
    query: "LILLIE ANNI 2024",
  },
  { nome: "GIACOMO", img: "giacomo.png", query: "GIACOMO" },
  { nome: "CLAVELL", img: "clavell.png", query: "CLAVELL" },
  { nome: "IONO FALL 2024", img: "fall2024iono.png", query: "IONO FALL 2024" },
  {
    nome: "SS GIOVANNI GUZZLORD",
    img: "ssgiovanniguzzlord.png",
    query: "SS GIOVANNI GUZZLORD",
    class: "update",
  },
  { nome: "ATTICUS", img: "atticus.png", query: "ATTICUS", class: "update" },
  { nome: "JULIANA", img: "juliana.png", query: "JULIANA", class: "update" },
];

/**
 * Generates and appends character elements to the Uber panel.
 * This function creates anchor and image elements for each character,
 * sets their attributes, and appends them to the specified container.
 */
function generateTopCharacters() {
  const container = document.querySelector("#Top .panel");
  const fragment = document.createDocumentFragment();

  // Iterate over each character in the personagens array
  topCharacters.forEach(({ nome, img, query, class: className }) => {
    const a = document.createElement("a");
    a.href = `https://www.youtube.com/c/CalixtoFull/search?query=${encodeURIComponent(
      query
    )}`;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    // Create an image element
    const image = document.createElement("img");
    image.src = `./src/images/tier top/${img}`;
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

document.addEventListener("DOMContentLoaded", generateTopCharacters);
