(function(){"use strict";var e={8452:function(e,t,n){var r=n(9242),o=n(3396);function u(e,t){const n=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(n,{to:"/simple_sub_quests_maker"},{default:(0,o.w5)((()=>[(0,o.Uk)("home")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(n,{to:"/simple_sub_quests_maker/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("about")])),_:1})]),(0,o.Wm)(r)],64)}var a=n(89);const s={},i=(0,a.Z)(s,[["render",u]]);var c=i,d=n(2483);const f=e=>((0,o.dD)("data-v-2fedbd5e"),e=e(),(0,o.Cn)(),e),l={class:"home"},m={class:"container"},p=f((()=>(0,o._)("div",{class:"title"},[(0,o.Uk)("サブクエストを"),(0,o._)("br"),(0,o.Uk)("生成しますか？")],-1))),v={class:"main"};function b(e,t,n,r,u,a){const s=(0,o.up)("CreateSubQuests");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",m,[p,(0,o._)("div",v,[(0,o.Wm)(s,{msg:"生成"})])])])}var h=n(7139);const g=e=>((0,o.dD)("data-v-04347b92"),e=e(),(0,o.Cn)(),e),_=["onClick"],k=g((()=>(0,o._)("svg",null,[(0,o._)("rect",{x:"2",y:"2",rx:"0",fill:"none",width:"200",height:"50"})],-1)));function y(e,t,n,r,u,a){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(s,{to:{name:"/simple_sub_quests_maker/subquest",params:{id:Math.floor(219*Math.random())}}},{default:(0,o.w5)((({navigate:e})=>[(0,o._)("button",{onClick:e,role:"link"},[k,(0,o._)("span",null,(0,h.zw)(n.msg),1)],8,_)])),_:1},8,["to"])}var w={name:"CreateSubQuests",props:{msg:String}};const q=(0,a.Z)(w,[["render",y],["__scopeId","data-v-04347b92"]]);var C=q,S={name:"HomeView",components:{CreateSubQuests:C}};const O=(0,a.Z)(S,[["render",b],["__scopeId","data-v-2fedbd5e"]]);var j=O;const E={class:"home"},Q={class:"container"};function A(e,t,n,r,u,a){const s=(0,o.up)("QuestBoard"),i=(0,o.up)("CreateSubQuests");return(0,o.wg)(),(0,o.iD)("div",E,[(0,o._)("div",Q,[(0,o.Wm)(s,{quest:u.quests[e.$route.params.id]},null,8,["quest"]),(0,o.Wm)(i,{msg:"再生成",id:u.quests[e.$route.params.id]},null,8,["id"])])])}const D=e=>((0,o.dD)("data-v-75df3233"),e=e(),(0,o.Cn)(),e),N={class:"board"},T=D((()=>(0,o._)("span",{class:"und"},"Quest",-1))),x={class:"quest"};function P(e,t,n,r,u,a){return(0,o.wg)(),(0,o.iD)("div",N,[T,(0,o._)("div",x,(0,h.zw)(n.quest),1)])}var B={name:"QuestBoard",props:{quest:String}};const U=(0,a.Z)(B,[["render",P],["__scopeId","data-v-75df3233"]]);var W=U,I=JSON.parse('{"1":"自己満足でダジャレを考える","2":"リンゴやバナナなどの果物の皮で遊ぶ","3":"ひたすら歌詞を書き続ける","4":"ひたすらお絵かきをする","5":"自分でドラマや映画の脚本を考える","6":"自分で作ったリズムを鳴らして遊ぶ","7":"逆立ちや手立てで遊ぶ","8":"ボトルフリップをする","9":"ジャグリングを練習する","10":"虫を探して観察する","11":"息を吸って音を出して遊ぶ","12":"タオルを使ったアートを作る","13":"おもちゃで遊ぶ","14":"わざと素人風の動画を撮って遊ぶ","15":"息を合わせて大合唱する","16":"自分の手を鏡で見て変な角度で動かして遊ぶ","17":"空を見上げて想像する","18":"何かの形をした影を追いかけて遊ぶ","19":"意味のない挑戦をする（例えば、タオルを100回回転させる）","20":"無人島に持っていく5つの物を考える","21":"タップダンスやバレエを練習する","22":"全身でハミングをする","23":"トランプを手裏剣のように投げて遊ぶ","24":"コーラを空ける時の音を鳴らして遊ぶ","25":"自分だけの手拍子を考える","26":"空き缶やペットボトルを蹴りあってサッカーをする","27":"電車の中で自分の隣に誰かを座らせないようにする","28":"適当なものを使ってパントマイムをする","29":"部屋中を走り回って息を切らす","30":"腕時計の秒針を追いかける","31":"ひたすらペンを回す","32":"飛び石を投げて遊ぶ","33":"ものまねをする","34":"スプーンとフォークでリズムを取る","35":"何もない空間でゆっくりと変なポーズを取る","36":"朝起きたら、自分が思い付いた言葉を口に出す","37":"ペットボトルを踏んでビニール袋を膨らませる","38":"タオルを丸めて投げてキャッチする","39":"体に合わせてぬいぐるみを動かして遊ぶ","40":"トイレットペーパー芯をつかって、カメラのレンズを作る","41":"ゴムを指ではじく","42":"自分の髪の毛を刈る","43":"ゴムを伸ばして縮める","44":"ものごとの重心を見つける","45":"音符を想像する","46":"植物に話しかける","47":"適当なものを集めて彫刻を作る","48":"キャップをひっくり返して投げる","49":"ペットボトルに水を入れて音を鳴らす","50":"砂をあつめて砂城を作る","51":"ゴムで作った飛行機を飛ばす","52":"動物の真似をする","53":"ボトルキャップを入れてお茶碗を作る","54":"適当に動物の形を作る","55":"外の風景を眺めて、形を想像する","56":"道端の草花を一つずつ観察する","57":"知らない人に挨拶する","58":"天気が良い日に、クレーンゲームをプレイする","59":"ゲームセンターで、長時間同じゲームをプレイする","60":"スーパーで全ての食品の原材料を読む","61":"オンラインショッピングで、価格が最も安い商品を探す","62":"古い日記や手紙を読み返す","63":"テレビ番組の中で、不快なキャラクターに対して憤慨する","64":"カフェで一人で座り、人を観察する","65":"都内の全ての駅に一度は乗ってみる","66":"美容室で普段とは違う髪型にする","67":"カラオケで、自分には歌えない曲に挑戦する","68":"新聞や雑誌の中で、興味のない記事を読んでみる","69":"一人で映画館に行って、好きな映画を鑑賞する","70":"恋愛小説を読んで、泣くことを目的にする","71":"公園のベンチに座って、鳥たちの鳴き声を聞きながらくつろぐ","72":"自宅で一日中布団に入っている","73":"無人島に何か一つ持っていくとしたら、何を持っていくかを考える","74":"コンビニエンスストアで、普段買わない食品を購入してみる","75":"街中で、自分に合った香水を探す","76":"大量の風船を使って部屋を飾る","77":"ホームセンターで、珍しい道具を買ってしまう","78":"マクドナルドで、全てのハンバーガーを一度に食べる","79":"虫眼鏡で家の周りの植物を観察する","80":"ガチャガチャを回し続けて、同じ景品を何個も手に入れる","81":"タクシーに乗り、知らない街をぐるぐる回る","82":"大声で歌いながら自転車を漕ぐ","83":"テレビ番組で、自分が全く興味のないジャンルの番組を観る","84":"マッサージチェアで、一日中座り続ける","85":"全てのラーメンチェーン店のラーメンを食べ比べる","86":"家の中を掃除して、必要のないものを捨てる","87":"インターネットで、世界各国の不思議な伝説を調べる","88":"インターネットで、遠くの国のグルメを注文する","89":"全国の温泉を巡り、一番好きな温泉を見つける","90":"市場で、新鮮な食材を見て楽しむ","91":"友人と一緒に、好きな映画のキャラクターのコスプレをする","92":"パチンコ店に入り、全ての台を試す","93":"毎日の天気予報を見ながら、晴れた日には必ず外出する","94":"自分で料理を作り、思い切り試食する","95":"自分の好きな動物を観察し、その生態について調べる","96":"自分の手作りのクラフト作品を作る","97":"オンラインで、知らない人とチャットをする","98":"ブランコに揺られて、思いっきり空を見上げる","99":"音楽を聴きながら、自分だけの振り付けを考える","100":"一日中、絵を描き続ける","101":"オークションで、意外なものを入札してしまう","102":"キャンプをして、星空を観察する","103":"映画館で、自分だけの特別上映を開催する","104":"古本屋で、まったく知らない作家の本を買って読む","105":"車で、目的もなくドライブする","106":"家の中をぐるりと回って、自分だけの趣味部屋を作る","107":"テレビで、完全に興味のない番組を見る","108":"ゲームセンターで、自分が得意なゲームをプレイし続ける","109":"コンビニで、全てのお菓子を試す","110":"全ての都道府県の名物料理を食べ比べる","111":"音楽を聴きながら、自分だけの歌詞を考える","112":"森や公園を散策して、自然を楽しむ","113":"自分で服を作って、おしゃれを楽しむ","114":"ゲームや漫画のコスプレをする","115":"釣りをして、大物を釣り上げる","116":"絵を描いたり、詩を書いたりして、自分だけの作品を作る","117":"窓の外を見て、人々の行動を観察する","118":"花火を見に行く","119":"家の中で、自分だけの小さなお祭りを開催する","120":"空を見上げて、雲の形を探す","121":"絵本を読んで、子どもの頃を思い出す","122":"ペットと遊び続ける","123":"靴下や手袋を自分で編んでみる","124":"パズルを完成させる","125":"自分で花束を作って、贈り物をする","126":"自分で美味しいお酒を作ってみる","127":"自分だけの写真集を作る","128":"雑貨屋さんで、気になるものを見つけて買う","129":"マッサージチェアで、一日中リラックスする","130":"水族館に行って、海の生き物を観察する","131":"楽器を弾いて、自分だけの曲を作ってみる","132":"ショッピングモールで、全てのお店を回ってみる","133":"動物園に行って、かわいい動物たちを見る","134":"ビーチで、自分だけの砂の城を作る","135":"ビデオを借りて、一日中映画を観る","136":"音楽フェスに行って、好きな音楽を楽しむ","137":"美術館や博物館に行って、自分だけの感想を書き留める","138":"釣りをして、静かな時間を過ごす","139":"公園でピクニックをして、昼寝をする","140":"岩場で、自分だけの石の積み重ねを作る","141":"夜景スポットに行って、ロマンチックな時間を過ごす","142":"屋外のジムで、体を鍛える","143":"テントを張って、星空の下でキャンプをする","144":"自転車で街を走り回る","145":"朝日を見に山に登る","146":"農場に行って、新鮮な野菜や果物を収穫する","147":"パークゴルフをして、リラックスする","148":"ゴーカートに乗って、速さを感じる","149":"ウォータースライダーで、スピード感を味わう","150":"キャッチボールをして、友達と遊ぶ","151":"スケートボードをして、技を磨く","152":"雪の降る中、雪だるまを作る","153":"湖で、カヌーに乗って自然と向き合う","154":"砂漠に行って、砂丘を登る","155":"サーフィンに挑戦する","156":"山奥に行って、自分だけの秘密の場所を見つける","157":"花畑に行って、かわいい写真を撮る","158":"夕日を見に海に行く","159":"パラグライダーに乗って、空を飛ぶ","160":"噴水で水しぶきを浴びる","161":"風の強い日に凧揚げをする","162":"芝生で寝転がって、雲を眺める","163":"河原で石を拾って積み上げる","164":"森の中で木登りをする","165":"鉄道博物館で蒸気機関車に触れる","166":"野球場でバッティングセンターを体験する","167":"パワーストーンを探して、自分に合ったものを見つける","168":"空手道場で空手を習う","169":"山菜を採りに山に登る","170":"道端で拾った小石に絵を描く","171":"古本屋で珍しい本を探す","172":"インターネットで日本の古いアニメを見る","173":"隣町まで徒歩で行って、帰りにタクシーで帰る","174":"古い洋服屋でレトロな服を買う","175":"駅前の屋台でたこ焼きを食べる","176":"大学の校舎で勉強する","177":"川で水遊びをする","178":"お寺で座禅を組む","179":"カラオケボックスで好きな曲を歌う","180":"レーザーゲームで友達と対決する","181":"駅で降りる前に、乗り込んでいた車両番号を確認する","182":"トイレットペーパーの芯を集めて、リサイクルに出す","183":"道端に落ちている石を集めて、自分だけのコレクションを作る","184":"タイムセールで値引きされたものを、本来必要でないのに買ってしまう","185":"バスの中で隣に座った人が何かを落としたら、拾って渡す","186":"スマートフォンのディスプレイを拭いて、指紋を取り除く","187":"一度も使わないペンをたくさん集めて、綺麗に並べる","188":"雨の日に窓から外を見て、水滴が流れる様子を観察する","189":"壁に貼られたポスターを眺めて、どこかに行きたくなる","190":"テレビ番組で紹介されたグルメを自分で再現してみる","191":"ウィンドウショッピングで、本当に買わなくても良いものを手に取ってみる","192":"雑誌の付録に付いていた小さなグッズを集めて、収納ボックスにしまう","193":"買い物に行った時に、自分の名前の入った商品を探す","194":"ショートケーキの上のいちごを食べて、残りを別の日に食べる","195":"机の上の文房具を整理して、キレイにする","196":"駅のホームで、遠くの方向から近づいてくる電車を眺める","197":"電子レンジで温める前に、冷たいままの食べ物を試食する","198":"誕生日になると、何もしていないのに自分でおめでとうと言う","199":"1分間立ち尽くす","200":"ものまねをする","201":"風を追いかける","202":"空を眺める","203":"木の葉を拾う","204":"地面に寝そべる","205":"野生の花を探す","206":"手作りのお守りを作る","207":"マントを着て走る","208":"わざと迷子になる","209":"星座を探す","210":"太陽の方向を当てる","211":"時間を見ることなく歩く","212":"ラップを自作する","213":"飛行機雲を見つける","214":"歌を歌う","215":"靴を脱いで歩く","216":"パンを捨てる","217":"スプーンで地面を掘る","218":"五感を使って感じるものを探す"}'),L={name:"SubQuest",components:{CreateSubQuests:C,QuestBoard:W},data(){return{quests:I}}};const M=(0,a.Z)(L,[["render",A],["__scopeId","data-v-1f4b48f6"]]);var Z=M;const F=[{path:"/",redirect:"/simple_sub_quests_maker"},{path:"/simple_sub_quests_maker",name:"home",component:j},{path:"/simple_sub_quests_maker/subquest/:id",props:!0,name:"subquest",component:Z},{path:"/simple_sub_quests_maker/about",name:"about",component:()=>n.e(443).then(n.bind(n,6504))}],H=(0,d.p7)({history:(0,d.PO)(""),routes:F});var z=H;(0,r.ri)(c).use(z).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,u){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],u=e[d][2];for(var s=!0,i=0;i<r.length;i++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(s=!1,u<a&&(a=u));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}u=u||0;for(var d=e.length;d>0&&e[d-1][2]>u;d--)e[d]=e[d-1];e[d]=[r,o,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.fd39c2fc.js"}}(),function(){n.miniCssF=function(e){return"css/about.daa6c70e.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="questmaker:";n.l=function(r,o,u,a){if(e[r])e[r].push(o);else{var s,i;if(void 0!==u)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var f=c[d];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+u){s=f;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+u),s.src=r),e[r]=[o];var l=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),i&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css";var a=function(n){if(u.onerror=u.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=a,i.request=s,u.parentNode.removeChild(u),o(i)}};return u.onerror=u.onload=a,u.href=t,n?n.parentNode.insertBefore(u,n.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],u=o.getAttribute("data-href");if(u===e||u===t)return o}},r=function(r){return new Promise((function(o,u){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,null,o,u)}))},o={143:0};n.f.miniCss=function(e,t){var n={443:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=u);var a=n.p+n.u(t),s=new Error,i=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+u+": "+a+")",s.name="ChunkLoadError",s.type=u,s.request=a,o[1](s)}};n.l(a,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,a=r[0],s=r[1],i=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(i)var d=i(n)}for(t&&t(r);c<a.length;c++)u=a[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(d)},r=self["webpackChunkquestmaker"]=self["webpackChunkquestmaker"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8452)}));r=n.O(r)})();
//# sourceMappingURL=app.bc6bffbe.js.map