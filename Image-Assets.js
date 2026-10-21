// ========================================================
// 圖片集中管理檔 image-assets.js
// 用途：統一管理網頁使用的圖片，方便日後替換。
// 使用方式：只需要修改這個檔案，不必逐一修改 HTML。
// ========================================================
//
// 【圖片對照表】
// A（pv）= 淺色長毛吉娃娃
// B（Br）= 柴犬
// C（tr）= 貴賓
// D（Mr）= 柯基
// E（cr）= 米克斯
//
// 【如何替換圖片】
// 1. 將圖片放進網站資料夾的 assets 資料夾。
// 2. 找到下方對應的圖片代號。
// 3. 將 makeImagePlaceholder(...) 替換成圖片路徑。
// 4. 圖片路徑範例：
//    pv: "assets/chihuahua.png"
//
// 注意：HTML 必須先載入這個 JS 檔案，才能讀取圖片設定。
// ========================================================


// 建立暫時用的文字圖片 A／B／C／D／E
function makeImagePlaceholder(letter, label, color) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="600" height="600" viewBox="0 0 600 600">
      <rect width="600" height="600" fill="${color}"/>

      <rect x="24" y="24" width="552" height="552"
            rx="28" fill="none"
            stroke="#2F4A3B" stroke-width="3"
            stroke-dasharray="10 10"/>

      <text x="300" y="275"
            text-anchor="middle"
            font-family="Arial, sans-serif"
            font-size="150"
            font-weight="700"
            fill="#2F4A3B">${letter}</text>

      <text x="300" y="360"
            text-anchor="middle"
            font-family="Arial, sans-serif"
            font-size="30"
            fill="#2F4A3B">${label}</text>
    </svg>
  `;

  return "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg);
}


// ========================================================
// 【圖片設定區】
// 日後要換圖片，主要修改這個區域即可。
// ========================================================

window.IMAGE_ASSETS = {

  // A：淺色長毛吉娃娃
  // 換成真實圖片的寫法：
  // pv: "assets/chihuahua.png",
  pv: makeImagePlaceholder(
    "A",
    "淺色長毛吉娃娃",
    "#F9F1E6"
  ),

  // B：柴犬
  // 換成真實圖片的寫法：
  // Br: "assets/shiba.png",
  Br: makeImagePlaceholder(
    "B",
    "柴犬",
    "#E9E2D2"
  ),

  // C：貴賓
  // 換成真實圖片的寫法：
  // tr: "assets/poodle.png",
  tr: makeImagePlaceholder(
    "C",
    "貴賓",
    "#DDE7D9"
  ),

  // D：柯基
  // 換成真實圖片的寫法：
  // Mr: "assets/corgi.png",
  Mr: makeImagePlaceholder(
    "D",
    "柯基",
    "#F1D9C8"
  ),

  // E：米克斯
  // 換成真實圖片的寫法：
  // cr: "assets/mixed-breed.png",
  cr: makeImagePlaceholder(
    "E",
    "米克斯",
    "#E8E0EF"
  )

};
