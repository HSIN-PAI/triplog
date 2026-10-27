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
  updated: "2026-10-27（第五次修訂：全程交通改成乘車券格式，補月台、路線、票價與買票方式）",

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
          note: "15:45 是目標班次，最晚 16:05 前上車都趕得上北斗" },
        { time: "16:19", kind: "move", mode: "rail", from: "南千歲", to: "函館", via: "JR 特急北斗 18 號", arr: "19:29", dur: "3 小時 10 分，全車指定席 5 節",
          board: "南千歲 1 番線。從 3 番線下車後，走樓梯或電梯上到剪票層，再下到對面的 1・2 番月台，在 1 番線候車。月台地上有車廂號碼，站在自己那節的位置",
          alight: "函館站是頭端式月台（通常 7 或 8 番線），下車往前走到底就是剪票口，同一層沒有樓梯",
          fare: "乘車券 ¥5,630 ＋ 指定席 ¥2,950 ＝ ¥8,580／人（從新千歲機場起算）",
          ticket: "10/30（五）日本時間 10:00（台灣 09:00）えきねっと開賣，買「新千歲機場→函館」、可變更票種。付款後要在新千歲機場站的綠色窗口或指定席售票機取紙票，才能進站",
          note: "沒劃到位不能上車。趕不上這班：下一班北斗 20 號 16:51 札幌發、函館 20:39 到；末班 22 號 18:46 札幌發、函館 22:31 到",
          url: "https://www.google.com/maps/search/?api=1&query=%E5%8D%97%E5%8D%83%E6%AD%B3%E9%A7%85" },
        { time: "19:29", kind: "stay", text: "出剪票口，JR Inn Hakodate 就在站旁，步行 1 分。先放行李再出門", url: "https://www.google.com/maps/search/?api=1&query=JR%20Inn%20%E5%87%BD%E9%A4%A8" },
        { time: "19:45", kind: "eat",  text: "晚餐函館鹽味拉麵。店家多 20:00–21:00 打烊，出站直接去，別先回房。備選：網友推的 Soup Curry Begirama，位置與營業時間查不到，要吃請先確認" },
        { time: "20:30", kind: "lit",  text: "散步 10 分鐘到金森紅磚倉庫看夜間點燈", url: "https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E8%B5%A4%E3%83%AC%E3%83%B3%E3%82%AC%E5%80%89%E5%BA%AB" }
      ]
    },
    {
      n: 2, date: "12/01", weekday: "二", place: "函館", leg: "city", sun: { rise: "06:40", set: "16:05" },
      title: "函館一日：朝市、元町、五稜星の夢、大黑屋、百萬夜景",
      transport: "市電＋計程車。全天由西往東不走回頭路；買市電 1 日券 ¥800（紙票，車上向司機買）",
      items: [
        { time: "08:00", kind: "eat",  text: "函館朝市海鮮丼（飯店樓下步行 1 分）。冬季常無活烏賊，別抱太大期待", url: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E6%9C%9D%E5%B8%82" },
        { time: "09:30", kind: "move", mode: "rail", from: "函館駅前", to: "十字街", via: "函館市電 ② 或 ⑤", dur: "5 分",
          board: "飯店門口站前廣場就是「函館駅前」電停。往「谷地頭」② 或「函館どつく前」⑤ 都會到，看哪台先來。中門上車抽整理券，或直接刷 IC（Suica／Kitaca 可用）",
          alight: "十字街下車，前門付費。往八幡坂、元町教會群步行上坡 10 分；想省腳力就多坐一站到「末広町」（只有 ⑤ 會到）",
          fare: "單程 ¥250 起（2025 年調漲後）。今天至少搭 3 趟，上車直接跟司機買市電 1 日券 ¥800（紙票），之後整天出示即可",
          note: "市電・巴士共通 1 日券 ¥1,600 只有手機版，今天巴士用不到，別買" },
        { time: "10:00", kind: "see",  text: "八幡坂、元町教會群、舊函館區公會堂", url: "https://www.google.com/maps/search/?api=1&query=%E5%85%AB%E5%B9%A1%E5%9D%82%20%E5%87%BD%E9%A4%A8" },
        { time: "12:00", kind: "eat",  text: "走到灣區吃小丑漢堡（金森倉庫附近有分店）。份量吃少一點，留胃給晚上的羊肉" },
        { time: "13:30", kind: "move", mode: "taxi", from: "金森倉庫（灣區）", to: "特拉普派女子修道院", via: "計程車", dur: "約 25 分、¥3,000 上下",
          board: "金森倉庫前有計程車招呼站，或請小丑漢堡店員幫忙叫車。跟司機說「トラピスチヌ修道院」",
          alight: "修道院前停車場下車，請司機留名片或問能否 15:00 回頭載（下一段還要用）",
          note: "省錢備案是函館站前 4 號巴士站的「五稜郭塔・トラピスチヌ接駁巴士」，但要先回站前且班次少，時間對不上就不考慮" },
        { time: "14:15", kind: "see",  text: "特拉普派女子修道院，特濃冰淇淋。內部不開放，前庭、資料室、売店約 40 分就夠，15:00 離開", url: "https://www.google.com/maps/search/?api=1&query=%E3%83%88%E3%83%A9%E3%83%94%E3%82%B9%E3%83%81%E3%83%8C%E4%BF%AE%E9%81%93%E9%99%A2%20%E5%87%BD%E9%A4%A8" },
        { time: "15:00", kind: "move", mode: "taxi", from: "女子修道院", to: "五稜郭公園", via: "計程車", dur: "約 20 分、¥2,500 上下",
          board: "修道院前通常有排班計程車；沒有就請売店幫忙叫車",
          alight: "五稜郭公園入口（護城河邊、五稜郭塔旁）下車，先繞護城河" },
        { time: "15:30", kind: "lit",  text: "先在地面繞護城河一圈（1.8 公里）。16:05 日落，走到一半就能看它點燈成星形" },
        { time: "16:30", kind: "lit",  text: "五稜郭塔看「五稜星の夢」點燈首日，從 90 公尺高俯瞰點燈的星形護城河。塔營業至 18:00（售票 17:50），看完走去大黑屋剛好", url: "https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E7%A8%9C%E9%83%AD%E3%82%BF%E3%83%AF%E3%83%BC" },
        { time: "18:00", kind: "eat",  text: "大黑屋 函館五稜郭店 成吉思汗烤羊肉。✅ 已透過 Tabelog 訂位 12/1（二）18:00、2 位（僅訂座位），18:00–19:30" },
        { time: "",      kind: "warn", text: "大黑屋：餐費現場付，訂位用的信用卡不一定能在店內刷，備好現金。12/1 05:59（JST）前免費取消；當天取消或未到店 ¥3,000／人；系統手續費 ¥880 已扣、不退" },
        { time: "19:30", kind: "move", mode: "rail", from: "五稜郭公園前", to: "十字街", via: "函館市電 ② 或 ⑤", arr: "19:55", dur: "約 20 分，再步行 10 分",
          board: "大黑屋走 2 分到「五稜郭公園前」電停，站在往「函館駅前」方向那側月台，② 谷地頭行或 ⑤ 函館どつく前行都可以",
          alight: "十字街下車，沿南部坂上坡步行 10 分到函館山纜車山麓站。雪天穿防滑鞋",
          fare: "出示市電 1 日券即可",
          note: "⚠️ 19:40 後才離席就別搭市電，直接叫計程車到「函館山ロープウェイ山麓駅」，約 15 分、¥1,500 上下" },
        { time: "20:15", kind: "lit",  text: "函館山纜車上山看百萬夜景，20:15–21:00。往復 ¥1,800／人，IC 卡可付。末班上行 20:50、末班下行 21:00，到站約有 35 分緩衝；山頂約 40 分只看景拍照，20:00 後人潮已散比較好拍", url: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B1%B1%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4%20%E5%B1%B1%E9%BA%93%E9%A7%85" },
        { time: "21:30", kind: "stay", text: "回 JR Inn 泡頂樓大眾湯" },
        { time: "",      kind: "warn", text: "冬季函館山登山車道封閉、登山巴士停駛，只能搭纜車。十字街站步行 10 分上坡，雪天穿防滑鞋" }
      ]
    },
    {
      n: 3, date: "12/02", weekday: "三", place: "洞爺湖", leg: "drive", sun: { rise: "06:40", set: "16:00" },
      title: "取車北上 → 大沼 → 洞爺湖溫泉",
      transport: "自駕。08:00 函館駅前取車，大沼繞一圈後上道央道，126 公里高速到洞爺湖",
      items: [
        { time: "08:00", kind: "move", mode: "walk", from: "JR Inn 函館", to: "Toyota 租車 函館駅前店", via: "步行 5 分", dur: "08:00 開門，手續約 30 分",
          board: "退房後從函館站西口出來，沿海峽通走 5 分，大手町 19-2、APA 飯店旁",
          alight: "取車核對：雪胎、ETC 卡、NOC 免除、HEP 已登錄、還車據點與時間。拍一圈車身照片",
          ticket: "租車尚未確認訂妥。訂車時就要指定還車據點（札幌駅前或旭川駅前，見 Day 6），並加 NOC 免除與 HEP 4 日版",
          url: "https://www.google.com/maps/search/?api=1&query=%E3%83%88%E3%83%A8%E3%82%BF%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%AB%E3%83%BC%20%E5%87%BD%E9%A4%A8%E9%A7%85%E5%89%8D%E5%BA%97" },
        { time: "08:40", kind: "move", mode: "drive", from: "函館駅前", to: "大沼公園", via: "函館新道（國道 5 號）", arr: "09:30", dur: "約 30 公里、40 分",
          board: "導航設「大沼公園駅」。上函館新道往北是免費快速路，出市區後就是直路",
          alight: "大沼公園駅前有停車場（冬季多免費），停好步行遊湖，不要開進湖畔小路" },
        { time: "09:30", kind: "see",  text: "大沼國定公園漫步駒岳火山湖景（車程 40 分）", url: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B2%BC%E5%85%AC%E5%9C%92%20%E5%8C%97%E6%B5%B7%E9%81%93" },
        { time: "10:30", kind: "eat",  text: "沼之家大沼糰子" },
        { time: "11:00", kind: "move", mode: "drive", from: "大沼公園 IC", to: "虻田洞爺湖 IC", via: "道央道（往札幌方向）", arr: "13:00", dur: "126 公里、約 1 小時 50 分，冬季抓 2 小時",
          board: "大沼公園駅開 10 分到大沼公園 IC。上道央道後一路往札幌方向，不用換線",
          alight: "虻田洞爺湖 IC 下，接國道 37 號往洞爺湖溫泉街約 20 分",
          fare: "ETC ¥3,390；有辦 HEP 4 日版就不另收",
          note: "途中只有八雲 PA、有珠山 SA 能休息上廁所。長萬部一帶冬天常有地吹雪，看到前車煞車燈就減速" },
        { time: "13:00", kind: "eat",  text: "洞爺湖溫泉街午餐" },
        { time: "14:00", kind: "see",  text: "筒倉展望台鳥瞰雪湖全景（在湖西側，先繞這裡再往東到旅館最順）", url: "https://www.google.com/maps/search/?api=1&query=%E3%82%B5%E3%82%A4%E3%83%AD%E5%B1%95%E6%9C%9B%E5%8F%B0%20%E6%B4%9E%E7%88%BA%E6%B9%96" },
        { time: "14:30", kind: "see",  text: "可選：昭和新山・有珠山纜車，離湖之栖約 10 分鐘車程" },
        { time: "15:00", kind: "stay", text: "入住 The Lake Suite 湖之栖，先泡一輪客室露天風呂" },
        { time: "16:45", kind: "lit",  text: "開車 5 分鐘回溫泉街，看 17:00 點亮的燈飾隧道（にぎわい広場，免費）與手湯足湯" },
        { time: "18:30", kind: "eat",  text: "回旅館一泊二食會席晚餐，這時候才開酒" },
        { time: "",      kind: "warn", text: "湖之栖在壯瞥町、離溫泉街約 2 公里，雪地走不到要開車。日本酒駕零容忍，飯後喝了酒就不能再出門，所以點燈排在晚餐前" }
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
          fare: "ETC 約 ¥5,000（虻田洞爺湖→占冠）；有辦 HEP 4 日版就不另收",
          note: "休息點：輪厚 PA、由仁 PA、占冠 PA。若道東道因暴雪封閉，改道央道北上到滝川 IC 轉國道 38 往富良野，多繞約 50 公里、多 1 小時" },
        { time: "13:30", kind: "eat",  text: "抵富良野，午餐在地咖哩歐姆蛋包飯" },
        { time: "14:30", kind: "see",  text: "富良野市街散策（果醬園、起司工房可視時間安排）" },
        { time: "15:30", kind: "stay", text: "入住 Nozo Hotel", url: "https://www.google.com/maps/search/?api=1&query=Nozo%20Hotel%20%E5%AF%8C%E8%89%AF%E9%87%8E" },
        { time: "16:00", kind: "lit",  text: "散步到森林精靈露台看雪景點燈（富良野日落約 15:55）", url: "https://www.google.com/maps/search/?api=1&query=%E3%83%8B%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%86%E3%83%A9%E3%82%B9%20%E5%AF%8C%E8%89%AF%E9%87%8E" },
        { time: "19:00", kind: "see",  text: "回飯店大眾湯與三溫暖" }
      ]
    },
    {
      n: 5, date: "12/04", weekday: "五", place: "美瑛", leg: "drive", sun: { rise: "06:35", set: "15:55" },
      title: "美瑛白天雪原，入夜連拍兩處點燈",
      transport: "自駕。富良野 → 美瑛市街 35 公里，美瑛 → 白金（青池）20 公里，晚上再開 45 公里回富良野",
      items: [
        { time: "08:30", kind: "move", mode: "drive", from: "Nozo Hotel 富良野", to: "美瑛", via: "國道 237 北上", arr: "09:10", dur: "約 35 公里、40 分",
          board: "出發前把 Ken & Mary 之樹、七星之樹、四季彩之丘、白鬚瀑布、青池都加進導航。國道 237 筆直好開",
          alight: "美瑛的樹木景點都在田間道路，冬季路肩窄又滑，只停指定停車場，千萬別停路邊下車拍照" },
        { time: "09:10", kind: "see",  text: "美瑛冬日巡禮：Ken & Mary 之樹、七星之樹", url: "https://www.google.com/maps/search/?api=1&query=%E3%82%B1%E3%83%B3%E3%81%A8%E3%83%A1%E3%83%AA%E3%83%BC%E3%81%AE%E6%9C%A8%20%E7%BE%8E%E7%91%9B" },
        { time: "12:00", kind: "eat",  text: "美瑛市區午餐" },
        { time: "13:30", kind: "see",  text: "四季彩之丘廣袤雪原（冬季有雪上摩托車等活動）", url: "https://www.google.com/maps/search/?api=1&query=%E5%9B%9B%E5%AD%A3%E5%BD%A9%E3%81%AE%E4%B8%98%20%E7%BE%8E%E7%91%9B" },
        { time: "15:45", kind: "move", mode: "drive", from: "美瑛市街", to: "白金 白鬚瀑布", via: "道道 966 往白金溫泉", arr: "16:15", dur: "約 20 公里、30 分",
          board: "15:55 日落，要在天黑前開到。沿途是上坡山路，有結冰就慢",
          alight: "停白金觀光中心停車場（免費），步行 2 分到藍河橋看瀑布。之後再開 3 分到青池停車場（冬季免費）" },
        { time: "16:30", kind: "lit",  text: "白鬚瀑布點燈（藍水與冰柱）", url: "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E3%81%B2%E3%81%92%E3%81%AE%E6%BB%9D%20%E7%BE%8E%E7%91%9B" },
        { time: "16:50", kind: "lit",  text: "車程 3 分鐘轉青池看夜間點燈（12 月點燈 16:30–21:00）", url: "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E9%87%91%E9%9D%92%E3%81%84%E6%B1%A0" },
        { time: "18:00", kind: "move", mode: "drive", from: "青池", to: "Nozo Hotel 富良野", via: "道道 966 → 國道 237 南下", arr: "19:00", dur: "約 45 公里、1 小時",
          board: "青池停車場出發，先下山回美瑛市街再接國道 237",
          note: "夜間雪地鄉道慢慢開，鹿會衝出來。回程順路可在美瑛或上富良野吃晚餐" },
        { time: "19:00", kind: "stay", text: "返回 Nozo Hotel 連住第二晚" },
        { time: "",      kind: "warn", text: "12 月初青池已結冰覆雪，白天看不到藍色。點燈版才是冬季唯一正確的打開方式" }
      ]
    },
    {
      n: 6, date: "12/05", weekday: "六", place: "旭川→札幌", leg: "drive", sun: { rise: "06:45", set: "16:00" },
      title: "旭山動物園 → 札幌還車",
      transport: "自駕 60 公里到旭山動物園，再 150 公里高速回札幌，18:00 前札幌站前還車",
      items: [
        { time: "09:00", kind: "move", mode: "drive", from: "Nozo Hotel 富良野", to: "旭山動物園", via: "國道 237 → 旭川市街東側", arr: "10:15", dur: "約 60 公里、冬季 1 小時 15 分",
          board: "退房後導航設「旭山動物園 正門」。正門側免費停車場約 200 台，開園前到才停得到近的",
          alight: "正門入園，10:30 開園。先衝海豹館、北極熊館" },
        { time: "10:30", kind: "see",  text: "旭山動物園開園即入，待到 13:00。冬季 10:30–15:30、最終入園 15:00", url: "https://www.google.com/maps/search/?api=1&query=%E6%97%AD%E5%B1%B1%E5%8B%95%E7%89%A9%E5%9C%92" },
        { time: "13:00", kind: "eat",  text: "旭川拉麵。拉麵村距園區 15 分但偏觀光；市區梅光軒本店或山頭火本店多 15 分車程", url: "https://www.google.com/maps/search/?api=1&query=%E3%81%82%E3%81%95%E3%81%B2%E3%81%8B%E3%82%8F%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E6%9D%91" },
        { time: "14:30", kind: "move", mode: "drive", from: "旭山動物園", to: "札幌市區", via: "旭川北 IC → 道央道 → 札幌 IC", arr: "16:45", dur: "約 150 公里、2 小時 15 分（高速段 133 公里、1 小時 30 分）",
          board: "動物園到旭川北 IC 約 20 分。上道央道往札幌方向，途中砂川 SA、岩見澤 SA 可休息",
          alight: "札幌 IC 下接國道 12 號進市區約 30 分。還車前在市區加油站加滿油、留收據",
          fare: "ETC ¥3,560；有辦 HEP 4 日版就不另收",
          note: "16:00 天黑，夜間雪地高速是整趟最危險的一段，務必 14:30 前離開旭川。備案：改在 Toyota 旭川駅前店還車（宮下通 9、旭川站步行 2 分，11 月起營業到 19:00），搭特急ライラック／カムイ 1 小時 25 分、指定席 ¥5,440 回札幌。異地還車費同為 ¥9,900，省掉最危險的一段" },
        { time: "17:30", kind: "move", mode: "drive", from: "札幌市區", to: "Toyota 租車 札幌駅前（南口店或北口櫃台）", via: "還車", dur: "手續約 15 分",
          board: "訂車時指定哪一家就還哪一家。北口是京王プレリア飯店 B1 的櫃台（北 8 條西 4）；還車前拍油表、里程、車身照片",
          ticket: "還車據點尚未決定（札幌 or 旭川），訂車時就要指定" },
        { time: "18:00", kind: "move", mode: "walk", from: "札幌站", to: "由緣札幌（南 3 條西 8）", via: "計程車 10 分，或拖行李走 20 分", dur: "¥1,200 上下",
          board: "雪天拖行李建議直接在站前搭計程車。要走的話從南口進地下步行空間（チカホ）一路走到大通站，出 1 號出口再走 8 分，全程幾乎不踩雪" },
        { time: "18:30", kind: "stay", text: "入住由緣札幌", url: "https://www.google.com/maps/search/?api=1&query=ONSEN%20RYOKAN%20%E7%94%B1%E7%B8%81%20%E6%9C%AD%E5%B9%8C" },
        { time: "19:00", kind: "eat",  text: "三大蟹吃到飽" },
        { time: "20:30", kind: "see",  text: "狸小路商店街採買藥妝（由緣步行 5 分）", url: "https://www.google.com/maps/search/?api=1&query=%E7%8B%B8%E5%B0%8F%E8%B7%AF%E5%95%86%E5%BA%97%E8%A1%97%20%E6%9C%AD%E5%B9%8C" },
        { time: "",      kind: "warn", text: "企鵝散步 12 月中下旬才開始（上一季 12/18），12/5 看不到。館內企鵝照常展示" }
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
          fare: "¥800／人，IC 卡直接刷進站" },
        { time: "10:30", kind: "see",  text: "小樽運河、堺町通商店街、小樽音樂盒堂", url: "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E6%A8%BD%E9%81%8B%E6%B2%B3" },
        { time: "17:30", kind: "eat",  text: "小樽政壽司" },
        { time: "19:30", kind: "move", mode: "rail", from: "小樽", to: "札幌", via: "JR 快速 Airport 或普通車", dur: "快速 35 分、普通車約 50 分",
          board: "小樽站往札幌方向以 4 番線為主，看看板。快速每 30 分一班，等不到就搭普通車，只慢 15 分",
          alight: "札幌站南口出站，走チカホ回由緣泡湯",
          fare: "¥800／人，IC 卡" }
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
          fare: "¥290／人。Suica／Kitaca 可用；札幌自己的 SAPICA 卡只在市內通，不用特別買" },
        { time: "10:00", kind: "see",  text: "白色戀人公園：工廠見學、甜點、冬季中庭點燈", url: "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E3%81%84%E6%81%8B%E4%BA%BA%E3%83%91%E3%83%BC%E3%82%AF" },
        { time: "13:00", kind: "move", mode: "rail", from: "宮の沢", to: "円山公園", via: "地下鐵東西線（新さっぽろ行）", dur: "約 10 分",
          board: "宮の沢站上車，往「新さっぽろ」方向",
          alight: "円山公園站 3 號出口，穿過円山公園步行 15 分到北海道神宮。雪地上坡，慢慢走",
          fare: "¥250／人" },
        { time: "13:30", kind: "see",  text: "參拜雪中的北海道神宮", url: "https://www.google.com/maps/search/?api=1&query=%E5%8C%97%E6%B5%B7%E9%81%93%E7%A5%9E%E5%AE%AE" },
        { time: "14:40", kind: "move", mode: "rail", from: "円山公園", to: "さっぽろ", via: "東西線到大通，轉南北線一站", dur: "約 15 分",
          board: "円山公園站往「新さっぽろ」方向，大通站下車，順指標轉南北線往「麻生」方向一站",
          alight: "さっぽろ站出站就是札幌站商圈：大丸、Stellar Place、APIA 地下街",
          fare: "¥250／人" },
        { time: "15:00", kind: "see",  text: "札幌車站商圈最後大採購。伴手禮今天買齊，Day 9 機場只補貨" },
        { time: "18:00", kind: "eat",  text: "串燒居酒屋或蟹料理（羊肉已在 Day 2 大黑屋吃過，避免重複）" },
        { time: "19:30", kind: "lit",  text: "大通公園白色燈樹節＋慕尼黑聖誕市集（往年 11/21–12/25）", url: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%80%9A%E5%85%AC%E5%9C%92%20%E6%9C%AD%E5%B9%8C" },
        { time: "21:00", kind: "stay", text: "回房整理行李" }
      ]
    },
    {
      n: 9, date: "12/08", weekday: "二", place: "返家", leg: "rail", sun: { rise: "06:45", set: "16:02" },
      title: "平安返家",
      transport: "計程車到札幌站，JR 快速 Airport 37 分到機場。札幌站 5・6 番線，每 12 分一班",
      items: [
        { time: "06:30", kind: "eat",  text: "由緣札幌早餐 6:30 開始，來得及吃完再走" },
        { time: "07:45", kind: "move", mode: "taxi", from: "由緣札幌", to: "JR 札幌站 南口", via: "計程車", arr: "08:00", dur: "約 10 分、¥1,200 上下",
          board: "退房時請櫃台叫車最省事。要省錢就拖行李走到大通站進チカホ，地下一路走到札幌站約 20 分，不踩雪",
          alight: "札幌站南口進站，往 5・6 番線" },
        { time: "08:30", kind: "move", mode: "rail", from: "札幌", to: "新千歲機場", via: "JR 快速 Airport", arr: "09:07", dur: "37 分，每 12 分一班",
          board: "札幌站 5・6 番線，離剪票口最近的那座月台，所有往機場的エアポート都從這裡發。拖行李想保證有位子就買 4 號車 U 席，加 ¥1,000",
          alight: "新千歲機場站在 B1，出站上 2 樓是國內線出發大廳，再走航廈連絡通道到國際線 3 樓長榮櫃台，約 10 分",
          fare: "¥1,230／人，IC 卡直接刷",
          note: "想多睡半小時搭 08:42 前後那班也來得及，長榮櫃台 11:10 截止" },
        { time: "09:10", kind: "move", text: "抵達機場掛行李。長榮櫃檯 11:10 截止" },
        { time: "09:40", kind: "eat",  text: "機場限定伴手禮（網友推）：札幌農學校起司蛋糕、美瑛選果玉米麵包。玉米麵包數量有限常早早賣完，掛完行李先衝這兩樣再逛其他" },
        { time: "12:10", kind: "move", mode: "fly", from: "新千歲 CTS", to: "桃園 TPE", via: "長榮 BR165", arr: "16:05", dur: "3 小時 55 分", booked: true,
          board: "國際線航廈 3 樓出發。掛完行李先去機場限定伴手禮再過安檢，安檢抓 10:40 前" }
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
    { cat: "證件與租車", text: "租車加保 NOC 免除（雪地必備）", done: false },
    { cat: "證件與租車", text: "決定還車據點：札幌 or 旭川（訂車時就要指定）", done: false },
    { cat: "證件與租車", text: "確認雪胎、ETC 卡、HEP 4 日版（普通車 ¥7,700）。Day 3–6 高速過路費合計約 ¥12,000，HEP 划算", done: false },
    { cat: "交通票券",   text: "辦好えきねっと帳號（紙本折扣票已全廢）", done: false },
    { cat: "交通票券",   text: "10/30 10:00 開賣：劃 Day 1 北斗指定席，買可變更票種", done: false },
    { cat: "交通票券",   text: "Day 2 函館市電 1 日券 ¥800（紙票，上車跟司機買，不用先買）", done: false },
    { cat: "住宿",       text: "確認湖之栖是否含一泊二食", done: false },
    { cat: "住宿",       text: "備現金付宿泊税與入湯税（兩人八晚約 ¥4,000）", done: false },
    { cat: "住宿",       text: "住宿八晚全部訂妥，合計 TWD 45,648", done: true },
    { cat: "住宿",       text: "原 SAPPORO STREAM HOTEL 11/30 已取消", done: true },
    { cat: "餐廳訂位",   text: "大黑屋 函館五稜郭店：Tabelog 12/1（二）18:00、2 位。12/1 05:59 JST 前免費取消，當天 ¥3,000／人；餐費現場付備現金", done: true },
    { cat: "出發前再確認", text: "五稜星の夢 2026-27 點燈期間與五稜郭塔營業時間", done: false },
    { cat: "出發前再確認", text: "青池・白鬚瀑布點燈時間（往年 12 月 16:30–21:00）", done: false },
    { cat: "出發前再確認", text: "洞爺湖溫泉燈飾隧道期間（往年 11/1–2/28、17:00–22:00）", done: false },
    { cat: "出發前再確認", text: "札幌白色燈樹節大通會場檔期（往年 11/21–12/25）", done: false },
    { cat: "出發前再確認", text: "旭山動物園冬季開園時間（往年 10:30–15:30）", done: false },
    { cat: "出發前再確認", text: "回程班機 BR165 12:10 起飛已確認", done: true }
  ],

  notes: [
    { by: "Claude", at: "2026/10/26",
      text: "✅ 已解決：旅伴在第四次修訂把 Day 2 改成由西往東（朝市→元町→灣區午餐→修道院→五稜郭塔→大黑屋→函館山），不再走回頭路，並訂了大黑屋 18:00 的位子。原本提的動線問題就此結案。" },
    { by: "Claude", at: "2026/10/26",
      text: "還沒排進去：はこだてクリスマスファンタジー（金森倉庫前的海上聖誕樹）往年 12/1 開幕，剛好是 Day 2 那晚，開幕日通常有煙火。要排的話建議放在函館山下山之後。" }
  ]
};
