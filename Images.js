/**
 * ===================================================================
 *  images.js - 統一圖檔資源管理中心 v2 (含配件)
 * ===================================================================
 *  更新：配件也要用文字暫時替換 → 已全部加入 ABCD 文字 + 符號系統
 * 
 *  結構：
 *  /assets/
 *    /dogs/        -> A-E (吉娃娃,柴犬,貴賓,柯基,米克斯)
 *    /accessories/ -> F-M (聖誕帽,鹿角,圍巾,蝴蝶結,鈴鐺,雪花,禮物,聖誕襪)
 *    /backgrounds/ -> N-Q (奶油,松綠,格子,深夜藍)
 * 
 *  替換：只要覆蓋對應檔名的 PNG 即可，沒圖時自動顯示 ABCD / Emoji
 * ===================================================================
 */

export const IMAGE_CONFIG = {
  USE_LOCAL_FILES: true,
  BASE_PATH: "./assets/dogs",
  ACCESSORY_PATH: "./assets/accessories",
  BACKGROUND_PATH: "./assets/backgrounds",
  FALLBACK_MODE: "both",
  ENABLE_ONERROR_FALLBACK: true,
};

export const PLACEHOLDERS = {
  dogs: {
    chihuahua: { letter: "A", symbol: "🐶", alt: "👑", name: "吉娃娃", color: "#FF8FAB" },
    shiba:     { letter: "B", symbol: "🦊", alt: "🧣", name: "柴犬", color: "#7AC74F" },
    poodle:    { letter: "C", symbol: "🐩", alt: "☁️", name: "貴賓", color: "#FFF9ED" },
    corgi:     { letter: "D", symbol: "🐕‍🦺", alt: "🦌", name: "柯基", color: "#E6A532" },
    mix:       { letter: "E", symbol: "🐾", alt: "🎁", name: "米克斯", color: "#8ECAE6" },
  },
  accessories: {
    santa_hat: { letter: "F", symbol: "🎅", alt: "🎄", name: "聖誕帽", code: "santa_hat", color: "#A63A3A", file: "./assets/accessories/santa_hat.png", desc: "紅色聖誕帽" },
    reindeer:  { letter: "G", symbol: "🦌", alt: "🫎", name: "鹿角", code: "reindeer", color: "#8B5E3C", file: "reindeer.png", desc: "麋鹿角髮箍" },
    scarf:     { letter: "H", symbol: "🧣", alt: "🧤", name: "圍巾", code: "scarf", color: "#7AC74F", file: "scarf.png", desc: "綠色毛線圍巾" },
    bow:       { letter: "I", symbol: "🎀", alt: "🎀", name: "蝴蝶結", code: "bow", color: "#FF8FAB", file: "bow.png", desc: "粉色蝴蝶結" },
    bell:      { letter: "J", symbol: "🔔", alt: "🔔", name: "鈴鐺", code: "bell", color: "#E6A532", file: "bell.png", desc: "金色鈴鐺" },
    snow:      { letter: "K", symbol: "❄️", alt: "❅", name: "雪花", code: "snow", color: "#B8E6FE", file: "snow.png", desc: "雪花貼紙" },
    gift:      { letter: "L", symbol: "🎁", alt: "🎀", name: "禮物", code: "gift", color: "#FF8FAB", file: "gift.png", desc: "禮物盒" },
    sock:      { letter: "M", symbol: "🧦", alt: "🧦", name: "聖誕襪", code: "sock", color: "#A63A3A", file: "sock.png", desc: "聖誕襪" },
  },
  backgrounds: {
    cream:    { letter: "N", symbol: "📄", name: "奶油雪花", desc: "溫暖紙張", color: "#FFFBF2" },
    forest:   { letter: "O", symbol: "🌲", name: "松綠毛衣", desc: "手織溫感", color: "#2F4A3B" },
    plaid:    { letter: "P", symbol: "🎀", name: "緋紅格子", desc: "經典節慶", color: "#A63A3A" },
    midnight: { letter: "Q", symbol: "🌙", name: "深夜藍星", desc: "寧靜雪夜", color: "#1E3329" },
  },
  labels: {
    chihuahua: { text: "A", symbol: "👑", name: "小小大魔王", color: "#FF8FAB" },
    shiba: { text: "B", symbol: "🧣", name: "綠圍巾柴", color: "#7AC74F" },
    poodle: { text: "C", symbol: "☁️", name: "捲毛雪球", color: "#FFF9ED" },
    corgi: { text: "D", symbol: "🦌", name: "短腿暖爐", color: "#E6A532" },
    mix: { text: "E", symbol: "🎁", name: "獨一無二", color: "#8ECAE6" },
  }
};

