const services = [
  {
    id: 1,
    img: "./assets/emergency.png",
    serviceTitle: "National Emergency Number",
    serviceType: "National Emergency",
    phone: "999",
    category: "All",
  },
  {
    id: 2,
    img: "/assets/police.png",
    serviceTitle: "Police Helpline Number",
    serviceType: "Police",
    phone: "999",
    category: "Police",
  },
  {
    id: 3,
    img: "/assets/fire-service.png",
    serviceTitle: "Fire Service Number",
    serviceType: "Fire Service",
    phone: "999",
    category: "Fire ",
  },
  {
    id: 4,
    img: "/assets/ambulance.png",
    serviceTitle: "Ambulance Service",
    serviceType: "Ambulance",
    phone: "1994-999999",
    category: "Health",
  },
  {
    id: 5,
    img: "/assets/emergency.png",
    serviceTitle: "Women & Child Helpline",
    serviceType: "Women & Child Helpline",
    phone: "109",
    category: "Help",
  },
  {
    id: 6,
    img: "/assets/emergency.png",
    serviceTitle: "Anti-Corruption Helpline",
    serviceType: "Anti-Corruption",
    phone: "106",
    category: "Govt.",
  },
  {
    id: 7,
    img: "/assets/emergency.png",
    serviceTitle: "Electricity Helpline",
    serviceType: "Electricity Outage",
    phone: "16216",
    category: "Electricity",
  },
  {
    id: 8,
    img: "/assets/brac.png",
    serviceTitle: "Brac Helpline",
    serviceType: "Brac",
    phone: "16445",
    category: "NGO",
  },
  {
    id: 9,
    img: "/assets/Bangladesh-Railway.png",
    serviceTitle: "Bangladesh Railway Helpline ",
    serviceType: "Bangladesh Railway",
    phone: "163",
    category: "Travel",
  },
];

const cardContainer = document.getElementById("cardContainer");
const callHistoryContainer = document.getElementById("callHistoryContainer");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const coin = document.getElementById("coin");
const reactCount = document.getElementById("reactCount");
const copyCount = document.getElementById("copyCount");

//load card dynamically
services.forEach(service => {
  const card = document.createElement("div");
  card.classList.add("space-y-3", "py-3", "px-4", "rounded-lg", "shadow-xl/20");
  card.innerHTML = `
  <div class="flex justify-between items-center">
    <div class="p-3 rounded-[16px] bg-[#FFE3E2] w-[50px] h-[50px]">
      <img src=${service.img} class="w-full h-full" alt="">
    </div>
    <i id="reactBtn" class="fa-regular fa-heart cursor-pointer"></i>
  </div>
  <p class="text-lg font-bold">${service.serviceTitle}</p>
  <p class="text-gray-500">${service.serviceType}</p>
  <p class="text-2xl font-bold">${service.phone}</p>
  <span class="bg-gray-200 text-gray-600 px-4 py-1 rounded-2xl">${service.category}</span>
  <div class="mt-5 w-full flex justify-center items-center gap-3">
    <button class="copyBtn border border-gray-300 hover:bg-gray-300  w-[50%] rounded-md py-2 text-gray-600 cursor-pointer" data-copyBtnId=${service.id}><i class="fa-solid fa-copy pointer-events-none"></i> Copy</button>
    <button class="callBtn bg-[#00A63E] hover:bg-[#009135] text-white  w-[50%] py-2 rounded-md cursor-pointer" data-id=${service.id}><i class="fa-solid fa-phone pointer-events-none"></i> Call</button>
  </div>
  `;
  cardContainer.appendChild(card)
})

//call btn, copy btn and heart icon functionality
cardContainer.addEventListener("click", function (e) {
  if (e.target.closest(".callBtn")) {
    const id = e.target.getAttribute("data-id");

    let singleService = services.find((service) => service.id == id);

    if (Number(coin.innerText > 0)) {
      coin.innerText = Number(coin.innerText) - 20;
      // \u{1F4DE} this is phone icons keyboard shortcut

      alert(
        `\u{1F4DE} calling ${singleService.serviceType} ${singleService.phone}...`
      );

      if (Number(coin.innerText) == 20) {
        alert("❗ Next will be your last call to place!!!");
      }
      const callHistoryCard = document.createElement("div");
      callHistoryCard.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "bg-gray-200",
        "p-3",
        "rounded-xl"
      );

      callHistoryCard.innerHTML = `
    <div>
    <p class="font-bold">${singleService.serviceTitle}</p>
    <p class="text-gray-400">${singleService.phone}</p>
    </div>
    <p>${new Date().toLocaleTimeString()}</p>
    `;
      callHistoryContainer.appendChild(callHistoryCard);
    } else if (Number(coin.innerText == 0)) {
      alert(
        "\u274C You don’t have sufficient coins to place a call. A minimum of 20 coins is required"
      );
      return;
    }
    return;
  }
  else if (e.target.closest(".copyBtn")) {
    const id = e.target.getAttribute("data-copyBtnId");

    let singleService = services.find((service) => service.id == id);

    navigator.clipboard.writeText(singleService.phone)
      .then(() => {
        alert(`service number copied: ${singleService.phone}`);
      })
      .catch((err) => {
        alert("Failed to copy service number:", err)
    })

    copyCount.innerText = Number(copyCount.innerText) + 1;
    return;
  }
  else if (e.target.closest("#reactBtn")) {
    reactCount.innerText = Number(reactCount.innerText) + 1;
    return;
  }
});

//clear history functionality
clearHistoryBtn.addEventListener("click", function () {
  callHistoryContainer.innerHTML = ``;

  coin.innerText = 100;

  reactCount.innerText = 0;

})