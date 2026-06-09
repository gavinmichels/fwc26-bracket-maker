// FlagCDN usage: https://flagcdn.com/w40/{code}.png
// Helper: f("xx") => "https://flagcdn.com/w40/xx.png"
// Special cases noted inline

const FLAG = code => `https://flagcdn.com/w40/${code}.png`;

const GROUP_STAGE_MATCHES = [
  { id: 1,  group: "A", date: "June 11", time: "2:00 PM",
    home: { name: "Mexico",               flag: FLAG("mx") },
    away: { name: "South Africa",         flag: FLAG("za") } },

  { id: 2,  group: "A", date: "June 11", time: "9:00 PM",
    home: { name: "South Korea",          flag: FLAG("kr") },
    away: { name: "Czechia",              flag: FLAG("cz") } },

  { id: 3,  group: "B", date: "June 12", time: "2:00 PM",
    home: { name: "Canada",               flag: FLAG("ca") },
    away: { name: "Bosnia & Herzegovina", flag: FLAG("ba") } },

  { id: 4,  group: "D", date: "June 12", time: "8:00 PM",
    home: { name: "United States",        flag: FLAG("us") },
    away: { name: "Paraguay",             flag: FLAG("py") } },

  { id: 8,  group: "B", date: "June 13", time: "2:00 PM",
    home: { name: "Qatar",                flag: FLAG("qa") },
    away: { name: "Switzerland",          flag: FLAG("ch") } },

  { id: 7,  group: "C", date: "June 13", time: "5:00 PM",
    home: { name: "Brazil",               flag: FLAG("br") },
    away: { name: "Morocco",              flag: FLAG("ma") } },

  { id: 5,  group: "C", date: "June 13", time: "8:00 PM",
    home: { name: "Haiti",                flag: FLAG("ht") },
    away: { name: "Scotland",             flag: FLAG("gb-sct") } },

  { id: 6,  group: "D", date: "June 13", time: "11:00 PM",
    home: { name: "Australia",            flag: FLAG("au") },
    away: { name: "Turkey",               flag: FLAG("tr") } },

  { id: 10, group: "E", date: "June 14", time: "12:00 PM",
    home: { name: "Germany",              flag: FLAG("de") },
    away: { name: "Curaçao",              flag: FLAG("cw") } },

  { id: 11, group: "F", date: "June 14", time: "3:00 PM",
    home: { name: "Netherlands",          flag: FLAG("nl") },
    away: { name: "Japan",                flag: FLAG("jp") } },

  { id: 9,  group: "E", date: "June 14", time: "6:00 PM",
    home: { name: "Ivory Coast",          flag: FLAG("ci") },
    away: { name: "Ecuador",              flag: FLAG("ec") } },

  { id: 12, group: "F", date: "June 14", time: "9:00 PM",
    home: { name: "Sweden",               flag: FLAG("se") },
    away: { name: "Tunisia",              flag: FLAG("tn") } },

  { id: 14, group: "H", date: "June 15", time: "11:00 AM",
    home: { name: "Spain",                flag: FLAG("es") },
    away: { name: "Cape Verde",           flag: FLAG("cv") } },

  { id: 16, group: "G", date: "June 15", time: "2:00 PM",
    home: { name: "Belgium",              flag: FLAG("be") },
    away: { name: "Egypt",                flag: FLAG("eg") } },

  { id: 13, group: "H", date: "June 15", time: "5:00 PM",
    home: { name: "Saudi Arabia",         flag: FLAG("sa") },
    away: { name: "Uruguay",              flag: FLAG("uy") } },

  { id: 15, group: "G", date: "June 15", time: "8:00 PM",
    home: { name: "Iran",                 flag: FLAG("ir") },
    away: { name: "New Zealand",          flag: FLAG("nz") } },

  { id: 17, group: "I", date: "June 16", time: "2:00 PM",
    home: { name: "France",               flag: FLAG("fr") },
    away: { name: "Senegal",              flag: FLAG("sn") } },

  { id: 18, group: "I", date: "June 16", time: "5:00 PM",
    home: { name: "Iraq",                 flag: FLAG("iq") },
    away: { name: "Norway",               flag: FLAG("no") } },

  { id: 19, group: "J", date: "June 16", time: "8:00 PM",
    home: { name: "Argentina",            flag: FLAG("ar") },
    away: { name: "Algeria",              flag: FLAG("dz") } },

  { id: 20, group: "J", date: "June 16", time: "11:00 PM",
    home: { name: "Austria",              flag: FLAG("at") },
    away: { name: "Jordan",               flag: FLAG("jo") } },

  { id: 23, group: "K", date: "June 17", time: "12:00 PM",
    home: { name: "Portugal",             flag: FLAG("pt") },
    away: { name: "DR Congo",             flag: FLAG("cd") } },

  { id: 21, group: "L", date: "June 17", time: "3:00 PM",
    home: { name: "England",              flag: FLAG("gb-eng") },
    away: { name: "Croatia",              flag: FLAG("hr") } },

  { id: 22, group: "L", date: "June 17", time: "6:00 PM",
    home: { name: "Ghana",                flag: FLAG("gh") },
    away: { name: "Panama",               flag: FLAG("pa") } },

  { id: 24, group: "K", date: "June 17", time: "9:00 PM",
    home: { name: "Uzbekistan",           flag: FLAG("uz") },
    away: { name: "Colombia",             flag: FLAG("co") } },

  { id: 25, group: "A", date: "June 18", time: "11:00 AM",
    home: { name: "Czechia",              flag: FLAG("cz") },
    away: { name: "South Africa",         flag: FLAG("za") } },

  { id: 26, group: "B", date: "June 18", time: "2:00 PM",
    home: { name: "Switzerland",          flag: FLAG("ch") },
    away: { name: "Bosnia & Herzegovina", flag: FLAG("ba") } },

  { id: 27, group: "B", date: "June 18", time: "5:00 PM",
    home: { name: "Canada",               flag: FLAG("ca") },
    away: { name: "Qatar",                flag: FLAG("qa") } },

  { id: 28, group: "A", date: "June 18", time: "8:00 PM",
    home: { name: "Mexico",               flag: FLAG("mx") },
    away: { name: "South Korea",          flag: FLAG("kr") } },

  { id: 32, group: "D", date: "June 19", time: "2:00 PM",
    home: { name: "United States",        flag: FLAG("us") },
    away: { name: "Australia",            flag: FLAG("au") } },

  { id: 30, group: "C", date: "June 19", time: "5:00 PM",
    home: { name: "Scotland",             flag: FLAG("gb-sct") },
    away: { name: "Morocco",              flag: FLAG("ma") } },

  { id: 29, group: "C", date: "June 19", time: "8:00 PM",
    home: { name: "Brazil",               flag: FLAG("br") },
    away: { name: "Haiti",                flag: FLAG("ht") } },

  { id: 31, group: "D", date: "June 19", time: "11:00 PM",
    home: { name: "Turkey",               flag: FLAG("tr") },
    away: { name: "Paraguay",             flag: FLAG("py") } },

  { id: 35, group: "F", date: "June 20", time: "12:00 PM",
    home: { name: "Netherlands",          flag: FLAG("nl") },
    away: { name: "Sweden",               flag: FLAG("se") } },

  { id: 33, group: "E", date: "June 20", time: "3:00 PM",
    home: { name: "Germany",              flag: FLAG("de") },
    away: { name: "Ivory Coast",          flag: FLAG("ci") } },

  { id: 34, group: "E", date: "June 20", time: "7:00 PM",
    home: { name: "Ecuador",              flag: FLAG("ec") },
    away: { name: "Curaçao",              flag: FLAG("cw") } },

  { id: 36, group: "F", date: "June 20", time: "11:00 PM",
    home: { name: "Tunisia",              flag: FLAG("tn") },
    away: { name: "Japan",                flag: FLAG("jp") } },

  { id: 38, group: "H", date: "June 21", time: "11:00 AM",
    home: { name: "Spain",                flag: FLAG("es") },
    away: { name: "Saudi Arabia",         flag: FLAG("sa") } },

  { id: 39, group: "G", date: "June 21", time: "2:00 PM",
    home: { name: "Belgium",              flag: FLAG("be") },
    away: { name: "Iran",                 flag: FLAG("ir") } },

  { id: 37, group: "H", date: "June 21", time: "5:00 PM",
    home: { name: "Uruguay",              flag: FLAG("uy") },
    away: { name: "Cape Verde",           flag: FLAG("cv") } },

  { id: 40, group: "G", date: "June 21", time: "8:00 PM",
    home: { name: "New Zealand",          flag: FLAG("nz") },
    away: { name: "Egypt",                flag: FLAG("eg") } },

  { id: 43, group: "J", date: "June 22", time: "12:00 PM",
    home: { name: "Argentina",            flag: FLAG("ar") },
    away: { name: "Austria",              flag: FLAG("at") } },

  { id: 42, group: "I", date: "June 22", time: "4:00 PM",
    home: { name: "France",               flag: FLAG("fr") },
    away: { name: "Iraq",                 flag: FLAG("iq") } },

  { id: 41, group: "I", date: "June 22", time: "7:00 PM",
    home: { name: "Norway",               flag: FLAG("no") },
    away: { name: "Senegal",              flag: FLAG("sn") } },

  { id: 44, group: "J", date: "June 22", time: "10:00 PM",
    home: { name: "Jordan",               flag: FLAG("jo") },
    away: { name: "Algeria",              flag: FLAG("dz") } },

  { id: 47, group: "K", date: "June 23", time: "12:00 PM",
    home: { name: "Portugal",             flag: FLAG("pt") },
    away: { name: "Uzbekistan",           flag: FLAG("uz") } },

  { id: 45, group: "L", date: "June 23", time: "3:00 PM",
    home: { name: "England",              flag: FLAG("gb-eng") },
    away: { name: "Ghana",                flag: FLAG("gh") } },

  { id: 46, group: "L", date: "June 23", time: "6:00 PM",
    home: { name: "Panama",               flag: FLAG("pa") },
    away: { name: "Croatia",              flag: FLAG("hr") } },

  { id: 48, group: "K", date: "June 23", time: "9:00 PM",
    home: { name: "Colombia",             flag: FLAG("co") },
    away: { name: "DR Congo",             flag: FLAG("cd") } },

  { id: 51, group: "B", date: "June 24", time: "2:00 PM",
    home: { name: "Switzerland",          flag: FLAG("ch") },
    away: { name: "Canada",               flag: FLAG("ca") } },

  { id: 52, group: "B", date: "June 24", time: "2:00 PM",
    home: { name: "Bosnia & Herzegovina", flag: FLAG("ba") },
    away: { name: "Qatar",                flag: FLAG("qa") } },

  { id: 49, group: "C", date: "June 24", time: "5:00 PM",
    home: { name: "Scotland",             flag: FLAG("gb-sct") },
    away: { name: "Brazil",               flag: FLAG("br") } },

  { id: 50, group: "C", date: "June 24", time: "5:00 PM",
    home: { name: "Morocco",              flag: FLAG("ma") },
    away: { name: "Haiti",                flag: FLAG("ht") } },

  { id: 53, group: "A", date: "June 24", time: "8:00 PM",
    home: { name: "Czechia",              flag: FLAG("cz") },
    away: { name: "Mexico",               flag: FLAG("mx") } },

  { id: 54, group: "A", date: "June 24", time: "8:00 PM",
    home: { name: "South Africa",         flag: FLAG("za") },
    away: { name: "South Korea",          flag: FLAG("kr") } },

  { id: 55, group: "E", date: "June 25", time: "3:00 PM",
    home: { name: "Curaçao",              flag: FLAG("cw") },
    away: { name: "Ivory Coast",          flag: FLAG("ci") } },

  { id: 56, group: "E", date: "June 25", time: "3:00 PM",
    home: { name: "Ecuador",              flag: FLAG("ec") },
    away: { name: "Germany",              flag: FLAG("de") } },

  { id: 57, group: "F", date: "June 25", time: "6:00 PM",
    home: { name: "Japan",                flag: FLAG("jp") },
    away: { name: "Sweden",               flag: FLAG("se") } },

  { id: 58, group: "F", date: "June 25", time: "6:00 PM",
    home: { name: "Tunisia",              flag: FLAG("tn") },
    away: { name: "Netherlands",          flag: FLAG("nl") } },

  { id: 59, group: "D", date: "June 25", time: "9:00 PM",
    home: { name: "Turkey",               flag: FLAG("tr") },
    away: { name: "United States",        flag: FLAG("us") } },

  { id: 60, group: "D", date: "June 25", time: "9:00 PM",
    home: { name: "Paraguay",             flag: FLAG("py") },
    away: { name: "Australia",            flag: FLAG("au") } },

  { id: 61, group: "I", date: "June 26", time: "2:00 PM",
    home: { name: "Norway",               flag: FLAG("no") },
    away: { name: "France",               flag: FLAG("fr") } },

  { id: 62, group: "I", date: "June 26", time: "2:00 PM",
    home: { name: "Senegal",              flag: FLAG("sn") },
    away: { name: "Iraq",                 flag: FLAG("iq") } },

  { id: 65, group: "H", date: "June 26", time: "7:00 PM",
    home: { name: "Cape Verde",           flag: FLAG("cv") },
    away: { name: "Saudi Arabia",         flag: FLAG("sa") } },

  { id: 66, group: "H", date: "June 26", time: "7:00 PM",
    home: { name: "Uruguay",              flag: FLAG("uy") },
    away: { name: "Spain",                flag: FLAG("es") } },

  { id: 63, group: "G", date: "June 26", time: "10:00 PM",
    home: { name: "Egypt",                flag: FLAG("eg") },
    away: { name: "Iran",                 flag: FLAG("ir") } },

  { id: 64, group: "G", date: "June 26", time: "10:00 PM",
    home: { name: "New Zealand",          flag: FLAG("nz") },
    away: { name: "Belgium",              flag: FLAG("be") } },

  { id: 67, group: "L", date: "June 27", time: "4:00 PM",
    home: { name: "Panama",               flag: FLAG("pa") },
    away: { name: "England",              flag: FLAG("gb-eng") } },

  { id: 68, group: "L", date: "June 27", time: "4:00 PM",
    home: { name: "Croatia",              flag: FLAG("hr") },
    away: { name: "Ghana",                flag: FLAG("gh") } },

  { id: 71, group: "K", date: "June 27", time: "6:30 PM",
    home: { name: "Colombia",             flag: FLAG("co") },
    away: { name: "Portugal",             flag: FLAG("pt") } },

  { id: 72, group: "K", date: "June 27", time: "6:30 PM",
    home: { name: "DR Congo",             flag: FLAG("cd") },
    away: { name: "Uzbekistan",           flag: FLAG("uz") } },

  { id: 69, group: "J", date: "June 27", time: "9:00 PM",
    home: { name: "Algeria",              flag: FLAG("dz") },
    away: { name: "Austria",              flag: FLAG("at") } },

  { id: 70, group: "J", date: "June 27", time: "9:00 PM",
    home: { name: "Jordan",               flag: FLAG("jo") },
    away: { name: "Argentina",            flag: FLAG("ar") } },
];
