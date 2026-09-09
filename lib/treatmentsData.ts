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

/** All 14 treatments offered at the clinic, categorised into 5 clusters. */
export const TREATMENTS: TreatmentItem[] = [
  {
    slug: "child-dentistry",
    name: "Child Dental Treatment",
    category: "Pediatric & Preventive",
    imageUrl: "/services/child-dental-treatment.jpg",
    imageAlt: "Child Dental Treatment",
    summary:
      "Gentle, fear-free pediatric dental care focused on building healthy lifelong oral hygiene habits.",
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
  {
    slug: "teeth-cleaning",
    name: "Teeth Cleaning & Polishing",
    category: "Pediatric & Preventive",
    imageUrl: "/services/teeth-cleaning-polishing.jpg",
    imageAlt: "Teeth Cleaning & Polishing",
    summary:
      "Ultrasonic scaling removes stubborn tartar and stains; polishing restores natural enamel shine.",
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
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Restorative & Implants",
    imageUrl: "/services/dental-implants.jpg",
    imageAlt: "Dental Implants",
    summary:
      "Permanent, natural-looking tooth replacement that restores full chewing strength and facial aesthetics.",
    overview:
      "A dental implant is a titanium post surgically placed into the jawbone where it fuses with bone over 3–6 months (osseointegration). Once integrated, a custom-made ceramic crown is attached on top, giving you a tooth that looks, feels, and functions exactly like a natural one. Implants also prevent jawbone resorption.",
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
    imageUrl: "/services/root-canal-treatment.jpg",
    imageAlt: "Root Canal Treatment (RCT)",
    summary:
      "Single-sitting, pain-free infection elimination that saves your natural tooth structure.",
    overview:
      "Root canal treatment is performed when the nerve tissue (pulp) inside a tooth is infected or inflamed due to deep decay, trauma, or a cracked tooth. Using rotary files under local anaesthesia, the infected pulp is removed, the canal cleaned and shaped, then sealed with an inert material. A crown is placed afterwards for protection.",
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
    slug: "braces",
    name: "Braces and Aligners",
    category: "Orthodontics",
    imageUrl: "/services/braces.jpg",
    imageAlt: "Braces and Aligners",
    summary:
      "Combine traditional/ceramic braces and clear invisible aligners for precision smile alignment at any age.",
    overview:
      "Our orthodontic solutions combine traditional/ceramic braces and clear invisible aligners tailored to your lifestyle. Whether you choose discreet clear trays or self-ligating aesthetic brackets, we deliver precise tooth movement and bite alignment for teens and adults.",
    duration: "Total treatment: 6–24 months",
    anaesthesia: "None",
    benefits: [
      "Nearly invisible aligner options",
      "Ceramic and metal brace choices",
      "Precision bite and smile alignment",
      "Suitable for teens and adults",
      "Fewer clinic visits with digital planning",
    ],
    recovery:
      "Mild pressure for 2–3 days after initial fitting or tray change. Soft foods recommended during initial adjustment.",
  },
  {
    slug: "dentures",
    name: "Removable & Fixed Dentures",
    category: "Restorative & Implants",
    imageUrl: "/services/dentures.jpg",
    imageAlt: "Removable & Fixed Dentures",
    summary:
      "Custom-fitted prosthetic solutions that restore chewing ability, bite support, and daily comfort.",
    overview:
      "Dentures replace missing teeth when multiple or all teeth are absent. Complete dentures replace the entire upper or lower arch; partial dentures fill gaps when some natural teeth remain. Flexible valplast partials offer a comfortable, metallic-free alternative, while fixed bridges provide permanent stability.",
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
    slug: "smile-designing",
    name: "Smile Designing",
    category: "Cosmetic & Smile",
    imageUrl: "/services/smile-designing.jpg",
    imageAlt: "Smile Designing",
    summary:
      "Digitally planned aesthetic smile makeovers combining veneers, whitening, and artistic re-contouring.",
    overview:
      "Smile designing begins with a digital smile analysis — we photograph your teeth, lips, and facial proportions and use design software to preview the final result before any work begins. The treatment plan combines veneers, whitening, gum contouring, and bonding for natural, proportionate results.",
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
    imageUrl: "/services/teeth-whitening.jpg",
    imageAlt: "Teeth Whitening",
    summary:
      "In-office laser and LED teeth whitening lifting deep stains by multiple shades safely and quickly.",
    overview:
      "We use a high-concentration peroxide gel activated by LED light to break apart intrinsic and extrinsic staining molecules. A single 60-minute in-office session can lighten teeth by 4–8 shades quickly and safely.",
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
    slug: "fillings",
    name: "Tooth Fillings",
    category: "Restorative & Implants",
    imageUrl: "/services/tooth-fillings.jpg",
    imageAlt: "Tooth Fillings",
    summary:
      "Tooth-colored composite resin fillings that invisibly restore cavities with long-lasting bonding.",
    overview:
      "Composite resin (tooth-coloured) fillings are bonded directly to the tooth after the decayed portion is removed, restoring the tooth's original shape and function. Unlike old amalgam fillings, composites look completely natural and bond strongly.",
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
  {
    slug: "oral-surgery",
    name: "Oral Surgery (Major / Minor)",
    category: "Surgery & Gums",
    imageUrl: "/services/oral-surgery.jpg",
    imageAlt: "Oral Surgery (Major / Minor)",
    summary:
      "Wisdom tooth extractions and minor surgical interventions performed under sterile, gentle anesthesia.",
    overview:
      "Minor oral surgery covers extractions and soft-tissue procedures; major oral surgery includes impacted wisdom teeth, cyst enucleation, and jaw-related procedures. All procedures are performed under local anaesthesia with careful haemostasis and suturing.",
    duration: "30 – 90 minutes depending on complexity",
    anaesthesia: "Local anaesthesia",
    benefits: [
      "Eliminates source of infection or crowding",
      "Precision procedure with minimal trauma",
      "Hospital-grade sterilised instruments",
      "Sutures and post-op care included",
    ],
    recovery:
      "Swelling peaks at 48–72 hours, then resolves by day 5–7. Soft diet for 3–5 days. Prescribed antibiotics and pain relief must be completed in full.",
  },
  {
    slug: "gum-surgeries",
    name: "Gum Problems",
    category: "Surgery & Gums",
    imageUrl: "/services/gum-problems.jpg",
    imageAlt: "Gum Problems",
    summary:
      "Comprehensive periodontic therapies treating bleeding gums, gingivitis, and loose tooth foundations.",
    overview:
      "Gum disease (periodontitis) is a primary cause of tooth mobility and loss. When routine cleaning is insufficient, deep curettage (root planing under local anaesthesia) removes bacteria from below the gumline. Advanced cases may receive periodontic flap therapy or contouring.",
    duration: "45 – 90 minutes per quadrant",
    anaesthesia: "Local anaesthesia",
    benefits: [
      "Stops progression of gum disease",
      "Reduces bleeding, swelling, and bad breath",
      "Saves teeth at risk of being lost",
      "Improves smile aesthetics with contouring",
    ],
    recovery:
      "Soreness and swelling for 3–5 days post-procedure. Chlorhexidine mouthwash and antibiotics are prescribed as needed.",
  },
  {
    slug: "cosmetic-dental-treatment",
    name: "Cosmetic Dental Treatment & Veneers",
    category: "Cosmetic & Smile",
    imageUrl: "/services/cosmetic-veneers.jpg",
    imageAlt: "Cosmetic Dental Treatment & Veneers",
    summary:
      "Ultra-thin porcelain or composite laminates tailored to fix chips, gaps, and surface discoloration.",
    overview:
      "Cosmetic dentistry covers a spectrum of enhancements — from composite bonding repairs completed in one visit to ultra-thin porcelain veneers permanently bonded to the front of teeth for a flawless smile.",
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
  {
    slug: "tooth-jewellery",
    name: "Tooth Jewellery",
    category: "Cosmetic & Smile",
    imageUrl: "/services/tooth-jewellery.jpg",
    imageAlt: "Tooth Jewellery",
    summary:
      "Non-invasive, reversible dental crystals and gems bonded painlessly for an elegant accent.",
    overview:
      "Tooth jewellery is bonded to the enamel surface using dental-grade adhesive — no drilling, no enamel removal. The gem (Swarovski crystal or stone) is placed in minutes and can be removed at any time without damage.",
    duration: "10 – 15 minutes",
    anaesthesia: "None",
    benefits: [
      "Completely non-invasive and reversible",
      "No drilling or enamel removal",
      "Wide range of crystal colours and styles",
      "Lasts 6 months to several years",
    ],
    recovery:
      "No downtime. Avoid hard biting near the gem for the first 24 hours while the adhesive fully cures.",
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
