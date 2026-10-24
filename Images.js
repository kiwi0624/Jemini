/**
 * ===================================================================
 *  images.js - 統一圖檔資源管理中心 v3 精簡空圖版 (修正版)
 * ===================================================================
 *  修正：移除 ABCD 文字，全部使用透明空圖
 *  重點：網頁必須正確引用 EMPTY_IMAGE，否則會顯示破圖
 *
 *  結構：
 *  /assets/dogs/         -> 狗狗 5隻
 *  /assets/accessories/  -> 配件 8個
 *  /assets/backgrounds/  -> 背景 4個
 * ===================================================================
 */

// ==================== [1] 基礎設定 ====================
export const IMAGE_CONFIG = {
  BASE_PATH: "./assets/dogs",
  ACCESSORY_PATH: "./assets/accessories",
  BACKGROUND_PATH: "./assets/backgrounds",
  ENABLE_ONERROR_FALLBACK: true,
};

// 1x1 透明空圖 - 任何圖片載入失敗都顯示這個，不會有 ABCD 文字
export const EMPTY_IMAGE = "data:image/png;base64,[STRIPPED]";

// ==================== [2] 狗狗 ====================
export const DOG_IMAGES = {
  chihuahua: { id: "chihuahua", name: "吉娃娃", fileName: "IMG_0875.png", legacy: "pv" },
  shiba:     { id: "shiba", name: "博美狗", fileName: "IMG_0881.png", legacy: "Br" },
  poodle:    { id: "poodle", name: "貴賓", fileName: "IMG_0879.png", legacy: "tr" },
  corgi:     { id: "corgi", name: "柯基", fileName: "IMG_0880.png", legacy: "Mr" },
  mix:       { id: "mix", name: "米克斯", fileName: "IMG_0876.png", legacy: "cr" },
};

export const DOG_LIST = Object.values(DOG_IMAGES).map(d => ({
  ...d,
  localPath: `${IMAGE_CONFIG.BASE_PATH}/${d.fileName}`
}));

// ==================== [3] 配件 ====================
// 規格：200x200 透明 PNG，檔名同 id
export const ACCESSORY_IMAGES = {
  santa_hat: { id: "santa_hat", name: "聖誕帽", fileName: "santa_hat.png", type: "head" },
  reindeer:  { id: "reindeer",  name: "鹿角",   fileName: "reindeer.png",  type: "head" },
  scarf:     { id: "scarf",     name: "圍巾",   fileName: "scarf.png",     type: "neck" },
  bow:       { id: "bow",       name: "蝴蝶結", fileName: "bow.png",       type: "decor" },
  bell:      { id: "bell",      name: "鈴鐺",   fileName: "bell.png",      type: "decor" },
  snow:      { id: "snow",      name: "雪花",   fileName: "snow.png",      type: "effect" },
  gift:      { id: "gift",      name: "禮物",   fileName: "gift.png",      type: "prop" },
  sock:      { id: "sock",      name: "聖誕襪", fileName: "sock.png",      type: "prop" },
};

export const ACCESSORY_LIST = Object.values(ACCESSORY_IMAGES).map(a => ({
  ...a,
  localPath: `${IMAGE_CONFIG.ACCESSORY_PATH}/${a.fileName}`
}));

// ==================== [4] 背景 ====================
export const BACKGROUND_THEMES = {
  cream:    { id: "cream",    name: "奶油雪花", fileName: "cream.png", css: "bg-[#FFFBF2]" },
  forest:   { id: "forest",   name: "松綠毛衣", fileName: "forest.png", css: "bg-[#2F4A3B]" },
  plaid:    { id: "plaid",    name: "緋紅格子", fileName: "plaid.png", css: "bg-[#A63A3A]" },
  midnight: { id: "midnight", name: "深夜藍星", fileName: "midnight.png", css: "bg-[#1E3329]" },
};

export const BACKGROUND_LIST = Object.values(BACKGROUND_THEMES).map(b => ({
  ...b,
  localPath: `${IMAGE_CONFIG.BACKGROUND_PATH}/${b.fileName}`
}));

// ==================== [5] 舊變數相容 ====================
export const LEGACY_MAP = { pv: "chihuahua", Br: "shiba", tr: "poodle", Mr: "corgi", cr: "mix" };

// ==================== [6] 核心函式 ====================

// [6-1] 產生空圖 (透明)
export function createEmptyPlaceholder() {
  return EMPTY_IMAGE;
}

// [6-2] 取得路徑 (找不到回傳空圖，不是 ABCD)
export function getDogImageSrc(id) {
  const f = DOG_LIST.find(d => d.id === id);
  return f ? f.localPath : EMPTY_IMAGE;
}
export function getAccessorySrc(id) {
  const f = ACCESSORY_LIST.find(a => a.id === id);
  return f ? f.localPath : EMPTY_IMAGE;
}
export function getBackgroundSrc(id) {
  const f = BACKGROUND_LIST.find(b => b.id === id);
  return f ? f.localPath : EMPTY_IMAGE;
}

// [6-3] 依 ID 取物件
export function getDogById(id) { return DOG_LIST.find(d => d.id === id) || null; }
export function getAccessoryById(id) { return ACCESSORY_LIST.find(a => a.id === id) || null; }

// [6-4] 圖片錯誤處理 - 核心修正：改成空圖，不顯示文字
export function handleImageError(img) {
  if (!IMAGE_CONFIG.ENABLE_ONERROR_FALLBACK) return;
  if (img.dataset.fallback === "true") return; // 防止無限循環
  img.src = EMPTY_IMAGE;
  img.dataset.fallback = "true";
  img.alt = "";
  img.style.background = "transparent";
}
export const handleAccessoryError = handleImageError;

// ==================== [7] 全域掛載 (讓舊 HTML 也能用) ====================
if (typeof window !== "undefined") {
  window.EMPTY_IMAGE = EMPTY_IMAGE;
  window.IMAGE_CONFIG = IMAGE_CONFIG;
  window.DOG_IMAGES = DOG_IMAGES;
  window.DOG_LIST = DOG_LIST;
  window.ACCESSORY_IMAGES = ACCESSORY_IMAGES;
  window.ACCESSORY_LIST = ACCESSORY_LIST;
  window.BACKGROUND_THEMES = BACKGROUND_THEMES;
  window.getDogImageSrc = getDogImageSrc;
  window.getAccessorySrc = getAccessorySrc;
  window.handleImageError = handleImageError;
  window.createEmptyPlaceholder = createEmptyPlaceholder;
  console.log("[images.js v3] 已載入，EMPTY_IMAGE 已掛載到 window");
}
