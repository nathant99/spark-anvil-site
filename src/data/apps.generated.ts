// SEMI-MANAGED — hand-curated data file. DO NOT run scripts/build-apps-data.mjs
// against this file directly; that script ships a slim 36-app schema that will
// OVERWRITE the rich data here (longTagline, features, implementing, wave,
// hasUserGuide, hasM9Accessories, standards, iconHeroPath, etc.) and reduce
// 136 apps → 36. Until build-apps-data.mjs is extended to produce the rich
// schema with merge-preserving updates, edit this file via targeted Python
// scripts that read+modify+write specific fields.

export interface AppFeature {
  name: string;
  description: string;
}

export interface AppData {
  slug: string;
  name: string;
  tagline: string;
  longTagline?: string | null;
  features?: AppFeature[];
  mentor?: string | null;
  hasUserGuide?: boolean;
  vertical: 'stem' | 'steam' | 'academics' | 'dir-fedc' | 'special-interest';
  heroColor: string;
  iconPath: string | null;
  iconHeroPath: string | null;
  mascotPath: string | null;
  implementing: boolean;
  standards: string[];
  hasM9Accessories: boolean;
  wave: number | null;
  distributedNarrative?: boolean;
  /**
   * Distributed-narrative cast — named recurring characters that embody
   * specific curricular concepts. Only present on apps with
   * `distributedNarrative: true`. Per
   * `labsmith/Docs/GUIDE_DISTRIBUTED_NARRATIVE_METHODOLOGY.md`.
   */
  dnCast?: {
    /** Optional cast-context blurb (1 sentence framing). */
    intro?: string;
    members: Array<{
      name: string;
      /** 1-line concept embodied — kid-readable, no jargon. */
      role: string;
    }>;
  };
  /**
   * Engagement modality scores (0-3 per mode). Orthogonal to `vertical`.
   * 0 = mode not present · 1 = minor · 2 = secondary · 3 = primary.
   * Most apps are multi-modal (score ≥1 on 2+ modes).
   */
  modes: {
    learn: 0 | 1 | 2 | 3;
    play: 0 | 1 | 2 | 3;
    create: 0 | 1 | 2 | 3;
  };
  /**
   * Pass-and-play / face-to-face mode flag. When true, the app ships at least
   * one mode designed for two-or-more humans on a single device (couch-coop,
   * hot-seat, parent-child pass-the-device). Per
   * `labsmith/Docs/RESEARCH_PASS_AND_PLAY_DIFFERENTIATOR.md` (queue #221).
   * Currently 6 apps ship pass-and-play: escapeforge / framequest /
   * geometryforge / jestforge / numberverse / witquest.
   */
  playTogether?: boolean;

  /**
   * Neurodivergent-supportive design flag. When true, the app ships
   * documented design choices that make it more accessible / effective
   * for neurodivergent learners (autistic / ADHD / OCD / dyslexic /
   * dyspraxic / dyscalculic / Tourette's / 2e kids). Per queue #310 +
   * `labsmith/Docs/PLAN_NEURODIVERGENT_SITE_PAGE.md`.
   *
   * Used by `/neurodivergent` aggregate page + per-app card badge.
   *
   * NOT a clinical claim. NOT a diagnostic tool. NOT a treatment.
   */
  neurodivergentSupport?: boolean;

  /**
   * Per-app evidence base for the ND-support claim. Surfaces on the
   * `/neurodivergent` page as the "what specifically does this app do"
   * expansion. Each entry is { aspect, basis } where:
   * - `aspect` is the design property (e.g., "Autism-aware sensory
   *   overrides")
   * - `basis` is the citation / source (e.g., "Wave-7 dual-palette +
   *   0.3s crossfade per app DN handoff" OR "SAMHSA TIP 57 + NCTSN
   *   trauma-informed gates" OR "CHADD-affiliated reviewer envelope
   *   $800-$1,200 pre-launch")
   */
  neurodivergentEvidence?: Array<{ aspect: string; basis: string }>;

  /**
   * Design-trait pills displayed on the app card on `/neurodivergent`.
   * Short kid-and-parent-readable tags. Recommended vocabulary:
   *   "Sensory-aware"
   *   "Low-stimulus mode"
   *   "Explicit instructions"
   *   "Predictable flow"
   *   "Focus-supportive"
   *   "Co-regulation"
   *   "Identity-affirming"
   *   "Strength-based"
   *   "Trauma-informed"
   *   "ADHD-supportive"
   *   "Autism-supportive"
   *   "OCD-aware"
   *   "Dyslexia-aware"
   *   "2e-friendly"
   *   "Communication-scaffolding"
   *   "Interoception"
   * Apps may carry 2-5 traits typically.
   */
  neurodivergentDesignTraits?: string[];
}

export const apps: AppData[] = [
  {
    "slug": "activeforge",
    "name": "ActiveForge",
    "tagline": "Build physical fitness, motor skills, and dance proficiency through camera-based movement tracking, choreography challenges, and sport skill progressions — aligning to both SHAPE America PE standards and NCAS Dance standards. Ages 9-14.",
    "vertical": "steam",
    "heroColor": "#81C784",
    "iconPath": "/apps/activeforge/icon-sm.webp",
    "mascotPath": "/apps/activeforge/mascot.webp",
    "mentor": "Coach Echo",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ActiveForge's 5-character cast embodies the foundational PE motor-skill primitives per SHAPE America FMS framework — overhand-projection (Throw), lower-body projection (Kick), spatial-perception agility (Dodge), tumbling + safe-fall + locomotor-recovery (Roll), and team-collaboration + sportsmanship (Cheer). Coach Echo (mentor preserved; soft collision with FunctionForge Wave 4 Echo allowed per registry rule 2/3 — mentor vs cast + different domain + 'Coach Echo' full string vs bare 'Echo') frames each primitive; cast embodies them at school-PE / backyard-tag / family-park-pickup-game scale (NEVER 'varsity-athlete' / 'team-jersey-coded' / 'aspirational-fitness' framing). Motor-skill-shame gate enforced (UNIQUE to ActiveForge in Wave 24): cast NEVER frames motor-skill as innate-talent; ALL skills framed as TRAINABLE-through-practice + clumsy-but-trying-is-the-pattern; one character (Roll) explicitly uses adaptive-PE prop (safe-fall helmet) signaling 'ALL bodies move + adaptive gear is normal' — inherits InclusionForge Wave 15 representation gate. Body-image gate cross-app inherits FitQuest Wave 24 verbatim (kit 2 nutrition cast-light + food-access-framing per SaffronLab Wave 19). Cross-cultural movement-tradition foregrounding (sepak takraw / kabaddi / capoeira / parkour / Indigenous lacrosse — kit 9 Olympic content sensitivity-review-gated $500-$800).",
      "members": [
        { "name": "Throw", "role": "Overhand-projection motor pattern — targeted-force-at-distance trained-through-practice never-aptitude-test" },
        { "name": "Kick", "role": "Lower-body projection — foot-language with five-different-parts-of-foot for different kicks" },
        { "name": "Dodge", "role": "Spatial-perception + agility — read-the-space-and-move-EARLIER not-faster; perception-game not speed-game" },
        { "name": "Roll", "role": "Tumbling + safe-fall + parkour-shoulder-roll — visible adaptive-PE helmet signals all-bodies-belong" },
        { "name": "Cheer", "role": "Sportsmanship + bystander-presence-in-play — learnable-skill not personality-trait" }
      ]
    },
    "implementing": true,
    "standards": [
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "iconHeroPath": "/apps/activeforge/icon.webp",
    "longTagline": "ActiveForge is your personal fitness and dance coach right on your phone! Use your camera to track your movements as you learn dance routines, practice sport skills, and complete fitness challenges. The app watches how you move and gives you helpful tips to get better.",
    "features": [
      {
        "name": "Fitness Challenges",
        "description": "Pick a workout and follow along on screen. The camera watches your body and checks your form. Green means you are doing great. Yellow means you are close but co"
      },
      {
        "name": "Dance Routines",
        "description": "Learn dance moves step by step. The app shows you the move, then you copy it. As you get better, the routines get longer and more complex. Hit the beats on time"
      },
      {
        "name": "Sport Skills",
        "description": "Practice real sport movements like throwing, kicking, and jumping. The app compares your movement to the correct form and shows you what to improve. Level up yo"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "adventurehub",
    "name": "AdventureHub",
    "tagline": "Cross-subject Hub app that aggregates contributions from 20+ portfolio source apps into 5 thematic adventure zones (Math Mountains, Word Woods, Science Labs, History Ruins, Creative Studio)",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/adventurehub/icon-sm.webp",
    "iconHeroPath": "/apps/adventurehub/icon.webp",
    "mascotPath": "/apps/adventurehub/mascot.webp",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "AdventureHub's 5-character cast IS the launch zone-host mentor roster — NOT a new curricular catalogue but the formalization of the 5 mentor archetypes already shipping across 32 source-app HubContribution configs. The aggregator-function decomposes into 5 thematic zones, each hosted by a named mentor whose voice frames a family of curricular domains: Math Mountains (Trailmaster Theo — 10+ math/logic source apps), Word Woods (Loresinger Mae — 10+ ELA/world-language source apps), Science Labs (Dr. Quark — 6+ STEM source apps), History Ruins (Archivist Atlas — 5+ humanities source apps), Creative Studio (Maestro Mira — 5+ arts source apps). Meta-aggregator application of Bruner narrative-mode + Habgood intrinsic-integration: the zone-host's character IS the aggregator-pattern. Cast supplements — does NOT replace — source-app DN casts (Wave 1-26). Both appear together when a source app contributes content to a zone. Phase 2 expansion: Harbor Anya (Heart Harbor zone) joins as 6th cast member post-launch. NO new mascot generation needed — all 5 zone-host visuals already ship via per-app HubContribution mentor.avatarAssetName references; Wave 27 spend on AdventureHub = $0.",
      "members": [
        { "name": "Trailmaster Theo", "role": "Math Mountains zone host — math + logic + ratios + chance + functions + geometry + proof + discrete + chess/Go/Xiangqi/backgammon/bridge tactics; 10+ source apps federated" },
        { "name": "Loresinger Mae", "role": "Word Woods zone host — spelling + grammar + reading + writing + dialogue + character + poetry + voice + world-languages; 10+ source apps federated" },
        { "name": "Dr. Quark", "role": "Science Labs zone host — biology + chemistry + ecology + climate + microbiology + Earth-science + AI-literacy; 6+ source apps federated" },
        { "name": "Archivist Atlas", "role": "History Ruins zone host — history + civics + culture + folklore + chronology + ethics; 5+ source apps federated" },
        { "name": "Maestro Mira", "role": "Creative Studio zone host — visual art + music + dance + theater + lyrics + motif + composition; 5+ source apps federated" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    }
  },
  {
    "slug": "aiforge",
    "name": "AiForge",
    "tagline": "Learn how AI really works by building your own classifiers, training models, detecting bias, and navigating the ethics of a world run by algorithms — with an AI mentor that teaches you about itself.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/aiforge/icon-sm.webp",
    "mascotPath": "/apps/aiforge/mascot.webp",
    "mentor": "Bit",
    "distributedNarrative": true,
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/aiforge/icon.webp",
    "longTagline": "AIForge teaches you how artificial intelligence really works! You will build your own classifiers, train simple models, spot bias in data, and learn to think carefully about AI -- all guided by an AI mentor that teaches you about itself. It is like having a robot teacher that is honest about what ro",
    "features": [
      {
        "name": "Build Classifiers",
        "description": "Sort items into groups and teach the app your rules. You will see how AI learns from examples -- and what happens when those examples are wrong or unfair."
      },
      {
        "name": "Detect Bias",
        "description": "Look at training data sets and figure out what is missing or unfair. Can you spot when the data only shows one type of person? Learning to find bias is a superp"
      },
      {
        "name": "Ethics Adventures",
        "description": "Face real-world dilemmas about AI and decide what is right. Should a self-driving car prioritize passengers or pedestrians? There are no easy answers, but think"
      },
      {
        "name": "Digital Citizenship",
        "description": "Learn about online safety, protecting your privacy, managing your digital footprint, and spotting deepfakes. These are skills you will use every day."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 2
    }
  },
  {
    "slug": "beatforge",
    "name": "BeatForge",
    "tagline": "Music creation sandbox inside an RPG world where kids ages 10-14 build compositions using visual \"sound blocks\" that snap together on a sequencer canvas. The game world dynamically transforms based on the music created, and blocks gradually reveal standard notation as mastery increases via a peel-back mechanic.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/beatforge/icon-sm.webp",
    "mascotPath": "/apps/beatforge/mascot.webp",
    "mentor": "Tempo",
    "implementing": true,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/beatforge/icon.webp",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "BeatForge sits in the **creative-studio cluster** alongside HarmonyForge / MotifLab / SoundSphere — all 4 shipping distributed-narrative casts in Wave 7.",
      "members": [
        {
          "name": "Throb",
          "role": "The steady pulse — the underlying clock every other rhythm hangs from"
        },
        {
          "name": "Snap",
          "role": "Subdivision — splitting a beat into equal smaller parts (eighths, sixteenths, triplets)"
        },
        {
          "name": "Hammer",
          "role": "Accent — emphasis on specific beats (the downbeat, the backbeat, polyrhythmic emphasis)"
        },
        {
          "name": "Tilt",
          "role": "Syncopation — placing weight off the expected beat to create pull and forward motion"
        },
        {
          "name": "Spin",
          "role": "Groove — the looping pattern that emerges when pulse + subdivision + accent + syncopation cohere; the thing that makes a beat feel like a particular genre"
        }
      ]
    },
    "longTagline": "BeatForge is a music composition studio. You build songs by snapping colorful sound blocks together — notes, rests, chords, dynamics — and the app plays them back through real instruments. As your music skills grow, the colorful blocks slowly reveal real sheet-music notation underneath, so you learn",
    "features": [
      {
        "name": "Your First 60 Seconds",
        "description": "1. **Open the app.** A short welcome flow introduces your mentor. You can skip it with the \"Skip Intro\" button if you want to jump right in."
      },
      {
        "name": "The Home Screen",
        "description": "The home screen has four zones:"
      },
      {
        "name": "Sound Block Editor",
        "description": "The block editor has three parts:"
      },
      {
        "name": "Block Types",
        "description": "| Block | What it does |"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "bioforge",
    "name": "BioForge",
    "tagline": "Players learn anatomy and biomechanics through the lens of sports -- understanding how muscles generate force, how joints create leverage, how the cardiovascular system fuels performance, and how training improves the body. Each sport unlocks new body systems and biomechanical principles. The only sports-science-meets-anatomy app on any platform.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "BioForge teaches human anatomy through the lens of sports — body systems as the curricular pattern catalogue (skeletal, muscular, nervous, cardiovascular, respiratory, digestive).",
      "members": [
        {
          "name": "Pump",
          "role": "Cardiovascular (heart, blood, vessels)"
        },
        {
          "name": "Bellows",
          "role": "Respiratory (lungs, oxygen exchange)"
        },
        {
          "name": "Sprout",
          "role": "Digestive (stomach, intestines, nutrients)"
        },
        {
          "name": "Flicker",
          "role": "Nervous (brain, signals, reflexes)"
        },
        {
          "name": "Strand",
          "role": "Muscular (contraction, movement)"
        },
        {
          "name": "Beam",
          "role": "Skeletal (bones, levers, support)"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/bioforge/icon-sm.webp",
    "mascotPath": "/apps/bioforge/mascot.webp",
    "mentor": "Helix",
    "implementing": true,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "iconHeroPath": "/apps/bioforge/icon.webp",
    "longTagline": "BioForge is your sports science and human body lab! Explore how all your body systems work -- from bones and muscles to your brain and heart. Then use what you learn to train virtual athletes, analyze real sports movements, and discover the science behind every jump, throw, and sprint.",
    "features": [
      {
        "name": "Body Systems Explorer",
        "description": "Dive into the digestive, nervous, respiratory, circulatory, and other body systems. See how they work with interactive diagrams. Zoom in to see muscles contract"
      },
      {
        "name": "Athlete Training Lab",
        "description": "Train virtual athletes by applying what you know about biomechanics. Choose the right exercises, set training schedules, and watch your athlete improve. Underst"
      },
      {
        "name": "Movement Analysis",
        "description": "Watch sports movements in slow motion and learn the physics behind them. Why does a basketball player bend their knees before jumping? How does a pitcher throw"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "biomeforge",
    "name": "BiomeForge",
    "tagline": "Design aquariums, terrariums, and vivariums -- master ecology, food webs, and ecosystem balance at micro scale. Players select species, tune habitat parameters (temperature, pH, humidity, light), simulate food webs and nitrogen cycles, and observe population dynamics unfold in real time. Every organism matters.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/biomeforge/icon-sm.webp",
    "iconHeroPath": "/apps/biomeforge/icon.webp",
    "mascotPath": "/apps/biomeforge/mascot.webp",
    "mentor": "Mossy",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "Canopy",
          "role": "Forest biomes (temperate, tropical, taiga)"
        },
        {
          "name": "Dune",
          "role": "Desert biomes (hot, cold, semi-arid)"
        },
        {
          "name": "Reef",
          "role": "Aquatic biomes (coral reef, freshwater, marine)"
        },
        {
          "name": "Ridge",
          "role": "Mountain / alpine / vertical-zonation biomes"
        },
        {
          "name": "Flux",
          "role": "Climate-biome mapping (where biomes shift with climate)"
        }
      ]
    },
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "bridgeforge",
    "name": "BridgeForge",
    "tagline": "Project-based learning simulation with multi-week real-world challenges integrating math, science, social studies, and ELA. First student-facing PBL app following the Gold Standard PBL cycle (PBLWorks/Buck Institute). Students solve authentic real-world problems that require competency across multiple subjects, building visible bridges on a subject connection map.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/bridgeforge/icon-sm.webp",
    "mascotPath": "/apps/bridgeforge/mascot.webp",
    "mentor": "Archie",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "BridgeForge's 5-character cast embodies the foundational cross-curricular-bridging connective primitives — math↔science (Truss, causal-evidential), math↔art (Arch, proportion-aesthetic), math↔social-studies (Pier, data-narrative), math↔ELA (Splice, structure-metaphor), and math↔music (Cable, ratio-temporal). Archie (mentor; renamed from site placeholder 'Span' to resolve soft collision with FossilForge Wave 17 cast Span + match code-side style guide) frames each primitive; cast embodies them at school-engineering-team / community-design-studio scale. Bridge-rigor gate enforced: cast models defensible specific connections over surface-level rhyming; foregrounds 'at what level of abstraction does this bridge hold?' rigor; explicit math-side AND domain-side evidence required.",
      "members": [
        { "name": "Truss", "role": "Math↔Science bridges — causal-evidential connection (measurement + replication; both sides need numbers)" },
        { "name": "Arch", "role": "Math↔Art bridges — proportion-aesthetic connection (golden ratio + symmetry; math you can SEE)" },
        { "name": "Cable", "role": "Math↔Music bridges — ratio-temporal connection (frequency ratios + rhythm; math you can HEAR)" },
        { "name": "Pier", "role": "Math↔Social-Studies bridges — data-narrative connection (statistics in history + civics; numbers + people)" },
        { "name": "Splice", "role": "Math↔ELA bridges — structure-metaphor connection (sequence + symmetry in writing; math is the bones)" }
      ]
    },
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/bridgeforge/icon.webp",
    "longTagline": "BridgeForge shows you how math connects to everything! Build bridges between math and other subjects like science, art, music, and social studies by solving problems that use both at the same time. Each bridge you complete proves that math is not just numbers on a page -- it is everywhere.",
    "features": [
      {
        "name": "Bridge Building",
        "description": "Each bridge has several segments. To complete a segment, you solve a problem that combines math with another subject. For example, you might use fractions to mi"
      },
      {
        "name": "Subject Map",
        "description": "Explore the map to find new bridge-building sites. Each location connects math to a different subject. The more bridges you build, the more of the map you unloc"
      },
      {
        "name": "Design Challenges",
        "description": "Take on special challenges that require you to use math skills in creative ways. These are tougher but earn bigger rewards!"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "cardforge",
    "name": "CardForge",
    "tagline": "Learn card games from basics to mastery, then amaze friends with step-by-step magic trick tutorials — a complete card skills academy with AI coaching for ages 9-14. The only app that combines interactive card game teaching with magic trick instruction for children.",
    "vertical": "special-interest",
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "The Finesseur",
          "role": "Finesse (force an opponent's high card via positional play; bridge / hearts / spades)"
        },
        {
          "name": "The Squeezer",
          "role": "Squeeze (force a discard that gives up a winner; advanced bridge + hearts)"
        },
        {
          "name": "The Endplayer",
          "role": "Endplay (throw opponent in to force a losing lead; bridge / hearts / whist)"
        },
        {
          "name": "The Counter",
          "role": "Card-counting / pip-tracking (track played cards to deduce remaining hands; gin / bridge / blackjack-style)"
        },
        {
          "name": "The Long-Suit",
          "role": "Suit establishment (set up a long suit to run for tricks late in the hand; bridge / whist / spades)"
        },
        {
          "name": "The Bluffer",
          "role": "Deception under uncertainty (poker betting; representing a hand you don't have)"
        },
        {
          "name": "The Discarder",
          "role": "Strategic discard (hearts: avoid points; spades / gin / rummy: shed dead wood)"
        },
        {
          "name": "The Trumpkeeper",
          "role": "Trump management (when to ruff, when to hold; whist / spades / euchre / pinochle)"
        },
        {
          "name": "The Forcer",
          "role": "Magic forcing (the spectator \"freely chooses\" the card you intended)"
        },
        {
          "name": "The Shuffler",
          "role": "False-shuffle / stack management (control card order while appearing to randomize; mathematical card magic)"
        }
      ]
    },
    "heroColor": "#FFA726",
    "iconPath": "/apps/cardforge/icon-sm.webp",
    "mascotPath": "/apps/cardforge/mascot.webp",
    "mentor": "Ace",
    "implementing": true,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "iconHeroPath": "/apps/cardforge/icon.webp",
    "longTagline": "CardForge is a card game school and magic trick workshop all in one! Learn how to play 15+ card games with a smart coach, master over 70 magic tricks step by step, and explore the math behind cards in the probability lab. Impress your friends and family with your new skills!",
    "features": [
      {
        "name": "Card School",
        "description": "Learn classic card games from simple ones like Go Fish to tricky ones like Rummy. The AI coach teaches you the rules, shows you strategies, and plays practice r"
      },
      {
        "name": "Magic Workshop",
        "description": "Follow step-by-step tutorials to learn amazing card tricks. Each trick is broken into easy-to-follow moves. Practice each step until you get it right, then put"
      },
      {
        "name": "Probability Lab",
        "description": "Explore the math behind cards. What are the chances of drawing an ace? How many ways can you arrange 5 cards? The interactive lab makes math fun with real card"
      },
      {
        "name": "Deck Builder",
        "description": "Customize your card decks with different designs and organize your favorites."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    }
  },
  {
    "slug": "chanceforge",
    "name": "ChanceForge",
    "tagline": "Run a virtual casino, investigate insurance company math, predict sports outcomes, and solve medical diagnosis puzzles — mastering probability and statistics through real-world contexts where the math determines who wins and who loses.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "Habgood intrinsic-integration test: **the character's behavior IS the statistical move**.",
      "members": [
        {
          "name": "Tally the Counter-of-Outcomes",
          "role": "Data collection + frequency counting (the foundational \"what happened, how often?\" move)"
        },
        {
          "name": "Display the Picture-Maker",
          "role": "Graphs and visual displays (bar charts, histograms, dot plots, line graphs — turning numbers into pictures)"
        },
        {
          "name": "Center the Middle-Finder",
          "role": "Central tendency — mean, median, mode (the \"what's typical?\" question)"
        },
        {
          "name": "Sample the Estimator",
          "role": "Sampling, sampling distributions, inference from sample to population"
        },
        {
          "name": "Tree the Compound-Brancher",
          "role": "Compound events and probability trees — multiplication rule for independent events, addition for disjoint, conditional dependencies"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/chanceforge/icon-sm.webp",
    "iconHeroPath": "/apps/chanceforge/icon.webp",
    "mascotPath": "/apps/chanceforge/mascot.webp",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "longTagline": "ChanceForge is a probability, statistics, and data science lab where you flip coins, roll dice, run a virtual casino, investigate insurance math, predict sports outcomes, and solve medical diagnosis puzzles. You will discover why randomness has patterns, why the house always wins, and why statistics",
    "features": [
      {
        "name": "Probability Foundations",
        "description": "Flip coins, roll dice, and spin spinners. Make predictions, then run the experiments and compare your guess to what actually happens. Watch the experimental pro"
      },
      {
        "name": "Compound Events",
        "description": "Build probability tree diagrams for events with multiple steps. What is the probability of flipping heads AND rolling a 6? Use the multiplication rule for indep"
      },
      {
        "name": "Distribution Explorer",
        "description": "Collect data and build histograms in real time. Calculate mean, median, mode, range, and standard deviation. See how different distributions look — symmetric, s"
      },
      {
        "name": "Sampling Lab",
        "description": "Discover why polling works — and why it sometimes fails. Sample from a virtual population and see how random samples represent the whole. Compare random samplin"
      }
    ],
    "mentor": "Chance",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 0
    }
  },
  {
    "slug": "chemquest",
    "name": "ChemQuest",
    "tagline": "Mix, react, and discover — a virtual chemistry lab where every reaction is an adventure and the periodic table is your map.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/chemquest/icon-sm.webp",
    "mascotPath": "/apps/chemquest/mascot.webp",
    "mentor": "Beaker",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ChemQuest's 16-character cast splits 12 element-archetypes + 4 bond-type archetypes — element personalities embody their atomic behavior; bond-type characters are abstract energy-shapes (not faces) embodying the connection pattern. Per `chemquest-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` (Wave 3, shipped 2026-05-21 — site backfill 2026-05-22 Wave 32a). Mentor Beaker stays the AI tutor; cast appears via static catchphrases + 5-pose ForgeIllustrations bundles. Strict cast-pacing discipline: max 2 new characters per kit; bond-type characters introduced after their atom relatives are familiar; 16-character cast acceptable ONLY because bond-types are visually distinct (forces, not atoms) — fall back to 12 elements if D7/D30 retention probes show recall lift drops at this cast size.",
      "members": [
        { "name": "Hydra", "role": "Hydrogen (H) — lightweight, ubiquitous, always paired up; buddy-system enthusiast" },
        { "name": "Carbo", "role": "Carbon (C) — connects to anything; the social atom; backbone of life" },
        { "name": "Oxy", "role": "Oxygen (O) — eager bonder; electronegative; the hungry grabber" },
        { "name": "Nitra", "role": "Nitrogen (N) — triple-bond loyal; slow-to-warm; locks in deeply once bonded" },
        { "name": "Sodi", "role": "Sodium (Na) — generous, impulsive; always giving away electrons" },
        { "name": "Chlora", "role": "Chlorine (Cl) — sharp, focused; the collector who finishes what Sodi starts" },
        { "name": "Helio", "role": "Helium (He) — noble gas; peaceful, floaty, complete; the contented onlooker" },
        { "name": "Sulfa", "role": "Sulfur (S) — earthy, dramatic; the stinky uncle of volcanoes and proteins" },
        { "name": "Phossa", "role": "Phosphorus (P) — energetic, restless; the spark of ATP and matches" },
        { "name": "Magna", "role": "Magnesium (Mg) — bold, ceremonial; burns bright white; chlorophyll core" },
        { "name": "Silica", "role": "Silicon (Si) — patient, geometric; the architect who builds quietly" },
        { "name": "Alumi", "role": "Aluminum (Al) — practical, modest; the workhorse of cans and foil" },
        { "name": "Tugger", "role": "Ionic bond — forceful, decisive; full electron transfer; opposites attract" },
        { "name": "Sharer", "role": "Covalent bond — cooperative, balanced; equal partnership" },
        { "name": "Streamer", "role": "Metallic bond — flowing, communal; delocalized electron sea" },
        { "name": "Whisperer", "role": "Hydrogen bond — subtle, persistent; water's superpower; DNA pairing" }
      ]
    },
    "implementing": true,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "iconHeroPath": "/apps/chemquest/icon.webp",
    "longTagline": "ChemQuest is your own virtual chemistry lab! Mix chemicals, watch amazing reactions, explore the periodic table, and record your discoveries in a personal science journal. Every reaction follows real chemistry rules, but presented in a fun, safe, and colorful way. An AI chemistry mentor is always re",
    "features": [
      {
        "name": "Lab Bench",
        "description": "Mix reagents by dragging them together on the lab bench. Watch what happens! You might see color changes, bubbles, sparks, or crystal growth. Every reaction tea"
      },
      {
        "name": "Periodic Table Explorer",
        "description": "Meet the element characters! Each element has its own personality based on real chemistry. Hydrogen is energetic and bonds with everyone. Gold is noble and keep"
      },
      {
        "name": "Equation Builder",
        "description": "Learn to balance chemical equations by making sure atoms on both sides are equal. It is like a puzzle where the pieces are atoms!"
      },
      {
        "name": "Discovery Journal",
        "description": "Every new reaction you find gets recorded in your personal journal. Try to discover as many reactions as you can and fill your journal."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "chronoquest",
    "name": "ChronoQuest",
    "tagline": "Players use a Chrono Device to visit historical eras, witness pivotal events firsthand, interact with historical figures, and complete missions that require understanding each era's culture, technology, and conflicts. Unlike passive timelines, players live through history's defining moments -- facing branching decisions with real consequences.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/chronoquest/icon-sm.webp",
    "mascotPath": "/apps/chronoquest/mascot.webp",
    "mentor": "Era",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ChronoQuest's 8-guide cast is a roster of methodological lenses — historians' tools personified — NOT representations of real cultural figures. Each guide is a mythic-historian archetype (NEVER 'Herodotus the Witness'; NEVER 'Mercator the Cartographer'). Per `chronoquest-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` (Wave 3, shipped 2026-05-21 — site backfill 2026-05-22 Wave 32a). UNIQUE TRAUMA-INFORMED BURDEN (HIGHEST in Wave 3): kits 04 / 07 / 08 / 10 are 'Very High' load; off-ramps + pre-content warnings + skip-with-summary + mentor 'validate-then-inform' posture required. Kit 10 (Indigenous Civilizations) gets four heaviest-stewardship guides cooperating. External sensitivity reviewer collective REQUIRED ($1000-$1500) before Storykeeper + Chronicler-of-the-Defeated art generation — broadest stewardship burden in Wave 3. Strict separation between guide cast + existing real-historical-figure FoundationModels dialogue surface; the two layers must never blur.",
      "members": [
        { "name": "The Cartographer", "role": "Frame-setter — where + when before what + why; methodological starting point" },
        { "name": "The Witness", "role": "Primary-source lens — what did people THERE see + write?" },
        { "name": "The Storykeeper", "role": "Oral-tradition lens — multi-tradition keeper-archetype; invented + non-mascotizing" },
        { "name": "The Trade-Wind", "role": "Connection lens — what moved between civilizations? goods, ideas, diseases" },
        { "name": "The Counter-Voice", "role": "Critical-analysis lens — who benefits from this version? historian's method, NOT cynicism" },
        { "name": "The Chronicler-of-the-Defeated", "role": "Stewardship lens — whose story doesn't survive in the winners' archive?" },
        { "name": "The Translator", "role": "Cross-language + cross-meaning lens — how do concepts travel between cultures?" },
        { "name": "The Question-Asker", "role": "Meta-inquiry lens — what question are we actually asking? late-arriving capstone guide" }
      ]
    },
    "implementing": true,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/chronoquest/icon.webp",
    "longTagline": "ChronoQuest is a time travel adventure! Use your Chrono Device to jump to different periods in history, meet famous historical figures, witness important events, and complete missions. Your choices matter -- and you can even explore \"what if\" scenarios to see how history could have gone differently.",
    "features": [
      {
        "name": "Time Travel",
        "description": "Pick an era on the timeline and jump in! You will land in a world filled with the people, buildings, and culture of that time period. Walk around, talk to peopl"
      },
      {
        "name": "Missions",
        "description": "Each era has missions that require you to understand the history. You might need to help an inventor find supplies, deliver a message during a war, or solve a m"
      },
      {
        "name": "Historical Figures",
        "description": "Meet real people from history and have conversations with them. Ask them questions about their lives, their inventions, or their beliefs. They will talk to you"
      },
      {
        "name": "Museum",
        "description": "Every artifact you collect goes into your personal museum. Arrange your exhibits and share your favorite historical discoveries."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    }
  },
  {
    "slug": "cipherforge",
    "name": "CipherForge",
    "tagline": "Run a spy agency, learning cryptography from Caesar ciphers to RSA basics through narrative-driven missions — crack codes, build ciphers, compete in code-breaking duels, and escape timed puzzle rooms.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "Caesar",
          "role": "Caesar shift / monoalphabetic shift cipher"
        },
        {
          "name": "Mask",
          "role": "Atbash + general monoalphabetic substitution (every letter has a fixed substitute)"
        },
        {
          "name": "Vigenère",
          "role": "Vigenère / polyalphabetic keyword cipher (the Caesar-on-a-rotating-keyword pattern)"
        },
        {
          "name": "Echo Pair",
          "role": "Playfair digraph cipher (letters encoded in pairs through a 5×5 grid)"
        },
        {
          "name": "Rail",
          "role": "Rail-fence + columnar transposition ciphers (rearrange letter order without changing the letters themselves)"
        },
        {
          "name": "Tally",
          "role": "Number-based codes (A1Z26, ASCII, binary, book ciphers — any mapping that converts letters to numbers)"
        },
        {
          "name": "Sift",
          "role": "Frequency analysis + cryptanalysis-by-statistics (the cipher-breaking method, not a cipher itself)"
        },
        {
          "name": "Lattice",
          "role": "Modern cryptography fundamentals — XOR, public-key concept, hashing (the irreversible / asymmetric family)"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/cipherforge/icon-sm.webp",
    "mascotPath": "/apps/cipherforge/mascot.webp",
    "mentor": "Cypher",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/cipherforge/icon.webp",
    "longTagline": "CipherForge is a spy academy where you learn the real science of secret codes! Run your own spy agency, crack codes from simple Caesar ciphers to tricky modern encryption, compete in code-breaking duels, and escape timed puzzle rooms. Every mission teaches you real cryptography that spies and comput",
    "features": [
      {
        "name": "Spy Missions",
        "description": "Each mission has a story where you need to encode or decode secret messages. Start with simple letter-shifting codes and work your way up to complex ciphers. Th"
      },
      {
        "name": "Code-Breaking Arena",
        "description": "Race against the clock to crack coded messages. Use the cipher workbench tools to analyze patterns, count letters, and crack the code before time runs out."
      },
      {
        "name": "Escape Rooms",
        "description": "Solve a series of cipher puzzles to escape before the timer hits zero. Each room has a theme and gets progressively harder. Use hints if you get stuck -- good s"
      },
      {
        "name": "Cipher Library",
        "description": "Study the history of secret codes, from ancient Rome to modern computers. Each cipher comes with its story and step-by-step instructions."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 0
    }
  },
  {
    "slug": "circuitforge",
    "name": "CircuitForge",
    "tagline": "Build circuits on a virtual breadboard, watch electricity flow, code virtual robots, and learn the engineering behind every electronic device you use.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/circuitforge/icon-sm.webp",
    "mascotPath": "/apps/circuitforge/mascot.webp",
    "mentor": "Watt",
    "distributedNarrative": true,
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/circuitforge/icon.webp",
    "longTagline": "CircuitForge is an electronics workshop on your phone! Build circuits on a virtual breadboard, watch electricity flow through every wire, measure voltage with a virtual multimeter, and even program robots with block coding. Learn how every electronic device around you actually works.",
    "features": [
      {
        "name": "Breadboard Builder",
        "description": "Place components like batteries, LEDs, resistors, and switches on a virtual breadboard. Connect them with wires and flip the switch to see if your circuit works"
      },
      {
        "name": "Virtual Multimeter",
        "description": "Use the multimeter tool to measure voltage and current at any point in your circuit. This helps you understand what the electricity is doing and fix problems."
      },
      {
        "name": "Code-a-Robot",
        "description": "Program a virtual robot using drag-and-drop code blocks. Tell it to move, turn, flash lights, and make sounds. Then watch it follow your instructions!"
      },
      {
        "name": "Engineering Challenges",
        "description": "Solve real-world puzzles like \"Build a circuit that makes two LEDs blink in a pattern\" or \"Design an alarm system.\" Each challenge teaches a new electronics con"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "cityforge",
    "name": "CityForge",
    "tagline": "Players design buildings and plan cities that must satisfy structural physics, environmental constraints, and citizen needs. Start with single buildings (understanding loads, materials, foundations), progress to neighborhoods and full cities with infrastructure, zoning, and sustainability challenges. The only STEM-focused architecture and urban planning app on iOS for ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/cityforge/icon-sm.webp",
    "mascotPath": "/apps/cityforge/mascot.webp",
    "mentor": "Plumb",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "CityForge's distributed-narrative cast embodies the 5 primitives of urban-equity design — zoning-with-neighbors, public-space community, walkable streets, equitable transit, and housing-as-human-right — as 5 animal-urbanist characters Plumb introduces across the 16 question kits. Urban-equity gate is foregrounded; Stoop's 'old places, not new ones, when we can' and Dwell's 'repair before replace; listen before plan' are load-bearing; NO real-architect mascots, NO blank-slate framing.",
      "members": [
        {
          "name": "Block",
          "role": "Zoning + density — the badger-tween with clay-block models who teaches zoning as 'plan for the neighbors first, not the buildings'"
        },
        {
          "name": "Stoop",
          "role": "Public space + community — the capybara-elder on a wooden stoop who treats public space as the city's living room, foregrounding existing stoop-cultures (Brooklyn / Latin American plazas / Italian piazzas / West African gathering trees)"
        },
        {
          "name": "Lane",
          "role": "Walkability + mobility — the rabbit-tween in safety-vest with a chalk-spool who teaches streets-as-spaces ('streets are rooms; cars are guests, not owners')"
        },
        {
          "name": "Hub",
          "role": "Transit nodes — the pangolin-tween in conductor-vest who teaches that transit is about ACCESS, not about cars-vs-trains ('many ways, equal ways; the bus matters as much as the train')"
        },
        {
          "name": "Dwell",
          "role": "Housing equity + repair — the owl-elder in a mended quilted-coat who teaches anti-displacement, repair-not-replace urbanism ('repair before replace; listen before plan; the people who live here ARE the design')"
        }
      ]
    },
    "iconHeroPath": "/apps/cityforge/icon.webp",
    "longTagline": "CityForge lets you be an architect and city planner! Design buildings that can actually stand up using real structural physics, then plan entire cities with roads, parks, water systems, and more. Every building you design has to satisfy real engineering rules, and every city you plan has to keep its",
    "features": [
      {
        "name": "Building Designer",
        "description": "Design buildings by choosing materials (wood, brick, steel, glass), placing walls and floors, and adding details. The physics engine tests your building -- if i"
      },
      {
        "name": "City Planner",
        "description": "Lay out a city grid with zones for homes, shops, and parks. Add infrastructure like roads, water pipes, and power lines. Balance your budget and keep citizens h"
      },
      {
        "name": "Commissions",
        "description": "Take on design challenges from virtual clients. They might want a tall tower, a cozy library, or an eco-friendly school. Meet their requirements while staying w"
      },
      {
        "name": "Sustainability Challenges",
        "description": "Design buildings and cities that are good for the environment. Use solar panels, green roofs, and smart water systems to reduce your environmental impact."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 3
    }
  },
  {
    "slug": "civicforge",
    "name": "CivicForge",
    "tagline": "Players are newly elected to their town's Youth Council, making real decisions about budgets, zoning, public services, and community issues. Every vote has consequences — build parks or fix potholes, fund the library or hire firefighters. Where iCivics teaches federal government through web-based quizzes, CivicForge teaches local government through iPhone-native simulation.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/civicforge/icon-sm.webp",
    "mascotPath": "/apps/civicforge/mascot.webp",
    "mentor": "Mayor Reed",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "CivicForge's 6-character virtue-archetype cast embodies six civic virtues — justice, liberty, equity, civility, participation, stewardship — via gender/culture-neutral animal personas (NO real political figures or political-tradition mascotizing). UNIQUE TO CIVICFORGE: the cast DELIBERATELY FADES across kits — Strong Presence (kits 1-6) → Reduced Recurrence as silent visual cameos (kits 7-11) → Guest Cameo Only at kit celebrations (kits 12-16). The methodology only does its job if the learner takes over the civic-reasoning role by mid-progression; a non-fading cast would compete with the Paul-Elder Socratic mentor's role. Critical design: NO character is named for its virtue (no 'Justice', no 'Liberty') — names are coined / archaic / Latin-root tokens so learners can encode the virtue on its own terms. Per `civicforge-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` (Wave 3, shipped 2026-05-21 — site backfill 2026-05-22 Wave 32a). Pre-mascot-generation playtest required with learners from differing political-family backgrounds. NOTE: code-side mentor is 'Liberty'; site mentor 'Mayor Reed' is a separate flagged reconciliation item (not part of this backfill).",
      "members": [
        { "name": "Verdis", "role": "Justice — the patient listener who weighs sides; bear with wooden scale + spectacles" },
        { "name": "Aera", "role": "Liberty (open-window) — keeper of open windows; snowy owl on shuttered window frame" },
        { "name": "Span", "role": "Equity — the bridge-builder; heron with mismatched planks for mismatched riverbanks" },
        { "name": "Cordis", "role": "Civility — disagreement-without-disrespect host; striped badger with mismatched cups + bow tie" },
        { "name": "Kindle", "role": "Participation — the door-opener; prairie dog at a half-open door pointing outward" },
        { "name": "Tellus", "role": "Stewardship — the long-view caretaker; ancient tortoise planting trees they will never sit under" }
      ]
    },
    "implementing": false,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/civicforge/icon.webp",
    "longTagline": "CivicForge puts you on the Youth Council of Millbrook, a small town that needs your help! The old council made a mess of things, and now you need to fix roads, fund the library, hire firefighters, and keep everyone happy -- all with a limited budget. Every vote you make has real consequences for the",
    "features": [
      {
        "name": "Budget Decisions",
        "description": "Millbrook has limited money and lots of needs. Should you fix the potholes or build a new park? Fund the library or hire more police? You decide where the money"
      },
      {
        "name": "Community Petitions",
        "description": "Residents send petitions asking for help. Read their concerns, investigate the issues, and decide how to respond. Not everyone agrees on what the town needs mos"
      },
      {
        "name": "Public Hearings",
        "description": "Hold hearings where AI-powered citizens speak for and against proposals. Listen to all sides, ask questions, and then vote. The best leaders listen before decid"
      },
      {
        "name": "Town Map",
        "description": "Visit different parts of Millbrook to see how your decisions affect real people. The town changes based on your votes -- new buildings appear, broken things get"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "claimcraft",
    "name": "ClaimCraft",
    "tagline": "Visual argument mapping game where players build claim-evidence-reasoning chains and compete in debate duels. Logical fallacies are attack moves to identify and counter. AI generates counterarguments and evaluates argument quality.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/claimcraft/icon-sm.webp",
    "mascotPath": "/apps/claimcraft/mascot.webp",
    "mentor": "Logos",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ClaimCraft's 5-character cast embodies the foundational argumentation primitives — claim (Posit, asserting-for-testing), evidence (Heft, weighing-with-care), warrant (Lean, connective-reasoning), counterargument (Counter, opponent-taking-seriously), and fallacy (Pry, trap-spotting starting with your own arguments). Logos (mentor; renamed from site placeholder 'Warrant' — which collided with the cast warrant-primitive role taken by Lean — to match code-side style guide) frames each primitive; cast embodies them at school-debate-club / community-forum scale. Epistemic-doubt gate enforced (CRITICAL): cast scaffolds reasoning between cynicism ('trust no one') and relativism ('all claims equal'); foregrounds 'what would change your mind?' as load-bearing question; cross-app inherits investigation-bias-safe register from SleuthLab Wave 17 + AI-ethics from AIForge Wave 13 + 18-fallacy catalogue from LogicQuest Wave 1.",
      "members": [
        { "name": "Posit", "role": "Claim — asserting-for-testing posture (claim is a card on the table, not a fortress)" },
        { "name": "Heft", "role": "Evidence — weighing-with-care posture (weight matters more than count)" },
        { "name": "Lean", "role": "Warrant — connective-reasoning posture (the BECAUSE between evidence + claim)" },
        { "name": "Counter", "role": "Counterargument — opponent-taking-seriously posture (best version of the other side strengthens yours)" },
        { "name": "Pry", "role": "Fallacy — trap-spotting posture (check YOUR argument first; 18-fallacy catalogue)" }
      ]
    },
    "implementing": false,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/claimcraft/icon.webp",
    "longTagline": "ClaimCraft teaches you how to build strong arguments and think clearly! You are an apprentice advocate in the Arena of Reason, where you stack claims, evidence, and warrants like building blocks to create powerful arguments. Then test them in debate duels against AI opponents. Spot logical fallacies",
    "features": [
      {
        "name": "Argument Builder",
        "description": "Build arguments by dragging blocks together. Start with a Claim (what you believe), add Evidence (facts that support it), and connect them with a Warrant (the r"
      },
      {
        "name": "Debate Duels",
        "description": "Face off against AI opponents in structured debates. Take turns presenting arguments and challenging each other. Use what you built in the Argument Builder to w"
      },
      {
        "name": "Fallacy Attacks",
        "description": "Learn to spot logical fallacies -- tricks in reasoning that make arguments seem stronger than they really are. When you spot one in your opponent's argument, ca"
      },
      {
        "name": "Evidence Cards",
        "description": "Collect evidence cards from different topics. The stronger and more relevant your evidence, the better your arguments will be."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 2
    }
  },
  {
    "slug": "climatequest",
    "name": "ClimateQuest",
    "tagline": "Navigate a living Earth system where greenhouse gases, ocean currents, ice sheets, and ecosystems interconnect — make policy decisions and observe centuries of consequences through interactive climate models. Ages 9-14.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/climatequest/icon-sm.webp",
    "iconHeroPath": "/apps/climatequest/icon.webp",
    "mascotPath": "/apps/climatequest/mascot.webp",
    "mentor": "Cirrus",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ClimateQuest teaches climate science as a **system of coupled processes** — atmosphere, hydrosphere, biosphere, cryosphere — connected through carbon, energy, and water flows.",
      "members": [
        {
          "name": "Haze",
          "role": "Atmosphere (air, gases, the sky as a thin layer)"
        },
        {
          "name": "Squall",
          "role": "Weather events (vs. climate — short-term variability)"
        },
        {
          "name": "Round",
          "role": "Carbon + water cycles (recurring loops, balance)"
        },
        {
          "name": "Blanket",
          "role": "Greenhouse effect (insulating gases)"
        },
        {
          "name": "Stitch",
          "role": "Collective action / policy / repair"
        }
      ]
    },
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "longTagline": "ClimateQuest is a climate science simulator where you explore how Earth's atmosphere, oceans, ice, and ecosystems are all connected. Adjust CO2 levels, interpret real climate data, build feedback loop diagrams, manage a coastal city, and make policy decisions -- watching decades of consequences unfo",
    "features": [
      {
        "name": "Earth System Simulator",
        "description": "Explore a simplified but scientifically accurate Earth model with atmosphere, ocean, ice, and biosphere layers. Adjust CO2 concentrations using sliders and obse"
      },
      {
        "name": "Evidence Lab",
        "description": "Interpret real climate data artifacts -- ice core charts, temperature anomaly graphs, sea level records, and ocean pH measurements. Each evidence type connects"
      },
      {
        "name": "Feedback Loop Puzzles",
        "description": "Discover how climate feedback mechanisms work by building cause-and-effect chains. Ice melts, albedo decreases, warming increases, more ice melts. Construct and"
      },
      {
        "name": "City Mayor Mode",
        "description": "Manage a coastal city facing climate impacts. Decide between sea walls and managed retreat, invest in green roofs and urban forests, build sustainable transport"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "coderealm",
    "name": "CodeRealm",
    "tagline": "Kids ages 10-14 program a companion robot using visual blocks that gradually \"peel back\" to reveal real Swift code as mastery increases. The block editor drives a SpriteKit game world where the robot navigates levels, solves puzzles, and defeats enemies through player-authored programs.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/coderealm/icon-sm.webp",
    "mascotPath": "/apps/coderealm/mascot.webp",
    "mentor": "Loop",
    "distributedNarrative": true,
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/coderealm/icon.webp",
    "longTagline": "CodeRealm is a programming adventure where you code a companion robot named Bit to save a digital world! Use visual code blocks to tell Bit what to do -- move, jump, collect items, and defeat bug enemies. As you get better, the blocks slowly peel back to reveal real Swift code underneath, so you lea",
    "features": [
      {
        "name": "Block Editor",
        "description": "Drag and drop code blocks to program Bit. Use blocks like \"Move Forward,\" \"Turn Left,\" \"If Enemy Ahead,\" and \"Repeat 3 Times.\" Connect them in the right order t"
      },
      {
        "name": "Adventure Levels",
        "description": "Each level is a puzzle in a corrupted digital world. Program Bit to navigate obstacles, collect data fragments, and fix glitches. The levels teach you loops, co"
      },
      {
        "name": "Peel-Back System",
        "description": "As you master concepts, the colorful blocks start to show the real Swift code they represent. First you see a little code peeking through, then more, until you"
      },
      {
        "name": "Debug Challenges",
        "description": "When your code does not work the way you expected, use the AI debug helper to figure out what went wrong. Learning to find and fix bugs is one of the most impor"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 3
    }
  },
  {
    "slug": "cosmosforge",
    "name": "CosmosForge",
    "tagline": "Travel 13.8 billion years back to the Big Bang, watch the first stars ignite, witness galaxies collide, peer inside black holes, and hunt for exoplanets — an astrophysics odyssey through scales of space and time that dwarf human imagination.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "Astrophysics has rich personification affordances — gravity already feels like a relentless tug, galaxies already feel like swirling dancers, nebulae like soft veils.",
      "members": [
        {
          "name": "Gleam",
          "role": "Stellar luminosity / electromagnetic radiation / observation"
        },
        {
          "name": "Sway",
          "role": "Gravity / orbits / mutual attraction"
        },
        {
          "name": "Swirl",
          "role": "Galactic rotation / spiral structure / angular momentum"
        },
        {
          "name": "Mist",
          "role": "Nebulae / dust / gas / accretion / stellar nurseries"
        },
        {
          "name": "Tide",
          "role": "Cosmological expansion / Hubble flow / cosmic time"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/cosmosforge/icon-sm.webp",
    "iconHeroPath": "/apps/cosmosforge/icon.webp",
    "mascotPath": "/apps/cosmosforge/mascot.webp",
    "mentor": "Nova",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "longTagline": "CosmosForge takes you on a journey through 13.8 billion years of cosmic history! Watch stars be born and die, collide galaxies together, peer inside black holes, and hunt for planets around distant stars. Nova -- your cosmic guide -- connects what you discover to real missions like the James Webb Sp",
    "features": [
      {
        "name": "Stellar Evolution",
        "description": "Follow the life of a star from a cloud of gas to its final fate. Adjust the star's mass and watch how it changes everything -- low-mass stars become white dwarf"
      },
      {
        "name": "Galaxy Simulation",
        "description": "Watch galaxies collide in a particle simulation. Each dot represents millions of stars. See how gravity pulls spiral arms apart and reshapes galaxies over billi"
      },
      {
        "name": "Black Hole Physics",
        "description": "Explore what happens near a black hole. See light bend around the event horizon through gravitational lensing. Learn about spaghettification, time dilation, and"
      },
      {
        "name": "Exoplanet Hunters",
        "description": "Detect planets around distant stars using the transit method. Watch the light curve dip as a planet passes in front of its star. Measure the dip to calculate th"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "craftforge",
    "name": "CraftForge",
    "tagline": "Virtual miniature painting and model-building that teaches color theory, brush techniques, and material science at micro scale. Players learn complementary/analogous/triadic color schemes, practice basecoating, washing, drybrushing, highlighting, and blending techniques, and explore the chemistry of acrylic, enamel, and oil paints.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/craftforge/icon-sm.webp",
    "iconHeroPath": "/apps/craftforge/icon.webp",
    "mascotPath": "/apps/craftforge/mascot.webp",
    "mentor": "Iris",
    "implementing": true,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "hasUserGuide": true,
    "modes": {
      "learn": 1,
      "play": 1,
      "create": 3
    },
    "distributedNarrative": true,
    "dnCast": {
      "intro": "CraftForge's distributed-narrative cast embodies the 5 stages of miniature painting — surface prep, basecoat/wash, color mixing, layered application, and fine detail — as 5 animal-painter characters Iris introduces across the 16 question kits. Perfectionism-gate framing is foregrounded; cast catchphrases normalize WIP-ugly as productive technique, never as a mistake to fix.",
      "members": [
        { "name": "Sand", "role": "Surface preparation — the patient pangolin-elder who treats priming as the invisible foundation everything else stands on ('ready surface first; the paint listens to the surface')" },
        { "name": "Dab", "role": "Basecoat + wash — the confident vole-tween of broad strokes who treats basecoats as the loud first hello and washes as the quiet shadow-finder ('big shapes first, shadows fall second')" },
        { "name": "Blend", "role": "Color mixing + highlighting — the chameleon-tween of color-vocabulary who treats color theory as language, not rulebook ('two colors meet, a third is born — mix slow; listen to what they're making')" },
        { "name": "Coat", "role": "Layered application + varnish — the steady badger-tween who treats every coat as deliberate next-stratum patience ('layer waits for layer; patience is the secret pigment')" },
        { "name": "Tip", "role": "Fine detail + freehand — the relaxed treefrog-tween of fearless small-brush play who carries the cluster's perfectionism-gate anchor ('tiny brushes, loose wrist — wobbly is fine; the eye fixes it from arm's length')" }
      ]
    }
  },
  {
    "slug": "creaturecare",
    "name": "CreatureCare",
    "tagline": "Players run an animal hospital, diagnosing and treating animals using real veterinary techniques",
    "vertical": "dir-fedc",
    "heroColor": "#FFA726",
    "iconPath": "/apps/creaturecare/icon-sm.webp",
    "mascotPath": "/apps/creaturecare/mascot.webp",
    "mentor": "Dr. Fern",
    "implementing": true,
    "standards": [
      "DIR/FEDC Capacities 2-3",
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/creaturecare/icon.webp",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "CreatureCare's distributed-narrative cast embodies the 5 stages of veterinary workflow — observation, diagnosis, treatment, recovery, and welfare ethics — as 5 animal-partner characters Dr. Fern introduces across the 16 question kits. Welfare-ethics framing is foregrounded; the cast inherits the trauma-informed posture for animal-illness + end-of-life content.",
      "members": [
        {
          "name": "Heed",
          "role": "Patient assessment — the listener who treats observation as relationship, not data-gathering ('listen first, look second, then we know')"
        },
        {
          "name": "Chart",
          "role": "Diagnostics — the thoughtful pattern-finder who treats lab data as story-fragments ('numbers are notes; notes are not the song')"
        },
        {
          "name": "Tend",
          "role": "Treatment delivery — the steady-handed practitioner who foregrounds consent and explains procedures BEFORE doing them ('slow hands, calm voice, patient first')"
        },
        {
          "name": "Knit",
          "role": "Recovery + follow-up — the patient tortoise-elder who teaches that healing is slow and that's the point ('days come, bandages come off, walk again — not yet, soon')"
        },
        {
          "name": "Bond",
          "role": "Welfare ethics + animal-human relationship — the wise heron-elder who carries the welfare-ethics gate at the kit-12 capstone ('care is more than cure — sometimes care means stopping; always care means seeing')"
        }
      ]
    },
    "longTagline": "CreatureCare lets you run your own animal hospital! Diagnose and treat animals using real veterinary techniques -- take temperatures, read X-rays, run blood tests, perform surgery mini-games, and watch your patients recover. This is real vet science, not just tapping to heal!",
    "features": [
      {
        "name": "Patient Intake",
        "description": "When an animal arrives, listen to the owner describe what is wrong. Check the pet's file and prepare for the examination."
      },
      {
        "name": "Examination Room",
        "description": "Use real vet tools to examine your patient. Take their temperature, check their heart rate, look in their ears and eyes, and feel for any lumps or sore spots. W"
      },
      {
        "name": "Lab and Diagnostics",
        "description": "Run blood tests, take X-rays, and analyze samples under the microscope. Compare results to normal ranges to figure out what is wrong."
      },
      {
        "name": "Treatment",
        "description": "Choose the right treatment based on your diagnosis. It might be medicine, bandaging, surgery, or rest. Follow up with your patient to make sure they are getting"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "cubesensei",
    "name": "CubeSensei",
    "tagline": "Learn the Rubik's Cube with a patient mentor and bite-sized practice.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/cubesensei/icon-sm.webp",
    "mascotPath": "/apps/cubesensei/mascot.webp",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/cubesensei/icon.webp",
    "longTagline": "CubeSensei is an app that teaches you how to solve a Rubik's Cube — and **27 other puzzles** too! You'll start with the basics and work your way up to speedcubing, magic tricks, adventure games, and even the math behind it all.",
    "features": [
      {
        "name": "The Puzzles",
        "description": "CubeSensei has **28 different puzzles** you can solve!"
      },
      {
        "name": "Shape Modifications (7)",
        "description": "These look different but solve like a 3x3:"
      },
      {
        "name": "How Puzzles Unlock",
        "description": "You start with the 2x2. As you practice more, new puzzles and features unlock! Check the **Skill Tree** to see what's coming next."
      },
      {
        "name": "Practice Mode",
        "description": "Pick a puzzle, then tap **Practice**. You'll see a scrambled puzzle in 3D."
      }
    ],
    "mentor": "Cubix",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "CubeSensei's 6-character method-steward cast operates at the SOLVING METHOD scale (5 methods + 1 cross-method coordinator) — every algorithm in CubeSensei's 198-entry taxonomy is already a named pattern primitive at finer grain, so the right cast scale is method-stewards (Layer / Cross / Block / Edge / Pair) + cross-method look-ahead coordinator (Look). Cast appears on method-intro screens + algorithm-group introductions + Cube Builder collectibles + adventure-mode encounter art; static catchphrases ONLY (no FoundationModels access). NO real-cuber mascotization (Fridrich / Roux / Zborowski / Ortega credited as method-creators in static metadata ONLY). Per `cubesensei-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22. Cubix preserved as AI coach + primary visual identity. Labsmith generates ~$1.62 cast assets.",
      "members": [
        { "name": "Layer", "role": "Beginner method — layer-by-layer steward; 'Bottom first. Always.'" },
        { "name": "Cross", "role": "CFOP method — speedcubing steward; 'Cross, F2L, OLL, PLL — that's the road.'" },
        { "name": "Block", "role": "Roux method — block-building steward; 'Build the blocks. Skip the cross.'" },
        { "name": "Edge", "role": "ZZ method — edge-orientation steward; 'Orient first. Then everything's faster.'" },
        { "name": "Pair", "role": "Ortega method — 2x2 specialist; 'Two-by-two has its own rules.'" },
        { "name": "Look", "role": "Cross-method look-ahead coordinator; 'Eyes ahead. Hands following.'" }
      ]
    },
    
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 3,
      "create": 2
    }
  },
  {
    "slug": "curiosityquest",
    "name": "CuriosityQuest",
    "tagline": "A daily-question adventure that builds curiosity into habit.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/curiosityquest/icon-sm.webp",
    "mascotPath": "/apps/curiosityquest/mascot.webp",
    "mentor": "Lumen",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "CuriosityQuest's 5-character cast embodies the foundational inquiry primitives — observation (Notice, slow-looking-before-naming), intuition (Inkling, courageous-first-guesses), question-deepening (Ponder, 'what does that even mean?'), uncertainty-tolerance (Linger, Negative-Capability patience), and intellectual humility (Revise, changing-your-mind-as-the-proudest-move). Lumen (mentor; renamed from legacy 'Sage' which collided with MindForge + from site 'Wonder' which collided with ResearchQuest Wave 21 cast + Wave 23 brief pre-reserved-AVOID) frames each primitive; cast embodies them at school-science-club / kitchen-table-experimenter scale (NEVER 'real scientist' / 'natural curiosity' / credentialism / 'you should know this already' gatekeeping). 'Stupid question' anxiety gate enforced: cast normalizes ALL questions as legitimate; Ponder's 'what does that even mean?' is structurally the MOST useful question in every kit; static-response gating for 'I'm not smart enough to ask' anxiety signals; practice-not-talent framing throughout.",
      "members": [
        { "name": "Notice", "role": "Observation / slow looking — name what you SEE before why; most wonder lives in the noticing" },
        { "name": "Inkling", "role": "Intuition / first-guess hunch — your guess is INFORMATION, not a final answer" },
        { "name": "Ponder", "role": "Deepening the question — 'what does that even mean?' is the foundation, never the failure" },
        { "name": "Linger", "role": "Staying with uncertainty — Negative Capability; some good questions take days, the best take years" },
        { "name": "Revise", "role": "Changing your mind — intellectual humility; being wrong is how knowledge MOVES" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/curiosityquest/icon.webp",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "dancequest",
    "name": "DanceQuest",
    "tagline": "Dance as creative art: explore genres, compose choreography, analyze performances, and get camera-based movement feedback -- building artistic expression through dance composition and performance.",
    "vertical": "steam",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "DanceQuest sits in the creative-studio cluster alongside EnsembleQuest / EffectsForge / StageForge (Wave 14). The 5-character cast maps to NCAS Dance's elements (body / space / time / energy / locomotion) and is intentionally non-lean-dancer-coded for body-image safety.",
      "members": [
        { "name": "Pose", "role": "Body-awareness + position — listening to your own shape" },
        { "name": "Trail", "role": "Space + pathways — the floor-pattern shapes you draw moving through space" },
        { "name": "Phrase", "role": "Time + tempo — how movement is organized in musical counts" },
        { "name": "Lift", "role": "Energy + effort + dynamics — quality of movement, not aesthetic judgment" },
        { "name": "Glide", "role": "Locomotion — the craft of going from here to there with whole attention" }
      ]
    },
    "heroColor": "#E91E63",
    "iconPath": "/apps/dancequest/icon-sm.webp",
    "mascotPath": "/apps/dancequest/mascot.webp",
    "mentor": "Rhythm",
    "implementing": true,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/dancequest/icon.webp",
    "longTagline": "DanceQuest is a dance arts studio where you explore genres, compose choreography, and express yourself through movement. You will learn moves from ballet, hip-hop, contemporary, and folk dance traditions, then arrange them into your own choreography on a music timeline. Optional camera-based movemen",
    "features": [
      {
        "name": "Learning Moves",
        "description": "Each genre has a vocabulary of named dance moves organized by difficulty. Start with basics and unlock more complex moves as you progress. Each move shows an an"
      },
      {
        "name": "Composing Choreography",
        "description": "The choreography timeline is where you create dance sequences. Drag moves onto the timeline, set their timing to musical counts, and arrange them in the order y"
      },
      {
        "name": "Genre Exploration",
        "description": "Explore four distinct dance genres, each with its own movement vocabulary, styling rules, and music. Ballet emphasizes grace and precision. Hip-hop brings energ"
      },
      {
        "name": "Camera Movement Feedback",
        "description": "If you choose to enable the camera, DanceQuest uses pose detection to give you gentle movement guidance as you practice. This is optional and entirely on-device"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 2
    }
  },
  {
    "slug": "dataforge",
    "name": "DataForge",
    "tagline": "Visual, block-based data science environment where players collect, clean, analyze, and visualize real-world datasets. No coding required — drag-and-drop data pipeline builder.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/dataforge/icon-sm.webp",
    "mascotPath": "/apps/dataforge/mascot.webp",
    "mentor": "Datum",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "DataForge's 5-character cast embodies the foundational data-pipeline primitives — collection (Catch, who/what/why/when), cleaning (Tidy, documented choices), visualization (Graph, shape-of-the-story), interpretation (Tell, correlation-vs-causation), and ethics (Guard, bias-privacy-harm-consent — structurally present in every kit from kit 6 onward). Datum (mentor; renamed from 'Data' to resolve mentor-vs-curriculum collision per Wave 21 brief — Latin singular 'one data point' carries humility + ethics-foregrounding) frames each primitive; cast embodies them at school-data-club / community-data-journalism scale. Data-ethics gate enforced (CRITICAL): cast NEVER frames data collection as neutral; foregrounds 'data is collected by someone, for a purpose'; bias enters at every step; cross-app inherits AI-ethics register from AIForge Wave 13 (mandatory Stake-Guard + Feed-Catch coordination).",
      "members": [
        { "name": "Catch", "role": "Data collection — who-what-why-when posture (every dataset has a collector + purpose + omissions)" },
        { "name": "Tidy", "role": "Data cleaning — preparation-with-integrity posture (every cleaning choice changes meaning; document the choices)" },
        { "name": "Graph", "role": "Data visualization — shape-of-the-story posture (which chart tells the truth, not the loudest one)" },
        { "name": "Tell", "role": "Interpretation — correlation-not-causation posture (data shows patterns; humans interpret; confidence not certainty)" },
        { "name": "Guard", "role": "Data ethics — bias-privacy-harm-consent posture (who benefits, who's harmed, who decided; structurally present in every kit from kit 6)" }
      ]
    },
    "implementing": true,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "iconHeroPath": "/apps/dataforge/icon.webp",
    "longTagline": "DataForge is a data science playground where you explore real-world information! Build data pipelines by connecting blocks, create colorful charts and graphs, and test your ideas about what the data means. Think of it as building with blocks, but instead of towers, you build discoveries.",
    "features": [
      {
        "name": "Pipeline Builder",
        "description": "Drag data blocks onto the canvas and connect them. Start with a dataset block (your information), add filter blocks (to focus on what matters), and finish with"
      },
      {
        "name": "Datasets",
        "description": "Explore real-world datasets about topics like weather, animals, sports, and more. Each dataset is a collection of facts waiting for you to discover patterns."
      },
      {
        "name": "Charts and Graphs",
        "description": "Turn numbers into pictures! Create bar charts, line graphs, pie charts, and scatter plots. The right chart can reveal patterns that are hidden in raw numbers."
      },
      {
        "name": "Hypothesis Testing",
        "description": "Make a guess about what the data will show, then build a pipeline to test it. Were you right? Either way, you learn something new!"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "debateforge",
    "name": "DebateForge",
    "tagline": "Competitive Speech & Debate Arena for ages 10-14 — master argumentation by researching evidence, building cases, delivering speeches, and competing in AI-judged debate tournaments where steelmanning, civil disagreement, and concession craft determine the strongest debater. Aligned to CCSS Speaking & Listening standards.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/debateforge/icon-sm.webp",
    "iconHeroPath": "/apps/debateforge/icon.webp",
    "mascotPath": "/apps/debateforge/mascot.webp",
    "mentor": "Rhetor",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "DebateForge's 5-character cast embodies the foundational argumentation primitives per NSDA + Toulmin (claim/warrant/data) + steelman tradition — case-construction (Build), evidence-evaluation (Weigh), steelmanning-the-opposing-view (Steel), civil-rebuttal-not-rebuke (Reply), and changing-your-mind-in-light-of-evidence-as-strength (Yield). Rhetor (mentor; rename from code-side generic placeholder 'Mentor' + site entry creation — Greek: speaker; classical-academic register parallel to Veritas + Cura; non-religious) frames each primitive; cast embodies them at school-debate-club / family-dinner-disagreement / community-forum scale (NEVER national-debate-champion / pundit / lawyer / politician framing). Polarization-amplification gate enforced (CRITICAL — UNIQUE to DebateForge in Wave 25): cast NEVER positions disagreement as combat; banned vocabulary 'crush/destroy/own/demolish/rekt' in cast voice + AI opponent + AI judge; Steel's structural presence from kit 5 onward names 'best version of opposing view BEFORE arguing with it' as load-bearing; debate-arena scoring measures CRAFT MOVES (citation quality + steelman fidelity + civil rebuttal + evidence weighing + concession) NOT raw winning. Bullying-register gate enforced: Reply's 'I disagree because' structurally distinct from 'you're wrong because'. Identity-debate avoidance gate enforced (CRITICAL): kit 9 explicit content rule + AI opponent topic-filter REQUIRED — never debate marginalized identities' validity. No real-politicians + no real-debaters mascotization (inherits ClaimCraft Wave 21). External sensitivity reviewer with debate-pedagogy + civil-discourse + youth-conflict-resolution + identity-affirming-pedagogy expertise REQUIRED for kit 9 + AI opponent topic-filter audit ($500-$1,000).",
      "members": [
        { "name": "Build", "role": "Case-construction — claim + warrant + evidence as architecture; what does your case REQUIRE to stand?" },
        { "name": "Weigh", "role": "Evidence-evaluation — sources have positions, evidence has limits; credibility-as-calibration (shared design language with TruthQuest Weigh — cross-app continuity)" },
        { "name": "Steel", "role": "Steelmanning the opposing view — strongest version of what they would say IF you let them; visibly holds up opposing-view-card with two hands" },
        { "name": "Reply", "role": "Civil-rebuttal-not-rebuke — 'I disagree because' not 'you're wrong because'; address the ARGUMENT not the PERSON" },
        { "name": "Yield", "role": "Changing-your-mind-in-light-of-evidence-as-strength — concession is craft + intellectual courage; visibly carries 'updated' badge (shared design language with TruthQuest Update — cross-app continuity)" }
      ]
    },
    "implementing": false,
    "standards": [
      "CCSS Speaking & Listening",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "longTagline": "DebateForge is a competitive debate arena where you research evidence, build cases, deliver speeches, and compete in AI-judged tournaments. Learn to steelman opposing views, identify fallacies, deliver effective rebuttals, and change your mind in light of better evidence — debate craft as civil-discourse skill, not argument-as-weapon.",
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    }
  },
  {
    "slug": "depthquest",
    "name": "DepthQuest",
    "tagline": "Players pilot a research submarine through ocean zones (sunlight, twilight, midnight, abyssal, hadal), discovering marine species, studying coral reef health, mapping the ocean floor, and answering marine science challenges. The only gamified ocean exploration RPG on iOS for ages 9-14.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/depthquest/icon-sm.webp",
    "mascotPath": "/apps/depthquest/mascot.webp",
    "mentor": "Marlin",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "DepthQuest's 5-character ocean-zone-steward cast maps 1:1 to the 5 ocean zones — sunlit / twilight / midnight / abyss / hadal. Cast: Reef / Drift / Press / Smoke / Trench. UNIQUE TRAUMA-INFORMED FLAG: ocean-acidification + coral-bleaching + plastic-pollution content is climate-trauma-adjacent — off-ramps required. Per `depthquest-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22. Marlin preserved as mentor. Vent→Smoke collision-rename applied. Labsmith generates ~$1.35 cast assets + $300-500 marine-conservation-pedagogy sensitivity reviewer RECOMMENDED. Cross-app cameos: Reef ↔ EcoSphere+WildLens+BiomeForge (biodiversity-cluster load-bearing); Drift+Press ↔ ClimateQuest; Smoke ↔ ChemQuest Wave 32a sibling (chemosynthesis ↔ chemistry); Trench ↔ FossilForge (ancient-time-depth). Digital Aquarium gets all 5 stewards as buildable collectibles.",
      "members": [
        { "name": "Reef", "role": "Sunlit zone — coral + photosynthesis-zone biodiversity" },
        { "name": "Drift", "role": "Twilight zone — bioluminescent + migratory species" },
        { "name": "Press", "role": "Midnight zone — pressure + cold + giant-squid scale" },
        { "name": "Smoke", "role": "Abyss zone — hydrothermal vents + chemosynthesis" },
        { "name": "Trench", "role": "Hadal zone — deepest trenches + extreme-adaptation" }
      ]
    },
    
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/depthquest/icon.webp",
    "longTagline": "DepthQuest is an ocean exploration RPG where you pilot a research submarine through five ocean zones, from sunny surface waters down to the deepest trenches. Discover amazing marine creatures, study coral reef health, and build your own Digital Aquarium with the species you find!",
    "features": [
      {
        "name": "Submarine Navigation",
        "description": "Pilot your submarine through different ocean zones. Each zone gets deeper and more mysterious -- from the bright Sunlight Zone to the pitch-dark Hadal Zone. Wat"
      },
      {
        "name": "Species Discovery",
        "description": "Scan marine creatures you encounter to learn about them. Each species has details about its habitat, diet, adaptations, and role in the ecosystem. Some rare spe"
      },
      {
        "name": "Coral Reef Studies",
        "description": "Visit coral reefs and study their health. Measure water temperature, check for bleaching, count species diversity, and learn why reefs are so important to ocean"
      },
      {
        "name": "Digital Aquarium",
        "description": "Build and manage your own virtual aquarium. Add the species you have discovered, create the right habitat conditions, and watch your aquarium ecosystem come ali"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "digquest",
    "name": "DigQuest",
    "tagline": "Excavate ancient sites layer by layer, analyze artifacts with real archaeological methods, and reconstruct the stories of lost civilizations — from Mesopotamia to the Maya.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/digquest/icon-sm.webp",
    "mascotPath": "/apps/digquest/mascot.webp",
    "mentor": "Trowel",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "DigQuest's 5-character cast embodies the foundational archaeology-and-cultural-context primitives — stratigraphic context (Layer), artifact-typological analysis (Shape), dating techniques (Past), cultural-context inference (Keep), and community-partnership ethics (Ask). Trowel (mentor) frames each primitive; cast embodies them at youth-archaeology-club scale (NEVER Indiana-Jones / treasure-hunter / pith-helmet-colonialism register). Cultural-archaeology gate enforced (STRONGEST Wave 17 sensitivity burden): NAGPRA + UNDRIP-grounded framing; Ask co-introduces with Keep at kit 7 as the cluster's ethical anchor.",
      "members": [
        { "name": "Layer", "role": "Stratigraphic context — where in the layered earth? (vertical chronology, context integrity)" },
        { "name": "Shape", "role": "Artifact-typological analysis — what family of object? (comparative typology, craft traditions)" },
        { "name": "Past", "role": "Dating techniques — when by which method? (dates as ranges with confidence intervals)" },
        { "name": "Keep", "role": "Cultural-context inference — keep-what-people-said, not invent-what-they-must-have-meant" },
        { "name": "Ask", "role": "Community-partnership ethics — whose story is this and who gets to tell it? (NAGPRA + UNDRIP-grounded, descendant-community partnership)" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/digquest/icon.webp",
    "longTagline": "DigQuest turns you into an archaeologist! Excavate ancient dig sites grid by grid, analyze mysterious artifacts in your lab, and piece together the stories of lost civilizations. Every discovery is a clue that helps you understand how ancient people lived, worked, and played.",
    "features": [
      {
        "name": "Excavation",
        "description": "Carefully dig through layers of earth grid by grid. Different soil layers come from different time periods. Go slowly -- rushing can damage artifacts! Use the r"
      },
      {
        "name": "Artifact Lab",
        "description": "Bring your finds to the lab for analysis. Clean them, identify what they are, figure out how old they are using dating methods, and catalog them. Some broken ar"
      },
      {
        "name": "Civilization Stories",
        "description": "As you find more artifacts from the same civilization, you unlock their story. Learn about 12 different ancient cultures and how they lived."
      },
      {
        "name": "Field Journal",
        "description": "Sketch your artifacts, write notes about your discoveries, and record your theories. Great archaeologists always keep detailed notes!"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 0
    }
  },
  {
    "slug": "discretequest",
    "name": "DiscreteQuest",
    "tagline": "Exploration game teaching graph theory, combinatorics, and number theory through real-world mysteries. Includes AMC 8/MATHCOUNTS competition timer mode. First gamified discrete math app for ages 9-14.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "Habgood intrinsic-integration test: **the character's behavior IS the discrete pattern**.",
      "members": [
        {
          "name": "Sortie the Set-Curator",
          "role": "Sets, subsets, set operations (union, intersection, difference)"
        },
        {
          "name": "Tally the Pattern-Counter",
          "role": "Counting principles and combinatorics (multiplication rule, permutations, combinations)"
        },
        {
          "name": "Verity the Truth-Tester",
          "role": "Propositional logic, truth tables, AND/OR/NOT operators"
        },
        {
          "name": "Wander the Bridge-Walker",
          "role": "Graph theory — Eulerian paths, Hamiltonian paths, connectivity"
        },
        {
          "name": "Coil the Self-Reference",
          "role": "Recursion and sequences (Fibonacci, factorials, recursive patterns)"
        },
        {
          "name": "Prime the Indivisible",
          "role": "Number theory — primes, factorization, modular arithmetic"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/discretequest/icon-sm.webp",
    "mascotPath": "/apps/discretequest/mascot.webp",
    "mentor": "Vertex",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/discretequest/icon.webp",
    "longTagline": "DiscreteQuest teaches you the coolest math you have never heard of -- discrete math! Solve mysteries using graph theory, figure out how to count impossible things with combinatorics, and discover hidden patterns with number theory. Plus, practice for real math competitions like AMC 8 and MATHCOUNTS.",
    "features": [
      {
        "name": "Mystery Missions",
        "description": "Each mission is a real-world mystery that needs math to solve. Help fix a broken computer network (graph theory), plan a tournament schedule (combinatorics), or"
      },
      {
        "name": "Graph Explorer",
        "description": "Draw and explore networks of dots and lines. Find the shortest path between cities, figure out if a maze can be solved, and discover how social networks connect"
      },
      {
        "name": "Competition Mode",
        "description": "Practice for AMC 8 and MATHCOUNTS with timed problems that match real competition formats. Track your scores and watch yourself improve over time."
      },
      {
        "name": "Number Lab",
        "description": "Explore prime numbers, factors, and patterns with interactive tools. Find out why some numbers are special and discover relationships between them."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "ecosphere",
    "name": "EcoSphere",
    "tagline": "Interactive climate and earth systems simulator where players manage interconnected ecosystems across geological time scales. Balance atmosphere, hydrosphere, geosphere, and biosphere while answering questions that unlock simulation controls. Every decision cascades through Earth's systems — pump CO2 and watch ice caps shrink, plant forests and track carbon sequestration in real time.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/ecosphere/icon-sm.webp",
    "mascotPath": "/apps/ecosphere/mascot.webp",
    "mentor": "Terra",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/ecosphere/icon.webp",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "Ecology has rich personification affordances — trophic levels feel like roles in a community; niches feel like jobs; succession feels like a slow shift.",
      "members": [
        {
          "name": "Chain",
          "role": "Food chain / trophic flow (energy moving up levels)"
        },
        {
          "name": "Niche",
          "role": "Ecological role / job-in-the-ecosystem"
        },
        {
          "name": "Phase",
          "role": "Succession / ecosystem change over time (primary, secondary, climax)"
        },
        {
          "name": "Crown",
          "role": "Canopy / trophic-pyramid structure (top vs. base)"
        },
        {
          "name": "Brink",
          "role": "Tipping points / ecosystem thresholds / resilience-or-collapse"
        }
      ]
    },
    "longTagline": "EcoSphere puts you in charge of planet Earth! Manage the atmosphere, oceans, land, and living things across millions of years. Make decisions about energy, pollution, and resources, and watch how everything connects. Your choices affect the whole planet -- can you keep Earth healthy?",
    "features": [
      {
        "name": "Earth Systems Dashboard",
        "description": "Monitor four connected systems: the atmosphere (air), hydrosphere (water), geosphere (land), and biosphere (living things). Everything is linked -- changing one"
      },
      {
        "name": "Climate Decisions",
        "description": "Make choices about energy sources, land use, pollution rules, and resource management. Should you build solar farms or keep using fossil fuels? Protect the fore"
      },
      {
        "name": "Time Controls",
        "description": "Speed up time to see the long-term effects of your decisions. A small change today can create a big difference in 100 years. You can also travel back in time to"
      },
      {
        "name": "Action Modules",
        "description": "Calculate your carbon footprint, compare energy sources, and test climate policies. See the real numbers behind climate change."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "effectsforge",
    "name": "EffectsForge",
    "tagline": "Learn the science and art behind movie special effects — prosthetics chemistry, Foley sound physics, forced perspective optics, stop-motion animation, and lighting design — then produce your own short films.",
    "vertical": "steam",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "EffectsForge's 5-character cast is an exact parallel to the 5 hands-on labs — each character is the craft specialist for one technique. Cast frames effects as illusion + craft, never realistic injury (gore-gate enforced).",
      "members": [
        { "name": "Crunch", "role": "Foley sound — practical sound effects from everyday objects" },
        { "name": "Trick", "role": "Forced perspective — the optical illusion that resizes worlds" },
        { "name": "Skin", "role": "Prosthetic makeup — craft + chemistry for character, never realistic injury" },
        { "name": "Step", "role": "Stop-motion animation — frame by frame, one decision at a time" },
        { "name": "Lamp", "role": "Lighting design — the silent author of mood" }
      ]
    },
    "heroColor": "#E91E63",
    "iconPath": "/apps/effectsforge/icon-sm.webp",
    "mascotPath": "/apps/effectsforge/mascot.webp",
    "mentor": "Render",
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/effectsforge/icon.webp",
    "longTagline": "EffectsForge is a movie special effects studio! Learn the real science and art behind Hollywood effects -- build monster prosthetics, create sound effects, play with forced perspective tricks, animate stop-motion scenes, and design dramatic lighting. Discover how your favorite movies make the imposs",
    "features": [
      {
        "name": "Lighting Lab",
        "description": "Learn three-point lighting like a real filmmaker. Move lights around to create drama, suspense, or comedy just by changing where shadows fall."
      },
      {
        "name": "Foley Studio",
        "description": "Record your own sound effects using everyday objects! Learn how movie sound artists create the sounds of footsteps, rain, swords clashing, and more using surpri"
      },
      {
        "name": "Perspective Workshop",
        "description": "Discover the optical tricks that make movie monsters look giant or heroes look tiny. Move objects and cameras to create mind-bending forced perspective shots."
      },
      {
        "name": "Stop-Motion Studio",
        "description": "Build frame-by-frame animations. Move your characters a tiny bit, take a frame, move them again. String the frames together and watch your creation come to life"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "ensemblequest",
    "name": "EnsembleQuest",
    "tagline": "Gamified cooperative creative projects that build social skills incrementally through a progressive social ladder: Solo, then Pair, then Group, then Perform. Music and art creation serve as the vehicle for structured social interaction, with explicit visual scaffolding for every social step -- visual turn timers, role cards, social scripts, and a communication toolkit.",
    "vertical": "steam",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "EnsembleQuest's 5-character cast embodies the collaboration moves a cooperative-arts ensemble needs. Designed for autistic and other neurodivergent learners; cast inherits dual-palette autism-aware art and a collaboration-shame gate that ensures the cast always models repair + invitation, never clique behavior.",
      "members": [
        { "name": "Part", "role": "Role-holding — knowing what MY part is, separate from but supporting the whole" },
        { "name": "Turn", "role": "Turn-taking — the rhythm of give-and-receive across an ensemble" },
        { "name": "Ear", "role": "Active listening — receiving the other person's contribution before adding your own" },
        { "name": "Welcome", "role": "Invitation + repair — bringing back someone who's drifted out of the ensemble" },
        { "name": "Share", "role": "Synthesis-in-performance — the moment many parts become one piece" }
      ]
    },
    "heroColor": "#E91E63",
    "iconPath": "/apps/ensemblequest/icon-sm.webp",
    "mascotPath": "/apps/ensemblequest/mascot.webp",
    "mentor": "Choir",
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/ensemblequest/icon.webp",
    "longTagline": "EnsembleQuest is a creative arts app where you make music and art together with others! It is designed to make working together comfortable and clear, with visual timers, role cards, and helpful scripts that show you exactly when it is your turn and what to do. Start creating on your own, then gradu",
    "features": [
      {
        "name": "Solo Mode",
        "description": "Create music on the grid or paint on the canvas by yourself. There is no rush and no wrong answers. Get comfortable with the tools before working with others."
      },
      {
        "name": "Pair Projects",
        "description": "Work with one partner on a shared creation. Visual turn timers show whose turn it is and how long they have. Role cards explain what each person does. Scripts h"
      },
      {
        "name": "Group Projects",
        "description": "Collaborate with a small group. Each person has a clear role, and the app manages turns so everyone gets their fair share of time."
      },
      {
        "name": "Performance Stage",
        "description": "Share your group creation with an audience! The app guides the performance with a clear plan so everyone knows what to do."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 2
    }
  },
  {
    "slug": "equationquest",
    "name": "EquationQuest",
    "tagline": "Visual balance-scale approach to the entire CCSS EE domain",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "EquationQuest sits in the **math-mountains zone** alongside GeometryForge / ProofQuest / FunctionForge / RatioRealm / DiscreteQuest / ChanceForge — all 6 ship distributed-narrative casts.",
      "members": [
        {
          "name": "Lever",
          "role": "Maintaining balance — do the same thing to both sides"
        },
        {
          "name": "Solo",
          "role": "Isolating the variable — moving everything else away from x"
        },
        {
          "name": "Undo",
          "role": "Inverse operations — addition ↔ subtraction, multiplication ↔ division"
        },
        {
          "name": "Spread",
          "role": "Distribution — multiplying across parentheses"
        },
        {
          "name": "Flipper",
          "role": "The sign-flip in inequalities when multiplying/dividing by a negative"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/equationquest/icon-sm.webp",
    "mascotPath": "/apps/equationquest/mascot.webp",
    "mentor": "Pivot",
    "implementing": true,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/equationquest/icon.webp",
    "longTagline": "A friendly, illustrated walkthrough of EquationQuest for learners (ages 9-14), parents, and educators. For the technical architecture, see `DEVELOPER_GUIDE.md`. For curriculum alignment details, see `TECHNICAL_DESIGN.md`.",
    "features": [
      {
        "name": "First Launch",
        "description": "Your first launch walks through a brief onboarding (about 60 seconds):"
      },
      {
        "name": "The Four Tabs",
        "description": "EquationQuest is organized into four tabs at the bottom of the screen:"
      },
      {
        "name": "1. Solve (the home screen)",
        "description": "If you've set your **Grade Level** to 4-5 in your Profile, this screen automatically simplifies to a focused 3-element layout (hero + stats + topics)."
      },
      {
        "name": "2. Adventure",
        "description": "Five game modes that wrap algebra inside richer gameplay loops. Modes unlock as you play more sessions:"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "escapeforge",
    "name": "EscapeForge",
    "tagline": "Single-player escape room iOS game for ages 9–14",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/escapeforge/icon-sm.webp",
    "mascotPath": "/apps/escapeforge/mascot.webp",
    "mentor": "Latch",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "EscapeForge's 7-character puzzle-archetype cast maps 1:1 to the 7 puzzle types — math / word / cipher / pattern / logic / connection / sequence. Each character IS the puzzle pattern; channel-based event system surfaces the appropriate cast member on chamber entry. Per `escapeforge-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22. Latch preserved as AI mentor. Original cast names Weave + Loom RENAMED to Tile + Link to resolve collisions (SpectrumCanvas Wave 8 Weave + TaleForge Wave 28 mentor Loom). Labsmith generates ~$1.89 cast assets. Cross-app cameos: Sift ↔ CipherForge (cryptography sibling) load-bearing; Tile ↔ GeometryForge; Cog ↔ LogicQuest; Beat ↔ MathLore.",
      "members": [
        { "name": "Tally", "role": "Math puzzles — counting / arithmetic / number-sense" },
        { "name": "Lexa", "role": "Word puzzles — anagrams / vocabulary / spelling" },
        { "name": "Sift", "role": "Cipher puzzles — substitution / Caesar / frequency analysis" },
        { "name": "Tile", "role": "Pattern puzzles — repetition / symmetry / tessellation" },
        { "name": "Cog", "role": "Logic puzzles — deduction / elimination / constraint" },
        { "name": "Link", "role": "Connection puzzles — association / category / cross-reference" },
        { "name": "Beat", "role": "Sequence puzzles — temporal-order / step-by-step / dependency" }
      ]
    },
    
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/escapeforge/icon.webp",
    "longTagline": "EscapeForge is an escape room game where you solve puzzles to unlock doors and escape before time runs out! Each room is packed with math puzzles, word challenges, ciphers, pattern recognition, and logic problems. Can you think fast enough to find your way out?",
    "features": [
      {
        "name": "Explore the Room",
        "description": "Look around the room by tapping on objects and areas. Find hidden clues, locked doors, and puzzle stations scattered throughout each chamber. Everything you fin"
      },
      {
        "name": "Solve Puzzles",
        "description": "Each room has multiple puzzles to solve. You might crack a number code, unscramble words, decode a cipher, complete a pattern, or work through a logic problem."
      },
      {
        "name": "Unlock Doors",
        "description": "Puzzles connect to doors and gates through a channel system. Solve the right puzzles in the right order to open the path forward. Some doors need multiple puzzl"
      },
      {
        "name": "Beat the Clock",
        "description": "Every room has a time limit. Work quickly but carefully -- rushing through puzzles leads to mistakes, but thinking too long means time runs out. Find the right"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 1,
      "play": 3,
      "create": 1
        },
    "playTogether": true
  },
  {
    "slug": "ethosforge",
    "name": "EthosForge",
    "tagline": "Navigate ethical dilemmas across science, technology, history, and daily life with an AI Socratic tutor. Build ethical reasoning through structured debate, perspective-taking, and case analysis.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/ethosforge/icon-sm.webp",
    "mascotPath": "/apps/ethosforge/mascot.webp",
    "mentor": "Lyceum",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "EthosForge's 5-character framework-advocate cast embodies the canonical ethical-reasoning traditions — consequentialism, deontology, virtue ethics, care ethics, contractualism — via a FLIPPED METHODOLOGY: characters are *interlocutors*, not *answer-keys*. UNIQUE DESIGN CONSTRAINT (UNIQUE in the entire Wave 3 retrofit cluster): equal screen time / equal speaking quality / equal visual sophistication / no mentor-student framing within the cast / no 'right answer' framing / equal humor distribution / no gendered cultural stereotypes / animal-headed framing. Solo-advocate scenes BANNED; every kit surfaces at least 2 advocates so the kid stays in the *judge* seat. Per `ethosforge-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` (Wave 3, shipped 2026-05-21 — site backfill 2026-05-22 Wave 32a). Catchphrases ~6-8 words each, simple grade-4 vocabulary, template-locked — no advocate gets a 'wittier' line. Mentor (code-side 'Ethos' / site 'Lyceum' — flagged reconciliation item separate from this backfill) is the only voice that scaffolds reasoning quality; NEVER endorses a framework. Pre-existing sage_*.webp mascot re-slugged to ethos_*.webp (Phase A rename — visual unchanged).",
      "members": [
        { "name": "Consequence", "role": "Consequentialism / Utilitarianism — calm, methodical; weighs trade-offs; capybara at a balance-scale" },
        { "name": "Duty", "role": "Deontology / Kantian — upright, principled; sticks to rules even when costly; heron in vest on one leg" },
        { "name": "Virtue", "role": "Virtue Ethics / Aristotelian — steady, earnest; 'what kind of person do I want to be?'; badger tending a plant" },
        { "name": "Care", "role": "Care Ethics / Noddings + Gilligan — attentive, present; 'ethics begins in relationship'; otter listening beside empty spot" },
        { "name": "Contract", "role": "Contractualism / Scanlon + Rawls — collaborative; 'what could we ALL agree to?'; beaver drawing a fair-rules table" }
      ]
    },
    "implementing": false,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/ethosforge/icon.webp",
    "longTagline": "EthosForge is a philosophy garden where you think about big questions! Should you always tell the truth? Is it ever okay to break a rule? Navigate ethical dilemmas with an AI tutor who asks you questions (instead of just giving answers), build argument maps to organize your thinking, and debate with",
    "features": [
      {
        "name": "Dilemma Cards",
        "description": "Each dilemma presents a tricky situation with no easy answer. Read the scenario, consider different viewpoints, and make your choice. There are no \"wrong\" answe"
      },
      {
        "name": "Argument Maps",
        "description": "Organize your thinking visually. Drag and connect boxes to show how your reasons support your conclusion. See how different people can reach different answers u"
      },
      {
        "name": "Socratic Tutor",
        "description": "The AI tutor does not tell you what to think. Instead, it asks questions that help you think deeper. \"Why do you believe that?\" \"What if the situation was diffe"
      },
      {
        "name": "Philosophy Garden",
        "description": "Walk through a garden filled with famous philosopher characters. Talk to Socrates, Confucius, and others to learn their ideas and perspectives."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "farmquest",
    "name": "FarmQuest",
    "tagline": "Run a farm from soil to shelf — manage crops, raise animals, process food, market products, and balance sustainability with profitability across four seasons of scientific farming and agribusiness. Ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/farmquest/icon-sm.webp",
    "mascotPath": "/apps/farmquest/mascot.webp",
    "mentor": "Furrow",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "FarmQuest's 5-character cast embodies farm-system primitives — soil health + crop rotation (Loam), livestock care + animal-welfare ethics (Pen), harvest + post-harvest handling (Bushel), farmers-market economics (Market), and sustainability + soil-life ethics (Tilth). Furrow (mentor rename — was Sprout, HARD-collide with BioForge Wave-10 cast — resolved code-side in Phase A; site already aligned) frames each primitive; cast embodies them at small-family-farm scale (NEVER agribusiness-mascotization; NEVER industrial-feedlot iconography). Livestock-care + animal-welfare gate enforced (CRITICAL — inherits CreatureCare Wave 18 verbatim): Pen NEVER frames meat-production as morally simple — neither vegan-evangelism nor uncritical-meat-industry; foreground animal welfare ethics + bodily autonomy of animals; respect vegetarian / vegan / omnivore / Indigenous food traditions; kit 4 + kit 8 + kit 10 content warnings + skip-with-summary affordances per .claude/rules/trauma-informed-content.md. Food-justice gate inherits HarvestForge Wave 26 sibling — Market's price-as-truth framing names fair labor explicitly. External animal-welfare ethics + farmworker-labor + Indigenous food-tradition sensitivity reviewer STRONGLY RECOMMENDED ($500-$800) before Wave 26.2 art generation.",
      "members": [
        { "name": "Loam", "role": "Soil health + crop rotation — different roots, different seasons; soil-as-record framing" },
        { "name": "Pen", "role": "Livestock care + animal-welfare ethics — care = consent + comfort; animals-decide-when framing" },
        { "name": "Bushel", "role": "Harvest + post-harvest handling — gentle hands, clean baskets; bruises-cost-more framing" },
        { "name": "Market", "role": "Farmers-market economics + agribusiness — fair price = fair work; price-tells-truth framing" },
        { "name": "Tilth", "role": "Sustainability + soil-life ethics — repair before replace; field-remembers framing" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/farmquest/icon.webp",
    "longTagline": "FarmQuest is an agricultural science simulator where you run a farm from soil to shelf. Manage crops across four seasons, raise livestock, process food products, sell at the farmers market, and balance sustainability with profitability. Your AI Farm Advisor helps you make science-based decisions abo",
    "features": [
      {
        "name": "Crop Management",
        "description": "Test your soil, plan amendments, set up irrigation, choose cover crops, and manage pests using integrated pest management. Plan crop rotations for long-term soi"
      },
      {
        "name": "Animal Husbandry",
        "description": "Select livestock -- cattle, poultry, sheep, goats, or swine. Handle daily care routines, make veterinary health decisions, follow vaccination schedules, maintai"
      },
      {
        "name": "Food Processing Lab",
        "description": "Learn food safety protocols based on HACCP principles. Practice preservation methods -- canning, freezing, drying, and fermentation. Develop value-added product"
      },
      {
        "name": "Natural Resource Stewardship",
        "description": "Manage a woodlot, conserve your watershed, monitor soil health over multiple years, and maintain wildlife habitat. Balance production goals with conservation ne"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    }
  },
  {
    "slug": "figureforge",
    "name": "FigureForge",
    "tagline": "Detective-style word puzzle game where students identify metaphors, similes, idioms, analogies, and personification through contextual investigation and creative writing challenges.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/figureforge/icon-sm.webp",
    "mascotPath": "/apps/figureforge/mascot.webp",
    "mentor": "Trope",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "FigureForge's 6-character figurative-device cast maps 1:1 to the 6 core literary devices — metaphor / simile / idiom / analogy / personification / hyperbole-irony-understatement cluster. Per `figureforge-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22. Trope preserved as mentor. Multiple collision-renames applied (Bridge→Ferry / Like→Ripple / Span→Twin / Pulse→Hum / Loom→Mask). Detective-style word-puzzle integrates cast as 'suspect-style' device-archetype clue-givers. Labsmith generates ~$1.62 cast assets. Cross-app cameos: Mask ↔ StageForge / Knot ↔ LinguaQuest / Hum ↔ TempCheck+RuptureRepair / Twin ↔ ProofQuest.",
      "members": [
        { "name": "Ferry", "role": "Metaphor — 'X IS Y' direct comparison; carries meaning across" },
        { "name": "Ripple", "role": "Simile — 'X is LIKE Y' softer comparison" },
        { "name": "Knot", "role": "Idiom — fixed expressions whose meaning isn't literal" },
        { "name": "Twin", "role": "Analogy — extended comparison / X:Y::A:B parallel mapping" },
        { "name": "Hum", "role": "Personification — non-human takes on human qualities" },
        { "name": "Mask", "role": "Hyperbole + understatement + irony cluster — say one thing, mean another" }
      ]
    },
    
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/figureforge/icon.webp",
    "longTagline": "FigureForge is a detective-style word puzzle game where you investigate passages of text to identify hidden figurative language. You will learn to spot metaphors, similes, idioms, analogies, personification, hyperbole, alliteration, and onomatopoeia by examining context clues like a real literary de",
    "features": [
      {
        "name": "Detective Cases",
        "description": "Each case presents a set of passages containing figurative language. Your job is to find and identify the literary devices hidden in the text. Read carefully, l"
      },
      {
        "name": "Context Clue Investigation",
        "description": "When you find a suspicious phrase, highlight it and examine the context clues. Words like \"like\" or \"as\" point to similes. Human qualities given to objects sugg"
      },
      {
        "name": "Literary Device Collection",
        "description": "Every device you correctly identify gets added to your collection. Track your mastery across all eight device types. Some devices are common and easy to spot; o"
      },
      {
        "name": "Creative Writing Workshop",
        "description": "Put your knowledge to work by writing your own figurative language. The workshop gives you prompts and challenges -- write a metaphor about the ocean, create a"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "fitquest",
    "name": "FitQuest",
    "tagline": "A fitness RPG adventure where physical exercise (tracked via HealthKit) AND knowledge quiz performance jointly determine your character's progression. Complete real workouts to gain Strength/Stamina, answer questions correctly to gain Wisdom/Intelligence.",
    "vertical": "special-interest",
    "heroColor": "#81C784",
    "iconPath": "/apps/fitquest/icon-sm.webp",
    "mascotPath": "/apps/fitquest/mascot.webp",
    "mentor": "Brio",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "FitQuest's 5-character cast embodies the foundational functional-fitness primitives — push-pattern (Push), hip-hinge pattern (Hinge), core-bracing (Brace), breath as foundational autonomic-control (Breath), and recovery as practice (Rest). Brio (mentor; DUAL-RESOLVE rename from code-side 'Coach' generic placeholder AND site 'Stride' which HARD-collided with FunctionForge Wave 4 cast — both → Brio, Italian musical 'vigor + joy + spirited liveliness' register; anti-aesthetic + non-coach-as-drill-sergeant) frames each primitive; cast embodies them at home-gym / school-PE / picking-up-groceries scale (NEVER 'elite athlete' / 'aesthetic transformation' / 'before-after' / 'optimization' framing). STRONGEST Wave 24 body-image gate enforced (co-strongest with SafetyForge fear-amplification gate; cross-app inherits + extends DanceQuest Wave 14): cast NEVER references weight / calorie / body-composition / tone / sculpt / shred / cut; HealthKit data shown functional-only NEVER aesthetic; stat-axis structurally enforces functional-only stats (NO leanness / tone); all 5 characters art-directed ROUND + SOFT + STRONG (capybara / tortoise / armadillo / panda / sloth — NONE athletic-body-coded); no tank tops / no compression gear / no visible abs; static-response gating for body-image distress queries with NEDA + 988 surface; over-exercise gate via Rest's structurally load-bearing 'recovery IS training' framing; external sensitivity reviewer REQUIRED pre-launch ($800-$1,500 NEDA-affiliated or Body-Project-affiliated advisor).",
      "members": [
        { "name": "Push", "role": "Push-pattern (chest press / push-up / push-door-open) — force-INTO-space; foundational upper-body functional movement" },
        { "name": "Hinge", "role": "Hip-hinge pattern (deadlift / picking-up-groceries) — BENDING-AT-THE-HIP-not-the-spine; anti-back-pain primitive" },
        { "name": "Brace", "role": "Core-stability bracing — internal-armor NEVER visible six-pack; no crunches; standing dead-bug demonstrations" },
        { "name": "Breath", "role": "Breath as foundational locomotor + autonomic-regulation — nasal-breathing default + box-breath + breath-as-tempo" },
        { "name": "Rest", "role": "Recovery + sleep + deload as PRACTICE — adaptation LIVES in the rest; anti-hustle counter-message" }
      ]
    },
    "implementing": false,
    "standards": [
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/fitquest/icon.webp",
    "longTagline": "FitQuest is the first app that combines real exercise with quiz challenges in one RPG adventure! Work out in real life to boost your character's Strength, Stamina, and Agility. Answer quiz questions to raise your Wisdom, Intelligence, and Focus. You need BOTH to progress through the adventure -- bra",
    "features": [
      {
        "name": "Workouts",
        "description": "Complete real exercises tracked by Apple Health. Walk, run, do push-ups, or any workout you enjoy. Your physical activity earns physical stats for your characte"
      },
      {
        "name": "Knowledge Quizzes",
        "description": "Answer questions on topics you choose. Get them right to earn mental stats. The spaced repetition system brings back questions you got wrong so you remember the"
      },
      {
        "name": "Adventure Mode",
        "description": "Explore a game world where challenges require both physical and mental stats. A locked door might need 50 Strength AND 30 Intelligence. A boss fight might requi"
      },
      {
        "name": "Guild Multiplayer",
        "description": "Team up with friends in guilds. Combine your strengths to take on challenges that no one could beat alone."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 0
    }
  },
  {
    "slug": "flightforge",
    "name": "FlightForge",
    "tagline": "Design, build, and fly aircraft in a physics sandbox — master aerodynamics from paper planes to jet engines through the four forces of flight, wind tunnel experiments, and aviation engineering challenges.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/flightforge/icon-sm.webp",
    "mascotPath": "/apps/flightforge/mascot.webp",
    "mentor": "Skye",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "FlightForge's 5-character cast embodies the foundational flight-physics primitives per NASA Glenn + AIAA decomposition — lift via airfoil (Wing), resistance (Drag), propulsion (Thrust), yaw-axis control (Yaw), and stabilizer + control-surface family (Tail). Skye (mentor; site name preserved; code-side renamed from generic 'Mentor' to match — no portfolio collision; sky-evocative + non-military-coded) frames each primitive; cast embodies them at paper-plane / drone / model-rocket / wind-tunnel-sandbox scale (NEVER 'fighter-pilot' / 'military aviator' / 'captain-as-authority' framing). Engineering-failure framing gate enforced (UNIQUE to FlightForge in Wave 24): cast NEVER frames failed-flight as personal-failing; every crash is DATA-not-failing; physics sandbox structurally rewards iteration; cast catchphrases foreground 'I missed. I missed again. I hit. That's the pattern' across all primitives. Cultural representation gate: cast NEVER wears military-uniform-coded clothing; non-Western aviation pioneers foregrounded in Skye's kit-6 + kit-12 mentor copy (Bessie Coleman, Santos-Dumont, Tuskegee Airmen, Indian Air Force test pilots); kit 6 (aviation history) + kit 9 (rockets / Cold War context) sensitivity-review-gated ($300-$500). Cluster-coherence with FitQuest body-image gate (Drag's streamline-suit OVERLAY abstract-teardrop NEVER body-shape-revealing).",
      "members": [
        { "name": "Wing", "role": "Lift generation — airfoil + camber + Bernoulli AND Newton both-right complementary" },
        { "name": "Drag", "role": "Resistance — drag isn't bad, drag is information; shape-fights-air conversation" },
        { "name": "Thrust", "role": "Propulsion — every engine just throws air the wrong way (propeller/jet/rocket same trick different scale)" },
        { "name": "Yaw", "role": "Vertical-axis control — the rudder is the POLISH on the turn not the steering" },
        { "name": "Tail", "role": "Horizontal + vertical stabilizer family — quiet-control-from-the-back; the tail is why your paper plane goes straight" }
      ]
    },
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/flightforge/icon.webp",
    "longTagline": "FlightForge is an aviation academy where you design, build, and fly your own aircraft! Learn the real science of flight -- lift, drag, thrust, and weight -- by building planes in a physics sandbox, testing them in a wind tunnel, and flying them through challenges. Start with paper planes and work yo",
    "features": [
      {
        "name": "Aircraft Designer",
        "description": "Choose a fuselage, wings, engine, and tail, then put them together. Each part has real physics properties that affect how your plane flies. Bigger wings give mo"
      },
      {
        "name": "Wind Tunnel",
        "description": "Test your aircraft design in the wind tunnel before flying it. See how air flows over your wings and where drag is slowing you down. Adjust your design based on"
      },
      {
        "name": "Flight Simulator",
        "description": "Take your aircraft to the sky! Tilt your phone to steer and complete challenges like \"Fly through the canyon\" or \"Reach the highest altitude.\" Your plane handle"
      },
      {
        "name": "Engineering Challenges",
        "description": "Solve specific design problems like \"Build a plane that can carry the heaviest cargo\" or \"Design the most fuel-efficient glider.\""
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "focusforge",
    "neurodivergentSupport": true,
    "neurodivergentDesignTraits": ["ADHD-supportive", "Focus-supportive", "Strength-based", "Identity-affirming", "Predictable flow"],
    "neurodivergentEvidence": [
      { "aspect": "EF cast as capacities-not-gaps", "basis": "Wave 28 DN retrofit; Mautone 2024 + Hai 2025 + CHADD 2024 alignment" },
      { "aspect": "ADHD-shame static-response gating", "basis": "Neurodivergent-affirming voice baseline; FoundationModels surface filter routes shame-signals to Anchor mentor" },
      { "aspect": "CHADD-affiliated or pediatric-ADHD-clinician sensitivity reviewer", "basis": "$800-$1,200 envelope pre-launch (recommended)" },
      { "aspect": "No second-person imperative catchphrases", "basis": "All first-person modeling per ADHD-affirming voice convention" }
    ],
    "name": "FocusForge",
    "tagline": "A gamified executive function training adventure for students ages 9-14, with specific design for ADHD and other neurodivergent learners. Players build study skills through six EF domains: working memory, inhibitory control, cognitive flexibility, planning/organization, task initiation, and time awareness.",
    "vertical": "dir-fedc",
    "heroColor": "#81C784",
    "iconPath": "/apps/focusforge/icon-sm.webp",
    "mascotPath": "/apps/focusforge/mascot.webp",
    "mentor": "Anchor",
    "implementing": true,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "FocusForge's 6-character cast embodies EXECUTIVE-FUNCTION DOMAINS as CAPACITIES-not-GAPS per Wave 28 DN retrofit (Wave 15 retry): Hold (working memory) / Wait (inhibitory control) / Pivot (cognitive flexibility) / Map (planning + organization) / Begin (task initiation) / Clock (time awareness). Anchor (the existing AI mentor) introduces and references each EF domain. ADHD-shame gate enforced (CRITICAL — STRONGEST Wave 28 burden per Mautone 2024 + Hai 2025 + CHADD 2024): cast NEVER says 'you should focus better' / 'try harder' / 'stop being distracted'; cast frames every skill as a CAPACITY to BUILD never a GAP to FILL; NO before/after character pairs (broken-clock / scrambled-brain visuals REJECTED); neurodivergent-affirming voice baseline ('ADHD is a way your brain works, not a flaw' / 'all brains have to learn these skills'); static-response gating for shame signals ('I can't focus' / 'I'm broken' / 'my brain doesn't work') NEVER reaches FoundationModels — Anchor surface filter routes to neurodivergent-affirming reply; kit 6 + kit 10 carry off-ramp affordances per SAMHSA TIP 57; no second-person imperative catchphrases ever — all first-person modeling. KitMetadata.castAllowed flag required for any DIR-FEDC-capacity-1-sensitive kit; cast pacing respects DIR-FEDC attention duration. External CHADD-affiliated or pediatric-ADHD-clinician sensitivity reviewer STRONGLY RECOMMENDED ($800-$1,200). Soft collision with ReadQuest Wave 5 Anchor cast member allowed per registry rule 3 (mentor vs cast; different domain).",
      "members": [
        { "name": "Hold", "role": "Working memory — keeping a thing in mind while you use it; cast literally cups an orb that pulses gently" },
        { "name": "Wait", "role": "Inhibitory control — the pause between impulse and action; cast treats the pause as a skill, NEVER a moral test" },
        { "name": "Pivot", "role": "Cognitive flexibility — switching strategies / reframing; cast treats plan-change as INTERESTING not catastrophic" },
        { "name": "Map", "role": "Planning + organization — breaks ANY task into chunks; never says 'you should already know how'" },
        { "name": "Begin", "role": "Task initiation — the hardest part is the first second; cast is gentle never-pushy (rejected: Spark — brand collision; Lift-Off — verbosity)" },
        { "name": "Clock", "role": "Time awareness — time as a felt sense the learner can BUILD; never says 'you should know how long this takes'" }
      ]
    },
    "standards": [
      "DIR/FEDC Capacity 1",
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/focusforge/icon.webp",
    "longTagline": "FocusForge is a gamified executive function training app for students ages 9-14. It helps you build six essential study skills — time awareness, working memory, inhibitory control, cognitive flexibility, planning and organization, and task initiation — through fun mini-games, strategy-based challeng",
    "features": [
      {
        "name": "Time Awareness",
        "description": "Build your sense of time with estimation challenges and visual countdown games."
      },
      {
        "name": "Working Memory",
        "description": "Strengthen your ability to hold and use information in your mind."
      },
      {
        "name": "Inhibitory Control",
        "description": "Practice pausing before you act and resisting impulses."
      },
      {
        "name": "Cognitive Flexibility",
        "description": "Learn to adapt when plans change and see things from new angles."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "forgearena",
    "name": "Forgearena",
    "tagline": "A competitive multiplayer educational game where up to 30 students on any device battle in real-time quiz arenas, team challenges, and subject-specific tournaments — bridging iOS, Android, and web players in the same match.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/forgearena/icon-sm.webp",
    "mascotPath": "/apps/forgearena/mascot.webp",
    "mentor": "Champ",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ForgeArena's 5-character cast embodies ARENA-ROLE archetypes — NOT new curricular characters. Cast scaffolds the participation structure of competitive quiz battle-royale: Champ (Arena Host — welcomes; this role is BOTH the hero mascot AND the AI host mentor per Wave 27 Phase A reconciliation from code-side 'Mentor' placeholder + site 'Bracket' → 'Champ'), Tally (Scoreboard — points-as-improvement-signal not points-as-worth), Whisk (Referee — fair-play as craft), Cheer (Commentator — celebrate the move, never trash-talk), Rival (Opponent-archetype — worthy-opponent-as-craft-role NEVER rival-as-villain). Toxic-competition gate enforced (CRITICAL — UNIQUE to ForgeArena in Wave 27; inherits EnsembleQuest Wave 14 collaboration-shame gate verbatim + extends): cast NEVER frames losses as worth-determinations, NEVER positions ranking as identity, NEVER uses combat / war / kill-the-other-team register; trash-talk static-response gating ('roast / destroy / own / crush / dunk on / cooked / mid' prompts NEVER reach FoundationModels — Champ surface filter routes to craft-celebrating framing); Cheer's commentator framing structurally counter-codes esports-toxic-commentator register; Rival's worthy-opponent framing inherits chess-tactics + tabletop-game-design + party-game pedagogical traditions. Cooperative-competition gate: Team Battle mode foregrounds 'your team's combined IMPROVEMENT' over zero-sum; Survival Mode rephrases 'last player standing' as 'longest-consecutive-correct streak'. Adolescent-competitive-anxiety gate (per APA 2024 + Common Sense 2024 + Loton 2024): anti-grinding affordances + ranked-mode opt-out + spectator-mode escape; ELO rank-tier reframe REQUIRED Phase A — 'practice courts' NOT 'rank of worth'; Boss Rush 'boss' → 'challenge round' / 'guest opponent'. Cyberbullying register gate inherits SafetyForge Wave 24: NO free-text chat between players; whitelisted positive-emote-set only. External child-competition-pedagogy + esports-ethics + adolescent-competitive-anxiety sensitivity reviewer RECOMMENDED ($500-$800).",
      "members": [
        { "name": "Champ", "role": "Arena Host — welcomes / frames every match; doubles as AI host mentor; existing hero mascot promoted to mentor role in Wave 27 Phase A reconciliation (code 'Mentor' + site 'Bracket' → 'Champ')" },
        { "name": "Tally", "role": "Scoreboard — points-as-improvement-signal NEVER points-as-worth; anti-leaderboard-as-identity framing" },
        { "name": "Whisk", "role": "Referee — fair-play as craft; rules-without-scolding; anti-power-tripping-ref framing (SOFT collision with SaffronLab Wave 19 Whisk — different role/visual)" },
        { "name": "Cheer", "role": "Commentator — celebrate-the-move craft-celebrating register; multi-language; anti-toxic-commentator framing (DELIBERATELY shared design language with ActiveForge Wave 24 Cheer — cross-cluster sportsmanship-celebration)" },
        { "name": "Rival", "role": "Opponent-archetype — worthy-opponent-as-craft-role NEVER rival-as-villain; post-match handshake foregrounding" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/forgearena/icon.webp",
    "longTagline": "ForgeArena is a multiplayer quiz battle arena! Compete against other players in real-time quiz matches, climb the ranked ladder from Bronze to Champion, join team battles, and earn rewards through seasonal battle passes. Test your knowledge across every subject while having fun competing!",
    "features": [
      {
        "name": "Classic Mode",
        "description": "Answer questions faster and more accurately than your opponents. Earn points for correct answers, and bonus points for speed. The player with the most points wh"
      },
      {
        "name": "Team Battle",
        "description": "Join a team and combine your knowledge. Each team member focuses on their strongest subjects. Work together to outscore the other team."
      },
      {
        "name": "Subject Sprint",
        "description": "Pick one subject and go deep. Race through questions in math, science, history, or any subject you choose. Climb subject-specific leaderboards."
      },
      {
        "name": "Survival Mode",
        "description": "Keep answering correctly to stay alive. One wrong answer and you are out! Last player standing wins."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 1,
      "play": 3,
      "create": 0
    }
  },
  {
    "slug": "forgeclassroom",
    "name": "ForgeClassroom",
    "tagline": "Teacher-facing classroom management for K-12 — assign Forge app lessons, monitor student progress, generate standards-aligned reports (TEKS/NGSS/CCSS), host live quizzes, and author custom question kits with AI assistance that supports teacher autonomy.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/forgeclassroom/icon-sm.webp",
    "iconHeroPath": "/apps/forgeclassroom/icon.webp",
    "mascotPath": "/apps/forgeclassroom/mascot.webp",
    "mentor": "Ledger",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ForgeClassroom's 5-character cast embodies CLASSROOM-ROLE archetypes that SUPPORT teacher autonomy — NEVER replace the teacher, NEVER position above teacher judgment, NEVER grade students. Cast scaffolds the TEACHER'S workflow (NOT a kid-facing curricular catalogue): Ledger (Classroom AI Assistant — record-keeping-as-craft NEVER surveillance; cast member #1 doubles as the AI assistant via Wave 27 Phase A mentor reconciliation from code-side generic 'Mentor' placeholder), Plan (Lesson Planner — pacing-as-craft, plan-as-hypothesis-not-contract), Spot (Progress Observer — surfaces patterns NEVER labels students), Kit (Kit-Author Assistant — AI scaffolding for teacher-authored content; teacher always retains final-edit authority), Round (Live Quiz Host Coordinator — manages quiz-show flow; deliberately differentiated from ForgeArena Champ's competitive-emcee register). All cast members visibly ADULT-coded (elder-tier) because the cast is the TEACHER's crew, not student mentors. Teacher-autonomy gate enforced (CRITICAL — UNIQUE to ForgeClassroom in Wave 27 + portfolio-wide): cast NEVER overrides teacher decisions, NEVER grades a student, NEVER recommends a student be held back / advanced / disciplined; cast NEVER ranks students against classmates; cast NEVER surfaces socioeconomic / family-background / disciplinary-history data; cast NEVER labels students ('struggling' / 'gifted' / 'behind' / 'ahead' static-response gated — Spot surface filter routes to descriptive-not-evaluative framing). Surveillance gate enforced: real-time-monitoring affordances structurally counter-coded — Ledger's 'I keep records, YOU make the calls' load-bearing; no facial-detection / sentiment-analysis on student devices; no time-on-task as compliance-policing. AI-replaces-teacher-content gate (CRITICAL): Kit's 'I'll DRAFT it, you'll FINISH it' structurally load-bearing; FoundationModels output ALWAYS surfaces as 'DRAFT' watermark + teacher-edit-required gate. Equity gate inherits InclusionForge Wave 15 representation gate: cast NEVER surfaces racial / socioeconomic / linguistic / disability data in pattern-analysis; Spot's pattern-mapping disabled for protected demographic dimensions. SITE ENTRY CREATION in Wave 27 batch PR (ForgeClassroom was missing entirely from apps.generated.ts; slug count contribution +1). External education-equity + teacher-autonomy + AI-in-classroom-ethics sensitivity reviewer RECOMMENDED ($500-$800).",
      "members": [
        { "name": "Ledger", "role": "Classroom AI Assistant — record-keeping-as-craft NEVER surveillance; doubles as AI assistant via Wave 27 Phase A mentor reconciliation" },
        { "name": "Plan", "role": "Lesson Planner — pacing-as-craft, standards-as-scaffolding-not-compliance, plan-as-hypothesis-not-contract" },
        { "name": "Spot", "role": "Progress Observer — surfaces patterns NEVER labels students; pattern-spotting as craft (DELIBERATELY shared design language with TerraWatch Wave 20 Spot — cross-cluster pattern-spotting continuity)" },
        { "name": "Kit", "role": "Kit-Author Assistant — AI scaffolding for teacher-authored content; teacher always retains final-edit authority" },
        { "name": "Round", "role": "Live Quiz Host Coordinator — manages quiz-show flow; deliberately differentiated from ForgeArena Champ's competitive-emcee register" }
      ]
    },
    "implementing": false,
    "standards": [
      "TEKS",
      "NGSS",
      "CCSS",
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "longTagline": "ForgeClassroom is the teacher-facing control surface for the Forge educational portfolio — manage classes, assign lessons across 130+ Forge apps, monitor real-time progress, generate standards-aligned reports, host live quizzes, and author AI-assisted custom kits while always retaining final-edit authority. The cast (Ledger, Plan, Spot, Kit, Round) supports teacher autonomy on every decision; never grades, never overrides, never surveils.",
    "hasUserGuide": false,
    "modes": {
      "learn": 1,
      "play": 1,
      "create": 2
    }
  },
  {
    "slug": "forgeportal",
    "name": "ForgePortal",
    "tagline": "Universal launcher and discovery hub for the Forge educational app portfolio — browse apps by subject and age, unified profile with cross-platform sync, cross-app learning pathway recommendations, and family management with per-child controls that empower parents without shame.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/forgeportal/icon-sm.webp",
    "iconHeroPath": "/apps/forgeportal/icon.webp",
    "mascotPath": "/apps/forgeportal/mascot.webp",
    "mentor": "Hearth",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ForgePortal's 5-character cast embodies PARENT-COMPANION archetypes that EMPOWER the parent's relationship to their kid's learning — NEVER shame the parent, NEVER position above parent judgment, NEVER trigger performative-parenting anxiety. Cast scaffolds the FAMILY's workflow (NOT a kid-facing curricular catalogue): Hearth (Family AI Companion — warm gathering-place; cast member #1 doubles as the AI companion via Wave 27 Phase A mentor reconciliation from code-side generic 'Mentor' placeholder), Sift (Translator-of-Progress — plain-language not spreadsheet), Spark (Cheerleader-of-Effort — effort + curiosity + persistence celebrated; NEVER ranking), Ask (Question-Asker — better dinner-table questions; conversation-starter not lecture-suggestor; nine-second-listen practice), Tend (Family-Pace Companion — healthy-pace WITHOUT shaming; anti-screen-time-shaming + anti-restriction-as-virtue). All cast members visibly ADULT-CODED (parent-peer-tier, NOT elder-authority) — peer-friends a parent might invite to the kitchen table. Parent-shaming gate enforced (CRITICAL — UNIQUE to ForgePortal in Wave 27 + portfolio-wide; per LeapFrog 2024 + Common Sense 2024 + APA 2024 evidence base): cast NEVER frames parent as falling-short, NEVER guilts about screen-time / learning-gaps / not-enough-quality-time; Hearth's 'you know your kid; I just keep the lights on' load-bearing; cast NEVER ranks families against other families; cast NEVER surfaces 'kids in your zip code average X' / 'top-1% of families do Y' comparative metrics. Performative-parenting anxiety gate (inherits RuptureRepair Wave 1 + DanceQuest Wave 14 body-image gate verbatim + extends): no parenting-style labels surfaced; no parenting-style ranking; cast NEVER amplifies social-media parenting discourse. Body-image + trauma-informed gate (CRITICAL — inherits DanceQuest Wave 14 + FitQuest Wave 24 + MedicQuest Wave 25 + RuptureRepair Wave 1 + SafetyForge Wave 24): cast NEVER references weight / calories / body-composition; trauma-content surfacing with content-warning + co-noticing prompts per TempCheck Wave 18 dyadic-affect-noticing register; crisis-resource co-surfacing (988 / NEDA / Childhelp / RAINN / Trevor Project / Crisis Text Line) with co-noticing language NEVER alarm-bell language. Surveillance gate: no covert monitoring; no facial-detection / sentiment-analysis; data surfaced descriptively without judgment. Family-structure-inclusive copy required Phase A: 'family adults' / 'your household' replaces 'Mom and Dad' / 'spouse' / 'partner' framings; no real-parenting-expert mascotization. TRAUMA-INFORMED CONTENT FLAG TRUE per .claude/rules/trauma-informed-content.md. SITE ENTRY CREATION in Wave 27 batch PR (ForgePortal was missing entirely from apps.generated.ts; slug count contribution +1). External family-psychology + parenting-anxiety + co-regulation + trauma-informed-parenting sensitivity reviewer RECOMMENDED ($800-$1,500).",
      "members": [
        { "name": "Hearth", "role": "Family AI Companion — warm gathering-place; supports parent autonomy NEVER positions above; doubles as AI companion via Wave 27 Phase A mentor reconciliation" },
        { "name": "Sift", "role": "Translator-of-Progress — plain-language not spreadsheet; signal not data dump (SOFT collision with NewsForge Wave 25 Sift — different role/visual; flag for cross-app audio-context audit)" },
        { "name": "Spark", "role": "Cheerleader-of-Effort — celebrates effort + curiosity + persistence; NEVER celebrates ranking / outperformance" },
        { "name": "Ask", "role": "Question-Asker — surfaces better dinner-table questions; conversation-starter not lecture-suggestor; nine-second-listen practice (DELIBERATELY shared design language with MedicQuest Wave 25 Ask — cross-cluster asking-as-craft continuity)" },
        { "name": "Tend", "role": "Family-Pace Companion — healthy-pace WITHOUT shaming; anti-screen-time-shaming + anti-restriction-as-virtue (DELIBERATELY shared design language with CreatureCare Wave 18 Tend — cross-cluster attentive-care continuity)" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy",
      "COPPA"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "longTagline": "ForgePortal is the family-facing launcher and discovery hub for the Forge educational portfolio — browse 130+ apps by subject and age, unified profile with cross-platform sync, learning-pathway recommendations, and per-child parental controls that empower without shame. The cast (Hearth, Sift, Spark, Ask, Tend) supports the parent as coach — never positions above parent judgment, never triggers performative-parenting anxiety, never amplifies social-media-comparison discourse.",
    "hasUserGuide": false,
    "modes": {
      "learn": 1,
      "play": 0,
      "create": 1
    }
  },
  {
    "slug": "fossilforge",
    "name": "FossilForge",
    "tagline": "Players run paleontology expeditions -- excavating fossil sites grid-by-grid, preparing specimens in the lab, classifying them taxonomically, and building museum exhibits. Real geological periods, scientifically accurate specimens, and the careful process of real fossil preparation. The only paleontology simulation on iOS for ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/fossilforge/icon-sm.webp",
    "mascotPath": "/apps/fossilforge/mascot.webp",
    "mentor": "Amber",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "FossilForge's 5-character cast embodies the foundational paleontology-and-deep-time primitives — taxonomic classification (Seam), deep-time chronology (Span), morphological evolution (Branch), paleoenvironment reconstruction (Field), and extinction-event reasoning (Last). Professor Petra (mentor; site label 'Amber') frames each primitive; cast embodies them at museum-paleontology-club scale (NEVER extinction-spectacle / climate-doom register). Deep-time framing gate enforced: cast frames extinctions with both awe and grief; cross-app cameo registered with EcoSphere Wave 11 Brink.",
      "members": [
        { "name": "Seam", "role": "Taxonomic + fossil-type classification — family-resemblance-matching (what KIND of organism?)" },
        { "name": "Span", "role": "Deep-time + geological chronology — scale-of-scales (WHEN did this organism live?)" },
        { "name": "Branch", "role": "Morphological adaptation + evolutionary change — branching-not-laddering" },
        { "name": "Field", "role": "Paleoenvironment + ecosystem reconstruction — fossils-as-a-place-story" },
        { "name": "Last", "role": "Mass extinctions + extinction-event reasoning — witness-and-choose (cross-app cameo with EcoSphere Brink)" }
      ]
    },
    "implementing": true,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/fossilforge/icon.webp",
    "longTagline": "FossilForge makes you a paleontologist! Excavate fossil sites square by square, prepare your specimens in the lab, figure out what creatures they came from, and build museum exhibits that tell the story of life on Earth across 4.5 billion years.",
    "features": [
      {
        "name": "Excavation",
        "description": "Carefully dig through rock layers to uncover fossils. Different layers represent different time periods -- deeper means older! Use the right tools: a pickaxe fo"
      },
      {
        "name": "Specimen Lab",
        "description": "Bring your fossils to the lab. Clean off the rock, piece together broken fragments, and identify what creature left these bones. Compare your find to reference"
      },
      {
        "name": "Geological Timeline",
        "description": "Place your discoveries on Earth's 4.5-billion-year timeline. See how life changed from tiny bacteria to giant dinosaurs to modern mammals. Each fossil adds to t"
      },
      {
        "name": "Museum Builder",
        "description": "Design exhibits to display your best fossils. Arrange them by time period, species, or location. Your museum grows as your collection grows!"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "fractionforge",
    "name": "FractionForge",
    "tagline": "Master fractions, decimals, and place value through virtual manipulatives, number line challenges, and real-world problem contexts — following the research-backed Concrete-Representational-Abstract instructional model. Ages 8-12.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "FractionForge sits in the **math-mountains zone** alongside GeometryForge / ProofQuest / FunctionForge / RatioRealm / DiscreteQuest / ChanceForge — all 6 ship distributed-narrative casts.",
      "members": [
        {
          "name": "Halver",
          "role": "Partitioning — splitting a whole into equal parts (denominator construction)"
        },
        {
          "name": "Pie",
          "role": "Wholes and parts — mixed numbers, improper fractions, whole-as-pie anchor"
        },
        {
          "name": "Equi",
          "role": "Equivalent fractions — different forms, same value (×n/×n scaling)"
        },
        {
          "name": "Stretch",
          "role": "Common denominators — scaling to a common base for comparison + addition"
        },
        {
          "name": "Dot",
          "role": "The decimal point and fraction-decimal-percent equivalence"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/fractionforge/icon-sm.webp",
    "mascotPath": "/apps/fractionforge/mascot.webp",
    "mentor": "Slice",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/fractionforge/icon.webp",
    "longTagline": "FractionForge makes fractions and decimals easy to understand! Start by playing with virtual pizza slices and fraction bars you can touch and move. Then see how those pieces turn into diagrams. Finally, work with the numbers and symbols. This step-by-step approach (called Concrete-Representational-A",
    "features": [
      {
        "name": "Manipulative Workshop",
        "description": "Touch, drag, and split fraction pieces. Break a pizza into thirds, compare half to three-sixths, or stack fraction bars to see which is bigger. This is hands-on"
      },
      {
        "name": "Number Line Arena",
        "description": "Place fractions on a number line and see where they belong. Is 3/4 bigger than 2/3? Put them on the line and find out! Race to place fractions accurately for bo"
      },
      {
        "name": "Operation Lab",
        "description": "Add, subtract, multiply, and divide fractions using visual tools. See what happens when you add 1/2 and 1/3. Watch the pieces combine on screen."
      },
      {
        "name": "Decimal Bridge",
        "description": "Connect fractions to decimals. See that 1/2 is the same as 0.5, and 1/4 is the same as 0.25. Build bridges between the two systems."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "framequest",
    "name": "FrameQuest",
    "tagline": "Frame-by-frame animation creation that turns neurodivergent preferences for precision and sequencing — drawing especially on autistic pattern-recognition strengths — into creative storytelling. Players build stop-motion animations that practice social scenarios -- setting up characters, capturing frames, sequencing timelines, and narrating stories. The animation process itself builds fine motor skills, sequential thinking, and emotional understanding.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/framequest/icon-sm.webp",
    "mascotPath": "/apps/framequest/mascot.webp",
    "mentor": "Reel",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "FrameQuest's 5-character stop-motion-craft cast carries UNIQUE autism-affirming LOCKED-consistency constraints — same outfit + same catchphrase + same voice EVERY appearance (per ASAN 2024 + Sayman 2025 autism-affirming design literature). Cast: Pane (single-frame) / Tween (motion-between) / Beat (story-beat) / Beam (emotion) / Pass (social-story). Per `framequest-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22. Reel preserved as mentor (SOFT collision with ReelForge mentor Slate — flag for cross-app audio-context audit). Multiple collision-renames applied (Frame→Pane / Feel→Beam / Share→Pass). Labsmith generates ~$1.35 cast assets + $500-800 autism-affirming sensitivity reviewer RECOMMENDED. Cross-app cameos: Beat ↔ EscapeForge Wave 32b sibling (sequence-craft shared design); Tween ↔ ReelForge Wave 32b sibling.",
      "members": [
        { "name": "Pane", "role": "Single-frame composition — 'One frame. Then the next.'" },
        { "name": "Tween", "role": "Frame-to-frame change / motion-between — 'Move a little. Then a little more.'" },
        { "name": "Beat", "role": "Story beat / sequence — 'First this. Then this. Then this.'" },
        { "name": "Beam", "role": "Emotion expression / character feeling — 'How do they FEEL? Show their face.'" },
        { "name": "Pass", "role": "Social story / sharing with others — 'My story. Your turn.'" }
      ]
    },
    
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/framequest/icon.webp",
    "longTagline": "FrameQuest lets you create your own stop-motion animations and social stories! Move characters a tiny bit at a time, snap frames, and watch your story come to life. You can also practice understanding emotions by building faces and creating stories about social situations. Everything moves at your p",
    "features": [
      {
        "name": "Animation Canvas",
        "description": "Place characters on the scene, move them a little, then tap to capture a frame. Move them again, capture again. When you play all the frames back, your characte"
      },
      {
        "name": "Character Workshop",
        "description": "Design your own characters or choose from ready-made ones. Pick their clothes, expressions, and accessories. You can change their expression for each frame to s"
      },
      {
        "name": "Emotion Face Builder",
        "description": "Build faces piece by piece to learn what different emotions look like. What does a surprised face look like? A nervous one? Practice reading and creating facial"
      },
      {
        "name": "Social Story Creator",
        "description": "Create stories about everyday social situations like meeting someone new, asking for help, or joining a group. Use your animation skills to show what happens st"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 1,
      "play": 1,
      "create": 3
        },
    "playTogether": true
  },
  {
    "slug": "functionforge",
    "name": "FunctionForge",
    "tagline": "Interactive function laboratory — input-output machines, function tables, linear/quadratic/exponential functions, and real-world data fitting. Visual \"function machine\" component builder bridging arithmetic to algebra.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "The four-condition adoption test (from `GUIDE_DISTRIBUTED_NARRATIVE_METHODOLOGY.md` § 2):",
      "members": [
        {
          "name": "Stride the Pattern-Walker",
          "role": "Linear functions (constant rate of change)"
        },
        {
          "name": "Echo the Sameness-Keeper",
          "role": "Constant functions (zero rate of change; output unchanged regardless of input)"
        },
        {
          "name": "Arc the Curve-Catcher",
          "role": "Quadratic functions (parabola — symmetric rate-of-change-changes)"
        },
        {
          "name": "Burst the Doubler",
          "role": "Exponential functions (constant *multiplicative* rate of change)"
        },
        {
          "name": "Pivot the Rule-Switcher",
          "role": "Piecewise functions (different rules for different input ranges)"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/functionforge/icon-sm.webp",
    "mascotPath": "/apps/functionforge/mascot.webp",
    "mentor": "Domain",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/functionforge/icon.webp",
    "longTagline": "FunctionForge is a fun math lab where you explore how functions work! You will build \"function machines\" that take a number in and spit a number out, graph lines and curves on a coordinate plane, and discover patterns in real-world data. It is like having your own math laboratory on your iPad.",
    "features": [
      {
        "name": "Function Machine Lab",
        "description": "Build your own function machines by connecting gears and parts. Drop a number into the machine and watch it transform! Try different inputs to figure out the ru"
      },
      {
        "name": "Graph Canvas",
        "description": "Plot points on a coordinate plane and watch lines and curves appear. Drag points around to see how the graph changes. You will learn about slope, rate of change"
      },
      {
        "name": "Data Lab",
        "description": "Explore real-world data like temperature, sports scores, or animal populations. Place dots on a scatter plot and drag a line of best fit to find trends. See if"
      },
      {
        "name": "Pattern Discovery",
        "description": "Find hidden patterns in number sequences. Once you spot the pattern, write it as a function rule. This is your bridge from playing with numbers to writing real"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "geneforge",
    "name": "GeneForge",
    "tagline": "Extract DNA, map inheritance with Punnett squares, simulate CRISPR gene editing, and debate bioethics — explore genetics and biotechnology from Mendel's peas to modern gene therapy through hands-on virtual lab experiments.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "GeneForge teaches inheritance, molecular biology, and biotechnology — a domain with a clean catalogue of named patterns (DNA, alleles, Punnett crosses, mutations, CRISPR edits).",
      "members": [
        {
          "name": "Bead",
          "role": "Gene as discrete inheritable unit"
        },
        {
          "name": "Match",
          "role": "Allele pairing (Punnett crosses)"
        },
        {
          "name": "Script",
          "role": "DNA → RNA → protein (the genetic code as a recipe)"
        },
        {
          "name": "Trace",
          "role": "Lineage / heredity across generations"
        },
        {
          "name": "Snip",
          "role": "Mutation + CRISPR (variation + intervention)"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/geneforge/icon-sm.webp",
    "mascotPath": "/apps/geneforge/mascot.webp",
    "mentor": "Codex",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/geneforge/icon.webp",
    "longTagline": "GeneForge is a virtual genetics laboratory where you become a junior scientist! You will extract DNA from fruit cells, predict what baby organisms look like using Punnett squares, simulate cutting-edge CRISPR gene editing, and discuss real bioethics questions. It is hands-on science right on your de",
    "features": [
      {
        "name": "DNA Extraction Lab",
        "description": "Follow step-by-step instructions to extract DNA from virtual fruit cells. You will crush, filter, and isolate DNA strands just like a real scientist. Watch the"
      },
      {
        "name": "Punnett Square Builder",
        "description": "Predict what traits baby organisms will have by filling in Punnett squares. Cross a tall plant with a short plant and see what happens. Learn about dominant and"
      },
      {
        "name": "CRISPR Simulator",
        "description": "Use a virtual gene-editing tool to change an organism's DNA. Pick which gene to edit, make your cut, and see what changes. This is the same technology real scie"
      },
      {
        "name": "Bioethics Board",
        "description": "Discuss big questions about genetics with your AI mentor. Should we edit genes to prevent diseases? What about changing how people look? There are no wrong answ"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "geometryforge",
    "name": "GeometryForge",
    "tagline": "Interactive geometry exploration app for ages 9-14 covering the complete CCSS Geometry curriculum — transformations, coordinate geometry, similarity, proof, and 3D solids — using hands-on RealityKit 3D visualization, visual theorem discovery, and progressive spatial reasoning challenges. Companion app to CubeSensei (which focuses on Rubik's Cube mastery and magic tricks).",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "Geometry decomposes neatly into named theorems (right-triangle relations, inscribed-angle, transversals) and named construction patterns — every character embodies one foundational geometric idea, no real historical figures.",
      "members": [
        {
          "name": "Master Hypotenuse",
          "role": "Right-triangle relations: a² + b² = c²"
        },
        {
          "name": "Lady Inscribed-Angle",
          "role": "Circle theorems (inscribed-angle, central-angle, tangent-chord, cyclic quadrilateral)"
        },
        {
          "name": "Sir Transverse",
          "role": "Parallel-line transversals + intercept theorem (proportional segments cut by parallel lines)"
        },
        {
          "name": "Apprentice Sides",
          "role": "Area formulas (triangle area from side lengths; rectangle / parallelogram / trapezoid area)"
        },
        {
          "name": "Captain Construction",
          "role": "Compass-and-straightedge constructions (bisector, perpendicular, equilateral triangle, regular hexagon, circle-given-three-points)"
        },
        {
          "name": "Compass Wraith",
          "role": "Locus problems + circle-as-set-of-equidistant-points"
        },
        {
          "name": "Madame Polygon",
          "role": "Regular-polygon facts (interior-angle sum, exterior-angle sum, regular-tessellation, symmetry of regular n-gons)"
        },
        {
          "name": "Master Tangent",
          "role": "Limit-and-touch problems (tangent to a circle from external point, tangent-chord angle, tangent-as-limit-of-secant)"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/geometryforge/icon-sm.webp",
    "mascotPath": "/apps/geometryforge/mascot.webp",
    "implementing": true,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/geometryforge/icon.webp",
    "longTagline": "GeometryForge is a complete CCSS Geometry adventure for students ages 9–14. Master transformations, congruence, similarity, coordinate geometry, and spatial reasoning through interactive problems, animated demonstrations, and 13 adventure-game modes — plus a Rubik's Cube challenge for spatial thinki",
    "features": [
      {
        "name": "Tabs",
        "description": "The app has four tabs:"
      },
      {
        "name": "Explore tab (home)",
        "description": "The home screen has six zones, top to bottom:"
      },
      {
        "name": "Practicing a topic",
        "description": "Most topics work the same way:"
      },
      {
        "name": "The 23 topics",
        "description": "Grouped by strand:"
      }
    ],
    "mentor": "Hero",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
        },
    "playTogether": true
  },
  {
    "slug": "grammarforge",
    "name": "GrammarForge",
    "tagline": "Master grammar, sentence structure, and language conventions through interactive sentence diagramming puzzles, error detective investigations, and style editing challenges — turning grammar rules into engaging game mechanics. Ages 9-14.",
    "vertical": "academics",
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "Mayor Subject",
          "role": "Subject (noun/pronoun performing the action)"
        },
        {
          "name": "Verb Verity",
          "role": "Verb (action / state of being)"
        },
        {
          "name": "Object Otto",
          "role": "Direct / indirect object (receiver of the verb's action)"
        },
        {
          "name": "Modifier Mike",
          "role": "Adverb (modifies verb / adjective / other adverb)"
        },
        {
          "name": "Modifier Madge",
          "role": "Adjective (modifies noun / pronoun)"
        },
        {
          "name": "Connector Chen",
          "role": "Conjunction (coordinating / subordinating — *and*, *but*, *because*, *although*)"
        },
        {
          "name": "Pronoun Perry",
          "role": "Pronoun (substitute for noun — *he*, *she*, *they*, *it*, *who*)"
        },
        {
          "name": "Article Anne",
          "role": "Article (*a*, *an*, *the* — definite vs. indefinite)"
        },
        {
          "name": "Preposition Pat",
          "role": "Preposition (spatial / temporal relations — *on*, *under*, *between*, *before*)"
        },
        {
          "name": "Clause-Chief Carla",
          "role": "Clause-types (independent / dependent / subordinate / relative)"
        },
        {
          "name": "Punctuator Polly",
          "role": "Punctuation guardian (commas, semicolons, apostrophes, colons, dashes)"
        },
        {
          "name": "Agreement Ada",
          "role": "Subject-verb agreement (singular subject → singular verb; plural subject → plural verb; tricky cases — collective nouns, *either/or*, indefinite pronouns)"
        }
      ]
    },
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/grammarforge/icon-sm.webp",
    "mascotPath": "/apps/grammarforge/mascot.webp",
    "mentor": "Clause",
    "implementing": true,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/grammarforge/icon.webp",
    "longTagline": "GrammarForge turns grammar into a game! Solve sentence diagramming puzzles, investigate \"grammar crime scenes\" where sentences have gone wrong, combine clauses like building blocks, and go on punctuation missions. You will become a sentence structure expert without it ever feeling like homework.",
    "features": [
      {
        "name": "Sentence Diagramming Puzzles",
        "description": "Drag words onto a Reed-Kellogg diagram to show how a sentence is built. Place the subject on the left, the verb in the middle, and objects on the right. Watch t"
      },
      {
        "name": "Grammar Crime Scenes",
        "description": "A sentence has been broken! Find the grammar mistake hiding in each sentence. Is it a run-on? A fragment? A misplaced modifier? Fix the crime and earn your dete"
      },
      {
        "name": "Clause Combining",
        "description": "Take short, choppy sentences and combine them into longer, more interesting ones. Use conjunctions, relative pronouns, and other connecting words to build compl"
      },
      {
        "name": "Punctuation Missions",
        "description": "Place commas, semicolons, quotation marks, and other punctuation in the right spots. Each mission focuses on a different punctuation rule so you learn one skill"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "growforge",
    "name": "GrowForge",
    "tagline": "Grow a virtual garden powered by real weather data, design plant experiments, and discover the science of photosynthesis, genetics, and ecosystems — bridging the digital and natural worlds.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/growforge/icon-sm.webp",
    "mascotPath": "/apps/growforge/mascot.webp",
    "mentor": "Sprig",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "GrowForge's 5-character cast embodies garden-craft primitives — seed-and-planting listening (Tuck), water + irrigation patience (Drip), photosynthesis + cell-level biology (Glow), container + apartment gardening access (Pot), and observation + plant-doctoring patience (Vigil). Sprig (mentor rename — was Bloom, HARD-collide with SoundSphere Wave-7 cast — resolved code-side in Phase A; site already aligned) frames each primitive; cast embodies them at kid-and-windowsill scale (NEVER suburban-backyard-default mascotization). Nature-deficit + privilege gate enforced (CRITICAL — UNIQUE to GrowForge in Wave 26): cast NEVER assumes access to outdoor space, free time, or supplies; Pot's structural presence from kit 8 onward names apartment-windowsill / urban / community-plot as PEER gardening contexts (NOT lesser-than backyard); Pot's catchphrase 'a windowsill is a garden too' is load-bearing; static-response gating for 'real gardeners need a yard' / 'apartment kids can't garden' prompts NEVER reaches FoundationModels (Sprig surface filter). Hands-on-care framing throughout (NOT extractive harvest-and-consume framing). External nature-deficit + urban-gardening + community-gardens sensitivity reviewer RECOMMENDED ($300-$500) before Wave 26.2 art generation.",
      "members": [
        { "name": "Tuck", "role": "Seed + planting — every seed knows what it wants; read-the-packet-then-the-soil" },
        { "name": "Drip", "role": "Water + irrigation literacy — water is the patient teacher; don't-drown-the-thirsty framing" },
        { "name": "Glow", "role": "Photosynthesis + plant biology — leaf-makes-lunch-from-light; cell-level wonder framing" },
        { "name": "Pot", "role": "Container + apartment gardening — windowsill-is-a-garden-too; nature-deficit + privilege gate anchor" },
        { "name": "Vigil", "role": "Observation + plant-doctoring patience — look-every-day-don't-pluck-what's-working; intellectual humility framing" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/growforge/icon.webp",
    "longTagline": "GrowForge is a plant science lab and virtual garden powered by real weather! Grow plants in a garden that responds to your actual local weather, look at plant cells under a digital microscope, design science experiments to find out what makes plants thrive, and even track a real garden alongside you",
    "features": [
      {
        "name": "Virtual Garden",
        "description": "Plant seeds, water them, and watch them grow over real time. Your local weather (sunshine, rain, temperature) affects how your plants do! Check on your garden e"
      },
      {
        "name": "Botany Lab",
        "description": "Zoom into plant cells under a digital microscope. Identify the cell wall, chloroplasts, and other parts. Learn how photosynthesis turns sunlight into food for t"
      },
      {
        "name": "Experiment Designer",
        "description": "Set up controlled experiments to test what plants need. Change one variable at a time -- like amount of water or sunlight -- and record what happens. Your resul"
      },
      {
        "name": "Real Garden Tracker",
        "description": "Growing a real garden too? Take photos of your real plants and track their progress right next to your virtual garden. Compare how real and virtual plants grow!"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "harmonyforge",
    "neurodivergentSupport": true,
    "neurodivergentDesignTraits": ["Autism-supportive", "Sensory-aware", "Low-stimulus mode", "Strength-based", "Identity-affirming"],
    "neurodivergentEvidence": [
      { "aspect": "Visual-pattern-to-music translation", "basis": "Leverages autistic pattern-thinking strengths per app tagline" },
      { "aspect": "Sensory-safe environments", "basis": "Sensory overrides per Wave-7 DN handoff" },
      { "aspect": "Emotion vocabulary tools", "basis": "Interoception scaffolding" },
      { "aspect": "Therapist observer mode", "basis": "Clinical-collaboration affordance (deferred to v2)" }
    ],
    "name": "HarmonyForge",
    "tagline": "A music creation app that leverages neurodivergent (especially autistic) pattern-thinking strengths by translating visual patterns into music. Players arrange colors, shapes, and positions on a grid -- the pattern IS the music. Includes sensory-safe environments, emotion vocabulary tools, and therapist observer mode.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/harmonyforge/icon-sm.webp",
    "mascotPath": "/apps/harmonyforge/mascot.webp",
    "mentor": "Refrain",
    "implementing": true,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/harmonyforge/icon.webp",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "HarmonyForge sits in the **creative-studio cluster** alongside BeatForge / MotifLab / SoundSphere — all 4 shipping distributed-narrative casts in Wave 7.",
      "members": [
        {
          "name": "Triad",
          "role": "Chord-stacking — three tones in vertical alignment (root + third + fifth = the foundation of harmony)"
        },
        {
          "name": "Lean",
          "role": "Voice-leading — smooth stepwise motion between chord tones (the smallest possible movements between consecutive chords)"
        },
        {
          "name": "Pull",
          "role": "Tension — dissonant intervals (the leading-tone, the suspended 4th, the diminished chord) that *want* to resolve"
        },
        {
          "name": "Land",
          "role": "Resolution — the consonant arrival when tension releases (root return; cadence; the V→I gesture)"
        },
        {
          "name": "Shift",
          "role": "Modulation — changing keys mid-piece (the moment a song *moves to a different room* harmonically)"
        }
      ]
    },
    "longTagline": "HarmonyForge lets you create music by arranging colorful shapes on a grid! Each color is a different instrument, each shape is a different rhythm, and where you place it changes the pitch. You do not need to know how to read music -- if you can see patterns, you can make music. The app is designed t",
    "features": [
      {
        "name": "Pattern Grid",
        "description": "Place colored shapes on the grid to build your music. Red circles might be drums, blue squares might be piano, green triangles might be strings. Move shapes up"
      },
      {
        "name": "Sensory Rooms",
        "description": "Pick a calming environment to create in. Each Sensory Room has different colors, background sounds, and visual effects. Find the one that feels best for you."
      },
      {
        "name": "Emotion Journal",
        "description": "After creating music, use the emotion tools to name how you feel. Pick from emotion cards or use the color-based mood tracker. Your journal saves your feelings"
      },
      {
        "name": "Pattern Library",
        "description": "Save your favorite patterns and come back to them anytime. Browse patterns you have made before and remix them into something new."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "harvestforge",
    "name": "HarvestForge",
    "tagline": "Run a farm from seed to shelf — manage soil microbiomes, rotate crops, navigate drought and pest challenges, trace food through the supply chain, and investigate food justice issues that determine who eats and who goes hungry.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/harvestforge/icon-sm.webp",
    "mascotPath": "/apps/harvestforge/mascot.webp",
    "mentor": "Terra",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "HarvestForge's 5-character cast embodies food-system primitives — when-to-plant seasonality (Seed), soil-as-living-community (Soil), supply-chain literacy (Chain), food-access + food-justice (Share), and intergenerational sustainability (Steward). Terra (mentor preserved; site reconciled from 'Bramble' to match shipped code) frames each primitive; cast embodies them at farm-and-community scale (NEVER agribusiness-mascotization). Food-justice + food-access gate enforced (CRITICAL): cast NEVER amplifies food-insecurity shame; Share's structural presence from kit 11 onward names community-food-network framing — food deserts are SYSTEMS not personal failings; supply-chain content includes farmworker labor conditions (kit 12) without scare-tactics. Idyllic-farm-romanticism gate: cast art register is mended/working/patinated; NO white-picket-fence / shiny-tractor / model-farm iconography; supply-chain truthful about labor + food-system fragility. External food-justice + farmworker-labor + Indigenous-food-system sensitivity reviewer RECOMMENDED ($500-$800) before Wave 26.2 art generation.",
      "members": [
        { "name": "Seed", "role": "Seasonality + sowing — when to plant, what each season teaches; calendar-as-tool" },
        { "name": "Soil", "role": "Soil microbiome + nutrient cycling — soil is alive; soil-as-community framing" },
        { "name": "Chain", "role": "Supply chain literacy — every loaf tells a journey; whose-hands framing" },
        { "name": "Share", "role": "Food access + food-justice — community-food-network framing; food deserts are systems, NOT moral failings" },
        { "name": "Steward", "role": "Sustainable practices + intergenerational restoration — field remembers; latest-not-first framing" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/harvestforge/icon.webp",
    "longTagline": "HarvestForge lets you run your own farm from seed to shelf! Plant crops, manage soil health, fight pests with smart strategies, and trace your food through the supply chain to the dinner table. Real weather from your location affects your virtual farm, so a rainy day outside means water for your cro",
    "features": [
      {
        "name": "Farm Management",
        "description": "Tap your farm fields to plant crops, inspect soil, and manage irrigation. Each field plot is a tile you can plant on. Choose from different crop types -- each o"
      },
      {
        "name": "Soil Science Lab",
        "description": "Tap the soil to see a cross-section view. You will see the pH level, nitrogen, phosphorus, potassium, organic matter, and moisture. Healthy soil grows bigger ha"
      },
      {
        "name": "Crop Rotation",
        "description": "Planting the same crop in the same field season after season depletes the soil and invites pests. The rotation advisor helps you plan which crops to plant where"
      },
      {
        "name": "Pest Management",
        "description": "Pests show up as your farm grows. You can fight them with beneficial insects, physical barriers, or targeted treatments. Each method has trade-offs -- some are"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 2
    }
  },
  {
    "slug": "heatforge",
    "name": "HeatForge",
    "tagline": "Race heat through solids, liquids, and gases — watch convection currents spiral, design insulation that defeats a blowtorch, and discover why ice cream melts faster on a hot sidewalk than in the freezer as you master the three laws of thermodynamics.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/heatforge/icon-sm.webp",
    "mascotPath": "/apps/heatforge/mascot.webp",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "HeatForge teaches thermodynamics as a **family of energy-transfer mechanisms** — conduction, convection, radiation, phase change, and the macroscopic energy-flow consequences (insulation, climate, cooking).",
      "members": [
        {
          "name": "Touch",
          "role": "Conduction (contact-bound molecular transfer)"
        },
        {
          "name": "Drift",
          "role": "Convection (fluid circulation carrying heat)"
        },
        {
          "name": "Glow",
          "role": "Radiation (electromagnetic energy across empty space)"
        },
        {
          "name": "Shift",
          "role": "Phase change / latent heat (state transition without temperature change)"
        },
        {
          "name": "Hush",
          "role": "Insulation / thermal equilibrium (slowing transfer, reaching balance)"
        }
      ]
    },
    "iconHeroPath": "/apps/heatforge/icon.webp",
    "longTagline": "HeatForge is a thermodynamics and energy transfer lab where you race heat through materials, watch particles vibrate as they warm up, engineer insulation to defeat a virtual blowtorch, and explore how the greenhouse effect warms our planet. Your AI mentor Kelvin connects the science to real-world en",
    "features": [
      {
        "name": "Heat Transfer Visualizer",
        "description": "Watch heat flow through different materials using the particle model. Particles vibrate faster (and turn red) as they warm up. Compare copper, wood, glass, and"
      },
      {
        "name": "States of Matter Lab",
        "description": "Add heat to a substance and watch it transform. See ice melt into water and water boil into steam at the particle level. Notice how temperature stays flat durin"
      },
      {
        "name": "Insulation Engineering",
        "description": "Design insulation systems to solve real-world challenges. Layer different materials (foam, wool, aerogel, air gaps) to keep ice cream frozen, protect an astrona"
      },
      {
        "name": "Greenhouse Effect Lab",
        "description": "Control Earth's energy budget by adjusting atmospheric CO2, albedo, and solar input. Watch energy rays arrive from the sun, get absorbed by the surface, and get"
      }
    ],
    "mentor": "Kelvin",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "illusionforge",
    "name": "IllusionForge",
    "tagline": "Science-of-magic exploration app where kids discover the physics, chemistry, and cognitive psychology behind magic tricks and optical illusions. Interactive science animations demonstrate forces, optics, and misdirection principles. Performance planning builds public speaking confidence. Concrete cause-and-effect reasoning satisfies the \"need to know why\" drive common in neurodivergent learners.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/illusionforge/icon-sm.webp",
    "iconHeroPath": "/apps/illusionforge/icon.webp",
    "mascotPath": "/apps/illusionforge/mascot.webp",
    "mentor": "Veil",
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "IllusionForge sits in the **creative-studio visual-arts cluster** alongside PixelForge / SpectrumCanvas / MangaForge — all 4 shipping distributed-narrative casts in Wave 8.",
      "members": [
        {
          "name": "Fade",
          "role": "The afterimage / persistence-of-vision — the visual trace left after a stimulus is removed (the foundation of animation, film, and many magic tricks)"
        },
        {
          "name": "Stack",
          "role": "The perspective trap — the geometric arrangement that misleads size and depth judgments (Müller-Lyer, Ponzo, Ebbinghaus, vanishing-point depth cues)"
        },
        {
          "name": "Notch",
          "role": "The impossible figure — the figure that locally reads as coherent but globally cannot exist (Penrose triangle, Escher staircase, blivet)"
        },
        {
          "name": "Cue",
          "role": "The auditory illusion — the sound-perception mechanism (Shepard tones, McGurk effect, phantom-melody, missing-fundamental)"
        },
        {
          "name": "Loop",
          "role": "The perceptual loop — the recursive / endless / barber-pole motion illusion (the mechanism that makes the brain see motion that can't end)"
        }
      ]
    },
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 3
    }
  },
  {
    "slug": "improvquest",
    "name": "ImprovQuest",
    "tagline": "Play improv comedy games with friends and AI scene partners — say \"yes, and...\" to adventure",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/improvquest/icon-sm.webp",
    "mascotPath": "/apps/improvquest/mascot.webp",
    "mentor": "Riff",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ImprovQuest's 5-character cast embodies the foundational improv-comedy primitives — yes-and / offer-acceptance (Give, make-your-partner-look-good posture), listening (Hark, the-answer-is-in-what-they-said discipline), character work (Don, body-finds-voice physicality), scene-building (Lay, platform-before-plot patience), and risk-tolerance (Leap, your-worst-commit-beats-your-best-half-commit). Riff (mentor; soft-collision with StageForge Wave 14 cast Riff allowed per registry rule 4 — different role + register) frames each primitive; cast embodies them at school-improv-club / community-improv-jam scale (NEVER stand-up-comedy-tryout / SNL-audition / 'are you funny enough' gatekeeping). Social-anxiety + performance-anxiety gate enforced: cast NEVER positions improv as competitive; Give's 'make your partner look good' is structurally load-bearing across every cast appearance; static-response gating for 'I'm not funny' anxiety signals; cooperative ensemble framing over individual virtuosity throughout.",
      "members": [
        { "name": "Give", "role": "Yes-and / offer-acceptance — make-your-partner-look-good cooperative posture (the gift-orb metaphor)" },
        { "name": "Hark", "role": "Listening — receiving-before-responding discipline (the answer is in what your partner just said)" },
        { "name": "Don", "role": "Character work + physicality — body-finds-voice, find-ONE-thing approach" },
        { "name": "Lay", "role": "Scene-building + narrative — patient platform-before-plot foundation-laying (who/where/what/why)" },
        { "name": "Leap", "role": "Risk-tolerance + commitment — leap-and-the-net-appears; worst-commit-beats-best-half-commit" }
      ]
    },
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/improvquest/icon.webp",
    "longTagline": "ImprovQuest is a digital improv comedy adventure! Learn the rules of improv comedy like \"Yes, and...\" and then practice performing scenes with AI partners or real friends. Start by learning the basics, then work your way up to performing in full shows. It is like drama class meets a comedy video gam",
    "features": [
      {
        "name": "Improv Academy",
        "description": "Learn the core rules of improv comedy through short lessons. \"Yes, and...\" means you always agree with your scene partner and add something new. You will also l"
      },
      {
        "name": "Scene Games",
        "description": "Play classic improv games with an AI scene partner. Try scenes with different characters -- a silly chef, a dramatic detective, or an energetic superhero. You c"
      },
      {
        "name": "Multiplayer Shows",
        "description": "Join friends for a live improv show. Take turns performing scenes while the audience votes on their favorites. The best performers earn standing ovations!"
      },
      {
        "name": "Comedy Troupe",
        "description": "Build your own comedy troupe with friends. Practice together, develop inside jokes, and level up your troupe's reputation by performing great shows."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 2
    }
  },
  {
    "slug": "inclusionforge",
    "neurodivergentSupport": true,
    "neurodivergentDesignTraits": ["Identity-affirming", "2e-friendly", "Communication-scaffolding", "Sensory-aware", "Strength-based"],
    "neurodivergentEvidence": [
      { "aspect": "Universal Design curriculum", "basis": "Disability-rights movement history; Justin Dart Jr. / Judy Heumann / Ed Roberts / Haben Girma identity representation" },
      { "aspect": "DisCrit + ASAN-affirming voice baseline", "basis": "Annamma 2024 + Sayman 2025 + ASAN 2024 alignment" },
      { "aspect": "Multidimensional identity representation", "basis": "Crenshaw 1991 intersectionality across cast + kits" },
      { "aspect": "Disability-community + intersectional-identity sensitivity reviewer", "basis": "$800-$1,500 envelope (recommended)" }
    ],
    "name": "InclusionForge",
    "tagline": "Experience daily life through different abilities, explore the history of disability rights, then design solutions that work for everyone — using Universal Design principles to build a more accessible world. Ages 9-14.",
    "vertical": "academics",
    "heroColor": "#81C784",
    "iconPath": "/apps/inclusionforge/icon-sm.webp",
    "mascotPath": "/apps/inclusionforge/mascot.webp",
    "mentor": "Beacon",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "InclusionForge's 5-character cast embodies ALLY-MOVE PRACTICES not PEOPLE per Wave 28 DN retrofit (Wave 15 retry): Lens (perspective-taking) / Notice (barrier-identification) / Ask (consent + amplify) / Design (Universal Design) / Repair (repair-and-reflect). Beacon (the existing AI mentor) introduces and references each ally-move. Identity-representation gate enforced (CRITICAL — second-most-careful Wave 28 burden per Annamma 2024 DisCrit + ASAN 2024 + Sayman 2025): NO cast character represents a specific identity group; all 5 are non-human animals embodying PRACTICES never PEOPLE; NO real-cultural-leader-names as cast (no MLK / Mandela / Marsha-P-Johnson / Judy-Heumann / Ed-Roberts / Haben-Girma archetypes); multidimensional-identity baseline per Crenshaw 1991 intersectionality (race × gender × class × disability × age × culture × religion — NO single-axis-identity scenarios). Real identity representation lives in kit illustrations of historical figures (Judy Heumann / Ed Roberts / Justin Dart Jr. / Haben Girma / Stella Young — authored with cultural-credit framing + community-sourced references), Beacon's mentor copy for kits 3 / 7 / 9 / 11 (history + cultural-awareness + allyship), and Perspective Mode scenarios with community-source citation. Cast NEVER speaks AS or FOR any identity group. Kits 3 / 7 / 9 are CAST-FREE (real historical figures + cultural-awareness content — community voices lead). External disability-community + intersectional-identity sensitivity reviewer STRONGLY RECOMMENDED ($800-$1,500). Mend rejected (RuptureRepair mentor collision) → Repair.",
      "members": [
        { "name": "Lens", "role": "Perspective-taking — asking + listening, NEVER mind-reading; 'I can't BE you. But I can ASK what it's like.'" },
        { "name": "Notice", "role": "Barrier-identification — barriers as PROPERTIES OF SPACES never PROPERTIES OF PEOPLE; 'It's not the wheel. It's the stair.'" },
        { "name": "Ask", "role": "Ask-don't-assume + amplify — makes SPACE for voices, never replaces them; 'What would feel right TO YOU? I'll listen.'" },
        { "name": "Design", "role": "Universal Design — multi-modal solutions; never one-size-fits-most; 'Three doors. Different doors. All doors.'" },
        { "name": "Repair", "role": "Repair-and-reflect — mistakes as PART OF the work; never self-flagellating (renamed from Mend — RuptureRepair mentor collision)" }
      ]
    },
    "standards": [
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/inclusionforge/icon.webp",
    "longTagline": "InclusionForge is a disability awareness and inclusive design academy where you experience daily life through different abilities, explore the history of disability rights, and design solutions that work for everyone. Using Universal Design principles, you build a more accessible world while develop",
    "features": [
      {
        "name": "Perspective Mode",
        "description": "Navigate everyday scenarios -- school, shopping, sports, social situations -- through the experiences of characters with various abilities. Characters use wheel"
      },
      {
        "name": "History Mode",
        "description": "Explore an interactive timeline of the disability rights movement. Meet real historical figures like Judy Heumann, Ed Roberts, and Justin Dart Jr. through illus"
      },
      {
        "name": "Design Mode",
        "description": "Receive design challenges -- redesign a school entrance, plan an inclusive event, create a sensory-friendly classroom. Apply Universal Design principles and see"
      },
      {
        "name": "Assistive Technology Explorer",
        "description": "Try interactive demonstrations of assistive technologies -- screen readers, switch access, eye tracking, hearing loops, text-to-speech, and alternative keyboard"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "inkquest",
    "name": "InkQuest",
    "tagline": "Junior investigative journalists at a school newspaper collect data, analyze patterns, identify bias, and write articles. Addresses data literacy + media literacy simultaneously.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/inkquest/icon-sm.webp",
    "mascotPath": "/apps/inkquest/mascot.webp",
    "mentor": "Caret",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "InkQuest's 5-character cast embodies the data-journalism craft primitives — story-from-data (Lede), interview + notebook craft (Pad), verification + triangulation (Crosscheck), chart-annotation craft (Margin), citation + provenance (Footer). Caret (mentor — proofreader's-mark editorial-craft register; renamed from site placeholder 'Byline' and code-side generic 'Mentor' in Phase A) introduces each primitive. Wave 25 NewsForge cluster strict-no-overlap honored (Source / Tilt / Frame / Verify / Serve REJECTED — those are NewsForge's news-literacy primitives; InkQuest distinct as data-journalism craft). No trauma-informed gate (craft-discipline domain).",
      "members": [
        { "name": "Lede", "role": "Story-from-data — finding the angle; what's the story under the numbers?" },
        { "name": "Pad", "role": "Field-capture + interview craft — open the question; let the answer breathe" },
        { "name": "Crosscheck", "role": "Verification + triangulation — three sources say the same thing, now I have something" },
        { "name": "Margin", "role": "Data-table + chart-annotation craft — label the axes; caption the chart; credit the data" },
        { "name": "Footer", "role": "Citation + provenance — every number has a name behind it; tell the reader who counted" }
      ]
    },
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/inkquest/icon.webp",
    "longTagline": "InkQuest puts you in the shoes of a junior investigative journalist! Collect data, interview sources, analyze patterns, spot bias, and write evidence-based articles for your school newspaper. You will learn how real journalists use data and facts to tell important stories.",
    "features": [
      {
        "name": "Investigation Board",
        "description": "Each story starts on your investigation board. Pin clues, connect leads, and figure out what questions to ask. Move around the newsroom to interview NPC sources"
      },
      {
        "name": "Data Collection",
        "description": "Gather numbers and facts from interviews, surveys, and documents. Organize your data into tables and look for patterns. Is the data telling a clear story?"
      },
      {
        "name": "Chart Builder",
        "description": "Turn your raw data into charts and graphs. Pick the right chart type -- bar, line, or pie -- to make your data easy to understand. A misleading chart can change"
      },
      {
        "name": "Article Writer",
        "description": "Write your article using the evidence you collected. Drag key quotes and data points into your story. The AI editor gives you feedback on whether your article i"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "jestforge",
    "name": "JestForge",
    "tagline": "Learn to write jokes, riddles, and puns — then battle friends to see who's funniest",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/jestforge/icon-sm.webp",
    "mascotPath": "/apps/jestforge/mascot.webp",
    "mentor": "Quip",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "JestForge's 5-character cast embodies the foundational comedy-craft primitives — joke structure (Plant, setup-and-payoff plant-and-harvest architecture), wordplay (Bend, semantic-twist + double-meaning), timing (Pause, the-laugh-lives-in-the-space discipline), audience awareness (Gauge, read-the-room-before-you-joke), and cross-cultural humor (Trove, honor-the-tradition-don't-claim-it elder-keeper). Quip (mentor) frames each primitive; cast embodies them at school-comedy-club / community-open-mic-warmup-circle scale (NEVER comedy-club-headliner / late-night-show / 'is it funny enough' gatekeeping). Punching-down gate enforced (CRITICAL): cast NEVER mocks identity / body / disability / mental health; comedy structurally punches UP (at systems, at universal absurdity, at the comedian's own foibles) NEVER DOWN (at people who can't laugh back); static-response gating for targeted-humor prompts. Timing-shame gate enforced: Pause's catchphrase normalizes that timing is learned; no innate-talent framing. Cross-cultural humor (kit 7+) gated on Trove's anti-cultural-appropriation register.",
      "members": [
        { "name": "Plant", "role": "Joke structure — plant-the-seed-in-the-setup / harvest-the-laugh architecture" },
        { "name": "Pause", "role": "Comedic timing — the-laugh-lives-in-the-space patient-restraint discipline" },
        { "name": "Bend", "role": "Wordplay + puns — semantic-twist + double-meaning (groans are the laugh you didn't expect)" },
        { "name": "Gauge", "role": "Audience awareness — read-the-room-before-you-joke; same-you-different-gauge framing" },
        { "name": "Trove", "role": "Cross-cultural humor — honor-the-tradition-don't-claim-it elder-keeper of comedy-traditions-as-equals" }
      ]
    },
    "implementing": false,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/jestforge/icon.webp",
    "longTagline": "JestForge is a comedy creation workshop where you learn how jokes actually work -- then make your own! Study joke structures like setup-punchline, craft puns and riddles, battle friends in comedy competitions, and build a joke journal. It is the first app that teaches comedy as a real creative skill",
    "features": [
      {
        "name": "Comedy Academy",
        "description": "Learn how different types of jokes are built. What makes a pun funny? How does misdirection work in a setup-punchline joke? Each lesson breaks down a joke type"
      },
      {
        "name": "Joke Workshop",
        "description": "Use guided creation tools to write your own jokes. Pick a joke template, fill in the blanks with your own words, and the AI comedy mentor gives you feedback. As"
      },
      {
        "name": "Comedy Battles",
        "description": "Challenge friends to a comedy battle! Everyone submits their best joke anonymously, and the group votes on the funniest ones. Points go to the jokes, not the pe"
      },
      {
        "name": "Joke Journal",
        "description": "Save every joke you create in your personal joke journal. Rate your own jokes, tag them by type, and watch your comedy skills improve over time."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 3
        },
    "playTogether": true
  },
  {
    "slug": "labsmith",
    "name": "Labsmith",
    "tagline": "Virtual science lab where kids run real physics simulations — mix chemicals, build circuits, test buoyancy — earning mastery ranks through hands-on experimentation, not quizzes. Hypothesis-first loop: predict → run → observe → reconcile.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/labsmith/icon-sm.webp",
    "mascotPath": "/apps/labsmith/mascot.webp",
    "mentor": "Smithy",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "LabSmith-app's 4-character OHEL-step cast IS the loop — Observe / Hypothesize / Experiment / Learn primitives map 1:1 to 4-character cast See / Guess / Check / Reflect. STRONGEST 1:1 primitive-to-cast mapping in the portfolio. Per `labsmith-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22 (NOTE: labsmith-app is the SCIENCE EXPERIMENT SANDBOX RPG product, NOT the labsmith research hub). Smithy preserved as Socratic mentor. Multiple cast collision-renames applied (Watch→See / Wonder→Guess / Try→Check / Learn→Reflect). Labsmith generates ~$1.08 cast assets. Cross-app cameos: See ↔ TerraWatch+CuriosityQuest (patient-observation cluster load-bearing); Guess ↔ ChanceForge (probability-as-hypothesis); Check ↔ MakerForge+LevelForge (iteration cluster load-bearing); Reflect ↔ ResearchQuest+MindForge (meta-cognition cluster). NO real-scientist mascotization (Newton/Curie/Einstein/Feynman in static kit metadata ONLY).",
      "members": [
        { "name": "See", "role": "Observe — gather raw data first; 'Look first. Talk later.'" },
        { "name": "Guess", "role": "Hypothesize — frame a testable guess; 'What if…?'" },
        { "name": "Check", "role": "Experiment — design + run the test; 'One test at a time.'" },
        { "name": "Reflect", "role": "Learn — interpret results + revise; 'What did we learn? What surprised us?'" }
      ]
    },
    
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/labsmith/icon.webp",
    "longTagline": "LabSmith is a science experiment sandbox RPG for curious kids ages 9–14. You play as an apprentice \"Smith\" at the Grand Laboratory, conducting interactive physics and science simulations to earn mastery ranks and unlock new experiments.",
    "features": [
      {
        "name": "First Launch",
        "description": "1. Open LabSmith and enter your name to create your scientist profile."
      },
      {
        "name": "Your First Session",
        "description": "Your first session takes about 10–15 minutes and covers one experiment in the Mechanics Lab. Here is what to expect:"
      },
      {
        "name": "The Hypothesis Loop",
        "description": "Every experiment follows the same four steps: Observe, Hypothesize, Experiment, Learn. This structure mirrors how real scientists work. The most important thing"
      },
      {
        "name": "The Lab Domains",
        "description": "LabSmith is organized into science domains. Each domain is its own subject pack with multiple experiments:"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 2
    }
  },
  {
    "slug": "levelforge",
    "name": "LevelForge",
    "tagline": "Players learn game design by designing, building, playtesting, and sharing their own playable games",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/levelforge/icon-sm.webp",
    "mascotPath": "/apps/levelforge/mascot.webp",
    "mentor": "Pixel",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "LevelForge's 5-character cast embodies the foundational game-level-design primitives — level architecture (Carve, where-does-the-eye-go-first spatial-flow), player psychology (Coax, invite-don't-trap warm-host posture), juice + feedback (Bounce, tiny-celebrations empathy-polish), playtesting + iteration (Probe, what-did-they-DO-not-SAID listening-discipline), and difficulty curves (Ramp, teach-test-vary-rest deliberate-difficulty-as-love-letter). Pixel (mentor) frames each primitive; cast embodies them at school-game-dev-club / indie-jam-team scale (NEVER AAA-studio-crunch / 'soulslike-hard-only' / 'real games are difficult' gatekeeping). Frustration-design gate enforced (CRITICAL — UNIQUE to LevelForge): cast models deliberate-difficulty as CARE-FOR-PLAYER NEVER PUNISH-PLAYER; foregrounds playtester empathy; static-response gating for 'make it harder' surface requests; Probe's playtester-quote primacy structurally anti-auteurism. Difficulty-shame gate: frustration is INFORMATION not failure; Coax's 'invite, don't trap' is load-bearing across every cast appearance.",
      "members": [
        { "name": "Carve", "role": "Level architecture — where-does-the-eye-go-first spatial-flow + sight-line + landmark craft" },
        { "name": "Coax", "role": "Player psychology — invite-don't-trap; warm-host posture; player chooses forward" },
        { "name": "Bounce", "role": "Juice + feedback — tiny-celebrations; squash-stretch-shake-thunk; juice as empathy" },
        { "name": "Probe", "role": "Playtesting + iteration — what-they-DID-not-SAID listening-discipline; playtester-over-designer-taste" },
        { "name": "Ramp", "role": "Difficulty curves — teach-test-vary-rest; deliberate-difficulty-as-love-letter; never-spike never-punish" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/levelforge/icon.webp",
    "longTagline": "Welcome to LevelForge! You are now a game designer.",
    "features": [
      {
        "name": "The Arcade HQ",
        "description": "This is your home base. Here's what you'll find:"
      },
      {
        "name": "Picking a Game Type",
        "description": "You can make three types of games:"
      },
      {
        "name": "The Level Editor",
        "description": "This is where you build your game!"
      },
      {
        "name": "The Grid",
        "description": "Your level is a big grid of squares. Each square is one tile. You place game pieces on the tiles."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 1,
      "play": 2,
      "create": 3
    }
  },
  {
    "slug": "lifequest",
    "name": "LifeQuest",
    "tagline": "Navigate real-life consumer decisions — compare phone plans, read lease agreements, plan meals on a budget, spot consumer scams, and manage a household — through simulation of the everyday adult scenarios that middle schoolers will face within five years. Ages 11-14.",
    "vertical": "academics",
    "heroColor": "#81C784",
    "iconPath": "/apps/lifequest/icon-sm.webp",
    "mascotPath": "/apps/lifequest/mascot.webp",
    "mentor": "Steward",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "LifeQuest's 6-character life-skill-domain cast maps 1:1 to the 6 consumer-literacy + life-skills domains — budgeting / document-reading / scam-detection / forms-and-taxes / meal-planning / interview-and-self-advocacy. Cast: Save / Parse / Spot / Fill / Cook / Say. UNIQUE TRAUMA-INFORMED BURDEN: class-stress-adjacent content requires off-ramps + sensitivity reviewer ($500-$800). Per `lifequest-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22. MENTOR RENAMED in Wave 32b: previous 'Tally' (HARD collision with EscapeForge Wave 32b sibling cast member Tally) → 'Steward' (life-decisions-stewardship register; clear in registry). Multiple cast collision-renames applied (Plan→Save / Read→Parse / Tell→Say). Labsmith generates ~$1.62 cast assets. Cross-app cameos: Spot ↔ TerraWatch+ForgeClassroom+CuriosityQuest (load-bearing observation cluster); Save ↔ EconomicsForge planning; Parse ↔ TruthQuest; Cook ↔ SaffronLab; Say ↔ DebateForge+SpeakForge.",
      "members": [
        { "name": "Save", "role": "Budgeting + financial planning — 'Money is a tool. Plan the tool.'" },
        { "name": "Parse", "role": "Reading-comprehension for adult docs — 'Slow down. Read it ALL.'" },
        { "name": "Spot", "role": "Scam-detection + critical-claim-evaluation — 'Show me the proof.'" },
        { "name": "Fill", "role": "Forms + paperwork + simplified taxes — 'Fill out. Then double-check.'" },
        { "name": "Cook", "role": "Meal planning + nutrition + budget-cooking — 'Eat well. Spend smart.'" },
        { "name": "Say", "role": "Self-advocacy + interview-craft — 'Be clear. Be kind. Be specific.'" }
      ]
    },
    
    "implementing": false,
    "standards": [
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/lifequest/icon.webp",
    "longTagline": "LifeQuest is a consumer literacy simulator where you navigate real-life adult decisions in a safe practice environment. Compare phone plans, read lease agreements, plan meals on a budget, spot consumer scams, file simplified taxes, and practice job interviews. Your AI Life Coach helps you develop th",
    "features": [
      {
        "name": "Apartment Hunt",
        "description": "Find housing within a budget, read lease terms, identify predatory clauses like automatic renewal and excessive late fees, understand tenant rights, set up util"
      },
      {
        "name": "Smart Shopper",
        "description": "Master unit pricing at the grocery store, understand sales and coupon math, read product labels and warranties, comparison shop for major purchases, and recogni"
      },
      {
        "name": "Contract Literacy",
        "description": "Read through simplified but realistic contracts for cell phone plans, gym memberships, streaming services, and car insurance. Practice identifying auto-renewal"
      },
      {
        "name": "Tax Basics",
        "description": "Read a W-2, understand paycheck deductions (federal tax, state tax, Social Security, Medicare), complete a simplified tax form, and learn what taxes fund. Demys"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "linguaquest",
    "name": "LinguaQuest",
    "tagline": "Explore a vibrant adventure world where you MUST communicate in your target language to solve puzzles, make friends, order food, and save the kingdom — an RPG that makes language learning irresistible.",
    "vertical": "academics",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "LinguaQuest sits in the **word-woods zone** of AdventureHub alongside QuillSpell + GrammarForge — both already shipping distributed-narrative casts (Wave 1).",
      "members": [
        {
          "name": "Bough",
          "role": "Language families (genetic descent — Indo-European / Sino-Tibetan / Afro-Asiatic / Niger-Congo / Austronesian)"
        },
        {
          "name": "Drift",
          "role": "Sound change (phonological evolution — Grimm's Law, vowel shifts, palatalization)"
        },
        {
          "name": "Glyph",
          "role": "Writing systems (alphabetic / abjad / abugida / syllabic / logographic — and how each captures speech)"
        },
        {
          "name": "Bridge",
          "role": "Cognates and loanwords (shared roots across languages; trade-route borrowings)"
        },
        {
          "name": "Cant",
          "role": "Sociolinguistics — dialect, register, code-switching, formal/informal speech"
        }
      ]
    },
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/linguaquest/icon-sm.webp",
    "mascotPath": "/apps/linguaquest/mascot.webp",
    "mentor": "Mira",
    "implementing": false,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/linguaquest/icon.webp",
    "longTagline": "LinguaQuest is a language learning adventure where you explore a colorful world and MUST speak another language to get around! Talk to villagers, order food at shops, solve puzzles, and save the kingdom -- all in your target language. It is like traveling to another country without leaving your room",
    "features": [
      {
        "name": "World Exploration",
        "description": "Walk around a top-down adventure world using the on-screen joystick. Visit shops, talk to villagers, and discover new areas. Every NPC speaks in your target lan"
      },
      {
        "name": "Conversations",
        "description": "Talk to characters by choosing phrases or speaking out loud. The app listens to your pronunciation and gives you feedback. Start with simple greetings and work"
      },
      {
        "name": "Puzzles and Quests",
        "description": "Complete quests that require language skills. A baker needs you to read a recipe in Spanish. A lost traveler needs directions. Each quest teaches new vocabulary"
      },
      {
        "name": "Vocabulary Bank",
        "description": "Every new word you learn goes into your vocabulary bank. The app uses smart review scheduling to bring back words right before you might forget them, so they st"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "logicquest",
    "name": "LogicQuest",
    "tagline": "Master the building blocks of clear thinking — identify logical fallacies, construct truth tables, map arguments, and crack syllogistic puzzles through detective investigations and debate challenges. Ages 10-14.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "Ad Hominem Hannibal",
          "role": "Attacking the arguer, not the argument"
        },
        {
          "name": "Strawman Stella",
          "role": "Misrepresenting the opponent's argument"
        },
        {
          "name": "Slippery-Slope Sam",
          "role": "Chaining dire consequences from a small first step"
        },
        {
          "name": "Appeal-to-Authority Auntie",
          "role": "Citing irrelevant / unqualified authority as proof"
        },
        {
          "name": "Red-Herring Reggie",
          "role": "Deflecting to an irrelevant topic"
        },
        {
          "name": "Circular-Reasoning Cici",
          "role": "Assuming the conclusion in the premise"
        },
        {
          "name": "False-Dichotomy Fia",
          "role": "Presenting only two options when more exist"
        },
        {
          "name": "Bandwagon Bran",
          "role": "Truth-by-popularity"
        },
        {
          "name": "Sunk-Cost Cyril",
          "role": "Refusing to change course because of past investment"
        },
        {
          "name": "Whataboutism Wanda",
          "role": "Deflecting criticism via someone else's wrongdoing"
        },
        {
          "name": "Equivocator Eva",
          "role": "Sliding a word's meaning mid-argument"
        },
        {
          "name": "Tu-Quoque Tessa",
          "role": "\"You too!\" — dismissing criticism by accusing the critic of the same thing"
        },
        {
          "name": "Modus-Ponens Mo",
          "role": "If P then Q; P; ∴ Q"
        },
        {
          "name": "Modus-Tollens Tara",
          "role": "If P then Q; ¬Q; ∴ ¬P"
        },
        {
          "name": "Syllogism Solon",
          "role": "All M are P; all S are M; ∴ all S are P"
        },
        {
          "name": "Disjunctive-Syllogism Dior",
          "role": "P ∨ Q; ¬P; ∴ Q"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/logicquest/icon-sm.webp",
    "iconHeroPath": "/apps/logicquest/icon.webp",
    "mascotPath": "/apps/logicquest/mascot.webp",
    "mentor": "Inspector Logos",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "longTagline": "LogicQuest is a formal logic and critical thinking game where you become a logic detective. Identify logical fallacies in arguments, construct truth tables, map argument structures, solve Venn diagram puzzles, and evaluate debates. Your AI Logic Detective mentor helps you develop the reasoning skill",
    "features": [
      {
        "name": "Fallacy Detective",
        "description": "Receive short argument excerpts from speeches, articles, and social media posts. Identify the logical fallacy type from 25 categories including ad hominem, stra"
      },
      {
        "name": "Logic Lab",
        "description": "Work through propositional logic puzzles -- if-then statements, AND/OR/NOT connectives, and truth tables. The interface presents logic as circuit-like diagrams."
      },
      {
        "name": "Argument Mapper",
        "description": "Visually diagram arguments by placing premises, conclusions, and warrants on a canvas with directed arrows showing logical structure. Apply your skills to real-"
      },
      {
        "name": "Venn Logic",
        "description": "Solve categorical reasoning puzzles through Venn diagrams -- set membership, intersection, union, and complement. \"All A are B, some B are C, therefore...\" Mani"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "lorequest",
    "name": "LoreQuest",
    "tagline": "Kids ages 10-14 write branching stories inside an RPG world",
    "vertical": "academics",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "LoreQuest sits in the **word-woods zone** of AdventureHub alongside QuillSpell + GrammarForge — both already shipping distributed-narrative casts (Wave 1).",
      "members": [
        {
          "name": "Mossy",
          "role": "Forest / nature-spirit archetype (the quiet local-landscape entity who appears across many traditions — wood-elves, dryads, kami of place, etc., abstractly)"
        },
        {
          "name": "Refrain",
          "role": "Repeating-tale / echo motif archetype (motif recurrence — same story-pattern appearing across cultures: flood myth, hero descent to underworld, twin gods, etc.)"
        },
        {
          "name": "Thread",
          "role": "Hero-journey / fate-spinner archetype (the spinning thread of destiny that recurs across heroic narratives — Moirai, Norns, Anansi-as-spider, etc., abstractly)"
        },
        {
          "name": "Ruse",
          "role": "Clever-fool / trickster archetype (the figure who breaks the rules and teaches a lesson by doing so — recurs across MANY traditions, but referenced **abstractly** here; the cast..."
        },
        {
          "name": "Hearth",
          "role": "Origin / family / hearth-storyteller archetype (the figure who carries oral tradition; the grandmother / elder who tells the stories — found in nearly every tradition's framing..."
        }
      ]
    },
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/lorequest/icon-sm.webp",
    "mascotPath": "/apps/lorequest/mascot.webp",
    "mentor": "Plot",
    "implementing": false,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/lorequest/icon.webp",
    "longTagline": "LoreQuest is a creative writing RPG where YOU are the storyteller! Write branching stories inside a fantasy world, and other players can play through your adventures. You will learn how to craft characters, build plots, and write vivid descriptions while the AI gives you helpful feedback. Every writ",
    "features": [
      {
        "name": "Story Writing",
        "description": "Write your own branching stories using the story graph editor. Create scenes, write dialogue, and add choices that lead to different paths. Your story becomes a"
      },
      {
        "name": "Quest Adventures",
        "description": "Play through stories written by others or tackle writing quests from NPC characters. Each quest teaches a different writing skill -- dialogue, descriptions, plo"
      },
      {
        "name": "Writing Evaluation",
        "description": "The AI mentor reads your writing and gives feedback on vocabulary, sentence structure, creativity, and grammar. It asks helpful questions like \"How could you ma"
      },
      {
        "name": "Story Library",
        "description": "Browse and play through stories created by the community. Rate your favorites and get inspired by what other Loremasters have created."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "machineforge",
    "name": "MachineForge",
    "tagline": "Build extreme machines from simple components — levers, pulleys, gears, and wheels — then test them in a physics sandbox, design vehicles, launch catapults, and demolish structures by exploiting mechanical weak points.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/machineforge/icon-sm.webp",
    "mascotPath": "/apps/machineforge/mascot.webp",
    "mentor": "Cog",
    "distributedNarrative": true,
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/machineforge/icon.webp",
    "longTagline": "MachineForge is a mechanical engineering lab where you build awesome machines! Combine levers, pulleys, gears, and wheels to create contraptions, then test them in a physics sandbox. Launch catapults, design vehicles, and demolish structures by finding their weak points. It is engineering made fun a",
    "features": [
      {
        "name": "Machine Builder",
        "description": "Drag and connect components like gears, levers, pulleys, and wheels to build compound machines. Each piece does something different -- gears change speed, lever"
      },
      {
        "name": "Physics Sandbox",
        "description": "Test your machines in a realistic 2D physics simulation. Will your catapult launch far enough? Does your vehicle climb the hill? Watch the physics play out and"
      },
      {
        "name": "Catapult Range",
        "description": "Design and fire catapults to hit targets at different distances. Adjust the arm length, counterweight, and launch angle to get the perfect shot. Physics meets t"
      },
      {
        "name": "Demolition Lab",
        "description": "Study structures and find their weakest points. Then use your machines to take them apart! Learn why some structures are strong and others fall easily."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 2
    }
  },
  {
    "slug": "makerforge",
    "name": "MakerForge",
    "tagline": "Design, prototype, and virtually fabricate objects using 3D printing simulation, Arduino circuit building, and materials science — mastering the full engineering design process through constrained challenges.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/makerforge/icon-sm.webp",
    "mascotPath": "/apps/makerforge/mascot.webp",
    "mentor": "Spool",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/makerforge/icon.webp",
    "longTagline": "MakerForge is a digital maker workshop where you design, build, and test real-world objects! Simulate 3D printing, wire up Arduino circuits, and experiment with different materials. You will learn the complete engineering design process -- from idea to finished product -- through hands-on challenges",
    "features": [
      {
        "name": "3D Print Simulator",
        "description": "Design objects layer by layer and watch them come to life in a virtual 3D printer. Choose your material, set the print settings, and see how your design turns o"
      },
      {
        "name": "Circuit Builder",
        "description": "Drag and drop wires, LEDs, sensors, and other electronic components onto a virtual breadboard. Connect them to make circuits that light up, buzz, or respond to"
      },
      {
        "name": "Materials Testing Lab",
        "description": "Experiment with different materials to learn their properties. Which is strongest? Which conducts electricity? Which is best for your project? Run tests and rec"
      },
      {
        "name": "Design Challenges",
        "description": "Tackle engineering challenges that have real constraints -- a budget limit, a size requirement, or a specific material. Design, build, test, and improve. That i"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 1,
      "play": 1,
      "create": 3
    },
    "distributedNarrative": true,
    "dnCast": {
      "intro": "MakerForge's distributed-narrative cast embodies the 5 stages of the engineering design process — ideate, spec, fabricate, iterate, document — as 5 animal-maker characters Spool introduces across the 16 question kits. Tool-safety + failure-as-feedback framing is foregrounded; Mill carries the Wave 19 maker-cluster tool-safety gate that sibling apps cross-app inherit.",
      "members": [
        { "name": "Sketch", "role": "Ideation + concept development — the wild-thinking squirrel-tween who treats divergent brainstorming as judgment-free play ('many before few; wild before tame; crooked sketches are also sketches')" },
        { "name": "Spec", "role": "Material + constraint commitment — the measured owl-tween who treats spec-commitment as the moment imagination meets physics ('constraints are the shape of the possible')" },
        { "name": "Mill", "role": "Fabrication + build — the careful beaver-tween who carries the cluster's tool-safety anchor ('tool first checked, adult first told — then we build')" },
        { "name": "Try", "role": "Prototyping + iteration — the patient salamander-tween who treats first failure as expected design-process behavior ('first try fails, second try tells, third try shapes the design')" },
        { "name": "Log", "role": "Documentation + reflection — the wise turtle-elder who treats the notebook as the actual deliverable ('make it, mark it, share it — the notebook is the project')" }
      ]
    }
  },
  {
    "slug": "mangaforge",
    "name": "MangaForge",
    "tagline": "Create your own manga and anime-style comics -- learn art fundamentals, visual storytelling, and Japanese cultural literacy. The #1 creative interest for ages 9-14, manga/anime drawing dominates Outschool with 2,124+ reviews at 4.9 stars for a single class.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/mangaforge/icon-sm.webp",
    "iconHeroPath": "/apps/mangaforge/icon.webp",
    "mascotPath": "/apps/mangaforge/mascot.webp",
    "mentor": "Sensei Sora",
    "implementing": true,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "MangaForge sits in the **creative-studio visual-arts cluster** alongside PixelForge / SpectrumCanvas / IllusionForge — all 4 shipping distributed-narrative casts in Wave 8.",
      "members": [
        {
          "name": "Panel",
          "role": "The panel — the rectangular frame that contains a single moment of story (the atomic unit of sequential art)"
        },
        {
          "name": "Bubble",
          "role": "The speech bubble — the shape-encoded container for dialogue + thought + sound (its outline encodes voice register: thought-cloud / shout-burst / whisper-dotted-line / radio-jag..."
        },
        {
          "name": "Sweep",
          "role": "Speed lines / motion lines — the directional line-bursts that convey speed, impact, and energy direction"
        },
        {
          "name": "Tone",
          "role": "Screentones — the halftone dot/line patterns laid over an area to convey shadow, mood, and emotional register (the manga-specific shading vocabulary)"
        },
        {
          "name": "Splash",
          "role": "The splash page — the full-page or near-full-page impact image that marks a story climax (the moment the page breaks its grid to give one image all the space)"
        }
      ]
    },
    "hasUserGuide": true,
    "modes": {
      "learn": 1,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "mapforge",
    "name": "MapForge",
    "tagline": "Build fantasy worlds from tectonic plates up — master geography, ecology, economics, and storytelling through world-building. Players create planets by forging plate tectonics (mountains/oceans), designing climate patterns (latitude/altitude/currents), painting biomes, founding civilizations (based on resources), establishing trade routes (geography and distance), and simulating conflicts (scarcit",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/mapforge/icon-sm.webp",
    "iconHeroPath": "/apps/mapforge/icon.webp",
    "mascotPath": "/apps/mapforge/mascot.webp",
    "mentor": "Atlas",
    "implementing": true,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "MapForge's distributed-narrative cast embodies the 5 primitives of cartographic literacy — orientation, scale, legend, coordinates, and non-Western mapping traditions — as 5 animal-cartographer characters Atlas introduces across the 16 question kits. Map-as-power gate is foregrounded; Bearing's 'north is one direction, not the direction' is load-bearing, and Wayfind structurally elevates Polynesian / Aboriginal / Indigenous mapping traditions as PEER cartographies, not curiosities.",
      "members": [
        {
          "name": "Bearing",
          "role": "Orientation — the tortoise-elder who treats north-up as a convention, not a truth ('north is one direction, not the direction'); teaches that orientation is a choice mapmakers make"
        },
        {
          "name": "Inset",
          "role": "Scale — the field-mouse-tween with a folded map-within-a-map who teaches scale-choice as a political act ('bigger map, less detail; smaller map, more story — pick on purpose')"
        },
        {
          "name": "Key",
          "role": "Legend literacy — the owl-tween in a dot-shawl who treats the legend as the mapmaker's confession ('what's NOT on the map — that's also a map')"
        },
        {
          "name": "Plot",
          "role": "Coordinates — the pangolin-tween with graticule-scale armor who teaches that coordinate systems are human inventions, plural across cultures ('every place has many addresses; many cultures have many ways of saying here')"
        },
        {
          "name": "Wayfind",
          "role": "Non-Western mapping traditions — the heron-elder in a woven-grass cloak with stick-chart props who structurally elevates Polynesian wayfinding, Aboriginal songlines, and Indigenous TEK as peer cartographies ('some maps you sing, some you walk, some you only learn from elders')"
        }
      ]
    },
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "marketquest",
    "name": "MarketQuest",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "MarketQuest's 5-character cast embodies the foundational market mechanics — supply (Stock), demand (Crave), price equilibrium (Even), market roles (Hand), and market events (Tide). Stake (mentor) frames each primitive; cast embodies them at small-trader / community-market scale (NEVER Wall-Street register). Wealth-shame gate enforced: cast NEVER frames poverty as moral failing.",
      "members": [
      { "name": "Stock", "role": "Supply — producer decisions, scarcity, what gets brought to market" },
      { "name": "Crave", "role": "Demand — consumer preferences, needs vs wants, price-sensitivity" },
      { "name": "Even", "role": "Price equilibrium — where supply meets demand, the conversation point" },
      { "name": "Hand", "role": "Market roles — producer + consumer + distributor, visible labor" },
      { "name": "Tide", "role": "Market events — shocks + policy + trade flows read as patterns" }
      ]
    },
    "tagline": "Virtual economy where students explore supply and demand, set prices, trade goods, and run market experiments -- building economic literacy through hands-on simulation and strategic decision-making.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/marketquest/icon-sm.webp",
    "mascotPath": "/apps/marketquest/mascot.webp",
    "mentor": "Stake",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/marketquest/icon.webp",
    "longTagline": "MarketQuest is a virtual economy where you learn economics by doing it. Set prices, trade goods, run market experiments, and discover why supply and demand drive the world. You will learn what happens when prices change, how businesses compete, why shortages and surpluses occur, and how economic eve",
    "features": [
      {
        "name": "Price Setting",
        "description": "Choose a good and set your price using the slider. Watch how customers respond -- set the price too high and nobody buys; set it too low and you lose money on e"
      },
      {
        "name": "Trading",
        "description": "Buy goods at wholesale prices and sell them at retail. Manage your inventory, watch your cash balance, and calculate profit per unit. Learn the difference betwe"
      },
      {
        "name": "Market Events",
        "description": "Random and scripted events shake up the market. A storm destroys crops and food prices spike. A new technology makes production cheaper. A government policy cha"
      },
      {
        "name": "Supply & Demand Explorer",
        "description": "Experiment with supply and demand curves directly. Drag the curves to see how equilibrium price and quantity change. Discover why prices rise when demand increa"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "mathlore",
    "name": "MathLore",
    "tagline": "Ethnomathematics adventure traveling through world civilizations — Babylonian base-60, Mayan vigesimal, Islamic geometric art, Indian zero/algebra, African fractal geometry, Inca quipu, Japanese origami geometry. Culturally responsive math education.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/mathlore/icon-sm.webp",
    "mascotPath": "/apps/mathlore/mascot.webp",
    "mentor": "Lore",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "MathLore's 5-character meta-cast embodies the math-as-story primitives that recur across every civilization — counting-as-first-story (Heap), pattern-as-discovery (Spire), proof-as-shared-knowledge (Vouch), math-as-cultural-context (Home), cultural-transmission (Carry). Lore (top-tier listener-narrator; DUAL-RESOLVE rename from code-side 'Narrator' + site placeholder 'Glyph' which collided HARD with LinguaQuest Wave 5 cast Glyph) introduces the meta-cast across eras. UNIQUE three-tier voice architecture preserved: Lore = meta-framing (FoundationModels) / Historical mathematician NPCs (Hypatia / Brahmagupta / al-Khwārizmī / Ramanujan / etc.) = per-era voice (@Generable preserved) / Meta-cast = static-catchphrase pattern-bearers. CRITICAL cultural-representation gate enforced: cast names abstract; no real-mathematician mascotization; no specific-culture mascotization; abstract-geometric Home patches; collage-of-evidence Heap vest. External \\$500-\\$1000 multi-cultural-mathematics + ethnomathematics-pedagogy reviewer STRONGLY RECOMMENDED for kits 7+9+10+11+12.",
      "members": [
        { "name": "Heap", "role": "Counting-as-first-story — every people figured out their own way to count" },
        { "name": "Spire", "role": "Pattern-as-discovery — patterns are everywhere when you slow down enough to see them" },
        { "name": "Vouch", "role": "Proof-as-shared-knowledge — show me why; if your why holds up, I'll build on it" },
        { "name": "Home", "role": "Math-as-cultural-context — this idea was born somewhere, for someone, with reasons" },
        { "name": "Carry", "role": "Cultural-transmission — the idea traveled; every place it visited, it grew" }
      ]
    },
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/mathlore/icon.webp",
    "longTagline": "MathLore is an RPG adventure through the history of mathematics! Travel through time to meet famous mathematicians like Euclid, Hypatia, and Ramanujan. Solve the same problems they worked on -- from Babylonian base-60 counting to ancient Chinese puzzles. Every era brings new math and new stories.",
    "features": [
      {
        "name": "Era Exploration",
        "description": "Walk through beautifully designed historical scenes. Visit ancient libraries, medieval workshops, and Renaissance studios. Each era looks and feels different fr"
      },
      {
        "name": "Mathematician Encounters",
        "description": "Meet famous mathematicians as NPC characters who talk to you about their discoveries. They will challenge you with adapted versions of their greatest problems."
      },
      {
        "name": "Problem Solving",
        "description": "Solve math problems that are connected to real history. The problems start simple and get harder as you advance. When you are stuck, the AI mentor asks helpful"
      },
      {
        "name": "Discovery Journal",
        "description": "Every math concept you learn gets recorded in your personal journal. See how ideas from one era connect to another -- the math you learn from ancient Egypt show"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "measurequest",
    "name": "MeasureQuest",
    "tagline": "Hands-on measurement adventures: unit conversions, area and perimeter calculations, data representation, and real-world measurement applications -- building mathematical fluency through interactive challenges.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "MeasureQuest sits in the **math-mountains zone** alongside GeometryForge / ProofQuest / FunctionForge / RatioRealm / DiscreteQuest / ChanceForge — all 6 ship distributed-narrative casts.",
      "members": [
        {
          "name": "Rod",
          "role": "Linear measurement — length and perimeter (1D extent)"
        },
        {
          "name": "Tile",
          "role": "Area — 2D coverage (square units)"
        },
        {
          "name": "Cup",
          "role": "Volume and capacity — 3D space (cubic units, liquid measures)"
        },
        {
          "name": "Tick",
          "role": "Time — elapsed duration, intervals, and the special-case unit-system (60 / 60 / 24 / 7 / 12)"
        },
        {
          "name": "Pace",
          "role": "Unit conversion — translating between metric and customary systems"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/measurequest/icon-sm.webp",
    "mascotPath": "/apps/measurequest/mascot.webp",
    "mentor": "Yard",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/measurequest/icon.webp",
    "longTagline": "MeasureQuest is a hands-on measurement adventure where you use virtual rulers, scales, and measuring cups to solve real-world measurement challenges. You will master unit conversions between metric and customary systems, calculate area and perimeter of shapes, collect data and build graphs, and deve",
    "features": [
      {
        "name": "Ruler & Measurement Tools",
        "description": "Use virtual rulers, tape measures, scales, and measuring cups to measure objects in interactive scenes. Drag the ruler to an object, read the measurement, and r"
      },
      {
        "name": "Unit Conversions",
        "description": "Convert measurements between units with guided step-by-step explanations. How many centimeters in a meter? How many cups in a gallon? The conversion calculator"
      },
      {
        "name": "Area & Perimeter",
        "description": "Calculate the area and perimeter of shapes using interactive visualizations. See how area fills the inside of a shape with unit squares. Watch perimeter trace a"
      },
      {
        "name": "Data Collection & Graphing",
        "description": "Collect measurement data and represent it visually. Build bar graphs, line plots, and pictographs from your data sets. Learn to read and interpret graphs -- wha"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "medicquest",
    "name": "MedicQuest",
    "tagline": "Run a medical clinic, diagnose patients, perform first aid, and investigate disease outbreaks — learn anatomy, clinical reasoning, triage, and public health through case-based medical detective gameplay. Includes health influences investigation, patient communication skills, and wellness goal-setting for complete health education coverage.",
    "vertical": "stem",
    "heroColor": "#81C784",
    "iconPath": "/apps/medicquest/icon-sm.webp",
    "mascotPath": "/apps/medicquest/mascot.webp",
    "mentor": "Cura",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "MedicQuest's 5-character cast embodies the foundational medical-literacy primitives per AAP 2024 + NHES 1-8 + WHO Health Literacy Framework — symptom-noticing-without-alarm (Notice), clinical-history-taking + questioning (Ask), body-autonomy + consent (Boundary), help-seeking from a trusted adult (Tell), and wellness-as-multi-factor-system (Whole). Cura (mentor; DUAL-RESOLVE rename from code-side 'Mentor' generic placeholder + site 'Doc' on Wave 25 brief pre-reserve-AVOID list — too on-the-nose for medical domain — → Cura, Latin: care; classical-academic register parallel to Veritas; non-religious) frames each primitive; cast embodies them at school-nurse / family-doctor-visit / community-health-fair scale (NEVER ER-doctor / specialist-surgeon / medical-celebrity framing). Medical-trauma gate enforced (CRITICAL — STRONGEST in Wave 25 + among-strongest portfolio-wide): cast NEVER assumes health-normalcy (1 in 5 adolescents has chronic illness per AAP 2024); cast NEVER positions any body as 'normal' vs 'abnormal'; cast NEVER references weight / calories / body-composition / 'fitness level' anywhere; static-response gating for self-harm + ED + abuse signals routes to crisis-resources (988 + NEDA 1-800-931-2237 + Childhelp 1-800-422-4453 + Crisis Text Line HOME-741741 + RAINN 1-800-656-4673). Body-image gate inherits FitQuest Wave 24 + DanceQuest Wave 14 verbatim. Illness-anxiety gate: Notice's design counter-codes hypochondria. Pharma-skepticism balance gate. Body-autonomy + abuse-recognition gate: kit 7 carries mandatory-reporter-relevant content per RAINN + Childhelp guidance — FULL trauma-informed protocol. External sensitivity reviewer envelope $2,000-$3,800 cumulative (NEDA + RAINN + Childhelp + adolescent-medicine + comparative-religion-for-health-belief) — HIGHEST PRIORITY in Wave 25.",
      "members": [
        { "name": "Notice", "role": "Symptom-noticing without alarm — most symptoms are minor + temporary; notice without catastrophizing" },
        { "name": "Ask", "role": "Clinical-history-taking + questioning — your questions are MEDICAL EVIDENCE; never feel silly asking" },
        { "name": "Boundary", "role": "Body-autonomy + consent — your body is YOURS; ask-first is universal; pangolin curl-pose models self-protection-as-positive" },
        { "name": "Tell", "role": "Help-seeking from a trusted adult — telling is the most powerful medical move (shared design language with SafetyForge Wave 24 Tell — cross-app continuity)" },
        { "name": "Whole", "role": "Wellness-as-multi-factor-system — health is sleep + food + movement + relationships + meaning + safety; never single-factor; explicit health-equity foregrounding" }
      ]
    },
    "implementing": false,
    "standards": [
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/medicquest/icon.webp",
    "longTagline": "MedicQuest lets you run your own medical clinic! Diagnose patients by checking their symptoms, learn first aid, explore the human body system by system, and investigate disease outbreaks on a map. You will think like a doctor while learning real health science. (Remember: this is a learning game, no",
    "features": [
      {
        "name": "Patient Diagnosis",
        "description": "Patients arrive with symptoms. Read their chart, ask questions, and run tests to figure out what is going on. Narrow down the possibilities and make your diagno"
      },
      {
        "name": "Anatomy Explorer",
        "description": "Dive into the human body and explore how each system works. Navigate through the circulatory system, see how lungs breathe, and learn what bones and muscles do."
      },
      {
        "name": "First Aid Training",
        "description": "Learn real first aid skills through interactive scenarios. What do you do if someone is choking? How do you treat a burn? Practice making the right decisions in"
      },
      {
        "name": "Outbreak Investigation",
        "description": "A disease is spreading on the map! Track cases, find the source, and figure out how to stop it. Use data and detective skills to protect the community."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 0
    }
  },
  {
    "slug": "mindforge",
    "neurodivergentSupport": true,
    "neurodivergentDesignTraits": ["Trauma-informed", "Co-regulation", "Identity-affirming", "Strength-based", "Communication-scaffolding"],
    "neurodivergentEvidence": [
      { "aspect": "CASEL 5-competency cast capacities-to-build framing", "basis": "Wave 32b DN retrofit; SAMHSA TIP 57 + NCTSN gold-standard reference" },
      { "aspect": "Cast NEVER says 'calm down'", "basis": "Explicit anti-pattern enforcement" },
      { "aspect": "Crisis-resource static-response surfacing", "basis": "988 + Crisis Text Line + Childhelp routing for acute signals" },
      { "aspect": "CASEL-affiliated + pediatric-mental-health-clinician sensitivity reviewer REQUIRED", "basis": "$1,000-$1,500 envelope (not optional)" }
    ],
    "name": "MindForge",
    "tagline": "Adventure RPG where players navigate social scenarios, manage stress through mini-games, and build emotional intelligence by helping NPCs resolve conflicts. Combines CASEL's 5 core competencies with SHAPE America's National Health Education Standards in a quest-based format. AI-driven NPCs respond to player choices with realistic emotional reactions.",
    "vertical": "dir-fedc",
    "heroColor": "#81C784",
    "iconPath": "/apps/mindforge/icon-sm.webp",
    "mascotPath": "/apps/mindforge/mascot.webp",
    "mentor": "Sage",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "MindForge's 5-character CASEL-competency cast maps 1:1 to CASEL's 5 core competencies — self-awareness / self-management / social awareness / relationship skills / responsible decision-making. Cast: Inside / Settle / Open / Touch / Choose. STRONGEST trauma-informed burden in the portfolio (MindForge is the portfolio gold-standard for trauma-informed digital design per SAMHSA TIP 57 + NCTSN explicit references). Cast embodies CAPACITIES TO BUILD, never DEFICITS TO FIX. NO mascotizing of mental-health conditions. Cast NEVER says 'calm down'. Per `mindforge-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22. Sage preserved as gold-standard mentor. Lens→Open + Bridge→Touch collision-renames applied. Labsmith generates ~$1.35 cast assets + $1000-1500 CASEL-affiliated + pediatric-mental-health-clinician sensitivity reviewer REQUIRED (not optional). Cross-app cameos: Settle ↔ FocusForge; Inside ↔ TempCheck+CoRegRealm Wave 32b sibling (interoception cluster load-bearing); Open ↔ InclusionForge; Touch ↔ RuptureRepair+CoRegRealm (relational-repair cluster load-bearing); Choose ↔ EthosForge.",
      "members": [
        { "name": "Inside", "role": "Self-awareness — emotion + thought + body awareness; 'Notice. Don't fix.'" },
        { "name": "Settle", "role": "Self-management — regulation + impulse + stress; 'One breath. Then I choose.'" },
        { "name": "Open", "role": "Social awareness — perspective + empathy + context; 'Their world. Then ours.'" },
        { "name": "Touch", "role": "Relationship skills — communication + boundaries + repair; 'Say it small. Listen big.'" },
        { "name": "Choose", "role": "Responsible decision-making — values + consequences + action; 'What matters? Then I act.'" }
      ]
    },
    
    "implementing": true,
    "standards": [
      "DIR/FEDC Capacities 1-2",
      "CASEL",
      "NGSS Health",
      "SAMHSA TIP 57"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/mindforge/icon.webp",
    "longTagline": "MindForge is an adventure RPG that helps you build emotional superpowers! Navigate social situations at school and in your neighborhood, help NPC characters resolve conflicts, manage stress through fun mini-games, and grow your emotional intelligence. It is a safe place to practice handling tricky f",
    "features": [
      {
        "name": "Social Quests",
        "description": "Walk through your school and neighborhood and encounter real-life social situations. A friend is upset, a group is arguing, or someone feels left out. Choose ho"
      },
      {
        "name": "Coping Mini-Games",
        "description": "When your character feels stressed, use coping tools to calm down. Try deep breathing exercises, guided relaxation, or problem-solving activities. These are rea"
      },
      {
        "name": "Emotion Dashboard",
        "description": "Track how your character feels throughout each quest. Learn to name emotions with specific words -- not just \"happy\" or \"sad\" but \"frustrated,\" \"proud,\" \"anxiou"
      },
      {
        "name": "Relationship Map",
        "description": "See how your choices affect your relationships with NPC characters. Building trust takes time and good decisions. Your relationship map shows who trusts you and"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    }
  },
  {
    "slug": "mintforge",
    "name": "MintForge",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "MintForge's 5-character cast embodies the foundational money-systems + financial-math primitives — currency (Coin), markup (Tag), compound interest (Grow), budget allocation (Plan), and risk + variability (Tilt). Penny (mentor) frames each primitive; cast embodies them at kids-allowance / school-store / savings-jar scale (NEVER hedge-fund / crypto-bro register). Wealth-shame gate (inherited from MarketQuest) + currency-system gate (tween-appropriate scope; no monetary-policy / inflation political-economy framing) both enforced.",
      "members": [
      { "name": "Coin", "role": "Currency + exchange — what money is, what it does, what it can't measure" },
      { "name": "Tag", "role": "Percentage + markup — the transparent math of how prices are built" },
      { "name": "Grow", "role": "Compound interest — patient math of money over time" },
      { "name": "Plan", "role": "Budget allocation + opportunity cost — the math of choosing with limited resources" },
      { "name": "Tilt", "role": "Risk + variability — the math of uncertain outcomes, distributions over destinies" }
      ]
    },
    "tagline": "Financial math game where financial scenarios ARE the math problems — compound interest, percentage markup, budgeting, loan amortization, stock market simulation. Math-first approach to financial literacy.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/mintforge/icon-sm.webp",
    "mascotPath": "/apps/mintforge/mascot.webp",
    "mentor": "Penny",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/mintforge/icon.webp",
    "longTagline": "MintForge teaches you math through money! Run a virtual savings account to learn compound interest, set prices in a school store to learn percentages, and manage a budget to learn about expenses and income. The financial scenarios ARE the math problems, so every calculation has a real purpose.",
    "features": [
      {
        "name": "Savings & Interest",
        "description": "Open a virtual savings account and watch compound interest work its magic. How much will you have in a year? In five years? Adjust the interest rate and deposit"
      },
      {
        "name": "School Store",
        "description": "Run your own virtual store! Set prices using percentage markup, calculate discounts for sales, and figure out if you are making a profit. Real math for real bus"
      },
      {
        "name": "Budget Manager",
        "description": "Get a monthly budget and decide how to spend it. Track income and expenses, plan for big purchases, and learn what happens when you overspend. Graphs show where"
      },
      {
        "name": "Stock Market",
        "description": "Buy and sell virtual stocks in a simple stock market simulation. Watch prices change, learn about risk, and see how percentages work in the real financial world"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "mythforge",
    "name": "MythForge",
    "tagline": "Explore ancient civilizations through mythology-driven adventure quests — meet gods and heroes, battle mythological creatures, collect historical artifacts, and build ancient cities while learning Greek, Roman, Norse, Egyptian, and Mesoamerican cultures.",
    "vertical": "special-interest",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "to violent / colonialist myths.",
      "members": [
        {
          "name": "Trickster",
          "role": "The boundary-crosser who teaches through inversion. Recurs across nearly all traditions (Anansi, Coyote, Loki, Hermes, Maui, Ijapa)."
        },
        {
          "name": "Hero-King",
          "role": "The reluctant ruler called to a journey (Campbell's central figure: Gilgamesh, Odysseus, Arjuna, Beowulf, Cuchulain)."
        },
        {
          "name": "Devouring-Mother",
          "role": "The dark-creator / death-and-renewal force (post-Jungian; surfaces as Kali-aspect / Hel / Coatlicue / Hecate). **High trauma load.**"
        },
        {
          "name": "Wise-Elder",
          "role": "The mentor-figure who knows the path but cannot walk it for the hero (Athena, Odin-as-wanderer, Krishna-as-advisor)."
        },
        {
          "name": "Threshold-Guardian",
          "role": "The figure that tests whether the hero is ready to cross (Sphinx, Cerberus, the dragon at the gate, the riddling stranger)."
        },
        {
          "name": "Shadow",
          "role": "The repressed-self / dark-mirror (Jungian core archetype; surfaces as the hero's nemesis-who-is-also-them: Loki/Baldr, Set/Osiris, Cain/Abel framings)."
        },
        {
          "name": "Anima/Animus (paired)",
          "role": "The complementary-other-self (Jungian); represented as a pair-character that always appears together, embodying the inner-other-gendered-self pattern that surfaces across many t..."
        },
        {
          "name": "Wanderer",
          "role": "The journeyer-without-fixed-home who carries stories between cultures (Odysseus-after-Ithaca, the wandering Jew, the diaspora-keeper figure)."
        },
        {
          "name": "Child-Divinity",
          "role": "The newborn-with-power archetype (infant Krishna, baby Hermes, child Horus, divine-child motif)."
        },
        {
          "name": "Sacrificial-Lamb",
          "role": "The figure whose loss enables renewal (cross-traditional: dying-and-rising deities, scapegoat figures, voluntary-sacrifice motif)."
        },
        {
          "name": "Warrior",
          "role": "The conflict-pattern-bearer (Ares, Tyr, Sekhmet-aspect, the warrior-figure across many traditions)."
        },
        {
          "name": "Lover",
          "role": "The relational-bond-bearer (Aphrodite-aspect, the romantic-mythic pair, the bond-that-shapes-the-world archetype)."
        },
        {
          "name": "Sovereign",
          "role": "The cosmic-order-keeper archetype (Zeus-aspect, Odin-as-ruler, Ra-as-cosmic-king, Quetzalcoatl-aspect)."
        },
        {
          "name": "Magician",
          "role": "The transformation-bearer (Hermes-Trismegistus, Tezcatlipoca-aspect, Merlin, the alchemist-figure, the shape-shifter pattern)."
        }
      ]
    },
    "heroColor": "#FFA726",
    "iconPath": "/apps/mythforge/icon-sm.webp",
    "mascotPath": "/apps/mythforge/mascot.webp",
    "mentor": "Lyra",
    "implementing": true,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/mythforge/icon.webp",
    "longTagline": "MythForge takes you on an adventure through ancient mythology! Explore the worlds of Greek, Roman, Norse, Egyptian, and Mesoamerican cultures. Meet gods and heroes, battle mythological creatures by answering questions, collect historical artifacts, and build ancient cities. Learn how these civilizat",
    "features": [
      {
        "name": "Mythology Exploration",
        "description": "Walk through beautifully designed worlds inspired by ancient civilizations. Visit Mount Olympus, the halls of Valhalla, Egyptian temples, and Aztec pyramids. Ea"
      },
      {
        "name": "Creature Battles",
        "description": "Encounter mythological creatures and defeat them by answering questions about their mythology. What are the twelve labors of Hercules? Who is the Norse god of t"
      },
      {
        "name": "Artifact Collection",
        "description": "Discover historical artifacts hidden throughout each world. Each artifact comes with a story about the real civilization it came from. Fill your museum with tre"
      },
      {
        "name": "City Builder",
        "description": "Use the resources you earn to build historically accurate ancient cities. Place temples, markets, homes, and monuments. Learn how real ancient cities were desig"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    }
  },
  {
    "slug": "neuralquest",
    "name": "NeuralQuest",
    "tagline": "Players train image classifiers, build recommendation systems, discover how bias creeps into data, and explore AI ethics through hands-on experiments. Learn how AI actually works -- not by coding, but by doing. The first gamified AI literacy app for kids on any platform.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/neuralquest/icon-sm.webp",
    "mascotPath": "/apps/neuralquest/mascot.webp",
    "mentor": "Sift",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/neuralquest/icon.webp",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "NeuralQuest's distributed-narrative cast embodies the 5 decision points in the AI/ML pipeline — labeling, training, bias-check, generalization, ethics — as 5 lab-partner characters Sift introduces across the 16 question kits. The cast foregrounds AI bias-vigilance (Skew appears in every kit from 5 onward) and neurodivergent-affirming human cognition (no 'your brain is like a model' framing).",
      "members": [
        {
          "name": "Tag",
          "role": "Labeling — the cheerful labeler who treats every label as a human choice and meaning-making act ('every label is a choice — and you're the one making it')"
        },
        {
          "name": "Drill",
          "role": "Training loops — the focused practitioner who treats iteration as rhythm, not race; explicit teacher of when-to-stop ('once, again, again — different this time? Then again')"
        },
        {
          "name": "Skew",
          "role": "Bias + data fairness — the bias-vigilance anchor who always asks 'whose data is in here, whose is missing, who decided'; appears in every kit from kit 5 onward"
        },
        {
          "name": "Veer",
          "role": "Generalization vs overfit — the wandering scout who treats generalization as travel ('trained here, tested here — now go somewhere new, does it still know the way?')"
        },
        {
          "name": "Weigh",
          "role": "Ethics + decisions — the reflective elder who carries the ethics gate at the AI-in-society capstone ('can we build it? Yes. Should we? That's a different question')"
        }
      ]
    },
    "longTagline": "NeuralQuest teaches you how artificial intelligence actually works -- by doing it yourself! Train image classifiers, build recommendation systems, discover bias in data, and explore AI ethics. You do not need to know how to code. You will learn by running real experiments in a virtual AI research la",
    "features": [
      {
        "name": "Training Lab",
        "description": "Collect and label training data, then feed it to a simple AI model. Watch the model learn! Will it get better with more data? What happens if your training data"
      },
      {
        "name": "Classification Lab",
        "description": "Train an image classifier to sort pictures into categories. Take photos or use the built-in datasets. Test your model on new images it has never seen. Can it te"
      },
      {
        "name": "Recommendation Lab",
        "description": "Build a simple recommendation system that suggests things based on patterns. See how apps like Netflix or Spotify figure out what you might like. Then test if t"
      },
      {
        "name": "Ethics Panel",
        "description": "Discuss real AI ethics questions. Should AI make decisions about people? What if an AI is wrong? What about privacy? Think through these big questions with your"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "newsforge",
    "name": "NewsForge",
    "tagline": "Run a digital newsroom — investigate stories through primary sources, evaluate credibility under deadline pressure, design data visualizations, produce multimedia reports, and compete to be first with accurate news in a world full of misinformation.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/newsforge/icon-sm.webp",
    "mascotPath": "/apps/newsforge/mascot.webp",
    "mentor": "Scoop",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "NewsForge's 5-character cast embodies the foundational news-literacy practices per News Literacy Project Five Filters + Stanford SHEG Civic Online Reasoning + SIFT (Stop / Investigate / Find / Trace) frameworks — source-evaluation (Source), bias-and-perspective detection (Tilt), headline-and-framing craft (Frame), verification + lateral-reading discipline (Verify), and community-information-needs framing (Serve). Scoop (mentor preserved) frames each primitive; cast embodies them at school-newspaper / neighborhood-newsletter / community-info scale (NEVER national-press-corps framing). Doomscroll-anxiety gate enforced (CRITICAL — co-strongest Wave 25 burden): cast NEVER amplifies catastrophizing; Serve's structural presence from kit 5 onward names 'what can my reader DO with this?' as load-bearing question. Misinformation harm gate: ALL examples ABSTRACT or FICTIONAL (per Lewandowsky 2024). Political-neutrality gate: NO real-politician archetypes; NO party color-coding; Tilt's bias work is STRUCTURAL not PARTISAN. External sensitivity reviewer with journalism-pedagogy + adolescent-news-mental-health expertise REQUIRED before Wave 25.2 art generation.",
      "members": [
        { "name": "Source", "role": "Source-quality evaluation — who would KNOW this best? who has a stake? source-card-comparison the routine" },
        { "name": "Tilt", "role": "Bias-and-perspective detection — every story has a frame; name the frame, then read; structural NOT partisan" },
        { "name": "Frame", "role": "Headline-and-framing craft — a headline is a SUMMARY not a HOOK; counter-clickbait" },
        { "name": "Verify", "role": "Verification + lateral-reading discipline — SIFT (Stop, Investigate, Find, Trace); open four tabs, never one" },
        { "name": "Serve", "role": "Community-information-needs framing — what does my reader NEED to know to DO something? agency-foregrounding; counter-doomscroll" }
      ]
    },
    "implementing": true,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "iconHeroPath": "/apps/newsforge/icon.webp",
    "longTagline": "NewsForge puts you in charge of a digital newsroom! Investigate sources, spot fake news, check facts under deadline pressure, build data visualizations, and publish your own news articles. The Editor-in-Chief -- your AI mentor -- gives you feedback on accuracy, balance, and headline quality. Learn t",
    "features": [
      {
        "name": "Investigating Sources",
        "description": "When a breaking story arrives, you get a set of source cards. Each source makes a claim about the story. Your job is to figure out which sources are trustworthy"
      },
      {
        "name": "Fact-Checking",
        "description": "Some claims can be verified against evidence. Tap the fact-check button to compare a source's claim against available data. Mark claims as verified, misleading,"
      },
      {
        "name": "Writing Articles",
        "description": "Once you have investigated your sources, write your article in the editor. Create an accurate headline (no clickbait!), write a balanced lead paragraph, and bui"
      },
      {
        "name": "Data Journalism",
        "description": "Build charts and graphs to tell your story with numbers. Choose from bar charts, line graphs, scatter plots, pie charts, and maps. Learn to spot misleading grap"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "nexusforge",
    "name": "NexusForge",
    "tagline": "Build and manage interconnected systems where actions cascade across ecology, economy, health, and policy. First gamified systems thinking app for ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/nexusforge/icon-sm.webp",
    "mascotPath": "/apps/nexusforge/mascot.webp",
    "mentor": "Mesh",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "NexusForge's 5-character cast embodies the foundational systems-thinking primitives — connection (Tie, 'what EXACTLY does this one do to that one?'), reinforcing feedback (Spiral, runaway and virtuous cycles asking 'what stops it?'), balancing feedback (Damp, self-correcting loops protecting what the system is trying to keep stable), emergence (Emerge, 'the pattern isn't in the rules — it comes FROM the rules'), and leverage points (Steer, 'where could a small change do a lot? probably not where you're looking' per Donella Meadows). Mesh (mentor; renamed from placeholder 'Mentor' and from site 'Node' which collided with NexusForge's own curriculum primitive + Wave 23 brief pre-reserved-AVOID) frames each primitive; cast embodies them at urban-planner / ecosystem-restorer / community-modeler scale (NEVER conspiracy-theorist / 'everything is connected' / overgeneralizing-systems-guru gatekeeping). 'Everything connects' overgeneralization gate enforced: cast NEVER accepts vague correlation-as-causation; Tie's 'what EXACTLY does this one do to that one?' is structurally load-bearing across every cast appearance; static-response gating for spurious-connection / conspiracy-adjacent prompts; specific-mechanism-required-before-link-drawing throughout.",
      "members": [
        { "name": "Tie", "role": "Connection / link — name the MECHANISM before drawing the line; refuse vague-correlation framings" },
        { "name": "Spiral", "role": "Reinforcing feedback — spirals grow good OR bad until something stops them; always ask 'what stops it?'" },
        { "name": "Damp", "role": "Balancing feedback — this loop is PROTECTING what the system tries to keep stable; what is it protecting?" },
        { "name": "Emerge", "role": "Emergence — the pattern isn't in any single rule; it appears FROM the rules running together" },
        { "name": "Steer", "role": "Leverage points — the biggest leverage is usually the LEAST obvious place to push (Meadows)" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/nexusforge/icon.webp",
    "longTagline": "NexusForge is a systems thinking simulator where everything is connected! Build ecosystems, manage cities, or run economies and watch how one change ripples through the whole system. Add more wolves to a forest and see what happens to the deer, the grass, and the rivers. It is like playing with a gi",
    "features": [
      {
        "name": "System Builder",
        "description": "Create your own system by placing nodes (like \"wolves,\" \"grass,\" or \"temperature\") and drawing connections between them. Each connection shows how one thing aff"
      },
      {
        "name": "Simulation Mode",
        "description": "Press play and watch your system come alive! Nodes grow and shrink based on their connections. Adjust a variable and see how changes cascade through the whole s"
      },
      {
        "name": "Scenario Challenges",
        "description": "Tackle real-world scenarios. What happens to a city when the population doubles? How does pollution affect a lake ecosystem? Solve these challenges by understan"
      },
      {
        "name": "Causal Loop Diagrams",
        "description": "Draw feedback loops to show how systems reinforce or balance themselves. A reinforcing loop makes things grow faster and faster. A balancing loop keeps things s"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 2
    }
  },
  {
    "slug": "numberverse",
    "name": "Numberverse",
    "tagline": "Kids ages 10-14 construct and explore a living world using math",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "NumberVerse sits in the **math-mountains zone** alongside GeometryForge / ProofQuest / FunctionForge / RatioRealm / DiscreteQuest / ChanceForge — all 6 ship distributed-narrative casts.",
      "members": [
        {
          "name": "Tenfold",
          "role": "Place value — powers of 10, positional notation"
        },
        {
          "name": "Zeph",
          "role": "The zero placeholder — its load-bearing role in positional notation"
        },
        {
          "name": "Mirror",
          "role": "Negative numbers — reflection across zero on the number line"
        },
        {
          "name": "Skip",
          "role": "Skip-counting and multiples — repeated addition as forward stepping"
        },
        {
          "name": "Tug",
          "role": "Inverse operations — addition ↔ subtraction (and the same idea for × ↔ ÷) as opposite pulls on the same line"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/numberverse/icon-sm.webp",
    "mascotPath": "/apps/numberverse/mascot.webp",
    "mentor": "Axis",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/numberverse/icon.webp",
    "longTagline": "NumberVerse is a math adventure where you build a living world using math! Use fraction bars to construct bridges, balance scales to solve equations, and coordinate grids to map your world. As you get better, the visual tools gradually fade away and you start writing real math notation. The world it",
    "features": [
      {
        "name": "World Building",
        "description": "Construct paths, bridges, buildings, and mechanisms using math. Need a bridge that is three-fourths of a river wide? Build it with fraction bars! Need a tower a"
      },
      {
        "name": "Visual Math Tools",
        "description": "Use hands-on math tools like fraction bars, area grids, balance scales, and number lines. These tools make abstract math concepts visible and touchable. You can"
      },
      {
        "name": "The Peel-Back",
        "description": "Here is the cool part: as you master a concept, the visual tools gradually become see-through and formal math notation appears underneath. You naturally transit"
      },
      {
        "name": "Skill Tree",
        "description": "Track your progress through a skill tree that shows which math concepts you have mastered and which ones are next. Each skill unlocks new building abilities in"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
        },
    "playTogether": true
  },
  {
    "slug": "originforge",
    "name": "OriginForge",
    "tagline": "Explore knowledge traditions from cultures worldwide — Indigenous ecological knowledge, African mathematical systems, Asian philosophical traditions, Pacific navigation techniques. Developed in partnership with cultural representatives.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/originforge/icon-sm.webp",
    "mascotPath": "/apps/originforge/mascot.webp",
    "mentor": "Waykeeper",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "OriginForge's 5-character cast embodies the foundational origins-thinking + cultural-knowledge respect primitives — listening-before-claiming (Listen, the foundational respect move), trail-following (Trail, the wayfinding move that respects the path), carrying-forward (Carry, stewardship of knowledge passed hand-to-hand), honoring-multiple-truths (Honor, 'both are true; they answer different questions'), and greeting (Greet, the permission-protocol move). Waykeeper (mentor; preserved code-side; site mentor field renamed from 'Roots' → 'Waykeeper' for code/site alignment) frames each primitive; cast embodies them at community-elder + apprenticeship + intergenerational-storyteller scale (NEVER colonial-explorer / 'discoverer' / 'Indiana-Jones' / cultural-extractor gatekeeping). Origin-myth-vs-science gate enforced as STRONGEST in Wave 23: cast NEVER frames cultural knowledge as 'primitive science' or 'myth as wrong'; Honor's 'both are true; they answer different questions' is structurally load-bearing across every cast appearance; cultural-representation discipline absolute — species-not-human + abstract artifacts only (NO specific cultural items / textiles / dress / religious symbols / named ancestors); external Indigenous-knowledge sensitivity reviewers STRONGLY RECOMMENDED before cast art generation OR any kit framing-content authoring.",
      "members": [
        { "name": "Listen", "role": "Listening before claiming — hear how a tradition says it first, on its own terms" },
        { "name": "Trail", "role": "Trail-following — every origin is also a journey; honor the path itself" },
        { "name": "Carry", "role": "Carrying-forward — knowledge wasn't found, it was given; honor the hands that passed it" },
        { "name": "Honor", "role": "Honoring multiple truths — science and story answer different questions; both can be true" },
        { "name": "Greet", "role": "Greeting — knock before you enter; wait to be invited; ask permission before listening" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/originforge/icon.webp",
    "longTagline": "OriginForge takes you on a journey around the world to discover knowledge from many different cultures! Learn about Indigenous ecological knowledge, African math systems, Asian philosophy, Pacific Island navigation, and much more. Every culture has wisdom to share, and OriginForge helps you explore",
    "features": [
      {
        "name": "Culture Explorer",
        "description": "Visit different regions of the world and learn about their knowledge traditions. Discover how Aboriginal Australians read the land, how African cultures develop"
      },
      {
        "name": "Interactive Stories",
        "description": "Experience cultural knowledge through animated stories. Watch traditional tales come to life and learn the lessons they teach about science, nature, math, and c"
      },
      {
        "name": "Art Studio",
        "description": "Create artwork inspired by the cultures you explore. Try traditional patterns, designs, and art forms from around the world. Each art activity teaches you about"
      },
      {
        "name": "Knowledge Journal",
        "description": "Record what you learn in your personal journal. Make connections between different cultures and see how knowledge traditions around the world relate to modern s"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "pixelforge",
    "name": "PixelForge",
    "tagline": "Gamified visual arts studio where players master design principles through creative challenges",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/pixelforge/icon-sm.webp",
    "mascotPath": "/apps/pixelforge/mascot.webp",
    "mentor": "Palette",
    "implementing": true,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "iconHeroPath": "/apps/pixelforge/icon.webp",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "PixelForge sits in the **creative-studio visual-arts cluster** alongside SpectrumCanvas / MangaForge / IllusionForge — all 4 shipping distributed-narrative casts in Wave 8, mirroring Wave 7's music-cluster symmetry.",
      "members": [
        {
          "name": "Speck",
          "role": "The single pixel — the atomic unit of pixel art; every image is a grid of these"
        },
        {
          "name": "Shade",
          "role": "The palette ramp — a small set of colors arranged from darkest to lightest (the foundation of pixel-art shading and form)"
        },
        {
          "name": "Grid",
          "role": "The tilemap grid — pixels snapped to repeating units that form tiles, tilesets, and game maps"
        },
        {
          "name": "Tween",
          "role": "The in-between frame — the animation frame that sits between two keyframes, giving motion its smoothness"
        },
        {
          "name": "Banner",
          "role": "The impact pose — the heroic / dramatic silhouette that reads instantly at thumbnail size (the principle that good character art is recognizable from its outline alone)"
        }
      ]
    },
    "longTagline": "PixelForge is a visual arts studio where you learn real design skills through creative challenges! Fantasy creature NPC clients hire you to create artwork -- a fire dragon needs a warm-colored banner, a frost fairy wants a symmetrical ice crystal. You will master color theory, composition, and art h",
    "features": [
      {
        "name": "Client Briefs",
        "description": "NPC clients come to your studio with art requests. Each brief teaches a specific design skill. \"Make me a banner using only warm colors\" teaches warm and cool c"
      },
      {
        "name": "Constrained Canvas",
        "description": "Create artwork on a special canvas that has helpful guides and constraints. These limits actually make you more creative! Grid overlays, color wheel tools, and"
      },
      {
        "name": "Art Critique",
        "description": "Submit your work to Maestro Pixel, your AI art mentor. The Maestro gives you feedback based on a rubric -- not just \"good job\" but specific advice like \"your co"
      },
      {
        "name": "Portfolio Gallery",
        "description": "Save your best work in your portfolio. Add reflections about what you learned and what you would do differently. Watch your skills improve over time!"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 1,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "powerforge",
    "name": "PowerForge",
    "tagline": "Build power plants, manage electrical grids, and engineer renewable energy solutions — master energy conversion, thermodynamics, and sustainable engineering through infrastructure simulation and physics experiments.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/powerforge/icon-sm.webp",
    "mascotPath": "/apps/powerforge/mascot.webp",
    "mentor": "Volt",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "PowerForge teaches energy + power as a **system of conversions and flows** — energy types, conversion devices, transmission infrastructure, source mix (renewable vs fossil), and conservation laws.",
      "members": [
        {
          "name": "Sprint",
          "role": "Kinetic energy (motion)"
        },
        {
          "name": "Perch",
          "role": "Potential energy (stored / position)"
        },
        {
          "name": "Trade",
          "role": "Energy conversion (one form → another)"
        },
        {
          "name": "Keep",
          "role": "Conservation / efficiency (the law)"
        },
        {
          "name": "Mix",
          "role": "Source diversification / renewable + storage"
        }
      ]
    },
    "iconHeroPath": "/apps/powerforge/icon.webp",
    "longTagline": "PowerForge is an energy science lab where you build power plants and manage electrical grids! Design solar farms, wind turbines, and other energy systems. Learn how energy is converted from one form to another, and figure out how to power a growing community using clean, renewable energy.",
    "features": [
      {
        "name": "Power Plant Builder",
        "description": "Design and build different types of power plants -- solar, wind, hydro, coal, and nuclear. Each type has strengths and weaknesses. Solar is clean but only works"
      },
      {
        "name": "Grid Manager",
        "description": "Connect your power plants to a community with power lines. Balance supply and demand as the population grows. What happens when everyone turns on their air cond"
      },
      {
        "name": "Physics Experiments",
        "description": "Run hands-on experiments to learn about energy transfer, heat, and thermodynamics. How does insulation affect heat loss? What is the relationship between wind s"
      },
      {
        "name": "Sustainability Dashboard",
        "description": "Track your carbon footprint, energy efficiency, and renewable percentage. Can you power a city with 100% renewable energy? The dashboard shows you how close you"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "prismforge",
    "name": "PrismForge",
    "tagline": "Bend, split, and focus light through a virtual optics bench — explore lenses, prisms, mirrors, and the full electromagnetic spectrum while solving light-based engineering challenges and building devices from magnifying glasses to fiber optic cables.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/prismforge/icon-sm.webp",
    "iconHeroPath": "/apps/prismforge/icon.webp",
    "mascotPath": "/apps/prismforge/mascot.webp",
    "implementing": true,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "PrismForge teaches optics as a **family of light-behaviors** — reflection, refraction, dispersion, lens action, color mixing, and the wave/photon dualities.",
      "members": [
        {
          "name": "Mirror",
          "role": "Reflection (incoming ray bounces back)"
        },
        {
          "name": "Bend",
          "role": "Refraction (light slows in denser media)"
        },
        {
          "name": "Spread",
          "role": "Dispersion / spectrum (different wavelengths bend differently)"
        },
        {
          "name": "Focus",
          "role": "Lens action (converging + diverging)"
        },
        {
          "name": "Tint",
          "role": "Color mixing (additive RGB / subtractive CMY)"
        }
      ]
    },
    "longTagline": "PrismForge is a hands-on optics and light science lab where you experiment with lenses, mirrors, and prisms on an interactive optics bench! Drag and rotate optical elements to bend, reflect, and split light rays. Watch in real time as rays trace their paths, discover how rainbows form, and build rea",
    "features": [
      {
        "name": "Optics Bench",
        "description": "Drag optical elements from the palette onto the bench. Place lenses, mirrors, and prisms in the path of light rays. Rotate elements to change how light bends. W"
      },
      {
        "name": "Spectrum Explorer",
        "description": "Explore the full electromagnetic spectrum from radio waves to gamma rays. Tap on each region to learn about its wavelength, frequency, and real-world uses. Disc"
      },
      {
        "name": "Device Workshop",
        "description": "Build real optical devices by assembling the right elements in the right order. Start with a simple magnifying glass and work your way up to telescopes, microsc"
      },
      {
        "name": "Color Science Lab",
        "description": "Mix colors using additive (light) and subtractive (pigment) methods. See why red and green light combine to make yellow, but red and green paint make brown. Lea"
      }
    ],
    "mentor": "Optic",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "proofquest",
    "name": "ProofQuest",
    "tagline": "Logic puzzle adventure building proof-readiness through deductive reasoning puzzles, informal proofs, and mathematical writing. Themed around mathematical discoveries (Euler's bridges, Ramsey theory, four-color theorem).",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "Direct-Proof Dora",
          "role": "Direct proof: assume premises, derive conclusion by straightforward logical steps"
        },
        {
          "name": "Induction Ida",
          "role": "Weak / standard mathematical induction: base case + inductive step"
        },
        {
          "name": "Strong-Induction Sten",
          "role": "Strong induction: base case + assume all prior cases hold"
        },
        {
          "name": "Contradiction Cassius",
          "role": "Proof by contradiction (reductio ad absurdum): assume the negation, derive a contradiction"
        },
        {
          "name": "Contrapositive Cara",
          "role": "Proof by contrapositive: prove \"not Q → not P\" to establish \"P → Q\""
        },
        {
          "name": "Construction Cole",
          "role": "Proof by construction: prove existence by explicit construction of an example"
        },
        {
          "name": "Pigeonhole Perch",
          "role": "Pigeonhole principle: if n+1 items are placed in n bins, at least one bin contains 2+ items"
        },
        {
          "name": "Exhaustion Edda",
          "role": "Proof by exhaustion / cases: enumerate every case and verify each"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/proofquest/icon-sm.webp",
    "mascotPath": "/apps/proofquest/mascot.webp",
    "mentor": "Qed",
    "implementing": true,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/proofquest/icon.webp",
    "longTagline": "ProofQuest is a math reasoning adventure where you learn to think like a mathematician! Build chains of logic, assemble proofs from building blocks, and hunt for counterexamples to disprove false claims. Follow in the footsteps of Euler, who proved you cannot cross all seven bridges of Konigsberg, a",
    "features": [
      {
        "name": "Logic Chains",
        "description": "Drag and connect logical steps to build a chain of reasoning. Start with something you know is true, and connect it step by step to what you want to prove. Each"
      },
      {
        "name": "Proof Builder",
        "description": "Arrange given statements and reasons like puzzle pieces to construct a complete proof. You have all the pieces -- you just need to put them in the right order."
      },
      {
        "name": "Counterexample Hunter",
        "description": "Someone claims something is always true. Your job is to find one example where it is NOT true. Finding a single counterexample disproves the whole claim! This i"
      },
      {
        "name": "Famous Discoveries",
        "description": "Explore mathematical discoveries like the Konigsberg bridge problem, the four-color theorem, and Ramsey's party problem. These real stories show why mathematici"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "quillspell",
    "name": "QuillSpell",
    "tagline": "Spelling and vocabulary mastery through pattern recognition and play.",
    "vertical": "special-interest",
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "Etyma",
          "role": "Latin Quarter — Latin roots (port, scrib, dict, vis, audi, port)"
        },
        {
          "name": "Sophia",
          "role": "Greek Acropolis — Greek roots (bio, geo, photo, log, graph, phon)"
        },
        {
          "name": "Birch",
          "role": "Germanic / Old English Grove — short, punchy Anglo-Saxon roots (mouth, hand, foot, hear, see, walk)"
        },
        {
          "name": "Saga",
          "role": "Old Norse Longhouse — northern roots (sky, take, gift, raise, weak, scant)"
        },
        {
          "name": "Margaux",
          "role": "French Chateau — Norman-French roots (royal, chef, ballet, garage, hotel, courage)"
        },
        {
          "name": "Zayn",
          "role": "Arabic Oasis — Arabic-origin English loans (algebra, algorithm, alchemy, zenith, sugar, cotton)"
        },
        {
          "name": "Hush",
          "role": "Silent-letter clan (kn-, gn-, wr-, mb, gh, pn-, ps-)"
        },
        {
          "name": "Twin",
          "role": "Double-consonant rule (running, beginning, hopped, planned — short-vowel-CVC + suffix)"
        },
        {
          "name": "Ember",
          "role": "Schwa-keeper (the unstressed-vowel \"uh\" — `about`, `pencil`, `lemon`, `circus`, `medium`)"
        },
        {
          "name": "Wren",
          "role": "Vowel-team duos (ai, ea, ee, oa, ow, ie, oi) — \"when two vowels go walking\""
        },
        {
          "name": "Affix",
          "role": "Suffix-stack guardian (root + suffix + suffix: nation → national → nationalize → nationalization)"
        },
        {
          "name": "Cadence",
          "role": "Syllable-rhythm master (di-vid-ing words for spelling: VC/CV, V/CV, syl-lab-i-fi-ca-tion)"
        }
      ]
    },
    "heroColor": "#FFA726",
    "iconPath": "/apps/quillspell/icon-sm.webp",
    "mascotPath": "/apps/quillspell/mascot.webp",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "longTagline": "Welcome to **QuillSpell** — a competitive spelling bee and word mastery arena for ages 9-14. Master spelling through tournament brackets, etymology exploration, morpheme-building challenges, and an AI pronouncer that follows Scripps National Spelling Bee rules.",
    "features": [
      {
        "name": "The Core Loop",
        "description": "1. **Hear** — Quill or the pronouncer speaks a word aloud (Scripps protocol)"
      },
      {
        "name": "Game Modes (unlocked progressively)",
        "description": "| Mode | When it unlocks | What you do |"
      },
      {
        "name": "Streaks, Belts & Quill",
        "description": "Quill's voice is encouraging and never punishing. A wrong answer gets *\"Tricky one! Every expert was once a beginner.\"* — never *\"Wrong!\"*."
      },
      {
        "name": "Settings & Accessibility",
        "description": "Open Settings (behind a parental gate) to find:"
      }
    ],
    "mentor": "Quill",
    "hasUserGuide": true,
    "iconHeroPath": "/apps/quillspell/icon.webp",
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 0
    }
  },
  {
    "slug": "ratiorealm",
    "name": "RatioRealm",
    "tagline": "Master ratios, proportions, and percentages through real-world simulation contexts — recipe scaling in kitchens, blueprint ratios in construction, and map scales in cartography — with visual models and AI-driven difficulty adaptation. Ages 10-14.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "RatioRealm sits in the **math-mountains zone** of AdventureHub (per `Resources/HubContributions/ratiorealm.json`, shipped labsmith PR #101) alongside ProofQuest, GeometryForge, and FunctionForge — all DN-aligned.",
      "members": [
        {
          "name": "Pair the Ratio-Speaker",
          "role": "Simple ratios (a:b) — the foundational \"for every A, there are B\" pattern"
        },
        {
          "name": "Scale the Doubler",
          "role": "Equivalent ratios (scaling both parts by the same factor; recipe-doubling primitive)"
        },
        {
          "name": "Unit the Per-One-Counter",
          "role": "Rates and unit rates (the per-one normalization that lets us compare different rates)"
        },
        {
          "name": "Cross the Proportion-Solver",
          "role": "Proportions and cross-multiplication (the canonical \"if a/b = c/d then ad = bc\" mechanic)"
        },
        {
          "name": "Centa the Percent-Translator",
          "role": "Percentages — the per-hundred special case + percent change"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/ratiorealm/icon-sm.webp",
    "mascotPath": "/apps/ratiorealm/mascot.webp",
    "mentor": "Scale",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/ratiorealm/icon.webp",
    "longTagline": "Hey there! Welcome to RatioRealm -- the app that helps you become a ratio superstar. This guide will show you everything you need to know.",
    "features": [
      {
        "name": "What Even Is a Ratio?",
        "description": "A ratio compares two numbers. Like if you have 2 cats and 3 dogs, the ratio of cats to dogs is **2 : 3**. Ratios are everywhere -- in recipes, maps, sports stat"
      },
      {
        "name": "Starting the App",
        "description": "When you open RatioRealm, you'll see the **Main Menu**. Here's what you can do:"
      },
      {
        "name": "Choosing a Context",
        "description": "Tap **Choose a Context** to pick what kind of problems you want to solve:"
      },
      {
        "name": "Solving Problems",
        "description": "After you pick a context (or tap Quick Practice), you'll see a math problem. Here's how it works:"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "readquest",
    "name": "ReadQuest",
    "tagline": "Build reading comprehension mastery through interactive passage analysis, evidence-based argument construction, and AI-generated comprehension challenges — with dual fiction and nonfiction tracks. Ages 9-14.",
    "vertical": "academics",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ReadQuest sits in the **word-woods zone** of AdventureHub alongside QuillSpell + GrammarForge — both already shipping distributed-narrative casts (Wave 1).",
      "members": [
        {
          "name": "Crest",
          "role": "Main idea / central message (the *peak* of the passage)"
        },
        {
          "name": "Hunch",
          "role": "Inference (reading between the lines)"
        },
        {
          "name": "Anchor",
          "role": "Evidence / textual citation"
        },
        {
          "name": "Plume",
          "role": "Author's purpose / voice / tone"
        },
        {
          "name": "Frame",
          "role": "Text structure (compare-contrast, sequence, cause-effect, problem-solution, description)"
        },
        {
          "name": "Pith",
          "role": "Vocabulary in context (deriving word meaning from surrounding text)"
        }
      ]
    },
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/readquest/icon-sm.webp",
    "mascotPath": "/apps/readquest/mascot.webp",
    "mentor": "Margin",
    "implementing": true,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/readquest/icon.webp",
    "longTagline": "ReadQuest is a reading comprehension arena where you level up your reading skills! Analyze short passages, highlight evidence, build arguments, debate an AI opponent, and master vocabulary with smart flashcards. Every passage is a puzzle to solve -- find the main idea, track the author's argument, a",
    "features": [
      {
        "name": "Passage Analysis",
        "description": "Read short passages (a few paragraphs) and answer questions that go deeper than \"what happened.\" Why did the author choose this word? What evidence supports the"
      },
      {
        "name": "Evidence Highlighting",
        "description": "Drag your finger across important sentences to highlight evidence. Then connect your highlights to answer questions. The app tracks how well you support your an"
      },
      {
        "name": "AI Debates",
        "description": "Debate an AI opponent about a passage. Take a position and defend it with evidence. The AI will challenge your reasoning and push back on weak arguments. Win th"
      },
      {
        "name": "Vocabulary Builder",
        "description": "New words from your passages go into a smart flashcard system. The app figures out which words you are about to forget and quizzes you at just the right time. W"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "reelforge",
    "name": "ReelForge",
    "tagline": "Players learn filmmaking principles by creating short films within a virtual studio -- storyboarding scenes, choosing camera angles, directing lighting, designing sound, and editing on a timeline. Progress from single-shot exercises to multi-scene narratives, unlocking techniques from the history of cinema. The only unified filmmaking education app on iOS.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/reelforge/icon-sm.webp",
    "mascotPath": "/apps/reelforge/mascot.webp",
    "mentor": "Slate",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ReelForge's 6-character filmmaking-craft cast maps 1:1 to the 6 craft primitives — storyboarding / camera / lighting / sound / editing / narrative. Cast: Draft (storyboard) / Aim (camera) / Bright (lighting) / Buzz (sound) / Snip (editing) / Whole (narrative). Per `reelforge-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22. Slate preserved as mentor. Multiple collision-renames applied (Board→Draft / Lens→Aim / Glow→Bright / Cut→Snip / Arc→Whole). Labsmith generates ~$1.62 cast assets. Cross-app cameos: Snip ↔ EffectsForge / Aim ↔ FrameQuest Wave 32b sibling (camera-craft shared design); Buzz ↔ StageForge / Bright ↔ PixelForge / Whole ↔ TaleForge. NO real-director mascotization.",
      "members": [
        { "name": "Draft", "role": "Storyboarding — pre-visualization; 'Draw it first. Then film it.'" },
        { "name": "Aim", "role": "Camera angles + framing — 'Where the camera stands changes the story.'" },
        { "name": "Bright", "role": "Lighting design — 'Three lights. Different feelings.'" },
        { "name": "Buzz", "role": "Sound design — foley + ambient + dialogue — 'Sound is the other half.'" },
        { "name": "Snip", "role": "Editing — timeline + transitions + pacing — 'Cut here. Not there.'" },
        { "name": "Whole", "role": "Multi-scene narrative — 'Beginning. Middle. End.'" }
      ]
    },
    
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/reelforge/icon.webp",
    "longTagline": "ReelForge is a filmmaking school on your device! Learn how movies are made by storyboarding scenes, choosing camera angles, setting up lighting, designing sound, and editing clips on a timeline. Start with single shots and work your way up to directing multi-scene short films. Lights, camera, action",
    "features": [
      {
        "name": "Storyboard Creator",
        "description": "Plan your film scene by scene. Draw or arrange frames that show what each shot will look like. A good storyboard is the blueprint for a great film."
      },
      {
        "name": "Virtual Film Set",
        "description": "Step onto a virtual film set and control everything. Move the camera to get the right angle -- wide shot, close-up, or over-the-shoulder. Adjust the lights to s"
      },
      {
        "name": "Sound Designer",
        "description": "Add music, sound effects, and dialogue to your scenes. Learn how sound changes the mood of a film -- the same scene feels completely different with scary music"
      },
      {
        "name": "Timeline Editor",
        "description": "Put your shots together on a timeline to create a complete film. Trim clips, rearrange scenes, and add transitions. See how the order of shots tells a story."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 1,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "researchquest",
    "name": "ResearchQuest",
    "tagline": "Guided research adventure where students formulate questions, evaluate sources, synthesize findings, and produce reports -- building essential information literacy skills through structured research quests.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/researchquest/icon-sm.webp",
    "mascotPath": "/apps/researchquest/mascot.webp",
    "mentor": "Scholar",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "ResearchQuest's 5-character cast embodies the foundational research-method primitives — question-formulation (Wonder), source-evaluation (Vet, CRAAP test), note-taking (Quote, quoting + paraphrasing + summarizing), synthesis (Synth, across multiple sources), and citation (Tether, attribution + bibliography). Scholar (mentor; renamed from site placeholder 'Source' to resolve Wave 21 'too on-the-nose' exclusion + match code-side style guide) frames each primitive; cast embodies them at school-research-club / public-library-volunteer scale. 'I'm not a real scientist' anxiety gate enforced: cast normalizes that kids ARE researchers when they investigate; foregrounds curiosity over credential; cross-app inherits investigation-bias-safe register from SleuthLab Wave 17.",
      "members": [
        { "name": "Wonder", "role": "Question-formulation — narrowing vague interest into focused, answerable research questions" },
        { "name": "Vet", "role": "Source-evaluation — CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose)" },
        { "name": "Quote", "role": "Note-taking — quoting + paraphrasing + summarizing; keeping voices separate" },
        { "name": "Synth", "role": "Synthesis — combining evidence across multiple sources; finding agreement, disagreement, gaps" },
        { "name": "Tether", "role": "Citation — attribution + bibliography; gratitude + map back to sources" }
      ]
    },
    "implementing": false,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/researchquest/icon.webp",
    "longTagline": "ResearchQuest is a guided research adventure where you learn how to find, evaluate, and use information like a real researcher. You will formulate research questions, evaluate sources using the CRAAP test, take organized notes, build bibliographies, and produce research reports. These are essential",
    "features": [
      {
        "name": "Asking Good Questions",
        "description": "Every great research project starts with a question. ResearchQuest guides you from broad topics (\"space\") to focused, answerable research questions (\"How do ast"
      },
      {
        "name": "Source Evaluation (CRAAP Test)",
        "description": "Not all sources are equally trustworthy. Rate every source using the CRAAP test: Currency (how recent?), Relevance (does it answer your question?), Authority (w"
      },
      {
        "name": "Note-Taking",
        "description": "Take structured notes from your evaluated sources. The app teaches you the difference between quoting (exact words), paraphrasing (your own words), and summariz"
      },
      {
        "name": "Bibliography Building",
        "description": "As you add sources, ResearchQuest automatically builds your bibliography in MLA or APA format. You learn what information each citation needs and why proper att"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "riddlerealm",
    "name": "RiddleRealm",
    "tagline": "Solve mind-bending riddles, craft your own brain teasers, and build a puzzle kingdom",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/riddlerealm/icon-sm.webp",
    "mascotPath": "/apps/riddlerealm/mascot.webp",
    "mentor": "Cryptic",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "RiddleRealm's 5-character cast embodies the foundational riddle-craft primitives — wordplay (Twist), logic + lateral thinking (Aha), math + number riddles (Reckon), visual + spatial riddles (Pan), and mystery + synthesis (Yarn). Cryptic (mentor) frames each primitive; cast embodies them at puzzle-club / brain-teaser-tutor scale (NEVER Mensa-test / IQ-gatekeeping register). 'I don't get it yet' anxiety gate enforced: Aha's catchphrase normalizes slow-solving as productive cognitive state.",
      "members": [
        { "name": "Twist", "role": "Wordplay riddles — puns, homophones, semantic misdirection (fair-trick framing)" },
        { "name": "Aha", "role": "Logic riddles — patient frame-finding; 'I don't get it yet' = productive cognitive state" },
        { "name": "Reckon", "role": "Math + number riddles — sequences, hidden constraints, numeric patterns" },
        { "name": "Pan", "role": "Visual + spatial riddles — picture puzzles, perspective rotation" },
        { "name": "Yarn", "role": "Mystery + detective + synthesis riddles — multi-step narrative with fair-planted clues" }
      ]
    },
    "implementing": false,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/riddlerealm/icon.webp",
    "longTagline": "RiddleRealm is a puzzle kingdom where you solve AND create brain teasers! Explore dungeon chambers filled with riddles -- wordplay, logic puzzles, math tricks, and visual patterns. Earn keys to build your own kingdom. Then use the riddle workshop to craft your own puzzles and challenge friends. Can",
    "features": [
      {
        "name": "Dungeon Chambers",
        "description": "Explore themed chambers filled with different types of riddles. Each chamber gets harder as you go deeper. Solve all the riddles in a chamber to earn a key and"
      },
      {
        "name": "Riddle Types",
        "description": "You will encounter many kinds of puzzles:"
      },
      {
        "name": "Riddle Workshop",
        "description": "Create your own riddles using guided templates. The AI checks if your riddle is solvable and gives feedback on how tricky it is. Then share your riddles with fr"
      },
      {
        "name": "Kingdom Builder",
        "description": "Use the keys you earn from solving riddles to build and expand your personal kingdom. New buildings unlock new puzzle types and harder chambers."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "roboforge",
    "name": "RoboForge",
    "tagline": "Design robots from modular parts, program them in Swift-like block code, enter them in automated factory challenges, and compete in arena battles — mastering mechanical design, sensor programming, and algorithmic thinking through the most engaging STEM discipline in middle school.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/roboforge/icon-sm.webp",
    "mascotPath": "/apps/roboforge/mascot.webp",
    "mentor": "Servo",
    "distributedNarrative": true,
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/roboforge/icon.webp",
    "longTagline": "RoboForge is your own robotics workshop! Design robots from modular parts, program them using colorful code blocks (or real Swift-like text code), and watch them come to life in a physics-based simulation. Test your robots in factory challenges, navigate mazes, and compete in arena battles. Along th",
    "features": [
      {
        "name": "Robot Designer",
        "description": "Build robots by dragging and dropping components onto a chassis. Add motors for movement, sensors to detect the world, grippers to grab objects, and batteries f"
      },
      {
        "name": "Block Code Editor",
        "description": "Program your robot by snapping code blocks together. Start with simple commands like \"Move Forward\" and \"Turn Left.\" Add sensor blocks like \"If Wall Detected\" t"
      },
      {
        "name": "Simulation",
        "description": "Press the \"Run\" button and watch your robot execute your program in a physics simulation. See sensor beams light up as the robot detects obstacles. Watch the co"
      },
      {
        "name": "Factory Challenges",
        "description": "Sort items on conveyor belts, navigate mazes, and automate assembly tasks. Each challenge has a goal (reach the target, sort all items correctly) and an optiona"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 3
    }
  },
  {
    "slug": "safetyforge",
    "name": "SafetyForge",
    "tagline": "Navigate the digital world safely through interactive scenarios about privacy, cyberbullying, digital footprint, phishing detection, and responsible technology use — with a safe social media simulator that teaches real consequences without real risk. Ages 9-14.",
    "vertical": "academics",
    "heroColor": "#81C784",
    "iconPath": "/apps/safetyforge/icon-sm.webp",
    "mascotPath": "/apps/safetyforge/mascot.webp",
    "mentor": "Aegis",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "SafetyForge's 5-character cast embodies the foundational digital-citizenship safety practices per ISTE Digital Citizen + Common Sense Media frameworks — pause-before-clicking (Pause), pattern-spotting in scams (Sniff), kindness-online + bystander-action (Stand), digital-footprint-awareness (Trace), and help-seeking from a trusted adult (Tell). Aegis (mentor; code-side renamed from 'Shield' which redundantly echoed app-name 'SafetyForge' + brand-coded fear-framing; site-aligned with existing 'Aegis' classical Athena's-shield reference — protective + wise + not fear-coded) frames each primitive; cast embodies them at neighborhood / school / family scale (NEVER 'cybersecurity expert' / 'hacker' / 'authority figure' framing). Fear-amplification gate enforced (CRITICAL — CO-STRONGEST Wave 24 burden alongside FitQuest body-image gate): cast NEVER references real-world harms graphically (no kidnapping / grooming / suicide / self-harm scenarios in cast voice); cyberbullying scenarios are framed BYSTANDER-FIRST (what Stand DOES) never VICTIM-FIRST (what happened to a child); phishing scenarios are framed PATTERN-SPOTTING-GAME (Sniff's puzzle) never DISASTER-PREVENTION; kits 5 (cyberbullying) + 10 (help-seeking) + 12 (real-world citizenship) carry pre-content warnings + skip-with-summary + crisis-resource surface (988 + Childhelp + RAINN + NCMEC Cyber Tipline + 911); external ICAC / NCMEC / Common-Sense-Education-affiliated sensitivity reviewer REQUIRED for kits 4 + 5 + 8 + 11 + 12 ($1,000-$1,500). Stand's design specifically counters the typical sad-isolated-victim cyberbullying-illustration trope (Common Sense 2024 evidence: amplifies in-class distress in 14-32% of viewers per session) — Stand is EMPOWERED + PRESENT + warm, never pitying. Pause SOFT collision with JestForge Wave 22 cast + Tell SOFT collision with DataForge Wave 21 cast — both allowed per registry rule 3; flag for cross-app audio-context audit.",
      "members": [
        { "name": "Pause", "role": "Pause-before-clicking — the moment between stimulus and response is where safety lives" },
        { "name": "Sniff", "role": "Pattern-spotting in scams + phishing — every scam has a tell; puzzle-game register not disaster-prevention drill" },
        { "name": "Stand", "role": "Bystander-action + kindness-online — three moves (defend / distract / document-and-tell); trauma-informed framing" },
        { "name": "Trace", "role": "Digital-footprint awareness — what stays after you tap; future-self-awareness; visible chalk-trail behind otter-tween" },
        { "name": "Tell", "role": "Help-seeking from a trusted adult — telling is the most powerful safety move; sparrow-tween with 'told-a-grown-up' badge" }
      ]
    },
    "implementing": false,
    "standards": [
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/safetyforge/icon.webp",
    "longTagline": "SafetyForge is a digital citizenship academy where you learn to navigate the online world safely and responsibly. Investigate how apps collect your data, spot phishing scams, manage your digital footprint, navigate cyberbullying situations, and practice healthy technology habits -- all in a safe, si",
    "features": [
      {
        "name": "Digital Footprint Tracker",
        "description": "Watch a time-lapse simulation showing how online actions accumulate over months and years. See how a future employer or college admissions officer might view a"
      },
      {
        "name": "Cyberbullying Scenarios",
        "description": "Navigate branching dialogue situations as a target, bystander, or bystander-intervener. Explore multiple response options and see realistic consequences play ou"
      },
      {
        "name": "Scam Detector",
        "description": "Identify phishing emails, spot fake websites, navigate social engineering scenarios, and detect pyramid schemes. Each level presents more sophisticated fakes. L"
      },
      {
        "name": "Digital Wellness",
        "description": "Reflect on screen time habits, explore healthy technology practices, compare online vs. face-to-face communication norms, learn copyright basics and Creative Co"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "saffronlab",
    "name": "SaffronLab",
    "tagline": "Players travel the world to learn authentic recipes from different cultures, master cooking techniques through precision mini-games, and discover the science behind food — why bread rises, why onions caramelize, why emulsions hold together. Includes food safety and hygiene education for complete culinary science coverage.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/saffronlab/icon-sm.webp",
    "mascotPath": "/apps/saffronlab/mascot.webp",
    "mentor": "Pestle",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/saffronlab/icon.webp",
    "longTagline": "A culinary science and world kitchen adventure for ages 9–14. Travel the world, master cooking techniques through precision mini-games, run experiments that explain *why* cooking works, build a thriving restaurant, and unlock new cuisines as your skills grow.",
    "features": [
      {
        "name": "Table of Contents",
        "description": "1. [What SaffronLab Is](#what-saffronlab-is)"
      },
      {
        "name": "What SaffronLab Is",
        "description": "SaffronLab is an offline iPad and iPhone app that turns cooking into a hands-on STEM adventure. Every recipe answers a question — *why does bread rise? why does"
      },
      {
        "name": "One-Time Setup (about 30 seconds)",
        "description": "1. On first launch, the app asks the child's **age range** — Under 13, 13–17, or 18+. This is the only age question; no birthdates are stored."
      },
      {
        "name": "Where to Find Settings Later",
        "description": "The **gear icon** in the top-right of the home screen opens Settings. Anything sensitive (purchases would be locked, but SaffronLab has none) is behind a **Pare"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    },
    "distributedNarrative": true,
    "dnCast": {
      "intro": "SaffronLab's distributed-narrative cast embodies the 5 kitchen-science transformations — mixing/emulsions, heat/states-of-matter, fermentation/leavening, Maillard/caramelization, and preservation/safety — as 5 animal-cook characters Pestle introduces across the 16 question kits. Body-image affirmation, food-access inclusivity, and global cultural-cuisine balance are foregrounded; cast catchphrases never use diet/restriction vocabulary, and cuisine-tradition framing balances across regions equally.",
      "members": [
        { "name": "Whisk", "role": "Mixing + emulsions — the energetic hummingbird-tween who treats mixing as conversation between ingredients ('quick wrists, patient eyes — air goes in, lumps come out')" },
        { "name": "Simmer", "role": "Heat application + states of matter — the patient tortoise-tween who treats heat as the slow-revealer ('heat moves slow, food changes slower; watch the bubbles — they're telling you')" },
        { "name": "Rise", "role": "Fermentation + leavening — the wise badger-elder who treats fermentation as the patient art of working with living things, foregrounding cross-cultural traditions ('living things take time — wait; the bread knows when it's ready')" },
        { "name": "Crisp", "role": "Maillard + caramelization — the focused fox-tween who treats browning as the flavor-creating frontier ('sugar meets heat, protein meets heat — new flavors are born')" },
        { "name": "Brine", "role": "Preservation + food safety — the careful axolotl-tween who treats food safety as care-for-the-eater, foregrounding cross-cultural preservation traditions ('salt remembers, vinegar remembers, cold remembers — food keeps if it's kept right')" }
      ]
    }
  },
  {
    "slug": "sleuthlab",
    "name": "SleuthLab",
    "tagline": "Players run a detective agency, taking on mystery cases that require real forensic science techniques to solve. Dust for fingerprints, run chromatography, compare fibers under a microscope, analyze handwriting, and build evidence chains to identify suspects. Critical thinking through scientific deduction.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/sleuthlab/icon-sm.webp",
    "mascotPath": "/apps/sleuthlab/mascot.webp",
    "mentor": "Inspector Vex",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "SleuthLab's 5-character cast embodies the foundational forensic-science evidence-type primitives — impression evidence (Loop), trace evidence (Fiber), chemical evidence (Drop), document analysis (Stroke), and biological + digital evidence (Witness). Inspector Vex (mentor; code-side name 'Inspector Kit') frames each primitive; cast embodies them at school-detective-club / junior-forensics-team scale (NEVER hardboiled-noir / CSI-procedural register). Investigation-bias gate enforced: cast models evidence-based reasoning over hunch; foregrounds 'what would change your mind?' epistemic humility.",
      "members": [
        { "name": "Loop", "role": "Impression evidence — fingerprints, shoeprints, toolmarks (class vs individual evidence)" },
        { "name": "Fiber", "role": "Trace evidence — fibers, hairs, paint, glass (Locard's exchange principle)" },
        { "name": "Drop", "role": "Chemical evidence — chromatography, pH, spectroscopy (test-don't-guess)" },
        { "name": "Stroke", "role": "Document analysis — handwriting, ink, paper (comparison methodology)" },
        { "name": "Witness", "role": "Biological + digital evidence — DNA + digital footprints (statistical-match, not certainty)" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/sleuthlab/icon.webp",
    "longTagline": "SleuthLab is a forensic science detective game where you run your own detective agency and solve mystery cases using real forensic techniques. Analyze fingerprints, test fibers under a microscope, compare handwriting samples, and crack the case before the trail goes cold!",
    "features": [
      {
        "name": "Crime Scene Investigation",
        "description": "Visit crime scenes to search for clues. Tap around the scene to collect evidence like fingerprints, fibers, and documents. Be thorough -- missing a clue could l"
      },
      {
        "name": "Lab Analysis",
        "description": "Take your evidence back to the lab and run real forensic tests. Use chromatography to separate ink colors, examine fibers under a microscope, compare fingerprin"
      },
      {
        "name": "Case Solving",
        "description": "Put all your evidence together on the evidence board. Connect the clues, rule out suspects, and identify who did it. Present your findings to close the case."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    }
  },
  {
    "slug": "soundsphere",
    "name": "SoundSphere",
    "tagline": "A soundscape creation tool that transforms heightened auditory sensitivity into a creative strength",
    "vertical": "dir-fedc",
    "heroColor": "#81C784",
    "iconPath": "/apps/soundsphere/icon-sm.webp",
    "mascotPath": "/apps/soundsphere/mascot.webp",
    "mentor": "Hush",
    "implementing": true,
    "standards": [
      "DIR/FEDC Capacity 1",
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/soundsphere/icon.webp",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "**This handoff applies the cast ONLY to the sound-science portions** — kits 3, 4, 7, 9, 10, 11, 12.",
      "members": [
        {
          "name": "Wave",
          "role": "Frequency — the pitch axis; high-frequency sounds vibrate fast, low-frequency sounds vibrate slow"
        },
        {
          "name": "Bloom",
          "role": "Envelope — the attack / sustain / decay / release shape of a sound (how it begins, holds, and fades)"
        },
        {
          "name": "Layer",
          "role": "Timbre — the overtone fingerprint that makes a violin sound like a violin and a flute sound like a flute (even at the same pitch)"
        },
        {
          "name": "Ring",
          "role": "Space — reverb, echo, and room ambience (how the same sound feels different in a bathroom vs a stadium vs a forest)"
        },
        {
          "name": "Tune",
          "role": "Synthesis — how primitive sound-elements (frequencies + envelopes + layers + space) combine to build entirely new sounds"
        }
      ]
    },
    "longTagline": "SoundSphere lets you build your own calming or energizing soundscapes by mixing sounds together. Track how you are feeling using the Zones of Regulation, then discover which sound combinations help you focus, relax, or get energized. It is your personal sound studio!",
    "features": [
      {
        "name": "Building Soundscapes",
        "description": "Browse the sound library and pick sounds you like -- rain, ocean waves, birds, gentle music, and many more. Drag them onto your mixing board and adjust the volu"
      },
      {
        "name": "Zones of Regulation Check-In",
        "description": "Before and after using a soundscape, check in with how you are feeling. Are you in the Blue Zone (slow, tired), Green Zone (calm, ready), Yellow Zone (wiggly, s"
      },
      {
        "name": "Saving and Scheduling",
        "description": "Save your favorite soundscapes and give them names like \"Homework Focus\" or \"Bedtime Calm.\" You can even set up a schedule so the right soundscape is ready when"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "speakforge",
    "name": "SpeakForge",
    "tagline": "Speaking and listening skills platform for ages 10-14 covering presentations, discussions, debate, active listening, and media analysis",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/speakforge/icon-sm.webp",
    "mascotPath": "/apps/speakforge/mascot.webp",
    "mentor": "Resonance",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "SpeakForge's 5-character speaking-craft cast maps 1:1 to CCSS Speaking & Listening primitives — Pose (posture/presence) / Pitch (voice projection + tone) / Hark (active listening) / Truss (argument structure) / Echo (audience awareness). Per `speakforge-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22. Resonance preserved as mentor. Original Frame + Tilt RENAMED to Truss + Echo to resolve Wave 31 + NexusForge Wave 23 collisions. Labsmith generates ~$1.35 cast assets. Cross-app cameos: Truss ↔ BridgeForge / Hark ↔ DebateForge / Echo ↔ ImprovQuest / Pitch ↔ HarmonyForge. NO real-orator mascotization (Cicero/Demosthenes/MLK/Obama in static kit metadata ONLY).",
      "members": [
        { "name": "Pose", "role": "Posture / presence / stance — 'Stand. Then speak.'" },
        { "name": "Pitch", "role": "Voice projection + tone variation — 'Your voice is a road. Not a wall.'" },
        { "name": "Hark", "role": "Active listening — 'Listen all the way through.'" },
        { "name": "Truss", "role": "Argument structure (claim / evidence / reasoning) — 'Claim, then proof, then why.'" },
        { "name": "Echo", "role": "Audience awareness + tone calibration — 'Who's listening? Speak to THEM.'" }
      ]
    },
    
    "implementing": false,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/speakforge/icon.webp",
    "longTagline": "SpeakForge helps you become a confident speaker and a sharp listener. Practice giving presentations, join discussions, try out debates, and learn to really listen to what others are saying. Whether you are presenting in class or chatting with friends, SpeakForge makes you better at it!",
    "features": [
      {
        "name": "Presentations",
        "description": "Pick a topic and prepare a short presentation. The app guides you through organizing your ideas, practicing your delivery, and presenting with confidence. Get f"
      },
      {
        "name": "Discussions & Debates",
        "description": "Join practice discussions where you respond to prompts and build on ideas. In debate mode, pick a side and make your best argument. Learn to support your points"
      },
      {
        "name": "Active Listening",
        "description": "Listen to short audio clips and answer questions about what you heard. Practice picking out the main idea, important details, and the speaker's purpose. Great l"
      },
      {
        "name": "Media Analysis",
        "description": "Watch and listen to real-world media clips. Figure out the speaker's message, spot persuasion techniques, and think about whether the information is trustworthy"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 2
    }
  },
  {
    "slug": "spectrumcanvas",
    "neurodivergentSupport": true,
    "neurodivergentDesignTraits": ["Autism-supportive", "Sensory-aware", "Low-stimulus mode", "Identity-affirming", "Strength-based"],
    "neurodivergentEvidence": [
      { "aspect": "Wave-8 dual-palette + 0.3s crossfade sensory overrides", "basis": "Autism-aware sensory regulation; per app DN handoff" },
      { "aspect": "Sensory-soften gesture as cast member (Soften)", "basis": "Explicitly modeled regulation move" },
      { "aspect": "Emotion palette mapping", "basis": "Interoception scaffolding; ASAN-affirming" },
      { "aspect": "Therapist observer mode", "basis": "Clinical-collaboration affordance (deferred to v2)" }
    ],
    "name": "SpectrumCanvas",
    "tagline": "A digital art studio designed for autistic and other neurodivergent visual thinkers where every art material is simulated without the sensory challenges of the physical version. Watercolor, charcoal, clay, and collage -- all with adjustable texture feedback, sound, and visual intensity. Includes social story illustration tools and an emotion palette that maps feelings to colors.",
    "vertical": "dir-fedc",
    "heroColor": "#E91E63",
    "iconPath": "/apps/spectrumcanvas/icon-sm.webp",
    "mascotPath": "/apps/spectrumcanvas/mascot.webp",
    "mentor": "Pigment",
    "implementing": true,
    "standards": [
      "DIR/FEDC Capacity 5",
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/spectrumcanvas/icon.webp",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "SpectrumCanvas sits in the **creative-studio visual-arts cluster** alongside PixelForge / MangaForge / IllusionForge — all 4 shipping distributed-narrative casts in Wave 8.",
      "members": [
        {
          "name": "Pool",
          "role": "The wash — the controlled spread of watercolor / wet pigment across a surface (the foundational fluid-art gesture; the moment a single drop becomes a shape)"
        },
        {
          "name": "Cradle",
          "role": "The composition cradle — the balance of weight and negative space on a canvas (where heavy / light elements rest and where the eye can rest)"
        },
        {
          "name": "Hum",
          "role": "The color-emotion mapping — the assigning of feelings to color zones (central to SpectrumCanvas's emotion palette feature: which colors feel like which emotions, per learner)"
        },
        {
          "name": "Soften",
          "role": "The sensory-soften gesture — any move that reduces visual / textural stimulation when it gets high (lower contrast, reduce saturation, calm the line weight, soften the edges)"
        },
        {
          "name": "Weave",
          "role": "The collage weave — the layered overlay of textures + photos + drawn elements (central to social-story illustration and to multi-media composition)"
        }
      ]
    },
    "longTagline": "SpectrumCanvas is a digital art studio where you can paint, draw, sculpt, and create collages without any messy materials. It simulates real art tools like watercolors, charcoal, and clay, and you can adjust how everything feels on screen. You can also create social stories with illustrations and ex",
    "features": [
      {
        "name": "Digital Art Studio",
        "description": "Pick your art tool -- watercolor, charcoal, clay, collage, or more. Each tool works like the real thing on screen. Watercolors blend and spread, charcoal smudge"
      },
      {
        "name": "Social Story Builder",
        "description": "Create illustrated stories to help explain situations, feelings, or routines. Pick backgrounds, add characters, write captions, and draw your own pictures to ma"
      },
      {
        "name": "Emotion-Color Mapping",
        "description": "Explore how colors connect to feelings. Choose colors that match different emotions and create art that expresses how you are feeling. This is your own personal"
      },
      {
        "name": "Gallery",
        "description": "Save your finished artwork to your personal gallery. Look back at what you have created and see how your art has grown over time."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 1,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "stageforge",
    "name": "StageForge",
    "tagline": "Interactive theater arts studio where students write scripts, design sets, direct scenes, and perform -- building creative confidence through the dramatic arts. Covers the full production pipeline from script to stage.",
    "vertical": "steam",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "StageForge's 5-character cast maps to the canonical theater-craft buckets — playwriting / acting / directing / stagecraft / improv. Theater is the original distributed-narrative art form; character-coding makes the production-crew roles visible. Stagefright gate enforced: cast normalizes nerves, never shames missed lines.",
      "members": [
        { "name": "Face", "role": "Acting — character work through voice, body, and emotional life" },
        { "name": "Pen", "role": "Playwriting — turning ideas into scripts with character, conflict, structure" },
        { "name": "Block", "role": "Blocking — directing actors through stage geography" },
        { "name": "Rig", "role": "Stagecraft — the technical-theater craft that makes the visible-stage possible" },
        { "name": "Riff", "role": "Improvisation — the live-performance craft of Yes, and..." }
      ]
    },
    "heroColor": "#E91E63",
    "iconPath": "/apps/stageforge/icon-sm.webp",
    "mascotPath": "/apps/stageforge/mascot.webp",
    "mentor": "Curtain",
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/stageforge/icon.webp",
    "longTagline": "StageForge is a theater arts and drama academy where you write scripts, design sets, direct actors on stage, and watch your scenes come to life. You will learn the fundamentals of theater production -- from playwriting and blocking to set design and costume selection -- building creative confidence",
    "features": [
      {
        "name": "Script Writing",
        "description": "Write your own scripts with structured acts, scenes, and dialogue. The script editor guides you through formatting with character tags and stage directions. Sta"
      },
      {
        "name": "Stage Blocking",
        "description": "Direct actors on a stage grid by placing marks and planning movement paths. Drag characters to their positions, set entrances and exits, and time movements to d"
      },
      {
        "name": "Set Design",
        "description": "Build stage environments from a palette of set pieces, backdrops, and props. Choose from different stage types -- proscenium, thrust, arena, or black box. Arran"
      },
      {
        "name": "Costume & Character Design",
        "description": "Define characters with personality traits, voice notes, and period-appropriate costumes. Browse costumes organized by era and genre -- from ancient Greek to mod"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 3
    }
  },
  {
    "slug": "starforge",
    "name": "StarForge",
    "tagline": "Players pilot spacecraft through the solar system and beyond, building and upgrading their ship, landing on planets to conduct experiments, establishing colonies, and answering astronomy challenges to unlock new regions of space. Real orbital mechanics, scientifically accurate planet conditions, and simulated space phenomena make this the only gamified space adventure RPG on iOS.",
    "vertical": "stem",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "StarForge's concept centers on stellar astronomy — stellar classification, HR diagram, stellar life cycles, observational astronomy.",
      "members": [
        {
          "name": "Wick",
          "role": "Protostar (collapsing gas, igniting)"
        },
        {
          "name": "Glow",
          "role": "Main-sequence star (hydrogen fusion / stable)"
        },
        {
          "name": "Swell",
          "role": "Red giant (helium fusion / expanded outer layers)"
        },
        {
          "name": "Pinch",
          "role": "Stellar collapse + neutron star / supernova compaction"
        },
        {
          "name": "Ember",
          "role": "White dwarf / stellar remnant (cooling final state)"
        }
      ]
    },
    "heroColor": "#29B6F6",
    "iconPath": "/apps/starforge/icon-sm.webp",
    "mascotPath": "/apps/starforge/mascot.webp",
    "mentor": "Orbit",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/starforge/icon.webp",
    "longTagline": "StarForge is a space exploration adventure where you pilot your own spacecraft through the solar system. Land on planets, conduct science experiments, and answer astronomy challenges to unlock new regions of space. The entire solar system is waiting for you to explore!",
    "features": [
      {
        "name": "Space Navigation",
        "description": "Pilot your spacecraft through the solar system. Visit planets, moons, asteroids, and space stations. Each destination has unique missions and discoveries waitin"
      },
      {
        "name": "Surface Exploration",
        "description": "Land on planets and moons to explore their surfaces. Collect rock samples, study the atmosphere, and observe geological features. Each world is different and fu"
      },
      {
        "name": "Science Experiments",
        "description": "Conduct real astronomy experiments at each location. Measure gravity, analyze soil samples, study star spectra, and more. Your results help you understand how t"
      },
      {
        "name": "Astronomy Challenges",
        "description": "Answer questions about space, planets, and the universe to earn fuel and unlock new destinations. The more you learn, the further you can travel."
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "strategyforge",
    "name": "StrategyForge",
    "tagline": "Master chess, Go, checkers, backgammon, mancala, and Connect 4 through AI-coached lessons, puzzle challenges, and online play — with a unified strategy thinking curriculum for ages 9-14. The only app that teaches strategic thinking as a transferable skill across multiple classical games.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/strategyforge/icon-sm.webp",
    "mascotPath": "/apps/strategyforge/mascot.webp",
    "mentor": "Gambit",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "StrategyForge's 5-character cast embodies the transferable strategic-thinking primitives that cross all 6 classical games (chess + Go + checkers + backgammon + mancala + Connect 4) — forward planning + multi-move look-ahead (Foresee), piece-value reasoning + exchange evaluation (Trade), pattern recognition + position-reading (Read), patience + tempo discipline (Bide), graceful loss + post-game analysis (Concede). Gambit (mentor preserved on site; code-side reconciliation Phase A: math-mentor domain-text corrected to strategy-games + transferable-thinking coach) frames each primitive. Cross-game complement to the per-game DN cluster (GambitTales / StoneSong / GeneralsTale / MotifLab / PipQuest / DealTales go DEEP per-game; StrategyForge goes CROSS-game on transferable primitives). GAMBLING-ADJACENCY GATE ENFORCED (CRITICAL — inherits ChanceForge Wave 4 + TableForge Wave 26 verbatim): Trade = exchange-evaluation NEVER wager-evaluation; Bide = strategic-positioning NEVER expected-value-betting; cast NEVER uses casino register; backgammon framed as dice-as-design-tool. Cultural-credit appendix Lesson 7 (Persia/India/China/Korea/Japan/Africa/Mesopotamia/modern-US game-origins named without mascotizing).",
      "members": [
        { "name": "Foresee", "role": "Forward planning + multi-move look-ahead — three moves ahead is enough; look further only when the position asks" },
        { "name": "Trade", "role": "Piece-value reasoning + exchange evaluation — equal value isn't equal worth; position-value matters more than piece-value" },
        { "name": "Read", "role": "Pattern recognition + position-reading — patterns repeat; the shape tells you the move" },
        { "name": "Bide", "role": "Patience + tempo discipline — slow is a move too; sometimes the best move is to wait" },
        { "name": "Concede", "role": "Graceful loss + post-game analysis — losing is a teacher; winning is too; I write down both" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/strategyforge/icon.webp",
    "longTagline": "StrategyForge is a strategy games academy where you learn to play chess, Go, checkers, backgammon, mancala, and Connect 4 with the help of an AI coach. Solve puzzles, take lessons, and discover that the thinking skills you learn in one game help you in all the others -- and in real life too!",
    "features": [
      {
        "name": "Game Lessons",
        "description": "Each game has step-by-step lessons that teach you the rules, basic strategies, and advanced tactics. Your AI coach explains every move and why it matters."
      },
      {
        "name": "Puzzle Challenges",
        "description": "Test your thinking with puzzles for each game. Find the best move, plan ahead, and solve tricky positions. Puzzles get harder as you improve."
      },
      {
        "name": "Practice Matches",
        "description": "Play against the AI at different difficulty levels. Start easy and work your way up. The AI coach gives you hints and explains what went wrong after each game."
      },
      {
        "name": "Strategy Transfer",
        "description": "Discover how the strategies you learn in one game work in others. Planning ahead in chess helps you in Go. Controlling the board in checkers helps you in Connec"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 0
    }
  },
  {
    "slug": "styleforge",
    "name": "StyleForge",
    "tagline": "Players design garments from concept sketch through pattern-making, fabric selection, construction, and runway presentation. Learn color theory, proportions, textile science, and design principles through a fashion career progression from amateur to haute couture. The only educational fashion design app on iOS for ages 9-14.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/styleforge/icon-sm.webp",
    "mascotPath": "/apps/styleforge/mascot.webp",
    "mentor": "Stitch",
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/styleforge/icon.webp",
    "longTagline": "StyleForge is a fashion design and textile arts education app for ages 9-14 where players design garments from concept sketch through fabric selection, pattern-making, construction, and runway presentation — learning color theory, proportions, textile science, and sustainability along the way.",
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    },
    "distributedNarrative": true,
    "dnCast": {
      "intro": "StyleForge's distributed-narrative cast embodies the 5 stages of garment design — drape/fit, fabric/grain, pattern/cut, finishing/trim, and care/sustainability — as 5 animal-designer characters Stitch introduces across the 16 question kits. Body-image affirmation, sustainability, and cultural-representation balance are foregrounded; cast uses varied body shapes by deliberate design, and Fold carries the moral anchor that clothes outlast trends.",
      "members": [
        { "name": "Drape", "role": "Concept silhouette + fit — the curvy capybara-tween who carries the cluster's body-image-gate anchor ('fabric meets body; body says what fabric wants to be — listen to both')" },
        { "name": "Grain", "role": "Fabric + textile science — the thoughtful raccoon-tween who treats fabric science as a vocabulary of natural-material decisions ('where does this thread come from? where does it go after? fabric has a beginning and an after')" },
        { "name": "Cut", "role": "Pattern-making + construction — the precise heron-tween who treats pattern-cutting as careful measure-twice-cut-once practice ('measure first, cut once — the pattern is the promise')" },
        { "name": "Trim", "role": "Finishing + embellishment — the steady mole-tween who treats finishing as the small details that make a garment whole ('big shapes finish first, tiny details finish last — hem first, then bead')" },
        { "name": "Fold", "role": "Sustainability + garment care — the wise swan-elder in a visibly-mended quilted coat who carries the cluster's sustainability + cultural-representation anchor ('make to last, mend to keep, fold to remember — fashion is a long story, not a short trend')" }
      ]
    }
  },
  {
    "slug": "synaforge",
    "name": "SynaForge",
    "tagline": "A bidirectional creative tool where drawing produces music and music produces visual art -- simultaneously. Inspired by synesthesia, a neurological phenomenon reported at higher rates among autistic and other neurodivergent individuals, SynaForge lets children explore the hidden connections between what they see and what they hear through customizable cross-modal mappings and guided explorations.",
    "vertical": "dir-fedc",
    "heroColor": "#81C784",
    "iconPath": "/apps/synaforge/icon-sm.webp",
    "mascotPath": "/apps/synaforge/mascot.webp",
    "mentor": "Chroma",
    "implementing": true,
    "standards": [
      "DIR/FEDC Capacity 1",
      "DIR/FEDC Capacity 5",
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/synaforge/icon.webp",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "SynaForge's distributed-narrative cast embodies the 5 cross-modal mapping families — color→sound, sound→color, kinesthetic-to-music, sensory-regulation, and bidirectional synthesis — as 5 sensory-low-stimulation animal-partner characters Chroma introduces ONLY in the 16 question kits (creative-sandbox modes stay cast-free per partial-DN pattern). The cast is autism-affirming in every framing decision: no 'right perception', no 'good vs bad creation', no scoring, no leaderboards.",
      "members": [
        {
          "name": "Hue",
          "role": "Color → sound — the moth-tween who treats every color as a sound waiting to be heard ('what color is this? Now what does it sound like to YOU?')"
        },
        {
          "name": "Pitch",
          "role": "Sound → color — the patient axolotl-tween who treats every sound as a color waiting to be seen ('there's no wrong answer')"
        },
        {
          "name": "Brush",
          "role": "Drawing-as-music — the focused sloth-tween who treats slowness as its own kind of music ('slow strokes, long sounds; fast strokes, short sounds — all correct')"
        },
        {
          "name": "Lull",
          "role": "Sensory regulation + panic-button companion — the hedgehog-elder who treats every overwhelm-moment as completely valid ('too much? Less is enough; quiet is also creating')"
        },
        {
          "name": "Float",
          "role": "Bidirectional synthesis — the manatee-tween who treats both-at-once as integration, not 'advanced' mode ('drawing makes music; music makes drawing; both, at the same time, going both ways')"
        }
      ]
    },
    "longTagline": "SynaForge is a visual-music synesthesia creative tool for autistic and other neurodivergent children ages 9-14 where drawing produces music and music produces visual art simultaneously. Players explore the connection between color, shape, and sound through bidirectional cross-modal mappings they can customize at any time.",
    "features": [
      {
        "name": "How to Use",
        "description": "1. Choose a mode from the home screen: Draw to Hear, Hear to See, or Both at once"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "tableforge",
    "name": "TableForge",
    "tagline": "Master probability, strategy, and design thinking by creating physical board games",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/tableforge/icon-sm.webp",
    "iconHeroPath": "/apps/tableforge/icon.webp",
    "mascotPath": "/apps/tableforge/mascot.webp",
    "mentor": "Blueprint",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "TableForge's 5-character cast embodies tabletop game-design primitives — dice + randomness as design craft (Bones), cards + hidden information (Hand), turn-structure + action economy (Move), playtest + iteration (Trial), and theme-mechanic integration (Theme — Habgood intrinsic-integration anchor). Blueprint (mentor preserved — code + site aligned) frames each primitive; cast embodies them at kid-table-with-printed-games scale (NEVER casino / gambling mascotization; NEVER 'designer-as-auteur' framing). Gambling-adjacency gate enforced (CRITICAL — UNIQUE to TableForge in Wave 26; inherits ChanceForge Wave 4 verbatim): Bones structurally frames dice as DESIGN CRAFT not BETTING; cast NEVER uses casino register (no chips / no jackpot / no betting / no high-roller / no luck-is-skill); kit 1 explicitly teaches 'designed-randomness has a JOB — fairness / tension / suspense / variability — not casino-thrill'; static-response gating for 'gambling games' / 'bet on dice' / 'casino design' prompts NEVER reaches FoundationModels (Blueprint surface filter); kit 11 (Theme + Mechanic) explicitly contrasts 'theme that does work' vs 'theme as flavor decoration' (the casino-skin problem in game-design pedagogy). Iteration-shame gate enforced (CRITICAL — co-anchor; inherits LevelForge Wave 22 Probe + MakerForge Wave 19 Try): Trial's 'first playtest is supposed to fail' load-bearing; cast NEVER frames failed-playtest as designer-failure. Cultural-appropriation gate (Theme-specific): patchwork theme-cloak uses abstract geometric patterns ONLY — NO mahjong / go / pachisi / kabuki / specific national symbols mascotized; theme content honors-not-claims when global game traditions surface (kit 13). External child-game-design-pedagogy + game-ethics + gambling-pedagogy sensitivity reviewer RECOMMENDED ($300-$500) for kit 1 + kit 11 + kit 13.",
      "members": [
        { "name": "Bones", "role": "Dice + randomness + probability — chance is design craft, NOT betting; gambling-adjacency gate anchor" },
        { "name": "Hand", "role": "Cards + hidden information — what-you-HOLD is information; what-you-SHOW is a different question" },
        { "name": "Move", "role": "Turn-structure + action economy — every turn is a question and an answer; turn-as-question framing" },
        { "name": "Trial", "role": "Playtest + iteration — what-they-DID matters more than what-they-SAID; first-playtest-supposed-to-fail framing" },
        { "name": "Theme", "role": "Game-mechanic + theme integration — the-game-IS-its-mechanics; Habgood intrinsic-integration anchor; theme-MUST-do-work framing" }
      ]
    },
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    }
  },
  {
    "slug": "taleforge",
    "name": "TaleForge",
    "tagline": "A multiplayer collaborative world-building and storytelling game where players co-create fantasy/sci-fi worlds in real-time using a tile-based map editor, then explore them as characters with AI-generated narrative events, NPC dialogue, and emergent storylines. Think \"Dawn of Worlds meets Minecraft meets AI Dungeon\" -- but native iOS with spatial computing support.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/taleforge/icon-sm.webp",
    "mascotPath": "/apps/taleforge/mascot.webp",
    "mentor": "Loom",
    "implementing": true,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "TaleForge's 5-character cast embodies STORYTELLING PRIMITIVES (NOT real cultural traditions) per LoreQuest Wave 5 mythic-distance precedent — Hook scaffolds opening-as-contract, Spine scaffolds character-as-tension (wants vs fears vs contradictions), Bough scaffolds world-coherence-as-promise, Echoes scaffolds voice-as-listening, Glimmer scaffolds revision-as-second-look. Loom (the existing AI collaborative mentor) introduces and references each primitive. Cultural-representation gate enforced (CRITICAL — load-bearing for TaleForge in Wave 28): world-building drifts EASILY into appropriation; cast establishes MYTHIC DISTANCE via fantasy primitives ONLY (NO kimono / kente / headdress / specific national dress / real religious symbols / named real deities); cast NEVER speaks AS or FROM any real-world cultural tradition; real cultural-tradition appreciation lives in kit 11 (Adaptation + Transmedia) with EXPLICIT community-source citation per `.claude/rules/trauma-informed-content.md`. AI NPC generation guardrails MUST include static-response gating for 'make my world's people EXACTLY like [real culture]' prompts → routes to 'let's invent something INSPIRED by that, and credit the inspiration'. Cast pronouns 'they/them'; all 5 non-human in invented-fantasy garb. External cultural-sensitivity reviewer RECOMMENDED ($500-$800) for kit 7 (Genre Writing — touches real cultural genres) + kit 11 (Adaptation). Bough SOFT collision with LinguaQuest Wave 5 cast allowed per registry rule 3 (different role / domain / visual register).",
      "members": [
        { "name": "Hook", "role": "Story elements — opening as contract with the reader; the first line is a promise; 'Make me lean in. Then keep me leaning.'" },
        { "name": "Spine", "role": "Character creation — character-as-tension (wants × fears × contradictions); 'Every character has a NO they keep saying YES to.'" },
        { "name": "Bough", "role": "World-building — coherence-rules-as-promises-the-world-keeps; what the world ALWAYS does + NEVER does (SOFT collision with LinguaQuest Bough — different role/domain/visual)" },
        { "name": "Echoes", "role": "Voice + dialogue — voice as listening-craft NOT inherited-by-birth; if two characters could say it, neither one really did" },
        { "name": "Glimmer", "role": "Revision + reflection — first draft as DATA not failure; the second look that makes the first attempt useful" }
      ]
    },
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "iconHeroPath": "/apps/taleforge/icon.webp",
    "longTagline": "TaleForge is an AI collaborative storytelling and world-building app for ages 14 and up where players co-create fantasy and sci-fi worlds with a tile-based map editor, then explore them as characters with AI-generated narrative events, NPC dialogue, and emergent storylines.",
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 3
    }
  },
  {
    "slug": "tectonicforge",
    "name": "TectonicForge",
    "tagline": "Pilot a drill into Earth's mantle, watch continents drift across 250 million years, trigger earthquakes and volcanic eruptions, and become a geological hazard engineer protecting cities from the dynamic planet beneath your feet.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/tectonicforge/icon-sm.webp",
    "mascotPath": "/apps/tectonicforge/mascot.webp",
    "mentor": "Geo",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "TectonicForge's 5-character cast embodies the plate-tectonic + crustal-motion + magma-behavior primitives — convergent/subduction (Sink), divergent/mid-ocean-ridge (Spread), transform/fault (Slide), volcanism + magma chemistry (Vent), seismology + earthquake preparedness (Tremor). Geo (mentor preserved; registry-confirmed pre-existing) frames each primitive. SITE entry mentor field added in Wave 31 (was missing). TRAUMA-INFORMED CONTENT FLAG TRUE per .claude/rules/trauma-informed-content.md (earthquake + volcano content; kids affected by recent disasters may carry trauma). Earth-as-storyteller-across-time framing: Sink/Spread/Slide patient + Vent evidence-of-internal-state + Tremor preparedness-without-fear. Cast NEVER ranks disasters; NEVER 'biggest ever' gamification. Real-world events (Tōhoku/Christchurch/Pompeii/Krakatoa/Mt-St-Helens/Lisbon/Concepción/Nepal/Ridgecrest) credited BY NAME with respect. Off-ramps required for kit 7+11+12. External \\$300-\\$500 disaster-preparedness-pedagogy reviewer RECOMMENDED for kit 7 (preparedness) + kit 11 (hazard engineering) + kit 12 (real-world case studies).",
      "members": [
        { "name": "Sink", "role": "Convergent/subduction boundary — the heavier plate finds its way down; it takes a long time; that's okay" },
        { "name": "Spread", "role": "Divergent boundary + new crust — when something pulls apart, something new is forming in the middle" },
        { "name": "Slide", "role": "Transform boundary + stored energy — two plates sliding past; they catch, they hold, then they let go" },
        { "name": "Vent", "role": "Volcanism + magma chemistry — eruptions tell us what was happening below" },
        { "name": "Tremor", "role": "Seismology + earthquake preparedness — earthquakes are the Earth telling its story; we can read the lines; we can be ready" }
      ]
    },
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/tectonicforge/icon.webp",
    "longTagline": "TectonicForge is a plate tectonics, earthquake, and volcano science lab where you drill into the Earth's interior, watch continents drift across 250 million years, trigger earthquakes and volcanic eruptions, and engineer geological hazard solutions to protect simulated cities. Your AI mentor Geo con",
    "features": [
      {
        "name": "Earth Interior Explorer",
        "description": "Tap to drill down through the Earth's layers. Discover the crust, upper mantle, lower mantle, outer core, and inner core. Each layer has different properties —"
      },
      {
        "name": "Plate Motion Lab",
        "description": "Drag tectonic plates and watch what happens when they collide, separate, or slide past each other. Convergent boundaries create mountains and volcanoes. Diverge"
      },
      {
        "name": "Earthquake Simulator",
        "description": "Trigger earthquakes and watch seismic waves propagate outward from the epicenter. See P-waves (fast, compression) arrive before S-waves (slower, shearing) at di"
      },
      {
        "name": "Volcano Science Lab",
        "description": "Adjust magma composition (silica and gas content) to control eruption style. Low silica creates gentle Hawaiian-style lava flows. High silica and high gas conte"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "terravoyage",
    "name": "TerraVoyage",
    "tagline": "Kids ages 10-14 traverse a stylized world map, identify locations through environmental and cultural clues, solve geography puzzles, and build a \"World Journal\" of discoveries. Players explore SpriteKit tile-map regions, interact with culturally-accurate NPCs powered by FoundationModels, and deduce region identities from architecture, flora, language, and climate clues.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/terravoyage/icon-sm.webp",
    "mascotPath": "/apps/terravoyage/mascot.webp",
    "mentor": "Compass",
    "implementing": true,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "TerraVoyage's distributed-narrative cast embodies the 5 primitives of curious-respectful-traveler thinking — open exploration, journey/migration, cultural-heritage listening, non-extractive cultural exchange, and planetary-scale interconnection — as 5 animal-traveler characters Compass introduces across the 16 question kits. Cultural-representation gate is foregrounded; Origin's 'before you visit, learn whose home this is; before you name, learn what it's already called' is load-bearing; NO colonial-explorer iconography, NO specific-culture mascotization, NO 'discovered by' framing.",
      "members": [
        {
          "name": "Roam",
          "role": "Open exploration + curiosity — the otter-tween with pocket-tunic full of found things who teaches that curiosity-without-destination is a valid mode ('curious feet learn more than busy feet')"
        },
        {
          "name": "Trek",
          "role": "Movement + migration — the red-deer-tween in polysemic wool wrap with pack-and-walking-stick who dignifies all journey-reasons equally — seasons / scarcity / opportunity / safety / curiosity ('some journeys are choice; some are not; every traveler deserves welcome')"
        },
        {
          "name": "Origin",
          "role": "Cultural-heritage anchor — the heron-elder with bundle of family-trees and oral-history-cards who teaches that 'discovery' is a colonial word and every place has been home for someone, often for millennia ('before you visit, learn whose home this is; before you name, learn what it's already called')"
        },
        {
          "name": "Braid",
          "role": "Cultural exchange — the weaverbird-tween with small loom-pouch whose threads-from-many-places stay distinct AND together; teaches anti-appropriation, exchange-not-extraction ('threads from many places — each keeps its color; together they make something new — together, not apart')"
        },
        {
          "name": "Reach",
          "role": "Planetary scale + interconnection — the albatross-elder with continent-patterned wings who teaches Earth-as-one-system, climate-justice, environmental-equity framing ('far is closer than you think; everywhere is somewhere's neighbor')"
        }
      ]
    },
    "iconHeroPath": "/apps/terravoyage/icon.webp",
    "longTagline": "TerraVoyage is a geography and world cultures exploration adventure for ages 10-14 where players traverse a stylized world map, identify locations through environmental and cultural clues, solve geography puzzles, and build a World Journal of discoveries — turning the whole planet into a game world.",
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    }
  },
  {
    "slug": "terrawatch",
    "name": "Terrawatch",
    "tagline": "Gamified citizen science where players contribute real data to scientific databases (iNaturalist, Globe Observer) while earning XP and completing curriculum-aligned quests.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/terrawatch/icon-sm.webp",
    "mascotPath": "/apps/terrawatch/mascot.webp",
    "mentor": "Scout",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "TerraWatch's distributed-narrative cast embodies the 5 primitives of citizen-science practice — observation/noticing, structured recording, geolocation, biodiversity counting, and change-over-time tracking — as 5 animal-field-scientist characters Scout introduces across the 16 question kits. Eco-anxiety gate is foregrounded; Trend's 'today is one dot; many dots make a line; lines can bend; your dot helps the line' is load-bearing, with hopeful-trend data structurally present (fish populations recovering, ozone hole shrinking) alongside worrying trends. NO doom-only framing; NO 'real scientist' hierarchy; agency-positive throughout.",
      "members": [
        {
          "name": "Spot",
          "role": "Observation + noticing — the chickadee-tween perched on a branch who teaches slow-noticing as the first scientific skill ('look once, then look again, slower; the second look usually finds more')"
        },
        {
          "name": "Note",
          "role": "Structured recording — the beaver-tween in notebook-pocket vest who teaches fact-vs-inference discipline ('write what you saw; then write what you think it means; don't mix them')"
        },
        {
          "name": "Pin",
          "role": "Geolocation + spatial-data discipline — the hummingbird-tween with pin-tail-feather who teaches that location-stamps + time-stamps make observations useful to other scientists ('where matters; when matters; the same plant in two places is two stories')"
        },
        {
          "name": "Census",
          "role": "Biodiversity counting + sampling — the raccoon-tween with tally-pattern vest who treats unglamorous repeated counting as the actual magic of science ('one bird seen is a moment; ten birds seen over ten days is a pattern; counting is the magic')"
        },
        {
          "name": "Trend",
          "role": "Change-over-time + agency-positive climate framing — the tortoise-elder with tree-ring shell and folding-graph showing both worrying AND hopeful trends; carries the eco-anxiety-gate anchor ('today is one dot; many dots make a line; lines can bend; your dot helps the line')"
        }
      ]
    },
    "iconHeroPath": "/apps/terrawatch/icon.webp",
    "longTagline": "TerraWatch is a gamified citizen science platform for ages 9-14 where students contribute to real scientific projects by collecting field observations with their device's built-in sensors, earning XP and badges while building authentic scientific skills used by professional researchers.",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "trailforge",
    "name": "TrailForge",
    "tagline": "Players are dropped into different wilderness biomes and must use real outdoor skills to survive and thrive. Build shelters, start fires with friction, purify water, navigate by stars, identify edible plants, predict weather, and handle emergencies. The only wilderness survival education app on any platform.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/trailforge/icon-sm.webp",
    "mascotPath": "/apps/trailforge/mascot.webp",
    "mentor": "Ranger",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "TrailForge's 5-character cast embodies OUTDOOR-SKILL PRIMITIVES + LAND-RESPECT framing — Way scaffolds orientation-as-reading-what's-already-there, Shelter scaffolds insulation-as-three-walls (wind + cold-ground + rain), Watch scaffolds weather-as-conversation-already-happening, Tend scaffolds body-priority-order (water → warmth → food), Listen scaffolds trail-as-already-known + land-respect. Ranger (the existing AI mentor) introduces and references each primitive. Land-relationship gate enforced (CRITICAL — load-bearing for TrailForge in Wave 28 per Whyte 2024 + Kimmerer 2013 + Indigenous Environmental Network 2024): trail / outdoor content unavoidably touches Indigenous land-stewardship traditions; cast NEVER speaks AS or FROM any Indigenous tradition; Listen's catchphrase ('this trail isn't mine; it was here first') scaffolds tween-appropriate respect-the-trail framing WITHOUT appropriating Indigenous TEK; real Indigenous TEK attributed in KIT METADATA only with proper source citation per Indigenous-led peer-reviewed sources. Cast pronouns 'they/them'; all 5 non-human in generic outdoor-tween garb (NO specific cultural textile / scout-organization uniform / military camo / Indigenous regalia — Listen's wrap is ABSTRACT geometric pattern). Wilderness-emergency content (kit 4 first-aid + kit 13 signaling-rescue + kit 14 winter survival) carries off-ramp affordances + content warnings + base-rate framing ('most wilderness experiences are safe and joyful — these skills are for the rare moment they're needed'). Tend SOFT collision with CreatureCare Wave 18 + ForgePortal Wave 27 + Listen SOFT collision with OriginForge Wave 23 — both DELIBERATELY shared cross-cluster design language; allowed per registry rule 3. External Indigenous-TEK + outdoor-safety-pedagogy sensitivity reviewer RECOMMENDED ($300-$500) for kit 5 (plants) + kit 8 (LNT) + kit 12 (terrain-specific).",
      "members": [
        { "name": "Way", "role": "Navigation + orienteering — reading-what's-already-there orientation; 'Stop. Look. Find one thing you know. Now you have a starting point.'" },
        { "name": "Shelter", "role": "Shelter-building + warmth — three-walls insulation (wind / cold-ground / rain)" },
        { "name": "Watch", "role": "Weather reading + observation — sky-as-conversation-already-happening; notice the moment it changes" },
        { "name": "Tend", "role": "Water + plants + body-care — survival-as-attentiveness to body priority-order (water first, then warmth, then food); DELIBERATELY shared design with CreatureCare + ForgePortal Tend" },
        { "name": "Listen", "role": "Trail-listening + land-respect — every trail was here before you; credit the source; leave no trace; DELIBERATELY shared design with OriginForge Listen" }
      ]
    },
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/trailforge/icon.webp",
    "longTagline": "TrailForge is a wilderness survival and outdoor skills simulator for ages 9-14 where players learn real survival techniques across diverse biomes — building shelters, starting fires with friction, purifying water, navigating by stars, identifying edible plants, predicting weather, and handling emerg",
    "hasUserGuide": true,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "truthquest",
    "name": "TruthQuest",
    "tagline": "Players are junior journalists at the Truth Tribune, investigating viral claims, social media posts, and news articles. Using real journalistic techniques (source verification, reverse image search, statistical analysis), players determine what is true, misleading, or completely fabricated -- building critical thinking skills for the AI misinformation age.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/truthquest/icon-sm.webp",
    "mascotPath": "/apps/truthquest/mascot.webp",
    "mentor": "Veritas",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "TruthQuest's 5-character cast embodies the foundational epistemic practices per Stanford SHEG Civic Online Reasoning + News Literacy Project + Lewandowsky 2024 prebunking framework — claim-identification (Claim), credibility-evaluation (Weigh), evidence-traceback (Trace), belief-revision (Update), and epistemic-humility (Wonder). Veritas (mentor preserved; Latin 'truth'; non-religious classical-philosophy register) frames each primitive; cast embodies them at school-research / family-dinner-claim-checking / community-rumor scale (NEVER professional-fact-checker / PhD-philosopher framing). Conspiracy-content trauma gate enforced (CRITICAL — STRONGEST in Wave 25 alongside MedicQuest medical-trauma): cast NEVER engages specific real conspiracy theories — ALL examples FICTIONAL or ABSTRACT structural-analogs (per Lewandowsky 2024 prebunking-via-structural-analog recommendation). Trust-erosion gate enforced: cast NEVER drifts into 'trust nothing' cynicism; Wonder carries 'trust CALIBRATED to evidence + source' framing. Religious-belief sensitivity gate: cast distinguishes EMPIRICAL from BELIEF claims (kit 12); fictional-religion examples ONLY. External sensitivity reviewer with epistemology-pedagogy + adolescent-conspiracy-resistance + comparative-religion expertise REQUIRED before Wave 25.2 art generation.",
      "members": [
        { "name": "Claim", "role": "Claim-identification — what EXACTLY is being asserted? distinguish claim from opinion from feeling from prediction" },
        { "name": "Weigh", "role": "Credibility-evaluation — who's in a position to KNOW? what stake? calibration not verdict (shared design language with DebateForge Weigh)" },
        { "name": "Trace", "role": "Evidence-traceback — where does this claim ORIGINATE? what's the chain? open four tabs; follow it back" },
        { "name": "Update", "role": "Belief-revision — being WRONG is how knowledge MOVES; visibly carry old-guess and new-guess as data (shared design language with DebateForge Yield)" },
        { "name": "Wonder", "role": "Epistemic-humility — 'I don't know yet' is the START of knowing; trust calibrated to evidence; counter-cynicism" }
      ]
    },
    "implementing": true,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/truthquest/icon.webp",
    "longTagline": "TruthQuest is a media literacy and fact-checking game for ages 9-14 where players investigate viral claims, social media posts, and news articles using real journalistic techniques — source verification, reverse image search simulation, and statistical analysis — to determine what is true, misleadin",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "venturequest",
    "name": "VentureQuest",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "VentureQuest's 5-character cast embodies the entrepreneurship-practice primitives — opportunity recognition (Spot), customer discovery (Listen), lean experimentation (Build), pitch craft (Pitch), ethical decision-making (Weigh). Ledger (mentor) frames each primitive; cast embodies them at first-venture scale (lemonade-stand → food-truck register, NEVER unicorn-billionaire scale). Model-billionaire framing gate + wealth-shame gate enforced: cast NEVER frames success as guaranteed-by-effort; explicitly models that ventures fail often + that failure isn't personal shame.",
      "members": [
      { "name": "Spot", "role": "Opportunity recognition — noticing problems worth solving for real people" },
      { "name": "Listen", "role": "Customer discovery — asking + waiting + watching, never guessing" },
      { "name": "Build", "role": "Lean experimentation — rough first drafts, fast iteration, failure-as-learning" },
      { "name": "Pitch", "role": "Pitch craft — plain-language story, inviting people in, never pressuring" },
      { "name": "Weigh", "role": "Ethical decision-making — sitting with tradeoffs, holding stakeholder views" }
      ]
    },
    "tagline": "Players start and grow businesses from scratch -- beginning with a lemonade stand and progressing through food trucks, retail shops, tech startups, and enterprises. Make real business decisions about pricing, marketing, hiring, inventory, and competition. Different from MintQuest (personal finance): this teaches how businesses actually work. The only iOS-native business simulation for ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/venturequest/icon-sm.webp",
    "mascotPath": "/apps/venturequest/mascot.webp",
    "mentor": "Ledger",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/venturequest/icon.webp",
    "longTagline": "VentureQuest is an entrepreneurship, business simulation, and personal finance education app for ages 9-14 where players ideate products, launch businesses, manage operations, and grow an enterprise while learning market dynamics, customer behavior, budgeting, saving, investing, compound interest, a",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 2
    }
  },
  {
    "slug": "waveforge",
    "name": "WaveForge",
    "tagline": "Visualize sound as a living waveform — tune an oscilloscope, build a speaker from scratch, engineer concert hall acoustics, decode whale songs, and master the physics of vibration that underlies all music and communication.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/waveforge/icon-sm.webp",
    "iconHeroPath": "/apps/waveforge/icon.webp",
    "mascotPath": "/apps/waveforge/mascot.webp",
    "implementing": true,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "WaveForge teaches wave physics as a **family of wave behaviors** — frequency/amplitude/wavelength, interference, resonance, Doppler, standing waves, and the visual/audio manifestations of each.",
      "members": [
        {
          "name": "Pulse",
          "role": "Wave basics (frequency + amplitude + wavelength)"
        },
        {
          "name": "Meet",
          "role": "Interference (constructive + destructive)"
        },
        {
          "name": "Ring",
          "role": "Resonance (natural frequency response)"
        },
        {
          "name": "Drift",
          "role": "Doppler / wave-source motion"
        },
        {
          "name": "Loop",
          "role": "Standing waves + harmonics"
        }
      ]
    },
    "longTagline": "WaveForge is an acoustics and sound physics laboratory where you can see sound! Use the built-in oscilloscope to visualize your voice as a living waveform, tune vibrating strings to find resonance, design the acoustics of a concert hall, and decode whale songs using spectrograms. Your AI mentor Soni",
    "features": [
      {
        "name": "Oscilloscope Lab",
        "description": "Tap the microphone button and make a sound. Your voice appears as a live waveform on the oscilloscope screen. Adjust the frequency and amplitude sliders to see"
      },
      {
        "name": "Resonance & Standing Waves",
        "description": "Experiment with a virtual vibrating string. Adjust the tension, length, and density to find the fundamental frequency and its harmonics. Watch nodes and antinod"
      },
      {
        "name": "Doppler Effect",
        "description": "Watch what happens to sound waves when a source is moving. See the compression (higher pitch) as the source approaches and the expansion (lower pitch) as it mov"
      },
      {
        "name": "Concert Hall Designer",
        "description": "Design the perfect concert hall by choosing wall materials (wood, carpet, foam, glass) and placing speakers and listeners. Watch sound rays bounce off walls and"
      }
    ],
    "mentor": "Sonic",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "weatherforge",
    "name": "WeatherForge",
    "tagline": "Build weather instruments, track real storms, predict tomorrow's weather, and simulate the forces behind Earth's most powerful phenomena.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/weatherforge/icon-sm.webp",
    "mascotPath": "/apps/weatherforge/mascot.webp",
    "mentor": "Gale",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "WeatherForge teaches meteorology as a **family of atmospheric processes** — pressure systems, air masses, fronts, storm formation, water cycle, and forecasting reasoning.",
      "members": [
        {
          "name": "Press",
          "role": "Air pressure & circulation (highs/lows + wind direction)"
        },
        {
          "name": "Mass",
          "role": "Air masses & fronts (warm vs cold, moist vs dry)"
        },
        {
          "name": "Loft",
          "role": "Water cycle & lifting (evaporation, condensation, precipitation)"
        },
        {
          "name": "Brew",
          "role": "Storm formation (instability + moisture + lifting)"
        },
        {
          "name": "Read",
          "role": "Forecasting & reasoning (synthesizing data into prediction)"
        }
      ]
    },
    "iconHeroPath": "/apps/weatherforge/icon.webp",
    "longTagline": "WeatherForge is a meteorology and storm science lab for ages 9-14 where players build weather instruments, track real storms using live weather data, predict tomorrow's weather, and simulate the forces behind Earth's most powerful phenomena — hurricanes, tornadoes, thunderstorms, and blizzards.",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "wellnessforge",
    "neurodivergentSupport": true,
    "neurodivergentDesignTraits": ["Strength-based", "Co-regulation", "Communication-scaffolding", "Trauma-informed"],
    "neurodivergentEvidence": [
      { "aspect": "Botvin Life Skills Training (LST) framework", "basis": "Evidence-based, not fear-based" },
      { "aspect": "Stress-regulation primitives cast member (Steady)", "basis": "Breath / ground / reframe before deciding" },
      { "aspect": "Crisis-resource awareness cast member (Ask)", "basis": "Trusted-adult identification" },
      { "aspect": "External sensitivity reviewer for substance-use kits", "basis": "Adolescent-mental-health envelope (recommended)" }
    ],
    "name": "WellnessForge",
    "tagline": "Build health literacy through nutrition analysis, evidence-based substance abuse prevention, first aid simulations, and social-emotional learning — using the research-proven Life Skills Training model rather than fear-based approaches. Ages 9-14.",
    "vertical": "academics",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "WellnessForge's cast embodies the Life Skills Training (Botvin LST) primitives — health-decision craft as practiced moves, not lectured-at content. Cast supports mentor Vita through nutrition-analysis, substance-resistance, first-aid, mental-health, and safety-decision kits. Cluster sibling to MindForge (SEL) + FocusForge (EF) + InclusionForge (perspective) + RuptureRepair (repair) + TempCheck (attunement) — heart-harbor zone register applies. External sensitivity reviewer recommended for kits touching substance-use + crisis-resource surfacing.",
      "members": [
        { "name": "Read", "role": "Nutrition-label literacy — what the package actually says vs. claims" },
        { "name": "Pause", "role": "Refusal craft — practiced 'no' moves under social pressure" },
        { "name": "Steady", "role": "Stress-regulation primitives — breath / ground / reframe before deciding" },
        { "name": "Mend", "role": "First-aid response — assess / call / care framing" },
        { "name": "Ask", "role": "Help-seeking — trusted-adult identification + crisis-resource awareness" }
      ]
    },
    "heroColor": "#81C784",
    "iconPath": "/apps/wellnessforge/icon-sm.webp",
    "mascotPath": "/apps/wellnessforge/mascot.webp",
    "mentor": "Vita",
    "implementing": true,
    "standards": [
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/wellnessforge/icon.webp",
    "longTagline": "WellnessForge is a health, nutrition, and life skills academy for ages 9-14 where students learn evidence-based health education — nutrition analysis, first aid, mental health skills, personal health habits, and safety decisions — aligned to National Health Education Standards (NHES 1-8). Parents ca",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "wildlens",
    "name": "WildLens",
    "tagline": "Photograph real animals with your camera, identify species using on-device CoreML, and learn why they matter through food webs, habitat relationships, and ecosystem interconnections. The differentiator: not just what it is — but why it matters. Ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/wildlens/icon-sm.webp",
    "mascotPath": "/apps/wildlens/mascot.webp",
    "mentor": "Lens",
    "implementing": true,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/wildlens/icon.webp",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "WildLens teaches wildlife observation through **photograph → identify → understand-why** loops.",
      "members": [
        {
          "name": "Track",
          "role": "Animal sign reading (footprints, scat, scrapes, scent)"
        },
        {
          "name": "Roost",
          "role": "Habitat behavior (where & why animals rest, nest, den)"
        },
        {
          "name": "Brood",
          "role": "Social structure (family groups, herds, flocks, solitary)"
        },
        {
          "name": "Range",
          "role": "Territory & migration (where animals live, where they go)"
        },
        {
          "name": "Call",
          "role": "Communication (vocalization, body language, signals)"
        }
      ]
    },
    "longTagline": "WildLens is a wildlife discovery and ecology explorer for ages 9-14 where players photograph real wildlife, identify species with on-device AI, learn ecology through interactive food webs and habitat simulations, and collect observations in a digital field journal — aligned to NGSS middle school lif",
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "wonderforge",
    "name": "WonderForge",
    "tagline": "Become a science magician — watch \"impossible\" demonstrations, form hypotheses, reveal the physics and chemistry behind each trick, then perform your own science shows.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/wonderforge/icon-sm.webp",
    "mascotPath": "/apps/wonderforge/mascot.webp",
    "mentor": "Marvel",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "WonderForge's 5-character cast embodies the foundational discrepant-events / science-magic pedagogy primitives — surprise-noticing (Gasp, expectation-violation as the wonder-moment), hypothesis-from-surprise (Mull, the wonder-pedagogy inversion where guesses FOLLOW surprise), mechanism-detection (Spy, 'every wonder has a HOW'), explanatory-click (Crack, 'the wonder GROWS when you understand'), and perform-it-yourself (Encore, teaching-someone-else as the test of understanding). Marvel (mentor; renamed from 'Spark' which collided with the Spark & Anvil studio brand) frames each primitive; cast embodies them at school-science-fair / community-makerspace scale (NEVER stage-illusionist / 'I-can-do-magic-you-can't' gatekeeping). Mystification gate enforced: cast NEVER frames anything as 'magical and unknowable'; awe + investigation are structurally COMPATIBLE; Spy's 'every wonder has a HOW' is load-bearing across every cast appearance; Crack's 'the wonder doesn't die when you understand — it GROWS' counter-codes any anti-science framing; static-response gating for 'maybe it's just magic' / 'we'll never know' surrender signals throughout.",
      "members": [
        { "name": "Gasp", "role": "Discrepant-event noticing — expectation-violation as the wonder-moment that opens inquiry" },
        { "name": "Mull", "role": "Hypothesis-from-surprise — sit with the puzzle, then say what you think MIGHT be happening" },
        { "name": "Spy", "role": "Mechanism detection — every wonder has a HOW; look for the hidden variables" },
        { "name": "Crack", "role": "Explanatory click — the wonder doesn't die when you understand; it GROWS" },
        { "name": "Encore", "role": "Perform it yourself — if you can DO the trick knowing how it works, you've understood" }
      ]
    },
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/wonderforge/icon.webp",
    "longTagline": "WonderForge is a science magic lab where you watch \"impossible\" demonstrations, figure out the science behind each trick, and then perform your own science shows! Every trick has real physics or chemistry behind it. First you wonder how it works, then you discover why, and then you do it yourself.",
    "features": [
      {
        "name": "Watch the Trick",
        "description": "Each activity starts with a surprising demonstration. Water flows uphill? An egg squeezes into a bottle? Watch carefully and try to figure out what is happening"
      },
      {
        "name": "Form a Hypothesis",
        "description": "Before the answer is revealed, make your best guess about what is causing the \"magic.\" Is it air pressure? Chemical reactions? Light? This is how real scientist"
      },
      {
        "name": "Discover the Science",
        "description": "The reveal shows you exactly what physics or chemistry makes the trick work. Learn the real science behind the wonder, with clear explanations and diagrams."
      },
      {
        "name": "Perform Your Own Show",
        "description": "Once you understand the science, practice performing the trick yourself in the virtual practice stage. Then create a full science show by combining multiple tri"
      }
    ],
    "hasUserGuide": true,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "lyricforge",
    "name": "LyricForge",
    "tagline": "Write the Songs You Hear in Your Head — tween songwriting studio where the lyric is the protagonist; form scaffolds + on-device rhyme/meter + AI Socratic lyric collaborator (Pip).",
    "vertical": "steam",
    "heroColor": "#E88774",
    "iconPath": "/apps/lyricforge/icon-sm.webp",
    "iconHeroPath": "/apps/lyricforge/icon.webp",
    "mascotPath": "/apps/lyricforge/mascot.webp",
    "mentor": "Pip",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "LyricForge's 5-character supporting cast embodies lyric-craft primitives — rhyme / vowel-echo (Chime), meter / cadence (Step), hook / chorus anchor (Holler), bridge / off-the-path (Turn), and image / sensory anchor (Spark). Following the MotifLab Wave 7 hero-as-protagonist pattern, Pip (the sparrow mascot + AI Socratic lyric collaborator) remains the protagonist + relational anchor; cast members are Pip's meadow bench-mates — birds and creatures Pip introduces from his songwriting circle. Cast fades by kit 12 so kits 13-16 (multi-form anthology + cross-cluster export) read as integrative. Mascotizing gate: NO character is named after the craft term — Chime (not 'Rhyme'), Step (not 'Meter'), Holler (not 'Hook'), Turn (not 'Bridge'), Spark (not 'Image'). Echo → Chime + Hook → Holler renames in this batch resolve cumulative-cast collisions.",
      "members": [
        { "name": "Chime", "role": "Rhyme / vowel-echo — chickadee-tween whose listening-cupped wing catches and returns rhyming partners" },
        { "name": "Step", "role": "Meter / cadence — rabbit-tween whose hop-rhythm enacts the stressed-syllable pattern" },
        { "name": "Holler", "role": "Hook / chorus anchor — bullfinch-tween with megaphone who picks ONE line and makes it sing-back-loud" },
        { "name": "Turn", "role": "Bridge / off-the-path — crow-tween in a long traveling coat who walks the lyric into a new feeling and earns the return" },
        { "name": "Spark", "role": "Image / sensory anchor — firefly-tween whose abdomen brightens ONLY on specific concrete word-choices (dim on abstractions)" }
      ]
    },
    "standards": [
      "NCAS MU:Cr1-Cr3",
      "CCSS ELA W.6-8.3",
      "CCSS ELA RL.6-8.4"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "haikuquest",
    "name": "HaikuQuest",
    "tagline": "Form-Scaffold Poetry for Tweens — haiku, tanka, cinquain, limerick with syllable counters, cultural-context teaching, and AI Socratic refinement (Cherry).",
    "vertical": "academics",
    "heroColor": "#F4A5B8",
    "iconPath": "/apps/haikuquest/icon-sm.webp",
    "iconHeroPath": "/apps/haikuquest/icon.webp",
    "mascotPath": "/apps/haikuquest/mascot.webp",
    "mentor": "Cherry",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "HaikuQuest's 4-character supporting cast embodies form-craft primitives — syllable count / count-discipline (Count), kireji / productive break (Pause), kigo / season-word / anchoring image (Lantern), and brevity / saying-less (Trim). Following the MotifLab Wave 7 hero-as-protagonist pattern, Cherry (the cherry-blossom mascot + AI Socratic poetry coach + cultural-tradition holder) remains the protagonist + relational anchor; cast members are woodland-grove creatures Cherry travels with across the seasons. Cast fades by kit 12 so kits 13-16 (anthology + cross-form + free-form) read as integrative. CRITICAL cultural-sensitivity gate (Japanese poetic tradition): NO character is named after a Japanese term (no 'Kigo', no 'Kireji'); NO character is named after a historical poet (Bashō / Buson / Issa / Shiki / Crapsey / Lear cited in kit metadata + framing copy as historical practitioners — NEVER mascotized); Japanese terms taught explicitly in kit framing copy attributed to Japanese tradition; sensitivity reader RECOMMENDED before any external playtest. Kigo → Lantern rename in this batch resolves the mascotizing-the-tradition-term risk.",
      "members": [
        { "name": "Count", "role": "Syllable count / count-discipline — magpie-tween whose beak-tap enacts the rhythmic underpinning of every counted form" },
        { "name": "Pause", "role": "Kireji / cut / productive break — snowy-egret-tween whose perpetually-mid-step body IS the kireji in physical form" },
        { "name": "Lantern", "role": "Season-word / anchoring image — chipmunk-tween whose wooden lantern visibly shifts color with the season" },
        { "name": "Trim", "role": "Brevity / saying-less — red-squirrel-tween with brass scissors who snips redundant words to find the smaller-stronger version" }
      ]
    },
    "standards": [
      "CCSS ELA W.6-8.3",
      "CCSS ELA RL.6-8.4",
      "NCAS LA:Cr1-Cr3"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "characterforge",
    "name": "CharacterForge",
    "tagline": "Character-Craft Workshop for Tweens — build the people who could be in stories. Character sheet, arc tracker, relationship graph, voice-consistency feedback (Ink).",
    "vertical": "academics",
    "heroColor": "#3D5A80",
    "iconPath": "/apps/characterforge/icon-sm.webp",
    "iconHeroPath": "/apps/characterforge/icon.webp",
    "mascotPath": "/apps/characterforge/mascot.webp",
    "mentor": "Ink",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "CharacterForge's 4-character supporting cast embodies character-craft primitives — want / engine (Beacon), fear / brake (Crouch), contradiction / depth (Eight), and voice / signature (Click). Following the MotifLab Wave 7 hero-as-protagonist pattern, Ink (the fountain-pen mascot + AI character-craft coach) remains the protagonist + relational anchor; cast members are Ink's inkwell friends — paper-spilled animal companions Ink keeps in his notebook. Cast fades by kit 12 so kits 13-16 (relationship graph + anthology + cross-cluster export) read as integrative. Meta-tension design: CharacterForge teaches HOW to build characters; each cast member is itself a deliberately well-crafted character exhibit. Mascotizing gate: NO character is named after the primitive — Beacon (not 'Want'), Crouch (not 'Fear'), Eight (not 'Contradiction'), Click (not 'Voice'). Knot → Eight rename in this batch resolves a cumulative-cast collision.",
      "members": [
        { "name": "Beacon", "role": "Want / engine — moth-tween who walks toward a small floating warm-light she can never quite reach (the want IS her motion)" },
        { "name": "Crouch", "role": "Fear / brake — hedgehog-tween who tucks away from one specific wooden-door icon visible in every scene she appears in" },
        { "name": "Eight", "role": "Contradiction / depth — octopus-tween with eight arms in eight different directions (three forward / three back / two crossed)" },
        { "name": "Click", "role": "Voice / signature — raven-tween in librarian-glasses with a portable typewriter (same idea, different mouth, different feel)" }
      ]
    },
    "standards": [
      "CCSS ELA W.6-8.3.B",
      "NCAS TH:Cr2",
      "NCAS LA:Cr1",
      "CASEL"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "coregrealm",
    "neurodivergentSupport": true,
    "neurodivergentDesignTraits": ["Co-regulation", "Interoception", "Strength-based", "Communication-scaffolding", "Trauma-informed"],
    "neurodivergentEvidence": [
      { "aspect": "ForgeKit 0.86 CoRegulationEngine 6-move palette as cast", "basis": "Match / Hum / Sway / Beside / Word / Patient" },
      { "aspect": "DIR-Floortime-certified sensitivity reviewer REQUIRED", "basis": "$1,000-$1,500 envelope" },
      { "aspect": "Inverse-semantic-pair with MindForge cast", "basis": "Capacity-to-build + move-to-perform load-bearing cross-cluster" },
      { "aspect": "Cyan companion creature (not coach)", "basis": "Role-reversal scaffolding; teaching-role mastery" }
    ],
    "name": "CoRegRealm",
    "tagline": "Co-Regulation Role-Reversal RPG — kid co-regulates a smaller creature companion through dysregulation cycles, learning the regulation primitive through the teacher role (Cyan).",
    "vertical": "dir-fedc",
    "heroColor": "#4FB3A6",
    "iconPath": "/apps/coregrealm/icon-sm.webp",
    "iconHeroPath": "/apps/coregrealm/icon.webp",
    "mascotPath": "/apps/coregrealm/mascot.webp",
    "mentor": "Cyan",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "CoRegRealm's 6-character co-regulation-move cast maps 1:1 to ForgeKit 0.86.0 CoRegulationEngine 6-move palette — affect-matching / vocal co-regulation / rhythmic co-regulation / containment / naming / patience. Cast: Match / Hum / Sway / Beside / Word / Patient. INVERSE-semantic pair with MindForge Wave 32b sibling cast — CoRegRealm cast embodies MOVES THE PLAYER PERFORMS, MindForge cast embodies INTERNAL CAPACITIES TO BUILD. Both apps form load-bearing cross-cluster. Per `coregrealm-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22. Cyan preserved as companion creature (NOT coach per registry). Multiple cast collision-renames applied (Bounce→Sway / Hold→Beside / Name→Word / Wait→Patient). Labsmith generates ~$1.62 cast assets + $1000-1500 DIR-Floortime-certified sensitivity reviewer REQUIRED. Cross-app cameos: Match+Word ↔ MindForge Inside+Settle (load-bearing); Sway ↔ HarmonyForge+BeatForge; Patient ↔ FocusForge Wait+MindForge Settle (load-bearing); Beside ↔ RuptureRepair+TempCheck (presence-as-tool cluster load-bearing).",
      "members": [
        { "name": "Match", "role": "Affect-matching — meet the dysregulation where it is; 'I see you. Right where you are.'" },
        { "name": "Hum", "role": "Vocal co-regulation — gentle vocal-tone modulation; 'Hmm. I'm here.'" },
        { "name": "Sway", "role": "Rhythmic co-regulation — gentle bounce + breath rhythm; 'Slow in. Slow out.'" },
        { "name": "Beside", "role": "Containment — bounded presence without overwhelm; 'Right next to you. Not in front.'" },
        { "name": "Word", "role": "Naming — gently labeling the feeling; 'Maybe it's ___? Or maybe something else.'" },
        { "name": "Patient", "role": "Patience — giving time without rushing; 'Take all the time you need.'" }
      ]
    },
    
    "implementing": false,
    "standards": [
      "DIR/FEDC Capacities 1-2",
      "DIR/FEDC Capacity 9",
      "CASEL Self-Management",
      "SAMHSA TIP 57"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "rupturerepair",
    "neurodivergentSupport": true,
    "neurodivergentDesignTraits": ["Trauma-informed", "Co-regulation", "Communication-scaffolding", "Identity-affirming", "Strength-based"],
    "neurodivergentEvidence": [
      { "aspect": "5-step repair-protocol cast", "basis": "See-It / Sorry / Felt / Offer / Together; Wave 30 heart-harbor cluster" },
      { "aspect": "Power-difference kit-9 trusted-adult-first", "basis": "When power-asymmetry detected, FIRST move is RAINN + Childhelp, NOT offer-repair" },
      { "aspect": "Mandatory-reporter kit-11 static-response gating", "basis": "988 + Childhelp + RAINN + Crisis Text Line surfacing" },
      { "aspect": "Cross-cultural-repair sensitivity reviewer envelope", "basis": "$1.8K-$3.1K cumulative; honors ho'oponopono / Lakota + Diné restorative circles / kintsugi / teshuvah / Restorative Justice / NVC" }
    ],
    "name": "RuptureRepair",
    "tagline": "Misattunement → Repair Cycle as the Curriculum — two-player relational-craft scaffolding the 5-step repair protocol (Mend). Trauma-informed; no scoring; off-ramps every scenario.",
    "vertical": "dir-fedc",
    "heroColor": "#82A878",
    "iconPath": "/apps/rupturerepair/icon-sm.webp",
    "iconHeroPath": "/apps/rupturerepair/icon.webp",
    "mascotPath": "/apps/rupturerepair/mascot.webp",
    "mentor": "Mend",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "RuptureRepair's 5-character cast (Wave 30 — Heart-Harbor relational cluster; standard methodology + trauma-informed) embodies the foundational rupture-repair protocol-step primitives — notice harm (See-It), acknowledge (Sorry), name impact (Felt), offer repair (Offer), re-engage (Together). Mend (needle-and-thread witness-stance mascot) frames each step; cast embodies them at peer-to-peer / family-dyad / classroom-relational scale (NEVER 'best-practice-perfect-repair' / 'fix-the-relationship' / 'sorry-fixes-everything' framing). HEAVIEST Wave 30 sensitivity burden — 4 critical gates: (1) self-blame-shame (catchphrase `I see what I did. Or what landed.` explicitly includes `or what landed` so acknowledgment ≠ admission-of-guilt); (2) power-difference kit-9 (when other person has power over kid, FIRST move is trusted-adult, NOT offer-repair; RAINN + Childhelp surfaces); (3) cultural-credit kit-10 (NEVER mascotizes any tradition; framing copy credits Hawaiian ho'oponopono / Lakota + Diné restorative circles / Japanese kintsugi / Buddhist apology / Jewish teshuvah / Christian reconciliation / Restorative Justice / Nonviolent Communication BY NAME); (4) mandatory-reporter kit-11 (persistent crisis-resource affordance; static-response gating routes self-harm + abuse signals to 988 + Childhelp 1-800-422-4453 + RAINN 1-800-656-4673 + Crisis Text Line HOME-741741; NEVER reaches FoundationModels). External-reviewer envelope $1.8K-$3.1K cumulative (RAINN + Childhelp + cross-cultural-repair + Indigenous-knowledges + adolescent-mental-health). See-It (hyphenated) replaces initially-proposed Notice per Wave 29 codified 3rd-instance audio-context threshold (InclusionForge + CuriosityQuest + MedicQuest already hold Notice variants). Together SOFT-paired-character pattern with TempCheck Both (same wave; allowed; flag for audio-context audit). Cross-app cameo opportunity Sorry ↔ CoRegRealm warm-acknowledgment move (deferred Wave 30.5).",
      "members": [
        { "name": "See-It", "role": "Notice harm — soft warm-russet deer-tween in chunky moss-green vest; ears literally perked + eyes wide + one hoof raised mid-step; doesn't pretend not to see what just happened" },
        { "name": "Sorry", "role": "Acknowledge — soft cream-and-amber otter-tween in chunky soft-blue scarf; palms-up open-hands level bow-pose (NOT cringe); treats acknowledgment as skill, never proof of badness" },
        { "name": "Felt", "role": "Name-impact — round soft-grey-and-cream badger-tween with tiny notebook + soft-charcoal pencil; mid-listening with head tilted; never assumes — always asks-then-listens" },
        { "name": "Offer", "role": "Offer-repair — warm-amber raccoon-tween with chunky-paw extended palm-up holding small soft hand-folded paper-crane (universal not specific cultural symbol); never grasping" },
        { "name": "Together", "role": "Re-engage — two warm-cream-and-russet sparrow-twins on a single chunky branch, perched comfortable-distance-apart; both looking outward in same direction; `we're still here` energy" }
      ]
    },
    "standards": [
      "DIR/FEDC Capacities 5-6",
      "SAMHSA TIP 57",
      "CASEL Relationship Skills"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "tempcheck",
    "neurodivergentSupport": true,
    "neurodivergentDesignTraits": ["Co-regulation", "Interoception", "Strength-based", "Identity-affirming", "Sensory-aware"],
    "neurodivergentEvidence": [
      { "aspect": "Streak-shame prevention", "basis": "Pattern-over-time framing; no daily-streak counter UI; Wave 30 codified" },
      { "aspect": "Multi-caregiver isolation", "basis": "Per-dyad SwiftData partitioning; multiple-trusted-adult normalizing" },
      { "aspect": "Acute-risk static-response surfacing", "basis": "988 + Crisis Text Line + Childhelp routing" },
      { "aspect": "Adolescent-mental-health reviewer", "basis": "$500-$800 envelope pre-launch (recommended)" },
      { "aspect": "Body-image / appearance gate", "basis": "No body-shape / weight / food-quantity affect-cards" }
    ],
    "name": "TempCheck",
    "tagline": "Daily Attunement Temp-Checks — 15-second bidirectional affect check-in with caregiver; surfaces overlaps + differences; growth chart over weeks (Pulse).",
    "vertical": "dir-fedc",
    "heroColor": "#FF9D8E",
    "iconPath": "/apps/tempcheck/icon-sm.webp",
    "iconHeroPath": "/apps/tempcheck/icon.webp",
    "mascotPath": "/apps/tempcheck/mascot.webp",
    "mentor": "Pulse",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "TempCheck's 4-character cast (Wave 30 — Heart-Harbor relational cluster; standard methodology + trauma-informed) embodies the dyadic attunement-move primitives — noticing self (Pick), dyad-sync (Both), mismatch-as-data (Gap), growth-chart over time (Streak). Pulse (calm heart-shape listening-stance mascot) frames each move; cast embodies them at kid-caregiver / kid-teacher / kid-grandparent dyad scale (NEVER nuclear-family / single-dyad / `we should always match` framing — Gap structurally counter-codes this). 4 critical gates: (1) streak-shame prevention (Streak = pattern-over-time, NOT consecutive-day metric; NO daily-streak counter UI; growth-chart UI shows TYPES of cards over time, never X-day-streak; inherits HuggyHabits Wave 29 `Welcome back!` framing); (2) multi-caregiver isolation (per-dyad SwiftData partitioning; cast intro copy explicitly normalizes multiple dyads — `share with a parent, a grandparent, a teacher — anyone you trust`); (3) acute-risk static-response surfacing (kit 7 + Streak appearance shifts to supportive-not-celebratory when worried/sad pattern detected 3+ days; static-response gating routes to 988 + Crisis Text Line HOME-741741 + Childhelp; NEVER reaches FoundationModels); (4) body-image / appearance gate (affect-card library audit REQUIRED in Phase A — no body-shape / weight / food-quantity / appearance-metric cards; inherits FitQuest Wave 24 + DanceQuest Wave 14 verbatim). External adolescent-mental-health reviewer $500-$800 recommended pre-launch. Both SOFT-paired-character pattern with RuptureRepair Together (same wave; allowed; flag for audio-context audit). Voice-recording features deferred to v2 per COPPA + 2026 amendments (text + card-tap only).",
      "members": [
        { "name": "Pick", "role": "Noticing self — soft warm-coral rabbit-tween in chunky cream cardigan; tiny held-up affect-card; ears soft + not-tense; one paw tapping card-corner; treats card-picking as thinking-pause" },
        { "name": "Both", "role": "Dyad-sync — two warm-cream hares mirror-paired with cards held up side-by-side; both facing same direction; happy-but-not-overjoyed (overlap is data, not victory)" },
        { "name": "Gap", "role": "Mismatch-as-data — round warm-amber fox-tween in soft slate-blue vest holding chunky measuring-string between two cards; treats SPACE between picks as teaching artifact; never-frustrated, always-curious" },
        { "name": "Streak", "role": "Growth-chart — tall soft-grey heron-elder in chunky charcoal vest reading long chart with hash-marks; wing pointing at time-axis; treats LONG pattern as whole skill, never single check-in as success-or-failure" }
      ]
    },
    "standards": [
      "DIR/FEDC Capacity 3",
      "CASEL Self-Awareness",
      "CASEL Social Awareness",
      "SAMHSA TIP 57"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 0,
      "create": 0
    }
  },
  {
    "slug": "gambittales",
    "name": "GambitTales",
    "tagline": "Narrative-Driven Chess for Tweens — tactical patterns + piece movements as recurring character archetypes (10-character cast: tactics layer + world layer). Captain Castle rook mascot narrates a kingdom where Pin / Fork / Skewer / Discovered Attack / Double Attack / X-Ray live alongside King Pumble, King Sable, Pawn Patrol, Sienna & Bran, Trotter & Trundle, Gable & Garrett, Queen Vesper.",
    "vertical": "academics",
    "heroColor": "#D4A24C",
    "iconPath": "/apps/gambittales/icon-sm.webp",
    "iconHeroPath": "/apps/gambittales/icon.webp",
    "mascotPath": "/apps/gambittales/mascot.webp",
    "mentor": "Captain Castle",
    "implementing": false,
    "standards": [
      "ISTE 1.5",
      "CCSS Math (Spatial)",
      "CCSS ELA W.6-8.3"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "Sir Pinwell",
          "role": "Pin pattern — freezes pieces along a line"
        },
        {
          "name": "Twin Knights of Fork Hill",
          "role": "Fork pattern — attack two targets at once"
        },
        {
          "name": "Lady Skewer",
          "role": "Skewer pattern — force a valuable piece out of the way"
        },
        {
          "name": "Veil & Vow",
          "role": "Discovered attack — step aside to reveal a hidden threat"
        },
        {
          "name": "Captain Crossfire",
          "role": "Double attack — one move threatens two targets"
        },
        {
          "name": "The Glass Lantern",
          "role": "X-ray attack — light pierces through to the piece behind"
        },
        {
          "name": "King Pumble & King Sable",
          "role": "Two kings — librarian and gardener; one step at a time"
        },
        {
          "name": "Pawn Patrol",
          "role": "The 16 pawns — one step forward, two on first, high-five to capture"
        },
        {
          "name": "Sienna & Bran",
          "role": "Bishops — twin pilgrims on warm-stone and moss-stone diagonal paths"
        },
        {
          "name": "Trotter & Trundle",
          "role": "Knights — work-horse twins who hop two and shimmy one"
        },
        {
          "name": "Gable & Garrett",
          "role": "Rooks — walking towers in straight lines, shielding the king"
        },
        {
          "name": "Queen Vesper",
          "role": "Queen — ranger-messenger; any direction, any distance"
        }
      ]
    },
    "hasUserGuide": false,
    "modes": {
      "learn": 3,
      "play": 3,
      "create": 0
    }
  },
  {
    "slug": "stonesong",
    "name": "StoneSong",
    "tagline": "Narrative-Driven Go for Tweens — life-and-death patterns as character archetypes (Patient Bamboo, Hungry Crane, Master Snail, Sparring Tiger). 9×9 → 13×13 → 19×19 board-scale progression. Stone mascot.",
    "vertical": "academics",
    "heroColor": "#A07845",
    "iconPath": "/apps/stonesong/icon-sm.webp",
    "iconHeroPath": "/apps/stonesong/icon.webp",
    "mascotPath": "/apps/stonesong/mascot.webp",
    "mentor": "Stone",
    "implementing": false,
    "standards": [
      "ISTE 1.5",
      "CCSS Math (Spatial)",
      "Social-Emotional Resilience"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "Patient Bamboo",
          "role": "Patience and slow growth — long-game positioning"
        },
        {
          "name": "Hungry Crane",
          "role": "Capture instinct — taking what's available"
        },
        {
          "name": "Master Snail",
          "role": "Deliberate strategy — every move considered"
        },
        {
          "name": "Sparring Tiger",
          "role": "Aggressive contact — direct attacks and clashes"
        }
      ]
    },
    "hasUserGuide": false,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "generalstale",
    "name": "GeneralsTale",
    "tagline": "Narrative-Driven Xiangqi (Chinese Chess) for Tweens — piece-asymmetry-as-character-richness (General Zhang the cannon, Elephant Wei the river-bound defender). General Mei mascot.",
    "vertical": "academics",
    "heroColor": "#5BA08C",
    "iconPath": "/apps/generalstale/icon-sm.webp",
    "iconHeroPath": "/apps/generalstale/icon.webp",
    "mascotPath": "/apps/generalstale/mascot.webp",
    "mentor": "General Mei",
    "implementing": false,
    "standards": [
      "ISTE 1.5",
      "CCSS Math (Spatial)",
      "Cross-Cultural Literacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "General Zhang",
          "role": "Decisive command — clear orders, clear outcomes"
        },
        {
          "name": "Elephant Wei",
          "role": "Powerful straight-line attack pattern"
        },
        {
          "name": "Knight Lu",
          "role": "Knight-jump tactical maneuver"
        },
        {
          "name": "Soldier Jin",
          "role": "Forward-advancing infantry — pawn structure"
        }
      ]
    },
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 0
    }
  },
  {
    "slug": "motiflab",
    "neurodivergentSupport": true,
    "neurodivergentDesignTraits": ["Autism-supportive", "Strength-based", "Predictable flow", "Sensory-aware"],
    "neurodivergentEvidence": [
      { "aspect": "Motif-as-protagonist 6-stage arc", "basis": "Predictable, repeatable structure" },
      { "aspect": "Trill songbird mascot (sibling to LyricForge's Pip)", "basis": "Pattern B hero-mascot-led DN methodology" },
      { "aspect": "Visual-pattern recognition strengths", "basis": "Autism-aware design property" },
      { "aspect": "Composition pacing matches DIR-FEDC attention duration", "basis": "Cluster-coherence with FocusForge" }
    ],
    "name": "MotifLab",
    "tagline": "Composition-as-Narrative-Arc for Tweens — motif IS the protagonist; 6-stage arc (intro → motif statement → development → contrast → recapitulation → resolution). Trill songbird mascot (sibling to LyricForge's Pip).",
    "vertical": "steam",
    "heroColor": "#7B5BD9",
    "iconPath": "/apps/motiflab/icon-sm.webp",
    "iconHeroPath": "/apps/motiflab/icon.webp",
    "mascotPath": "/apps/motiflab/mascot.webp",
    "mentor": "Trill",
    "implementing": false,
    "standards": [
      "NCAS MU:Cr1-Cr3",
      "CCSS ELA W.6-8.3"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "Trill",
          "role": "The motif itself — visual posture shifts as the motif develops, inverts, fragments"
        }
      ]
    },
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "pipquest",
    "name": "PipQuest",
    "tagline": "Narrative-Driven Backgammon + Dice-Strategy for Tweens — voyage IS the curriculum (Fruitlandia → Sunrise Cliffs → Storm Bay → Icelandia). Peg dice-cup mascot + Peglegra / Chompus NPCs.",
    "vertical": "stem",
    "heroColor": "#1F4E79",
    "iconPath": "/apps/pipquest/icon-sm.webp",
    "iconHeroPath": "/apps/pipquest/icon.webp",
    "mascotPath": "/apps/pipquest/mascot.webp",
    "mentor": "Peg",
    "implementing": false,
    "standards": [
      "CCSS Math 6.SP",
      "CCSS Math 7.SP",
      "ISTE 1.5"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "Peglegra the Bold",
          "role": "Brave forward-leaping piece — captures via the jump"
        },
        {
          "name": "Chompus the Great",
          "role": "Multi-capture chain specialist — keeps jumping while targets remain"
        }
      ]
    },
    "hasUserGuide": false,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 0
    }
  },
  {
    "slug": "dealtales",
    "name": "DealTales",
    "tagline": "Narrative-Driven Bridge + Partnership Trick-Taking for Tweens — bidding-as-conversation between Whisp + Bram. Highest CASEL fit in the Distributed-Narrative cluster (partnership IS the curriculum). Whisp wisp-of-cloud mascot.",
    "vertical": "academics",
    "heroColor": "#1F3856",
    "iconPath": "/apps/dealtales/icon-sm.webp",
    "iconHeroPath": "/apps/dealtales/icon.webp",
    "mascotPath": "/apps/dealtales/mascot.webp",
    "mentor": "Whisp",
    "implementing": false,
    "standards": [
      "CASEL Relationship Skills",
      "CCSS Math 6.SP",
      "CCSS ELA L.6-8.5",
      "ISTE 1.5"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "distributedNarrative": true,
    "dnCast": {
      "members": [
        {
          "name": "Bram",
          "role": "Reading partners — inferring what cards your partner holds"
        },
        {
          "name": "Auntie Audrey",
          "role": "Bidding wisdom — when to commit and when to pass"
        },
        {
          "name": "The Vanderbilt",
          "role": "Bridge legend — classical convention and table presence"
        },
        {
          "name": "Doubleton Sisters",
          "role": "Short-suit play — managing two-card holdings"
        }
      ]
    },
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    }
  },
  {
    "slug": "tinyletters",
    "name": "TinyLetters",
    "tagline": "Emergent Phonics + Alphabet for Ages 5-7 — letter-sound mapping, sight words, decodable storyboarding. Pip Jr (younger-sibling sparrow to LyricForge's Pip) guides daily 15-min phonics routines.",
    "vertical": "academics",
    "heroColor": "#FFB89C",
    "iconPath": "/apps/tinyletters/icon-sm.webp",
    "iconHeroPath": "/apps/tinyletters/icon.webp",
    "mascotPath": "/apps/tinyletters/mascot.webp",
    "mentor": "Pip Jr",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "TinyLetters's 3-character supporting cast (Wave 30 — Younger Cluster Variant; ages 5-7) embodies emergent-phonics primitives as concrete-physical sound-friends — consonant-sounds (Huff), vowel-sounds (Loo), blend-sounds (Stick). Following the Wave 29 Younger Cluster Variant pattern (BugsCamp / CountingPals / HuggyHabits / MelodyMice), Pip Jr (younger sparrow sibling to LyricForge's Pip + AI phonics coach) remains the protagonist + phonics-garden host; cast members are phonics-garden friends Pip Jr visits at each sound-skill. Cast fades by kit 7 so kit 8 (reflection) is the kid's own decoding of a short book. Catchphrases ≤6 words repeated identically (`Quick sound. Like this.` / `Hold the sound. Sing it.` / `Stick them. Say them fast.`); each catchphrase is itself made of short decodable words — meta-pedagogically the catchphrases ARE the practice. CRITICAL phonics-shame prevention sub-gate: never call out a missed sound publicly; attempts-count is internal-only telemetry, never surfaced. Cast catchphrases sound-evocative (Huff = puff; Loo = long-vowel hoot; Stick = glue-them-together). Gentle-correction-only feedback (no wrong-sound red-flash; co-exploration invitations). Parent co-play affordances required — grown-ups model the puff / hold / stretch-and-snap gestures. All 3 names new to registry (no collisions).",
      "members": [
        { "name": "Huff", "role": "Consonant sounds — soft pale-blue bunny-kid in coral scarf; literally puffs a soft cloud-shape for each consonant sound; treats each sound as gentle quick exhale" },
        { "name": "Loo", "role": "Vowel sounds — soft warm-amber owl-kid in tiny moss-green hood; HOLDS each vowel sound by hooting it slowly with visible long sound-wave; conductor-cue wing tip for hold-along" },
        { "name": "Stick", "role": "Blend sounds — tiny warm-russet squirrel-kid in cream apron full of letter-tiles + tiny pot of soft-honey `sound glue`; sticks letter-tiles together then says the blended word; treats blending as hand-craft anyone can practice" }
      ]
    },
    "standards": [
      "CCSS Foundations.RF.K-2",
      "CCSS RL.K-2"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "countingpals",
    "name": "CountingPals",
    "tagline": "Number Sense + Early Addition for Ages 5-7 — subitizing, counting, comparing, one-digit addition. Calc Jr (younger calculator-monster) guides daily 15-min math routines.",
    "vertical": "stem",
    "heroColor": "#A8D5F0",
    "iconPath": "/apps/countingpals/icon-sm.webp",
    "iconHeroPath": "/apps/countingpals/icon.webp",
    "mascotPath": "/apps/countingpals/mascot.webp",
    "mentor": "Calc Jr",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "CountingPals's 3-character supporting cast (Wave 29 — Younger Cluster Variant; ages 5-7) embodies early-math primitives as concrete-physical math-friends — one-to-one tap-counting (Tappa), same-sized-hops counting (Hop), grouping + same-vs-different (Pile). Following the MotifLab Wave 7 hero-as-protagonist pattern adapted for ages 5-7, Calc Jr (calculator-monster mascot + AI math coach) remains the protagonist + math-garden host; cast members are math-garden friends Calc Jr visits with the kid. Cast fades by kit 7 so kit 8 (reflection) is the kid's own counting work. Catchphrases ≤6 words repeated identically (`One thing. One number.` / `Same hop. Every time.` / `Same goes with same.`). CRITICAL math-anxiety prevention gate: no character ever says wrong / incorrect / try harder; no time-pressure on counting; counting is for thinking not racing; no kid-to-kid comparisons. Parent co-play affordance: cast intros explicitly invite grown-ups. Tappa replaces initially-proposed Counta per HARD collision with DiscreteQuest Wave-4 squirrel-cast Counta. Hop SOFT-collision with WitQuest Wave 22 cast Hop allowed per registry rule 3 (different role / domain / visual register; flag for cross-app audio-context audit).",
      "members": [
        { "name": "Tappa", "role": "One-to-one correspondence — soft russet squirrel-kid who taps each item as she counts; trail of glowing number-dots above each tapped item" },
        { "name": "Hop", "role": "Same-sized jumps / early addition seed — cream-and-grey rabbit-kid whose hops are always exactly the same length; visible dotted-line jump-arcs as equal arcs" },
        { "name": "Pile", "role": "Grouping + same-vs-different — plump warm-amber hedgehog-kid who scoops + groups + piles things into matching bunches; tidy piles of 3s + 4s + 5s on color-coded sorting-mat" }
      ]
    },
    "standards": [
      "CCSS Math.K.CC",
      "CCSS Math.1.OA"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "taletrail",
    "name": "TaleTrail",
    "tagline": "Interactive Picture-Book Composition for Ages 5-8 — picture-book sequencing, optional dictation, character creation, story-arc scaffolds. Page (folded-paper mascot) guides early narrative composition.",
    "vertical": "academics",
    "heroColor": "#C8A8E0",
    "iconPath": "/apps/taletrail/icon-sm.webp",
    "iconHeroPath": "/apps/taletrail/icon.webp",
    "mascotPath": "/apps/taletrail/mascot.webp",
    "mentor": "Page",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "TaleTrail's 3-character supporting cast (Wave 30 — Younger Cluster Variant; ages 5-8) embodies story-stage primitives as concrete-physical story-friends — beginning-of-story (Once), middle-trouble (Bump), end-resolution (Tada). Following the Wave 29 Younger Cluster Variant pattern (BugsCamp / CountingPals / HuggyHabits / MelodyMice), Page (folded-paper mascot + AI narrative coach) remains the protagonist + storybook-trail host; cast members are story-trail friends Page visits at each story-stage. Cast fades by kit 7 so kit 8 (reflection) is the kid's own whole story. Catchphrases ≤6 words repeated identically (`Who lives here? Where?` / `Uh-oh! Now what?` / `Tada! We did it.`). Cast names are simple English words a 5-year-old already says. Catchphrases meta-pedagogically model the question every story-stage answers. All 3 names new to registry (no collisions); flag for cross-app audio-context audit none required. Gentle-correction-only feedback (no wrong-sequence red-flash; co-exploration invitations). Parent co-play affordances required — `with a grown-up` framing in all intro cards (especially kit 4 dictation where grown-up can scribe).",
      "members": [
        { "name": "Once", "role": "Beginning-of-story — plump cream-and-lavender field-mouse-kid in tiny `Once upon a time` pennant-vest; always carrying a tiny rolled scroll; treats BEGINNING as most-important-part" },
        { "name": "Bump", "role": "Middle-trouble — round warm-russet turtle-kid in soft-yellow safety helmet; literally bumps into something on every screen; never sad about bumping, always curious" },
        { "name": "Tada", "role": "End-resolution — tiny warm-amber hummingbird-kid in soft sparkle-cape; both wings spread wide in `Ta-da!` reveal; treats resolution as celebration never a stop" }
      ]
    },
    "standards": [
      "CCSS ELA.K.W",
      "CCSS RL.K-2",
      "NCAS TH:Cr1"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 2,
      "create": 2
    }
  },
  {
    "slug": "huggyhabits",
    "name": "HuggyHabits",
    "tagline": "Daily Wellness Routines for Ages 5-7 — sleep, brush, eat, move habits via gentle scaffolds. Hug (cuddly bear-hug mascot) anchors morning + bedtime routines.",
    "vertical": "special-interest",
    "heroColor": "#F4C9A8",
    "iconPath": "/apps/huggyhabits/icon-sm.webp",
    "iconHeroPath": "/apps/huggyhabits/icon.webp",
    "mascotPath": "/apps/huggyhabits/mascot.webp",
    "mentor": "Hug",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "HuggyHabits's 3-character supporting cast (Wave 29 — Younger Cluster Variant; ages 5-7) embodies daily-wellness routine primitives as concrete-physical routine-friends — bedtime winding-down (Snooze), brushing + hygiene (Scrub), body-movement breaks (Bounce). Following the MotifLab Wave 7 hero-as-protagonist pattern adapted for ages 5-7, Hug (cuddly bear-hug mascot + AI wellness coach) remains the protagonist + warm-wrap-around-every-routine; cast members are routine-time friends. Daily-use app — cast does NOT fully fade (kit 7-8 transitions them from teacher to companion since daily routine practice IS the use case). Catchphrases ≤6 words pairing action with feel-good payoff (`Slow down. Tuck in.` / `Brush brush. All clean.` / `Bounce a little. Feel good.`). CRITICAL gates: no shame on skipped routines (cast frames missed-day as invitation never correction); streak-broken UI shows `Welcome back!` never `streak ended`; body-image gate — no character ever comments on body shape / weight / food quantity; movement promoted as feel-good never appearance-tied. Parent co-play affordance + local-only `show your grown-up` celebration. Bounce replaces initially-proposed Wiggle per intra-Wave-29 collision with BugsCamp earthworm-cast Wiggle.",
      "members": [
        { "name": "Snooze", "role": "Bedtime + winding-down — pale-cream sloth-kid in footed pajamas with stars; pillow tucked under arm; warm-amber nightlight glow" },
        { "name": "Scrub", "role": "Brushing + handwashing + bath — soft russet otter-kid in waterproof apron + rubber boots; chunky pastel toothbrush + tiny soap; bubble sparkles" },
        { "name": "Bounce", "role": "Body movement + active breaks — warm-amber fox-kit in soft athletic-tee + chunky sneakers; rainbow scarf flowing as bounce-trail; motion-dotted lines" }
      ]
    },
    "standards": [
      "CASEL Self-Management",
      "SHAPE America Pre-K Health",
      "NAEYC ECE Standards"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 0
    }
  },
  {
    "slug": "bugscamp",
    "name": "BugsCamp",
    "tagline": "Early Life Science Naturalism for Ages 5-8 — bug + leaf + weather identification + observation journaling. Beetle (ladybug-naturalist mascot) guides backyard discovery.",
    "vertical": "special-interest",
    "heroColor": "#B4D88C",
    "iconPath": "/apps/bugscamp/icon-sm.webp",
    "iconHeroPath": "/apps/bugscamp/icon.webp",
    "mascotPath": "/apps/bugscamp/mascot.webp",
    "mentor": "Beetle",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "BugsCamp's 3-character supporting cast (Wave 29 — Younger Cluster Variant inaugural; ages 5-8) embodies early-naturalism observation primitives as concrete-physical garden-friends — surface-walking observation (Crawl), hidden-discovery observation (Wiggle), partial-view observation (Peek). Following the MotifLab Wave 7 hero-as-protagonist pattern adapted for ages 5-8, Beetle (ladybug-naturalist mascot + AI nature coach) remains the protagonist + in-frame star; cast members are FRIENDS Beetle visits in different garden corners. Cast fades by kit 7 so kit 8 (reflection) is the kid's own observation journal. Catchphrases ≤6 words repeated identically each appearance (`Look slow. See more.` / `Lift a leaf. Surprise!` / `I see a wing. What is it?`) — kid memorizes catchphrase before underlying skill. CRITICAL gates: vocabulary appropriate for ages 5-8 (no observation / specimen / habitat jargon); gentle correction never wrong-as-failure (every wrong-tap is co-exploration invitation); Parent Companion mode with grown-up tips per kit; hero-mascot Beetle stays in-frame ≥50% of every cast scene. No trauma-informed depth needed at this age (scope explicitly gentle — no death / predation / extinction at this age). Visual repetition IS the methodology — same recurring posture + color + catchphrase = recognition.",
      "members": [
        { "name": "Crawl", "role": "Surface-walking observation — soft mint-green snail-kid with cream shell-swirl + tiny lantern + magnifying-bead; crawls slowly across screens; trail of footprint-dots" },
        { "name": "Wiggle", "role": "Hidden-discovery observation — plump glossy-russet earthworm-tween in soft-yellow safety vest; head + tail-tip visible above soil-line; ? sparkles around discoveries" },
        { "name": "Peek", "role": "Partial-view observation — soft cream-and-warm-brown sparrow-tween in tiny moss-green hood; always half-hidden behind chunky leaf or flower; one round eye + one wing-tip visible" }
      ]
    },
    "standards": [
      "NGSS K-2 LS",
      "NGSS K-2 ESS",
      "NAEYC Early STEM"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "melodymice",
    "name": "MelodyMice",
    "tagline": "Early Music + Rhythm for Ages 5-7 — rhythm patterns, instrument identification, call-and-response melody. Squeak (mouse-musician mascot) guides early music exposure.",
    "vertical": "steam",
    "heroColor": "#D8A8E0",
    "iconPath": "/apps/melodymice/icon-sm.webp",
    "iconHeroPath": "/apps/melodymice/icon.webp",
    "mascotPath": "/apps/melodymice/mascot.webp",
    "mentor": "Squeak",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "MelodyMice's 3-character supporting cast (Wave 29 — Younger Cluster Variant; ages 5-7) embodies early-music primitives as concrete-physical mouse-band mates — steady beat / rhythm-keeping (Tap-Tap), call-and-response melody (Sing-Back), instrument exploration + timbre (Shaky). Following the MotifLab Wave 7 hero-as-protagonist pattern adapted for ages 5-7, Squeak (mouse-musician mascot + AI music coach) remains the protagonist + band-leader; cast members are MOUSE-BAND MATES (same species family for visual cohesion). Cast fades by kit 8 (cast-farewell — kid composes/plays tiny song with Squeak alone). Catchphrases ≤6 words pairing action with invitation (`Steady beat. Keep going.` / `I sing. You sing.` / `New sound. Try it.`). CRITICAL music-anxiety prevention gate: no pitch-accuracy gating on Sing-Back (kids 5-7 sing what they hear; pitch-graded feedback IS the shame-vector); no beat-precision gating on Tap-Tap (tapping at all is success state); celebrate participation never accuracy; no off-key / wrong-note framing ever. Kit 7 (Songs from Around the World) is cultural-credit-led — cast PLAYS source-community songs but framing copy credits communities by name (cast NEVER speaks from any cultural tradition). Voice-recording features deferred to v2 per COPPA + 2026 amendments. Sing-Back replaces initially-proposed Echo per 3rd-instance audio-context collision (ActiveForge Coach Echo + FunctionForge constant-Echo).",
      "members": [
        { "name": "Tap-Tap", "role": "Steady beat / rhythm-keeping — soft cream-and-grey field-mouse-kid in striped overalls + chunky boots; visible tap-tap-tap sound-dots from foot; tiny tambourine clipped to belt" },
        { "name": "Sing-Back", "role": "Call-and-response — warm-russet dormouse-kid in soft acorn-cap + bowtie; musical-note sparkles from mouth on call; hand cupped behind ear on response-wait" },
        { "name": "Shaky", "role": "Instrument exploration + timbre — soft warm-amber harvest-mouse-kid in pocketed overalls full of mini-instruments; different instrument in paw each scene; shake/ring/boom sparkles match active instrument" }
      ]
    },
    "standards": [
      "NCAS MU.K-2.Cr1",
      "NCAS MU.K-2.Re1"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 3,
      "play": 1,
      "create": 1
    }
  },
  {
    "slug": "voicetale",
    "name": "VoiceTale",
    "tagline": "Voice-First Oral Storytelling for Tweens — 60-120s told tales across a 5-beat arc (hook/setup/rising/turn/close), AI listening coach, tradition layer honoring oral lineages without appropriation (Bramble).",
    "vertical": "academics",
    "heroColor": "#1B7B8C",
    "iconPath": "/apps/voicetale/icon-sm.webp",
    "iconHeroPath": "/apps/voicetale/icon.webp",
    "mascotPath": "/apps/voicetale/mascot.webp",
    "mentor": "Bramble",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "VoiceTale's 4-character supporting cast embodies oral-craft primitives — hook / leanability (Lean), pacing across the 5-beat arc (Slow), the pivot / turn at beat 4 (Pivot), and callback / refrain (Refrain). Following the MotifLab Wave 7 hero-as-protagonist pattern, Bramble (the thornbush mascot + AI listening coach + cultural-tradition holder) remains the protagonist + listener-anchor; cast members are hedgerow-fire companions who sit around Bramble's listening circle. Cast fades by kit 12 so kits 13-16 (anthology + cross-form + Indigenous-tradition-layer + free-form) read as integrative + tradition-honoring. Voice-character mode (kit 5) is taught by the kid doing it themselves, NOT by a cast-member exemplar — preserves voice-craft as the kid's own invention. CRITICAL multi-tradition cultural-sensitivity gate: ALL 4 cast names are English sensory-verbs (Lean / Slow / Pivot / Refrain); NO tradition-specific terms mascotized (no Griot / Seanchaí / Rakugo-X / Slam-X); NO named historical storytellers as cast; West African griot / Irish seanchaí / Japanese rakugo / Indigenous American oral histories / modern slam attributed to source communities in kit framing copy. Kit 12 (Indigenous American Oral Histories) requires external Indigenous-community sensitivity reviewer BEFORE playtest (REQUIRED, not optional). Mentor reconciliation in this batch: Loresinger Mae → Bramble (matches code-side coach naming + mascot). Echo → Refrain + Turn → Pivot renames resolve cluster + cumulative collisions.",
      "members": [
        { "name": "Lean", "role": "Hook / leanability — badger-tween whose upper body visibly tips forward at second 5; if hook is weak she rocks back to neutral" },
        { "name": "Slow", "role": "Pacing across the 5-beat arc — tortoise-elder with wooden hourglass; her tempo-trail stretches (slow) or bunches (fast) on purpose" },
        { "name": "Pivot", "role": "The turn at beat 4 — barn-owl-tween whose head rotates 180° at the exact moment story / teller / listener turn together" },
        { "name": "Refrain", "role": "Callback / refrain — mockingbird-tween with carved-wood phrase-token who repeats one phrase identically at the closing (same words, same shape, said again, said better)" }
      ]
    },
    "standards": [
      "CCSS ELA SL.6-8.4",
      "CCSS ELA W.6-8.3",
      "NCAS TH:Pr4-Pr6"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "dialoguequest",
    "name": "DialogueQuest",
    "tagline": "Branching-Dialogue Craft for Tweens — voice consistency, subtext, tag balance, branch meaningfulness. Build dialogue trees where every line reveals character, advances plot, and leaves room (Patter).",
    "vertical": "academics",
    "heroColor": "#A05A4B",
    "iconPath": "/apps/dialoguequest/icon-sm.webp",
    "iconHeroPath": "/apps/dialoguequest/icon.webp",
    "mascotPath": "/apps/dialoguequest/mascot.webp",
    "mentor": "Patter",
    "implementing": false,
    "distributedNarrative": true,
    "dnCast": {
      "intro": "DialogueQuest's 5-character supporting cast embodies dialogue-craft primitives — branch meaningfulness / weighted choice (Sprig), subtext / surface-vs-implied (Glance), tag balance / attribution rhythm (Weigh), voice consistency / cross-line check (Brogue), and rhythm + silence / productive pause (Rest). Following the MotifLab Wave 7 hero-as-protagonist pattern, Patter (the two-toned speech-bubble mascot + AI dialogue coach) remains the protagonist + relational anchor; cast members are conversational archetypes Patter keeps in his pocket-workshop. Cast fades by kit 12 so kits 13-16 (tree building + anthology + cross-cluster export) read as integrative. Voice-consistency-by-example design: each cast member speaks with a distinct register so the kid sees voice-craft as a LIVED skill (not just a graded one). Mascotizing gate: NO character is named after the craft term — Sprig (not 'Branch'), Glance (not 'Subtext'), Weigh (not 'Tag-balance'), Brogue (not 'Voice'), Rest (not 'Silence'). Brogue's old-country accent is DELIBERATELY non-specific (not any real dialect — folk-storyteller archetype). Mentor reconciliation in this batch: Loresinger Mae → Patter (matches code-side coach naming + mascot). Hush → Glance + Scale → Weigh renames resolve cumulative-cast collisions.",
      "members": [
        { "name": "Sprig", "role": "Branch meaningfulness — sapling-tween whose visible branching skeleton shifts physically when she picks between dialogue options (the choice re-routes her body)" },
        { "name": "Glance", "role": "Subtext — arctic-fox-tween in a thick scarf; speech-bubble visibly half-empty with dotted-line ghost-text floating beside it" },
        { "name": "Weigh", "role": "Tag balance — pangolin-tween with a brass balance-scale on her shoulder; scales tilt visibly as dialogue happens around her" },
        { "name": "Brogue", "role": "Voice consistency — border-collie-elder in a worn flat-cap who uses exactly 4-5 signature words across every appearance (deliberately non-specific old-country accent)" },
        { "name": "Rest", "role": "Rhythm + silence — heron-tween with a small silver pocket-watch around her neck; one foot perpetually raised mid-step; treats the pause as a line of dialogue itself" }
      ]
    },
    "standards": [
      "CCSS ELA W.6-8.3.B",
      "CCSS ELA RL.6-8.6",
      "NCAS TH:Cr3"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 1,
      "create": 3
    }
  },
  {
    "slug": "microbelab",
    "neurodivergentSupport": true,
    "neurodivergentDesignTraits": ["Trauma-informed", "Strength-based", "Predictable flow", "Identity-affirming"],
    "neurodivergentEvidence": [
      { "aspect": "Beneficial microbes foregrounded; pathogens opt-in gated", "basis": "COVID-trauma-aware design property" },
      { "aspect": "No COVID-specific scenarios", "basis": "Explicit anti-pattern" },
      { "aspect": "Pediatric-microbiology-pedagogy + COVID-trauma-aware sensitivity reviewer", "basis": "$500-$800 envelope (recommended)" },
      { "aspect": "Cilia mentor + 6 microbe-archetype cast", "basis": "Strength-based framing (microbes-as-friends, not microbes-as-threat)" }
    ],
    "name": "MicrobeLab",
    "tagline": "Microbiology Adventure for Tweens — microscope-zoom core loop, microbiome simulator, named microbe characters (Lacto, Bif), immune-response minigame. Beneficial microbes foregrounded; COVID-trauma-sensitive (Vee).",
    "vertical": "stem",
    "heroColor": "#33CCBB",
    "iconPath": "/apps/microbelab/icon-sm.webp",
    "iconHeroPath": "/apps/microbelab/icon.webp",
    "mascotPath": "/apps/microbelab/mascot.webp",
    "mentor": "Cilia",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "MicrobeLab's 6-character microbe-archetype cast formalizes the CLAUDE.md 'named microbe characters' core feature. Cast: Lacto (helpful bacteria) / Yeast (helpful fungi) / Photo (photosynthetic microbes) / Net (mycorrhizal networks) / Spore (pathogens, opt-in gated) / Guard (immune cells). UNIQUE COVID-trauma-sensitive burden: beneficial microbes foregrounded (kits 1-4), pathogens opt-in (kit 5), immune-response as cast story (kit 6), NO COVID-specific scenarios. Per `microbelab-app/Docs/HANDOFF_FROM_LABSMITH_DISTRIBUTED_NARRATIVE_RETROFIT.md` Wave 32b 2026-05-22. MENTOR RENAMED in Wave 32b: previous 'Dr. Quark' (HARD collision with AdventureHub Wave 27 zone-host Dr. Quark Science Labs) → 'Cilia' (microbiology-domain-specific register; clear in registry). Multiple cast collision-renames applied (Sun→Photo / Soil→Net). Labsmith generates ~$1.62 cast assets + $500-800 pediatric-microbiology-pedagogy + COVID-trauma-aware sensitivity reviewer RECOMMENDED. Cross-app cameos: Net ↔ NexusForge+OriginForge (network-systems cluster load-bearing); Lacto+Yeast ↔ SaffronLab (fermentation cluster); Photo ↔ EcoSphere+BiomeForge (photosynthesis cluster); Guard ↔ BodyForge+HealthForge (immune-system cluster).",
      "members": [
        { "name": "Lacto", "role": "Lactobacillus + helpful-bacteria — 'Friend in your food. Friend in your gut.'" },
        { "name": "Yeast", "role": "Saccharomyces + helpful-fungi — 'I make air inside bread.'" },
        { "name": "Photo", "role": "Cyanobacteria + photosynthetic-microbes — 'Sunlight. Then air. Then everything else.'" },
        { "name": "Net", "role": "Mycorrhizal-fungi + nitrogen-fixers — 'Forests talk through me.'" },
        { "name": "Spore", "role": "Pathogens (opt-in gated) — 'Some friends. Some not. All real.'" },
        { "name": "Guard", "role": "Immune cells (T-cell / macrophage / B-cell) — 'I check IDs. Patient + careful.'" }
      ]
    },
    
    "implementing": false,
    "standards": [
      "NGSS MS-LS1-1",
      "NGSS MS-LS1-2",
      "NGSS MS-LS1-3",
      "NGSS MS-LS2-3"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 3,
      "play": 2,
      "create": 1
    }
  },
  {
    "slug": "witquest",
    "name": "WitQuest",
    "tagline": "Comedy RPG adventure for ages 9-14 — explore the kingdom of Laughtonia where humor is the combat mechanic, defeat villains with puns and riddles, collect comedy gear, and interact with AI-driven NPCs who remember your joke style.",
    "vertical": "special-interest",
    "distributedNarrative": true,
    "dnCast": {
      "intro": "WitQuest sits in the **word-woods zone** of AdventureHub alongside QuillSpell + GrammarForge — both already shipping distributed-narrative casts (Wave 1).",
      "members": [
        {
          "name": "Quirk",
          "role": "Puns and double-meanings"
        },
        {
          "name": "Knot",
          "role": "Riddles (compressed-info puzzles where you decode the answer from constrained clues)"
        },
        {
          "name": "Switch",
          "role": "Anagrams (rearranging letters to form a different word — \"listen\" → \"silent\")"
        },
        {
          "name": "Lilt",
          "role": "Idioms and figurative language (phrases whose literal meaning ≠ their actual meaning — \"raining cats and dogs\")"
        },
        {
          "name": "Hop",
          "role": "Lateral thinking (finding a non-obvious angle on a problem; sidestepping the assumed framing)"
        }
      ]
    },
    "heroColor": "#9C5DC4",
    "iconPath": "/apps/witquest/icon-sm.webp",
    "iconHeroPath": "/apps/witquest/icon.webp",
    "mascotPath": "/apps/witquest/mascot.webp",
    "implementing": false,
    "standards": [
      "NCAS LA:Cr1",
      "CCSS ELA L.6-8.5"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false,
    "modes": {
      "learn": 2,
      "play": 3,
      "create": 1
    },
    "playTogether": true
  }
];

export const appsBySlug: Record<string, AppData> = Object.fromEntries(
  apps.map(a => [a.slug, a])
);

export const verticalCounts = {
  "stem": 42,
  "steam": 20,
  "academics": 28,
  "dir-fedc": 9,
  "special-interest": 36
};