export const BACKGROUND_THEMES = {
  cream:    { id: "cream", ...PLACEHOLDERS.backgrounds.cream, css: "bg-[#FFFBF2]", fileName: "cream.png", localPath: `${IMAGE_CONFIG.BACKGROUND_PATH}/cream.png` },
  forest:   { id: "forest", ...PLACEHOLDERS.backgrounds.forest, css: "bg-[#2F4A3B]", fileName: "forest.png", localPath: `${IMAGE_CONFIG.BACKGROUND_PATH}/forest.png` },
  plaid:    { id: "plaid", ...PLACEHOLDERS.backgrounds.plaid, css: "bg-[#A63A3A]", fileName: "plaid.png", localPath: `${IMAGE_CONFIG.BACKGROUND_PATH}/plaid.png` },
  midnight: { id: "midnight", ...PLACEHOLDERS.backgrounds.midnight, css: "bg-[#1E3329]", fileName: "midnight.png", localPath: `${IMAGE_CONFIG.BACKGROUND_PATH}/midnight.png` },
};

export const ACCESSORY_IMAGES = {
  santa_hat: { id: "santa_hat", letter: "F", name: "聖誕帽", code: "santa_hat", fileName: "santa_hat.png", localPath: `${IMAGE_CONFIG.ACCESSORY_PATH}/santa_hat.png`, placeholder: PLACEHOLDERS.accessories.santa_hat, notes: "200x200 透明背景，沒圖顯示 F/🎅", type: "head" },
  reindeer: { id: "reindeer", letter: "G", name: "鹿角", code: "reindeer", fileName: "reindeer.png", localPath: `${IMAGE_CONFIG.ACCESSORY_PATH}/reindeer.png`, placeholder: PLACEHOLDERS.accessories.reindeer, notes: "沒圖顯示 G/🦌", type: "head" },
  scarf: { id: "scarf", letter: "H", name: "圍巾", code: "scarf", fileName: "scarf.png", localPath: `${IMAGE_CONFIG.ACCESSORY_PATH}/scarf.png`, placeholder: PLACEHOLDERS.accessories.scarf, notes: "沒圖顯示 H/🧣", type: "neck" },
  bow: { id: "bow", letter: "I", name: "蝴蝶結", code: "bow", fileName: "bow.png", localPath: `${IMAGE_CONFIG.ACCESSORY_PATH}/bow.png`, placeholder: PLACEHOLDERS.accessories.bow, notes: "沒圖顯示 I/🎀", type: "decor" },
  bell: { id: "bell", letter: "J", name: "鈴鐺", code: "bell", fileName: "bell.png", localPath: `${IMAGE_CONFIG.ACCESSORY_PATH}/bell.png`, placeholder: PLACEHOLDERS.accessories.bell, notes: "沒圖顯示 J/🔔", type: "decor" },
  snow: { id: "snow", letter: "K", name: "雪花", code: "snow", fileName: "snow.png", localPath: `${IMAGE_CONFIG.ACCESSORY_PATH}/snow.png`, placeholder: PLACEHOLDERS.accessories.snow, notes: "沒圖顯示 K/❄️", type: "effect" },
  gift: { id: "gift", letter: "L", name: "禮物", code: "gift", fileName: "gift.png", localPath: `${IMAGE_CONFIG.ACCESSORY_PATH}/gift.png`, placeholder: PLACEHOLDERS.accessories.gift, notes: "沒圖顯示 L/🎁", type: "prop" },
  sock: { id: "sock", letter: "M", name: "聖誕襪", code: "sock", fileName: "sock.png", localPath: `${IMAGE_CONFIG.ACCESSORY_PATH}/sock.png`, placeholder: PLACEHOLDERS.accessories.sock, notes: "沒圖顯示 M/🧦", type: "prop" },
};

export const ACCESSORY_LIST = Object.values(ACCESSORY_IMAGES);
export const DECORATIONS = ACCESSORY_LIST.map(a => ({ emoji: a.placeholder.symbol, name: a.name, code: a.code, letter: a.letter, fileName: a.fileName }));

