// Invasive species data extracted from USFS National Invasive Species dataset
// Source: https://data-usfs.hub.arcgis.com (NFS in Texas National Forest)
// Species mapped to Texas ecoregions based on ecological distribution

const invasiveSpeciesData = [
  { scientific: "Ailanthus altissima", common: "Tree of Heaven", ecoregions: ["crossTimbers", "texasBlacklandPrairies", "eastCentralTexasPlains", "edwardsPlateau"], image: "Invasive/ailanthus-altissima.jpg", text: "Agnieszka Kwiecień, Nova, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons>, via Wikimedia Commons"},
  { scientific: "Albizia julibrissin", common: "Silktree", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "crossTimbers", "texasBlacklandPrairies"], image: "Invasive/albizia-julibrissin.jpg", text: "Luis Fernández García, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"},
  { scientific: "Arundo donax", common: "Giant Reed", ecoregions: ["chihuahuanDeserts", "edwardsPlateau", "southernTexasPlains", "westernGulfCoastalPlain", "texasBlacklandPrairies"], image: "Invasive/arundo-donax.jpg", text: "Juan Carlos Fonseca Mata, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"},
  { scientific: "Bothriochloa ischaemum var. songarica", common: "Yellow Bluestem", ecoregions: ["southwesternTablelands", "highPlains", "centralGreatPlains", "crossTimbers", "edwardsPlateau", "southernTexasPlains", "texasBlacklandPrairies"], image: "Invasive/bothriochloa-ischaemum.jpg", text: "Stefan.lefnaer, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"},
  { scientific: "Broussonetia papyrifera", common: "Paper Mulberry", ecoregions: ["eastCentralTexasPlains", "texasBlacklandPrairies", "crossTimbers"], image: "Invasive/broussonetia-papyrifera.jpg", text: "Zeynel Cebeci, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"},
  { scientific: "Carduus nutans", common: "Nodding Plumeless Thistle", ecoregions: ["southwesternTablelands", "highPlains", "centralGreatPlains", "arizonaNewMexicoMountains"], image: "Invasive/carduus-nutans.jpg", text: "Muséum de Toulouse, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"},
  { scientific: "Cortaderia selloana", common: "Pampas Grass", ecoregions: ["westernGulfCoastalPlain", "southernTexasPlains", "texasBlacklandPrairies"], image: "Invasive/cortaderia-selloana.jpg", text: "Julien Lepage, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons"},
  { scientific: "Eichhornia crassipes", common: "Common Water Hyacinth", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains", "southernTexasPlains"], image: "Invasive/eichhornia-crassipes.jpg", text: "Juan Carlos Fonseca Mata, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"},
  { scientific: "Gleditsia triacanthos", common: "Honeylocust", ecoregions: ["crossTimbers", "texasBlacklandPrairies", "centralGreatPlains", "eastCentralTexasPlains"], image: "Invasive/gleditsia-triacanthos.jpg", text: "Hannes wilms, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"},
  { scientific: "Hedera helix", common: "English Ivy", ecoregions: ["southCentralPlains", "eastCentralTexasPlains", "texasBlacklandPrairies", "crossTimbers"], image: "Invasive/hedera-helix.jpg", text: "Michel Langeveld, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Hydrilla verticillata", common: "Waterthyme", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains", "texasBlacklandPrairies"], image: "Invasive/hydrilla-verticillata.jpg", text: "Alex Abair, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons"},
  { scientific: "Imperata cylindrica", common: "Cogongrass", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains"], image: "Invasive/imperata-cylindrica.jpg", text: "GearedBull at English Wikipedia, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons" },
  { scientific: "Juniperus virginiana", common: "Eastern Redcedar", ecoregions: ["crossTimbers", "centralGreatPlains", "texasBlacklandPrairies", "edwardsPlateau"], image: "Invasive/juniperus-virginiana.jpg", text: "Humoyun Mehridinov, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Kummerowia striata", common: "Japanese Clover", ecoregions: ["southCentralPlains", "eastCentralTexasPlains", "westernGulfCoastalPlain"], image: "Invasive/kummerowia-striata.jpg", text: "Douglas Goldman, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Lespedeza bicolor", common: "Shrub Lespedeza", ecoregions: ["southCentralPlains", "eastCentralTexasPlains"], image: "Invasive/lespedeza-bicolor.jpg", text: "yamatsu, CC0, via Wikimedia Commons"},
  { scientific: "Lespedeza cuneata", common: "Sericea Lespedeza", ecoregions: ["southCentralPlains", "crossTimbers", "centralGreatPlains", "eastCentralTexasPlains", "texasBlacklandPrairies"], image: "Invasive/lespedeza-cuneata.jpg", text: "Dalgial, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Ligustrum sinense", common: "Chinese Privet", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "crossTimbers", "texasBlacklandPrairies", "edwardsPlateau"], image: "Invasive/ligustrum-sinense.jpg", text: "Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Lonicera japonica", common: "Japanese Honeysuckle", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "crossTimbers", "texasBlacklandPrairies", "edwardsPlateau", "centralGreatPlains"], image: "Invasive/lonicera-japonica.jpg", text: "George E. Koronaios, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons" },
  { scientific: "Lygodium japonicum", common: "Japanese Climbing Fern", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains"], image: "Invasive/lygodium-japonicum.jpg", text: "Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"},
  { scientific: "Manihot grahamii", common: "Graham's Manihot", ecoregions: ["southernTexasPlains", "westernGulfCoastalPlain"], image: "Invasive/manihot-grahamii.jpg", text: "Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Melia azedarach", common: "Chinaberrytree", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "crossTimbers", "texasBlacklandPrairies", "edwardsPlateau", "southernTexasPlains"], image: "Invasive/melia-azedarach.jpg", text: "Obsidian Soul, CC0, via Wikimedia Commons" },
  { scientific: "Myriophyllum spicatum", common: "Eurasian Watermilfoil", ecoregions: ["westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies"], image: "Invasive/myriophyllum-spicatum.png", text: "USGS Science for a Chnaging World, Public domain, via Wikimedia Commons" },
  { scientific: "Nandina domestica", common: "Sacred Bamboo", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "crossTimbers", "texasBlacklandPrairies"], image: "Invasive/nandina-domestica.jpg", text: "Gmihail at Serbian Wikipedia, CC BY-SA 3.0 RS <https://creativecommons.org/licenses/by-sa/3.0/rs/deed.en>, via Wikimedia Commons" },
  { scientific: "Paspalum dilatatum", common: "Dallisgrass", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains", "texasBlacklandPrairies", "southernTexasPlains"], image: "Invasive/paspalum-dilatatum.jpg", text: "Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Paspalum notatum", common: "Bahiagrass", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains"], image: "Invasive/paspalum-notatum.jpg", text: "Harry Rose from South West Rocks, Australia, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons" },
  { scientific: "Paspalum urvillei", common: "Vasey's Grass", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains", "southernTexasPlains"], image: "Invasive/paspalum-urvillei.jpg", text: "Keisotyo, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons" },
  { scientific: "Paulownia tomentosa", common: "Princesstree", ecoregions: ["eastCentralTexasPlains", "texasBlacklandPrairies", "crossTimbers"], image: "Invasive/paulownia-tomentosa.jpg", text: "Peter Chadzidocev, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Phragmites australis", common: "Common Reed", ecoregions: ["chihuahuanDeserts", "westernGulfCoastalPlain", "southernTexasPlains", "edwardsPlateau"], image: "Invasive/phragmites-australis.jpg", text: "Le.Loup.Gris, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons" },
  { scientific: "Phyllanthus urinaria", common: "Chamber Bitter", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains"], image: "Invasive/phyllanthus-urinaria.jpg", text: "lienyuan lee, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons" },
  { scientific: "Phyllostachys aurea", common: "Golden Bamboo", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies"], image: "Invasive/phyllostachys-aurea.jpg", text: "M108t, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons" },
  { scientific: "Poncirus trifoliata", common: "Hardy Orange", ecoregions: ["southCentralPlains", "eastCentralTexasPlains"], image: "Invasive/poncirus-trifoliata.jpg", text: "Daderot, CC0, via Wikimedia Commons" },
  { scientific: "Pueraria montana", common: "Kudzu", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies"], image: "Invasive/pueraria-montana.jpg", text: "あおもりくま, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Robinia pseudoacacia", common: "Black Locust", ecoregions: ["arizonaNewMexicoMountains", "crossTimbers", "centralGreatPlains", "edwardsPlateau"], image: "Invasive/robinia-pseudoacacia.jpg", text: "Ввласенко, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons" },
  { scientific: "Rosa bracteata", common: "Macartney Rose", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies", "southernTexasPlains"], image: "Invasive/rosa-bracteata.jpg", text: "Auckland Museum, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons" },
  { scientific: "Rosa multiflora", common: "Multiflora Rose", ecoregions: ["crossTimbers", "centralGreatPlains", "texasBlacklandPrairies", "eastCentralTexasPlains"], image: "Invasive/rosa-multiflora.jpg", text: "Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Salvinia molesta", common: "Giant Salvinia", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains"], image: "Invasive/salvinia-molesta.jpg", text: "Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Solanum viarum", common: "Tropical Soda Apple", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains"], image: "Invasive/solanum-viarum.jpg", text: "Vinayaraj, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Sorghum halepense", common: "Johnsongrass", ecoregions: ["chihuahuanDeserts", "southwesternTablelands", "highPlains", "centralGreatPlains", "crossTimbers", "edwardsPlateau", "southernTexasPlains", "texasBlacklandPrairies", "eastCentralTexasPlains", "westernGulfCoastalPlain", "southCentralPlains"], image: "Invasive/sorghum-halepense.jpg", text: "Jim Conrad, Public domain, via Wikimedia Commons" },
  { scientific: "Tamarix ramosissima", common: "Saltcedar", ecoregions: ["chihuahuanDeserts", "southwesternTablelands", "highPlains", "southernTexasPlains", "edwardsPlateau", "arizonaNewMexicoMountains"], image: "Invasive/tamarix-ramosissima.jpg", text: "Jerzy Opioła, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons" },
  { scientific: "Triadica sebifera", common: "Chinese Tallow", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies", "southernTexasPlains"], image: "Invasive/triadica-sebifera.jpg", text: "sgharvey@ymail.com, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons" },
  { scientific: "Vernicia fordii", common: "Tungoil Tree", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain"], image: "Invasive/vernicia-fordii.jpg", text: "I, KENPEI, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons" },
  { scientific: "Vicia minutiflora", common: "Pygmyflower Vetch", ecoregions: ["southCentralPlains", "eastCentralTexasPlains"], image: "Invasive/vicia-minutiflora.jpg", text: "Mason Brock (Masebrock), Public domain, via Wikimedia Commons" },
  { scientific: "Vinca major", common: "Bigleaf Periwinkle", ecoregions: ["eastCentralTexasPlains", "texasBlacklandPrairies", "crossTimbers"], image: "Invasive/vinca-major.jpg", text: "Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" },
  { scientific: "Wisteria sinensis", common: "Chinese Wisteria", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies"], image: "Invasive/wisteria-sinensis.jpg", text: "Krzysztof Golik, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" }
];

// Spanish translations for common names
const spanishCommonNames = {
  "Ailanthus altissima": "Árbol del Cielo",
  "Albizia julibrissin": "Árbol de Seda",
  "Arundo donax": "Caña Gigante",
  "Bothriochloa ischaemum var. songarica": "Pasto Azul Amarillo",
  "Broussonetia papyrifera": "Morera de Papel",
  "Carduus nutans": "Cardo Cabeceo",
  "Cortaderia selloana": "Hierba de la Pampa",
  "Eichhornia crassipes": "Jacinto de Agua Común",
  "Gleditsia triacanthos": "Acacia de Tres Espinas",
  "Hedera helix": "Hiedra Inglesa",
  "Hydrilla verticillata": "Hidrila",
  "Imperata cylindrica": "Cogón",
  "Juniperus virginiana": "Cedro Rojo del Este",
  "Kummerowia striata": "Trébol Japonés",
  "Lespedeza bicolor": "Lespedeza Arbustiva",
  "Lespedeza cuneata": "Lespedeza China",
  "Ligustrum sinense": "Aligustre Chino",
  "Lonicera japonica": "Madreselva Japonesa",
  "Lygodium japonicum": "Helecho Trepador Japonés",
  "Magnolia grandiflora": "Magnolia del Sur",
  "Manihot grahamii": "Manihot de Graham",
  "Melia azedarach": "Árbol del Paraíso",
  "Myriophyllum spicatum": "Milenrama Acuática Euroasiática",
  "Nandina domestica": "Bambú Sagrado",
  "Paspalum dilatatum": "Pasto Miel",
  "Paspalum notatum": "Pasto Bahía",
  "Paspalum urvillei": "Pasto de Vasey",
  "Paulownia tomentosa": "Árbol Princesa",
  "Phragmites australis": "Carrizo Común",
  "Phyllanthus urinaria": "Hierba Amarga",
  "Phyllostachys aurea": "Bambú Dorado",
  "Poncirus trifoliata": "Naranjo Trifoliado",
  "Pueraria montana": "Kudzu",
  "Robinia pseudoacacia": "Falsa Acacia",
  "Rosa bracteata": "Rosa de Macartney",
  "Rosa multiflora": "Rosa Multiflora",
  "Salvinia molesta": "Salvinia Gigante",
  "Solanum viarum": "Manzana de Sodoma Tropical",
  "Sorghum halepense": "Pasto Johnson",
  "Tamarix ramosissima": "Tamarisco",
  "Triadica sebifera": "Árbol de Sebo Chino",
  "Vernicia fordii": "Árbol del Tung",
  "Vicia minutiflora": "Veza de Flor Pequeña",
  "Vinca major": "Vincapervinca Mayor",
  "Wisteria sinensis": "Glicina China"
};

// Ecoregion display names (English)
const ecoregionNames = {
  chihuahuanDeserts: "Chihuahuan Deserts",
  southwesternTablelands: "Southwestern Tablelands",
  highPlains: "High Plains",
  centralGreatPlains: "Central Great Plains",
  crossTimbers: "Cross Timbers",
  edwardsPlateau: "Edwards Plateau",
  southernTexasPlains: "Southern Texas Plains",
  texasBlacklandPrairies: "Texas Blackland Prairies",
  eastCentralTexasPlains: "East Central Texas Plains",
  westernGulfCoastalPlain: "Western Gulf Coastal Plain",
  southCentralPlains: "South Central Plains",
  arizonaNewMexicoMountains: "Arizona/New Mexico Mountains"
};

// Ecoregion display names (Spanish)
const ecoregionNamesSpa = {
  chihuahuanDeserts: "Desiertos de Chihuahua",
  southwesternTablelands: "Mesetas del Suroeste",
  highPlains: "Grandes Llanuras",
  centralGreatPlains: "Grandes Llanuras Centrales",
  crossTimbers: "Bosques Cruzados",
  edwardsPlateau: "Meseta de Edwards",
  southernTexasPlains: "Llanuras del Sur de Texas",
  texasBlacklandPrairies: "Praderas de Tierra Negra de Texas",
  eastCentralTexasPlains: "Llanuras del Centro Este de Texas",
  westernGulfCoastalPlain: "Llanura Costera del Golfo Occidental",
  southCentralPlains: "Llanuras del Centro Sur",
  arizonaNewMexicoMountains: "Montañas de Arizona/Nuevo México"
};

// Get species for a specific ecoregion
function getSpeciesForEcoregion(ecoregionId) {
  return invasiveSpeciesData.filter(species =>
    species.ecoregions.includes(ecoregionId)
  );
}
