// ==========================================
// 2026 北海道 9 天 8 夜「鐵路＋自駕」
// 改行程只要改這個檔案，trip.html 不用動。
//
// 欄位說明
//   days[].place / leg   ：當天所在地（路線圖站名）／交通型態 rail 鐵路 | drive 自駕 | city 市區
//   days[].sun           ：當天日出／日落（畫日照時間軸用），選填
//   days[].img           ：當天封面圖片網址，選填
//   days[].items[].kind：move 移動 | see 景點 | eat 吃 | lit 點燈 | stay 住宿 | warn 提醒
//   days[].items[].url ：選填，會顯示成「地圖」小連結
//   移動（kind: move）可以寫成「乘車券」：有 from/to 就會畫成卡片，欄位都選填
//     from / to   ：起點 → 終點            via   ：搭什麼（班次、車名）
//     arr / dur   ：到達時間／所需時間     mode  ：fly 飛機 | rail 鐵路 | drive 自駕 | taxi | bus | walk（只影響圖示）
//     board       ：在哪裡上車（幾樓、幾番線、怎麼走到月台），會加粗
//     boardUrl    ：上車處的地圖連結，只在上車處和上一項地點不同時才填
//     url         ：移動項目一律連「目的地」（開車＝導航目標，搭車＝下車站）；其他項目連該地點
//     alight      ：下車後怎麼走           fare  ：票價
//     ticket      ：怎麼買票／訂車、何時開賣（有填且未 booked 會顯示「待訂」）
//     note        ：備案、注意事項         booked：true 顯示「已劃位」
//   stays[].price      ：TWD，1 房 2 大人
//   todos[].done       ：true 會打勾並劃掉
//   順序就是陣列順序，想調整直接搬行。
// ==========================================
window.TRIP = {
  id: "hokkaido-2026",
  title: "北海道 9 天 8 夜",
  range: "2026/11/30（一）– 12/08（二）",
  mode: "Day 1 鐵路直達函館 → Day 3–6 自駕縱走 → Day 6–9 札幌定點鐵路遊",
  travelers: 2,
  updated: "2026-10-27（第六次修訂：Day 6 改南線 TOMAMU 霧冰露台＋支笏湖，Day 5 夜駕提前並加天氣備案）",

  days: [
    {
      n: 1, date: "11/30", weekday: "一", place: "函館", leg: "rail", sun: { rise: "06:40", set: "16:05" },
      title: "抵達 → 特急北斗直達函館",
      transport: "機場搭快速 Airport 一站到南千歲，換特急北斗 18 號直達函館。全程只換一次車",
      items: [
        { time: "09:30", kind: "move", mode: "fly", from: "桃園 TPE", to: "新千歲 CTS", via: "長榮 BR116", arr: "14:05", dur: "3 小時 35 分", booked: true,
          alight: "降落在國際線航廈。出關、領行李抓 1～1.5 小時，目標 15:35 前走到 JR 月台",
          url: "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8D%83%E6%AD%B3%E7%A9%BA%E6%B8%AF" },
        { time: "15:45", kind: "move", mode: "rail", from: "新千歲機場", to: "南千歲", via: "JR 快速 Airport", arr: "15:48", dur: "3 分，一站就下",
          board: "國際線出關後上 2 樓，走航廈間連絡通道到國內線航廈（約 10 分），再搭手扶梯下到 B1，就是 JR 新千歲機場站。只有一座月台，1、2 番線的車全部都會停南千歲，看發車看板哪班先開就上哪班，白天約 10 分一班",
          alight: "南千歲是下一站，上車就站門邊。到站通常停 3 番線（偶爾 2 番線）",
          fare: "含在下面那張「新千歲機場→函館」乘車券裡，不用另外買票、不要刷 IC 卡進站",
          note: "15:45 是目標班次，最晚 16:00 前上車都趕得上北斗（到南千歲約 16:03，換月台要上下樓梯，留 10 分）", url: "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8D%83%E6%AD%B3%E7%A9%BA%E6%B8%AF%E9%A7%85", boardUrl: "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8D%83%E6%AD%B3%E7%A9%BA%E6%B8%AF%20%E5%9B%BD%E9%9A%9B%E7%B7%9A%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB" },
        { time: "16:17", kind: "move", mode: "rail", from: "南千歲", to: "函館", via: "JR 特急北斗 18 號", arr: "19:29", dur: "3 小時 12 分，全車指定席 5 節",
          board: "南千歲 1 番線。從 3 番線下車後，走樓梯或電梯上到剪票層，再下到對面的 1・2 番月台，在 1 番線候車。月台地上有車廂號碼，站在自己那節的位置",
          alight: "函館站是頭端式月台（通常 7 或 8 番線），下車往前走到底就是剪票口，同一層沒有樓梯",
          fare: "乘車券 ¥5,630 ＋ 指定席 ¥2,950 ＝ ¥8,580／人（從新千歲機場起算）",
          ticket: "10/30（五）日本時間 10:00（台灣 09:00）えきねっと開賣，買「新千歲機場→函館」、可變更票種。付款後要在新千歲機場站的綠色窗口或指定席售票機取紙票，才能進站",
          note: "沒劃到位不能上車。趕不上這班：下一班北斗 20 號南千歲 17:26 發、函館 20:39 到；末班 22 號南千歲 19:18 發、函館 22:31 到（2026 年 10 月時刻表）",
          url: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E9%A7%85" },
        { time: "19:29", kind: "stay", text: "出剪票口，JR Inn Hakodate 就在站旁，步行 1 分。先放行李再出門", url: "https://www.google.com/maps/search/?api=1&query=JR%20Inn%20%E5%87%BD%E9%A4%A8" },
        { time: "19:45", kind: "eat",  text: "晚餐函館鹽味拉麵。店家多 20:00–21:00 打烊，出站直接去，別先回房。備選：網友推的 Soup Curry Begirama，位置與營業時間查不到，要吃請先確認", url: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%20%E5%A1%A9%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%20%E5%87%BD%E9%A4%A8%E9%A7%85%E5%89%8D" },
        { time: "20:30", kind: "lit",  text: "散步 10 分鐘到金森紅磚倉庫看夜間點燈。海上的大聖誕樹 12/1 才點燈，今晚看的是倉庫本身的燈", url: "https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E8%B5%A4%E3%83%AC%E3%83%B3%E3%82%AC%E5%80%89%E5%BA%AB" }
      ]
    },
    {
      n: 2, date: "12/01", weekday: "二", place: "函館", leg: "city", sun: { rise: "06:40", set: "16:05" },
      title: "函館一日：朝市、元町、五稜星の夢、大黑屋、百萬夜景",
      transport: "市電＋自駕。上午市電遊元町、灣區，13:30 ORIX 函館駅前店取車，下午開修道院、五稜郭，晚餐後停回 JR Inn 再搭市電上函館山",
      items: [
        { time: "08:00", kind: "eat",  text: "函館朝市海鮮丼（飯店樓下步行 1 分）。冬季常無活烏賊，別抱太大期待", url: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E6%9C%9D%E5%B8%82" },
        { time: "09:30", kind: "move", mode: "rail", from: "函館駅前", to: "十字街", via: "函館市電 ② 或 ⑤", dur: "5 分",
          board: "飯店門口站前廣場就是「函館駅前」電停。往「谷地頭」② 或「函館どつく前」⑤ 都會到，看哪台先來。中門上車抽整理券，或直接刷 IC（Suica／Kitaca 可用）",
          alight: "十字街下車，前門付費。往八幡坂、元町教會群步行上坡 10 分；想省腳力就多坐一站到「末広町」（只有 ⑤ 會到）",
          fare: "單程 ¥250 起（2025 年調漲後）。今天只搭 3 趟共 ¥750，比 1 日券 ¥800 便宜，直接刷 Suica 就好",
          note: "市電 1 日券、市電・巴士共通 1 日券都不用買", url: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B8%82%E9%9B%BB%20%E5%8D%81%E5%AD%97%E8%A1%97%E5%81%9C%E7%95%99%E5%A0%B4", boardUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B8%82%E9%9B%BB%20%E5%87%BD%E9%A4%A8%E9%A7%85%E5%89%8D%E5%81%9C%E7%95%99%E5%A0%B4" },
        { time: "10:00", kind: "see",  text: "八幡坂、元町教會群、舊函館區公會堂", url: "https://www.google.com/maps/search/?api=1&query=%E5%85%AB%E5%B9%A1%E5%9D%82%20%E5%87%BD%E9%A4%A8" },
        { time: "12:00", kind: "eat",  text: "走到灣區吃小丑漢堡（金森倉庫附近有分店）。份量吃少一點，留胃給晚上的羊肉。12:40 吃完走 3 分到「十字街」電停", url: "https://www.google.com/maps/search/?api=1&query=%E3%83%A9%E3%83%83%E3%82%AD%E3%83%BC%E3%83%94%E3%82%A8%E3%83%AD%20%E3%83%99%E3%82%A4%E3%82%A8%E3%83%AA%E3%82%A2%E6%9C%AC%E5%BA%97" },
        { time: "12:45", kind: "move", mode: "rail", from: "十字街", to: "函館駅前", via: "函館市電 ② 或 ⑤", arr: "12:50", dur: "5 分",
          board: "十字街電停往「函館駅前・湯の川」方向那側月台，② 或 ⑤ 都到",
          alight: "函館駅前下車，站前廣場左手邊就是若松町，走 2 分到 ORIX 函館駅前店",
          fare: "¥250，刷 Suica", url: "https://www.google.com/maps/search/?api=1&query=%E3%82%AA%E3%83%AA%E3%83%83%E3%82%AF%E3%82%B9%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%AB%E3%83%BC%20%E5%87%BD%E9%A4%A8%E9%A7%85%E5%89%8D%E5%BA%97", boardUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B8%82%E9%9B%BB%20%E5%8D%81%E5%AD%97%E8%A1%97%E5%81%9C%E7%95%99%E5%A0%B4" },
        { time: "13:00", kind: "move", mode: "walk", from: "函館駅前電停", to: "ORIX 租車 函館駅前店", via: "步行 2 分", dur: "13:30 取車，手續約 30 分",
          board: "若松町 23-6，JR 函館站正面口出來左轉步行 2 分。冬季 09:00 才開門，所以才排下午取車",
          alight: "櫃台加 RAP 安心包 ¥660／日（免 NOC、爆胎免費換，網路訂不了）、借 ETC 卡 ¥550、辦 HEP 5 日版（12/1–12/5）。核對雪胎、4WD、還車據點「札幌南 6 條店 12/5 15:30」。拍一圈車身照片",
          ticket: "租車尚未訂。ORIX 北海道限定 5 名乘無指定方案（含免責補償、雪胎、4WD，不能選車種），WEB 限定、要先免費加入 Prime 會員。12/1 13:30 函館駅前店取 → 12/5 15:30 札幌南 6 條店還，4 天又 2 小時（超時每小時 ¥1,320）；異地還車費在訂車畫面確認",
          url: "https://www.google.com/maps/search/?api=1&query=%E3%82%AA%E3%83%AA%E3%83%83%E3%82%AF%E3%82%B9%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%AB%E3%83%BC%20%E5%87%BD%E9%A4%A8%E9%A7%85%E5%89%8D%E5%BA%97" },
        { time: "13:30", kind: "move", mode: "drive", from: "ORIX 函館駅前店", to: "特拉普派女子修道院", via: "國道 278 → 湯川 → 上湯川町", arr: "14:00", dur: "約 10 公里、25 分",
          board: "導航設「トラピスチヌ修道院」。第一次上路，站前先慢慢開熟悉車，出市區路就寬了",
          alight: "修道院前有免費停車場，停好走上坡 3 分到前庭",
          note: "函館初雪平年 11/1，12 月初市區幾乎沒積雪，多是濕路面或薄冰，是最輕鬆的練車日。先在站前慢慢開，感受一下煞車距離", url: "https://www.google.com/maps/search/?api=1&query=%E3%83%88%E3%83%A9%E3%83%94%E3%82%B9%E3%83%81%E3%83%8C%E4%BF%AE%E9%81%93%E9%99%A2" },
        { time: "14:00", kind: "see",  text: "特拉普派女子修道院，特濃冰淇淋。內部不開放，前庭、資料室、売店約 40 分就夠，14:45 離開", url: "https://www.google.com/maps/search/?api=1&query=%E3%83%88%E3%83%A9%E3%83%94%E3%82%B9%E3%83%81%E3%83%8C%E4%BF%AE%E9%81%93%E9%99%A2%20%E5%87%BD%E9%A4%A8" },
        { time: "14:45", kind: "move", mode: "drive", from: "女子修道院", to: "五稜郭（Times 五稜郭町第 2 停車場）", via: "產業道路 → 行啓通", arr: "15:10", dur: "約 8 公里、20 分",
          board: "導航設「タイムズ五稜郭町第2」（五稜郭町 33，32 格）。24 小時上限 ¥700，一路停到晚餐後不用移車",
          alight: "停好走 5 分到五稜郭塔。客滿就改五稜郭觀光停車場（五稜郭町 27-7，97 格，1 小時 ¥200、之後每 30 分 ¥100）",
          fare: "停車 ¥700", url: "https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E4%BA%94%E7%A8%9C%E9%83%AD%E7%94%BA%E7%AC%AC2" },
        { time: "15:30", kind: "lit",  text: "先在地面繞護城河一圈（1.8 公里）。16:05 日落，走到一半就能看它點燈成星形", url: "https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E7%A8%9C%E9%83%AD%E5%85%AC%E5%9C%92" },
        { time: "16:30", kind: "lit",  text: "五稜郭塔看「五稜星の夢」點燈首日，從 90 公尺高俯瞰點燈的星形護城河。塔營業至 18:00（售票 17:50），看完走去大黑屋剛好", url: "https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E7%A8%9C%E9%83%AD%E3%82%BF%E3%83%AF%E3%83%BC" },
        { time: "18:00", kind: "eat",  text: "大黑屋 函館五稜郭店 成吉思汗烤羊肉。✅ 已透過 Tabelog 訂位 12/1（二）18:00、2 位（僅訂座位），18:00–19:15 離席。店沒有自己的停車場，但有附近停車場補助折扣（一組一台），結帳時出示 Times 停車券問一下", url: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%BB%92%E5%B1%8B%20%E5%87%BD%E9%A4%A8%E4%BA%94%E7%A8%9C%E9%83%AD%E5%BA%97%20%E3%82%B8%E3%83%B3%E3%82%AE%E3%82%B9%E3%82%AB%E3%83%B3" },
        { time: "",      kind: "warn", text: "大黑屋：餐費現場付，訂位用的信用卡不一定能在店內刷，備好現金。12/1 05:59（JST）前免費取消；當天取消或未到店 ¥3,000／人；系統手續費 ¥880 已扣、不退" },
        { time: "19:15", kind: "move", mode: "drive", from: "大黑屋（走 5 分回 Times 停車場）", to: "JR Inn 函館 停車場", via: "行啓通 → 國道 5 號", arr: "19:35", dur: "約 3 公里、10 分",
          board: "市區平路有路燈。飯店停車場 60 格露天、先到先停、¥600／晚、14:00 到隔天 12:00 可自由進出，入口位置 Day 1 入住時先問好",
          alight: "停好直接走到站前廣場的「函館駅前」電停",
          fare: "停車 ¥600",
          note: "夜間市區路口和橋面可能有黑冰，提早放油門，不要急煞", url: "https://www.google.com/maps/search/?api=1&query=JR%20Inn%20%E5%87%BD%E9%A4%A8" },
        { time: "19:40", kind: "move", mode: "rail", from: "函館駅前", to: "十字街", via: "函館市電 ② 或 ⑤", arr: "19:45", dur: "5 分，再上坡步行 10 分",
          board: "站前廣場「函館駅前」電停，往「谷地頭」② 或「函館どつく前」⑤ 都會到",
          alight: "十字街下車，沿南部坂上坡步行 10 分到函館山纜車山麓站。雪天穿防滑鞋",
          fare: "¥250，刷 Suica",
          note: "⚠️ 19:45 還沒停好車就別搭市電，從飯店直接叫計程車到「函館山ロープウェイ山麓駅」，約 10 分、¥1,200 上下", url: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B8%82%E9%9B%BB%20%E5%8D%81%E5%AD%97%E8%A1%97%E5%81%9C%E7%95%99%E5%A0%B4", boardUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B8%82%E9%9B%BB%20%E5%87%BD%E9%A4%A8%E9%A7%85%E5%89%8D%E5%81%9C%E7%95%99%E5%A0%B4" },
        { time: "20:15", kind: "lit",  text: "函館山纜車上山看百萬夜景，20:15–21:00。往復 ¥1,800／人，IC 卡可付。末班上行 20:50、末班下行 21:00，約 20:00 到山麓站，有 50 分緩衝；山頂約 40 分只看景拍照，20:00 後人潮已散比較好拍", url: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B1%B1%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4%20%E5%B1%B1%E9%BA%93%E9%A7%85" },
        { time: "21:05", kind: "move", mode: "walk", from: "函館山纜車 山麓站", to: "金森紅磚倉庫前", via: "下坡走十字街到灣區", arr: "21:15", dur: "約 10 分" },
        { time: "21:15", kind: "lit",  text: "はこだてクリスマスファンタジー：赤レンガ倉庫前海上的大聖誕樹，點燈到 22:00（12/1 是開幕首日）。看到 21:45 就走", url: "https://www.google.com/maps/search/?api=1&query=%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BC%20%E9%87%91%E6%A3%AE%E8%B5%A4%E3%83%AC%E3%83%B3%E3%82%AC%E5%80%89%E5%BA%AB" },
        { time: "21:45", kind: "move", mode: "walk", from: "金森紅磚倉庫", to: "JR Inn 函館", via: "沿海岸步行，或十字街搭市電到函館駅前", arr: "22:00", dur: "約 15 分" },
        { time: "22:00", kind: "stay", text: "回 JR Inn 泡頂樓大眾湯" },
        { time: "",      kind: "warn", text: "冬季函館山登山車道封閉、登山巴士停駛，只能搭纜車。十字街站步行 10 分上坡，雪天穿防滑鞋" }
      ]
    },
    {
      n: 3, date: "12/02", weekday: "三", place: "洞爺湖", leg: "drive", sun: { rise: "06:40", set: "16:00" },
      title: "函館出發 → 大沼 → 洞爺湖溫泉",
      transport: "自駕。08:00 從 JR Inn 停車場出發，大沼繞一圈後上道央道，126 公里高速到洞爺湖",
      items: [
        { time: "08:00", kind: "move", mode: "drive", from: "JR Inn 函館 停車場", to: "大沼公園", via: "函館新道（國道 5 號）", arr: "08:45", dur: "約 30 公里、40 分",
          board: "退房前先把行李搬上車，昨天停的位置開出來就是國道 5 號。導航設「大沼公園駅」，上函館新道往北是免費快速路，出市區後就是直路",
          alight: "大沼公園駅前有停車場（冬季多免費），停好步行遊湖，不要開進湖畔小路",
          note: "大沼在內陸比函館多雪，函館新道出市區後若變壓雪路就維持 60 以下", url: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B2%BC%E5%85%AC%E5%9C%92%E9%A7%85" },
        { time: "08:45", kind: "see",  text: "大沼國定公園漫步駒岳火山湖景，走到 10:30 吃糰子", url: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B2%BC%E5%85%AC%E5%9C%92%20%E5%8C%97%E6%B5%B7%E9%81%93" },
        { time: "10:30", kind: "eat",  text: "沼之家大沼糰子", url: "https://www.google.com/maps/search/?api=1&query=%E6%B2%BC%E3%81%AE%E5%AE%B6%20%E5%A4%A7%E6%B2%BC%E5%85%AC%E5%9C%92" },
        { time: "11:00", kind: "move", mode: "drive", from: "大沼公園 IC", to: "虻田洞爺湖 IC", via: "道央道（往札幌方向）", arr: "13:00", dur: "126 公里、約 1 小時 50 分，冬季抓 2 小時",
          board: "大沼公園駅開 10 分到大沼公園 IC。上道央道後一路往札幌方向，不用換線",
          alight: "虻田洞爺湖 IC 下，接國道 37 號往洞爺湖溫泉街約 20 分",
          fare: "ETC ¥3,390；有辦 HEP 就不另收",
          note: "途中只有八雲 PA、有珠山 SA 能休息上廁所。長萬部一帶冬天常有地吹雪，看到前車煞車燈就減速、開霧燈。洞爺湖在太平洋側雪少，12 月初常只有薄雪", url: "https://www.google.com/maps/search/?api=1&query=%E6%B4%9E%E7%88%BA%E6%B9%96%E6%B8%A9%E6%B3%89" },
        { time: "13:00", kind: "eat",  text: "洞爺湖溫泉街午餐", url: "https://www.google.com/maps/search/?api=1&query=%E6%B4%9E%E7%88%BA%E6%B9%96%E6%B8%A9%E6%B3%89" },
        { time: "14:00", kind: "see",  text: "筒倉展望台鳥瞰雪湖全景（在湖西側，先繞這裡再往東到旅館最順）", url: "https://www.google.com/maps/search/?api=1&query=%E3%82%B5%E3%82%A4%E3%83%AD%E5%B1%95%E6%9C%9B%E5%8F%B0%20%E6%B4%9E%E7%88%BA%E6%B9%96" },
        { time: "14:30", kind: "see",  text: "可選：昭和新山・有珠山纜車，離湖之栖約 10 分鐘車程", url: "https://www.google.com/maps/search/?api=1&query=%E6%98%AD%E5%92%8C%E6%96%B0%E5%B1%B1%20%E6%9C%89%E7%8F%A0%E5%B1%B1%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4" },
        { time: "15:00", kind: "stay", text: "入住 The Lake Suite 湖之栖，先泡一輪客室露天風呂", url: "https://www.google.com/maps/search/?api=1&query=%E3%82%B6%20%E3%83%AC%E3%82%A4%E3%82%AF%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%88%20%E6%B9%96%E3%81%AE%E6%A0%96" },
        { time: "16:45", kind: "lit",  text: "開車 5 分鐘回溫泉街，看 17:00 點亮的燈飾隧道（にぎわい広場，免費）與手湯足湯", url: "https://www.google.com/maps/search/?api=1&query=%E6%B4%9E%E7%88%BA%E6%B9%96%E6%B8%A9%E6%B3%89%20%E3%81%AB%E3%81%8E%E3%82%8F%E3%81%84%E5%BA%83%E5%A0%B4" },
        { time: "18:30", kind: "eat",  text: "回旅館一泊二食會席晚餐", url: "https://www.google.com/maps/search/?api=1&query=%E3%82%B6%20%E3%83%AC%E3%82%A4%E3%82%AF%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%88%20%E6%B9%96%E3%81%AE%E6%A0%96" },
        { time: "",      kind: "warn", text: "湖之栖在壯瞥町、離溫泉街約 2 公里，雪地走不到要開車。點燈排在晚餐前，天黑前回旅館就不用再夜間開車" }
      ]
    },
    {
      n: 4, date: "12/03", weekday: "四", place: "富良野", leg: "drive", sun: { rise: "06:35", set: "15:55" },
      title: "洞爺湖 → 富良野",
      transport: "自駕。道央道 → 道東道 → 占冠 IC → 國道 237，約 250 公里、冬季 3.5～4 小時",
      items: [
        { time: "09:00", kind: "move", mode: "drive", from: "湖之栖（壯瞥）", to: "富良野 Nozo Hotel", via: "道央道 → 千歲惠庭 JCT → 道東道 → 占冠 IC → 國道 237", arr: "13:30", dur: "約 250 公里、冬季 3.5～4 小時（含兩次休息）",
          board: "出發前加滿油。從壯瞥繞湖南岸到虻田洞爺湖 IC 約 25 分（比從溫泉街多 5～8 分）。上道央道往札幌方向，到千歲惠庭 JCT 靠左切道東道往帯広方向",
          alight: "占冠 IC 下，接國道 237 北上經幾寅、山部到富良野約 1 小時 10 分。Nozo Hotel 在市街，有免費停車場",
          fare: "ETC 約 ¥5,000（虻田洞爺湖→占冠）；有辦 HEP 就不另收",
          note: "⚠️ 全程最有雪的一天。占冠、トマム一帶是道內最冷區，道東道隧道出口常是壓雪路，國道 237 進富良野也是壓雪，時速 70 以下、時間多抓三成。休息點：輪厚 PA、由仁 PA、占冠 PA。前一晚看 tenki.jp 和ドラとら，若道東道因暴雪封閉，改道央道北上到滝川 IC 轉國道 38 往富良野，多繞約 50 公里、多 1 小時", url: "https://www.google.com/maps/search/?api=1&query=Nozo%20Hotel%20%E5%AF%8C%E8%89%AF%E9%87%8E" },
        { time: "13:30", kind: "eat",  text: "抵富良野，午餐在地咖哩歐姆蛋包飯", url: "https://www.google.com/maps/search/?api=1&query=%E5%AF%8C%E8%89%AF%E9%87%8E%20%E3%82%AA%E3%83%A0%E3%82%AB%E3%83%AC%E3%83%BC" },
        { time: "14:30", kind: "see",  text: "富良野市街散策（果醬園、起司工房可視時間安排）", url: "https://www.google.com/maps/search/?api=1&query=%E5%AF%8C%E8%89%AF%E9%87%8E%E3%83%81%E3%83%BC%E3%82%BA%E5%B7%A5%E6%88%BF" },
        { time: "15:30", kind: "stay", text: "入住 Nozo Hotel", url: "https://www.google.com/maps/search/?api=1&query=Nozo%20Hotel%20%E5%AF%8C%E8%89%AF%E9%87%8E" },
        { time: "16:00", kind: "lit",  text: "散步到森林精靈露台看雪景點燈（富良野日落約 15:55）", url: "https://www.google.com/maps/search/?api=1&query=%E3%83%8B%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%86%E3%83%A9%E3%82%B9%20%E5%AF%8C%E8%89%AF%E9%87%8E" },
        { time: "19:00", kind: "see",  text: "回飯店大眾湯與三溫暖", url: "https://www.google.com/maps/search/?api=1&query=Nozo%20Hotel%20%E5%AF%8C%E8%89%AF%E9%87%8E" }
      ]
    },
    {
      n: 5, date: "12/04", weekday: "五", place: "美瑛", leg: "drive", sun: { rise: "06:35", set: "15:55" },
      title: "美瑛白天雪原，入夜連拍兩處點燈",
      transport: "自駕。富良野 → 美瑛市街 35 公里，美瑛 → 白金（青池）20 公里，看完點燈 17:20 上車、天黑後開 45 公里回富良野（全程唯一夜駕，風險在道道 966 前 20 公里）",
      items: [
        { time: "08:30", kind: "move", mode: "drive", from: "Nozo Hotel 富良野", to: "美瑛", via: "國道 237 北上", note: "富良野、美瑛 12 月初積雪 20–30 公分是常態，全程壓雪路面。早上黑冰最多，橋面和路口先放慢", arr: "09:10", dur: "約 35 公里、40 分",
          board: "出發前把 Ken & Mary 之樹、七星之樹、四季彩之丘、白鬚瀑布、青池都加進導航。國道 237 筆直好開",
          alight: "美瑛的樹木景點都在田間道路，冬季路肩窄又滑，只停指定停車場，千萬別停路邊下車拍照", url: "https://www.google.com/maps/search/?api=1&query=%E7%BE%8E%E7%91%9B%E9%A7%85" },
        { time: "09:10", kind: "see",  text: "美瑛冬日巡禮：Ken & Mary 之樹、七星之樹", url: "https://www.google.com/maps/search/?api=1&query=%E3%82%B1%E3%83%B3%E3%81%A8%E3%83%A1%E3%83%AA%E3%83%BC%E3%81%AE%E6%9C%A8%20%E7%BE%8E%E7%91%9B" },
        { time: "12:00", kind: "eat",  text: "美瑛市區午餐", url: "https://www.google.com/maps/search/?api=1&query=%E7%BE%8E%E7%91%9B%E9%A7%85" },
        { time: "13:30", kind: "see",  text: "四季彩之丘廣袤雪原（冬季有雪上摩托車等活動）", url: "https://www.google.com/maps/search/?api=1&query=%E5%9B%9B%E5%AD%A3%E5%BD%A9%E3%81%AE%E4%B8%98%20%E7%BE%8E%E7%91%9B" },
        { time: "14:45", kind: "see",  text: "聖誕樹之木（クリスマスツリーの木）：美馬牛雪原上孤獨一棵雲杉，離四季彩之丘 5 分鐘車程，下午側光最好拍。沒有正式停車場，只停路邊指定空地、不下田", url: "https://www.google.com/maps/search/?api=1&query=%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%84%E3%83%AA%E3%83%BC%E3%81%AE%E6%9C%A8%20%E7%BE%8E%E7%91%9B" },
        { time: "15:45", kind: "move", mode: "drive", from: "美瑛市街", to: "白金 白鬚瀑布", via: "道道 966 往白金溫泉", note: "道道 966 是觀光路線有定期除雪，但彎多、壓雪，不超車、天黑前到", arr: "16:15", dur: "約 20 公里、30 分",
          board: "15:55 日落，要在天黑前開到。沿途是上坡山路，有結冰就慢",
          alight: "停白金觀光中心停車場（免費），步行 2 分到藍河橋看瀑布。之後再開 3 分到青池停車場（冬季免費）", url: "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E9%87%91%E8%A6%B3%E5%85%89%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%BE%8E%E7%91%9B" },
        { time: "16:30", kind: "lit",  text: "白鬚瀑布點燈（藍水與冰柱）", url: "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E3%81%B2%E3%81%92%E3%81%AE%E6%BB%9D%20%E7%BE%8E%E7%91%9B" },
        { time: "16:50", kind: "lit",  text: "車程 3 分鐘轉青池看夜間點燈（12 月點燈 16:30–21:00）。拍到 17:15 就收，17:20 上車，不要待到路上沒車", url: "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E9%87%91%E9%9D%92%E3%81%84%E6%B1%A0" },
        { time: "17:20", kind: "move", mode: "drive", from: "青池", to: "Nozo Hotel 富良野", via: "道道 966 → 國道 237 南下", arr: "18:20", dur: "約 45 公里、1 小時",
          board: "青池停車場出發，先下山回美瑛市街再接國道 237。17:00–18:00 是當地人下班時段，國道 237 上有車流可以跟，比晚一點路上空蕩蕩安全",
          note: "道道 966 白金→美瑛這 20 公里兩側是開闊農田，地吹雪會突然白茫茫，看不清就減速開雙黃燈，不要急。夜間鹿會衝出來。回程順路可在美瑛或上富良野吃晚餐", url: "https://www.google.com/maps/search/?api=1&query=Nozo%20Hotel%20%E5%AF%8C%E8%89%AF%E9%87%8E" },
        { time: "18:20", kind: "stay", text: "返回 Nozo Hotel 連住第二晚", url: "https://www.google.com/maps/search/?api=1&query=Nozo%20Hotel%20%E5%AF%8C%E8%89%AF%E9%87%8E" },
        { time: "",      kind: "warn", text: "天氣備案：當天中午看 tenki.jp 美瑛傍晚預報，有降雪或強風就放棄點燈——改 14:30 去白鬚瀑布、青池看白天雪景版（結冰覆雪、沒有藍色但仍漂亮），16:00 前回到富良野，整天不夜駕" },
        { time: "",      kind: "warn", text: "12 月初青池已結冰覆雪，白天看不到藍色。點燈版才是冬季唯一正確的打開方式" }
      ]
    },
    {
      n: 6, date: "12/05", weekday: "六", place: "TOMAMU→札幌", leg: "drive", sun: { rise: "06:45", set: "16:00" },
      title: "霧冰露台 → 支笏湖 → 札幌還車",
      transport: "自駕南線約 230 公里：富良野 → 星野 TOMAMU 霧冰露台 → 道東道 → 千歲 → 支笏湖 → 札幌，15:15 由緣門口卸行李、15:30 ORIX 南 6 條店還車。全程白天",
      items: [
        { time: "08:00", kind: "move", mode: "drive", from: "Nozo Hotel 富良野", to: "星野リゾート トマム", via: "國道 237 南下 → 占冠", arr: "09:15", dur: "約 60 公里、1 小時 15 分",
          board: "退房後導航設「星野リゾート トマム 雲海ゴンドラ」，日歸停車場免費。這段是 12/3 走過的國道 237 反向",
          alight: "纜車站買往返票 ¥2,500／人。霧冰在氣溫 −2～−10°C 時出現，早上最漂亮，中午後會掉",
          note: "占冠一帶是山區，早上黑冰多。出發前看ドラとら與北の道ナビ", url: "https://www.google.com/maps/search/?api=1&query=%E6%98%9F%E9%87%8E%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88%20%E3%83%88%E3%83%9E%E3%83%A0%20%E9%9B%B2%E6%B5%B7%E3%82%B4%E3%83%B3%E3%83%89%E3%83%A9" },
        { time: "09:30", kind: "see",  text: "霧氷テラス：纜車上 1,088 公尺，露台和雲 Cafe 坐著看結滿霧冰的雪林，不用走。待到 11:00 下山", url: "https://www.google.com/maps/search/?api=1&query=%E9%9C%A7%E6%B0%B7%E3%83%86%E3%83%A9%E3%82%B9%20%E3%83%88%E3%83%9E%E3%83%A0" },
        { time: "",      kind: "warn", text: "霧冰是看天的：整季出現機率約 55%。12/5 是週六，纜車跟滑雪客共用，但 12 月初是雪季最空的週末。排隊超過 30 分或當天沒霧冰就放棄，直接上道東道，後面行程不受影響。冰之村 12/20 才開，別期待" },
        { time: "11:00", kind: "move", mode: "drive", from: "トマム", to: "千歲 IC", via: "占冠 IC → 道東道 → 千歲惠庭 JCT → 道央道（往札幌）→ 千歲 IC", arr: "12:20", dur: "約 100 公里、1 小時 15 分",
          board: "占冠 IC 上道東道往千歲方向，12/3 走過的反向",
          fare: "ETC 約 ¥3,500；有辦 HEP 5 日版就不另收",
          note: "道東道占冠段封路就改國道 237 → 滝川 IC → 道央道北線進札幌（多 1 小時，支笏湖就跳過）", url: "https://www.google.com/maps/search/?api=1&query=%E5%8D%83%E6%AD%B3IC" },
        { time: "12:20", kind: "eat",  text: "千歲市區午餐（千歲 IC 下來選擇多）。支笏湖畔冬季開的店少，別賭", url: "https://www.google.com/maps/search/?api=1&query=%E5%8D%83%E6%AD%B3%E9%A7%85" },
        { time: "12:50", kind: "move", mode: "drive", from: "千歲市區", to: "支笏湖", via: "道道 16 支笏湖公園線", arr: "13:25", dur: "約 25 公里、35 分",
          board: "導航設「支笏湖温泉 駐車場」，冬季免費",
          note: "山路壓雪、彎多，慢慢開", url: "https://www.google.com/maps/search/?api=1&query=%E6%94%AF%E7%AC%8F%E6%B9%96%E6%B8%A9%E6%B3%89%20%E9%A7%90%E8%BB%8A%E5%A0%B4" },
        { time: "13:30", kind: "see",  text: "支笏湖：日本最北的不凍湖，12 月湖面不結冰、對面是惠庭岳雪山，紅色的山線鐵橋必拍。純看景 45 分，冰濤祭是 1～2 月，現在只是安靜的湖", url: "https://www.google.com/maps/search/?api=1&query=%E5%B1%B1%E7%B7%9A%E9%89%84%E6%A9%8B%20%E6%94%AF%E7%AC%8F%E6%B9%96" },
        { time: "14:15", kind: "move", mode: "drive", from: "支笏湖", to: "由緣札幌（南 3 條西 8）門口", via: "國道 453 → 真駒內 → 創成川通", arr: "15:15", dur: "約 45 公里、1 小時",
          board: "時間夠的話真駒內前可順路停羊ヶ丘展望台 15 分（雪原＋札幌市景），不夠就直接進城。還車前在真駒內加滿油、留收據",
          alight: "導航設「ONSEN RYOKAN 由縁 札幌」，門口停車卸三個行李箱和一個人，先辦入住。另一人開車去還",
          note: "全程一般道路，16:00 天黑前一小時到", url: "https://www.google.com/maps/search/?api=1&query=ONSEN%20RYOKAN%20%E7%94%B1%E7%B8%81%20%E6%9C%AD%E5%B9%8C" },
        { time: "15:20", kind: "move", mode: "drive", from: "由緣札幌", to: "ORIX 租車 札幌南 6 條店", via: "南 6 條西 10 丁目", arr: "15:25", dur: "約 500 公尺、3 分",
          board: "導航設「オリックスレンタカー札幌南6条店」（南 6 條西 10-1020-4，08:00–19:00）",
          alight: "從 12/1 13:30 起算超過 4 天約 2 小時，每小時加 ¥1,320。拍油表、里程、車身照片，ETC 卡交回結清過路費。還完走 7 分回由緣",
          fare: "異地還車費（函館→札幌）訂車畫面確認；超時約 ¥2,640", url: "https://www.google.com/maps/search/?api=1&query=%E3%82%AA%E3%83%AA%E3%83%83%E3%82%AF%E3%82%B9%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%AB%E3%83%BC%20%E6%9C%AD%E5%B9%8C%E5%8D%976%E6%9D%A1%E5%BA%97" },
        { time: "16:00", kind: "stay", text: "入住由緣札幌，泡湯休息到晚餐", url: "https://www.google.com/maps/search/?api=1&query=ONSEN%20RYOKAN%20%E7%94%B1%E7%B8%81%20%E6%9C%AD%E5%B9%8C" },
        { time: "19:00", kind: "eat",  text: "三大蟹吃到飽", url: "https://www.google.com/maps/search/?api=1&query=%E6%9C%AD%E5%B9%8C%20%E3%81%8B%E3%81%AB%20%E9%A3%9F%E3%81%B9%E6%94%BE%E9%A1%8C%20%E3%81%99%E3%81%99%E3%81%8D%E3%81%AE" },
        { time: "20:30", kind: "see",  text: "狸小路商店街採買藥妝（由緣步行 5 分）", url: "https://www.google.com/maps/search/?api=1&query=%E7%8B%B8%E5%B0%8F%E8%B7%AF%E5%95%86%E5%BA%97%E8%A1%97%20%E6%9C%AD%E5%B9%8C" },
        { time: "",      kind: "warn", text: "天氣差備案：下大雪就跳過支笏湖，改千歲 IC 下 10 分的「サケのふるさと千歲水族館」（室內，約 1 小時），再直接進札幌", url: "https://www.google.com/maps/search/?api=1&query=%E3%82%B5%E3%82%B1%E3%81%AE%E3%81%B5%E3%82%8B%E3%81%95%E3%81%A8%E5%8D%83%E6%AD%B3%E6%B0%B4%E6%97%8F%E9%A4%A8" },
        { time: "",      kind: "warn", text: "旭山動物園已拿掉：企鵝散步 12/18 才開始、動物狀態評價不佳。改走南線反而全程白天、少繞旭川" },
      ]
    },
    {
      n: 7, date: "12/06", weekday: "日", place: "小樽", leg: "rail", sun: { rise: "06:45", set: "16:02" },
      title: "小樽一日遊",
      transport: "JR 快速 Airport 小樽行約 35 分、¥800。只有標示「小樽」的班次才會到，很多班只開到札幌",
      items: [
        { time: "09:30", kind: "move", mode: "rail", from: "札幌", to: "小樽", via: "JR 快速 Airport（小樽行）", arr: "10:05", dur: "約 35 分，每 30 分一班",
          board: "由緣走到 JR 札幌站約 20 分（走チカホ到大通，再轉南北線一站到さっぽろ ¥210 也行）。往小樽方向在 2～4 番線，看發車看板找寫著「小樽」的エアポート；標示「札幌」止的班次不會到",
          alight: "小樽站出站，沿中央通直走下坡 10 分就是小樽運河",
          fare: "¥800／人，IC 卡直接刷進站", url: "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E6%A8%BD%E9%A7%85", boardUrl: "https://www.google.com/maps/search/?api=1&query=%E6%9C%AD%E5%B9%8C%E9%A7%85" },
        { time: "10:30", kind: "see",  text: "小樽運河、堺町通商店街、小樽音樂盒堂", url: "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E6%A8%BD%E9%81%8B%E6%B2%B3" },
        { time: "17:30", kind: "eat",  text: "小樽政壽司", url: "https://www.google.com/maps/search/?api=1&query=%E3%81%8A%E3%81%9F%E3%82%8B%E6%94%BF%E5%AF%BF%E5%8F%B8%20%E6%9C%AC%E5%BA%97" },
        { time: "19:30", kind: "move", mode: "rail", from: "小樽", to: "札幌", via: "JR 快速 Airport 或普通車", dur: "快速 35 分、普通車約 50 分",
          board: "小樽站往札幌方向以 4 番線為主，看看板。快速每 30 分一班，等不到就搭普通車，只慢 15 分",
          alight: "札幌站南口出站，走チカホ回由緣泡湯",
          fare: "¥800／人，IC 卡", url: "https://www.google.com/maps/search/?api=1&query=%E6%9C%AD%E5%B9%8C%E9%A7%85", boardUrl: "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E6%A8%BD%E9%A7%85" }
      ]
    },
    {
      n: 8, date: "12/07", weekday: "一", place: "札幌", leg: "city", sun: { rise: "06:45", set: "16:02" },
      title: "白色戀人 → 北海道神宮 → 白色燈樹節",
      transport: "地下鐵東西線一條線搞定：大通 → 宮の沢 → 円山公園 → 大通，全程 IC 卡刷",
      items: [
        { time: "09:30", kind: "move", mode: "rail", from: "大通", to: "宮の沢", via: "地下鐵東西線（宮の沢行）", arr: "09:46", dur: "16 分，終點站",
          board: "由緣步行 8 分到大通站 1 號出口。東西線月台往「宮の沢」方向，坐到底",
          alight: "宮の沢站 5 號出口，地面步行 7 分到白色戀人公園",
          fare: "¥290／人。Suica／Kitaca 可用；札幌自己的 SAPICA 卡只在市內通，不用特別買", url: "https://www.google.com/maps/search/?api=1&query=%E5%9C%B0%E4%B8%8B%E9%89%84%20%E5%AE%AE%E3%81%AE%E6%B2%A2%E9%A7%85", boardUrl: "https://www.google.com/maps/search/?api=1&query=%E5%9C%B0%E4%B8%8B%E9%89%84%20%E5%A4%A7%E9%80%9A%E9%A7%85" },
        { time: "10:00", kind: "see",  text: "白色戀人公園：工廠見學、甜點、冬季中庭點燈", url: "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E3%81%84%E6%81%8B%E4%BA%BA%E3%83%91%E3%83%BC%E3%82%AF" },
        { time: "13:00", kind: "move", mode: "rail", from: "宮の沢", to: "円山公園", via: "地下鐵東西線（新さっぽろ行）", dur: "約 10 分",
          board: "宮の沢站上車，往「新さっぽろ」方向",
          alight: "円山公園站 3 號出口，穿過円山公園步行 15 分到北海道神宮。雪地上坡，慢慢走",
          fare: "¥250／人", url: "https://www.google.com/maps/search/?api=1&query=%E5%9C%B0%E4%B8%8B%E9%89%84%20%E5%86%86%E5%B1%B1%E5%85%AC%E5%9C%92%E9%A7%85", boardUrl: "https://www.google.com/maps/search/?api=1&query=%E5%9C%B0%E4%B8%8B%E9%89%84%20%E5%AE%AE%E3%81%AE%E6%B2%A2%E9%A7%85" },
        { time: "13:30", kind: "see",  text: "參拜雪中的北海道神宮。授与所（賣御守的窗口）買神宮梅酒：境內梅林釀的、數量限定售完為止；旁邊六花亭神宮茶屋有免費判官さま", url: "https://www.google.com/maps/search/?api=1&query=%E5%8C%97%E6%B5%B7%E9%81%93%E7%A5%9E%E5%AE%AE" },
        { time: "14:40", kind: "move", mode: "rail", from: "円山公園", to: "さっぽろ", via: "東西線到大通，轉南北線一站", dur: "約 15 分",
          board: "円山公園站往「新さっぽろ」方向，大通站下車，順指標轉南北線往「麻生」方向一站",
          alight: "さっぽろ站出站就是札幌站商圈：大丸、Stellar Place、APIA 地下街",
          fare: "¥250／人", url: "https://www.google.com/maps/search/?api=1&query=%E5%9C%B0%E4%B8%8B%E9%89%84%20%E3%81%95%E3%81%A3%E3%81%BD%E3%82%8D%E9%A7%85", boardUrl: "https://www.google.com/maps/search/?api=1&query=%E5%9C%B0%E4%B8%8B%E9%89%84%20%E5%86%86%E5%B1%B1%E5%85%AC%E5%9C%92%E9%A7%85" },
        { time: "15:00", kind: "see",  text: "札幌車站商圈最後大採購。伴手禮今天買齊，Day 9 機場只補貨", url: "https://www.google.com/maps/search/?api=1&query=%E6%9C%AD%E5%B9%8C%E3%82%B9%E3%83%86%E3%83%A9%E3%83%97%E3%83%AC%E3%82%A4%E3%82%B9" },
        { time: "18:00", kind: "eat",  text: "串燒居酒屋或蟹料理（羊肉已在 Day 2 大黑屋吃過，避免重複）", url: "https://www.google.com/maps/search/?api=1&query=%E3%81%99%E3%81%99%E3%81%8D%E3%81%AE" },
        { time: "19:30", kind: "lit",  text: "大通公園白色燈樹節＋慕尼黑聖誕市集（2026 大通會場 11/20–12/25；駅前通、南一条通會場亮到 3/14）。由緣就在公園旁，Day 6、7 晚上順路也看得到", url: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%80%9A%E5%85%AC%E5%9C%92%20%E6%9C%AD%E5%B9%8C" },
        { time: "21:00", kind: "stay", text: "回房整理行李", url: "https://www.google.com/maps/search/?api=1&query=ONSEN%20RYOKAN%20%E7%94%B1%E7%B8%81%20%E6%9C%AD%E5%B9%8C" }
      ]
    },
    {
      n: 9, date: "12/08", weekday: "二", place: "返家", leg: "rail", sun: { rise: "06:45", set: "16:02" },
      title: "平安返家",
      transport: "計程車到札幌站，JR 快速 Airport 37 分到機場。札幌站 5・6 番線，每 12 分一班",
      items: [
        { time: "06:30", kind: "eat",  text: "由緣札幌早餐 6:30 開始，來得及吃完再走", url: "https://www.google.com/maps/search/?api=1&query=ONSEN%20RYOKAN%20%E7%94%B1%E7%B8%81%20%E6%9C%AD%E5%B9%8C" },
        { time: "07:45", kind: "move", mode: "taxi", from: "由緣札幌", to: "JR 札幌站 南口", via: "計程車", arr: "08:00", dur: "約 10 分、¥1,200 上下",
          board: "退房時請櫃台叫車最省事。要省錢就拖行李走到大通站進チカホ，地下一路走到札幌站約 20 分，不踩雪",
          alight: "札幌站南口進站，往 5・6 番線", url: "https://www.google.com/maps/search/?api=1&query=%E6%9C%AD%E5%B9%8C%E9%A7%85%20%E5%8D%97%E5%8F%A3" },
        { time: "08:30", kind: "move", mode: "rail", from: "札幌", to: "新千歲機場", via: "JR 快速 Airport", arr: "09:07", dur: "37 分，每 12 分一班",
          board: "札幌站 5・6 番線，離剪票口最近的那座月台，所有往機場的エアポート都從這裡發。拖行李想保證有位子就買 4 號車 U 席，加 ¥1,000",
          alight: "新千歲機場站在 B1，出站上 2 樓是國內線出發大廳，再走航廈連絡通道到國際線 3 樓長榮櫃台，約 10 分",
          fare: "¥1,230／人，IC 卡直接刷",
          note: "想多睡半小時搭 08:42 前後那班也來得及，長榮櫃台 11:10 截止", url: "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8D%83%E6%AD%B3%E7%A9%BA%E6%B8%AF%E9%A7%85" },
        { time: "09:10", kind: "move", text: "抵達機場掛行李。長榮櫃檯 11:10 截止", url: "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8D%83%E6%AD%B3%E7%A9%BA%E6%B8%AF%20%E5%9B%BD%E9%9A%9B%E7%B7%9A%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB" },
        { time: "09:40", kind: "eat",  text: "機場限定伴手禮（網友推）：札幌農學校起司蛋糕、美瑛選果玉米麵包。玉米麵包數量有限常早早賣完，掛完行李先衝這兩樣再逛其他", url: "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8D%83%E6%AD%B3%E7%A9%BA%E6%B8%AF%20%E5%9B%BD%E5%86%85%E7%B7%9A%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB" },
        { time: "12:10", kind: "move", mode: "fly", from: "新千歲 CTS", to: "桃園 TPE", via: "長榮 BR165", arr: "16:05", dur: "3 小時 55 分", booked: true,
          board: "國際線航廈 3 樓出發。掛完行李先去機場限定伴手禮再過安檢，安檢抓 10:40 前", url: "https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%9C%8B%E9%9A%9B%E6%A9%9F%E5%A0%B4" }
      ]
    }
  ],

  stays: [
    { name: "JR Inn Hakodate", checkin: "11/30", checkout: "12/02", nights: 2, price: 4263,
      area: "函館站本體連通，下樓即達朝市", note: "", url: "https://www.google.com/maps/search/?api=1&query=JR%20Inn%20%E5%87%BD%E9%A4%A8" },
    { name: "The Lake Suite 湖之栖", checkin: "12/02", checkout: "12/03", nights: 1, price: 12844,
      area: "壯瞥町湖東南岸，全室客室露天風呂",
      note: "不在溫泉街主街，離にぎわい広場約 2 公里要開車；餐食方案待確認" },
    { name: "Nozo Hotel", checkin: "12/03", checkout: "12/05", nights: 2, price: 8160,
      area: "富良野精品飯店，附大眾湯與三溫暖", note: "", url: "https://www.google.com/maps/search/?api=1&query=Nozo%20Hotel%20%E5%AF%8C%E8%89%AF%E9%87%8E" },
    { name: "ONSEN RYOKAN Yuen Sapporo", checkin: "12/05", checkout: "12/08", nights: 3, price: 20381,
      area: "大通公園旁，登別直送溫泉", note: "", url: "https://www.google.com/maps/search/?api=1&query=ONSEN%20RYOKAN%20%E7%94%B1%E7%B8%81%20%E6%9C%AD%E5%B9%8C" }
  ],

  todos: [
    { cat: "證件與租車", text: "Hanna 先到監理站申請補發駕照（台灣駕照遺失）。要先有駕照正本才能辦日文譯本，這項排在最前面", done: false },
    { cat: "證件與租車", text: "台灣駕照日文譯本（監理站 NT$100，國際駕照在日本無效）", done: false },
    { cat: "證件與租車", text: "取車當天在 ORIX 櫃台加 RAP 安心包 ¥660／日（免 NOC、爆胎免費換），網路訂不了", done: false },
    { cat: "證件與租車", text: "訂 ORIX：12/1 13:30 函館駅前店取 → 12/5 15:30 札幌南 6 條店還（4 天又 2 小時，超時每小時 ¥1,320）。北海道限定 5 名乘無指定方案 ¥8,690＋¥7,150×3，含免責、雪胎、4WD；WEB 限定要先免費加入 Prime 會員；異地還車費在訂車畫面看", done: false },
    { cat: "證件與租車", text: "ETC 卡取車時借 ¥550。HEP 5 日版 ¥9,600（12/1–12/5）vs Day 3、4、6 過路費合計約 ¥12,000，划算", done: false },
    { cat: "交通票券",   text: "辦好えきねっと帳號（紙本折扣票已全廢）", done: false },
    { cat: "交通票券",   text: "10/30 10:00 開賣：劃 Day 1 北斗指定席，買可變更票種", done: false },
    { cat: "交通票券",   text: "Day 2 函館市電只搭 3 趟 ¥750，1 日券 ¥800 不用買，刷 Suica", done: false },
    { cat: "住宿",       text: "確認湖之栖是否含一泊二食", done: false },
    { cat: "住宿",       text: "備現金付宿泊税與入湯税（兩人八晚約 ¥4,000）", done: false },
    { cat: "住宿",       text: "住宿八晚全部訂妥，合計 TWD 45,648", done: true },
    { cat: "住宿",       text: "原 SAPPORO STREAM HOTEL 11/30 已取消", done: true },
    { cat: "餐廳訂位",   text: "大黑屋 函館五稜郭店：Tabelog 12/1（二）18:00、2 位。12/1 05:59 JST 前免費取消，當天 ¥3,000／人；餐費現場付備現金", done: true },
    { cat: "出發前再確認", text: "五稜星の夢 2026-27 點燈期間與五稜郭塔營業時間", done: false },
    { cat: "出發前再確認", text: "青池・白鬚瀑布點燈時間（往年 12 月 16:30–21:00）", done: false },
    { cat: "出發前再確認", text: "洞爺湖溫泉燈飾隧道期間（往年 11/1–2/28、17:00–22:00）", done: false },
    { cat: "出發前再確認", text: "札幌白色燈樹節大通會場 2026/11/20–12/25，12/7 在檔期內", done: true },
    { cat: "出發前再確認", text: "旭山動物園冬季開園時間（往年 10:30–15:30）", done: false },
    { cat: "出發前再確認", text: "TOMAMU 霧氷テラス 12/1 起營業：到官網確認纜車冬季每日時間，往返 ¥2,500／人", done: false },
    { cat: "出發前再確認", text: "出發前一週看 tenki.jp 10 日預報，重點 12/3 道東道占冠段、12/5 道東道占冠～千歲段（封路就改國道 237 → 滝川 → 道央道北線，跳過 TOMAMU 與支笏湖）。每天開車前看ドラとら（通行止め）與北の道ナビ（路面攝影機）", done: false },
    { cat: "出發前再確認", text: "回程班機 BR165 12:10 起飛已確認", done: true }
  ],

  notes: [
    { by: "Claude", at: "2026/10/27",
      text: "Day 6 改南線：旭山動物園拿掉（企鵝散步 12/18 才開始、動物狀態評價不佳），改富良野 → TOMAMU 霧冰露台（12/1 起營業，機率約 55%）→ 道東道 → 千歲午餐 → 支笏湖 → 札幌，15:30 還車時間不變。原本想吃的旭川拉麵一起消失；すみれ味噌拉麵排不進 Day 6，札幌三天自己找時間。" },
    { by: "Claude", at: "2026/10/27",
      text: "租車改 ORIX：Day 2 13:30 函館駅前店取車（冬季 09:00 才開門，所以改下午）、Day 6 中午從旭川白天開回札幌，先到由緣門口卸三個大行李箱再到 500 公尺外的 ORIX 札幌南 6 條店還車（超時 2 小時約 ¥2,640）。好處：省修道院兩趟計程車 ¥5,500、Day 3 可 08:00 從飯店出發、三個箱子不用拖上特急。原本的旭川還車搭特急版本留作暴風雪備案。Day 7–9 小樽與札幌維持 JR 與地下鐵。" },
    { by: "Claude", at: "2026/10/26",
      text: "✅ 已解決：旅伴在第四次修訂把 Day 2 改成由西往東（朝市→元町→灣區午餐→修道院→五稜郭塔→大黑屋→函館山），不再走回頭路，並訂了大黑屋 18:00 的位子。原本提的動線問題就此結案。" },
    { by: "Claude", at: "2026/10/26",
      text: "✅ 已排進 Day 2 21:15（下函館山後）：はこだてクリスマスファンタジー（金森倉庫前的海上聖誕樹）往年 12/1 開幕，剛好是 Day 2 那晚，開幕日通常有煙火。要排的話建議放在函館山下山之後。" }
  ]
};
