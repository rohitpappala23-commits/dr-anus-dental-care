/**
 * Treatment data — single source of truth for all 14 dental treatments
 * offered at Dr. Anu's Dental Care, PM Palem, Visakhapatnam.
 *
 * Consumed by:
 *  - ServicesSection   (card grid with filter pills)
 *  - TreatmentDetailModal (full detail drawer)
 *  - AppointmentModal  (treatment dropdown options)
 */

/** Five patient-friendly cluster labels — must stay in sync with SERVICE_MENU. */
export type TreatmentCategory =
  | "Cosmetic & Smile"
  | "Orthodontics"
  | "Restorative & Implants"
  | "Surgery & Gums"
  | "Pediatric & Preventive";

/** Full typed shape for one treatment entry. */
export interface TreatmentItem {
  /** Unique slug — matches the href in SERVICE_MENU (without /services/ prefix). */
  slug: string;
  /** Display name shown on cards and in the modal header. */
  name: string;
  /** Parent cluster — drives filter pill logic and the category badge. */
  category: TreatmentCategory;
  /** Absolute Unsplash URL used as the card cover and modal hero image. */
  imageUrl: string;
  /** Alt text optimised for local SEO. */
  imageAlt: string;
  /** One-sentence patient-friendly summary shown on the card. */
  summary: string;
  /** Two or three sentence "why you need this" overview shown in the modal. */
  overview: string;
  /** Approximate chair-time (e.g. "45 – 60 minutes"). */
  duration: string;
  /** Anaesthesia type used (e.g. "Local anaesthesia", "None"). */
  anaesthesia: string;
  /** Three to five concise benefit phrases. */
  benefits: string[];
  /** One or two sentences about what to expect post-treatment. */
  recovery: string;
}

const U = "https://images.unsplash.com";

