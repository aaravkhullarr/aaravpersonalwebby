/*
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this file to update the whole website.
 * ─────────────────────────────────────────────────────────────
 *
 *  • Any text that starts with "TODO" shows up on the site as a
 *    highlighted placeholder (and a "draft" banner appears), so missing
 *    content is never shown as fact.
 *  • Inline links: write [link text](https://example.com) inside any
 *    intro paragraph, summary, bullet or note.
 *  • Remove a whole section by making its list empty: e.g. honors: []
 *  • Images: put files next to this one (top level) and reference them as "name.jpg".
 *
 *  Source: linkedin.com/in/aaravkhullar (read Nov 2026).
 */

window.SITE = {
  // Shown in the header. The design uses lowercase on purpose.
  name: "aarav khullar",

  // Only verified links. Add more as you confirm them, e.g.
  //   { label: "github", href: "https://github.com/your-handle" },
  links: [
    { label: "linkedin", href: "https://www.linkedin.com/in/aaravkhullar/" },
    { label: "instagram", href: "https://www.instagram.com/aaravkhullarr/" },
    { label: "email", href: "mailto:aaravkhullarr@gmail.com" },
  ],

  // Optional résumé. Put the PDF in this folder and set e.g. "resume.pdf".
  resume: null,

  // Home-page intro, one short paragraph per entry.
  intro: [
    "currently a freshman at [Babson College](https://www.babson.edu/), studying finance & tech entrepreneurship.",
    "on campus, equity research @ the Babson Analyst Initiative, a consultant on the financial & tax technology team at the Babson Consulting Association, and associate @ CODE.",
    "before college, researched ai tools for small businesses with Google Ads (Google Partner), built an ai sales playbook now used by 523 reps at Berlin Packaging, and served as Illinois DECA state vice president.",
    "co-founded [BizBuzz](https://www.bizbuzz.it/), a youth entrepreneurship incubator that has taught 1,572 K–8 students, and ran marketing at [Prilo.ai](https://www.prilo.ai/), an ai study tool for student competitions.",
  ],

  // "off the clock" section on the home page, right after the intro.
  // Each entry: { label, text }. Inline [links](https://...) work here too.
  offTheClock: [
    { label: "from", text: "chicago born. bears fan, for better or worse." },
    { label: "mental math", text: "[Zetamac](https://arithmetic.zetamac.com/) score: 82 & counting..." },
    { label: "finsta", text: "“divorced soil selfies”: divorced dad selfies with motivational captions, thoughts and ideations. funny stories too." },
    { label: "on repeat", text: "drake, lucki, jouse (jazz + house), and lately, cloud rap." },
  ],

  // "snapshots" photo grid on the home page, below "off the clock".
  // Each photo: { src, alt, caption, w, h }
  //   alt     = what's in the photo (read aloud by screen readers; required)
  //   caption = optional short line shown on hover and in the enlarged view
  //   w, h    = the image's pixel size, so the grid doesn't jump while loading
  photos: [
    { src: "podium.webp", w: 796, h: 624, caption: null,
      alt: "Aarav in a suit and blue tie speaking at a podium on a stage with a pink and purple backdrop." },
    { src: "golf-sunset.jpg", w: 505, h: 802, caption: null,
      alt: "Aarav mid-swing at a golf driving range under a pink sunset sky with a crescent moon." },
    { src: "graduation.webp", w: 1763, h: 876, caption: "graduation, naperville north",
      alt: "Aarav with friends in navy and orange graduation gowns, holding diplomas in front of the Naperville North stands." },
    { src: "thrift.jpg", w: 454, h: 732, caption: null,
      alt: "Aarav in a navy jacket and light jeans holding a leather bag inside a vintage clothing store." },
    { src: "deca-officers.jpg", w: 719, h: 389, caption: "with the illinois deca officer team",
      alt: "Aarav with four other DECA officers in blazers and blue ties in front of a conference stage." },
    { src: "mirror.webp", w: 608, h: 786, caption: null,
      alt: "Aarav and a friend taking a selfie in a round street mirror on a city corner at night." },
    { src: "joker.jpg", w: 436, h: 342, caption: null,
      alt: "Aarav and a friend in Joker face paint, giving a thumbs-up at night." },
  ],

  experience: [
    {
      role: "equity research analyst",
      org: "Babson Analyst Initiative (BAI)",
      orgUrl: null,
      dates: "sep 2026 - present",
      location: "wellesley, ma",
      summary: "one of 28 undergrads in the program.",
      bullets: [],
    },
    {
      role: "consultant",
      org: "Babson Consulting Association",
      orgUrl: null,
      dates: "sep 2026 - present",
      location: "wellesley, ma",
      summary: "financial & tax technology team in the Undergraduate Consulting Program (one of 20 undergrads).",
      bullets: [],
    },
    {
      role: "ai applications research intern",
      org: "Google Ads (Google Partner)",
      orgUrl: null,
      dates: "jun 2024 - oct 2026",
      location: null,
      summary: "researched how Google Ads could help small and mid-sized businesses lower customer acquisition costs and improve marketing performance.",
      bullets: [
        "worked under Prosenjit Aich, global product lead at Google, and wrote a paper laying out an 8-step research process.",
        "designed 4 ai prototype concepts (ai ad studio, YouTube in-ad chat, text-to-automation builder, Gmail ai outreach) and tested them with tools like n8n, Cursor, Databutton and Instantly.ai, plus campaigns for my own startups, Chatflow Automations and Prilo.",
        "prototype tests reduced customer acquisition cost by 30.33% and lifted email open/reply rates to 54%/11%.",
      ],
    },
    {
      role: "ai development intern",
      org: "Berlin Packaging",
      orgUrl: null,
      dates: "may 2025 - oct 2025",
      location: "chicago, il",
      summary: "built an ai sustainability sales playbook with the vp of sustainability, now in use by 523 sales reps (26% of the company).",
      bullets: [
        "reps search a target company and get a summary, sustainability insights, relevant trends and regulations, a winning pitch, and a recommended sales play.",
      ],
    },
    {
      role: "growth intern",
      org: "Snowday",
      orgUrl: null,
      dates: "jun 2024 - sep 2024",
      location: "new york city area",
      summary: "grew active users by 17% (+42.5k), created a referral program, and generated 4.56M views on social media.",
      bullets: [],
    },
  ],

  leadership: [
    {
      role: "illinois deca state vice president",
      org: "DECA Inc.",
      orgUrl: null,
      dates: "sep 2025 - sep 2026",
      location: null,
      summary: "elected to lead 6,500+ members from 76 schools; membership grew 20.23% during the term.",
      bullets: [
        "raised $7k and started a lapel pin trading system at the state conference, the “DECA Decoded” podcast, and a state photography team.",
        "helped host the 81st Illinois DECA Career Development Conference.",
      ],
    },
    {
      role: "board member, career & technical student organizations",
      org: "Illinois State Board of Education",
      orgUrl: null,
      dates: "may 2024 - may 2026",
      location: null,
      summary: "represented 63,127 students across 11 Illinois career & technical student organizations.",
      bullets: [
        "passed a legislative proclamation making February CTSO month in Illinois, a first in the nation.",
        "worked with Governor J.B. Pritzker and Secretary of State A. Giannoulias.",
        "spoke at ICCCTSO, CareerConneCTEd and monthly ISBE conferences to school administrators, U.S. Department of Education attendees, and industry providers including the College Board.",
      ],
    },
    {
      role: "board member, riverwalk commission",
      org: "City of Naperville",
      orgUrl: null,
      dates: "oct 2024 - oct 2025",
      location: null,
      summary: "worked on the 2031 Riverwalk Masterplan and planning for the 2027 Netlzey Overlook renovation.",
      bullets: [
        "helped oversee $900,000 in P&D funds alongside Mayor S. Wehrli and council members I. Holzhauer and M. Gibson.",
      ],
    },
  ],

  honors: [
    {
      title: "U.S. Presidential Scholar candidate",
      issuer: "U.S. Department of Education",
      date: "may 2026",
      note: "one of the top 6,500 of 3.9 million seniors in the class of 2026, selected on test scores and nominations.",
    },
    {
      title: "DECA internationals top 10, 4x international qualifier",
      issuer: "DECA Inc.",
      date: "apr 2026",
      note: "7th place in Career Development Project at the 2026 international conference (top 0.14%). 2x state champion, 3x district champion.",
    },
    {
      title: "top 100 emerging innovators of 2025",
      issuer: "The Emerging Innovator Awards",
      date: "feb 2025",
      note: "awarded by Capital One & 1435 Capital.",
    },
    {
      title: "World Series of Innovation international finalist",
      issuer: "Network for Teaching Entrepreneurship (NFTE)",
      date: "feb 2025",
      note: "top 80 of 3,951 teams from 82 countries; awarded by Intuit for “Banked: the financial BitLife.”",
    },
    {
      title: "Disney Dreamers Academy national scholar",
      issuer: "The Walt Disney Company",
      date: "dec 2024",
      note: "one of 100 students chosen from 10,000+ applicants for leadership and social impact; the first from DuPage County.",
    },
    {
      title: "2x gold, President's Volunteer Service Award",
      issuer: "AmeriCorps",
      date: null,
      note: null,
    },
  ],

  education: [
    {
      school: "Babson College",
      schoolUrl: "https://www.babson.edu/",
      degree: "B.S.B.A., finance & technology entrepreneurship",
      dates: "2026 - 2030",
      notes: [
        "Babson Analyst Initiative, Babson Consulting Association, Babson Finance Association, Product Build & Jammin' (freshman representative of finance), SLICE Program, Babson CODE (associate)",
      ],
    },
    {
      school: "Naperville North High School",
      schoolUrl: null,
      degree: null,
      dates: "2022 - 2026",
      notes: [
        "DECA (state officer & co-president), badminton (coach), Business Professionals of America",
      ],
    },
  ],

  // The first `featuredProjects` entries also appear on the home page.
  featuredProjects: 3,
  projects: [
    {
      title: "BizBuzz",
      tagline: "Illinois's largest youth entrepreneurship incubator",
      role: "co-founder",
      dates: "apr 2024 - present",
      image: null, // e.g. "bizbuzz.jpg"
      details: [
        "taught 1,572 K–8 students through summer camps and the “Fish Tank” competition.",
        "incubated 143 businesses, led 64 staff, raised $15.4k, and partnered with 48 organizations.",
        "student businesses include wildfire-monitoring ai drones, agricultural ai drones, a teen-focused investing platform, a slang-based language learning app, a food preservation device, and a temperature-regulating sleep pillow.",
        "worked with a Shark Tank winner, VC firms, the Naperville mayor, an Illinois state representative, and c-suite executives.",
      ],
      links: [{ label: "visit site", href: "https://www.bizbuzz.it/" }],
    },
    {
      title: "Prilo.ai",
      tagline: "ai study tool for DECA, FBLA, HOSA, WSC and NSDA debate",
      role: "chief marketing officer",
      dates: "oct 2024 - sep 2026",
      image: null,
      details: [
        "grew to 3,000+ users and sold to 9 school districts.",
        "made $11k in revenue through a freemium model and the Prilo MAX subscription.",
      ],
      links: [{ label: "visit site", href: "https://www.prilo.ai/" }],
    },
    {
      title: "Templace",
      tagline: "adaptive thermoregulatory necklace for extreme sports",
      role: null,
      dates: null,
      image: null,
      details: [
        "designed to prevent extreme sports injuries by combating thermally induced cognitive decline.",
        "a Peltier module, ERM coin motors and a PID algorithm deliver thermal and haptic feedback to the neck.",
      ],
      links: [],
    },
  ],

  // Group name -> list of items. Empty = section hidden.
  skills: {},

  interests: [],
};
