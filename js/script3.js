// Flower data with meanings and origins
const flowers = [
  { name: "Rose", color: "Red, White, Pink, Yellow", meaning: "Love, Jealousy, Purity, Happiness", origin: "Asia" },
  { name: "Tulip", color: "Red, Yellow, Purple", meaning: "Perfect, Deep, and Undying Love", origin: "Turkey" },
  { name: "Sunflower", color: "Yellow", meaning: "Lasting happiness and long life", origin: "North America" },
  { name: "Lily", color: "White, Orange, Pink", meaning: "Magnificent beauty and purity", origin: "Europe" },
  { name: "Orchid", color: "White, Pink, Purple", meaning: "Elegance and Luxury", origin: "Tropics" },
  { name: "Daisy", color: "White, Pink, Yellow", meaning: "Youth, Purity, Innocence, Loyal Love", origin: "Europe" },
  { name: "Lavender", color: "Purple", meaning: "Purity, Silence, Devotion and Grace", origin: "Mediterranean" },
  { name: "Peony", color: "Pink, White, Red", meaning: "Nobility, Honor and Wealth", origin: "China" },
  { name: "Chrysanthemum", color: "Red, White, Yellow", meaning: "Love, Truth, Slighted love", origin: "Asia" },
  { name: "Carnation", color: "Pink, White, Red", meaning: `"I'll Never Forget You", Pure Love`, origin: "Mediterranean" },
  { name: "Aster", color: "Purple, White", meaning: "Love and Daintiness", origin: "Eurasia" },
  { name: "Poppy", color: "Red, Orange, White", meaning: "Remembrance", origin: "Eurasia" },
  { name: "Ranunculus", color: "Pink, Yellow, Red", meaning: "Charm and Attractiveness", origin: "Asia" },
  { name: "Dahlia", color: "Red, Yellow, Purple", meaning: "Beauty, Commitment, and kindness", origin: "Mexico" },
  { name: "Freesia", color: "Yellow, Pink, White", meaning: "Friendship and Trust", origin: "Africa" },
  { name: "Camellia", color: "Pink, Red, White", meaning: "Self-Reflection and inner strength", origin: "East Asia" },
  { name: "Anemone", color: "Purple, Red, White", meaning: "Forsaken feeling or anticipation", origin: "Europe" },
  { name: "Hyacinth", color: "Blue, Purple, White", meaning: "Apology, consistency, and Playfulness", origin: "Mediterranean" },
  { name: "Protea", color: "Pink, Red, Orange", meaning: "Diversity and courage", origin: "South Africa" },
  { name: "Cherry Blossom", color: "Pink, White", meaning: "Renewal and fleeting nature of life", origin: "Japan" },
  { name: "Iris", color: "Blue, Purple, Yellow", meaning: "Wisdom, Faith, and Valor", origin: "Northern Hemisphere" },
  { name: "Violet", color: "Blue, Yellow, White", meaning: "Faithfulness and modesty", origin: "Northern Hemisphere" },
  { name: "Marigold", color: "Orange, Yellow", meaning: "Desire for Riches, Grief and Jealousy", origin: "Mexico" },
  { name: "Lilac", color: "Purple, White", meaning: "First Emotion of Love", origin: "Balkans" },
  { name: "Jasmine", color: "White, Yellow", meaning: "Unconditional love and grace", origin: "Eurasia" },
  { name: "Lotus", color: "White, Pink, Blue", meaning: "Purity, enlightenment, and rebirth", origin: "Asia" },
  { name: "Magnolia", color: "White, Pink, Purple", meaning: "Dignity and Perseverance", origin: "East Asia, America" },
  { name: "Gardenia", color: "White", meaning: "Joy and Secret Love", origin: "Asia" },
  { name: "Hibiscus", color: "Red, Pink, Yellow", meaning: "Delicate beauty and passion", origin: "Asia, Pacific Islands" },
  { name: "Gladiolus", color: "Red, Pink, White", meaning: "Strength of character and integrity", origin: "Mediterranean, Africa" },
  { name: "Begonia", color: "Pink, Red, Yellow", meaning: "Deep Thoughts and individuality", origin: "South America" },
  { name: "Bluebell", color: "Blue, Purple", meaning: "Humility and gratitude", origin: "Western Europe" },
  { name: "Buttercup", color: "Yellow", meaning: "Cheerfulness and childish Joy", origin: "Europe, North America" },
  { name: "Daffodil", color: "Yellow, White", meaning: "Chivalry, Rebirth and new beginnings", origin: "Mediterranean" },
  { name: "Forget-Me-Not", color: "Blue", meaning: "True Love and Remembrance", origin: "Europe, Asia" },
  { name: "Morning Glory", color: "Blue, Purple, Pink", meaning: "Affection and fleeting beauty", origin: "China, Japan" },
  { name: "Pansy", color: "Purple, Yellow, White", meaning: "Loving Thoughts and Remembrance", origin: "Europe" },
  { name: "FoxGlove", color: "Purple, Pink, White", meaning: "Insincerity and riddles", origin: "Europe" },
  { name: "Snapdragon", color: "Red, Yellow, Pink", meaning: "Strength and graciousness", origin: "Mediterranean" },
  { name: "Zinnia", color: "Red, Orange, Pink", meaning: "Lasting Friendship and endurance", origin: "Mexico" }
];

const searchInput = document.getElementById('orm-search');
const searchBtn = document.getElementById('orm-search-btn');
const results = document.getElementById('orm-results');

function renderResults(list) {
  if (!list.length) {
    results.innerHTML = `<div class="orm-noresult">no results found. :(</div>`;
    return;
  }
  results.innerHTML = list.map(f =>
    `<div class="orm-flower">
      <div class="orm-name">${f.name}</div>
      <div class="orm-field">Color: ${f.color} | Origin: ${f.origin}</div>
      <div class="orm-meaning">Meaning: <span>${f.meaning}</span></div>
    </div>`
  ).join('');
}

// Search action
function doSearch() {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    results.innerHTML = "";
    return;
  }
  const filtered = flowers.filter(f =>
    Object.values(f).some(val => val.toLowerCase().includes(q))
  );
  renderResults(filtered);
}

// Triggers
searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') doSearch();
});

 document.getElementById('orm-references').addEventListener('change', function() {
      const selected = this.options[this.selectedIndex];
      const url = selected.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
        this.selectedIndex = 0;
      }
    });