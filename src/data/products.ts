export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specifications: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Dental Mouth Mirror',
    category: 'Examination Instruments',
    price: 12.99,
    image: '/dental1.jpg',
    description: 'Premium stainless steel dental mouth mirror for optimal visibility during examinations.',
    specifications: ['Stainless steel construction', 'Autoclavable', 'Rhodium coated']
  },
  {
    id: 2,
    name: 'Periodontal Probe',
    category: 'Examination Instruments',
    price: 18.99,
    image: '/dental2.jpg',
    description: 'Precision periodontal probe for measuring pocket depths and assessing gum health.',
    specifications: ['Color-coded markings', 'Stainless steel', 'Single-ended design']
  },
  {
    id: 3,
    name: 'Dental Explorer',
    category: 'Examination Instruments',
    price: 14.99,
    image: '/dental3.jpg',
    description: 'Fine dental explorer for detecting caries and calculus deposits.',
    specifications: ['Sharp tip design', 'Autoclavable', 'Ergonomic handle']
  },
  {
    id: 4,
    name: 'Scaler & Curette Set',
    category: 'Scaling Instruments',
    price: 89.99,
    image: '/dental4.jpg',
    description: 'Professional scaler and curette set for supragingival and subgingival scaling.',
    specifications: ['Stainless steel', 'Hollow handle design', 'Complete set of 7']
  },
  {
    id: 5,
    name: 'Dental Forceps',
    category: 'Extraction Instruments',
    price: 65.99,
    image: '/dental5.jpg',
    description: 'American pattern dental extraction forceps for efficient tooth extractions.',
    specifications: ['Forged stainless steel', 'Anatomical design', 'Non-slip grip']
  },
  {
    id: 6,
    name: 'Amalgam Separator',
    category: 'Restorative Instruments',
    price: 45.99,
    image: '/dental6.jpg',
    description: 'ISO-compliant amalgam separator for mercury waste management.',
    specifications: ['99.9% mercury removal', 'ISO 11143 certified', 'Easy installation']
  },
  {
    id: 7,
    name: 'Ultrasonic Scaler',
    category: 'Scaling Instruments',
    price: 299.99,
    image: '/dental7.jpg',
    description: 'Piezoelectric ultrasonic scaler for efficient calculus removal.',
    specifications: ['25kHz-30kHz frequency', 'LED handpiece', 'Multiple tip options']
  },
  {
    id: 8,
    name: 'Dental Handpiece',
    category: 'Rotary Instruments',
    price: 189.99,
    image: '/dental1.jpg',
    description: 'High-speed dental handpiece for precision cutting and polishing.',
    specifications: ['360,000 RPM', 'Ceramic bearings', 'Push-button chuck']
  },
  {
    id: 9,
    name: 'Sterilization Cassette',
    category: 'Sterilization Equipment',
    price: 34.99,
    image: '/dental2.jpg',
    description: 'Autoclavable sterilization cassette for organizing dental instruments.',
    specifications: ['Medical grade stainless steel', 'Secure locking mechanism', 'Stackable design']
  },
  {
    id: 10,
    name: 'Dental Suction Tips',
    category: 'Suction & Irrigation',
    price: 8.99,
    image: '/dental3.jpg',
    description: 'Disposable suction tips for saliva ejection and fluid removal.',
    specifications: ['Transparent design', 'Smooth edges', 'Box of 100']
  },
  {
    id: 11,
    name: 'Composite Placement Instrument',
    category: 'Restorative Instruments',
    price: 22.99,
    image: '/dental4.jpg',
    description: 'Double-ended composite placement instrument for precise restorative work.',
    specifications: ['Titanium coated', 'Non-stick surface', 'Ergonomic design']
  },
  {
    id: 12,
    name: 'Intraoral Camera',
    category: 'Diagnostic Equipment',
    price: 399.99,
    image: '/dental5.jpg',
    description: 'High-resolution intraoral camera for patient education and documentation.',
    specifications: ['5MP CMOS sensor', 'LED illumination', 'USB connectivity']
  },
  {
    id: 13,
    name: 'Dental X-Ray Sensor',
    category: 'Diagnostic Equipment',
    price: 899.99,
    image: '/dental6.jpg',
    description: 'Digital X-ray sensor for high-quality dental imaging.',
    specifications: ['High resolution', 'Wireless connectivity', 'Durable design']
  },
  {
    id: 14,
    name: 'Dental Light Cure',
    category: 'Restorative Instruments',
    price: 149.99,
    image: '/dental7.jpg',
    description: 'LED light curing unit for composite resin polymerization.',
    specifications: ['LED technology', 'Multiple modes', 'Cordless design']
  },
  {
    id: 15,
    name: 'Extraction Forceps Set',
    category: 'Extraction Instruments',
    price: 199.99,
    image: '/dental1.jpg',
    description: 'Complete set of extraction forceps for various tooth extractions.',
    specifications: ['Premium stainless steel', 'Anatomical design', 'Complete set']
  },
  {
    id: 16,
    name: 'Elevators Set',
    category: 'Extraction Instruments',
    price: 89.99,
    image: '/dental2.jpg',
    description: 'Dental elevators for atraumatic tooth luxation.',
    specifications: ['Straight and curved designs', 'Sharp tips', 'Autoclavable']
  },
  {
    id: 17,
    name: 'Periotome Set',
    category: 'Extraction Instruments',
    price: 129.99,
    image: '/dental3.jpg',
    description: 'Precision periotomes for minimally invasive extractions.',
    specifications: ['Thin blades', 'Multiple sizes', 'Ergonomic handles']
  },
  {
    id: 18,
    name: 'Polishing Kit',
    category: 'Restorative Instruments',
    price: 79.99,
    image: '/dental4.jpg',
    description: 'Complete polishing kit for composite and acrylic restorations.',
    specifications: ['Multiple grits', 'Rubber cups and points', 'Complete system']
  },
  {
    id: 19,
    name: 'Matrix Bands',
    category: 'Restorative Instruments',
    price: 24.99,
    image: '/dental5.jpg',
    description: 'Tofflemire matrix bands for precise restorations.',
    specifications: ['Stainless steel', 'Various sizes', 'Pack of 100']
  },
  {
    id: 20,
    name: 'Wedge Set',
    category: 'Restorative Instruments',
    price: 19.99,
    image: '/dental6.jpg',
    description: 'Plastic wedges for matrix retention and isolation.',
    specifications: ['Anatomical shapes', 'Color coded', 'Pack of 100']
  },
  {
    id: 21,
    name: 'Air Water Syringe',
    category: 'Suction & Irrigation',
    price: 149.99,
    image: '/dental7.jpg',
    description: 'Triple function air/water syringe for dental procedures.',
    specifications: ['Air, water, and mist functions', 'Autoclavable tips', 'Ergonomic design']
  },
  {
    id: 22,
    name: 'Saliva Ejector',
    category: 'Suction & Irrigation',
    price: 12.99,
    image: '/dental1.jpg',
    description: 'Disposable saliva ejectors for patient comfort.',
    specifications: ['Flexible design', 'Smooth edges', 'Box of 100']
  },
  {
    id: 23,
    name: 'High Volume Evacuator',
    category: 'Suction & Irrigation',
    price: 89.99,
    image: '/dental2.jpg',
    description: 'High-volume evacuator tips for efficient fluid removal.',
    specifications: ['Large bore design', 'Autoclavable', 'Pack of 25']
  },
  {
    id: 24,
    name: 'Ultrasonic Cleaner',
    category: 'Sterilization Equipment',
    price: 299.99,
    image: '/dental3.jpg',
    description: 'Digital ultrasonic cleaner for instrument sterilization.',
    specifications: ['Digital timer', 'Heater function', 'Large capacity']
  },
  {
    id: 25,
    name: 'Autoclave Sterilizer',
    category: 'Sterilization Equipment',
    price: 1299.99,
    image: '/dental4.jpg',
    description: 'Class B autoclave for complete sterilization cycles.',
    specifications: ['Pre-vacuum technology', 'LCD display', 'Multiple programs']
  },
  {
    id: 26,
    name: 'Sterilization Pouches',
    category: 'Sterilization Equipment',
    price: 29.99,
    image: '/dental5.jpg',
    description: 'Self-sealing sterilization pouches for instrument packaging.',
    specifications: ['Medical grade paper', 'Blue film', 'Various sizes']
  },
  {
    id: 27,
    name: 'Contra Angle Handpiece',
    category: 'Rotary Instruments',
    price: 249.99,
    image: '/dental6.jpg',
    description: 'Low-speed contra-angle handpiece for polishing and cutting.',
    specifications: ['1:1 ratio', 'Latch type', 'Autoclavable']
  },
  {
    id: 28,
    name: 'Straight Handpiece',
    category: 'Rotary Instruments',
    price: 199.99,
    image: '/dental7.jpg',
    description: 'Straight nosecone handpiece for laboratory procedures.',
    specifications: ['Low speed', 'Straight design', 'Compatible with attachments']
  },
  {
    id: 29,
    name: 'Dental Air Compressor',
    category: 'Rotary Instruments',
    price: 599.99,
    image: '/dental1.jpg',
    description: 'Oil-free air compressor for dental chair systems.',
    specifications: ['Oil-free operation', 'Quiet performance', 'Auto drain']
  },
  {
    id: 30,
    name: 'Scaling Tips',
    category: 'Scaling Instruments',
    price: 49.99,
    image: '/dental2.jpg',
    description: 'Ultrasonic scaling tips for periodontal treatment.',
    specifications: ['G1-G6 tips', 'Durable material', 'Autoclavable']
  },
  {
    id: 31,
    name: 'Curette Set',
    category: 'Scaling Instruments',
    price: 119.99,
    image: '/dental3.jpg',
    description: 'Universal curette set for subgingival scaling.',
    specifications: ['Gracey design', 'Stainless steel', 'Complete set']
  },
  {
    id: 32,
    name: 'Polishing Brush',
    category: 'Scaling Instruments',
    price: 15.99,
    image: '/dental4.jpg',
    description: 'Prophy brush for dental polishing procedures.',
    specifications: ['Soft nylon bristles', 'Latex-free', 'Pack of 100']
  }
];
