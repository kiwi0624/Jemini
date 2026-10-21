/**
 * ===================================================================
 *  images.js - 統一圖檔資源管理中心 v3 精簡空圖版
 * ===================================================================
 *  設計：所有圖片缺失時一律顯示透明空圖，不顯示 ABCD 文字
 *  只要放進對應 PNG 就會自動載入
 *
 *  結構：
 *  /assets/dogs/         -> 狗狗 (5隻)
 *  /assets/accessories/  -> 配件 (8個)
 *  /assets/backgrounds/  -> 背景 (4個)
 * ===================================================================
 */

// ==================== [1] 基礎設定 ====================
export const IMAGE_CONFIG = {
  BASE_PATH: "./assets/dogs",
  ACCESSORY_PATH: "./assets/accessories",
  BACKGROUND_PATH: "./assets/backgrounds",
  ENABLE_ONERROR_FALLBACK: true, // 圖片載入失敗時改顯示空圖
};

// 1x1 透明空圖 - 載入失敗或暫無圖片時使用，不顯示任何文字
export const EMPTY_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";

// ==================== [2] 狗狗資料 ====================
// 替換說明：把 assets/dogs/ 裡放入同名 PNG 即可
// 例：chihuahua.png -> ./assets/dogs/chihuahua.png
export const DOG_IMAGES = {
  chihuahua: { id: "chihuahua", name: "吉娃娃", fileName: "chihuahua.png", legacy: "pv" },
  shiba:     { id: "shiba", name: "柴犬", fileName: "shiba.png", legacy: "Br" },
  poodle:    { id: "poodle", name: "貴賓", fileName: "poodle.png", legacy: "tr" },
  corgi:     { id: "corgi", name: "柯基", fileName: "corgi.png", legacy: "Mr" },
  mix:       { id: "mix", name: "米克斯", fileName: "mix.png", legacy: "cr" },
};
export const DOG_LIST = Object.values(DOG_IMAGES).map(d => ({
  ...d,
  localPath: `${IMAGE_CONFIG.BASE_PATH}/${d.fileName}`
}));

// ==================== [3] 配件資料 ====================
// 替換說明：把 assets/accessories/ 裡放入同名 PNG 即可
// 規格建議：200x200，透明背景 PNG
// 例：santa_hat.png -> ./assets/accessories/santa_hat.png
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

// ==================== [4] 背景資料 ====================
// 替換說明：把 assets/backgrounds/ 裡放入同名 PNG 即可
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

// ==================== [5] 相容舊變數 ====================
// 舊版 pv/Br/tr/Mr/cr 轉新版 id
export const LEGACY_MAP = {
  pv: "chihuahua",
  Br: "shiba",
  tr: "poodle",
  Mr: "corgi",
  cr: "mix"
};

// ==================== [6] 核心函式 ====================

// [6-1] 產生空圖 (透明圖，用於佔位)
export function createEmptyPlaceholder(w = 1, h = 1) {
  if (typeof document !== "undefined") {
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    return canvas.toDataURL("image/png"); // 全透明
  }
  return EMPTY_IMAGE;
}

// [6-2] 取得狗狗圖片路徑
export function getDogImageSrc(dogId) {
  const dog = DOG_LIST.find(d => d.id === dogId);
  return dog ? dog.localPath : EMPTY_IMAGE;
}

// [6-3] 取得配件圖片路徑
export function getAccessorySrc(accessoryId) {
  const acc = ACCESSORY_LIST.find(a => a.id === accessoryId);
  return acc ? acc.localPath : EMPTY_IMAGE;
}

// [6-4] 取得背景圖片路徑
export function getBackgroundSrc(bgId) {
  const bg = BACKGROUND_LIST.find(b => b.id === bgId);
  return bg ? bg.localPath : EMPTY_IMAGE;
}

// [6-5] 依 ID 取得資料物件
export function getDogById(id) {
  return DOG_LIST.find(d => d.id === id) || null;
}
export function getAccessoryById(id) {
  return ACCESSORY_LIST.find(a => a.id === id) || null;
}
export function getBackgroundById(id) {
  return BACKGROUND_LIST.find(b => b.id === id) || null;
}

// [6-6] 圖片載入失敗處理 - 一律改為空圖，不顯示文字
export function handleImageError(imgElement) {
  if (!IMAGE_CONFIG.ENABLE_ONERROR_FALLBACK) return;
  if (imgElement.dataset.fallback === "true") return; // 避免無限迴圈
  imgElement.src = EMPTY_IMAGE;
  imgElement.dataset.fallback = "true";
  imgElement.alt = "";
}

export function handleAccessoryError(imgElement) {
  handleImageError(imgElement);
}

// [6-7] 模式切換 (保留介面，實際都使用空圖模式)
export function enablePlaceholderMode() {
  // 空圖模式已是預設，無需切換
}
export function enableLocalMode() {
  IMAGE_CONFIG.ENABLE_ONERROR_FALLBACK = true;
}

// ==================== [7] 全域掛載 (給非模組的舊 HTML 使用) ====================
if (typeof window !== "undefined") {
  window.IMAGE_CONFIG = IMAGE_CONFIG;
  window.EMPTY_IMAGE = EMPTY_IMAGE;
  window.DOG_IMAGES = DOG_IMAGES;
  window.DOG_LIST = DOG_LIST;
  window.ACCESSORY_IMAGES = ACCESSORY_IMAGES;
  window.ACCESSORY_LIST = ACCESSORY_LIST;
  window.BACKGROUND_THEMES = BACKGROUND_THEMES;
  window.BACKGROUND_LIST = BACKGROUND_LIST;
  window.LEGACY_MAP = LEGACY_MAP;
  window.getDogImageSrc = getDogImageSrc;
  window.getAccessorySrc = getAccessorySrc;
  window.handleImageError = handleImageError;
}
