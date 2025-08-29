const services = [
  {
    id: 1,
    name: "National Emergency",
    englishName: "National Emergency Number",
    number: "999",
    category: "All",
    icon: "emergency",
  },
  {
    id: 2,
    name: "Police Helpline",
    englishName: "Police Helpline Number",
    number: "100",
    category: "Police",
    icon: "local_police",
  },
  {
    id: 3,
    name: "Fire Service",
    englishName: "Fire Service Number",
    number: "101",
    category: "Fire",
    icon: "fire_truck",
  },
  {
    id: 4,
    name: "Ambulance Service",
    englishName: "Ambulance Service",
    number: "102",
    category: "Health",
    icon: "ambulance",
  },
  {
    id: 5,
    name: "Women & Child Helpline",
    englishName: "Women & Child Helpline",
    number: "109",
    category: "Help",
    icon: "escalator_warning",
  },
  {
    id: 6,
    name: "Anti-Corruption",
    englishName: "Anti-Corruption Helpline",
    number: "106",
    category: "Govt.",
    icon: "gavel",
  },
  {
    id: 7,
    name: "Electricity Outage",
    englishName: "Electricity Helpline",
    number: "16216",
    category: "Electricity",
    icon: "bolt",
  },
  {
    id: 8,
    name: "Brac Helpline",
    englishName: "Brac Helpline",
    number: "16445",
    category: "NGO",
    icon: "groups",
  },
  {
    id: 9,
    name: "Bangladesh Railway",
    englishName: "Bangladesh Railway Helpline",
    number: "163",
    category: "Travel",
    icon: "train",
  },
];

const cardsContainer = document.getElementById("cards-container");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history-btn");
const heartCountSpan = document.getElementById("heart-count");
const coinCountSpan = document.getElementById("coin-count");
const copyCountSpan = document.getElementById("copy-count");

let heartCount = 0,
  coinCount = 100,
  copyCount = 0;









