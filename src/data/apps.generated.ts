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
}

export const apps: AppData[] = [
  {
    "slug": "activeforge",
    "name": "ActiveForge",
    "tagline": "Build physical fitness, motor skills, and dance proficiency through camera-based movement tracking, choreography challenges, and sport skill progressions \u2014 aligning to both SHAPE America PE standards and NCAS Dance standards. Ages 9-14.",
    "vertical": "steam",
    "heroColor": "#81C784",
    "iconPath": "/apps/activeforge/icon-sm.webp",
    "mascotPath": "/apps/activeforge/mascot.webp",
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
    "hasUserGuide": true
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
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": true
  },
  {
    "slug": "aiforge",
    "name": "AiForge",
    "tagline": "Learn how AI really works by building your own classifiers, training models, detecting bias, and navigating the ethics of a world run by algorithms \u2014 with an AI mentor that teaches you about itself.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/aiforge/icon-sm.webp",
    "mascotPath": "/apps/aiforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "beatforge",
    "name": "BeatForge",
    "tagline": "Music creation sandbox inside an RPG world where kids ages 10-14 build compositions using visual \"sound blocks\" that snap together on a sequencer canvas. The game world dynamically transforms based on the music created, and blocks gradually reveal standard notation as mastery increases via a peel-back mechanic.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/beatforge/icon-sm.webp",
    "mascotPath": "/apps/beatforge/mascot.webp",
    "implementing": true,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/beatforge/icon.webp",
    "longTagline": "BeatForge is a music composition studio. You build songs by snapping colorful sound blocks together \u2014 notes, rests, chords, dynamics \u2014 and the app plays them back through real instruments. As your music skills grow, the colorful blocks slowly reveal real sheet-music notation underneath, so you learn",
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
    "hasUserGuide": true
  },
  {
    "slug": "bioforge",
    "name": "BioForge",
    "tagline": "Players learn anatomy and biomechanics through the lens of sports -- understanding how muscles generate force, how joints create leverage, how the cardiovascular system fuels performance, and how training improves the body. Each sport unlocks new body systems and biomechanical principles. The only sports-science-meets-anatomy app on any platform.",
    "vertical": "stem",
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
    "hasUserGuide": true
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
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "hasUserGuide": true
  },  {
    "slug": "bridgeforge",
    "name": "BridgeForge",
    "tagline": "Project-based learning simulation with multi-week real-world challenges integrating math, science, social studies, and ELA. First student-facing PBL app following the Gold Standard PBL cycle (PBLWorks/Buck Institute). Students solve authentic real-world problems that require competency across multiple subjects, building visible bridges on a subject connection map.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/bridgeforge/icon-sm.webp",
    "mascotPath": "/apps/bridgeforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "cardforge",
    "name": "CardForge",
    "tagline": "Learn card games from basics to mastery, then amaze friends with step-by-step magic trick tutorials \u2014 a complete card skills academy with AI coaching for ages 9-14. The only app that combines interactive card game teaching with magic trick instruction for children.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/cardforge/icon-sm.webp",
    "mascotPath": "/apps/cardforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "chanceforge",
    "name": "ChanceForge",
    "tagline": "Run a virtual casino, investigate insurance company math, predict sports outcomes, and solve medical diagnosis puzzles \u2014 mastering probability and statistics through real-world contexts where the math determines who wins and who loses.",
    "vertical": "stem",
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
        "description": "Collect data and build histograms in real time. Calculate mean, median, mode, range, and standard deviation. See how different distributions look \u2014 symmetric, s"
      },
      {
        "name": "Sampling Lab",
        "description": "Discover why polling works \u2014 and why it sometimes fails. Sample from a virtual population and see how random samples represent the whole. Compare random samplin"
      }
    ],
    "mentor": "Chance",
    "hasUserGuide": true
  },
  {
    "slug": "chemquest",
    "name": "ChemQuest",
    "tagline": "Mix, react, and discover \u2014 a virtual chemistry lab where every reaction is an adventure and the periodic table is your map.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/chemquest/icon-sm.webp",
    "mascotPath": "/apps/chemquest/mascot.webp",
    "mentor": "Beaker",
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
    "hasUserGuide": true
  },
  {
    "slug": "chronoquest",
    "name": "ChronoQuest",
    "tagline": "Players use a Chrono Device to visit historical eras, witness pivotal events firsthand, interact with historical figures, and complete missions that require understanding each era's culture, technology, and conflicts. Unlike passive timelines, players live through history's defining moments -- facing branching decisions with real consequences.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/chronoquest/icon-sm.webp",
    "mascotPath": "/apps/chronoquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "cipherforge",
    "name": "CipherForge",
    "tagline": "Run a spy agency, learning cryptography from Caesar ciphers to RSA basics through narrative-driven missions \u2014 crack codes, build ciphers, compete in code-breaking duels, and escape timed puzzle rooms.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/cipherforge/icon-sm.webp",
    "mascotPath": "/apps/cipherforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "circuitforge",
    "name": "CircuitForge",
    "tagline": "Build circuits on a virtual breadboard, watch electricity flow, code virtual robots, and learn the engineering behind every electronic device you use.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/circuitforge/icon-sm.webp",
    "mascotPath": "/apps/circuitforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "cityforge",
    "name": "CityForge",
    "tagline": "Players design buildings and plan cities that must satisfy structural physics, environmental constraints, and citizen needs. Start with single buildings (understanding loads, materials, foundations), progress to neighborhoods and full cities with infrastructure, zoning, and sustainability challenges. The only STEM-focused architecture and urban planning app on iOS for ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/cityforge/icon-sm.webp",
    "mascotPath": "/apps/cityforge/mascot.webp",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
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
    "hasUserGuide": true
  },
  {
    "slug": "civicforge",
    "name": "CivicForge",
    "tagline": "Players are newly elected to their town's Youth Council, making real decisions about budgets, zoning, public services, and community issues. Every vote has consequences \u2014 build parks or fix potholes, fund the library or hire firefighters. Where iCivics teaches federal government through web-based quizzes, CivicForge teaches local government through iPhone-native simulation.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/civicforge/icon-sm.webp",
    "mascotPath": "/apps/civicforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "claimcraft",
    "name": "ClaimCraft",
    "tagline": "Visual argument mapping game where players build claim-evidence-reasoning chains and compete in debate duels. Logical fallacies are attack moves to identify and counter. AI generates counterarguments and evaluates argument quality.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/claimcraft/icon-sm.webp",
    "mascotPath": "/apps/claimcraft/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "climatequest",
    "name": "ClimateQuest",
    "tagline": "Navigate a living Earth system where greenhouse gases, ocean currents, ice sheets, and ecosystems interconnect \u2014 make policy decisions and observe centuries of consequences through interactive climate models. Ages 9-14.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/climatequest/icon-sm.webp",
    "iconHeroPath": "/apps/climatequest/icon.webp",
    "mascotPath": "/apps/climatequest/mascot.webp",
    "implementing": false,
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
    "hasUserGuide": true
  },
  {
    "slug": "coderealm",
    "name": "CodeRealm",
    "tagline": "Kids ages 10-14 program a companion robot using visual blocks that gradually \"peel back\" to reveal real Swift code as mastery increases. The block editor drives a SpriteKit game world where the robot navigates levels, solves puzzles, and defeats enemies through player-authored programs.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/coderealm/icon-sm.webp",
    "mascotPath": "/apps/coderealm/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "cosmosforge",
    "name": "CosmosForge",
    "tagline": "Travel 13.8 billion years back to the Big Bang, watch the first stars ignite, witness galaxies collide, peer inside black holes, and hunt for exoplanets \u2014 an astrophysics odyssey through scales of space and time that dwarf human imagination.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/cosmosforge/icon-sm.webp",
    "iconHeroPath": "/apps/cosmosforge/icon.webp",
    "mascotPath": "/apps/cosmosforge/mascot.webp",
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
    "hasUserGuide": true
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
    "hasUserGuide": true
  },
  {
    "slug": "creaturecare",
    "name": "CreatureCare",
    "tagline": "Players run an animal hospital, diagnosing and treating animals using real veterinary techniques",
    "vertical": "dir-fedc",
    "heroColor": "#FFA726",
    "iconPath": "/apps/creaturecare/icon-sm.webp",
    "mascotPath": "/apps/creaturecare/mascot.webp",
    "implementing": true,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/creaturecare/icon.webp",
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
    "hasUserGuide": true
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
    "longTagline": "CubeSensei is an app that teaches you how to solve a Rubik's Cube \u2014 and **27 other puzzles** too! You'll start with the basics and work your way up to speedcubing, magic tricks, adventure games, and even the math behind it all.",
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
    "hasUserGuide": true
  },
  {
    "slug": "curiosityquest",
    "name": "CuriosityQuest",
    "tagline": "A daily-question adventure that builds curiosity into habit.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/curiosityquest/icon-sm.webp",
    "mascotPath": "/apps/curiosityquest/mascot.webp",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/curiosityquest/icon.webp",
    "hasUserGuide": true
  },
  {
    "slug": "dancequest",
    "name": "DanceQuest",
    "tagline": "Dance as creative art: explore genres, compose choreography, analyze performances, and get camera-based movement feedback -- building artistic expression through dance composition and performance.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/dancequest/icon-sm.webp",
    "mascotPath": "/apps/dancequest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "dataforge",
    "name": "DataForge",
    "tagline": "Visual, block-based data science environment where players collect, clean, analyze, and visualize real-world datasets. No coding required \u2014 drag-and-drop data pipeline builder.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/dataforge/icon-sm.webp",
    "mascotPath": "/apps/dataforge/mascot.webp",
    "mentor": "Data",
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
    "hasUserGuide": true
  },
  {
    "slug": "debateforge",
    "name": "DebateForge",
    "tagline": "Master the art of persuasion \u2014 research topics, construct arguments, deliver speeches, and compete in structured debates with AI opponents and real classmates.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/debateforge/icon-sm.webp",
    "mascotPath": "/apps/debateforge/mascot.webp",
    "implementing": false,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/debateforge/icon.webp",
    "longTagline": "All planned features and curriculum coverage from DebateForge are now part of SpeakForge's roadmap.",
    "features": [
      {
        "name": "Status",
        "description": "All planned features and curriculum coverage from DebateForge are now part of SpeakForge's roadmap."
      }
    ],
    "hasUserGuide": true
  },
  {
    "slug": "depthquest",
    "name": "DepthQuest",
    "tagline": "Players pilot a research submarine through ocean zones (sunlight, twilight, midnight, abyssal, hadal), discovering marine species, studying coral reef health, mapping the ocean floor, and answering marine science challenges. The only gamified ocean exploration RPG on iOS for ages 9-14.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/depthquest/icon-sm.webp",
    "mascotPath": "/apps/depthquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "digquest",
    "name": "DigQuest",
    "tagline": "Excavate ancient sites layer by layer, analyze artifacts with real archaeological methods, and reconstruct the stories of lost civilizations \u2014 from Mesopotamia to the Maya.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/digquest/icon-sm.webp",
    "mascotPath": "/apps/digquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "discretequest",
    "name": "DiscreteQuest",
    "tagline": "Exploration game teaching graph theory, combinatorics, and number theory through real-world mysteries. Includes AMC 8/MATHCOUNTS competition timer mode. First gamified discrete math app for ages 9-14.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/discretequest/icon-sm.webp",
    "mascotPath": "/apps/discretequest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "ecosphere",
    "name": "EcoSphere",
    "tagline": "Interactive climate and earth systems simulator where players manage interconnected ecosystems across geological time scales. Balance atmosphere, hydrosphere, geosphere, and biosphere while answering questions that unlock simulation controls. Every decision cascades through Earth's systems \u2014 pump CO2 and watch ice caps shrink, plant forests and track carbon sequestration in real time.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/ecosphere/icon-sm.webp",
    "mascotPath": "/apps/ecosphere/mascot.webp",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/ecosphere/icon.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "effectsforge",
    "name": "EffectsForge",
    "tagline": "Learn the science and art behind movie special effects \u2014 prosthetics chemistry, Foley sound physics, forced perspective optics, stop-motion animation, and lighting design \u2014 then produce your own short films.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/effectsforge/icon-sm.webp",
    "mascotPath": "/apps/effectsforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "ensemblequest",
    "name": "EnsembleQuest",
    "tagline": "Gamified cooperative creative projects that build social skills incrementally through a progressive social ladder: Solo, then Pair, then Group, then Perform. Music and art creation serve as the vehicle for structured social interaction, with explicit visual scaffolding for every social step -- visual turn timers, role cards, social scripts, and a communication toolkit.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/ensemblequest/icon-sm.webp",
    "mascotPath": "/apps/ensemblequest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "equationquest",
    "name": "EquationQuest",
    "tagline": "Visual balance-scale approach to the entire CCSS EE domain",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/equationquest/icon-sm.webp",
    "mascotPath": "/apps/equationquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "escapeforge",
    "name": "EscapeForge",
    "tagline": "Single-player escape room iOS game for ages 9\u201314",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/escapeforge/icon-sm.webp",
    "mascotPath": "/apps/escapeforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "ethosforge",
    "name": "EthosForge",
    "tagline": "Navigate ethical dilemmas across science, technology, history, and daily life with an AI Socratic tutor. Build ethical reasoning through structured debate, perspective-taking, and case analysis.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/ethosforge/icon-sm.webp",
    "mascotPath": "/apps/ethosforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "farmquest",
    "name": "FarmQuest",
    "tagline": "Run a farm from soil to shelf \u2014 manage crops, raise animals, process food, market products, and balance sustainability with profitability across four seasons of scientific farming and agribusiness. Ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/farmquest/icon-sm.webp",
    "mascotPath": "/apps/farmquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "figureforge",
    "name": "FigureForge",
    "tagline": "Detective-style word puzzle game where students identify metaphors, similes, idioms, analogies, and personification through contextual investigation and creative writing challenges.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/figureforge/icon-sm.webp",
    "mascotPath": "/apps/figureforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "fitquest",
    "name": "FitQuest",
    "tagline": "A fitness RPG adventure where physical exercise (tracked via HealthKit) AND knowledge quiz performance jointly determine your character's progression. Complete real workouts to gain Strength/Stamina, answer questions correctly to gain Wisdom/Intelligence.",
    "vertical": "special-interest",
    "heroColor": "#81C784",
    "iconPath": "/apps/fitquest/icon-sm.webp",
    "mascotPath": "/apps/fitquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "flightforge",
    "name": "FlightForge",
    "tagline": "Design, build, and fly aircraft in a physics sandbox \u2014 master aerodynamics from paper planes to jet engines through the four forces of flight, wind tunnel experiments, and aviation engineering challenges.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/flightforge/icon-sm.webp",
    "mascotPath": "/apps/flightforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "focusforge",
    "name": "FocusForge",
    "tagline": "A gamified executive function training adventure for students ages 9-14, with specific design for ADHD learners. Players build study skills through six EF domains: working memory, inhibitory control, cognitive flexibility, planning/organization, task initiation, and time awareness.",
    "vertical": "dir-fedc",
    "heroColor": "#81C784",
    "iconPath": "/apps/focusforge/icon-sm.webp",
    "mascotPath": "/apps/focusforge/mascot.webp",
    "implementing": true,
    "standards": [
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/focusforge/icon.webp",
    "longTagline": "FocusForge is a gamified executive function training app for students ages 9-14. It helps you build six essential study skills \u2014 time awareness, working memory, inhibitory control, cognitive flexibility, planning and organization, and task initiation \u2014 through fun mini-games, strategy-based challeng",
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
    "hasUserGuide": true
  },
  {
    "slug": "forgearena",
    "name": "Forgearena",
    "tagline": "A competitive multiplayer educational game where up to 30 students on any device battle in real-time quiz arenas, team challenges, and subject-specific tournaments \u2014 bridging iOS, Android, and web players in the same match.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/forgearena/icon-sm.webp",
    "mascotPath": "/apps/forgearena/mascot.webp",
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
    "hasUserGuide": true
  },  {
    "slug": "fossilforge",
    "name": "FossilForge",
    "tagline": "Players run paleontology expeditions -- excavating fossil sites grid-by-grid, preparing specimens in the lab, classifying them taxonomically, and building museum exhibits. Real geological periods, scientifically accurate specimens, and the careful process of real fossil preparation. The only paleontology simulation on iOS for ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/fossilforge/icon-sm.webp",
    "mascotPath": "/apps/fossilforge/mascot.webp",
    "mentor": "Amber",
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
    "hasUserGuide": true
  },
  {
    "slug": "fractionforge",
    "name": "FractionForge",
    "tagline": "Master fractions, decimals, and place value through virtual manipulatives, number line challenges, and real-world problem contexts \u2014 following the research-backed Concrete-Representational-Abstract instructional model. Ages 8-12.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/fractionforge/icon-sm.webp",
    "mascotPath": "/apps/fractionforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "framequest",
    "name": "FrameQuest",
    "tagline": "Frame-by-frame animation creation that turns autistic preferences for precision and sequencing into creative storytelling. Players build stop-motion animations that practice social scenarios -- setting up characters, capturing frames, sequencing timelines, and narrating stories. The animation process itself builds fine motor skills, sequential thinking, and emotional understanding.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/framequest/icon-sm.webp",
    "mascotPath": "/apps/framequest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "functionforge",
    "name": "FunctionForge",
    "tagline": "Interactive function laboratory \u2014 input-output machines, function tables, linear/quadratic/exponential functions, and real-world data fitting. Visual \"function machine\" component builder bridging arithmetic to algebra.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/functionforge/icon-sm.webp",
    "mascotPath": "/apps/functionforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "geneforge",
    "name": "GeneForge",
    "tagline": "Extract DNA, map inheritance with Punnett squares, simulate CRISPR gene editing, and debate bioethics \u2014 explore genetics and biotechnology from Mendel's peas to modern gene therapy through hands-on virtual lab experiments.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/geneforge/icon-sm.webp",
    "mascotPath": "/apps/geneforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "geometryforge",
    "name": "GeometryForge",
    "tagline": "Interactive geometry exploration app for ages 9-14 covering the complete CCSS Geometry curriculum \u2014 transformations, coordinate geometry, similarity, proof, and 3D solids \u2014 using hands-on RealityKit 3D visualization, visual theorem discovery, and progressive spatial reasoning challenges. Companion app to CubeSensei (which focuses on Rubik's Cube mastery and magic tricks).",
    "vertical": "stem",
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
    "longTagline": "GeometryForge is a complete CCSS Geometry adventure for students ages 9\u201314. Master transformations, congruence, similarity, coordinate geometry, and spatial reasoning through interactive problems, animated demonstrations, and 13 adventure-game modes \u2014 plus a Rubik's Cube challenge for spatial thinki",
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
    "hasUserGuide": true
  },
  {
    "slug": "grammarforge",
    "name": "GrammarForge",
    "tagline": "Master grammar, sentence structure, and language conventions through interactive sentence diagramming puzzles, error detective investigations, and style editing challenges \u2014 turning grammar rules into engaging game mechanics. Ages 9-14.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/grammarforge/icon-sm.webp",
    "mascotPath": "/apps/grammarforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "growforge",
    "name": "GrowForge",
    "tagline": "Grow a virtual garden powered by real weather data, design plant experiments, and discover the science of photosynthesis, genetics, and ecosystems \u2014 bridging the digital and natural worlds.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/growforge/icon-sm.webp",
    "mascotPath": "/apps/growforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "harmonyforge",
    "name": "HarmonyForge",
    "tagline": "A music creation app that leverages autistic pattern-thinking strengths by translating visual patterns into music. Players arrange colors, shapes, and positions on a grid -- the pattern IS the music. Includes sensory-safe environments, emotion vocabulary tools, and therapist observer mode.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/harmonyforge/icon-sm.webp",
    "mascotPath": "/apps/harmonyforge/mascot.webp",
    "implementing": true,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/harmonyforge/icon.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "harvestforge",
    "name": "HarvestForge",
    "tagline": "Run a farm from seed to shelf \u2014 manage soil microbiomes, rotate crops, navigate drought and pest challenges, trace food through the supply chain, and investigate food justice issues that determine who eats and who goes hungry.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/harvestforge/icon-sm.webp",
    "mascotPath": "/apps/harvestforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "heatforge",
    "name": "HeatForge",
    "tagline": "Race heat through solids, liquids, and gases \u2014 watch convection currents spiral, design insulation that defeats a blowtorch, and discover why ice cream melts faster on a hot sidewalk than in the freezer as you master the three laws of thermodynamics.",
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
    "hasUserGuide": true
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
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": true
  },
  {
    "slug": "improvquest",
    "name": "ImprovQuest",
    "tagline": "Play improv comedy games with friends and AI scene partners \u2014 say \"yes, and...\" to adventure",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/improvquest/icon-sm.webp",
    "mascotPath": "/apps/improvquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "inclusionforge",
    "name": "InclusionForge",
    "tagline": "Experience daily life through different abilities, explore the history of disability rights, then design solutions that work for everyone \u2014 using Universal Design principles to build a more accessible world. Ages 9-14.",
    "vertical": "academics",
    "heroColor": "#81C784",
    "iconPath": "/apps/inclusionforge/icon-sm.webp",
    "mascotPath": "/apps/inclusionforge/mascot.webp",
    "implementing": false,
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
    "hasUserGuide": true
  },
  {
    "slug": "inkquest",
    "name": "InkQuest",
    "tagline": "Junior investigative journalists at a school newspaper collect data, analyze patterns, identify bias, and write articles. Addresses data literacy + media literacy simultaneously.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/inkquest/icon-sm.webp",
    "mascotPath": "/apps/inkquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "jestforge",
    "name": "JestForge",
    "tagline": "Learn to write jokes, riddles, and puns \u2014 then battle friends to see who's funniest",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/jestforge/icon-sm.webp",
    "mascotPath": "/apps/jestforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "labsmith",
    "name": "Labsmith",
    "tagline": "Virtual science lab where kids run real physics simulations \u2014 mix chemicals, build circuits, test buoyancy \u2014 earning mastery ranks through hands-on experimentation, not quizzes. Hypothesis-first loop: predict \u2192 run \u2192 observe \u2192 reconcile.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/labsmith/icon-sm.webp",
    "mascotPath": "/apps/labsmith/mascot.webp",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/labsmith/icon.webp",
    "longTagline": "LabSmith is a science experiment sandbox RPG for curious kids ages 9\u201314. You play as an apprentice \"Smith\" at the Grand Laboratory, conducting interactive physics and science simulations to earn mastery ranks and unlock new experiments.",
    "features": [
      {
        "name": "First Launch",
        "description": "1. Open LabSmith and enter your name to create your scientist profile."
      },
      {
        "name": "Your First Session",
        "description": "Your first session takes about 10\u201315 minutes and covers one experiment in the Mechanics Lab. Here is what to expect:"
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
    "hasUserGuide": true
  },
  {
    "slug": "levelforge",
    "name": "LevelForge",
    "tagline": "Players learn game design by designing, building, playtesting, and sharing their own playable games",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/levelforge/icon-sm.webp",
    "mascotPath": "/apps/levelforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "lifequest",
    "name": "LifeQuest",
    "tagline": "Navigate real-life consumer decisions \u2014 compare phone plans, read lease agreements, plan meals on a budget, spot consumer scams, and manage a household \u2014 through simulation of the everyday adult scenarios that middle schoolers will face within five years. Ages 11-14.",
    "vertical": "academics",
    "heroColor": "#81C784",
    "iconPath": "/apps/lifequest/icon-sm.webp",
    "mascotPath": "/apps/lifequest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "linguaquest",
    "name": "LinguaQuest",
    "tagline": "Explore a vibrant adventure world where you MUST communicate in your target language to solve puzzles, make friends, order food, and save the kingdom \u2014 an RPG that makes language learning irresistible.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/linguaquest/icon-sm.webp",
    "mascotPath": "/apps/linguaquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "logicquest",
    "name": "LogicQuest",
    "tagline": "Master the building blocks of clear thinking \u2014 identify logical fallacies, construct truth tables, map arguments, and crack syllogistic puzzles through detective investigations and debate challenges. Ages 10-14.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/logicquest/icon-sm.webp",
    "iconHeroPath": "/apps/logicquest/icon.webp",
    "mascotPath": "/apps/logicquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "lorequest",
    "name": "LoreQuest",
    "tagline": "Kids ages 10-14 write branching stories inside an RPG world",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/lorequest/icon-sm.webp",
    "mascotPath": "/apps/lorequest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "machineforge",
    "name": "MachineForge",
    "tagline": "Build extreme machines from simple components \u2014 levers, pulleys, gears, and wheels \u2014 then test them in a physics sandbox, design vehicles, launch catapults, and demolish structures by exploiting mechanical weak points.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/machineforge/icon-sm.webp",
    "mascotPath": "/apps/machineforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "makerforge",
    "name": "MakerForge",
    "tagline": "Design, prototype, and virtually fabricate objects using 3D printing simulation, Arduino circuit building, and materials science \u2014 mastering the full engineering design process through constrained challenges.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/makerforge/icon-sm.webp",
    "mascotPath": "/apps/makerforge/mascot.webp",
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
    "hasUserGuide": true
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
    "hasUserGuide": true
  },
  {
    "slug": "mapforge",
    "name": "MapForge",
    "tagline": "Build fantasy worlds from tectonic plates up \u2014 master geography, ecology, economics, and storytelling through world-building. Players create planets by forging plate tectonics (mountains/oceans), designing climate patterns (latitude/altitude/currents), painting biomes, founding civilizations (based on resources), establishing trade routes (geography and distance), and simulating conflicts (scarcit",
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
    "hasUserGuide": true
  },
  {
    "slug": "marketquest",
    "name": "MarketQuest",
    "tagline": "Virtual economy where students explore supply and demand, set prices, trade goods, and run market experiments -- building economic literacy through hands-on simulation and strategic decision-making.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/marketquest/icon-sm.webp",
    "mascotPath": "/apps/marketquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "mathlore",
    "name": "MathLore",
    "tagline": "Ethnomathematics adventure traveling through world civilizations \u2014 Babylonian base-60, Mayan vigesimal, Islamic geometric art, Indian zero/algebra, African fractal geometry, Inca quipu, Japanese origami geometry. Culturally responsive math education.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/mathlore/icon-sm.webp",
    "mascotPath": "/apps/mathlore/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "measurequest",
    "name": "MeasureQuest",
    "tagline": "Hands-on measurement adventures: unit conversions, area and perimeter calculations, data representation, and real-world measurement applications -- building mathematical fluency through interactive challenges.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/measurequest/icon-sm.webp",
    "mascotPath": "/apps/measurequest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "medicquest",
    "name": "MedicQuest",
    "tagline": "Run a medical clinic, diagnose patients, perform first aid, and investigate disease outbreaks \u2014 learn anatomy, clinical reasoning, triage, and public health through case-based medical detective gameplay. Includes health influences investigation, patient communication skills, and wellness goal-setting for complete health education coverage.",
    "vertical": "stem",
    "heroColor": "#81C784",
    "iconPath": "/apps/medicquest/icon-sm.webp",
    "mascotPath": "/apps/medicquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "mindforge",
    "name": "MindForge",
    "tagline": "Adventure RPG where players navigate social scenarios, manage stress through mini-games, and build emotional intelligence by helping NPCs resolve conflicts. Combines CASEL's 5 core competencies with SHAPE America's National Health Education Standards in a quest-based format. AI-driven NPCs respond to player choices with realistic emotional reactions.",
    "vertical": "dir-fedc",
    "heroColor": "#81C784",
    "iconPath": "/apps/mindforge/icon-sm.webp",
    "mascotPath": "/apps/mindforge/mascot.webp",
    "mentor": "Sage",
    "implementing": true,
    "standards": [
      "CASEL",
      "NGSS Health"
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
    "hasUserGuide": true
  },
  {
    "slug": "mintforge",
    "name": "MintForge",
    "tagline": "Financial math game where financial scenarios ARE the math problems \u2014 compound interest, percentage markup, budgeting, loan amortization, stock market simulation. Math-first approach to financial literacy.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/mintforge/icon-sm.webp",
    "mascotPath": "/apps/mintforge/mascot.webp",
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
    "hasUserGuide": true
  },  {
    "slug": "mythforge",
    "name": "MythForge",
    "tagline": "Explore ancient civilizations through mythology-driven adventure quests \u2014 meet gods and heroes, battle mythological creatures, collect historical artifacts, and build ancient cities while learning Greek, Roman, Norse, Egyptian, and Mesoamerican cultures.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/mythforge/icon-sm.webp",
    "mascotPath": "/apps/mythforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "neuralquest",
    "name": "NeuralQuest",
    "tagline": "Players train image classifiers, build recommendation systems, discover how bias creeps into data, and explore AI ethics through hands-on experiments. Learn how AI actually works -- not by coding, but by doing. The first gamified AI literacy app for kids on any platform.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/neuralquest/icon-sm.webp",
    "mascotPath": "/apps/neuralquest/mascot.webp",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/neuralquest/icon.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "newsforge",
    "name": "NewsForge",
    "tagline": "Run a digital newsroom \u2014 investigate stories through primary sources, evaluate credibility under deadline pressure, design data visualizations, produce multimedia reports, and compete to be first with accurate news in a world full of misinformation.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/newsforge/icon-sm.webp",
    "mascotPath": "/apps/newsforge/mascot.webp",
    "mentor": "Scoop",
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
    "hasUserGuide": true
  },
  {
    "slug": "nexusforge",
    "name": "NexusForge",
    "tagline": "Build and manage interconnected systems where actions cascade across ecology, economy, health, and policy. First gamified systems thinking app for ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/nexusforge/icon-sm.webp",
    "mascotPath": "/apps/nexusforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "numberverse",
    "name": "Numberverse",
    "tagline": "Kids ages 10-14 construct and explore a living world using math",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/numberverse/icon-sm.webp",
    "mascotPath": "/apps/numberverse/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "originforge",
    "name": "OriginForge",
    "tagline": "Explore knowledge traditions from cultures worldwide \u2014 Indigenous ecological knowledge, African mathematical systems, Asian philosophical traditions, Pacific navigation techniques. Developed in partnership with cultural representatives.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/originforge/icon-sm.webp",
    "mascotPath": "/apps/originforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "pixelforge",
    "name": "PixelForge",
    "tagline": "Gamified visual arts studio where players master design principles through creative challenges",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/pixelforge/icon-sm.webp",
    "mascotPath": "/apps/pixelforge/mascot.webp",
    "implementing": true,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "iconHeroPath": "/apps/pixelforge/icon.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "powerforge",
    "name": "PowerForge",
    "tagline": "Build power plants, manage electrical grids, and engineer renewable energy solutions \u2014 master energy conversion, thermodynamics, and sustainable engineering through infrastructure simulation and physics experiments.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/powerforge/icon-sm.webp",
    "mascotPath": "/apps/powerforge/mascot.webp",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
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
    "hasUserGuide": true
  },
  {
    "slug": "prismforge",
    "name": "PrismForge",
    "tagline": "Bend, split, and focus light through a virtual optics bench \u2014 explore lenses, prisms, mirrors, and the full electromagnetic spectrum while solving light-based engineering challenges and building devices from magnifying glasses to fiber optic cables.",
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
    "hasUserGuide": true
  },
  {
    "slug": "proofquest",
    "name": "ProofQuest",
    "tagline": "Logic puzzle adventure building proof-readiness through deductive reasoning puzzles, informal proofs, and mathematical writing. Themed around mathematical discoveries (Euler's bridges, Ramsey theory, four-color theorem).",
    "vertical": "stem",
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
    "hasUserGuide": true
  },
  {
    "slug": "punchlineforge",
    "name": "PunchlineForge",
    "tagline": "> Meme studio and comic strip builder features have been merged into JestForge as part of portfolio restructuring.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/punchlineforge/icon-sm.webp",
    "mascotPath": "/apps/punchlineforge/mascot.webp",
    "implementing": false,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/punchlineforge/icon.webp",
    "longTagline": "All planned features and curriculum coverage from PunchlineForge are now part of JestForge's roadmap.",
    "features": [
      {
        "name": "Status",
        "description": "All planned features and curriculum coverage from PunchlineForge are now part of JestForge's roadmap."
      }
    ],
    "hasUserGuide": true
  },
  {
    "slug": "questforge",
    "name": "QuestForge",
    "tagline": "Tabletop RPG creation toolkit where kids design characters (stat allocation = algebraic thinking), write quest narratives, build grid-based encounter maps (spatial reasoning), explore dice probability, and manage resource economics. TTRPGs are recognized as therapeutic for autistic youth \u2014 turn-based, self-paced, structured creativity.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/questforge/icon-sm.webp",
    "iconHeroPath": "/apps/questforge/icon.webp",
    "mascotPath": "/apps/questforge/mascot.webp",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": true
  },
  {
    "slug": "quillspell",
    "name": "QuillSpell",
    "tagline": "Spelling and vocabulary mastery through pattern recognition and play.",
    "vertical": "special-interest",
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
    "longTagline": "Welcome to **QuillSpell** \u2014 a competitive spelling bee and word mastery arena for ages 9-14. Master spelling through tournament brackets, etymology exploration, morpheme-building challenges, and an AI pronouncer that follows Scripps National Spelling Bee rules.",
    "features": [
      {
        "name": "The Core Loop",
        "description": "1. **Hear** \u2014 Quill or the pronouncer speaks a word aloud (Scripps protocol)"
      },
      {
        "name": "Game Modes (unlocked progressively)",
        "description": "| Mode | When it unlocks | What you do |"
      },
      {
        "name": "Streaks, Belts & Quill",
        "description": "Quill's voice is encouraging and never punishing. A wrong answer gets *\"Tricky one! Every expert was once a beginner.\"* \u2014 never *\"Wrong!\"*."
      },
      {
        "name": "Settings & Accessibility",
        "description": "Open Settings (behind a parental gate) to find:"
      }
    ],
    "mentor": "Quill",
    "hasUserGuide": true,
    "iconHeroPath": "/apps/quillspell/icon.webp"
  },
  {
    "slug": "ratiorealm",
    "name": "RatioRealm",
    "tagline": "Master ratios, proportions, and percentages through real-world simulation contexts \u2014 recipe scaling in kitchens, blueprint ratios in construction, and map scales in cartography \u2014 with visual models and AI-driven difficulty adaptation. Ages 10-14.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/ratiorealm/icon-sm.webp",
    "mascotPath": "/apps/ratiorealm/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "readquest",
    "name": "ReadQuest",
    "tagline": "Build reading comprehension mastery through interactive passage analysis, evidence-based argument construction, and AI-generated comprehension challenges \u2014 with dual fiction and nonfiction tracks. Ages 9-14.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/readquest/icon-sm.webp",
    "mascotPath": "/apps/readquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "reelforge",
    "name": "ReelForge",
    "tagline": "Players learn filmmaking principles by creating short films within a virtual studio -- storyboarding scenes, choosing camera angles, directing lighting, designing sound, and editing on a timeline. Progress from single-shot exercises to multi-scene narratives, unlocking techniques from the history of cinema. The only unified filmmaking education app on iOS.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/reelforge/icon-sm.webp",
    "mascotPath": "/apps/reelforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "researchquest",
    "name": "ResearchQuest",
    "tagline": "Guided research adventure where students formulate questions, evaluate sources, synthesize findings, and produce reports -- building essential information literacy skills through structured research quests.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/researchquest/icon-sm.webp",
    "mascotPath": "/apps/researchquest/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "riddlerealm",
    "name": "RiddleRealm",
    "tagline": "Solve mind-bending riddles, craft your own brain teasers, and build a puzzle kingdom",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/riddlerealm/icon-sm.webp",
    "mascotPath": "/apps/riddlerealm/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "roboforge",
    "name": "RoboForge",
    "tagline": "Design robots from modular parts, program them in Swift-like block code, enter them in automated factory challenges, and compete in arena battles \u2014 mastering mechanical design, sensor programming, and algorithmic thinking through the most engaging STEM discipline in middle school.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/roboforge/icon-sm.webp",
    "mascotPath": "/apps/roboforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "safetyforge",
    "name": "SafetyForge",
    "tagline": "Navigate the digital world safely through interactive scenarios about privacy, cyberbullying, digital footprint, phishing detection, and responsible technology use \u2014 with a safe social media simulator that teaches real consequences without real risk. Ages 9-14.",
    "vertical": "academics",
    "heroColor": "#81C784",
    "iconPath": "/apps/safetyforge/icon-sm.webp",
    "mascotPath": "/apps/safetyforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "saffronlab",
    "name": "SaffronLab",
    "tagline": "Players travel the world to learn authentic recipes from different cultures, master cooking techniques through precision mini-games, and discover the science behind food \u2014 why bread rises, why onions caramelize, why emulsions hold together. Includes food safety and hygiene education for complete culinary science coverage.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/saffronlab/icon-sm.webp",
    "mascotPath": "/apps/saffronlab/mascot.webp",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/saffronlab/icon.webp",
    "longTagline": "A culinary science and world kitchen adventure for ages 9\u201314. Travel the world, master cooking techniques through precision mini-games, run experiments that explain *why* cooking works, build a thriving restaurant, and unlock new cuisines as your skills grow.",
    "features": [
      {
        "name": "Table of Contents",
        "description": "1. [What SaffronLab Is](#what-saffronlab-is)"
      },
      {
        "name": "What SaffronLab Is",
        "description": "SaffronLab is an offline iPad and iPhone app that turns cooking into a hands-on STEM adventure. Every recipe answers a question \u2014 *why does bread rise? why does"
      },
      {
        "name": "One-Time Setup (about 30 seconds)",
        "description": "1. On first launch, the app asks the child's **age range** \u2014 Under 13, 13\u201317, or 18+. This is the only age question; no birthdates are stored."
      },
      {
        "name": "Where to Find Settings Later",
        "description": "The **gear icon** in the top-right of the home screen opens Settings. Anything sensitive (purchases would be locked, but SaffronLab has none) is behind a **Pare"
      }
    ],
    "hasUserGuide": true
  },
  {
    "slug": "scienceforge",
    "name": "ScienceForge",
    "tagline": "Design real experiments, run virtual simulations, collect data, and build science fair presentations \u2014 with an AI mentor guiding every step of the scientific method.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/scienceforge/icon-sm.webp",
    "mascotPath": "/apps/scienceforge/mascot.webp",
    "implementing": false,
    "standards": [
      "NGSS",
      "CCSS Math",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/scienceforge/icon.webp",
    "longTagline": "All planned features and curriculum coverage from ScienceForge are now part of ForgeKit's roadmap.",
    "features": [
      {
        "name": "Status",
        "description": "All planned features and curriculum coverage from ScienceForge are now part of ForgeKit's roadmap."
      }
    ],
    "hasUserGuide": true
  },
  {
    "slug": "sleuthlab",
    "name": "SleuthLab",
    "tagline": "Players run a detective agency, taking on mystery cases that require real forensic science techniques to solve. Dust for fingerprints, run chromatography, compare fibers under a microscope, analyze handwriting, and build evidence chains to identify suspects. Critical thinking through scientific deduction.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/sleuthlab/icon-sm.webp",
    "mascotPath": "/apps/sleuthlab/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "soundsphere",
    "name": "SoundSphere",
    "tagline": "A soundscape creation tool that transforms heightened auditory sensitivity into a creative strength",
    "vertical": "dir-fedc",
    "heroColor": "#81C784",
    "iconPath": "/apps/soundsphere/icon-sm.webp",
    "mascotPath": "/apps/soundsphere/mascot.webp",
    "implementing": true,
    "standards": [
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/soundsphere/icon.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "speakforge",
    "name": "SpeakForge",
    "tagline": "Speaking and listening skills platform for ages 10-14 covering presentations, discussions, debate, active listening, and media analysis",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/speakforge/icon-sm.webp",
    "mascotPath": "/apps/speakforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "spectrumcanvas",
    "name": "SpectrumCanvas",
    "tagline": "A digital art studio designed for autistic visual thinkers where every art material is simulated without the sensory challenges of the physical version. Watercolor, charcoal, clay, and collage -- all with adjustable texture feedback, sound, and visual intensity. Includes social story illustration tools and an emotion palette that maps feelings to colors.",
    "vertical": "dir-fedc",
    "heroColor": "#E91E63",
    "iconPath": "/apps/spectrumcanvas/icon-sm.webp",
    "mascotPath": "/apps/spectrumcanvas/mascot.webp",
    "implementing": true,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/spectrumcanvas/icon.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "stageforge",
    "name": "StageForge",
    "tagline": "Interactive theater arts studio where students write scripts, design sets, direct scenes, and perform -- building creative confidence through the dramatic arts. Covers the full production pipeline from script to stage.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/stageforge/icon-sm.webp",
    "mascotPath": "/apps/stageforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "starforge",
    "name": "StarForge",
    "tagline": "Players pilot spacecraft through the solar system and beyond, building and upgrading their ship, landing on planets to conduct experiments, establishing colonies, and answering astronomy challenges to unlock new regions of space. Real orbital mechanics, scientifically accurate planet conditions, and simulated space phenomena make this the only gamified space adventure RPG on iOS.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/starforge/icon-sm.webp",
    "mascotPath": "/apps/starforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "strategyforge",
    "name": "StrategyForge",
    "tagline": "Master chess, Go, checkers, backgammon, mancala, and Connect 4 through AI-coached lessons, puzzle challenges, and online play \u2014 with a unified strategy thinking curriculum for ages 9-14. The only app that teaches strategic thinking as a transferable skill across multiple classical games.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/strategyforge/icon-sm.webp",
    "mascotPath": "/apps/strategyforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "styleforge",
    "name": "StyleForge",
    "tagline": "Players design garments from concept sketch through pattern-making, fabric selection, construction, and runway presentation. Learn color theory, proportions, textile science, and design principles through a fashion career progression from amateur to haute couture. The only educational fashion design app on iOS for ages 9-14.",
    "vertical": "steam",
    "heroColor": "#E91E63",
    "iconPath": "/apps/styleforge/icon-sm.webp",
    "mascotPath": "/apps/styleforge/mascot.webp",
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/styleforge/icon.webp",
    "longTagline": "StyleForge is a fashion design and textile arts education app for ages 9-14 where players design garments from concept sketch through fabric selection, pattern-making, construction, and runway presentation \u2014 learning color theory, proportions, textile science, and sustainability along the way.",
    "hasUserGuide": true
  },
  {
    "slug": "synaforge",
    "name": "SynaForge",
    "tagline": "A bidirectional creative tool where drawing produces music and music produces visual art -- simultaneously. Inspired by synesthesia, a neurological phenomenon reported at higher rates among autistic individuals, SynaForge lets children explore the hidden connections between what they see and what they hear through customizable cross-modal mappings and guided explorations.",
    "vertical": "dir-fedc",
    "heroColor": "#81C784",
    "iconPath": "/apps/synaforge/icon-sm.webp",
    "mascotPath": "/apps/synaforge/mascot.webp",
    "implementing": true,
    "standards": [
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/synaforge/icon.webp",
    "longTagline": "SynaForge is a visual-music synesthesia creative tool for autistic children ages 9-14 where drawing produces music and music produces visual art simultaneously. Players explore the connection between color, shape, and sound through bidirectional cross-modal mappings they can customize at any time.",
    "features": [
      {
        "name": "How to Use",
        "description": "1. Choose a mode from the home screen: Draw to Hear, Hear to See, or Both at once"
      }
    ],
    "hasUserGuide": true
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
    "implementing": false,
    "standards": [
      "NCAS",
      "NGSS",
      "ISTE"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": true
  },
  {
    "slug": "taleforge",
    "name": "TaleForge",
    "tagline": "A multiplayer collaborative world-building and storytelling game where players co-create fantasy/sci-fi worlds in real-time using a tile-based map editor, then explore them as characters with AI-generated narrative events, NPC dialogue, and emergent storylines. Think \"Dawn of Worlds meets Minecraft meets AI Dungeon\" -- but native iOS with spatial computing support.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/taleforge/icon-sm.webp",
    "mascotPath": "/apps/taleforge/mascot.webp",
    "implementing": true,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 3,
    "iconHeroPath": "/apps/taleforge/icon.webp",
    "longTagline": "TaleForge is an AI collaborative storytelling and world-building app for ages 14 and up where players co-create fantasy and sci-fi worlds with a tile-based map editor, then explore them as characters with AI-generated narrative events, NPC dialogue, and emergent storylines.",
    "hasUserGuide": true
  },
  {
    "slug": "tectonicforge",
    "name": "TectonicForge",
    "tagline": "Pilot a drill into Earth's mantle, watch continents drift across 250 million years, trigger earthquakes and volcanic eruptions, and become a geological hazard engineer protecting cities from the dynamic planet beneath your feet.",
    "vertical": "stem",
    "heroColor": "#29B6F6",
    "iconPath": "/apps/tectonicforge/icon-sm.webp",
    "mascotPath": "/apps/tectonicforge/mascot.webp",
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
        "description": "Tap to drill down through the Earth's layers. Discover the crust, upper mantle, lower mantle, outer core, and inner core. Each layer has different properties \u2014"
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
    "mentor": "Geo",
    "hasUserGuide": true
  },
  {
    "slug": "terravoyage",
    "name": "TerraVoyage",
    "tagline": "Kids ages 10-14 traverse a stylized world map, identify locations through environmental and cultural clues, solve geography puzzles, and build a \"World Journal\" of discoveries. Players explore SpriteKit tile-map regions, interact with culturally-accurate NPCs powered by FoundationModels, and deduce region identities from architecture, flora, language, and climate clues.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/terravoyage/icon-sm.webp",
    "mascotPath": "/apps/terravoyage/mascot.webp",
    "implementing": true,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/terravoyage/icon.webp",
    "longTagline": "TerraVoyage is a geography and world cultures exploration adventure for ages 10-14 where players traverse a stylized world map, identify locations through environmental and cultural clues, solve geography puzzles, and build a World Journal of discoveries \u2014 turning the whole planet into a game world.",
    "hasUserGuide": true
  },
  {
    "slug": "terrawatch",
    "name": "Terrawatch",
    "tagline": "Gamified citizen science where players contribute real data to scientific databases (iNaturalist, Globe Observer) while earning XP and completing curriculum-aligned quests.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/terrawatch/icon-sm.webp",
    "mascotPath": "/apps/terrawatch/mascot.webp",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": null,
    "iconHeroPath": "/apps/terrawatch/icon.webp",
    "longTagline": "TerraWatch is a gamified citizen science platform for ages 9-14 where students contribute to real scientific projects by collecting field observations with their device's built-in sensors, earning XP and badges while building authentic scientific skills used by professional researchers.",
    "hasUserGuide": true
  },
  {
    "slug": "trailforge",
    "name": "TrailForge",
    "tagline": "Players are dropped into different wilderness biomes and must use real outdoor skills to survive and thrive. Build shelters, start fires with friction, purify water, navigate by stars, identify edible plants, predict weather, and handle emergencies. The only wilderness survival education app on any platform.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/trailforge/icon-sm.webp",
    "mascotPath": "/apps/trailforge/mascot.webp",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/trailforge/icon.webp",
    "longTagline": "TrailForge is a wilderness survival and outdoor skills simulator for ages 9-14 where players learn real survival techniques across diverse biomes \u2014 building shelters, starting fires with friction, purifying water, navigating by stars, identifying edible plants, predicting weather, and handling emerg",
    "hasUserGuide": true
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
    "implementing": true,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/truthquest/icon.webp",
    "longTagline": "TruthQuest is a media literacy and fact-checking game for ages 9-14 where players investigate viral claims, social media posts, and news articles using real journalistic techniques \u2014 source verification, reverse image search simulation, and statistical analysis \u2014 to determine what is true, misleadin",
    "hasUserGuide": true
  },
  {
    "slug": "venturequest",
    "name": "VentureQuest",
    "tagline": "Players start and grow businesses from scratch -- beginning with a lemonade stand and progressing through food trucks, retail shops, tech startups, and enterprises. Make real business decisions about pricing, marketing, hiring, inventory, and competition. Different from MintQuest (personal finance): this teaches how businesses actually work. The only iOS-native business simulation for ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/venturequest/icon-sm.webp",
    "mascotPath": "/apps/venturequest/mascot.webp",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/venturequest/icon.webp",
    "longTagline": "VentureQuest is an entrepreneurship, business simulation, and personal finance education app for ages 9-14 where players ideate products, launch businesses, manage operations, and grow an enterprise while learning market dynamics, customer behavior, budgeting, saving, investing, compound interest, a",
    "hasUserGuide": true
  },
  {
    "slug": "waveforge",
    "name": "WaveForge",
    "tagline": "Visualize sound as a living waveform \u2014 tune an oscilloscope, build a speaker from scratch, engineer concert hall acoustics, decode whale songs, and master the physics of vibration that underlies all music and communication.",
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
    "hasUserGuide": true
  },
  {
    "slug": "weatherforge",
    "name": "WeatherForge",
    "tagline": "Build weather instruments, track real storms, predict tomorrow's weather, and simulate the forces behind Earth's most powerful phenomena.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/weatherforge/icon-sm.webp",
    "mascotPath": "/apps/weatherforge/mascot.webp",
    "implementing": false,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "iconHeroPath": "/apps/weatherforge/icon.webp",
    "longTagline": "WeatherForge is a meteorology and storm science lab for ages 9-14 where players build weather instruments, track real storms using live weather data, predict tomorrow's weather, and simulate the forces behind Earth's most powerful phenomena \u2014 hurricanes, tornadoes, thunderstorms, and blizzards.",
    "hasUserGuide": true
  },
  {
    "slug": "wellnessforge",
    "name": "WellnessForge",
    "tagline": "Build health literacy through nutrition analysis, evidence-based substance abuse prevention, first aid simulations, and social-emotional learning \u2014 using the research-proven Life Skills Training model rather than fear-based approaches. Ages 9-14.",
    "vertical": "dir-fedc",
    "heroColor": "#81C784",
    "iconPath": "/apps/wellnessforge/icon-sm.webp",
    "mascotPath": "/apps/wellnessforge/mascot.webp",
    "implementing": true,
    "standards": [
      "CASEL",
      "NGSS Health"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/wellnessforge/icon.webp",
    "longTagline": "WellnessForge is a health, nutrition, and life skills academy for ages 9-14 where students learn evidence-based health education \u2014 nutrition analysis, first aid, mental health skills, personal health habits, and safety decisions \u2014 aligned to National Health Education Standards (NHES 1-8). Parents ca",
    "hasUserGuide": true
  },
  {
    "slug": "wildlens",
    "name": "WildLens",
    "tagline": "Photograph real animals with your camera, identify species using on-device CoreML, and learn why they matter through food webs, habitat relationships, and ecosystem interconnections. The differentiator: not just what it is \u2014 but why it matters. Ages 9-14.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/wildlens/icon-sm.webp",
    "mascotPath": "/apps/wildlens/mascot.webp",
    "implementing": true,
    "standards": [
      "ISTE",
      "Common Sense Privacy"
    ],
    "hasM9Accessories": true,
    "wave": 1,
    "iconHeroPath": "/apps/wildlens/icon.webp",
    "longTagline": "WildLens is a wildlife discovery and ecology explorer for ages 9-14 where players photograph real wildlife, identify species with on-device AI, learn ecology through interactive food webs and habitat simulations, and collect observations in a digital field journal \u2014 aligned to NGSS middle school lif",
    "hasUserGuide": true
  },
  {
    "slug": "witquest",
    "name": "WitQuest",
    "tagline": "> Comedy RPG adventure mode has been merged into JestForge as part of portfolio restructuring.",
    "vertical": "academics",
    "heroColor": "#4A6FA5",
    "iconPath": "/apps/witquest/icon-sm.webp",
    "mascotPath": "/apps/witquest/mascot.webp",
    "implementing": true,
    "standards": [
      "CCSS ELA",
      "C3 Social Studies",
      "ISTE"
    ],
    "hasM9Accessories": true,
    "wave": 2,
    "iconHeroPath": "/apps/witquest/icon.webp",
    "longTagline": "All planned features and curriculum coverage from WitQuest are now part of JestForge's roadmap.",
    "features": [
      {
        "name": "Status",
        "description": "All planned features and curriculum coverage from WitQuest are now part of JestForge's roadmap."
      }
    ],
    "hasUserGuide": true
  },
  {
    "slug": "wonderforge",
    "name": "WonderForge",
    "tagline": "Become a science magician \u2014 watch \"impossible\" demonstrations, form hypotheses, reveal the physics and chemistry behind each trick, then perform your own science shows.",
    "vertical": "special-interest",
    "heroColor": "#FFA726",
    "iconPath": "/apps/wonderforge/icon-sm.webp",
    "mascotPath": "/apps/wonderforge/mascot.webp",
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
    "hasUserGuide": true
  },
  {
    "slug": "lyricforge",
    "name": "LyricForge",
    "tagline": "Write the Songs You Hear in Your Head \u2014 tween songwriting studio where the lyric is the protagonist; form scaffolds + on-device rhyme/meter + AI Socratic lyric collaborator (Pip).",
    "vertical": "steam",
    "heroColor": "#E88774",
    "iconPath": "/apps/lyricforge/icon-sm.webp",
    "iconHeroPath": "/apps/lyricforge/icon.webp",
    "mascotPath": "/apps/lyricforge/mascot.webp",
    "mentor": "Pip",
    "implementing": false,
    "standards": [
      "NCAS MU:Cr1-Cr3",
      "CCSS ELA W.6-8.3",
      "CCSS ELA RL.6-8.4"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  },
  {
    "slug": "haikuquest",
    "name": "HaikuQuest",
    "tagline": "Form-Scaffold Poetry for Tweens \u2014 haiku, tanka, cinquain, limerick with syllable counters, cultural-context teaching, and AI Socratic refinement (Cherry).",
    "vertical": "academics",
    "heroColor": "#F4A5B8",
    "iconPath": "/apps/haikuquest/icon-sm.webp",
    "iconHeroPath": "/apps/haikuquest/icon.webp",
    "mascotPath": "/apps/haikuquest/mascot.webp",
    "mentor": "Cherry",
    "implementing": false,
    "standards": [
      "CCSS ELA W.6-8.3",
      "CCSS ELA RL.6-8.4",
      "NCAS LA:Cr1-Cr3"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  },
  {
    "slug": "characterforge",
    "name": "CharacterForge",
    "tagline": "Character-Craft Workshop for Tweens \u2014 build the people who could be in stories. Character sheet, arc tracker, relationship graph, voice-consistency feedback (Ink).",
    "vertical": "academics",
    "heroColor": "#3D5A80",
    "iconPath": "/apps/characterforge/icon-sm.webp",
    "iconHeroPath": "/apps/characterforge/icon.webp",
    "mascotPath": "/apps/characterforge/mascot.webp",
    "mentor": "Ink",
    "implementing": false,
    "standards": [
      "CCSS ELA W.6-8.3.B",
      "NCAS TH:Cr2",
      "NCAS LA:Cr1",
      "CASEL"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  },
  {
    "slug": "coregrealm",
    "name": "CoRegRealm",
    "tagline": "Co-Regulation Role-Reversal RPG \u2014 kid co-regulates a smaller creature companion through dysregulation cycles, learning the regulation primitive through the teacher role (Cyan).",
    "vertical": "dir-fedc",
    "heroColor": "#4FB3A6",
    "iconPath": "/apps/coregrealm/icon-sm.webp",
    "iconHeroPath": "/apps/coregrealm/icon.webp",
    "mascotPath": "/apps/coregrealm/mascot.webp",
    "mentor": "Cyan",
    "implementing": false,
    "standards": [
      "DIR/FEDC Capacities 1-2",
      "DIR/FEDC Capacity 9",
      "CASEL Self-Management",
      "SAMHSA TIP 57"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  },
  {
    "slug": "rupturerepair",
    "name": "RuptureRepair",
    "tagline": "Misattunement \u2192 Repair Cycle as the Curriculum \u2014 two-player relational-craft scaffolding the 5-step repair protocol (Mend). Trauma-informed; no scoring; off-ramps every scenario.",
    "vertical": "dir-fedc",
    "heroColor": "#82A878",
    "iconPath": "/apps/rupturerepair/icon-sm.webp",
    "iconHeroPath": "/apps/rupturerepair/icon.webp",
    "mascotPath": "/apps/rupturerepair/mascot.webp",
    "mentor": "Mend",
    "implementing": false,
    "standards": [
      "DIR/FEDC Capacities 5-6",
      "SAMHSA TIP 57",
      "CASEL Relationship Skills"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  },
  {
    "slug": "tempcheck",
    "name": "TempCheck",
    "tagline": "Daily Attunement Temp-Checks \u2014 15-second bidirectional affect check-in with caregiver; surfaces overlaps + differences; growth chart over weeks (Pulse).",
    "vertical": "dir-fedc",
    "heroColor": "#FF9D8E",
    "iconPath": "/apps/tempcheck/icon-sm.webp",
    "iconHeroPath": "/apps/tempcheck/icon.webp",
    "mascotPath": "/apps/tempcheck/mascot.webp",
    "mentor": "Pulse",
    "implementing": false,
    "standards": [
      "DIR/FEDC Capacity 3",
      "CASEL Self-Awareness",
      "CASEL Social Awareness",
      "SAMHSA TIP 57"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  },
  {
    "slug": "gambittales",
    "name": "GambitTales",
    "tagline": "Narrative-Driven Chess for Tweens \u2014 tactical patterns (pin / fork / skewer) as recurring character archetypes (Sir Pinwell, Twin Knights of Fork Hill, Lady Skewer). Captain Castle rook mascot.",
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
    "hasUserGuide": false
  },
  {
    "slug": "stonesong",
    "name": "StoneSong",
    "tagline": "Narrative-Driven Go for Tweens \u2014 life-and-death patterns as character archetypes (Patient Bamboo, Hungry Crane, Master Snail, Sparring Tiger). 9\u00d79 \u2192 13\u00d713 \u2192 19\u00d719 board-scale progression. Stone mascot.",
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
    "hasUserGuide": false
  },
  {
    "slug": "generalstale",
    "name": "GeneralsTale",
    "tagline": "Narrative-Driven Xiangqi (Chinese Chess) for Tweens \u2014 piece-asymmetry-as-character-richness (General Zhang the cannon, Elephant Wei the river-bound defender). General Mei mascot.",
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
    "hasUserGuide": false
  },
  {
    "slug": "motiflab",
    "name": "MotifLab",
    "tagline": "Composition-as-Narrative-Arc for Tweens \u2014 motif IS the protagonist; 6-stage arc (intro \u2192 motif statement \u2192 development \u2192 contrast \u2192 recapitulation \u2192 resolution). Trill songbird mascot (sibling to LyricForge's Pip).",
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
    "hasUserGuide": false
  },
  {
    "slug": "pipquest",
    "name": "PipQuest",
    "tagline": "Narrative-Driven Backgammon + Dice-Strategy for Tweens \u2014 voyage IS the curriculum (Fruitlandia \u2192 Sunrise Cliffs \u2192 Storm Bay \u2192 Icelandia). Peg dice-cup mascot + Peglegra / Chompus NPCs.",
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
    "hasUserGuide": false
  },
  {
    "slug": "dealtales",
    "name": "DealTales",
    "tagline": "Narrative-Driven Bridge + Partnership Trick-Taking for Tweens \u2014 bidding-as-conversation between Whisp + Bram. Highest CASEL fit in the Distributed-Narrative cluster (partnership IS the curriculum). Whisp wisp-of-cloud mascot.",
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
    "hasUserGuide": false
  },
  {
    "slug": "tinyletters",
    "name": "TinyLetters",
    "tagline": "Emergent Phonics + Alphabet for Ages 5-7 \u2014 letter-sound mapping, sight words, decodable storyboarding. Pip Jr (younger-sibling sparrow to LyricForge's Pip) guides daily 15-min phonics routines.",
    "vertical": "academics",
    "heroColor": "#FFB89C",
    "iconPath": "/apps/tinyletters/icon-sm.webp",
    "iconHeroPath": "/apps/tinyletters/icon.webp",
    "mascotPath": "/apps/tinyletters/mascot.webp",
    "mentor": "Pip Jr",
    "implementing": false,
    "standards": [
      "CCSS Foundations.RF.K-2",
      "CCSS RL.K-2"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  },
  {
    "slug": "countingpals",
    "name": "CountingPals",
    "tagline": "Number Sense + Early Addition for Ages 5-7 \u2014 subitizing, counting, comparing, one-digit addition. Calc Jr (younger calculator-monster) guides daily 15-min math routines.",
    "vertical": "stem",
    "heroColor": "#A8D5F0",
    "iconPath": "/apps/countingpals/icon-sm.webp",
    "iconHeroPath": "/apps/countingpals/icon.webp",
    "mascotPath": "/apps/countingpals/mascot.webp",
    "mentor": "Calc Jr",
    "implementing": false,
    "standards": [
      "CCSS Math.K.CC",
      "CCSS Math.1.OA"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  },
  {
    "slug": "taletrail",
    "name": "TaleTrail",
    "tagline": "Interactive Picture-Book Composition for Ages 5-8 \u2014 picture-book sequencing, optional dictation, character creation, story-arc scaffolds. Page (folded-paper mascot) guides early narrative composition.",
    "vertical": "academics",
    "heroColor": "#C8A8E0",
    "iconPath": "/apps/taletrail/icon-sm.webp",
    "iconHeroPath": "/apps/taletrail/icon.webp",
    "mascotPath": "/apps/taletrail/mascot.webp",
    "mentor": "Page",
    "implementing": false,
    "standards": [
      "CCSS ELA.K.W",
      "CCSS RL.K-2",
      "NCAS TH:Cr1"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  },
  {
    "slug": "huggyhabits",
    "name": "HuggyHabits",
    "tagline": "Daily Wellness Routines for Ages 5-7 \u2014 sleep, brush, eat, move habits via gentle scaffolds. Hug (cuddly bear-hug mascot) anchors morning + bedtime routines.",
    "vertical": "special-interest",
    "heroColor": "#F4C9A8",
    "iconPath": "/apps/huggyhabits/icon-sm.webp",
    "iconHeroPath": "/apps/huggyhabits/icon.webp",
    "mascotPath": "/apps/huggyhabits/mascot.webp",
    "mentor": "Hug",
    "implementing": false,
    "standards": [
      "CASEL Self-Management",
      "SHAPE America Pre-K Health",
      "NAEYC ECE Standards"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  },
  {
    "slug": "bugscamp",
    "name": "BugsCamp",
    "tagline": "Early Life Science Naturalism for Ages 5-8 \u2014 bug + leaf + weather identification + observation journaling. Beetle (ladybug-naturalist mascot) guides backyard discovery.",
    "vertical": "special-interest",
    "heroColor": "#B4D88C",
    "iconPath": "/apps/bugscamp/icon-sm.webp",
    "iconHeroPath": "/apps/bugscamp/icon.webp",
    "mascotPath": "/apps/bugscamp/mascot.webp",
    "mentor": "Beetle",
    "implementing": false,
    "standards": [
      "NGSS K-2 LS",
      "NGSS K-2 ESS",
      "NAEYC Early STEM"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  },
  {
    "slug": "melodymice",
    "name": "MelodyMice",
    "tagline": "Early Music + Rhythm for Ages 5-7 \u2014 rhythm patterns, instrument identification, call-and-response melody. Squeak (mouse-musician mascot) guides early music exposure.",
    "vertical": "steam",
    "heroColor": "#D8A8E0",
    "iconPath": "/apps/melodymice/icon-sm.webp",
    "iconHeroPath": "/apps/melodymice/icon.webp",
    "mascotPath": "/apps/melodymice/mascot.webp",
    "mentor": "Squeak",
    "implementing": false,
    "standards": [
      "NCAS MU.K-2.Cr1",
      "NCAS MU.K-2.Re1"
    ],
    "hasM9Accessories": false,
    "wave": null,
    "hasUserGuide": false
  }
];

export const appsBySlug: Record<string, AppData> = Object.fromEntries(
  apps.map(a => [a.slug, a])
);

export const verticalCounts = {
  "stem": 41,
  "steam": 20,
  "academics": 25,
  "dir-fedc": 17,
  "special-interest": 38
};