export const DOG_IMAGES = {
  chihuahua: { id: "chihuahua", letter: "A", name: "淺色長毛吉娃娃", label: "小小大魔王", sub: "蓬鬆尾巴 · 奶油色", fileName: "chihuahua.png", localPath: `${IMAGE_CONFIG.BASE_PATH}/chihuahua.png`, legacyVar: "pv", placeholder: PLACEHOLDERS.dogs.chihuahua, notes: "600x840 透明PNG" },
  shiba: { id: "shiba", letter: "B", name: "柴犬", label: "綠圍巾柴", sub: "綠圍巾聖誕帽", fileName: "shiba.png", localPath: `${IMAGE_CONFIG.BASE_PATH}/shiba.png`, legacyVar: "Br", placeholder: PLACEHOLDERS.dogs.shiba, notes: "綠圍巾亮點" },
  poodle: { id: "poodle", letter: "C", name: "貴賓", label: "捲毛雪球", sub: "捲毛雲朵感", fileName: "poodle.png", localPath: `${IMAGE_CONFIG.BASE_PATH}/poodle.png`, legacyVar: "tr", placeholder: PLACEHOLDERS.dogs.poodle, notes: "捲毛細節多" },
  corgi: { id: "corgi", letter: "D", name: "柯基", label: "短腿暖爐", sub: "小短腿大笑容", fileName: "corgi.png", localPath: `${IMAGE_CONFIG.BASE_PATH}/corgi.png`, legacyVar: "Mr", placeholder: PLACEHOLDERS.dogs.corgi, notes: "笑容+鹿角" },
  mix: { id: "mix", letter: "E", name: "米克斯", label: "獨一無二", sub: "最特別的你", fileName: "mix.png", localPath: `${IMAGE_CONFIG.BASE_PATH}/mix.png`, legacyVar: "cr", placeholder: PLACEHOLDERS.dogs.mix, notes: "使用者自訂" },
};
export const DOG_LIST = Object.values(DOG_IMAGES);

export function createLetterPlaceholder(letter = "A", symbol = "🐶", bgColor = "#F9F1E6", sizeText = "圖片替換中") {
  if (typeof document !== "undefined") {
    const canvas = document.createElement("canvas");
    canvas.width = 600; canvas.height = 840;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = bgColor; ctx.fillRect(0, 0, 600, 840);
    ctx.fillStyle = "#2F4A3B";
    ctx.font = "bold 200px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(letter, 300, 340);
    ctx.font = "120px sans-serif"; ctx.fillText(symbol, 300, 540);
    ctx.font = "22px sans-serif"; ctx.fillStyle = "rgba(47,74,59,0.6)";
    ctx.fillText(sizeText, 300, 700);
    return canvas.toDataURL("image/png");
  }
  return `placeholder:${letter}:${symbol}`;
}

export function createAccessoryPlaceholder(letter = "F", symbol = "🎅", bgColor = "#FFF9ED") {
  if (typeof document !== "undefined") {
    const canvas = document.createElement("canvas");
    canvas.width = 200; canvas.height = 200;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = bgColor; ctx.fillRect(0, 0, 200, 200);
    ctx.fillStyle = "#2F4A3B";
    ctx.font = "bold 60px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(letter, 100, 70);
    ctx.font = "56px sans-serif"; ctx.fillText(symbol, 100, 140);
    return canvas.toDataURL("image/png");
  }
  return `accessory:${letter}:${symbol}`;
}

export function getDogImageSrc(dogId) { return DOG_IMAGES[dogId]?.localPath || createLetterPlaceholder("?", "❓"); }
export function getAccessorySrc(id) { return ACCESSORY_IMAGES[id]?.localPath || createAccessoryPlaceholder("?", "❓"); }
export function getDogById(id) { return DOG_IMAGES[id] || null; }
export function getAccessoryById(id) { return ACCESSORY_IMAGES[id] || null; }

export function handleImageError(imgElement, id) {
  if (!IMAGE_CONFIG.ENABLE_ONERROR_FALLBACK) return;
  const target = DOG_IMAGES[id] || ACCESSORY_IMAGES[id];
  if (!target) return;
  const ph = target.placeholder;
  if (target.letter && target.letter >= "F") {
    imgElement.src = createAccessoryPlaceholder(ph.letter || ph.text || "?", ph.symbol, ph.color);
  } else {
    imgElement.src = createLetterPlaceholder(ph.letter || ph.text || "?", ph.symbol, ph.color);
  }
  imgElement.dataset.fallback = "true";
  imgElement.style.border = "2px dashed rgba(47,74,59,0.2)";
}

export function handleAccessoryError(imgElement, accessoryId) { handleImageError(imgElement, accessoryId); }
export function enablePlaceholderMode() { IMAGE_CONFIG.USE_LOCAL_FILES = false; IMAGE_CONFIG.FALLBACK_MODE = "both"; }
export function enableLocalMode() { IMAGE_CONFIG.USE_LOCAL_FILES = true; }

export const LEGACY_MAP = { pv: "chihuahua", Br: "shiba", tr: "poodle", Mr: "corgi", cr: "mix" };

if (typeof window !== "undefined") {
  window.DOG_IMAGES = DOG_IMAGES;
  window.DOG_LIST = DOG_LIST;
  window.ACCESSORY_IMAGES = ACCESSORY_IMAGES;
  window.ACCESSORY_LIST = ACCESSORY_LIST;
  window.IMAGE_CONFIG = IMAGE_CONFIG;
  window.PLACEHOLDERS = PLACEHOLDERS;
}
