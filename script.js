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

const renderCards = () => {
  cardsContainer.innerHTML = services
    .map(
      (service) => `
    <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col" data-id="${
      service.id
    }" data-name="${service.name}" data-number="${service.number}">
      <div class="flex justify-between items-start mb-4">
        <div class="${
          service.category === "Police" ? "bg-blue-100" : "bg-red-100"
        } p-3 pb-1 rounded-lg">
          <span class="material-symbols-outlined ${
            service.category === "Police" ? "text-blue-500" : "text-red-500"
          }">${service.icon}</span>
        </div>
        <span class="material-symbols-outlined heart-icon cursor-pointer text-gray-300 hover:text-pink-500 text-3xl">favorite</span>
      </div>
      <div class="flex-grow">
        <h3 class="text-lg font-bold text-gray-800">${service.name}</h3>
        <p class="text-gray-500">${service.englishName}</p>
        <p class="text-3xl font-bold text-gray-900 my-2">${service.number}</p>
        <span class="inline-block bg-[#f2f2f2] text-gray-500 px-3 py-1 rounded-full text-sm font-semibold">${
          service.category
        }</span>
      </div>
      <div class="flex gap-4 mt-6">
        <button class="copy-btn flex-1 py-1 px-4 rounded-lg flex items-center justify-center gap-2 border border-primary text-primary hover:bg-green-50 font-semibold transition-colors">
          <span class="material-symbols-outlined !text-lg">content_copy</span> Copy
        </button>
        <button class="call-btn flex-1 py-1 px-4 rounded-lg flex items-center justify-center gap-2 bg-primary text-white font-semibold transition-colors">
          <span class="material-symbols-outlined !text-lg">call</span> Call
        </button>
      </div>
    </div>
  `
    )
    .join("");
};

const updateStats = () => {
  heartCountSpan.textContent = heartCount;
  coinCountSpan.textContent = coinCount;
  copyCountSpan.textContent = copyCount;
};

cardsContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".bg-white");
  if (!card) return;

  if (
    e.target.closest(".heart-icon") &&
    !e.target.classList.contains("text-pink-500")
  ) {
    e.target.classList.replace("text-gray-300", "text-pink-500");
    heartCount++;
    updateStats();
  }

  if (e.target.closest(".call-btn")) {
    if (coinCount < 20) return alert("Not enough coins!");
    coinCount -= 20;
    updateStats();

    const { name, number } = card.dataset;
    alert(`Calling ${name} at ${number}`);

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    historyList.innerHTML =
      `
    <div class="flex justify-between items-center py-2 border-b last:border-b-0 border-gray-100">
      <div>
        <p class="font-semibold text-gray-800">${name}</p>
        <p class="text-sm text-gray-500">${number}</p>
      </div>
      <div class="text-xs text-gray-400">${time}</div>
    </div>
  ` + historyList.innerHTML;
  }

  if (e.target.closest(".copy-btn")) {
    const { number } = card.dataset;
    navigator.clipboard.writeText(number).then(() => {
      alert(`Copied: ${number}`);
      copyCount++;
      updateStats();
    });
  }
});



renderCards();