const pokemon = [
  {
    idx: "001",
    name: "Bulbasaur",
    slug: "bulbasaur",
  },
  {
    idx: "002",
    name: "Ivysaur",
    slug: "ivysaur",
  },
  {
    idx: "003",
    name: "Venusaur",
    slug: "venusaur",
  },
  {
    idx: "004",
    name: "Charmander",
    slug: "charmander",
  },
  {
    idx: "005",
    name: "Charmeleon",
    slug: "charmeleon",
  },
  {
    idx: "006",
    name: "Charizard",
    slug: "charizard",
  },
  {
    idx: "007",
    name: "Squirtle",
    slug: "squirtle",
  },
  {
    idx: "008",
    name: "Wartortle",
    slug: "wartortle",
  },
  {
    idx: "009",
    name: "Blastoise",
    slug: "blastoise",
  },
  {
    idx: "010",
    name: "Caterpie",
    slug: "caterpie",
  },
  {
    idx: "011",
    name: "Metapod",
    slug: "metapod",
  },
  {
    idx: "012",
    name: "Butterfree",
    slug: "butterfree",
  },
  {
    idx: "013",
    name: "Weedle",
    slug: "weedle",
  },
  {
    idx: "014",
    name: "Kakuna",
    slug: "kakuna",
  },
  {
    idx: "015",
    name: "Beedrill",
    slug: "beedrill",
  },
  {
    idx: "016",
    name: "Pidgey",
    slug: "pidgey",
  },
  {
    idx: "017",
    name: "Pidgeotto",
    slug: "pidgeotto",
  },
  {
    idx: "018",
    name: "Pidgeot",
    slug: "pidgeot",
  },
  {
    idx: "019",
    name: "Rattata",
    slug: "rattata",
  },
  {
    idx: "020",
    name: "Raticate",
    slug: "raticate",
  },
  {
    idx: "021",
    name: "Spearow",
    slug: "spearow",
  },
  {
    idx: "022",
    name: "Fearow",
    slug: "fearow",
  },
  {
    idx: "023",
    name: "Ekans",
    slug: "ekans",
  },
  {
    idx: "024",
    name: "Arbok",
    slug: "arbok",
  },
  {
    idx: "025",
    name: "Pikachu",
    slug: "pikachu",
  },
  {
    idx: "026",
    name: "Raichu",
    slug: "raichu",
  },
  {
    idx: "027",
    name: "Sandshrew",
    slug: "sandshrew",
  },
  {
    idx: "028",
    name: "Sandslash",
    slug: "sandslash",
  },
  {
    idx: "029",
    name: "Nidoran♀",
    slug: "nidoran-f",
  },
  {
    idx: "030",
    name: "Nidorina",
    slug: "nidorina",
  },
  {
    idx: "031",
    name: "Nidoqueen",
    slug: "nidoqueen",
  },
  {
    idx: "032",
    name: "Nidoran♂",
    slug: "nidoran-m",
  },
  {
    idx: "033",
    name: "Nidorino",
    slug: "nidorino",
  },
  {
    idx: "034",
    name: "Nidoking",
    slug: "nidoking",
  },
  {
    idx: "035",
    name: "Clefairy",
    slug: "clefairy",
  },
  {
    idx: "036",
    name: "Clefable",
    slug: "clefable",
  },
  {
    idx: "037",
    name: "Vulpix",
    slug: "vulpix",
  },
  {
    idx: "038",
    name: "Ninetales",
    slug: "ninetales",
  },
  {
    idx: "039",
    name: "Jigglypuff",
    slug: "jigglypuff",
  },
  {
    idx: "040",
    name: "Wigglytuff",
    slug: "wigglytuff",
  },
  {
    idx: "041",
    name: "Zubat",
    slug: "zubat",
  },
  {
    idx: "042",
    name: "Golbat",
    slug: "golbat",
  },
  {
    idx: "043",
    name: "Oddish",
    slug: "oddish",
  },
  {
    idx: "044",
    name: "Gloom",
    slug: "gloom",
  },
  {
    idx: "045",
    name: "Vileplume",
    slug: "vileplume",
  },
  {
    idx: "046",
    name: "Paras",
    slug: "paras",
  },
  {
    idx: "047",
    name: "Parasect",
    slug: "parasect",
  },
  {
    idx: "048",
    name: "Venonat",
    slug: "venonat",
  },
  {
    idx: "049",
    name: "Venomoth",
    slug: "venomoth",
  },
  {
    idx: "050",
    name: "Diglett",
    slug: "diglett",
  },
  {
    idx: "051",
    name: "Dugtrio",
    slug: "dugtrio",
  },
  {
    idx: "052",
    name: "Meowth",
    slug: "meowth",
  },
  {
    idx: "053",
    name: "Persian",
    slug: "persian",
  },
  {
    idx: "054",
    name: "Psyduck",
    slug: "psyduck",
  },
  {
    idx: "055",
    name: "Golduck",
    slug: "golduck",
  },
  {
    idx: "056",
    name: "Mankey",
    slug: "mankey",
  },
  {
    idx: "057",
    name: "Primeape",
    slug: "primeape",
  },
  {
    idx: "058",
    name: "Growlithe",
    slug: "growlithe",
  },
  {
    idx: "059",
    name: "Arcanine",
    slug: "arcanine",
  },
  {
    idx: "060",
    name: "Poliwag",
    slug: "poliwag",
  },
  {
    idx: "061",
    name: "Poliwhirl",
    slug: "poliwhirl",
  },
  {
    idx: "062",
    name: "Poliwrath",
    slug: "poliwrath",
  },
  {
    idx: "063",
    name: "Abra",
    slug: "abra",
  },
  {
    idx: "064",
    name: "Kadabra",
    slug: "kadabra",
  },
  {
    idx: "065",
    name: "Alakazam",
    slug: "alakazam",
  },
  {
    idx: "066",
    name: "Machop",
    slug: "machop",
  },
  {
    idx: "067",
    name: "Machoke",
    slug: "machoke",
  },
  {
    idx: "068",
    name: "Machamp",
    slug: "machamp",
  },
  {
    idx: "069",
    name: "Bellsprout",
    slug: "bellsprout",
  },
  {
    idx: "070",
    name: "Weepinbell",
    slug: "weepinbell",
  },
  {
    idx: "071",
    name: "Victreebel",
    slug: "victreebel",
  },
  {
    idx: "072",
    name: "Tentacool",
    slug: "tentacool",
  },
  {
    idx: "073",
    name: "Tentacruel",
    slug: "tentacruel",
  },
  {
    idx: "074",
    name: "Geodude",
    slug: "geodude",
  },
  {
    idx: "075",
    name: "Graveler",
    slug: "graveler",
  },
  {
    idx: "076",
    name: "Golem",
    slug: "golem",
  },
  {
    idx: "077",
    name: "Ponyta",
    slug: "ponyta",
  },
  {
    idx: "078",
    name: "Rapidash",
    slug: "rapidash",
  },
  {
    idx: "079",
    name: "Slowpoke",
    slug: "slowpoke",
  },
  {
    idx: "080",
    name: "Slowbro",
    slug: "slowbro",
  },
  {
    idx: "081",
    name: "Magnemite",
    slug: "magnemite",
  },
  {
    idx: "082",
    name: "Magneton",
    slug: "magneton",
  },
  {
    idx: "083",
    name: "Farfetch'd",
    slug: "farfetchd",
  },
  {
    idx: "084",
    name: "Doduo",
    slug: "doduo",
  },
  {
    idx: "085",
    name: "Dodrio",
    slug: "dodrio",
  },
  {
    idx: "086",
    name: "Seel",
    slug: "seel",
  },
  {
    idx: "087",
    name: "Dewgong",
    slug: "dewgong",
  },
  {
    idx: "088",
    name: "Grimer",
    slug: "grimer",
  },
  {
    idx: "089",
    name: "Muk",
    slug: "muk",
  },
  {
    idx: "090",
    name: "Shellder",
    slug: "shellder",
  },
  {
    idx: "091",
    name: "Cloyster",
    slug: "cloyster",
  },
  {
    idx: "092",
    name: "Gastly",
    slug: "gastly",
  },
  {
    idx: "093",
    name: "Haunter",
    slug: "haunter",
  },
  {
    idx: "094",
    name: "Gengar",
    slug: "gengar",
  },
  {
    idx: "095",
    name: "Onix",
    slug: "onix",
  },
  {
    idx: "096",
    name: "Drowzee",
    slug: "drowzee",
  },
  {
    idx: "097",
    name: "Hypno",
    slug: "hypno",
  },
  {
    idx: "098",
    name: "Krabby",
    slug: "krabby",
  },
  {
    idx: "099",
    name: "Kingler",
    slug: "kingler",
  },
  {
    idx: "100",
    name: "Voltorb",
    slug: "voltorb",
  },
  {
    idx: "101",
    name: "Electrode",
    slug: "electrode",
  },
  {
    idx: "102",
    name: "Exeggcute",
    slug: "exeggcute",
  },
  {
    idx: "103",
    name: "Exeggutor",
    slug: "exeggutor",
  },
  {
    idx: "104",
    name: "Cubone",
    slug: "cubone",
  },
  {
    idx: "105",
    name: "Marowak",
    slug: "marowak",
  },
  {
    idx: "106",
    name: "Hitmonlee",
    slug: "hitmonlee",
  },
  {
    idx: "107",
    name: "Hitmonchan",
    slug: "hitmonchan",
  },
  {
    idx: "108",
    name: "Lickitung",
    slug: "lickitung",
  },
  {
    idx: "109",
    name: "Koffing",
    slug: "koffing",
  },
  {
    idx: "110",
    name: "Weezing",
    slug: "weezing",
  },
  {
    idx: "111",
    name: "Rhyhorn",
    slug: "rhyhorn",
  },
  {
    idx: "112",
    name: "Rhydon",
    slug: "rhydon",
  },
  {
    idx: "113",
    name: "Chansey",
    slug: "chansey",
  },
  {
    idx: "114",
    name: "Tangela",
    slug: "tangela",
  },
  {
    idx: "115",
    name: "Kangaskhan",
    slug: "kangaskhan",
  },
  {
    idx: "116",
    name: "Horsea",
    slug: "horsea",
  },
  {
    idx: "117",
    name: "Seadra",
    slug: "seadra",
  },
  {
    idx: "118",
    name: "Goldeen",
    slug: "goldeen",
  },
  {
    idx: "119",
    name: "Seaking",
    slug: "seaking",
  },
  {
    idx: "120",
    name: "Staryu",
    slug: "staryu",
  },
  {
    idx: "121",
    name: "Starmie",
    slug: "starmie",
  },
  {
    idx: "122",
    name: "Mr. Mime",
    slug: "mr-mime",
  },
  {
    idx: "123",
    name: "Scyther",
    slug: "scyther",
  },
  {
    idx: "124",
    name: "Jynx",
    slug: "jynx",
  },
  {
    idx: "125",
    name: "Electabuzz",
    slug: "electabuzz",
  },
  {
    idx: "126",
    name: "Magmar",
    slug: "magmar",
  },
  {
    idx: "127",
    name: "Pinsir",
    slug: "pinsir",
  },
  {
    idx: "128",
    name: "Tauros",
    slug: "tauros",
  },
  {
    idx: "129",
    name: "Magikarp",
    slug: "magikarp",
  },
  {
    idx: "130",
    name: "Gyarados",
    slug: "gyarados",
  },
  {
    idx: "131",
    name: "Lapras",
    slug: "lapras",
  },
  {
    idx: "132",
    name: "Ditto",
    slug: "ditto",
  },
  {
    idx: "133",
    name: "Eevee",
    slug: "eevee",
  },
  {
    idx: "134",
    name: "Vaporeon",
    slug: "vaporeon",
  },
  {
    idx: "135",
    name: "Jolteon",
    slug: "jolteon",
  },
  {
    idx: "136",
    name: "Flareon",
    slug: "flareon",
  },
  {
    idx: "137",
    name: "Porygon",
    slug: "porygon",
  },
  {
    idx: "138",
    name: "Omanyte",
    slug: "omanyte",
  },
  {
    idx: "139",
    name: "Omastar",
    slug: "omastar",
  },
  {
    idx: "140",
    name: "Kabuto",
    slug: "kabuto",
  },
  {
    idx: "141",
    name: "Kabutops",
    slug: "kabutops",
  },
  {
    idx: "142",
    name: "Aerodactyl",
    slug: "aerodactyl",
  },
  {
    idx: "143",
    name: "Snorlax",
    slug: "snorlax",
  },
  {
    idx: "144",
    name: "Articuno",
    slug: "articuno",
  },
  {
    idx: "145",
    name: "Zapdos",
    slug: "zapdos",
  },
  {
    idx: "146",
    name: "Moltres",
    slug: "moltres",
  },
  {
    idx: "147",
    name: "Dratini",
    slug: "dratini",
  },
  {
    idx: "148",
    name: "Dragonair",
    slug: "dragonair",
  },
  {
    idx: "149",
    name: "Dragonite",
    slug: "dragonite",
  },
  {
    idx: "150",
    name: "Mewtwo",
    slug: "mewtwo",
  },
  {
    idx: "151",
    name: "Mew",
    slug: "mew",
  },
  {
    idx: "152",
    name: "Chikorita",
    slug: "chikorita",
  },
  {
    idx: "153",
    name: "Bayleef",
    slug: "bayleef",
  },
  {
    idx: "154",
    name: "Meganium",
    slug: "meganium",
  },
  {
    idx: "155",
    name: "Cyndaquil",
    slug: "cyndaquil",
  },
  {
    idx: "156",
    name: "Quilava",
    slug: "quilava",
  },
  {
    idx: "157",
    name: "Typhlosion",
    slug: "typhlosion",
  },
  {
    idx: "158",
    name: "Totodile",
    slug: "totodile",
  },
  {
    idx: "159",
    name: "Croconaw",
    slug: "croconaw",
  },
  {
    idx: "160",
    name: "Feraligatr",
    slug: "feraligatr",
  },
  {
    idx: "161",
    name: "Sentret",
    slug: "sentret",
  },
  {
    idx: "162",
    name: "Furret",
    slug: "furret",
  },
  {
    idx: "163",
    name: "Hoothoot",
    slug: "hoothoot",
  },
  {
    idx: "164",
    name: "Noctowl",
    slug: "noctowl",
  },
  {
    idx: "165",
    name: "Ledyba",
    slug: "ledyba",
  },
  {
    idx: "166",
    name: "Ledian",
    slug: "ledian",
  },
  {
    idx: "167",
    name: "Spinarak",
    slug: "spinarak",
  },
  {
    idx: "168",
    name: "Ariados",
    slug: "ariados",
  },
  {
    idx: "169",
    name: "Crobat",
    slug: "crobat",
  },
  {
    idx: "170",
    name: "Chinchou",
    slug: "chinchou",
  },
  {
    idx: "171",
    name: "Lanturn",
    slug: "lanturn",
  },
  {
    idx: "172",
    name: "Pichu",
    slug: "pichu",
  },
  {
    idx: "173",
    name: "Cleffa",
    slug: "cleffa",
  },
  {
    idx: "174",
    name: "Igglybuff",
    slug: "igglybuff",
  },
  {
    idx: "175",
    name: "Togepi",
    slug: "togepi",
  },
  {
    idx: "176",
    name: "Togetic",
    slug: "togetic",
  },
  {
    idx: "177",
    name: "Natu",
    slug: "natu",
  },
  {
    idx: "178",
    name: "Xatu",
    slug: "xatu",
  },
  {
    idx: "179",
    name: "Mareep",
    slug: "mareep",
  },
  {
    idx: "180",
    name: "Flaaffy",
    slug: "flaaffy",
  },
  {
    idx: "181",
    name: "Ampharos",
    slug: "ampharos",
  },
  {
    idx: "182",
    name: "Bellossom",
    slug: "bellossom",
  },
  {
    idx: "183",
    name: "Marill",
    slug: "marill",
  },
  {
    idx: "184",
    name: "Azumarill",
    slug: "azumarill",
  },
  {
    idx: "185",
    name: "Sudowoodo",
    slug: "sudowoodo",
  },
  {
    idx: "186",
    name: "Politoed",
    slug: "politoed",
  },
  {
    idx: "187",
    name: "Hoppip",
    slug: "hoppip",
  },
  {
    idx: "188",
    name: "Skiploom",
    slug: "skiploom",
  },
  {
    idx: "189",
    name: "Jumpluff",
    slug: "jumpluff",
  },
  {
    idx: "190",
    name: "Aipom",
    slug: "aipom",
  },
  {
    idx: "191",
    name: "Sunkern",
    slug: "sunkern",
  },
  {
    idx: "192",
    name: "Sunflora",
    slug: "sunflora",
  },
  {
    idx: "193",
    name: "Yanma",
    slug: "yanma",
  },
  {
    idx: "194",
    name: "Wooper",
    slug: "wooper",
  },
  {
    idx: "195",
    name: "Quagsire",
    slug: "quagsire",
  },
  {
    idx: "196",
    name: "Espeon",
    slug: "espeon",
  },
  {
    idx: "197",
    name: "Umbreon",
    slug: "umbreon",
  },
  {
    idx: "198",
    name: "Murkrow",
    slug: "murkrow",
  },
  {
    idx: "199",
    name: "Slowking",
    slug: "slowking",
  },
  {
    idx: "200",
    name: "Misdreavus",
    slug: "misdreavus",
  },
  {
    idx: "201",
    name: "Unown",
    slug: "unown",
  },
  {
    idx: "202",
    name: "Wobbuffet",
    slug: "wobbuffet",
  },
  {
    idx: "203",
    name: "Girafarig",
    slug: "girafarig",
  },
  {
    idx: "204",
    name: "Pineco",
    slug: "pineco",
  },
  {
    idx: "205",
    name: "Forretress",
    slug: "forretress",
  },
  {
    idx: "206",
    name: "Dunsparce",
    slug: "dunsparce",
  },
  {
    idx: "207",
    name: "Gligar",
    slug: "gligar",
  },
  {
    idx: "208",
    name: "Steelix",
    slug: "steelix",
  },
  {
    idx: "209",
    name: "Snubbull",
    slug: "snubbull",
  },
  {
    idx: "210",
    name: "Granbull",
    slug: "granbull",
  },
  {
    idx: "211",
    name: "Qwilfish",
    slug: "qwilfish",
  },
  {
    idx: "212",
    name: "Scizor",
    slug: "scizor",
  },
  {
    idx: "213",
    name: "Shuckle",
    slug: "shuckle",
  },
  {
    idx: "214",
    name: "Heracross",
    slug: "heracross",
  },
  {
    idx: "215",
    name: "Sneasel",
    slug: "sneasel",
  },
  {
    idx: "216",
    name: "Teddiursa",
    slug: "teddiursa",
  },
  {
    idx: "217",
    name: "Ursaring",
    slug: "ursaring",
  },
  {
    idx: "218",
    name: "Slugma",
    slug: "slugma",
  },
  {
    idx: "219",
    name: "Magcargo",
    slug: "magcargo",
  },
  {
    idx: "220",
    name: "Swinub",
    slug: "swinub",
  },
  {
    idx: "221",
    name: "Piloswine",
    slug: "piloswine",
  },
  {
    idx: "222",
    name: "Corsola",
    slug: "corsola",
  },
  {
    idx: "223",
    name: "Remoraid",
    slug: "remoraid",
  },
  {
    idx: "224",
    name: "Octillery",
    slug: "octillery",
  },
  {
    idx: "225",
    name: "Delibird",
    slug: "delibird",
  },
  {
    idx: "226",
    name: "Mantine",
    slug: "mantine",
  },
  {
    idx: "227",
    name: "Skarmory",
    slug: "skarmory",
  },
  {
    idx: "228",
    name: "Houndour",
    slug: "houndour",
  },
  {
    idx: "229",
    name: "Houndoom",
    slug: "houndoom",
  },
  {
    idx: "230",
    name: "Kingdra",
    slug: "kingdra",
  },
  {
    idx: "231",
    name: "Phanpy",
    slug: "phanpy",
  },
  {
    idx: "232",
    name: "Donphan",
    slug: "donphan",
  },
  {
    idx: "233",
    name: "Porygon2",
    slug: "porygon2",
  },
  {
    idx: "234",
    name: "Stantler",
    slug: "stantler",
  },
  {
    idx: "235",
    name: "Smeargle",
    slug: "smeargle",
  },
  {
    idx: "236",
    name: "Tyrogue",
    slug: "tyrogue",
  },
  {
    idx: "237",
    name: "Hitmontop",
    slug: "hitmontop",
  },
  {
    idx: "238",
    name: "Smoochum",
    slug: "smoochum",
  },
  {
    idx: "239",
    name: "Elekid",
    slug: "elekid",
  },
  {
    idx: "240",
    name: "Magby",
    slug: "magby",
  },
  {
    idx: "241",
    name: "Miltank",
    slug: "miltank",
  },
  {
    idx: "242",
    name: "Blissey",
    slug: "blissey",
  },
  {
    idx: "243",
    name: "Raikou",
    slug: "raikou",
  },
  {
    idx: "244",
    name: "Entei",
    slug: "entei",
  },
  {
    idx: "245",
    name: "Suicune",
    slug: "suicune",
  },
  {
    idx: "246",
    name: "Larvitar",
    slug: "larvitar",
  },
  {
    idx: "247",
    name: "Pupitar",
    slug: "pupitar",
  },
  {
    idx: "248",
    name: "Tyranitar",
    slug: "tyranitar",
  },
  {
    idx: "249",
    name: "Lugia",
    slug: "lugia",
  },
  {
    idx: "250",
    name: "Ho-Oh",
    slug: "ho-oh",
  },
  {
    idx: "251",
    name: "Celebi",
    slug: "celebi",
  },
  {
    idx: "252",
    name: "Treecko",
    slug: "treecko",
  },
  {
    idx: "253",
    name: "Grovyle",
    slug: "grovyle",
  },
  {
    idx: "254",
    name: "Sceptile",
    slug: "sceptile",
  },
  {
    idx: "255",
    name: "Torchic",
    slug: "torchic",
  },
  {
    idx: "256",
    name: "Combusken",
    slug: "combusken",
  },
  {
    idx: "257",
    name: "Blaziken",
    slug: "blaziken",
  },
  {
    idx: "258",
    name: "Mudkip",
    slug: "mudkip",
  },
  {
    idx: "259",
    name: "Marshtomp",
    slug: "marshtomp",
  },
  {
    idx: "260",
    name: "Swampert",
    slug: "swampert",
  },
  {
    idx: "261",
    name: "Poochyena",
    slug: "poochyena",
  },
  {
    idx: "262",
    name: "Mightyena",
    slug: "mightyena",
  },
  {
    idx: "263",
    name: "Zigzagoon",
    slug: "zigzagoon",
  },
  {
    idx: "264",
    name: "Linoone",
    slug: "linoone",
  },
  {
    idx: "265",
    name: "Wurmple",
    slug: "wurmple",
  },
  {
    idx: "266",
    name: "Silcoon",
    slug: "silcoon",
  },
  {
    idx: "267",
    name: "Beautifly",
    slug: "beautifly",
  },
  {
    idx: "268",
    name: "Cascoon",
    slug: "cascoon",
  },
  {
    idx: "269",
    name: "Dustox",
    slug: "dustox",
  },
  {
    idx: "270",
    name: "Lotad",
    slug: "lotad",
  },
  {
    idx: "271",
    name: "Lombre",
    slug: "lombre",
  },
  {
    idx: "272",
    name: "Ludicolo",
    slug: "ludicolo",
  },
  {
    idx: "273",
    name: "Seedot",
    slug: "seedot",
  },
  {
    idx: "274",
    name: "Nuzleaf",
    slug: "nuzleaf",
  },
  {
    idx: "275",
    name: "Shiftry",
    slug: "shiftry",
  },
  {
    idx: "276",
    name: "Taillow",
    slug: "taillow",
  },
  {
    idx: "277",
    name: "Swellow",
    slug: "swellow",
  },
  {
    idx: "278",
    name: "Wingull",
    slug: "wingull",
  },
  {
    idx: "279",
    name: "Pelipper",
    slug: "pelipper",
  },
  {
    idx: "280",
    name: "Ralts",
    slug: "ralts",
  },
  {
    idx: "281",
    name: "Kirlia",
    slug: "kirlia",
  },
  {
    idx: "282",
    name: "Gardevoir",
    slug: "gardevoir",
  },
  {
    idx: "283",
    name: "Surskit",
    slug: "surskit",
  },
  {
    idx: "284",
    name: "Masquerain",
    slug: "masquerain",
  },
  {
    idx: "285",
    name: "Shroomish",
    slug: "shroomish",
  },
  {
    idx: "286",
    name: "Breloom",
    slug: "breloom",
  },
  {
    idx: "287",
    name: "Slakoth",
    slug: "slakoth",
  },
  {
    idx: "288",
    name: "Vigoroth",
    slug: "vigoroth",
  },
  {
    idx: "289",
    name: "Slaking",
    slug: "slaking",
  },
  {
    idx: "290",
    name: "Nincada",
    slug: "nincada",
  },
  {
    idx: "291",
    name: "Ninjask",
    slug: "ninjask",
  },
  {
    idx: "292",
    name: "Shedinja",
    slug: "shedinja",
  },
  {
    idx: "293",
    name: "Whismur",
    slug: "whismur",
  },
  {
    idx: "294",
    name: "Loudred",
    slug: "loudred",
  },
  {
    idx: "295",
    name: "Exploud",
    slug: "exploud",
  },
  {
    idx: "296",
    name: "Makuhita",
    slug: "makuhita",
  },
  {
    idx: "297",
    name: "Hariyama",
    slug: "hariyama",
  },
  {
    idx: "298",
    name: "Azurill",
    slug: "azurill",
  },
  {
    idx: "299",
    name: "Nosepass",
    slug: "nosepass",
  },
  {
    idx: "300",
    name: "Skitty",
    slug: "skitty",
  },
  {
    idx: "301",
    name: "Delcatty",
    slug: "delcatty",
  },
  {
    idx: "302",
    name: "Sableye",
    slug: "sableye",
  },
  {
    idx: "303",
    name: "Mawile",
    slug: "mawile",
  },
  {
    idx: "304",
    name: "Aron",
    slug: "aron",
  },
  {
    idx: "305",
    name: "Lairon",
    slug: "lairon",
  },
  {
    idx: "306",
    name: "Aggron",
    slug: "aggron",
  },
  {
    idx: "307",
    name: "Meditite",
    slug: "meditite",
  },
  {
    idx: "308",
    name: "Medicham",
    slug: "medicham",
  },
  {
    idx: "309",
    name: "Electrike",
    slug: "electrike",
  },
  {
    idx: "310",
    name: "Manectric",
    slug: "manectric",
  },
  {
    idx: "311",
    name: "Plusle",
    slug: "plusle",
  },
  {
    idx: "312",
    name: "Minun",
    slug: "minun",
  },
  {
    idx: "313",
    name: "Volbeat",
    slug: "volbeat",
  },
  {
    idx: "314",
    name: "Illumise",
    slug: "illumise",
  },
  {
    idx: "315",
    name: "Roselia",
    slug: "roselia",
  },
  {
    idx: "316",
    name: "Gulpin",
    slug: "gulpin",
  },
  {
    idx: "317",
    name: "Swalot",
    slug: "swalot",
  },
  {
    idx: "318",
    name: "Carvanha",
    slug: "carvanha",
  },
  {
    idx: "319",
    name: "Sharpedo",
    slug: "sharpedo",
  },
  {
    idx: "320",
    name: "Wailmer",
    slug: "wailmer",
  },
  {
    idx: "321",
    name: "Wailord",
    slug: "wailord",
  },
  {
    idx: "322",
    name: "Numel",
    slug: "numel",
  },
  {
    idx: "323",
    name: "Camerupt",
    slug: "camerupt",
  },
  {
    idx: "324",
    name: "Torkoal",
    slug: "torkoal",
  },
  {
    idx: "325",
    name: "Spoink",
    slug: "spoink",
  },
  {
    idx: "326",
    name: "Grumpig",
    slug: "grumpig",
  },
  {
    idx: "327",
    name: "Spinda",
    slug: "spinda",
  },
  {
    idx: "328",
    name: "Trapinch",
    slug: "trapinch",
  },
  {
    idx: "329",
    name: "Vibrava",
    slug: "vibrava",
  },
  {
    idx: "330",
    name: "Flygon",
    slug: "flygon",
  },
  {
    idx: "331",
    name: "Cacnea",
    slug: "cacnea",
  },
  {
    idx: "332",
    name: "Cacturne",
    slug: "cacturne",
  },
  {
    idx: "333",
    name: "Swablu",
    slug: "swablu",
  },
  {
    idx: "334",
    name: "Altaria",
    slug: "altaria",
  },
  {
    idx: "335",
    name: "Zangoose",
    slug: "zangoose",
  },
  {
    idx: "336",
    name: "Seviper",
    slug: "seviper",
  },
  {
    idx: "337",
    name: "Lunatone",
    slug: "lunatone",
  },
  {
    idx: "338",
    name: "Solrock",
    slug: "solrock",
  },
  {
    idx: "339",
    name: "Barboach",
    slug: "barboach",
  },
  {
    idx: "340",
    name: "Whiscash",
    slug: "whiscash",
  },
  {
    idx: "341",
    name: "Corphish",
    slug: "corphish",
  },
  {
    idx: "342",
    name: "Crawdaunt",
    slug: "crawdaunt",
  },
  {
    idx: "343",
    name: "Baltoy",
    slug: "baltoy",
  },
  {
    idx: "344",
    name: "Claydol",
    slug: "claydol",
  },
  {
    idx: "345",
    name: "Lileep",
    slug: "lileep",
  },
  {
    idx: "346",
    name: "Cradily",
    slug: "cradily",
  },
  {
    idx: "347",
    name: "Anorith",
    slug: "anorith",
  },
  {
    idx: "348",
    name: "Armaldo",
    slug: "armaldo",
  },
  {
    idx: "349",
    name: "Feebas",
    slug: "feebas",
  },
  {
    idx: "350",
    name: "Milotic",
    slug: "milotic",
  },
  {
    idx: "351",
    name: "Castform",
    slug: "castform",
  },
  {
    idx: "352",
    name: "Kecleon",
    slug: "kecleon",
  },
  {
    idx: "353",
    name: "Shuppet",
    slug: "shuppet",
  },
  {
    idx: "354",
    name: "Banette",
    slug: "banette",
  },
  {
    idx: "355",
    name: "Duskull",
    slug: "duskull",
  },
  {
    idx: "356",
    name: "Dusclops",
    slug: "dusclops",
  },
  {
    idx: "357",
    name: "Tropius",
    slug: "tropius",
  },
  {
    idx: "358",
    name: "Chimecho",
    slug: "chimecho",
  },
  {
    idx: "359",
    name: "Absol",
    slug: "absol",
  },
  {
    idx: "360",
    name: "Wynaut",
    slug: "wynaut",
  },
  {
    idx: "361",
    name: "Snorunt",
    slug: "snorunt",
  },
  {
    idx: "362",
    name: "Glalie",
    slug: "glalie",
  },
  {
    idx: "363",
    name: "Spheal",
    slug: "spheal",
  },
  {
    idx: "364",
    name: "Sealeo",
    slug: "sealeo",
  },
  {
    idx: "365",
    name: "Walrein",
    slug: "walrein",
  },
  {
    idx: "366",
    name: "Clamperl",
    slug: "clamperl",
  },
  {
    idx: "367",
    name: "Huntail",
    slug: "huntail",
  },
  {
    idx: "368",
    name: "Gorebyss",
    slug: "gorebyss",
  },
  {
    idx: "369",
    name: "Relicanth",
    slug: "relicanth",
  },
  {
    idx: "370",
    name: "Luvdisc",
    slug: "luvdisc",
  },
  {
    idx: "371",
    name: "Bagon",
    slug: "bagon",
  },
  {
    idx: "372",
    name: "Shelgon",
    slug: "shelgon",
  },
  {
    idx: "373",
    name: "Salamence",
    slug: "salamence",
  },
  {
    idx: "374",
    name: "Beldum",
    slug: "beldum",
  },
  {
    idx: "375",
    name: "Metang",
    slug: "metang",
  },
  {
    idx: "376",
    name: "Metagross",
    slug: "metagross",
  },
  {
    idx: "377",
    name: "Regirock",
    slug: "regirock",
  },
  {
    idx: "378",
    name: "Regice",
    slug: "regice",
  },
  {
    idx: "379",
    name: "Registeel",
    slug: "registeel",
  },
  {
    idx: "380",
    name: "Latias",
    slug: "latias",
  },
  {
    idx: "381",
    name: "Latios",
    slug: "latios",
  },
  {
    idx: "382",
    name: "Kyogre",
    slug: "kyogre",
  },
  {
    idx: "383",
    name: "Groudon",
    slug: "groudon",
  },
  {
    idx: "384",
    name: "Rayquaza",
    slug: "rayquaza",
  },
  {
    idx: "385",
    name: "Jirachi",
    slug: "jirachi",
  },
  {
    idx: "386",
    name: "Deoxys",
    slug: "deoxys",
  },
  {
    idx: "387",
    name: "Turtwig",
    slug: "turtwig",
  },
  {
    idx: "388",
    name: "Grotle",
    slug: "grotle",
  },
  {
    idx: "389",
    name: "Torterra",
    slug: "torterra",
  },
  {
    idx: "390",
    name: "Chimchar",
    slug: "chimchar",
  },
  {
    idx: "391",
    name: "Monferno",
    slug: "monferno",
  },
  {
    idx: "392",
    name: "Infernape",
    slug: "infernape",
  },
  {
    idx: "393",
    name: "Piplup",
    slug: "piplup",
  },
  {
    idx: "394",
    name: "Prinplup",
    slug: "prinplup",
  },
  {
    idx: "395",
    name: "Empoleon",
    slug: "empoleon",
  },
  {
    idx: "396",
    name: "Starly",
    slug: "starly",
  },
  {
    idx: "397",
    name: "Staravia",
    slug: "staravia",
  },
  {
    idx: "398",
    name: "Staraptor",
    slug: "staraptor",
  },
  {
    idx: "399",
    name: "Bidoof",
    slug: "bidoof",
  },
  {
    idx: "400",
    name: "Bibarel",
    slug: "bibarel",
  },
  {
    idx: "401",
    name: "Kricketot",
    slug: "kricketot",
  },
  {
    idx: "402",
    name: "Kricketune",
    slug: "kricketune",
  },
  {
    idx: "403",
    name: "Shinx",
    slug: "shinx",
  },
  {
    idx: "404",
    name: "Luxio",
    slug: "luxio",
  },
  {
    idx: "405",
    name: "Luxray",
    slug: "luxray",
  },
  {
    idx: "406",
    name: "Budew",
    slug: "budew",
  },
  {
    idx: "407",
    name: "Roserade",
    slug: "roserade",
  },
  {
    idx: "408",
    name: "Cranidos",
    slug: "cranidos",
  },
  {
    idx: "409",
    name: "Rampardos",
    slug: "rampardos",
  },
  {
    idx: "410",
    name: "Shieldon",
    slug: "shieldon",
  },
  {
    idx: "411",
    name: "Bastiodon",
    slug: "bastiodon",
  },
  {
    idx: "412",
    name: "Burmy",
    slug: "burmy",
  },
  {
    idx: "413",
    name: "Wormadam",
    slug: "wormadam",
  },
  {
    idx: "414",
    name: "Mothim",
    slug: "mothim",
  },
  {
    idx: "415",
    name: "Combee",
    slug: "combee",
  },
  {
    idx: "416",
    name: "Vespiquen",
    slug: "vespiquen",
  },
  {
    idx: "417",
    name: "Pachirisu",
    slug: "pachirisu",
  },
  {
    idx: "418",
    name: "Buizel",
    slug: "buizel",
  },
  {
    idx: "419",
    name: "Floatzel",
    slug: "floatzel",
  },
  {
    idx: "420",
    name: "Cherubi",
    slug: "cherubi",
  },
  {
    idx: "421",
    name: "Cherrim",
    slug: "cherrim",
  },
  {
    idx: "422",
    name: "Shellos",
    slug: "shellos",
  },
  {
    idx: "423",
    name: "Gastrodon",
    slug: "gastrodon",
  },
  {
    idx: "424",
    name: "Ambipom",
    slug: "ambipom",
  },
  {
    idx: "425",
    name: "Drifloon",
    slug: "drifloon",
  },
  {
    idx: "426",
    name: "Drifblim",
    slug: "drifblim",
  },
  {
    idx: "427",
    name: "Buneary",
    slug: "buneary",
  },
  {
    idx: "428",
    name: "Lopunny",
    slug: "lopunny",
  },
  {
    idx: "429",
    name: "Mismagius",
    slug: "mismagius",
  },
  {
    idx: "430",
    name: "Honchkrow",
    slug: "honchkrow",
  },
  {
    idx: "431",
    name: "Glameow",
    slug: "glameow",
  },
  {
    idx: "432",
    name: "Purugly",
    slug: "purugly",
  },
  {
    idx: "433",
    name: "Chingling",
    slug: "chingling",
  },
  {
    idx: "434",
    name: "Stunky",
    slug: "stunky",
  },
  {
    idx: "435",
    name: "Skuntank",
    slug: "skuntank",
  },
  {
    idx: "436",
    name: "Bronzor",
    slug: "bronzor",
  },
  {
    idx: "437",
    name: "Bronzong",
    slug: "bronzong",
  },
  {
    idx: "438",
    name: "Bonsly",
    slug: "bonsly",
  },
  {
    idx: "439",
    name: "Mime Jr.",
    slug: "mime-jr",
  },
  {
    idx: "440",
    name: "Happiny",
    slug: "happiny",
  },
  {
    idx: "441",
    name: "Chatot",
    slug: "chatot",
  },
  {
    idx: "442",
    name: "Spiritomb",
    slug: "spiritomb",
  },
  {
    idx: "443",
    name: "Gible",
    slug: "gible",
  },
  {
    idx: "444",
    name: "Gabite",
    slug: "gabite",
  },
  {
    idx: "445",
    name: "Garchomp",
    slug: "garchomp",
  },
  {
    idx: "446",
    name: "Munchlax",
    slug: "munchlax",
  },
  {
    idx: "447",
    name: "Riolu",
    slug: "riolu",
  },
  {
    idx: "448",
    name: "Lucario",
    slug: "lucario",
  },
  {
    idx: "449",
    name: "Hippopotas",
    slug: "hippopotas",
  },
  {
    idx: "450",
    name: "Hippowdon",
    slug: "hippowdon",
  },
  {
    idx: "451",
    name: "Skorupi",
    slug: "skorupi",
  },
  {
    idx: "452",
    name: "Drapion",
    slug: "drapion",
  },
  {
    idx: "453",
    name: "Croagunk",
    slug: "croagunk",
  },
  {
    idx: "454",
    name: "Toxicroak",
    slug: "toxicroak",
  },
  {
    idx: "455",
    name: "Carnivine",
    slug: "carnivine",
  },
  {
    idx: "456",
    name: "Finneon",
    slug: "finneon",
  },
  {
    idx: "457",
    name: "Lumineon",
    slug: "lumineon",
  },
  {
    idx: "458",
    name: "Mantyke",
    slug: "mantyke",
  },
  {
    idx: "459",
    name: "Snover",
    slug: "snover",
  },
  {
    idx: "460",
    name: "Abomasnow",
    slug: "abomasnow",
  },
  {
    idx: "461",
    name: "Weavile",
    slug: "weavile",
  },
  {
    idx: "462",
    name: "Magnezone",
    slug: "magnezone",
  },
  {
    idx: "463",
    name: "Lickilicky",
    slug: "lickilicky",
  },
  {
    idx: "464",
    name: "Rhyperior",
    slug: "rhyperior",
  },
  {
    idx: "465",
    name: "Tangrowth",
    slug: "tangrowth",
  },
  {
    idx: "466",
    name: "Electivire",
    slug: "electivire",
  },
  {
    idx: "467",
    name: "Magmortar",
    slug: "magmortar",
  },
  {
    idx: "468",
    name: "Togekiss",
    slug: "togekiss",
  },
  {
    idx: "469",
    name: "Yanmega",
    slug: "yanmega",
  },
  {
    idx: "470",
    name: "Leafeon",
    slug: "leafeon",
  },
  {
    idx: "471",
    name: "Glaceon",
    slug: "glaceon",
  },
  {
    idx: "472",
    name: "Gliscor",
    slug: "gliscor",
  },
  {
    idx: "473",
    name: "Mamoswine",
    slug: "mamoswine",
  },
  {
    idx: "474",
    name: "Porygon-Z",
    slug: "porygon-z",
  },
  {
    idx: "475",
    name: "Gallade",
    slug: "gallade",
  },
  {
    idx: "476",
    name: "Probopass",
    slug: "probopass",
  },
  {
    idx: "477",
    name: "Dusknoir",
    slug: "dusknoir",
  },
  {
    idx: "478",
    name: "Froslass",
    slug: "froslass",
  },
  {
    idx: "479",
    name: "Rotom",
    slug: "rotom",
  },
  {
    idx: "480",
    name: "Uxie",
    slug: "uxie",
  },
  {
    idx: "481",
    name: "Mesprit",
    slug: "mesprit",
  },
  {
    idx: "482",
    name: "Azelf",
    slug: "azelf",
  },
  {
    idx: "483",
    name: "Dialga",
    slug: "dialga",
  },
  {
    idx: "484",
    name: "Palkia",
    slug: "palkia",
  },
  {
    idx: "485",
    name: "Heatran",
    slug: "heatran",
  },
  {
    idx: "486",
    name: "Regigigas",
    slug: "regigigas",
  },
  {
    idx: "487",
    name: "Giratina",
    slug: "giratina",
  },
  {
    idx: "488",
    name: "Cresselia",
    slug: "cresselia",
  },
  {
    idx: "489",
    name: "Phione",
    slug: "phione",
  },
  {
    idx: "490",
    name: "Manaphy",
    slug: "manaphy",
  },
  {
    idx: "491",
    name: "Darkrai",
    slug: "darkrai",
  },
  {
    idx: "492",
    name: "Shaymin",
    slug: "shaymin",
  },
  {
    idx: "493",
    name: "Arceus",
    slug: "arceus",
  },
  {
    idx: "494",
    name: "Victini",
    slug: "victini",
  },
  {
    idx: "495",
    name: "Snivy",
    slug: "snivy",
  },
  {
    idx: "496",
    name: "Servine",
    slug: "servine",
  },
  {
    idx: "497",
    name: "Serperior",
    slug: "serperior",
  },
  {
    idx: "498",
    name: "Tepig",
    slug: "tepig",
  },
  {
    idx: "499",
    name: "Pignite",
    slug: "pignite",
  },
  {
    idx: "500",
    name: "Emboar",
    slug: "emboar",
  },
  {
    idx: "501",
    name: "Oshawott",
    slug: "oshawott",
  },
  {
    idx: "502",
    name: "Dewott",
    slug: "dewott",
  },
  {
    idx: "503",
    name: "Samurott",
    slug: "samurott",
  },
  {
    idx: "504",
    name: "Patrat",
    slug: "patrat",
  },
  {
    idx: "505",
    name: "Watchog",
    slug: "watchog",
  },
  {
    idx: "506",
    name: "Lillipup",
    slug: "lillipup",
  },
  {
    idx: "507",
    name: "Herdier",
    slug: "herdier",
  },
  {
    idx: "508",
    name: "Stoutland",
    slug: "stoutland",
  },
  {
    idx: "509",
    name: "Purrloin",
    slug: "purrloin",
  },
  {
    idx: "510",
    name: "Liepard",
    slug: "liepard",
  },
  {
    idx: "511",
    name: "Pansage",
    slug: "pansage",
  },
  {
    idx: "512",
    name: "Simisage",
    slug: "simisage",
  },
  {
    idx: "513",
    name: "Pansear",
    slug: "pansear",
  },
  {
    idx: "514",
    name: "Simisear",
    slug: "simisear",
  },
  {
    idx: "515",
    name: "Panpour",
    slug: "panpour",
  },
  {
    idx: "516",
    name: "Simipour",
    slug: "simipour",
  },
  {
    idx: "517",
    name: "Munna",
    slug: "munna",
  },
  {
    idx: "518",
    name: "Musharna",
    slug: "musharna",
  },
  {
    idx: "519",
    name: "Pidove",
    slug: "pidove",
  },
  {
    idx: "520",
    name: "Tranquill",
    slug: "tranquill",
  },
  {
    idx: "521",
    name: "Unfezant",
    slug: "unfezant",
  },
  {
    idx: "522",
    name: "Blitzle",
    slug: "blitzle",
  },
  {
    idx: "523",
    name: "Zebstrika",
    slug: "zebstrika",
  },
  {
    idx: "524",
    name: "Roggenrola",
    slug: "roggenrola",
  },
  {
    idx: "525",
    name: "Boldore",
    slug: "boldore",
  },
  {
    idx: "526",
    name: "Gigalith",
    slug: "gigalith",
  },
  {
    idx: "527",
    name: "Woobat",
    slug: "woobat",
  },
  {
    idx: "528",
    name: "Swoobat",
    slug: "swoobat",
  },
  {
    idx: "529",
    name: "Drilbur",
    slug: "drilbur",
  },
  {
    idx: "530",
    name: "Excadrill",
    slug: "excadrill",
  },
  {
    idx: "531",
    name: "Audino",
    slug: "audino",
  },
  {
    idx: "532",
    name: "Timburr",
    slug: "timburr",
  },
  {
    idx: "533",
    name: "Gurdurr",
    slug: "gurdurr",
  },
  {
    idx: "534",
    name: "Conkeldurr",
    slug: "conkeldurr",
  },
  {
    idx: "535",
    name: "Tympole",
    slug: "tympole",
  },
  {
    idx: "536",
    name: "Palpitoad",
    slug: "palpitoad",
  },
  {
    idx: "537",
    name: "Seismitoad",
    slug: "seismitoad",
  },
  {
    idx: "538",
    name: "Throh",
    slug: "throh",
  },
  {
    idx: "539",
    name: "Sawk",
    slug: "sawk",
  },
  {
    idx: "540",
    name: "Sewaddle",
    slug: "sewaddle",
  },
  {
    idx: "541",
    name: "Swadloon",
    slug: "swadloon",
  },
  {
    idx: "542",
    name: "Leavanny",
    slug: "leavanny",
  },
  {
    idx: "543",
    name: "Venipede",
    slug: "venipede",
  },
  {
    idx: "544",
    name: "Whirlipede",
    slug: "whirlipede",
  },
  {
    idx: "545",
    name: "Scolipede",
    slug: "scolipede",
  },
  {
    idx: "546",
    name: "Cottonee",
    slug: "cottonee",
  },
  {
    idx: "547",
    name: "Whimsicott",
    slug: "whimsicott",
  },
  {
    idx: "548",
    name: "Petilil",
    slug: "petilil",
  },
  {
    idx: "549",
    name: "Lilligant",
    slug: "lilligant",
  },
  {
    idx: "550",
    name: "Basculin",
    slug: "basculin",
  },
  {
    idx: "551",
    name: "Sandile",
    slug: "sandile",
  },
  {
    idx: "552",
    name: "Krokorok",
    slug: "krokorok",
  },
  {
    idx: "553",
    name: "Krookodile",
    slug: "krookodile",
  },
  {
    idx: "554",
    name: "Darumaka",
    slug: "darumaka",
  },
  {
    idx: "555",
    name: "Darmanitan",
    slug: "darmanitan",
  },
  {
    idx: "556",
    name: "Maractus",
    slug: "maractus",
  },
  {
    idx: "557",
    name: "Dwebble",
    slug: "dwebble",
  },
  {
    idx: "558",
    name: "Crustle",
    slug: "crustle",
  },
  {
    idx: "559",
    name: "Scraggy",
    slug: "scraggy",
  },
  {
    idx: "560",
    name: "Scrafty",
    slug: "scrafty",
  },
  {
    idx: "561",
    name: "Sigilyph",
    slug: "sigilyph",
  },
  {
    idx: "562",
    name: "Yamask",
    slug: "yamask",
  },
  {
    idx: "563",
    name: "Cofagrigus",
    slug: "cofagrigus",
  },
  {
    idx: "564",
    name: "Tirtouga",
    slug: "tirtouga",
  },
  {
    idx: "565",
    name: "Carracosta",
    slug: "carracosta",
  },
  {
    idx: "566",
    name: "Archen",
    slug: "archen",
  },
  {
    idx: "567",
    name: "Archeops",
    slug: "archeops",
  },
  {
    idx: "568",
    name: "Trubbish",
    slug: "trubbish",
  },
  {
    idx: "569",
    name: "Garbodor",
    slug: "garbodor",
  },
  {
    idx: "570",
    name: "Zorua",
    slug: "zorua",
  },
  {
    idx: "571",
    name: "Zoroark",
    slug: "zoroark",
  },
  {
    idx: "572",
    name: "Minccino",
    slug: "minccino",
  },
  {
    idx: "573",
    name: "Cinccino",
    slug: "cinccino",
  },
  {
    idx: "574",
    name: "Gothita",
    slug: "gothita",
  },
  {
    idx: "575",
    name: "Gothorita",
    slug: "gothorita",
  },
  {
    idx: "576",
    name: "Gothitelle",
    slug: "gothitelle",
  },
  {
    idx: "577",
    name: "Solosis",
    slug: "solosis",
  },
  {
    idx: "578",
    name: "Duosion",
    slug: "duosion",
  },
  {
    idx: "579",
    name: "Reuniclus",
    slug: "reuniclus",
  },
  {
    idx: "580",
    name: "Ducklett",
    slug: "ducklett",
  },
  {
    idx: "581",
    name: "Swanna",
    slug: "swanna",
  },
  {
    idx: "582",
    name: "Vanillite",
    slug: "vanillite",
  },
  {
    idx: "583",
    name: "Vanillish",
    slug: "vanillish",
  },
  {
    idx: "584",
    name: "Vanilluxe",
    slug: "vanilluxe",
  },
  {
    idx: "585",
    name: "Deerling",
    slug: "deerling",
  },
  {
    idx: "586",
    name: "Sawsbuck",
    slug: "sawsbuck",
  },
  {
    idx: "587",
    name: "Emolga",
    slug: "emolga",
  },
  {
    idx: "588",
    name: "Karrablast",
    slug: "karrablast",
  },
  {
    idx: "589",
    name: "Escavalier",
    slug: "escavalier",
  },
  {
    idx: "590",
    name: "Foongus",
    slug: "foongus",
  },
  {
    idx: "591",
    name: "Amoonguss",
    slug: "amoonguss",
  },
  {
    idx: "592",
    name: "Frillish",
    slug: "frillish",
  },
  {
    idx: "593",
    name: "Jellicent",
    slug: "jellicent",
  },
  {
    idx: "594",
    name: "Alomomola",
    slug: "alomomola",
  },
  {
    idx: "595",
    name: "Joltik",
    slug: "joltik",
  },
  {
    idx: "596",
    name: "Galvantula",
    slug: "galvantula",
  },
  {
    idx: "597",
    name: "Ferroseed",
    slug: "ferroseed",
  },
  {
    idx: "598",
    name: "Ferrothorn",
    slug: "ferrothorn",
  },
  {
    idx: "599",
    name: "Klink",
    slug: "klink",
  },
  {
    idx: "600",
    name: "Klang",
    slug: "klang",
  },
  {
    idx: "601",
    name: "Klinklang",
    slug: "klinklang",
  },
  {
    idx: "602",
    name: "Tynamo",
    slug: "tynamo",
  },
  {
    idx: "603",
    name: "Eelektrik",
    slug: "eelektrik",
  },
  {
    idx: "604",
    name: "Eelektross",
    slug: "eelektross",
  },
  {
    idx: "605",
    name: "Elgyem",
    slug: "elgyem",
  },
  {
    idx: "606",
    name: "Beheeyem",
    slug: "beheeyem",
  },
  {
    idx: "607",
    name: "Litwick",
    slug: "litwick",
  },
  {
    idx: "608",
    name: "Lampent",
    slug: "lampent",
  },
  {
    idx: "609",
    name: "Chandelure",
    slug: "chandelure",
  },
  {
    idx: "610",
    name: "Axew",
    slug: "axew",
  },
  {
    idx: "611",
    name: "Fraxure",
    slug: "fraxure",
  },
  {
    idx: "612",
    name: "Haxorus",
    slug: "haxorus",
  },
  {
    idx: "613",
    name: "Cubchoo",
    slug: "cubchoo",
  },
  {
    idx: "614",
    name: "Beartic",
    slug: "beartic",
  },
  {
    idx: "615",
    name: "Cryogonal",
    slug: "cryogonal",
  },
  {
    idx: "616",
    name: "Shelmet",
    slug: "shelmet",
  },
  {
    idx: "617",
    name: "Accelgor",
    slug: "accelgor",
  },
  {
    idx: "618",
    name: "Stunfisk",
    slug: "stunfisk",
  },
  {
    idx: "619",
    name: "Mienfoo",
    slug: "mienfoo",
  },
  {
    idx: "620",
    name: "Mienshao",
    slug: "mienshao",
  },
  {
    idx: "621",
    name: "Druddigon",
    slug: "druddigon",
  },
  {
    idx: "622",
    name: "Golett",
    slug: "golett",
  },
  {
    idx: "623",
    name: "Golurk",
    slug: "golurk",
  },
  {
    idx: "624",
    name: "Pawniard",
    slug: "pawniard",
  },
  {
    idx: "625",
    name: "Bisharp",
    slug: "bisharp",
  },
  {
    idx: "626",
    name: "Bouffalant",
    slug: "bouffalant",
  },
  {
    idx: "627",
    name: "Rufflet",
    slug: "rufflet",
  },
  {
    idx: "628",
    name: "Braviary",
    slug: "braviary",
  },
  {
    idx: "629",
    name: "Vullaby",
    slug: "vullaby",
  },
  {
    idx: "630",
    name: "Mandibuzz",
    slug: "mandibuzz",
  },
  {
    idx: "631",
    name: "Heatmor",
    slug: "heatmor",
  },
  {
    idx: "632",
    name: "Durant",
    slug: "durant",
  },
  {
    idx: "633",
    name: "Deino",
    slug: "deino",
  },
  {
    idx: "634",
    name: "Zweilous",
    slug: "zweilous",
  },
  {
    idx: "635",
    name: "Hydreigon",
    slug: "hydreigon",
  },
  {
    idx: "636",
    name: "Larvesta",
    slug: "larvesta",
  },
  {
    idx: "637",
    name: "Volcarona",
    slug: "volcarona",
  },
  {
    idx: "638",
    name: "Cobalion",
    slug: "cobalion",
  },
  {
    idx: "639",
    name: "Terrakion",
    slug: "terrakion",
  },
  {
    idx: "640",
    name: "Virizion",
    slug: "virizion",
  },
  {
    idx: "641",
    name: "Tornadus",
    slug: "tornadus",
  },
  {
    idx: "642",
    name: "Thundurus",
    slug: "thundurus",
  },
  {
    idx: "643",
    name: "Reshiram",
    slug: "reshiram",
  },
  {
    idx: "644",
    name: "Zekrom",
    slug: "zekrom",
  },
  {
    idx: "645",
    name: "Landorus",
    slug: "landorus",
  },
  {
    idx: "646",
    name: "Kyurem",
    slug: "kyurem",
  },
  {
    idx: "647",
    name: "Keldeo",
    slug: "keldeo",
  },
  {
    idx: "648",
    name: "Meloetta",
    slug: "meloetta",
  },
  {
    idx: "649",
    name: "Genesect",
    slug: "genesect",
  },
  {
    idx: "650",
    name: "Chespin",
    slug: "chespin",
  },
  {
    idx: "651",
    name: "Quilladin",
    slug: "quilladin",
  },
  {
    idx: "652",
    name: "Chesnaught",
    slug: "chesnaught",
  },
  {
    idx: "653",
    name: "Fennekin",
    slug: "fennekin",
  },
  {
    idx: "654",
    name: "Braixen",
    slug: "braixen",
  },
  {
    idx: "655",
    name: "Delphox",
    slug: "delphox",
  },
  {
    idx: "656",
    name: "Froakie",
    slug: "froakie",
  },
  {
    idx: "657",
    name: "Frogadier",
    slug: "frogadier",
  },
  {
    idx: "658",
    name: "Greninja",
    slug: "greninja",
  },
  {
    idx: "659",
    name: "Bunnelby",
    slug: "bunnelby",
  },
  {
    idx: "660",
    name: "Diggersby",
    slug: "diggersby",
  },
  {
    idx: "661",
    name: "Fletchling",
    slug: "fletchling",
  },
  {
    idx: "662",
    name: "Fletchinder",
    slug: "fletchinder",
  },
  {
    idx: "663",
    name: "Talonflame",
    slug: "talonflame",
  },
  {
    idx: "664",
    name: "Scatterbug",
    slug: "scatterbug",
  },
  {
    idx: "665",
    name: "Spewpa",
    slug: "spewpa",
  },
  {
    idx: "666",
    name: "Vivillon",
    slug: "vivillon",
  },
  {
    idx: "667",
    name: "Litleo",
    slug: "litleo",
  },
  {
    idx: "668",
    name: "Pyroar",
    slug: "pyroar",
  },
  {
    idx: "669",
    name: "Flabébé",
    slug: "flabebe",
  },
  {
    idx: "670",
    name: "Floette",
    slug: "floette",
  },
  {
    idx: "671",
    name: "Florges",
    slug: "florges",
  },
  {
    idx: "672",
    name: "Skiddo",
    slug: "skiddo",
  },
  {
    idx: "673",
    name: "Gogoat",
    slug: "gogoat",
  },
  {
    idx: "674",
    name: "Pancham",
    slug: "pancham",
  },
  {
    idx: "675",
    name: "Pangoro",
    slug: "pangoro",
  },
  {
    idx: "676",
    name: "Furfrou",
    slug: "furfrou",
  },
  {
    idx: "677",
    name: "Espurr",
    slug: "espurr",
  },
  {
    idx: "678",
    name: "Meowstic",
    slug: "meowstic",
  },
  {
    idx: "679",
    name: "Honedge",
    slug: "honedge",
  },
  {
    idx: "680",
    name: "Doublade",
    slug: "doublade",
  },
  {
    idx: "681",
    name: "Aegislash",
    slug: "aegislash",
  },
  {
    idx: "682",
    name: "Spritzee",
    slug: "spritzee",
  },
  {
    idx: "683",
    name: "Aromatisse",
    slug: "aromatisse",
  },
  {
    idx: "684",
    name: "Swirlix",
    slug: "swirlix",
  },
  {
    idx: "685",
    name: "Slurpuff",
    slug: "slurpuff",
  },
  {
    idx: "686",
    name: "Inkay",
    slug: "inkay",
  },
  {
    idx: "687",
    name: "Malamar",
    slug: "malamar",
  },
  {
    idx: "688",
    name: "Binacle",
    slug: "binacle",
  },
  {
    idx: "689",
    name: "Barbaracle",
    slug: "barbaracle",
  },
  {
    idx: "690",
    name: "Skrelp",
    slug: "skrelp",
  },
  {
    idx: "691",
    name: "Dragalge",
    slug: "dragalge",
  },
  {
    idx: "692",
    name: "Clauncher",
    slug: "clauncher",
  },
  {
    idx: "693",
    name: "Clawitzer",
    slug: "clawitzer",
  },
  {
    idx: "694",
    name: "Helioptile",
    slug: "helioptile",
  },
  {
    idx: "695",
    name: "Heliolisk",
    slug: "heliolisk",
  },
  {
    idx: "696",
    name: "Tyrunt",
    slug: "tyrunt",
  },
  {
    idx: "697",
    name: "Tyrantrum",
    slug: "tyrantrum",
  },
  {
    idx: "698",
    name: "Amaura",
    slug: "amaura",
  },
  {
    idx: "699",
    name: "Aurorus",
    slug: "aurorus",
  },
  {
    idx: "700",
    name: "Sylveon",
    slug: "sylveon",
  },
  {
    idx: "701",
    name: "Hawlucha",
    slug: "hawlucha",
  },
  {
    idx: "702",
    name: "Dedenne",
    slug: "dedenne",
  },
  {
    idx: "703",
    name: "Carbink",
    slug: "carbink",
  },
  {
    idx: "704",
    name: "Goomy",
    slug: "goomy",
  },
  {
    idx: "705",
    name: "Sliggoo",
    slug: "sliggoo",
  },
  {
    idx: "706",
    name: "Goodra",
    slug: "goodra",
  },
  {
    idx: "707",
    name: "Klefki",
    slug: "klefki",
  },
  {
    idx: "708",
    name: "Phantump",
    slug: "phantump",
  },
  {
    idx: "709",
    name: "Trevenant",
    slug: "trevenant",
  },
  {
    idx: "710",
    name: "Pumpkaboo",
    slug: "pumpkaboo",
  },
  {
    idx: "711",
    name: "Gourgeist",
    slug: "gourgeist",
  },
  {
    idx: "712",
    name: "Bergmite",
    slug: "bergmite",
  },
  {
    idx: "713",
    name: "Avalugg",
    slug: "avalugg",
  },
  {
    idx: "714",
    name: "Noibat",
    slug: "noibat",
  },
  {
    idx: "715",
    name: "Noivern",
    slug: "noivern",
  },
  {
    idx: "716",
    name: "Xerneas",
    slug: "xerneas",
  },
  {
    idx: "717",
    name: "Yveltal",
    slug: "yveltal",
  },
  {
    idx: "718",
    name: "Zygarde",
    slug: "zygarde",
  },
  {
    idx: "719",
    name: "Diancie",
    slug: "diancie",
  },
  {
    idx: "720",
    name: "Hoopa",
    slug: "hoopa",
  },
  {
    idx: "721",
    name: "Volcanion",
    slug: "volcanion",
  },
  {
    idx: "722",
    name: "Rowlet",
    slug: "rowlet",
  },
  {
    idx: "723",
    name: "Dartrix",
    slug: "dartrix",
  },
  {
    idx: "724",
    name: "Decidueye",
    slug: "decidueye",
  },
  {
    idx: "725",
    name: "Litten",
    slug: "litten",
  },
  {
    idx: "726",
    name: "Torracat",
    slug: "torracat",
  },
  {
    idx: "727",
    name: "Incineroar",
    slug: "incineroar",
  },
  {
    idx: "728",
    name: "Popplio",
    slug: "popplio",
  },
  {
    idx: "729",
    name: "Brionne",
    slug: "brionne",
  },
  {
    idx: "730",
    name: "Primarina",
    slug: "primarina",
  },
  {
    idx: "731",
    name: "Pikipek",
    slug: "pikipek",
  },
  {
    idx: "732",
    name: "Trumbeak",
    slug: "trumbeak",
  },
  {
    idx: "733",
    name: "Toucannon",
    slug: "toucannon",
  },
  {
    idx: "734",
    name: "Yungoos",
    slug: "yungoos",
  },
  {
    idx: "735",
    name: "Gumshoos",
    slug: "gumshoos",
  },
  {
    idx: "736",
    name: "Grubbin",
    slug: "grubbin",
  },
  {
    idx: "737",
    name: "Charjabug",
    slug: "charjabug",
  },
  {
    idx: "738",
    name: "Vikavolt",
    slug: "vikavolt",
  },
  {
    idx: "739",
    name: "Crabrawler",
    slug: "crabrawler",
  },
  {
    idx: "740",
    name: "Crabominable",
    slug: "crabominable",
  },
  {
    idx: "741",
    name: "Oricorio",
    slug: "oricorio",
  },
  {
    idx: "742",
    name: "Cutiefly",
    slug: "cutiefly",
  },
  {
    idx: "743",
    name: "Ribombee",
    slug: "ribombee",
  },
  {
    idx: "744",
    name: "Rockruff",
    slug: "rockruff",
  },
  {
    idx: "745",
    name: "Lycanroc",
    slug: "lycanroc",
  },
  {
    idx: "746",
    name: "Wishiwashi",
    slug: "wishiwashi",
  },
  {
    idx: "747",
    name: "Mareanie",
    slug: "mareanie",
  },
  {
    idx: "748",
    name: "Toxapex",
    slug: "toxapex",
  },
  {
    idx: "749",
    name: "Mudbray",
    slug: "mudbray",
  },
  {
    idx: "750",
    name: "Mudsdale",
    slug: "mudsdale",
  },
  {
    idx: "751",
    name: "Dewpider",
    slug: "dewpider",
  },
  {
    idx: "752",
    name: "Araquanid",
    slug: "araquanid",
  },
  {
    idx: "753",
    name: "Fomantis",
    slug: "fomantis",
  },
  {
    idx: "754",
    name: "Lurantis",
    slug: "lurantis",
  },
  {
    idx: "755",
    name: "Morelull",
    slug: "morelull",
  },
  {
    idx: "756",
    name: "Shiinotic",
    slug: "shiinotic",
  },
  {
    idx: "757",
    name: "Salandit",
    slug: "salandit",
  },
  {
    idx: "758",
    name: "Salazzle",
    slug: "salazzle",
  },
  {
    idx: "759",
    name: "Stufful",
    slug: "stufful",
  },
  {
    idx: "760",
    name: "Bewear",
    slug: "bewear",
  },
  {
    idx: "761",
    name: "Bounsweet",
    slug: "bounsweet",
  },
  {
    idx: "762",
    name: "Steenee",
    slug: "steenee",
  },
  {
    idx: "763",
    name: "Tsareena",
    slug: "tsareena",
  },
  {
    idx: "764",
    name: "Comfey",
    slug: "comfey",
  },
  {
    idx: "765",
    name: "Oranguru",
    slug: "oranguru",
  },
  {
    idx: "766",
    name: "Passimian",
    slug: "passimian",
  },
  {
    idx: "767",
    name: "Wimpod",
    slug: "wimpod",
  },
  {
    idx: "768",
    name: "Golisopod",
    slug: "golisopod",
  },
  {
    idx: "769",
    name: "Sandygast",
    slug: "sandygast",
  },
  {
    idx: "770",
    name: "Palossand",
    slug: "palossand",
  },
  {
    idx: "771",
    name: "Pyukumuku",
    slug: "pyukumuku",
  },
  {
    idx: "772",
    name: "Type: Null",
    slug: "type-null",
  },
  {
    idx: "773",
    name: "Silvally",
    slug: "silvally",
  },
  {
    idx: "774",
    name: "Minior",
    slug: "minior",
  },
  {
    idx: "775",
    name: "Komala",
    slug: "komala",
  },
  {
    idx: "776",
    name: "Turtonator",
    slug: "turtonator",
  },
  {
    idx: "777",
    name: "Togedemaru",
    slug: "togedemaru",
  },
  {
    idx: "778",
    name: "Mimikyu",
    slug: "mimikyu",
  },
  {
    idx: "779",
    name: "Bruxish",
    slug: "bruxish",
  },
  {
    idx: "780",
    name: "Drampa",
    slug: "drampa",
  },
  {
    idx: "781",
    name: "Dhelmise",
    slug: "dhelmise",
  },
  {
    idx: "782",
    name: "Jangmo-o",
    slug: "jangmo-o",
  },
  {
    idx: "783",
    name: "Hakamo-o",
    slug: "hakamo-o",
  },
  {
    idx: "784",
    name: "Kommo-o",
    slug: "kommo-o",
  },
  {
    idx: "785",
    name: "Tapu Koko",
    slug: "tapu-koko",
  },
  {
    idx: "786",
    name: "Tapu Lele",
    slug: "tapu-lele",
  },
  {
    idx: "787",
    name: "Tapu Bulu",
    slug: "tapu-bulu",
  },
  {
    idx: "788",
    name: "Tapu Fini",
    slug: "tapu-fini",
  },
  {
    idx: "789",
    name: "Cosmog",
    slug: "cosmog",
  },
  {
    idx: "790",
    name: "Cosmoem",
    slug: "cosmoem",
  },
  {
    idx: "791",
    name: "Solgaleo",
    slug: "solgaleo",
  },
  {
    idx: "792",
    name: "Lunala",
    slug: "lunala",
  },
  {
    idx: "793",
    name: "Nihilego",
    slug: "nihilego",
  },
  {
    idx: "794",
    name: "Buzzwole",
    slug: "buzzwole",
  },
  {
    idx: "795",
    name: "Pheromosa",
    slug: "pheromosa",
  },
  {
    idx: "796",
    name: "Xurkitree",
    slug: "xurkitree",
  },
  {
    idx: "797",
    name: "Celesteela",
    slug: "celesteela",
  },
  {
    idx: "798",
    name: "Kartana",
    slug: "kartana",
  },
  {
    idx: "799",
    name: "Guzzlord",
    slug: "guzzlord",
  },
  {
    idx: "800",
    name: "Necrozma",
    slug: "necrozma",
  },
  {
    idx: "801",
    name: "Magearna",
    slug: "magearna",
  },
  {
    idx: "802",
    name: "Marshadow",
    slug: "marshadow",
  },
  {
    idx: "803",
    name: "Poipole",
    slug: "poipole",
  },
  {
    idx: "804",
    name: "Naganadel",
    slug: "naganadel",
  },
  {
    idx: "805",
    name: "Stakataka",
    slug: "stakataka",
  },
  {
    idx: "806",
    name: "Blacephalon",
    slug: "blacephalon",
  },
  {
    idx: "807",
    name: "Zeraora",
    slug: "zeraora",
  },
  {
    idx: "808",
    name: "Meltan",
    slug: "meltan",
  },
  {
    idx: "809",
    name: "Melmetal",
    slug: "melmetal",
  },
  {
    idx: "810",
    name: "Grookey",
    slug: "grookey",
  },
  {
    idx: "811",
    name: "Thwackey",
    slug: "thwackey",
  },
  {
    idx: "812",
    name: "Rillaboom",
    slug: "rillaboom",
  },
  {
    idx: "813",
    name: "Scorbunny",
    slug: "scorbunny",
  },
  {
    idx: "814",
    name: "Raboot",
    slug: "raboot",
  },
  {
    idx: "815",
    name: "Cinderace",
    slug: "cinderace",
  },
  {
    idx: "816",
    name: "Sobble",
    slug: "sobble",
  },
  {
    idx: "817",
    name: "Drizzile",
    slug: "drizzile",
  },
  {
    idx: "818",
    name: "Inteleon",
    slug: "inteleon",
  },
  {
    idx: "819",
    name: "Skwovet",
    slug: "skwovet",
  },
  {
    idx: "820",
    name: "Greedent",
    slug: "greedent",
  },
  {
    idx: "821",
    name: "Rookidee",
    slug: "rookidee",
  },
  {
    idx: "822",
    name: "Corvisquire",
    slug: "corvisquire",
  },
  {
    idx: "823",
    name: "Corviknight",
    slug: "corviknight",
  },
  {
    idx: "824",
    name: "Blipbug",
    slug: "blipbug",
  },
  {
    idx: "825",
    name: "Dottler",
    slug: "dottler",
  },
  {
    idx: "826",
    name: "Orbeetle",
    slug: "orbeetle",
  },
  {
    idx: "827",
    name: "Nickit",
    slug: "nickit",
  },
  {
    idx: "828",
    name: "Thievul",
    slug: "thievul",
  },
  {
    idx: "829",
    name: "Gossifleur",
    slug: "gossifleur",
  },
  {
    idx: "830",
    name: "Eldegoss",
    slug: "eldegoss",
  },
  {
    idx: "831",
    name: "Wooloo",
    slug: "wooloo",
  },
  {
    idx: "832",
    name: "Dubwool",
    slug: "dubwool",
  },
  {
    idx: "833",
    name: "Chewtle",
    slug: "chewtle",
  },
  {
    idx: "834",
    name: "Drednaw",
    slug: "drednaw",
  },
  {
    idx: "835",
    name: "Yamper",
    slug: "yamper",
  },
  {
    idx: "836",
    name: "Boltund",
    slug: "boltund",
  },
  {
    idx: "837",
    name: "Rolycoly",
    slug: "rolycoly",
  },
  {
    idx: "838",
    name: "Carkol",
    slug: "carkol",
  },
  {
    idx: "839",
    name: "Coalossal",
    slug: "coalossal",
  },
  {
    idx: "840",
    name: "Applin",
    slug: "applin",
  },
  {
    idx: "841",
    name: "Flapple",
    slug: "flapple",
  },
  {
    idx: "842",
    name: "Appletun",
    slug: "appletun",
  },
  {
    idx: "843",
    name: "Silicobra",
    slug: "silicobra",
  },
  {
    idx: "844",
    name: "Sandaconda",
    slug: "sandaconda",
  },
  {
    idx: "845",
    name: "Cramorant",
    slug: "cramorant",
  },
  {
    idx: "846",
    name: "Arrokuda",
    slug: "arrokuda",
  },
  {
    idx: "847",
    name: "Barraskewda",
    slug: "barraskewda",
  },
  {
    idx: "848",
    name: "Toxel",
    slug: "toxel",
  },
  {
    idx: "849",
    name: "Toxtricity",
    slug: "toxtricity",
  },
  {
    idx: "850",
    name: "Sizzlipede",
    slug: "sizzlipede",
  },
  {
    idx: "851",
    name: "Centiskorch",
    slug: "centiskorch",
  },
  {
    idx: "852",
    name: "Clobbopus",
    slug: "clobbopus",
  },
  {
    idx: "853",
    name: "Grapploct",
    slug: "grapploct",
  },
  {
    idx: "854",
    name: "Sinistea",
    slug: "sinistea",
  },
  {
    idx: "855",
    name: "Polteageist",
    slug: "polteageist",
  },
  {
    idx: "856",
    name: "Hatenna",
    slug: "hatenna",
  },
  {
    idx: "857",
    name: "Hattrem",
    slug: "hattrem",
  },
  {
    idx: "858",
    name: "Hatterene",
    slug: "hatterene",
  },
  {
    idx: "859",
    name: "Impidimp",
    slug: "impidimp",
  },
  {
    idx: "860",
    name: "Morgrem",
    slug: "morgrem",
  },
  {
    idx: "861",
    name: "Grimmsnarl",
    slug: "grimmsnarl",
  },
  {
    idx: "862",
    name: "Obstagoon",
    slug: "obstagoon",
  },
  {
    idx: "863",
    name: "Perrserker",
    slug: "perrserker",
  },
  {
    idx: "864",
    name: "Cursola",
    slug: "cursola",
  },
  {
    idx: "865",
    name: "Sirfetch'd",
    slug: "sirfetchd",
  },
  {
    idx: "866",
    name: "Mr. Rime",
    slug: "mr-rime",
  },
  {
    idx: "867",
    name: "Runerigus",
    slug: "runerigus",
  },
  {
    idx: "868",
    name: "Milcery",
    slug: "milcery",
  },
  {
    idx: "869",
    name: "Alcremie",
    slug: "alcremie",
  },
  {
    idx: "870",
    name: "Falinks",
    slug: "falinks",
  },
  {
    idx: "871",
    name: "Pincurchin",
    slug: "pincurchin",
  },
  {
    idx: "872",
    name: "Snom",
    slug: "snom",
  },
  {
    idx: "873",
    name: "Frosmoth",
    slug: "frosmoth",
  },
  {
    idx: "874",
    name: "Stonjourner",
    slug: "stonjourner",
  },
  {
    idx: "875",
    name: "Eiscue",
    slug: "eiscue",
  },
  {
    idx: "876",
    name: "Indeedee",
    slug: "indeedee",
  },
  {
    idx: "877",
    name: "Morpeko",
    slug: "morpeko",
  },
  {
    idx: "878",
    name: "Cufant",
    slug: "cufant",
  },
  {
    idx: "879",
    name: "Copperajah",
    slug: "copperajah",
  },
  {
    idx: "880",
    name: "Dracozolt",
    slug: "dracozolt",
  },
  {
    idx: "881",
    name: "Arctozolt",
    slug: "arctozolt",
  },
  {
    idx: "882",
    name: "Dracovish",
    slug: "dracovish",
  },
  {
    idx: "883",
    name: "Arctovish",
    slug: "arctovish",
  },
  {
    idx: "884",
    name: "Duraludon",
    slug: "duraludon",
  },
  {
    idx: "885",
    name: "Dreepy",
    slug: "dreepy",
  },
  {
    idx: "886",
    name: "Drakloak",
    slug: "drakloak",
  },
  {
    idx: "887",
    name: "Dragapult",
    slug: "dragapult",
  },
  {
    idx: "888",
    name: "Zacian",
    slug: "zacian",
  },
  {
    idx: "889",
    name: "Zamazenta",
    slug: "zamazenta",
  },
  {
    idx: "890",
    name: "Eternatus",
    slug: "eternatus",
  },
  {
    idx: "891",
    name: "Kubfu",
    slug: "kubfu",
  },
  {
    idx: "892",
    name: "Urshifu",
    slug: "urshifu",
  },
  {
    idx: "893",
    name: "Zarude",
    slug: "zarude",
  },
  {
    idx: "894",
    name: "Regieleki",
    slug: "regieleki",
  },
  {
    idx: "895",
    name: "Regidrago",
    slug: "regidrago",
  },
  {
    idx: "896",
    name: "Glastrier",
    slug: "glastrier",
  },
  {
    idx: "897",
    name: "Spectrier",
    slug: "spectrier",
  },
  {
    idx: "898",
    name: "Calyrex",
    slug: "calyrex",
  },
  {
    idx: "899",
    name: "Wyrdeer",
    slug: "wyrdeer",
  },
  {
    idx: "900",
    name: "Kleavor",
    slug: "kleavor",
  },
  {
    idx: "901",
    name: "Ursaluna",
    slug: "ursaluna",
  },
  {
    idx: "902",
    name: "Basculegion",
    slug: "basculegion",
  },
  {
    idx: "903",
    name: "Sneasler",
    slug: "sneasler",
  },
  {
    idx: "904",
    name: "Overqwil",
    slug: "overqwil",
  },
  {
    idx: "905",
    name: "Enamorus",
    slug: "enamorus",
  },
  {
    idx: "906",
    name: "Sprigatito",
    slug: "sprigatito",
  },
  {
    idx: "907",
    name: "Floragato",
    slug: "floragato",
  },
  {
    idx: "908",
    name: "Meowscarada",
    slug: "meowscarada",
  },
  {
    idx: "909",
    name: "Fuecoco",
    slug: "fuecoco",
  },
  {
    idx: "910",
    name: "Crocalor",
    slug: "crocalor",
  },
  {
    idx: "911",
    name: "Skeledirge",
    slug: "skeledirge",
  },
  {
    idx: "912",
    name: "Quaxly",
    slug: "quaxly",
  },
  {
    idx: "913",
    name: "Quaxwell",
    slug: "quaxwell",
  },
  {
    idx: "914",
    name: "Quaquaval",
    slug: "quaquaval",
  },
  {
    idx: "915",
    name: "Lechonk",
    slug: "lechonk",
  },
  {
    idx: "916",
    name: "Oinkologne",
    slug: "oinkologne",
  },
  {
    idx: "917",
    name: "Tarountula",
    slug: "tarountula",
  },
  {
    idx: "918",
    name: "Spidops",
    slug: "spidops",
  },
  {
    idx: "919",
    name: "Nymble",
    slug: "nymble",
  },
  {
    idx: "920",
    name: "Lokix",
    slug: "lokix",
  },
  {
    idx: "921",
    name: "Pawmi",
    slug: "pawmi",
  },
  {
    idx: "922",
    name: "Pawmo",
    slug: "pawmo",
  },
  {
    idx: "923",
    name: "Pawmot",
    slug: "pawmot",
  },
  {
    idx: "924",
    name: "Tandemaus",
    slug: "tandemaus",
  },
  {
    idx: "925",
    name: "Maushold",
    slug: "maushold",
  },
  {
    idx: "926",
    name: "Fidough",
    slug: "fidough",
  },
  {
    idx: "927",
    name: "Dachsbun",
    slug: "dachsbun",
  },
  {
    idx: "928",
    name: "Smoliv",
    slug: "smoliv",
  },
  {
    idx: "929",
    name: "Dolliv",
    slug: "dolliv",
  },
  {
    idx: "930",
    name: "Arboliva",
    slug: "arboliva",
  },
  {
    idx: "931",
    name: "Squawkabilly",
    slug: "squawkabilly",
  },
  {
    idx: "932",
    name: "Nacli",
    slug: "nacli",
  },
  {
    idx: "933",
    name: "Naclstack",
    slug: "naclstack",
  },
  {
    idx: "934",
    name: "Garganacl",
    slug: "garganacl",
  },
  {
    idx: "935",
    name: "Charcadet",
    slug: "charcadet",
  },
  {
    idx: "936",
    name: "Armarouge",
    slug: "armarouge",
  },
  {
    idx: "937",
    name: "Ceruledge",
    slug: "ceruledge",
  },
  {
    idx: "938",
    name: "Tadbulb",
    slug: "tadbulb",
  },
  {
    idx: "939",
    name: "Bellibolt",
    slug: "bellibolt",
  },
  {
    idx: "940",
    name: "Wattrel",
    slug: "wattrel",
  },
  {
    idx: "941",
    name: "Kilowattrel",
    slug: "kilowattrel",
  },
  {
    idx: "942",
    name: "Maschiff",
    slug: "maschiff",
  },
  {
    idx: "943",
    name: "Mabosstiff",
    slug: "mabosstiff",
  },
  {
    idx: "944",
    name: "Shroodle",
    slug: "shroodle",
  },
  {
    idx: "945",
    name: "Grafaiai",
    slug: "grafaiai",
  },
  {
    idx: "946",
    name: "Bramblin",
    slug: "bramblin",
  },
  {
    idx: "947",
    name: "Brambleghast",
    slug: "brambleghast",
  },
  {
    idx: "948",
    name: "Toedscool",
    slug: "toedscool",
  },
  {
    idx: "949",
    name: "Toedscruel",
    slug: "toedscruel",
  },
  {
    idx: "950",
    name: "Klawf",
    slug: "klawf",
  },
  {
    idx: "951",
    name: "Capsakid",
    slug: "capsakid",
  },
  {
    idx: "952",
    name: "Scovillain",
    slug: "scovillain",
  },
  {
    idx: "953",
    name: "Rellor",
    slug: "rellor",
  },
  {
    idx: "954",
    name: "Rabsca",
    slug: "rabsca",
  },
  {
    idx: "955",
    name: "Flittle",
    slug: "flittle",
  },
  {
    idx: "956",
    name: "Espathra",
    slug: "espathra",
  },
  {
    idx: "957",
    name: "Tinkatink",
    slug: "tinkatink",
  },
  {
    idx: "958",
    name: "Tinkatuff",
    slug: "tinkatuff",
  },
  {
    idx: "959",
    name: "Tinkaton",
    slug: "tinkaton",
  },
  {
    idx: "960",
    name: "Wiglett",
    slug: "wiglett",
  },
  {
    idx: "961",
    name: "Wugtrio",
    slug: "wugtrio",
  },
  {
    idx: "962",
    name: "Bombirdier",
    slug: "bombirdier",
  },
  {
    idx: "963",
    name: "Finizen",
    slug: "finizen",
  },
  {
    idx: "964",
    name: "Palafin",
    slug: "palafin",
  },
  {
    idx: "965",
    name: "Varoom",
    slug: "varoom",
  },
  {
    idx: "966",
    name: "Revavroom",
    slug: "revavroom",
  },
  {
    idx: "967",
    name: "Cyclizar",
    slug: "cyclizar",
  },
  {
    idx: "968",
    name: "Orthworm",
    slug: "orthworm",
  },
  {
    idx: "969",
    name: "Glimmet",
    slug: "glimmet",
  },
  {
    idx: "970",
    name: "Glimmora",
    slug: "glimmora",
  },
  {
    idx: "971",
    name: "Greavard",
    slug: "greavard",
  },
  {
    idx: "972",
    name: "Houndstone",
    slug: "houndstone",
  },
  {
    idx: "973",
    name: "Flamigo",
    slug: "flamigo",
  },
  {
    idx: "974",
    name: "Cetoddle",
    slug: "cetoddle",
  },
  {
    idx: "975",
    name: "Cetitan",
    slug: "cetitan",
  },
  {
    idx: "976",
    name: "Veluza",
    slug: "veluza",
  },
  {
    idx: "977",
    name: "Dondozo",
    slug: "dondozo",
  },
  {
    idx: "978",
    name: "Tatsugiri",
    slug: "tatsugiri",
  },
  {
    idx: "979",
    name: "Annihilape",
    slug: "annihilape",
  },
  {
    idx: "980",
    name: "Clodsire",
    slug: "clodsire",
  },
  {
    idx: "981",
    name: "Farigiraf",
    slug: "farigiraf",
  },
  {
    idx: "982",
    name: "Dudunsparce",
    slug: "dudunsparce",
  },
  {
    idx: "983",
    name: "Kingambit",
    slug: "kingambit",
  },
  {
    idx: "984",
    name: "Great Tusk",
    slug: "great-tusk",
  },
  {
    idx: "985",
    name: "Scream Tail",
    slug: "scream-tail",
  },
  {
    idx: "986",
    name: "Brute Bonnet",
    slug: "brute-bonnet",
  },
  {
    idx: "987",
    name: "Flutter Mane",
    slug: "flutter-mane",
  },
  {
    idx: "988",
    name: "Slither Wing",
    slug: "slither-wing",
  },
  {
    idx: "989",
    name: "Sandy Shocks",
    slug: "sandy-shocks",
  },
  {
    idx: "990",
    name: "Iron Treads",
    slug: "iron-treads",
  },
  {
    idx: "991",
    name: "Iron Bundle",
    slug: "iron-bundle",
  },
  {
    idx: "992",
    name: "Iron Hands",
    slug: "iron-hands",
  },
  {
    idx: "993",
    name: "Iron Jugulis",
    slug: "iron-jugulis",
  },
  {
    idx: "994",
    name: "Iron Moth",
    slug: "iron-moth",
  },
  {
    idx: "995",
    name: "Iron Thorns",
    slug: "iron-thorns",
  },
  {
    idx: "996",
    name: "Frigibax",
    slug: "frigibax",
  },
  {
    idx: "997",
    name: "Arctibax",
    slug: "arctibax",
  },
  {
    idx: "998",
    name: "Baxcalibur",
    slug: "baxcalibur",
  },
  {
    idx: "999",
    name: "Gimmighoul",
    slug: "gimmighoul",
  },
  {
    idx: "1000",
    name: "Gholdengo",
    slug: "gholdengo",
  },
  {
    idx: "1001",
    name: "Wo-Chien",
    slug: "wo-chien",
  },
  {
    idx: "1002",
    name: "Chien-Pao",
    slug: "chien-pao",
  },
  {
    idx: "1003",
    name: "Ting-Lu",
    slug: "ting-lu",
  },
  {
    idx: "1004",
    name: "Chi-Yu",
    slug: "chi-yu",
  },
  {
    idx: "1005",
    name: "Roaring Moon",
    slug: "roaring-moon",
  },
  {
    idx: "1006",
    name: "Iron Valiant",
    slug: "iron-valiant",
  },
  {
    idx: "1007",
    name: "Koraidon",
    slug: "koraidon",
  },
  {
    idx: "1008",
    name: "Miraidon",
    slug: "miraidon",
  },
  {
    idx: "1009",
    name: "Walking Wake",
    slug: "walking-wake",
  },
  {
    idx: "1010",
    name: "Iron Leaves",
    slug: "iron-leaves",
  },
  {
    idx: "1011",
    name: "Dipplin",
    slug: "dipplin",
  },
  {
    idx: "1012",
    name: "Poltchageist",
    slug: "poltchageist",
  },
  {
    idx: "1013",
    name: "Sinistcha",
    slug: "sinistcha",
  },
  {
    idx: "1014",
    name: "Okidogi",
    slug: "okidogi",
  },
  {
    idx: "1015",
    name: "Munkidori",
    slug: "munkidori",
  },
  {
    idx: "1016",
    name: "Fezandipiti",
    slug: "fezandipiti",
  },
  {
    idx: "1017",
    name: "Ogerpon",
    slug: "ogerpon",
  },
  {
    idx: "1018",
    name: "Archaludon",
    slug: "archaludon",
  },
  {
    idx: "1019",
    name: "Hydrapple",
    slug: "hydrapple",
  },
  {
    idx: "1020",
    name: "Gouging Fire",
    slug: "gouging-fire",
  },
  {
    idx: "1021",
    name: "Raging Bolt",
    slug: "raging-bolt",
  },
  {
    idx: "1022",
    name: "Iron Boulder",
    slug: "iron-boulder",
  },
  {
    idx: "1023",
    name: "Iron Crown",
    slug: "iron-crown",
  },
  {
    idx: "1024",
    name: "Terapagos",
    slug: "terapagos",
  },
  {
    idx: "1025",
    name: "Pecharunt",
    slug: "pecharunt",
  },
];

export { pokemon };
