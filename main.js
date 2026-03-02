const mixes = [
  {
    name: 'Mix 1',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/m/1.jpg',
    currentPrice: '70 €',
    sizes: [
      {
        name: 'S',
        price: 50,
      },
      {
        name: 'M',
        price: 70,
      },
      {
        name: 'L',
        price: 100,
      },
      {
        name: 'XL',
        price: 145,
      },
    ],
  },
  {
    name: 'Mix 2',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/m/2.jpeg',
    currentPrice: '180 €',
    sizes: [
      {
        name: 'S',
        price: 70,
      },
      {
        name: 'M',
        price: 125,
      },
      {
        name: 'L',
        price: 180,
      },
      {
        name: 'XL',
        price: 240,
      },
    ],
  },
  {
    name: 'Mix 3',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/m/3.jpg',
    currentPrice: '90 €',
    sizes: [
      {
        name: 'S',
        price: 70,
      },
      {
        name: 'M',
        price: 90,
      },
      {
        name: 'L',
        price: 135,
      },
      {
        name: 'XL',
        price: 175,
      },
    ],
  },
  {
    name: 'Mix 4',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/m/4.jpeg',
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
        price: 236,
      },
    ],
  },
  {
    name: 'Mix 5',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/m/5.jpeg',
    currentPrice: '85 €',
    sizes: [
      {
        name: 'S',
        price: 58,
      },
      {
        name: 'M',
        price: 85,
      },
      {
        name: 'L',
        price: 125,
      },
      {
        name: 'XL',
        price: 165,
      },
    ],
  },
  {
    name: 'Mix 6 (+ mini)',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/m/6.jpg',
    currentPrice: '280 €',
    sizes: [
      {
        name: 'S',
        price: 90,
      },
      {
        name: 'M',
        price: 110,
      },
      {
        name: 'L',
        price: 155,
      },
      {
        name: 'XL',
        price: 195,
      },
    ],
  },
]

const boxes = [
  {
    name: 'Box 1',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/box/t5.jpg',
    currentPrice: '101 tulips',
    sizes: [
      {
        name: '51 pcs.',
        price: 112,
      },
      {
        name: '101 pcs.',
        price: 222,
      },
      {
        name: '151 pcs.',
        price: 332,
      },
      {
        name: '201 pcs.',
        price: 462,
      },
    ],
  },
  {
    name: 'Box 2',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/box/b4.jpg',
    currentPrice: '440 €',
    sizes: [
      {
        name: 'S',
        price: 160,
      },
      {
        name: 'M',
        price: 220,
      },
      {
        name: 'L',
        price: 380,
      },
      {
        name: 'XL',
        price: 440,
      },
    ],
  },
  {
    name: 'Box 3',
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
    name: 'Box 4',
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
    name: 'Color #1',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/t/T_1.jpeg',
    sizes: [],
  },
  {
    name: 'Color #2',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/t/T_2.jpeg',
    sizes: [],
  },
  {
    name: 'Color #3',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/t/T_3.jpeg',
    sizes: [],
  },
  {
    name: 'Color #4',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/t/T_4.jpeg',
    sizes: [],
  },
  {
    name: 'Color #5',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/t/T_5.jpeg',
    sizes: [],
  },
  {
    name: 'Color #6',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/t/T_6.jpeg',
    sizes: [],
  },
  {
    name: 'Color #7',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/t/T_7.jpeg',
    sizes: [],
  },
  {
    name: 'Color #8',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/t/T_8.jpeg',
    sizes: [],
  },
]

const mono = [
  /*
  {
    name: 'Red (minimum - 15 pcs.)',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mono/r1.jpg',
    currentPrice: '101 pcs.',
    sizes: [
      {
        name: '1 pcs.',
        price: 4.2,
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
        price: 4.2,
      },
    ],
  },
  */

  {
    name: 'Royal Blush',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/m/7.jpeg',
    currentPrice: '23 pcs.',
    sizes: [
      {
        name: '1 pcs.',
        price: 5.5,
      },
    ],
  },
  {
    name: 'Hydrangea (min - 7 pcs.)',
    image: 'https://storage.googleapis.com/floralis/2026/8-march/1.jpg',
    sizes: [
      {
        name: '1 pcs.',
        price: 8,
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
        price: 4.2,
      },
    ],
  },
  /*
  {
    name: 'Rose (minimum - 15 pcs.)',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/mono/r4.jpg',
    currentPrice: '101 pcs.',
    sizes: [
      {
        name: '1 pcs.',
        price: 4.2,
      },
    ],
  },
  */
]

const additions = [
  {
    name: 'Macaroon (min - 5 pcs.)',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/additions/1.jpeg',
    sizes: [
      {
        name: '1 pcs.',
        price: 3,
      },
    ],
  },
  {
    name: 'Handmade sweets',
    image: 'https://storage.googleapis.com/floralis/2026/14-feb/additions/2.jpeg',
    sizes: [
      {
        name: '8 pcs.',
        price: 20,
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
  renderBouquets(document.getElementById('additions-grid'), additions)
})()
