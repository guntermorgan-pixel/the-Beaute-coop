// Central place for business info + per-category artist data.
// Keep name/address/phone formatting identical to the Google Business Profile
// once that's set up, so local search signals stay consistent.

export const business = {
  name: 'The Beaute Co-op',
  legalName: 'The Beaute Co-op',
  address: {
    street: '4830 31st St S, Suite A',
    city: 'Arlington',
    state: 'VA',
    zip: '22206',
    country: 'US',
  },
  email: 'info@eleven11beaute.com',
  emailHref: 'mailto:info@eleven11beaute.com',
  inquiryEmailHref: 'mailto:info@eleven11beaute.com?subject=Suite%20Inquiry',
  textPhone: '(571) 732-1111',
  textPhoneHref: 'sms:+15717321111',
  hours: 'By appointment only',
  social: {
    instagram: 'https://www.instagram.com/thebeautecoop/?hl=af',
  },
  mapEmbedUrl:
    'https://maps.google.com/maps?q=4830+31st+St+S%2C+Suite+A%2C+Arlington%2C+VA+22206&output=embed',
  directionsUrl: 'https://maps.app.goo.gl/NWX5F4WDxmQKKMPKA',
}

// One artist/business per service category.
// booking.type is 'embed' (inline Square widget) or 'link' (opens in new tab).
export const categories = [
  {
    slug: 'nails',
    index: '01',
    name: 'Nails',
    bookLabel: 'Nails',
    shortName: 'Nails',
    marqueeLabel: 'NAILS',
    description:
      'Healthy nails, always. Our nail artist focuses on nail health first, with hand filing only, no drills, ever, paired with precise, clean technique for sets and fills. When you want to make a statement, she’s also known for her custom nail art and designs, so your healthiest nails can still be your most expressive.',
    homeDescription:
      'Healthy nails first: hand-filed sets and fills, no drills, plus custom nail art for whenever you want to make a statement.',
    priceNote: 'Gel · Gel-X · Builder Gel · Custom Nail Art',
    artist: {
      name: 'Autumn de los Reyes',
      businessName: 'Just a Girl and Her Nails',
      photo: '/images/autumn-headshot.jpg',
      bio: 'Health-first nail care, meticulously hand-filed, with a signature eye for custom design.',
      instagram: 'https://www.instagram.com/justagirlandhernails/',
      website: null,
    },
    booking: {
      type: 'link',
      url: 'https://book.squareup.com/appointments/im3kz67avfmqcs/location/L4VJ1ZXA062SF/services',
      embedCode: null,
    },
  },
  {
    slug: 'brow-design',
    index: '02',
    name: 'Brow Design',
    bookLabel: 'Brows',
    shortName: 'Brow Design',
    marqueeLabel: 'BROW DESIGN',
    description:
      'Precision Brow Architecture is rooted in the pursuit of balance and symmetry. Every service, from initial shape correction to a full Powder Brow, is a meticulously planned process.',
    homeDescription:
      'Precision Brow Architecture, rooted in the pursuit of balance and symmetry.',
    priceNote: 'Dust Brow · Waxing & Tweezing · Brow Lamination',
    artist: {
      name: 'Simone Fennell',
      businessName: 'Good Brows',
      photo: '/images/simone-headshot.jpg',
      bio: 'Precision-first brow architecture, planned around balance and symmetry.',
      instagram: 'https://www.instagram.com/goodbrowsdmv/?hl=en',
      website: 'https://www.goodbrowsdmv.com/',
    },
    booking: {
      type: 'link',
      url: 'https://book.squareup.com/appointments/b39ce6e1-2fc4-4ce2-8dff-6316355c7bb8/location/4A6P6YKMFQYAR/services',
      embedCode: null,
    },
  },
  {
    slug: 'skincare',
    index: '03',
    name: 'Medical-Grade Skin Care',
    bookLabel: 'Skin Care',
    shortName: 'Skin Care',
    marqueeLabel: 'MEDICAL-GRADE SKINCARE',
    description:
      'Facials, peels, and treatments using professional-grade products and techniques: real skin care, for real results.',
    homeDescription:
      'Facials and treatments backed by real results, not just a nice smell.',
    priceNote: 'Facials · Peels · Treatments',
    artist: {
      name: 'Anna Gibbeck',
      businessName: 'A.M. Glow',
      photo: '/images/anna-headshot.jpg',
      bio: 'Medical-grade treatments focused on results you can actually see.',
      instagram: 'https://www.instagram.com/a.m.glow/?hl=en',
      website: 'https://www.amglowaesthetics.com/',
    },
    booking: {
      type: 'link',
      url: 'https://book.squareup.com/appointments/twnn25vsmxvqhy/location/LHH84WCDTN3P8/services',
      embedCode: null,
    },
  },
  {
    slug: 'lash-extensions',
    index: '04',
    name: 'Lash Extensions',
    bookLabel: 'Lashes',
    shortName: 'Lash Extensions',
    marqueeLabel: 'LASH EXTENSIONS',
    description:
      'Natural-looking enhancements, tailored to your eyes and your lifestyle. Our focus is lashes that look like you, only better, never overdone.',
    homeDescription:
      'Natural-looking enhancements, tailored to your eyes and your lifestyle.',
    priceNote: 'Classic · Hybrid · Volume · Fills',
    artist: {
      name: 'Morgan Gunter',
      businessName: 'ElevenXI Beauté',
      photo: '/images/morgan-headshot.jpg',
      bio: 'Natural, tailored lash sets designed to fit your eyes and your everyday.',
      instagram: 'https://www.instagram.com/elevenxibeaute/',
      website: 'https://www.elevenxibeaute.com/',
    },
    booking: {
      type: 'link',
      url: 'https://book.squareup.com/appointments/66ff7325-98a7-4343-a41b-1808cce89799/location/BXCA8KGNVPZ05/services',
      embedCode: null,
    },
  },
]

export const comingSoon = [
  { slug: 'waxing', name: 'Waxing' },
  { slug: 'massage', name: 'Massage' },
]

export const assets = {
  logo: '/images/logo.png',
  entryway: '/images/entryway.jpg',
  morganHeadshot: '/images/morgan-headshot.jpg',
}
