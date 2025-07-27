const destinations = {
  hill: [
    { name: "Ooty", image: "https://source.unsplash.com/300x200/?ooty,hills" },
    { name: "Manali", image: "https://source.unsplash.com/300x200/?manali" }
  ],
  beach: [
    { name: "Goa", image: "https://source.unsplash.com/300x200/?goa,beach" },
    { name: "Varkala", image: "https://source.unsplash.com/300x200/?varkala" }
  ],
  historical: [
    { name: "Hampi", image: "https://source.unsplash.com/300x200/?hampi" },
    { name: "Jaipur", image: "https://source.unsplash.com/300x200/?jaipur" }
  ]
};

function showRecommendations(type) {
  const section = document.getElementById('recommendations');
  section.innerHTML = "";
  destinations[type].forEach(dest => {
    const rating = localStorage.getItem(dest.name + "_rating") || "⭐️⭐️⭐️⭐️⭐️";
    section.innerHTML += `
      <div class="card">
        <img src="${dest.image}" alt="${dest.name}" />
        <div class="card-content">
          <h3>${dest.name}</h3>
          <div class="rating">${rating}</div>
          <button onclick="rateDestination('${dest.name}')">Rate</button>
        </div>
      </div>`;
  });
}

function rateDestination(place) {
  const stars = prompt(`Rate ${place} from 1 to 5 stars`);
  if (stars >= 1 && stars <= 5) {
    localStorage.setItem(place + "_rating", "⭐️".repeat(stars));
    showRecommendations(Object.keys(destinations).find(type =>
      destinations[type].some(dest => dest.name === place)
    ));
  }
}
