// ==========================================
// 2026 北海道 9 天 8 夜「鐵路＋自駕」
// 改行程只要改這個檔案，trip.html 不用動。
//
// 欄位說明
//   days[].items[].kind：move 移動 | see 景點 | eat 吃 | lit 點燈 | stay 住宿 | warn 提醒
//   days[].items[].url ：選填，會顯示成「地圖」小連結
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
  updated: "2026-10-26（第四次修訂：併入旅伴的大黑屋訂位與 Day 2 動線）",

  days: [
    {
      n: 1, date: "11/30", weekday: "一",
      title: "抵達 → 特急北斗直達函館",
      transport: "JR 快速 Airport（空港→南千歲）＋ 特急北斗指定席",
      items: [
        { time: "14:05", kind: "move", text: "BR116 抵達新千歲機場（桃園 09:30 起飛）", url: "https://maps.google.com/?cid=1903673735198072182" },
        { time: "14:05", kind: "move", text: "出關領行李，抓 1～1.5 小時" },
        { time: "16:19", kind: "move", text: "南千歲搭特急北斗（札幌 15:45 發），車程約 3 小時 10 分" },
        { time: "19:29", kind: "stay", text: "抵達函館，入住 JR Inn Hakodate", url: "https://maps.google.com/?cid=7468249822368411182" },
        { time: "19:45", kind: "eat",  text: "晚餐函館鹽味拉麵。店家多 20:00–21:00 打烊，出站直接去，別先回房。備選：網友推的 Soup Curry Begirama，位置與營業時間查不到，要吃請先確認" },
        { time: "20:30", kind: "lit",  text: "散步 10 分鐘到金森紅磚倉庫看夜間點燈", url: "https://maps.google.com/?cid=12555325514605175032" },
        { time: "",      kind: "warn", text: "北斗已全車指定席、無自由席。買可變更票種，班機延誤時才有退路。趕不上這班，下一班到函館 20:39、末班 22:31" }
      ]
    },
    {
      n: 2, date: "12/01", weekday: "二",
      title: "函館一日：朝市、元町、五稜星の夢、大黑屋、百萬夜景",
      transport: "市電＋巴士／計程車。全天由西往東不走回頭路；買市電・巴士共通一日券約 ¥1,000",
      items: [
        { time: "08:00", kind: "eat",  text: "函館朝市海鮮丼（飯店樓下步行 1 分）。冬季常無活烏賊，別抱太大期待", url: "https://maps.google.com/?cid=14984501438965701479" },
        { time: "09:30", kind: "move", text: "搭市電到元町（「十字街」或「末広町」下車）" },
        { time: "10:00", kind: "see",  text: "八幡坂、元町教會群、舊函館區公會堂", url: "https://maps.google.com/?cid=3912959883652872542" },
        { time: "12:00", kind: "eat",  text: "走到灣區吃小丑漢堡（金森倉庫附近有分店）。份量吃少一點，留胃給晚上的羊肉" },
        { time: "13:30", kind: "move", text: "計程車或巴士前往女子修道院（在函館東側、離五稜郭較近）" },
        { time: "14:15", kind: "see",  text: "特拉普派女子修道院，特濃冰淇淋。內部不開放，前庭、資料室、売店約 40 分就夠，15:00 離開", url: "https://maps.google.com/?cid=10137258327179064166" },
        { time: "15:00", kind: "move", text: "計程車約 20 分到五稜郭" },
        { time: "15:30", kind: "lit",  text: "先在地面繞護城河一圈（1.8 公里）。16:05 日落，走到一半就能看它點燈成星形" },
        { time: "16:30", kind: "lit",  text: "五稜郭塔看「五稜星の夢」點燈首日，從 90 公尺高俯瞰點燈的星形護城河。塔營業至 18:00（售票 17:50），看完走去大黑屋剛好", url: "https://maps.google.com/?cid=8488056557626960030" },
        { time: "18:00", kind: "eat",  text: "大黑屋 函館五稜郭店 成吉思汗烤羊肉。✅ 已透過 Tabelog 訂位 12/1（二）18:00、2 位（僅訂座位），18:00–19:30" },
        { time: "",      kind: "warn", text: "大黑屋：餐費現場付，訂位用的信用卡不一定能在店內刷，備好現金。12/1 05:59（JST）前免費取消；當天取消或未到店 ¥3,000／人；系統手續費 ¥880 已扣、不退" },
        { time: "19:30", kind: "move", text: "離席，走 2 分到市電五稜郭公園前，搭到「十字街」約 20 分，再步行上坡到纜車站 10 分。⚠️ 19:40 後才離席就改叫計程車直達纜車山麓站（約 15 分、¥1,500 上下）" },
        { time: "20:15", kind: "lit",  text: "函館山纜車上山看百萬夜景，20:15–21:00。末班上行 20:50、末班下行 21:00，到站約有 35 分緩衝；山頂約 40 分只看景拍照，20:00 後人潮已散比較好拍", url: "https://maps.google.com/?cid=4210433299778745223" },
        { time: "21:30", kind: "stay", text: "回 JR Inn 泡頂樓大眾湯" },
        { time: "",      kind: "warn", text: "冬季函館山登山車道封閉、登山巴士停駛，只能搭纜車。十字街站步行 10 分上坡，雪天穿防滑鞋" }
      ]
    },
    {
      n: 3, date: "12/02", weekday: "三",
      title: "取車北上 → 大沼 → 洞爺湖溫泉",
      transport: "自駕（08:30 函館駅前取車）",
      items: [
        { time: "08:30", kind: "move", text: "退房，Toyota 函館駅前店取車。核對雪胎、ETC 卡、NOC 免除" },
        { time: "09:30", kind: "see",  text: "大沼國定公園漫步駒岳火山湖景（車程 40 分）", url: "https://maps.google.com/?cid=15820387607317786445" },
        { time: "10:30", kind: "eat",  text: "沼之家大沼糰子" },
        { time: "11:00", kind: "move", text: "大沼公園 IC 上道央道，全程高速約 2 小時到洞爺湖" },
        { time: "13:00", kind: "eat",  text: "洞爺湖溫泉街午餐" },
        { time: "14:00", kind: "see",  text: "筒倉展望台鳥瞰雪湖全景（在湖西側，先繞這裡再往東到旅館最順）", url: "https://maps.google.com/?cid=17812005886361486743" },
        { time: "14:30", kind: "see",  text: "可選：昭和新山・有珠山纜車，離湖之栖約 10 分鐘車程" },
        { time: "15:00", kind: "stay", text: "入住 The Lake Suite 湖之栖，先泡一輪客室露天風呂" },
        { time: "16:45", kind: "lit",  text: "開車 5 分鐘回溫泉街，看 17:00 點亮的燈飾隧道（にぎわい広場，免費）與手湯足湯" },
        { time: "18:30", kind: "eat",  text: "回旅館一泊二食會席晚餐，這時候才開酒" },
        { time: "",      kind: "warn", text: "湖之栖在壯瞥町、離溫泉街約 2 公里，雪地走不到要開車。日本酒駕零容忍，飯後喝了酒就不能再出門，所以點燈排在晚餐前" }
      ]
    },
    {
      n: 4, date: "12/03", weekday: "四",
      title: "洞爺湖 → 富良野",
      transport: "自駕 約 250 公里、冬季 3.5～4 小時",
      items: [
        { time: "09:00", kind: "move", text: "出發。從壯瞥繞湖南岸到虻田洞爺湖 IC 比從溫泉街多 5–8 分鐘" },
        { time: "09:15", kind: "move", text: "道央道 → 千歲惠庭 JCT → 道東道 → 占冠 IC → 國道 237 北上，約 250 公里、冬季 3.5–4 小時" },
        { time: "13:30", kind: "eat",  text: "抵富良野，午餐在地咖哩歐姆蛋包飯" },
        { time: "14:30", kind: "see",  text: "富良野市街散策（果醬園、起司工房可視時間安排）" },
        { time: "15:30", kind: "stay", text: "入住 Nozo Hotel", url: "https://maps.google.com/?cid=15886981144007351211" },
        { time: "16:00", kind: "lit",  text: "散步到森林精靈露台看雪景點燈（富良野日落約 15:55）", url: "https://maps.google.com/?cid=12030230219665991724" },
        { time: "19:00", kind: "see",  text: "回飯店大眾湯與三溫暖" },
        { time: "",      kind: "warn", text: "若道東道因暴雪封閉，改走道央道經滝川轉國道 38，多繞約 50 公里、多 1 小時" }
      ]
    },
    {
      n: 5, date: "12/04", weekday: "五",
      title: "美瑛白天雪原，入夜連拍兩處點燈",
      transport: "自駕（富良野↔美瑛約 25 公里）",
      items: [
        { time: "09:00", kind: "see",  text: "美瑛冬日巡禮：Ken & Mary 之樹、七星之樹", url: "https://maps.google.com/?cid=17234676644265545203" },
        { time: "12:00", kind: "eat",  text: "美瑛市區午餐" },
        { time: "13:30", kind: "see",  text: "四季彩之丘廣袤雪原（冬季有雪上摩托車等活動）", url: "https://maps.google.com/?cid=12285817294432241726" },
        { time: "16:30", kind: "lit",  text: "白鬚瀑布點燈（藍水與冰柱）", url: "https://maps.google.com/?cid=5006450697926125092" },
        { time: "16:50", kind: "lit",  text: "車程 3 分鐘轉青池看夜間點燈（12 月點燈 16:30–21:00）", url: "https://maps.google.com/?cid=4218820616147695262" },
        { time: "19:00", kind: "stay", text: "返回 Nozo Hotel 連住第二晚" },
        { time: "",      kind: "warn", text: "12 月初青池已結冰覆雪，白天看不到藍色。點燈版才是冬季唯一正確的打開方式" }
      ]
    },
    {
      n: 6, date: "12/05", weekday: "六",
      title: "旭山動物園 → 札幌還車",
      transport: "自駕 ＋ 18:00 前札幌站前還車",
      items: [
        { time: "09:00", kind: "move", text: "退房出發，車程約 1 小時" },
        { time: "10:30", kind: "see",  text: "旭山動物園開園即入，待到 13:00。冬季 10:30–15:30、最終入園 15:00", url: "https://maps.google.com/?cid=14436577317726475219" },
        { time: "13:00", kind: "eat",  text: "旭川拉麵。拉麵村距園區 15 分但偏觀光；市區梅光軒本店或山頭火本店多 15 分車程", url: "https://maps.google.com/?cid=6890351368943780570" },
        { time: "14:30", kind: "move", text: "道央道約 2 小時回札幌市區" },
        { time: "18:00", kind: "move", text: "札幌車站前營業所還車（還車前先加滿油）" },
        { time: "18:30", kind: "stay", text: "入住由緣札幌", url: "https://maps.google.com/?cid=13589885233159034153" },
        { time: "19:00", kind: "eat",  text: "三大蟹吃到飽" },
        { time: "20:30", kind: "see",  text: "狸小路商店街採買藥妝（由緣步行 5 分）", url: "https://maps.google.com/?cid=4481098664188582049" },
        { time: "",      kind: "warn", text: "企鵝散步 12 月中下旬才開始（上一季 12/18），12/5 看不到。館內企鵝照常展示" },
        { time: "",      kind: "warn", text: "替代方案：改在旭川還車＋特急ライラック（1 小時 25 分）回札幌。異地還車費同為 ¥9,900，可換掉最危險的夜間雪地高速" }
      ]
    },
    {
      n: 7, date: "12/06", weekday: "日",
      title: "小樽一日遊",
      transport: "JR 快速 Airport 約 35 分",
      items: [
        { time: "09:30", kind: "move", text: "JR 札幌站搭快速 Airport 往小樽（35 分鐘）" },
        { time: "10:30", kind: "see",  text: "小樽運河、堺町通商店街、小樽音樂盒堂", url: "https://maps.google.com/?cid=4194098495000921810" },
        { time: "17:30", kind: "eat",  text: "小樽政壽司" },
        { time: "19:30", kind: "move", text: "搭 JR 返回札幌，回飯店泡湯" }
      ]
    },
    {
      n: 8, date: "12/07", weekday: "一",
      title: "白色戀人 → 北海道神宮 → 白色燈樹節",
      transport: "地下鐵＋步行",
      items: [
        { time: "10:00", kind: "see",  text: "搭地下鐵前往白色戀人公園", url: "https://maps.google.com/?cid=16027967817452601745" },
        { time: "13:30", kind: "see",  text: "參拜雪中的北海道神宮", url: "https://maps.google.com/?cid=16729227658742878216" },
        { time: "15:00", kind: "see",  text: "札幌車站商圈最後大採購。伴手禮今天買齊，Day 9 機場只補貨" },
        { time: "18:00", kind: "eat",  text: "串燒居酒屋或蟹料理（羊肉已在 Day 2 大黑屋吃過，避免重複）" },
        { time: "19:30", kind: "lit",  text: "大通公園白色燈樹節＋慕尼黑聖誕市集（往年 11/21–12/25）", url: "https://maps.google.com/?cid=12368908611183141182" },
        { time: "21:00", kind: "stay", text: "回房整理行李" }
      ]
    },
    {
      n: 9, date: "12/08", weekday: "二",
      title: "平安返家",
      transport: "JR 快速 Airport 約 37 分",
      items: [
        { time: "06:30", kind: "eat",  text: "由緣札幌早餐 6:30 開始，來得及吃完再走" },
        { time: "07:45", kind: "move", text: "退房，步行或計程車至 JR 札幌站" },
        { time: "08:30", kind: "move", text: "搭快速 Airport（37 分）。想多睡半小時搭 08:45 那班也來得及" },
        { time: "09:10", kind: "move", text: "抵達機場掛行李。長榮櫃檯 11:10 截止" },
        { time: "09:40", kind: "eat",  text: "機場限定伴手禮（網友推）：札幌農學校起司蛋糕、美瑛選果玉米麵包。玉米麵包數量有限常早早賣完，掛完行李先衝這兩樣再逛其他" },
        { time: "12:10", kind: "move", text: "BR165 起飛，桃園 16:05 落地" }
      ]
    }
  ],

  stays: [
    { name: "JR Inn Hakodate", checkin: "11/30", checkout: "12/02", nights: 2, price: 4263,
      area: "函館站本體連通，下樓即達朝市", note: "", url: "https://maps.google.com/?cid=7468249822368411182" },
    { name: "The Lake Suite 湖之栖", checkin: "12/02", checkout: "12/03", nights: 1, price: 12844,
      area: "壯瞥町湖東南岸，全室客室露天風呂",
      note: "不在溫泉街主街，離にぎわい広場約 2 公里要開車；餐食方案待確認" },
    { name: "Nozo Hotel", checkin: "12/03", checkout: "12/05", nights: 2, price: 8160,
      area: "富良野精品飯店，附大眾湯與三溫暖", note: "", url: "https://maps.google.com/?cid=15886981144007351211" },
    { name: "ONSEN RYOKAN Yuen Sapporo", checkin: "12/05", checkout: "12/08", nights: 3, price: 20381,
      area: "大通公園旁，登別直送溫泉", note: "", url: "https://maps.google.com/?cid=13589885233159034153" }
  ],

  todos: [
    { cat: "證件與租車", text: "Hanna 先到監理站申請補發駕照（台灣駕照遺失）。要先有駕照正本才能辦日文譯本，這項排在最前面", done: false },
    { cat: "證件與租車", text: "台灣駕照日文譯本（監理站 NT$100，國際駕照在日本無效）", done: false },
    { cat: "證件與租車", text: "租車加保 NOC 免除（雪地必備）", done: false },
    { cat: "證件與租車", text: "決定還車據點：札幌 or 旭川（訂車時就要指定）", done: false },
    { cat: "證件與租車", text: "確認雪胎、ETC 卡、HEP 4 日版（普通車 ¥7,700）", done: false },
    { cat: "交通票券",   text: "辦好えきねっと帳號（紙本折扣票已全廢）", done: false },
    { cat: "交通票券",   text: "10/30 10:00 開賣：劃 Day 1 北斗指定席，買可變更票種", done: false },
    { cat: "交通票券",   text: "Day 2 函館市電・巴士共通一日券（約 ¥1,000，現場買）", done: false },
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
