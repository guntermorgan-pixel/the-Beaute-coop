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
// ctaLabel feeds the artist page's closing CTA: "Book Your {ctaLabel} Appointment With {FirstName}".
export const categories = [
  {
    slug: 'nails',
    index: '01',
    name: 'Nails',
    bookLabel: 'Nails',
    shortName: 'Nails',
    marqueeLabel: 'NAILS',
    ctaLabel: 'Nail',
    description:
      'Healthy nails, always. Our nail artist focuses on nail health first, with hand filing only, no drills, ever, paired with precise, clean technique for sets and fills. When you want to make a statement, she’s also known for her custom nail art and designs, so your healthiest nails can still be your most expressive.',
    homeDescription:
      'Healthy nails first: hand-filed sets and fills, no drills, plus custom nail art for whenever you want to make a statement.',
    priceNote: 'Gel · Gel-X · Builder Gel · Custom Nail Art',
    artist: {
      artistSlug: 'autumn',
      name: 'Autumn de los Reyes',
      businessName: 'Just a Girl and Her Nails',
      logo: '/images/just-a-girl-and-her-nails-logo.jpg',
      photo: '/images/autumn-headshot.jpg',
      bio: 'Health-first nail care, meticulously hand-filed, with a signature eye for custom design.',
      heroSub:
        'Healthy nails first: hand-filed sets and fills, no drills, ever, plus custom nail art for whenever you want to make a statement.',
      specialtyTag: null,
      // PLACEHOLDER — Autumn's full bio is coming separately; swap these in once received.
      bioLead: "Autumn's full bio is coming soon — check back shortly, or say hi on Instagram in the meantime.",
      bioBody: [],
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
    ctaLabel: 'Brow',
    description:
      'Precision Brow Architecture is rooted in the pursuit of balance and symmetry. Every service, from initial shape correction to a full Powder Brow, is a meticulously planned process.',
    homeDescription:
      'Precision Brow Architecture, rooted in the pursuit of balance and symmetry.',
    priceNote: 'Dust Brow · Waxing & Tweezing · Brow Lamination',
    artist: {
      artistSlug: 'simone',
      name: 'Simone Fennell',
      businessName: 'Good Brows',
      logo: '/images/good-brows-logo.png',
      photo: '/images/simone-headshot.jpg',
      bio: 'Precision-first brow architecture, planned around balance and symmetry.',
      heroSub: 'My mission is simple: to sculpt confidence through Good Brows Artistry.',
      specialtyTag: 'Founder & CEO, Master Brow Artist & Permanent Makeup Artist',
      bioLead:
        "I don't just fill in brows, I design them, ensuring the final result enhances your natural bone structure and harmonizes with your features.",
      bioBody: [
        "My unique expertise lies in bridging the worlds of fine art and technical precision. As a Master Brow Artist, Licensed Cosmetologist, Fine Artist, and Permanent Makeup Artist, I've dedicated over a decade to perfecting the architectural principles of all things brows.",
        "My methodology, which I call Precision Brow Architecture, is rooted in the pursuit of balance and symmetry. Every service, from initial shape correction to a full Powder Brow, is a meticulously planned process. My commitment to surpassing the boundaries of traditional training means that when you sit in my chair, you benefit from techniques and standards developed at the industry's cutting edge.",
      ],
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
    ctaLabel: 'Skin Care',
    description:
      'Facials, peels, and treatments using professional-grade products and techniques: real skin care, for real results.',
    homeDescription:
      'Facials and treatments backed by real results, not just a nice smell.',
    priceNote: 'Facials · Peels · Treatments',
    artist: {
      artistSlug: 'anna',
      name: 'Anna Gibbeck',
      businessName: 'A.M. Glow',
      logo: '/images/am-glow-logo.png',
      photo: '/images/anna-headshot.jpg',
      bio: 'Medical-grade treatments focused on results you can actually see.',
      heroSub:
        "Anna is not just a skincare expert, she's a maestro in the art of rejuvenating your skin. With a wealth of experience as a Master Esthetician, Anna brings a fresh perspective to the world of beauté.",
      specialtyTag: 'Master Esthetician & Acne Specialist',
      bioLead:
        'Are you ready for a transformation? Anna specializes in results-driven treatments and skincare, ensuring that every session is a step closer to radiant, flawless skin. Her keen focus on personalized solutions means you get the care your unique beauté deserves.',
      bioBody: [
        "We're always committed to bringing you the best, and partnering with Anna of A.M. Glow is a testament to that commitment. Together, we're ready to elevate your beauté and skincare routine to new heights.",
        "Here's to your radiant beauté! Follow her to learn more about all the amazing things she has in store.",
      ],
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
    ctaLabel: 'Lash',
    description:
      'Natural-looking enhancements, tailored to your eyes and your lifestyle. Our focus is lashes that look like you, only better, never overdone.',
    homeDescription:
      'Natural-looking enhancements, tailored to your eyes and your lifestyle.',
    priceNote: 'Classic · Hybrid · Volume · Fills',
    artist: {
      artistSlug: 'morgan',
      name: 'Morgan Gunter',
      businessName: 'ElevenXI Beauté',
      logo: '/images/elevenxi-beaute-logo.png',
      photo: '/images/morgan-headshot.jpg',
      bio: 'Natural, tailored lash sets designed to fit your eyes and your everyday.',
      heroSub:
        'With over 9 years dedicated to the artistry of lashes, Morgan believes lashes should be an enhancement, not a distraction, prioritizing the health and integrity of your natural lashes above all.',
      specialtyTag: 'Lash Artist Extraordinaire · Founder & Owner, The Beaute Co-op',
      bioLead:
        'Every lash session is a testament to one unwavering commitment: enhancing your natural beauty, one lash at a time.',
      bioBody: [
        "Morgan's expertise lies in crafting customized lash designs that accentuate and define your unique features. Whether it's a subtle enhancement or a bold statement, every set reflects her commitment to quality and style. Her vision extends beyond beauty trends, she sets new standards in lash artistry, with precision and client satisfaction at the center of every appointment.",
        'Beyond the lash chair, Morgan brings a background in tech to everything she builds, including The Beaute Co-op itself. As its founder and owner, she created this space to bring the same intention and design thinking she applies to her lash work to an entire community of beauty professionals, a place where independent artists grow together instead of competing.',
      ],
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
