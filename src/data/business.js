// Central place for business info + per-category artist data.
// PLACEHOLDER values are marked below — swap in real info as it's provided.
// Keep name/address/phone formatting identical to the Google Business Profile
// once that's set up, so local search signals stay consistent.

export const business = {
  name: 'The Beauté Co-op',
  legalName: 'The Beauté Co-op',
  tagline: 'Where beauty and confidence come together',
  // PLACEHOLDER — replace with real street address
  address: {
    street: '123 Main Street, Suite 100',
    city: 'Arlington',
    state: 'VA',
    zip: '22201',
    country: 'US',
  },
  // PLACEHOLDER — replace with real phone (keep format consistent with Google Business Profile)
  phone: '(703) 555-0123',
  phoneHref: 'tel:+17035550123',
  // PLACEHOLDER
  email: 'hello@beautecoop.com',
  // PLACEHOLDER — Square booking hub link (used on Book Now as a top-level fallback)
  squareBookingUrl: 'https://book.squareup.com/appointments/beaute-coop',
  hours: [
    { days: 'Monday', hours: 'By appointment' },
    { days: 'Tuesday – Friday', hours: '9:00 AM – 7:00 PM' },
    { days: 'Saturday', hours: '9:00 AM – 5:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  social: {
    instagram: 'https://instagram.com/beautecoop',
    facebook: 'https://facebook.com/beautecoop',
  },
  // PLACEHOLDER — swap for real embed once available
  mapEmbedUrl:
    'https://www.google.com/maps?q=Arlington,VA&output=embed',
}

// One artist/business per service category.
// booking.type is 'embed' (inline Square widget) or 'link' (opens in new tab).
export const categories = [
  {
    slug: 'nails',
    name: 'Nails',
    shortName: 'Nail Artistry',
    description:
      'Hand-filed, long-lasting nail sets tailored to your style — from clean everyday manicures to detailed nail art.',
    artist: {
      name: 'Autumn',
      businessName: 'Just a Girl and Her Nails',
      logo: null, // PLACEHOLDER — swap in artist's business logo file
      photo: null, // PLACEHOLDER — swap in artist headshot
      bio: 'Placeholder bio — Autumn\'s background, specialties, and approach to nail artistry go here.',
      instagram: 'https://instagram.com/justagirlandhernails',
    },
    booking: {
      type: 'link',
      url: 'https://book.squareup.com/appointments/just-a-girl-and-her-nails',
      embedCode: null,
    },
  },
  {
    slug: 'lash-extensions',
    name: 'Lash Extensions',
    shortName: 'Lash Extensions',
    description:
      'Custom lash sets designed to enhance your natural eye shape, from subtle everyday wear to full glam.',
    artist: {
      name: 'Placeholder Artist',
      businessName: 'ElevenXI Beauté',
      logo: null,
      photo: null,
      bio: 'Placeholder bio — ElevenXI Beauté\'s background, specialties, and lash philosophy go here.',
      instagram: 'https://instagram.com/elevenxibeaute',
    },
    booking: {
      type: 'link',
      url: 'https://book.squareup.com/appointments/elevenxi-beaute',
      embedCode: null,
    },
  },
  {
    slug: 'brow-design',
    name: 'Brow Design',
    shortName: 'Brow Design',
    description:
      'Precision brow shaping and tinting to frame your face, from natural cleanups to bold, defined arches.',
    artist: {
      name: 'Placeholder Artist',
      businessName: 'Good Brows',
      logo: null,
      photo: null,
      bio: 'Placeholder bio — Good Brows\' background, specialties, and brow philosophy go here.',
      instagram: 'https://instagram.com/goodbrows',
    },
    booking: {
      type: 'link',
      url: 'https://book.squareup.com/appointments/good-brows',
      embedCode: null,
    },
  },
  {
    slug: 'skincare',
    name: 'Medical-Grade Skin Care',
    shortName: 'Skin Care',
    description:
      'Medical-grade facials and treatments customized to your skin\'s needs, backed by clinical-strength products.',
    artist: {
      name: 'Placeholder Artist',
      businessName: 'A.M. Glow',
      logo: null,
      photo: null,
      bio: 'Placeholder bio — A.M. Glow\'s background, specialties, and skincare philosophy go here.',
      instagram: 'https://instagram.com/amglow',
    },
    booking: {
      type: 'link',
      url: 'https://book.squareup.com/appointments/am-glow',
      embedCode: null,
    },
  },
]

export const comingSoon = [
  { slug: 'waxing', name: 'Waxing' },
  { slug: 'massage', name: 'Massage' },
]