/** All 14 treatments offered at the clinic, categorised into 5 clusters. */
export const TREATMENTS: TreatmentItem[] = [
  // ── Cosmetic & Smile ──────────────────────────────────────────────────────
  {
    slug: "teeth-cleaning",
    name: "Teeth Cleaning & Polishing",
    category: "Pediatric & Preventive",
    imageUrl: `${U}/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Ultrasonic teeth cleaning and polishing at dental clinic PM Palem Visakhapatnam",
    summary:
      "Ultrasonic scaling removes stubborn tartar and stains; polishing restores the natural shine of your enamel.",
    overview:
      "Professional cleaning goes far beyond a normal brush — our ultrasonic scaler breaks up calculus deposits that form below the gumline, which ordinary toothbrushing simply cannot reach. After scaling, a fine-grain polishing paste smooths the enamel surface, making it harder for new plaque to grip. Recommended every 6 months for all patients.",
    duration: "30 – 45 minutes",
    anaesthesia: "None",
    benefits: [
      "Prevents gum disease and tooth decay",
      "Removes coffee, tea, and tobacco stains",
      "Freshens breath immediately",
      "Reveals the natural whiteness of your teeth",
    ],
    recovery:
      "Mild sensitivity for 24–48 hours is normal. Avoid very hot or cold drinks the same day. Resume normal eating immediately.",
  },
  {
    slug: "smile-designing",
    name: "Smile Designing",
    category: "Cosmetic & Smile",
    imageUrl: `${U}/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Digital smile design consultation at Dr. Anu's Dental Care Visakhapatnam",
    summary:
      "A personalised, digitally planned aesthetic makeover that transforms your smile using veneers, whitening, bonding, or contouring.",
    overview:
      "Smile designing begins with a digital smile analysis — we photograph your teeth, lips, and facial proportions and use design software to preview the final result before any work begins. The treatment plan combines the right cosmetic procedures (veneers, whitening, gum contouring, bonding) in the correct sequence to achieve natural, proportionate results tailored to your face.",
    duration: "Consultation: 30 min · Treatment: 1–3 sessions",
    anaesthesia: "Local (if veneers/bonding involved)",
    benefits: [
      "Fully customised to your facial features",
      "Preview results digitally before treatment",
      "Combination of minimally invasive techniques",
      "Long-lasting results (8–15 years with care)",
    ],
    recovery:
      "Post-treatment sensitivity is minimal. Avoid staining foods for the first 48 hours after whitening is completed.",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic & Smile",
    imageUrl: `${U}/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Laser LED teeth whitening treatment Visakhapatnam dental clinic",
    summary:
      "In-office laser / LED whitening lifts deep stains by 4–8 shades in a single session.",
    overview:
      "We use a high-concentration peroxide gel activated by LED light to break apart intrinsic and extrinsic staining molecules. A single 60-minute in-office session can lighten teeth by 4–8 shades. Take-home bleaching kits with custom-fitted trays are also provided for gradual maintenance between visits.",
    duration: "60 – 90 minutes (in-office)",
    anaesthesia: "None",
    benefits: [
      "Immediate, dramatic shade improvement",
      "Safe with professional-grade materials",
      "Custom-fit take-home trays for maintenance",
      "Boosts confidence and appearance",
    ],
    recovery:
      "Avoid coloured foods and drinks (coffee, tea, red wine, curries) for 48 hours. Sensitivity usually subsides within 24 hours.",
  },
  {
    slug: "tooth-jewellery",
    name: "Tooth Jewellery",
    category: "Cosmetic & Smile",
    imageUrl: `${U}/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Non-invasive dental crystal tooth jewellery cosmetic dentistry Visakhapatnam",
    summary:
      "Non-invasive, reversible dental crystals and gems bonded painlessly to your tooth surface for a sparkling accent.",
    overview:
      "Tooth jewellery is bonded to the enamel surface using dental-grade adhesive — no drilling, no enamel removal. The gem (Swarovski crystal or coloured stone) is placed in minutes and can be removed at any time without any damage. It's a fun, reversible cosmetic enhancement popular with teens and young adults.",
    duration: "10 – 15 minutes",
    anaesthesia: "None",
    benefits: [
      "Completely non-invasive and reversible",
      "No drilling or enamel removal",
      "Wide range of crystal colours and styles",
      "Lasts 6 months to several years",
    ],
    recovery: "No downtime. Avoid hard biting near the gem for the first 24 hours while the adhesive fully cures.",
  },
  {
    slug: "cosmetic-dental-treatment",
    name: "Cosmetic Dental Treatment & Veneers",
    category: "Cosmetic & Smile",
    imageUrl: `${U}/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Ceramic porcelain veneers cosmetic bonding dental contouring Visakhapatnam",
    summary:
      "Ceramic veneers, composite bonding, and tooth contouring to correct chips, gaps, discolouration, and shape.",
    overview:
      "Cosmetic dentistry covers a spectrum of treatments — from a simple composite bonding repair (completed in one visit, no anaesthesia) to ultra-thin porcelain veneers that are custom-fabricated in a lab and permanently bonded to the front face of teeth. Dr. Anusha recommends the least invasive option that achieves the desired result.",
    duration: "1–2 visits (bonding: 45 min; veneers: 2 × 60 min)",
    anaesthesia: "Minimal local for veneers; none for bonding",
    benefits: [
      "Conceals chips, cracks, gaps, and stains",
      "Natural-looking ceramic shade matching",
      "Minimal tooth reduction required for veneers",
      "Instant results with composite bonding",
    ],
    recovery:
      "Mild sensitivity for 24–48 hours after veneer placement. Full normal function resumes immediately.",
  },

  // ── Orthodontics ──────────────────────────────────────────────────────────
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    category: "Orthodontics",
    imageUrl: `${U}/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Invisible clear aligners Invisalign-style orthodontic treatment Visakhapatnam",
    summary:
      "Invisible, removable custom aligners straighten teeth discreetly — no metal wires, no food restrictions.",
    overview:
      "Clear aligners are a series of precisely engineered, see-through plastic trays that gently shift teeth into alignment over 6–18 months. Each tray is worn for approximately 2 weeks before advancing to the next in the series. Because they are removable, you can eat, brush, and floss completely normally — no dietary restrictions or hygiene compromises.",
    duration: "Total treatment: 6–18 months",
    anaesthesia: "None",
    benefits: [
      "Nearly invisible during wear",
      "Removable for eating and brushing",
      "No metal components or sharp wires",
      "Fewer clinic visits than traditional braces",
      "Comfortable smooth plastic trays",
    ],
    recovery:
      "Mild pressure and slight lisp for 1–2 days with each new tray. No special recovery needed.",
  },
  {
    slug: "braces",
    name: "Braces (Orthodontics)",
    category: "Orthodontics",
    imageUrl: `${U}/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Metal ceramic self-ligating braces orthodontic treatment PM Palem Visakhapatnam",
    summary:
      "Metal and ceramic self-ligating brackets for precise, reliable teeth alignment for teens and adults.",
    overview:
      "Traditional braces use metal or ceramic brackets bonded to each tooth and connected by a wire that is progressively tightened to guide teeth into the correct position. Ceramic brackets are tooth-coloured for a less conspicuous look. Self-ligating brackets reduce friction and may shorten treatment time. Regular monthly adjustment visits at the clinic are required.",
    duration: "12 – 24 months",
    anaesthesia: "None",
    benefits: [
      "Effective for complex misalignment cases",
      "Ceramic option for a less visible look",
      "Predictable, well-established treatment",
      "Suitable from age 10 upwards",
    ],
    recovery:
      "Soreness for 3–5 days after each monthly adjustment is normal. Soft foods are recommended during that window.",
  },

  // ── Restorative & Implants ────────────────────────────────────────────────
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Restorative & Implants",
    imageUrl: `${U}/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Titanium dental implant surgery permanent tooth replacement Visakhapatnam",
    summary:
      "Titanium screw implants permanently replace missing teeth — feel, look, and function exactly like natural teeth.",
    overview:
      "A dental implant is a titanium post surgically placed into the jawbone where it fuses with bone over 3–6 months (osseointegration). Once integrated, a custom-made ceramic crown is attached on top, giving you a tooth that looks, feels, and functions exactly like a natural one. Implants also prevent the bone resorption that occurs when a tooth root is missing.",
    duration: "Surgery: 1–2 hours · Crown placement: 3–6 months later",
    anaesthesia: "Local anaesthesia (conscious, comfortable throughout)",
    benefits: [
      "Permanent — lasts a lifetime with care",
      "No adjacent teeth need to be filed down",
      "Prevents jawbone shrinkage",
      "Bite strength equal to natural teeth",
      "No adhesives or removable parts",
    ],
    recovery:
      "Swelling and mild discomfort for 3–5 days after surgery. Soft diet for 1–2 weeks. Full healing in 3–6 months.",
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment (RCT)",
    category: "Restorative & Implants",
    imageUrl: `${U}/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Single sitting painless root canal treatment RCT dental clinic Visakhapatnam",
    summary:
      "Single-sitting painless RCT removes infected pulp and seals the canal — saves your natural tooth from extraction.",
    overview:
      "Root canal treatment is performed when the nerve tissue (pulp) inside a tooth is infected or inflamed due to deep decay, trauma, or a cracked tooth. Using rotary files under local anaesthesia, the infected pulp is removed, the canal cleaned and shaped, then sealed with an inert material. A crown is placed afterwards to protect the treated tooth. Modern single-sitting RCT is nearly painless.",
    duration: "60 – 90 minutes (single sitting)",
    anaesthesia: "Local anaesthesia",
    benefits: [
      "Saves your natural tooth — no extraction",
      "Eliminates infection and toothache",
      "Single sitting — done in one visit",
      "No pain during the procedure",
      "Crown protection for long-term durability",
    ],
    recovery:
      "Mild soreness for 2–3 days after treatment. Pain relief medications are prescribed. Avoid hard foods on that side until the crown is placed.",
  },
  {
    slug: "dentures",
    name: "Removable & Fixed Dentures",
    category: "Restorative & Implants",
    imageUrl: `${U}/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Complete partial removable fixed dentures tooth replacement Visakhapatnam",
    summary:
      "Complete and partial dentures — removable, flexible, or fixed — for full-arch or multi-tooth replacement.",
    overview:
      "Dentures replace missing teeth when multiple or all teeth are absent. Complete dentures replace the entire upper or lower arch; partial dentures fill gaps when some natural teeth remain. Flexible valplast partials offer a more comfortable, metallic-free alternative. Fixed dentures (bridges) are permanently cemented and do not need removal. Dr. Anusha selects the type best suited to your bone density and lifestyle.",
    duration: "3–5 visits over 2–4 weeks",
    anaesthesia: "None (removable); local (for fixed bridge preparation)",
    benefits: [
      "Restore full chewing and speaking ability",
      "Natural appearance — tooth-coloured acrylic",
      "Cost-effective multi-tooth solution",
      "Flexible partials — no metal clasps",
    ],
    recovery:
      "Adjustment period of 2–4 weeks for comfort and speech. Minor sore spots are normal and addressed at follow-up visits.",
  },
  {
    slug: "fillings",
    name: "Tooth Fillings",
    category: "Restorative & Implants",
    imageUrl: `${U}/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Tooth-coloured composite resin filling decay restoration dental clinic Visakhapatnam",
    summary:
      "Tooth-coloured composite fillings restore decayed or chipped teeth invisibly — no silver amalgam.",
    overview:
      "Composite resin (tooth-coloured) fillings are bonded directly to the tooth after the decayed portion is removed, restoring the tooth's original shape and function. Unlike old amalgam fillings, composites require less tooth removal, look natural, and do not contain mercury. They are suitable for both front and back teeth.",
    duration: "30 – 60 minutes",
    anaesthesia: "Local anaesthesia",
    benefits: [
      "Matches natural tooth colour exactly",
      "Requires minimal tooth removal",
      "Mercury-free, biocompatible material",
      "Completed in a single visit",
      "Strengthens the remaining tooth structure",
    ],
    recovery:
      "Mild sensitivity to cold for 1–2 weeks is common. Avoid very hard foods for 24 hours while the filling fully cures.",
  },

  // ── Surgery & Gums ────────────────────────────────────────────────────────
  {
    slug: "oral-surgery",
    name: "Oral Surgery (Major / Minor)",
    category: "Surgery & Gums",
    imageUrl: `${U}/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Impacted wisdom tooth extraction oral surgery minor major Visakhapatnam",
    summary:
      "Impacted wisdom tooth removal, cyst removal, jaw trauma care — performed under safe, precise local anaesthesia.",
    overview:
      "Minor oral surgery covers straightforward extractions and soft-tissue procedures; major oral surgery includes impacted wisdom teeth (partially or fully embedded in the jaw), cyst enucleation, alveoloplasty, and jaw-related trauma management. All procedures are performed under local anaesthesia with careful haemostasis and suturing to ensure fast, uneventful healing.",
    duration: "30 – 90 minutes depending on complexity",
    anaesthesia: "Local anaesthesia (IV sedation option available on request)",
    benefits: [
      "Eliminates source of infection or crowding",
      "Precision cutting with minimal trauma",
      "Hospital-grade sterilised instruments",
      "Sutures and post-op care included",
    ],
    recovery:
      "Swelling peaks at 48–72 hours, then resolves by day 5–7. Soft diet for 3–5 days. Prescribed antibiotics and pain relief must be completed in full.",
  },
  {
    slug: "gum-surgeries",
    name: "Gum Problems & Surgeries",
    category: "Surgery & Gums",
    imageUrl: `${U}/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Gum disease flap surgery periodontal treatment deep curettage Visakhapatnam",
    summary:
      "Deep curettage, flap surgery, and gum contouring for bleeding gums, periodontitis, and receding gumlines.",
    overview:
      "Gum disease (periodontitis) is one of the leading causes of adult tooth loss and is also linked to heart disease and diabetes. When regular cleaning is insufficient, deep curettage (root planing under local anaesthesia) removes bacteria from below the gumline. Advanced cases may require flap surgery to access deep pockets and regenerate lost bone. Gum contouring reshapes uneven or excessive gum tissue for aesthetic improvement.",
    duration: "45 – 90 minutes per quadrant",
    anaesthesia: "Local anaesthesia",
    benefits: [
      "Stops progression of gum disease",
      "Reduces bleeding, swelling, and bad breath",
      "Saves teeth at risk of being lost",
      "Improves smile aesthetics with contouring",
    ],
    recovery:
      "Soreness and swelling for 3–5 days post-surgery. Chlorhexidine mouthwash and antibiotics are prescribed. Avoid spicy or hard foods for 1 week.",
  },

  // ── Pediatric & Preventive ────────────────────────────────────────────────
  {
    slug: "child-dentistry",
    name: "Child Dental Treatment",
    category: "Pediatric & Preventive",
    imageUrl: `${U}/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80`,
    imageAlt: "Pediatric child dental treatment fluoride sealants gentle kids dentist Visakhapatnam",
    summary:
      "Gentle, fear-free dental care for children — fluoride treatments, sealants, and milk-tooth restorations.",
    overview:
      "Paediatric dental care at Dr. Anu's Dental Care focuses on making each visit relaxed and positive for your child. Treatments include fluoride application (to strengthen enamel), pit and fissure sealants (to seal the grooves where decay starts), milk-tooth fillings, gentle pulpotomies (nerve treatment for primary teeth), and space maintainers if a milk tooth is lost early.",
    duration: "20 – 45 minutes",
    anaesthesia: "Topical + local (only when needed, child-dose adjusted)",
    benefits: [
      "Fear-free, child-friendly environment",
      "Prevents cavities early with fluoride and sealants",
      "Parents welcome in the operatory",
      "Builds positive dental habits for life",
      "Space maintainers prevent future crowding",
    ],
    recovery:
      "No special recovery for preventive visits. After any filling, avoid hard or sticky foods for 1 hour. Mild sensitivity passes within 24 hours.",
  },
];

/** Filter-pill labels in display order. "All" is always first. */
export const FILTER_LABELS: ["All", ...TreatmentCategory[]] = [
  "All",
  "Cosmetic & Smile",
  "Orthodontics",
  "Restorative & Implants",
  "Surgery & Gums",
  "Pediatric & Preventive",
];
