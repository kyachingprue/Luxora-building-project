const u = id =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`
export const IMG = {
  hero: u('photo-1486406146926-c627a92ad1ab'),
  a: u('photo-1511818966892-d7d671e672a2'),
  b: u('photo-1487958449943-2429e8be8625'),
  c: u('photo-1600585154340-be6161a56a0c'),
  d: u('photo-1545324418-cc1a3fa10c00')
}
export const projects = [
  {
    title: 'Modern Cultural Center',
    tag: 'Public Building',
    cat: 'Architecture',
    img: IMG.a
  },
  {
    title: 'Art & Innovation Hub',
    tag: 'Cultural',
    cat: 'Architecture',
    img: IMG.b
  },
  {
    title: 'Luxury Residence',
    tag: 'Residential',
    cat: 'Interior',
    img: IMG.c
  },
  {
    title: 'Business Tower',
    tag: 'Commercial',
    cat: 'Construction',
    img: IMG.d
  },
  {
    title: 'Glass Pavilion',
    tag: 'Commercial',
    cat: 'Construction',
    img: IMG.hero
  },
  { title: 'Riverside Homes', tag: 'Residential', cat: 'Interior', img: IMG.c }
]
export const stats = [
  ['500+', 'Projects Completed'],
  ['15+', 'Years of Experience'],
  ['100%', 'Client Satisfaction'],
  ['50+', 'Expert Team Members']
]
export const services = [
  [
    'Architectural Design',
    'Concept to construction drawings, shaped around how people live and work.'
  ],
  [
    'Construction Services',
    'Site management, quality control and delivery on a fixed schedule.'
  ],
  [
    'Interior Design',
    "Layouts, materials and lighting that match the building's character."
  ],
  [
    'Project Management',
    'One point of contact for budget, timeline and contractors.'
  ],
  [
    'Renovation & Restoration',
    'Upgrade structures while keeping what makes them valuable.'
  ],
  [
    'Sustainable Building',
    'Energy-efficient design, low-impact materials, long-term savings.'
  ]
]
export const reviews = [
  [
    'Sarah Mitchell',
    'Property Developer',
    'Outstanding quality and professional team. Our project was delivered on time and beyond expectations.'
  ],
  [
    'James Carter',
    'Business Owner',
    'Antixor turned our vision into a stunning space. Their attention to detail and commitment to quality is unmatched.'
  ],
  [
    'Emily Watson',
    'Architect',
    'A reliable partner for sustainable and innovative building solutions. Highly recommended.'
  ]
]
