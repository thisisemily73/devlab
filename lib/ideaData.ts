{/* GAME IDEA DATA */}

const pick = (list: string[]) => list[Math.floor(Math.random() * list.length)];

const generateMegaIdea = () => {
  return {
    pitch: `A ${pick(GENRES)} game set in ${pick(SETTINGS)},`,
    hook: `${pick(TWISTS)}.`,
    objective: `The goal is to ${pick(GOALS)} while managing ${pick(MECHANICS)}.`,
    difficulty: `To make it harder: ${pick(COMPLICATIONS)}.`,
    look: `Visual style: ${pick(AESTHETICS)}.`
  };
};

export interface GameIdea {
  genres: string[];
  twists: string[];
  goals: string[];
  mechanics: string[];
  settings: string[];
  refineOptions: string[];
  aesthetics: string[];
}

export const GENRES: string[] = [
  "Horror", "Tycoon", "Simulator", "Obby", "Survival", "Stealth", "FPS", "Adventure",
  "Asymmetrical Horror", "Roguelike", "Social Deduction", "Bullet Heaven", "Tower Defense",
  "Rhythm-Action", "Platform Fighter", "Extraction Shooter", "Open World RPG", 
  "Dungeon Crawler", "Cozy/Wholesome", "Psychological Thriller", "Metroidvania",
  "City Builder", "Auto-Battler", "Bullet Hell", "Walking Simulator", "Grand Strategy",
  "Deckbuilder", "Point-and-Click", "Sports Management", "God Sim", "Vehicle Combat"
];

export const TWISTS: string[] = [
  "but the map changes every round",
  "with proximity voice chat mechanics",
  "where one player secretly sabotages others",
  "with time looping mechanics",
  "where players evolve abilities over time",
  "with permadeath consequences",
  "where the environment reacts to sound",
  "You can only move when not being watched",
  "The map changes every minute",
  "Sound attracts enemies",
  "Everything is reversed",
  "You are not alone, but you can't see them",
  "but your flashlight battery is your health",
  "where you can only see through other players' eyes",
  "but the gravity shifts every 30 seconds",
  "where you lose a random ability every level",
  "where the floor is literally rising lava",
  "but you have to narrate your actions to gain power",
  "where the UI is intentionally lying to you",
  "but you can only move while jumping",
  "where your items have a mind of their own",
  "where colors represent different dimensions",
  "but every 5 minutes, roles are swapped randomly",
  "where your shadow is your only enemy",
  "but you can only see in 2D while the world is 3D",
  "where death sends you to a parallel mirror world",
  "but you age 1 year for every minute passed",
  "where players must stay within 10 meters of each other or die",
  "but the game's difficulty is tied to your real-world mic volume",
  "where you can only interact with objects if you know their name"
];

export const GOALS: string[] = [
  "Escape before sunrise",
  "Survive 10 minutes",
  "Find all hidden objects",
  "Defeat the hidden entity",
  "Reach the exit without being caught",
  "Extract the artifact and reach the helipad",
  "Protect the VIP NPC at all costs",
  "Solve a murder mystery before the timer ends",
  "Build a base that withstands a massive nightly raid",
  "Infect the entire map with a custom virus",
  "Collect enough scrap to repair a getaway ship",
  "Hold a specific zone against all other players",
  "Deliver a package through a warzone",
  "Bankrupt all competing players",
  "Successfully perform a ritual",
  "Map out 100% of an uncharted cave system",
  "Keep a fire burning in a blizzard",
  "Reconnect a broken satellite array",
  "Assassinate a target without making a sound",
  "Translate an ancient alien language"
];

export const MECHANICS: string[] = [
  "Stamina system", "Permadeath", "Dynamic lighting", "Random events", "Limited vision",
  "Grappling hook physics", "Inventory Tetris", "Sanity meter", "Destructible environments",
  "Crafting and recipe discovery", "Time-stop / Bullet time", "Global leaderboard impact",
  "Trading and player economy", "Base building", "Skill trees", "Vocal recognition",
  "Pet/Companion system", "Weather-affected movement", "Parkour movement", 
  "Hunger and Thirst", "Limb-specific damage", "Oxygen management", "Hacking minigames",
  "Slow-motion on kill", "Rewind time (5 seconds)", "Day/Night cycle buffs",
  "Physics-based puzzles", "Body temperature regulation", "Soul-binding with another player"
];

export const SETTINGS: string[] = [
  "abandoned prison", "haunted hospital", "underwater facility", "floating islands",
  "futuristic city", "underground bunker", "creepy forest", "deserted amusement park",
  "post-apocalyptic wasteland", "Victorian steampunk London", "inside a gargantuan organism",
  "1950s ideal suburbia", "medieval castle in a black hole", "neon cyberpunk slum",
  "infinite procedurally generated office", "high-fantasy dimensional library",
  "miniature world (ant-sized)", "space station orbiting a dying star", "ancient Aztec temple",
  "arctic research outpost", "abandoned space-mall", "dreams of a sleeping god",
  "interstellar luxury cruise ship", "WW1 trenches with magic", "low-poly vaporwave beach",
  "a world where it never stops raining", "the inside of a 1990s computer"
];

export const COMPLICATIONS: string[] = [
  "You have no map",
  "Your tools break easily",
  "Every action costs 'Life Force'",
  "The enemy can hear your real-life breathing",
  "Resources are shared between all players globally",
  "You start with nothing and must scavenge everything",
  "The world resets if you take a single point of damage",
  "You are tethered to a monster by a 50ft chain",
  "Your memory is wiped every level",
  "You can only speak in emojis to your team"
];

export const AESTHETICS: string[] = [
  "PS1-style low poly", "Hyper-realistic (UE5)", "Cel-shaded", "Vaporwave", 
  "Claymation", "Minimalist", "Bodycam footage", "Noir", "8-bit Pixel Art", 
  "Surrealist", "VHS Tape / Glitchcore", "Brutalist Architecture", "Sketchbook / Ink",
  "Liminal Spaces (Backrooms style)", "Cyber-Gothic"
];

export const REFINE_OPTIONS: string[] = [
  "Make it scarier", "Make it more chaotic", "Make it simpler", "Make it multiplayer",
  "Make it competitive", "Add a 'Hardcore' mode", "Optimize for mobile", 
  "Add Twitch Integration", "Focus on psychological horror", "Make it VR",
  "Add seasonal events", "Include a heavy narrative focus"
];