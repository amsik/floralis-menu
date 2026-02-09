const mixes = [
  {
    name: 'Mix 1',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/1.png',
    currentPrice: '280 €',
    sizes: [
      {
        name: 'S',
        price: 70,
      },
      {
        name: 'M',
        price: 140,
      },
      {
        name: 'L',
        price: 210,
      },
      {
        name: 'XL',
        price: 280,
      },
    ],
  },
  {
    name: 'Mix 2',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/2.jpg',
    currentPrice: '150 €',
    sizes: [
      {
        name: 'S',
        price: 100,
      },
      {
        name: 'M',
        price: 150,
      },
      {
        name: 'L',
        price: 200,
      },
      {
        name: 'XL',
        price: 250,
      },
    ],
  },
  {
    name: 'Mix 3',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/3.jpg',
    currentPrice: '170 €',
    sizes: [
      {
        name: 'S',
        price: 80,
      },
      {
        name: 'M',
        price: 130,
      },
      {
        name: 'L',
        price: 170,
      },
      {
        name: 'XL',
        price: 230,
      },
    ],
  },
  {
    name: 'Mix 4',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/4.jpg',
    currentPrice: '190 €',
    sizes: [
      {
        name: 'S',
        price: 100,
      },
      {
        name: 'M',
        price: 140,
      },
      {
        name: 'L',
        price: 190,
      },
      {
        name: 'XL',
        price: 240,
      },
    ],
  },
  {
    name: 'Mix 5',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/5.jpg',
    currentPrice: '160 €',
    sizes: [
      {
        name: 'S',
        price: 80,
      },
      {
        name: 'M',
        price: 120,
      },
      {
        name: 'L',
        price: 160,
      },
      {
        name: 'XL',
        price: 200,
      },
    ],
  },
  {
    name: 'Mix 6',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/6.jpg',
    currentPrice: '80 €',
    sizes: [
      {
        name: 'S',
        price: 55,
      },
      {
        name: 'M',
        price: 80,
      },
      {
        name: 'L',
        price: 105,
      },
      {
        name: 'XL',
        price: 130,
      },
    ],
  },
  {
    name: 'Mix 7',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/7.jpg',
    currentPrice: '140 €',
    sizes: [
      {
        name: 'S',
        price: 50,
      },
      {
        name: 'M',
        price: 95,
      },
      {
        name: 'L',
        price: 140,
      },
      {
        name: 'XL',
        price: 185,
      },
    ],
  },
  {
    name: 'Mix 8',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/8.jpg',
    currentPrice: '260 €',
    sizes: [
      {
        name: 'S',
        price: 80,
      },
      {
        name: 'M',
        price: 140,
      },
      {
        name: 'L',
        price: 200,
      },
      {
        name: 'XL',
        price: 260,
      },
    ],
  },
  {
    name: 'Mix 9',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/9.jpg',
    currentPrice: '180 €',
    sizes: [
      {
        name: 'S',
        price: 80,
      },
      {
        name: 'M',
        price: 130,
      },
      {
        name: 'L',
        price: 180,
      },
      {
        name: 'XL',
        price: 230,
      },
    ],
  },
  {
    name: 'Mix 10',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/10.jpg',
    currentPrice: '100 €',
    sizes: [
      {
        name: 'S',
        price: 65,
      },
      {
        name: 'M',
        price: 100,
      },
      {
        name: 'L',
        price: 135,
      },
      {
        name: 'XL',
        price: 170,
      },
    ],
  },
  {
    name: 'Mix 11',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/11.png',
    currentPrice: '110 €',
    sizes: [
      {
        name: 'S',
        price: 60,
      },
      {
        name: 'M',
        price: 110,
      },
      {
        name: 'L',
        price: 170,
      },
      {
        name: 'XL',
        price: 230,
      },
    ],
  },
  {
    name: 'Mix 12',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/12.jpg',
    currentPrice: '120 €',
    sizes: [
      {
        name: 'S',
        price: 60,
      },
      {
        name: 'M',
        price: 90,
      },
      {
        name: 'L',
        price: 120,
      },
      {
        name: 'XL',
        price: 150,
      },
    ],
  },
  {
    name: 'Mix 13',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/13.jpg',
    currentPrice: '120 €',
    sizes: [
      {
        name: 'S',
        price: 50,
      },
      {
        name: 'M',
        price: 85,
      },
      {
        name: 'L',
        price: 120,
      },
      {
        name: 'XL',
        price: 150,
      },
    ],
  },
  {
    name: 'Mix 14',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/14.png',
    currentPrice: '130 €',
    sizes: [
      {
        name: 'M',
        price: 90,
      },
      {
        name: 'L',
        price: 130,
      },
      {
        name: 'XL',
        price: 180,
      },
      {
        name: '2XL',
        price: 230,
      },
    ],
  },
  {
    name: 'Mix 15',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mix/15.jpg',
    currentPrice: '80 €',
    sizes: [
      {
        name: 'S',
        price: 60,
      },
      {
        name: 'M',
        price: 80,
      },
      {
        name: 'L',
        price: 100,
      },
      {
        name: 'XL',
        price: 120,
      },
    ],
  },
]

const boxes = [
  {
    name: 'Macaroons Box',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/box/b8.jpeg',
    currentPrice: '35 €',
    sizes: [
      {
        name: 'S',
        price: 35,
      },
      {
        name: 'M',
        price: 45,
      },
      {
        name: 'L',
        price: 55,
      },
    ],
  },
  {
    name: 'Box 1',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/box/1.jpg',
    currentPrice: '110 €',
    sizes: [
      {
        name: 'S',
        price: 75,
      },
      {
        name: 'M',
        price: 110,
      },
      {
        name: 'L',
        price: 160,
      },
      {
        name: 'XL',
        price: 225,
      },
    ],
  },
  {
    name: 'Box 2',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/box/2.jpg',
    currentPrice: '750 €',
    sizes: [
      {
        name: 'M',
        price: 140,
      },
      {
        name: 'L',
        price: 265,
      },
      {
        name: 'XL',
        price: 400,
      },
      {
        name: '2XL',
        price: 600,
      },
    ],
  },
]

const tulips = [
  {
    name: 'Peony-shaped (min - 27pcs.)',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/tulip/1.jpeg',
    sizes: [
      {
        name: '1pcs.',
        price: 2.3,
      },
    ],
  },
  {
    name: 'White (min - 27pcs.)',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/tulip/2.jpg',
    sizes: [
      {
        name: '1pcs.',
        price: 1.9,
      },
    ],
  },
  {
    name: 'Red (min - 27pcs.)',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/tulip/3.jpg',
    sizes: [
      {
        name: '1pcs.',
        price: 1.9,
      },
    ],
  },
  {
    name: 'Pink (min - 27pcs.)',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/tulip/4.jpg',
    sizes: [
      {
        name: '1pcs.',
        price: 1.9,
      },
    ],
  },
]

const mono = [
  {
    name: 'Red (minimum - 15 pcs.)',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mono/r1.jpg',
    currentPrice: '101 pcs.',
    sizes: [
      {
        name: '1 pcs.',
        price: 5,
      },
    ],
  },
  {
    name: 'White (minimum - 15 pcs.)',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mono/r2.jpg',
    currentPrice: '101 pcs.',
    sizes: [
      {
        name: '1 pcs.',
        price: 4.5,
      },
    ],
  },
  {
    name: "O'Hara mix (min-15 pcs.)",
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mono/r3.jpg',
    currentPrice: '51 pcs.',
    sizes: [
      {
        name: '1 pcs.',
        price: 4.5,
      },
    ],
  },
  {
    name: 'Rose (minimum - 15 pcs.)',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mono/r4.jpg',
    currentPrice: '101 pcs.',
    sizes: [
      {
        name: '1 pcs.',
        price: 4.5,
      },
    ],
  },
]

function renderBouquets(element, bouquets) {
  if (!element) return
  element.innerHTML = bouquets
    .map(function (bouquet) {
      const sizesHtml = bouquet.sizes
        .map(function (s) {
          return `<div class="size-option"><span class="label">${s.name}</span><span class="price">€${s.price}</span></div>`
        })
        .join('')
      const currentPriceBadge =
        bouquet.currentPrice != null
          ? `<span class="card-current-price">${bouquet.currentPrice}</span>`
          : ''
      return `<article class="card"><div class="card-image-wrap"><img src="${bouquet.image}" alt="${bouquet.name} bouquet" loading="lazy" />${currentPriceBadge}</div><div class="card-body"><h3 class="card-title">${bouquet.name}</h3><div class="sizes">${sizesHtml}</div></div></article>`
    })
    .join('')
}

;(function () {
  renderBouquets(document.getElementById('mixes-grid'), mixes)
  renderBouquets(document.getElementById('boxes-grid'), boxes)
  renderBouquets(document.getElementById('tulips-grid'), tulips)
  renderBouquets(document.getElementById('mono-grid'), mono)
})()
