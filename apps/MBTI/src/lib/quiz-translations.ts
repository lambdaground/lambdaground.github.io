import { Language } from './i18n';
import { ScenarioQuestion } from './mbti-data';

interface QuestionTranslation {
  scenario: string;
  situation?: string;
  optionA: string;
  optionB: string;
  optionC: string;
}

type QuestionTranslations = Record<number, QuestionTranslation>;
type LanguageQuestionTranslations = Record<Language, QuestionTranslations>;

const elementaryTranslations: LanguageQuestionTranslations = {
  ko: {},
  en: {
    1: {
      scenario: "You're at an amusement park! What do you want to do?",
      situation: "At the exciting amusement park entrance",
      optionA: "Walk around with lots of friends!",
      optionB: "Slowly explore with one or two close friends",
      optionC: "Go where I want to go by myself"
    },
    2: {
      scenario: "You got a new desk partner at school!",
      situation: "First day after changing seats",
      optionA: "I talk to them first and become friends",
      optionB: "I'm friendly when they talk to me",
      optionC: "I quietly watch and slowly become friends"
    },
    3: {
      scenario: "There's a magic picture book. Which one do you pick?",
      situation: "At the magic library",
      optionA: "A fantasy story with dragons and wizards",
      optionB: "A fun animal encyclopedia",
      optionC: "A real explorer's adventure story"
    },
    4: {
      scenario: "You're going to build something with Lego!",
      situation: "Lego play time",
      optionA: "Build exactly according to the instructions",
      optionB: "Follow instructions but change things a little",
      optionC: "Build whatever I imagine freely"
    },
    5: {
      scenario: "Your friend is crying. What do you do?",
      situation: "Your friend looks sad during break time",
      optionA: "Sit next to them and feel sad together",
      optionB: "Ask what's wrong and listen to them",
      optionC: "Tell the teacher or find a solution"
    },
    6: {
      scenario: "There's a class president election. Who do you vote for?",
      situation: "Class president voting time",
      optionA: "Vote for a close friend I like",
      optionB: "Think about many things if I'm not sure",
      optionC: "Vote for someone who will do the job well"
    },
    7: {
      scenario: "There's a field trip tomorrow! How do you prepare?",
      situation: "The night before the field trip",
      optionA: "Pack everything in my bag ahead of time",
      optionB: "Pack important things and finish in the morning",
      optionC: "Pack when I wake up in the morning"
    },
    8: {
      scenario: "You have vacation homework!",
      situation: "First day of vacation",
      optionA: "Finish it as soon as vacation starts",
      optionB: "Do a little bit at a time",
      optionC: "Do it before vacation ends"
    },
    9: {
      scenario: "You're having a birthday party!",
      situation: "On my birthday",
      optionA: "Invite lots of friends for a big party!",
      optionB: "Have fun with a good number of friends!",
      optionC: "Quietly celebrate with just a few best friends!"
    },
    10: {
      scenario: "You're playing a treasure hunt game!",
      situation: "Treasure hunt start",
      optionA: "Follow the hints step by step",
      optionB: "Look at hints and also use my intuition",
      optionC: "Trust my instinct to find where the treasure might be"
    },
    11: {
      scenario: "You lost a game against your friend!",
      situation: "After the game",
      optionA: "Analyze and promise to win next time",
      optionB: "It's a bit disappointing but it was fun",
      optionC: "I'm so upset I want to play again"
    },
    12: {
      scenario: "The plan suddenly changed!",
      situation: "It's raining when we were supposed to go out",
      optionA: "Making a new plan is also fun",
      optionB: "A bit disappointing but let's do something else",
      optionC: "I'm upset because the plan changed"
    },
    13: {
      scenario: "It's your turn to present!",
      situation: "Presenting in front of classmates",
      optionA: "Exciting! I get to share my story!",
      optionB: "I'm nervous but I can do it",
      optionC: "I'm so nervous it's hard"
    },
    14: {
      scenario: "What kind of person do you want to be in the future?",
      situation: "When imagining your dream",
      optionA: "Something special like a wizard or astronaut!",
      optionB: "Anything that's fun!",
      optionC: "Something helpful like a teacher or doctor!"
    },
    15: {
      scenario: "Your friend made a mistake!",
      situation: "Your friend fell and spilled water",
      optionA: "First ask if they're okay",
      optionB: "Suggest cleaning up together",
      optionC: "Quickly get some tissues"
    },
    16: {
      scenario: "You're decorating your room!",
      situation: "Room organizing time",
      optionA: "Everything in its place, neat and tidy!",
      optionB: "Organize roughly and keep it comfortable!",
      optionC: "Decorate freely in my own style!"
    }
  },
  ja: {
    1: {
      scenario: "遊園地に来たよ！どうしたい？",
      situation: "ワクワクする遊園地の入り口で",
      optionA: "たくさんの友達と一緒に回る！",
      optionB: "仲の良い友達1～2人とゆっくり見て回る",
      optionC: "一人で行きたいところを決めて行く"
    },
    2: {
      scenario: "学校で新しい席の隣の人ができた！",
      situation: "席替え後の初日",
      optionA: "自分から話しかけて仲良くなる",
      optionB: "相手が話しかけてきたら仲良くする",
      optionC: "静かに様子を見てゆっくり仲良くなる"
    },
    3: {
      scenario: "魔法の絵本がある。どんな本を選ぶ？",
      situation: "魔法の図書館で",
      optionA: "ドラゴンと魔法使いが出てくるファンタジー物語",
      optionB: "面白い動物百科事典",
      optionC: "本物の探検家の冒険物語"
    },
    4: {
      scenario: "レゴで何かを作ろう！",
      situation: "レゴ遊びの時間",
      optionA: "説明書通りに正確に作る",
      optionB: "説明書を見ながら少しずつ変える",
      optionC: "想像するままに自由に作る"
    },
    5: {
      scenario: "友達が泣いている。どうする？",
      situation: "休み時間に友達が悲しそう",
      optionA: "隣に座って一緒に悲しむ",
      optionB: "何があったか聞いて話を聞く",
      optionC: "先生に言うか解決方法を探す"
    },
    6: {
      scenario: "学級委員の選挙がある。誰に投票する？",
      situation: "学級委員投票の時間",
      optionA: "仲が良くて好きな友達に投票する",
      optionB: "分からなければいろいろ考えてみる",
      optionC: "学級委員の仕事をうまくやれそうな友達に投票する"
    },
    7: {
      scenario: "明日は遠足！どう準備する？",
      situation: "遠足の前夜",
      optionA: "前もってカバンに全部入れておく",
      optionB: "大事なものだけ入れて朝に仕上げる",
      optionC: "朝起きてから準備する"
    },
    8: {
      scenario: "夏休みの宿題がある！",
      situation: "夏休み初日",
      optionA: "夏休みが始まったらすぐ終わらせる",
      optionB: "少しずつ分けてやる",
      optionC: "夏休みが終わる前にやる"
    },
    9: {
      scenario: "誕生日パーティーを開く！",
      situation: "自分の誕生日",
      optionA: "たくさんの友達を招待してにぎやかに！",
      optionB: "ちょうどいい人数の友達と楽しく！",
      optionC: "一番仲の良い友達数人と静かに！"
    },
    10: {
      scenario: "宝探しゲームをする！",
      situation: "宝探しスタート",
      optionA: "ヒントを順番に追っていく",
      optionB: "ヒントも見て勘も使う",
      optionC: "直感で宝がありそうな場所を探す"
    },
    11: {
      scenario: "友達とのゲームで負けた！",
      situation: "ゲームが終わった後",
      optionA: "分析して次は勝つと決意する",
      optionB: "残念だけど楽しかった",
      optionC: "すごく悔しくてもう一度やりたい"
    },
    12: {
      scenario: "急に予定が変わった！",
      situation: "遊びに行く予定だったのに雨が降っている",
      optionA: "新しい計画を立てるのも楽しい",
      optionB: "ちょっと残念だけど他のことをする",
      optionC: "約束が変わって悲しい"
    },
    13: {
      scenario: "発表の順番が来た！",
      situation: "クラスメートの前で発表",
      optionA: "ワクワク！自分の話を聞いてもらえる！",
      optionB: "緊張するけどやってみられる",
      optionC: "すごく緊張して大変"
    },
    14: {
      scenario: "将来どんな人になりたい？",
      situation: "夢を想像する時",
      optionA: "魔法使いや宇宙飛行士みたいな特別な仕事！",
      optionB: "楽しければ何でもいい！",
      optionC: "先生や医者みたいな人の役に立つ仕事！"
    },
    15: {
      scenario: "友達が失敗した！",
      situation: "友達が転んで水をこぼした",
      optionA: "まず大丈夫か聞く",
      optionB: "一緒に片付けようと言う",
      optionC: "すぐにティッシュを持ってくる"
    },
    16: {
      scenario: "自分の部屋を飾る！",
      situation: "部屋の片付けの時間",
      optionA: "全部の物の場所を決めてきれいに！",
      optionB: "だいたい片付けて快適に！",
      optionC: "自分のスタイルで自由に！"
    }
  },
  zh: {
    1: {
      scenario: "来游乐园了！你想怎么做？",
      situation: "在激动人心的游乐园入口",
      optionA: "和很多朋友一起逛！",
      optionB: "和一两个好朋友慢慢看",
      optionC: "自己决定想去的地方"
    },
    2: {
      scenario: "学校里有了新同桌！",
      situation: "换座位后的第一天",
      optionA: "我先主动打招呼交朋友",
      optionB: "对方说话时我也友好相处",
      optionC: "安静观察慢慢交朋友"
    },
    3: {
      scenario: "有一本魔法图画书。你选哪本？",
      situation: "在魔法图书馆",
      optionA: "有龙和魔法师的奇幻故事",
      optionB: "有趣的动物百科全书",
      optionC: "真正探险家的冒险故事"
    },
    4: {
      scenario: "要用乐高做东西！",
      situation: "乐高游戏时间",
      optionA: "严格按照说明书做",
      optionB: "看说明书但稍微改动",
      optionC: "随心所欲地创造"
    },
    5: {
      scenario: "朋友在哭。你怎么做？",
      situation: "休息时间朋友看起来很伤心",
      optionA: "坐在旁边陪着一起难过",
      optionB: "问发生了什么事并倾听",
      optionC: "告诉老师或找解决办法"
    },
    6: {
      scenario: "有班长选举。你投票给谁？",
      situation: "班长投票时间",
      optionA: "投给关系好喜欢的朋友",
      optionB: "不确定的话多考虑几方面",
      optionC: "投给能把班长工作做好的朋友"
    },
    7: {
      scenario: "明天要去郊游！怎么准备？",
      situation: "郊游前一晚",
      optionA: "提前把东西都装好",
      optionB: "装好重要的东西早上再整理",
      optionC: "早上起来再收拾"
    },
    8: {
      scenario: "有假期作业！",
      situation: "假期第一天",
      optionA: "假期一开始就做完",
      optionB: "分成小部分慢慢做",
      optionC: "假期结束前做"
    },
    9: {
      scenario: "要办生日派对！",
      situation: "我的生日",
      optionA: "邀请很多朋友热闹地庆祝！",
      optionB: "和适量的朋友开心玩！",
      optionC: "和几个最好的朋友安静庆祝！"
    },
    10: {
      scenario: "玩寻宝游戏！",
      situation: "寻宝开始",
      optionA: "一步一步跟着线索走",
      optionB: "看线索也用直觉",
      optionC: "凭直觉找可能有宝藏的地方"
    },
    11: {
      scenario: "和朋友玩游戏输了！",
      situation: "游戏结束后",
      optionA: "分析一下决心下次赢",
      optionB: "有点可惜但很开心",
      optionC: "太难过了想再玩一次"
    },
    12: {
      scenario: "计划突然变了！",
      situation: "本来要出去玩但下雨了",
      optionA: "制定新计划也很有趣",
      optionB: "有点可惜但做别的事",
      optionC: "约定变了很难过"
    },
    13: {
      scenario: "轮到你发言了！",
      situation: "在同学面前发表",
      optionA: "很兴奋！可以分享我的故事！",
      optionB: "紧张但能做到",
      optionC: "太紧张很困难"
    },
    14: {
      scenario: "将来想成为什么样的人？",
      situation: "想象梦想的时候",
      optionA: "像魔法师或宇航员那样特别的工作！",
      optionB: "只要有趣什么都好！",
      optionC: "像老师或医生那样能帮助人的工作！"
    },
    15: {
      scenario: "朋友出了差错！",
      situation: "朋友摔倒洒了水",
      optionA: "先问没事吧",
      optionB: "说一起收拾吧",
      optionC: "赶快拿纸巾来"
    },
    16: {
      scenario: "装饰自己的房间！",
      situation: "整理房间的时间",
      optionA: "所有东西都有固定位置整整齐齐！",
      optionB: "大概整理一下舒服就好！",
      optionC: "按自己的风格自由装饰！"
    }
  }
};

const middleTranslations: LanguageQuestionTranslations = {
  ko: {},
  en: {
    1: {
      scenario: "You suddenly have free time on the weekend!",
      situation: "Saturday afternoon with nothing to do",
      optionA: "Contact friends and decide what to do",
      optionB: "Decide based on my mood",
      optionC: "Stay home and do something I like"
    },
    2: {
      scenario: "First day of new semester, everyone's a stranger!",
      situation: "When entering the classroom",
      optionA: "Say hi to the person next to me first",
      optionB: "Be friendly when someone talks to me",
      optionC: "Quietly sit and observe the situation"
    },
    3: {
      scenario: "The group chat is very active!",
      situation: "Friends are chatting",
      optionA: "Actively participate in the conversation",
      optionB: "Just react occasionally",
      optionC: "Just read and only reply when needed"
    },
    4: {
      scenario: "You need to pick a movie!",
      situation: "Watching Netflix with friends",
      optionA: "Sci-fi or fantasy in an imaginary world",
      optionB: "Any genre as long as it's fun",
      optionC: "Based on true story or realistic plot"
    },
    5: {
      scenario: "You have to study for exams!",
      situation: "One week before exams",
      optionA: "Memorize textbook content thoroughly",
      optionB: "Focus on summarizing important parts",
      optionC: "Understand the overall flow and connections"
    },
    6: {
      scenario: "You're thinking about your future career!",
      situation: "When worrying about the future",
      optionA: "I want a stable and certain job",
      optionB: "I'm not sure yet",
      optionC: "I'm drawn to new and creative fields"
    },
    7: {
      scenario: "A friend is upset about something!",
      situation: "A friend shared their concerns",
      optionA: "Find solutions together",
      optionB: "Listen and empathize",
      optionC: "Feel sad together and comfort them"
    },
    8: {
      scenario: "Opinions differ in group project!",
      situation: "Team members have different opinions",
      optionA: "Persuade with the most logical approach",
      optionB: "Listen to everyone and compromise",
      optionC: "Mediate so the mood doesn't get bad"
    },
    9: {
      scenario: "Your score was lower than expected!",
      situation: "When receiving test results",
      optionA: "Analyze why I got it wrong and do better next time",
      optionB: "Disappointed but I'll do better next time",
      optionC: "Feel upset and depressed"
    },
    10: {
      scenario: "Project deadline is approaching!",
      situation: "3 days before submission",
      optionA: "I've already almost finished",
      optionB: "Starting to work on it seriously now",
      optionC: "Will focus and do it the day before deadline"
    },
    11: {
      scenario: "Planning for vacation!",
      situation: "Before vacation starts",
      optionA: "Make a to-do list and schedule",
      optionB: "Just have a rough plan",
      optionC: "Do whatever I feel like at the moment"
    },
    12: {
      scenario: "An appointment was suddenly cancelled!",
      situation: "A friend suddenly can't meet",
      optionA: "Even better! I can do something else",
      optionB: "Disappointed but it's okay",
      optionC: "Was looking forward to it, kind of annoyed"
    },
    13: {
      scenario: "I need energy!",
      situation: "At the end of a tiring day",
      optionA: "Meeting friends and chatting recharges me",
      optionB: "Depends on the situation",
      optionC: "Resting quietly alone recharges me"
    },
    14: {
      scenario: "Starting a new hobby!",
      situation: "When looking for something interesting",
      optionA: "Learn something practical and helpful",
      optionB: "Try it if it looks fun",
      optionC: "Drawn to unique and creative things"
    },
    15: {
      scenario: "A friend broke a promise!",
      situation: "Waited but friend didn't show up",
      optionA: "I'm angry but ask why",
      optionB: "Tell them not to do this again",
      optionC: "Worried if something happened"
    },
    16: {
      scenario: "My desk is...",
      situation: "Usual desk condition",
      optionA: "Always neatly organized",
      optionB: "Organize occasionally while using",
      optionC: "My own style that only I understand"
    },
    17: {
      scenario: "What's more fun to talk about?",
      situation: "When chatting with friends",
      optionA: "Ideas and imagination about the future",
      optionB: "Various topics are all good",
      optionC: "Real experiences and events"
    },
    18: {
      scenario: "I got praised!",
      situation: "The teacher praised me",
      optionA: "Proud and want to do even better",
      optionB: "Feel good",
      optionC: "Awkward and embarrassed"
    },
    19: {
      scenario: "I need to make a decision!",
      situation: "Important choice moment",
      optionA: "Decide quickly and take action",
      optionB: "Think appropriately and decide",
      optionC: "Keep options open and decide slowly"
    },
    20: {
      scenario: "Presenting in class!",
      situation: "Teacher is looking for a presenter",
      optionA: "Raise my hand and present",
      optionB: "Do it if asked",
      optionC: "Prefer not to if possible"
    }
  },
  ja: {
    1: {
      scenario: "週末に急に自由時間ができた！",
      situation: "土曜日の午後、やることがない日",
      optionA: "友達に連絡して何するか決める",
      optionB: "気分で決める",
      optionC: "家で好きなことをしながら休む"
    },
    2: {
      scenario: "新学期初日、知らない子ばかり！",
      situation: "教室に入った時",
      optionA: "隣の席の人に先に挨拶する",
      optionB: "誰かが話しかけてきたら嬉しく接する",
      optionC: "静かに座って様子を見る"
    },
    3: {
      scenario: "グループLINEが活発！",
      situation: "友達がおしゃべりしている",
      optionA: "積極的に会話に参加する",
      optionB: "たまにリアクションだけする",
      optionC: "読むだけで必要な時だけ返信する"
    },
    4: {
      scenario: "映画を選ばなきゃ！",
      situation: "友達とNetflixを見る時",
      optionA: "SFやファンタジーみたいな想像の世界の話",
      optionB: "面白ければジャンルは関係ない",
      optionC: "実話ベースや現実的なストーリー"
    },
    5: {
      scenario: "テスト勉強をしなきゃ！",
      situation: "テスト1週間前",
      optionA: "教科書の内容をしっかり暗記する",
      optionB: "重要な部分を中心に整理する",
      optionC: "全体的な流れとつながりを把握する"
    },
    6: {
      scenario: "進路について考え中！",
      situation: "将来について悩む時",
      optionA: "安定した確実な職業がいい",
      optionB: "まだよく分からない",
      optionC: "新しくて創造的な分野に惹かれる"
    },
    7: {
      scenario: "友達が悩みを抱えている！",
      situation: "友達が悩みを話してくれた",
      optionA: "どうすればいいか解決策を一緒に探す",
      optionB: "話を聞いて共感する",
      optionC: "一緒に悲しんで慰める"
    },
    8: {
      scenario: "グループ課題で意見が分かれた！",
      situation: "チームメンバーの意見が違う",
      optionA: "論理的に一番いい方法を説得する",
      optionB: "みんなの意見を聞いて妥協する",
      optionC: "雰囲気が悪くならないように調整する"
    },
    9: {
      scenario: "点数が思ったより低かった！",
      situation: "テスト結果をもらった時",
      optionA: "なぜ間違えたか分析して次はもっと頑張る",
      optionB: "残念だけど次頑張ればいい",
      optionC: "悲しくて落ち込む"
    },
    10: {
      scenario: "プロジェクトの締め切りが近い！",
      situation: "提出3日前",
      optionA: "もうほとんど終わっている",
      optionB: "今から本格的にやる",
      optionC: "締め切り前日に集中してやる"
    },
    11: {
      scenario: "休みの計画を立てる！",
      situation: "休みが始まる前",
      optionA: "やることリストとスケジュールを作る",
      optionB: "だいたいの計画だけ立てる",
      optionC: "その時やりたいことをやる"
    },
    12: {
      scenario: "急に約束がキャンセルになった！",
      situation: "友達が急に会えなくなった",
      optionA: "むしろいい！他のことができる",
      optionB: "残念だけど大丈夫",
      optionC: "楽しみにしていたのにちょっとイラつく"
    },
    13: {
      scenario: "エネルギーが必要！",
      situation: "疲れた一日の終わりに",
      optionA: "友達に会っておしゃべりすると充電される",
      optionB: "状況による",
      optionC: "一人で静かに休むと充電される"
    },
    14: {
      scenario: "新しい趣味を始める！",
      situation: "興味のあることを探す時",
      optionA: "実用的で役に立つことを学ぶ",
      optionB: "面白そうならやってみる",
      optionC: "ユニークで創造的なものに惹かれる"
    },
    15: {
      scenario: "友達が約束を破った！",
      situation: "待っていたのに友達が来なかった",
      optionA: "腹が立つけど理由を聞く",
      optionB: "次はこうしないでと言う",
      optionC: "何かあったのか心配になる"
    },
    16: {
      scenario: "私の机は...",
      situation: "普段の机の状態",
      optionA: "いつもきれいに整理されている",
      optionB: "使いながらたまに整理する",
      optionC: "自分だけが分かる自分のスタイル"
    },
    17: {
      scenario: "話していてもっと楽しいのは？",
      situation: "友達と話す時",
      optionA: "未来についての想像やアイデア",
      optionB: "いろんな話題全部いい",
      optionC: "実際にあったことや経験"
    },
    18: {
      scenario: "褒められた！",
      situation: "先生が褒めてくれた",
      optionA: "誇らしくてもっと頑張りたい",
      optionB: "嬉しい",
      optionC: "気まずくて恥ずかしい"
    },
    19: {
      scenario: "決断しなきゃ！",
      situation: "重要な選択の瞬間",
      optionA: "すぐ決めて行動する",
      optionB: "適度に考えて決める",
      optionC: "いろんな可能性を開けてゆっくり決める"
    },
    20: {
      scenario: "授業で発表！",
      situation: "先生が発表する人を探している",
      optionA: "手を挙げて発表する",
      optionB: "指名されたらやる",
      optionC: "できればやりたくない"
    }
  },
  zh: {
    1: {
      scenario: "周末突然有了空闲时间！",
      situation: "周六下午，没事做的日子",
      optionA: "联系朋友决定做什么",
      optionB: "根据心情决定",
      optionC: "在家做喜欢的事情休息"
    },
    2: {
      scenario: "新学期第一天，都是陌生人！",
      situation: "走进教室的时候",
      optionA: "先跟旁边的人打招呼",
      optionB: "有人跟我说话就友好相处",
      optionC: "安静地坐着观察情况"
    },
    3: {
      scenario: "群聊很活跃！",
      situation: "朋友们在聊天",
      optionA: "积极参与对话",
      optionB: "偶尔点个赞",
      optionC: "只看不说需要时才回复"
    },
    4: {
      scenario: "要选一部电影！",
      situation: "和朋友看Netflix的时候",
      optionA: "科幻或奇幻类的想象世界故事",
      optionB: "只要有趣类型无所谓",
      optionC: "根据真实故事或现实主义剧情"
    },
    5: {
      scenario: "要准备考试了！",
      situation: "考试前一周",
      optionA: "仔细背诵课本内容",
      optionB: "重点整理重要部分",
      optionC: "把握整体脉络和联系"
    },
    6: {
      scenario: "在想未来的职业！",
      situation: "担心未来的时候",
      optionA: "想要稳定确定的工作",
      optionB: "还不太确定",
      optionC: "被新的创意领域吸引"
    },
    7: {
      scenario: "朋友有烦恼！",
      situation: "朋友说了自己的烦恼",
      optionA: "一起找解决办法",
      optionB: "倾听并表示理解",
      optionC: "一起难过安慰对方"
    },
    8: {
      scenario: "小组作业意见不一致！",
      situation: "组员们有不同意见",
      optionA: "用逻辑说服选择最好的方法",
      optionB: "听取大家意见折中",
      optionC: "调解不让气氛变差"
    },
    9: {
      scenario: "分数比预想的低！",
      situation: "收到考试结果的时候",
      optionA: "分析错误原因下次更努力",
      optionB: "虽然可惜但下次会更好",
      optionC: "难过又沮丧"
    },
    10: {
      scenario: "作业截止日期快到了！",
      situation: "交作业前3天",
      optionA: "已经差不多做完了",
      optionB: "现在开始认真做",
      optionC: "截止前一天集中做"
    },
    11: {
      scenario: "制定假期计划！",
      situation: "假期开始之前",
      optionA: "制作待办事项和日程表",
      optionB: "只有大概的计划",
      optionC: "当时想做什么就做什么"
    },
    12: {
      scenario: "约定突然取消了！",
      situation: "朋友突然不能见面了",
      optionA: "反而好！可以做别的事",
      optionB: "虽然可惜但没关系",
      optionC: "本来很期待有点烦"
    },
    13: {
      scenario: "需要能量！",
      situation: "疲惫的一天结束时",
      optionA: "见朋友聊天让我充电",
      optionB: "看情况而定",
      optionC: "一个人安静休息让我充电"
    },
    14: {
      scenario: "开始新爱好！",
      situation: "寻找感兴趣的事情时",
      optionA: "学习实用有帮助的东西",
      optionB: "看起来有趣就尝试",
      optionC: "被独特有创意的东西吸引"
    },
    15: {
      scenario: "朋友失约了！",
      situation: "等了但朋友没来",
      optionA: "虽然生气但问原因",
      optionB: "告诉对方下次别这样",
      optionC: "担心是不是出什么事了"
    },
    16: {
      scenario: "我的书桌...",
      situation: "平时书桌的状态",
      optionA: "总是整整齐齐的",
      optionB: "用着用着偶尔整理",
      optionC: "只有自己懂的风格"
    },
    17: {
      scenario: "聊什么更有趣？",
      situation: "和朋友聊天的时候",
      optionA: "关于未来的想象和想法",
      optionB: "各种话题都喜欢",
      optionC: "真实发生的事情和经历"
    },
    18: {
      scenario: "被表扬了！",
      situation: "老师表扬了我",
      optionA: "自豪想做得更好",
      optionB: "心情好",
      optionC: "尴尬害羞"
    },
    19: {
      scenario: "需要做决定！",
      situation: "重要选择的时刻",
      optionA: "快速决定并行动",
      optionB: "适当考虑后决定",
      optionC: "保持多种可能慢慢决定"
    },
    20: {
      scenario: "课堂发言！",
      situation: "老师在找发言的人",
      optionA: "举手去发言",
      optionB: "被叫到就做",
      optionC: "尽量不想做"
    }
  }
};

const highTranslations: LanguageQuestionTranslations = {
  ko: {},
  en: {
    1: {
      scenario: "Friday night, what to do?",
      situation: "End of the week, free time",
      optionA: "Go out and hang with friends",
      optionB: "Decide based on mood",
      optionC: "Have alone time at home"
    },
    2: {
      scenario: "You have a photo to post on SNS!",
      situation: "Took a nice photo while traveling",
      optionA: "Post immediately and check friends' reactions",
      optionB: "Post occasionally",
      optionC: "Prefer viewing over posting"
    },
    3: {
      scenario: "Your project group has been decided!",
      situation: "First group meeting",
      optionA: "Lead the meeting and assign roles",
      optionB: "Share opinions and participate",
      optionC: "Quietly do my assigned role"
    },
    4: {
      scenario: "Thinking about your career path!",
      situation: "Career counseling time",
      optionA: "Prefer stable and certain career",
      optionB: "Considering various options",
      optionC: "Drawn to new and challenging fields"
    },
    5: {
      scenario: "When understanding class content...",
      situation: "When learning new concepts",
      optionA: "Need specific examples to understand",
      optionB: "Need both",
      optionC: "Understand better when grasping overall concept first"
    },
    6: {
      scenario: "When writing an essay...",
      situation: "Writing assignment",
      optionA: "Use lots of metaphors and imagination",
      optionB: "Depends on the topic",
      optionC: "Write based on facts and data"
    },
    7: {
      scenario: "A friend is about to make a wrong choice!",
      situation: "Situation requiring advice",
      optionA: "Honestly explain why it's wrong",
      optionB: "Tell them carefully in a roundabout way",
      optionC: "Empathize with feelings first then tell"
    },
    8: {
      scenario: "Debate class time!",
      situation: "Topic with opposing opinions",
      optionA: "Logically refute opposing views",
      optionB: "Listen to both sides and judge",
      optionC: "Mediate so no one gets hurt emotionally"
    },
    9: {
      scenario: "Friend failed an exam!",
      situation: "Time to comfort",
      optionA: '"Try this next time" - give advice',
      optionB: '"You\'re upset? You\'ll do better next time" - say',
      optionC: '"That\'s really hard, isn\'t it?" - sympathize together'
    },
    10: {
      scenario: "100 days until college entrance exam!",
      situation: "D-100",
      optionA: "Make detailed schedule and follow it",
      optionB: "Set rough goals",
      optionC: "Study according to daily condition"
    },
    11: {
      scenario: "Friend is going through a hard time!",
      situation: "Friend texted they're having difficulties",
      optionA: "Ask what's wrong and help find solutions",
      optionB: "Ask if they want to meet and talk",
      optionC: "Just be by their side"
    },
    12: {
      scenario: "Social gathering invitation came!",
      situation: "Someone I know invited me to a gathering",
      optionA: "New people sound fun, I'll go!",
      optionB: "Depends on who's going",
      optionC: "Meeting new people is burdensome, I'll pass"
    },
    13: {
      scenario: "Time to do career exploration homework!",
      situation: "Career assignment",
      optionA: "I already know what I want to do",
      optionB: "I'm still exploring",
      optionC: "Don't want to be limited to one path"
    },
    14: {
      scenario: "Conflict between friends!",
      situation: "Caught in the middle",
      optionA: "Objectively analyze who's right",
      optionB: "First listen to both sides",
      optionC: "Be on both sides and help reconcile"
    },
    15: {
      scenario: "Choose a club activity!",
      situation: "Beginning of semester club selection",
      optionA: "Join a practical and helpful club",
      optionB: "Want to try various things",
      optionC: "Join a creative and unique club"
    },
    16: {
      scenario: "My semester goal is...",
      situation: "When setting goals",
      optionA: "Clear numbers and concrete achievement targets",
      optionB: "Balance between rough direction and detailed plan",
      optionC: "Flexible growth and process-oriented"
    },
    17: {
      scenario: "Need to pick a class!",
      situation: "Elective selection",
      optionA: "Pick subjects helpful for advancement",
      optionB: "Balance grades and interests",
      optionC: "Pick something that interests me"
    },
    18: {
      scenario: "Weekend study method is...",
      situation: "Self-study time",
      optionA: "Study alone focused at home or library",
      optionB: "Sometimes alone, sometimes with friends",
      optionC: "Prefer to go to study cafe or study with friends"
    },
    19: {
      scenario: "I have a strong opinion about something!",
      situation: "Discussing with friends",
      optionA: "Logically persuade with my opinion",
      optionB: "Share thoughts while respecting each other",
      optionC: "Consider others' feelings and adjust accordingly"
    },
    20: {
      scenario: "Have to choose something from the menu!",
      situation: "At a restaurant with friends",
      optionA: "Already knew what I wanted, order right away",
      optionB: "Look at the menu and consider options",
      optionC: "Choose according to mood or atmosphere"
    }
  },
  ja: {
    1: {
      scenario: "金曜の夜、何する？",
      situation: "一週間の終わり、自由時間",
      optionA: "友達と出かけて遊ぶ",
      optionB: "気分で決める",
      optionC: "家で一人の時間を過ごす"
    },
    2: {
      scenario: "SNSに載せる写真がある！",
      situation: "旅行でいい写真が撮れた",
      optionA: "すぐ投稿して友達の反応を見る",
      optionB: "たまに投稿する",
      optionC: "投稿するより見る方が好き"
    },
    3: {
      scenario: "発表のグループが決まった！",
      situation: "初めてのグループミーティング",
      optionA: "ミーティングをリードして役割を決める",
      optionB: "意見を出して参加する",
      optionC: "任された役割を静かにこなす"
    },
    4: {
      scenario: "進路について悩み中！",
      situation: "進路相談の時間",
      optionA: "安定した確実な進路がいい",
      optionB: "いろいろ考え中",
      optionC: "新しくて挑戦的な分野に惹かれる"
    },
    5: {
      scenario: "授業内容を理解する時...",
      situation: "新しい概念を学ぶ時",
      optionA: "具体的な例がないと理解できない",
      optionB: "両方必要",
      optionC: "全体的な概念を先につかむと理解できる"
    },
    6: {
      scenario: "作文を書く時...",
      situation: "作文の課題",
      optionA: "比喩と想像力をたくさん使う",
      optionB: "テーマによる",
      optionC: "事実とデータに基づいて書く"
    },
    7: {
      scenario: "友達が間違った選択をしようとしている！",
      situation: "アドバイスが必要な状況",
      optionA: "正直になぜダメか説明する",
      optionB: "遠回しに気をつけて言う",
      optionC: "まず感情に共感してから言う"
    },
    8: {
      scenario: "ディベートの授業！",
      situation: "意見が対立するテーマ",
      optionA: "論理的に相手の意見を反論する",
      optionB: "両方の意見を聞いて判断する",
      optionC: "誰も傷つかないように調整する"
    },
    9: {
      scenario: "友達がテストで失敗した！",
      situation: "慰めが必要な時",
      optionA: "「次はこうすればいいよ」とアドバイスする",
      optionB: "「つらいよね？次はうまくいくよ」と言う",
      optionC: "「すごく大変だよね？」と一緒に辛さを感じる"
    },
    10: {
      scenario: "大学入試まであと100日！",
      situation: "D-100",
      optionA: "詳細なスケジュールを立てて従う",
      optionB: "大まかな目標を設定する",
      optionC: "その日のコンディションに合わせて勉強する"
    },
    11: {
      scenario: "友達が大変な時！",
      situation: "友達から辛いというメッセージが来た",
      optionA: "何があったか聞いて解決策を探す手伝いをする",
      optionB: "会って話したいか聞く",
      optionC: "ただそばにいてあげる"
    },
    12: {
      scenario: "懇親会の誘いが来た！",
      situation: "知り合いから集まりに誘われた",
      optionA: "新しい人と会うの楽しそう、行く！",
      optionB: "誰が来るかによる",
      optionC: "新しい人と会うのは負担、パス"
    },
    13: {
      scenario: "進路探索の宿題をする時間！",
      situation: "進路の課題",
      optionA: "もうやりたいことは決まっている",
      optionB: "まだ探索中",
      optionC: "一つの道に限定されたくない"
    },
    14: {
      scenario: "友達同士が喧嘩した！",
      situation: "中間に挟まれた",
      optionA: "客観的にどちらが正しいか分析する",
      optionB: "まず両方の話を聞く",
      optionC: "両方の味方になって仲直りを助ける"
    },
    15: {
      scenario: "部活を選ぶ！",
      situation: "学期初めの部活選択",
      optionA: "実用的で役に立つ部活に入る",
      optionB: "いろいろ試してみたい",
      optionC: "創造的でユニークな部活に入る"
    },
    16: {
      scenario: "今学期の目標は...",
      situation: "目標を立てる時",
      optionA: "明確な数字と具体的な達成目標",
      optionB: "大まかな方向と詳細な計画のバランス",
      optionC: "柔軟な成長とプロセス重視"
    },
    17: {
      scenario: "授業を選ばなきゃ！",
      situation: "選択科目の選択",
      optionA: "進路に役立つ科目を選ぶ",
      optionB: "成績と興味のバランス",
      optionC: "興味のあるものを選ぶ"
    },
    18: {
      scenario: "週末の勉強方法は...",
      situation: "自習時間",
      optionA: "家や図書館で一人で集中して勉強する",
      optionB: "時々一人で、時々友達と",
      optionC: "スタディカフェや友達と勉強するのが好き"
    },
    19: {
      scenario: "何かについて強い意見がある！",
      situation: "友達と議論中",
      optionA: "論理的に自分の意見で説得する",
      optionB: "お互いを尊重しながら考えを共有する",
      optionC: "相手の気持ちを考えてそれに合わせる"
    },
    20: {
      scenario: "メニューから何か選ばなきゃ！",
      situation: "友達とレストランで",
      optionA: "もう決めていたのですぐ注文する",
      optionB: "メニューを見て選択肢を考える",
      optionC: "その時の気分や雰囲気で選ぶ"
    }
  },
  zh: {
    1: {
      scenario: "周五晚上，做什么？",
      situation: "一周结束，空闲时间",
      optionA: "和朋友出去玩",
      optionB: "根据心情决定",
      optionC: "在家享受独处时光"
    },
    2: {
      scenario: "有照片想发社交媒体！",
      situation: "旅行时拍了好照片",
      optionA: "立刻发布看朋友反应",
      optionB: "偶尔发",
      optionC: "比起发布更喜欢看"
    },
    3: {
      scenario: "项目小组确定了！",
      situation: "第一次小组会议",
      optionA: "主持会议分配角色",
      optionB: "发表意见参与",
      optionC: "安静地完成分配的任务"
    },
    4: {
      scenario: "在考虑未来职业！",
      situation: "职业咨询时间",
      optionA: "喜欢稳定确定的职业",
      optionB: "正在考虑各种选择",
      optionC: "被新的挑战性领域吸引"
    },
    5: {
      scenario: "理解课程内容时...",
      situation: "学习新概念时",
      optionA: "需要具体例子才能理解",
      optionB: "两者都需要",
      optionC: "先掌握整体概念就能理解"
    },
    6: {
      scenario: "写作文时...",
      situation: "写作作业",
      optionA: "大量使用比喻和想象",
      optionB: "看主题而定",
      optionC: "基于事实和数据写"
    },
    7: {
      scenario: "朋友要做错误的选择！",
      situation: "需要建议的情况",
      optionA: "诚实地解释为什么不行",
      optionB: "委婉小心地说",
      optionC: "先共情感受再说"
    },
    8: {
      scenario: "辩论课时间！",
      situation: "意见对立的话题",
      optionA: "逻辑地反驳对方观点",
      optionB: "听取双方意见后判断",
      optionC: "调解不让任何人受伤"
    },
    9: {
      scenario: "朋友考试考砸了！",
      situation: "需要安慰的时候",
      optionA: '"下次这样做"给建议',
      optionB: '"很难过吧？下次会好的"',
      optionC: '"真的很辛苦吧？"一起难过'
    },
    10: {
      scenario: "距离高考还有100天！",
      situation: "D-100",
      optionA: "制定详细计划并遵循",
      optionB: "设定大概目标",
      optionC: "根据每天状态学习"
    },
    11: {
      scenario: "朋友遇到困难！",
      situation: "朋友发消息说很难",
      optionA: "问发生什么帮忙找解决办法",
      optionB: "问要不要见面聊聊",
      optionC: "就在身边陪着"
    },
    12: {
      scenario: "收到聚会邀请！",
      situation: "认识的人邀请参加聚会",
      optionA: "认识新朋友很有趣，去！",
      optionB: "看谁去而定",
      optionC: "见新人有负担，不去"
    },
    13: {
      scenario: "做职业探索作业的时间！",
      situation: "职业作业",
      optionA: "已经知道想做什么",
      optionB: "还在探索中",
      optionC: "不想被限制在一条路上"
    },
    14: {
      scenario: "朋友之间起冲突！",
      situation: "被夹在中间",
      optionA: "客观分析谁对",
      optionB: "先听双方说法",
      optionC: "站在双方立场帮助和解"
    },
    15: {
      scenario: "选择社团活动！",
      situation: "学期初社团选择",
      optionA: "加入实用有帮助的社团",
      optionB: "想尝试各种东西",
      optionC: "加入有创意独特的社团"
    },
    16: {
      scenario: "我这学期的目标是...",
      situation: "设定目标时",
      optionA: "明确的数字和具体的达成目标",
      optionB: "大方向和详细计划的平衡",
      optionC: "灵活成长和过程导向"
    },
    17: {
      scenario: "需要选课！",
      situation: "选修课选择",
      optionA: "选对升学有帮助的科目",
      optionB: "平衡成绩和兴趣",
      optionC: "选感兴趣的"
    },
    18: {
      scenario: "周末学习方式是...",
      situation: "自习时间",
      optionA: "在家或图书馆一个人专注学习",
      optionB: "有时一个人有时和朋友",
      optionC: "喜欢去自习咖啡厅或和朋友一起学习"
    },
    19: {
      scenario: "对某事有强烈意见！",
      situation: "和朋友讨论中",
      optionA: "用逻辑和我的观点说服",
      optionB: "互相尊重地分享想法",
      optionC: "考虑对方感受相应调整"
    },
    20: {
      scenario: "要从菜单选东西！",
      situation: "和朋友在餐厅",
      optionA: "已经知道想要什么立刻点",
      optionB: "看菜单考虑选择",
      optionC: "根据心情或氛围选"
    }
  }
};

const adultTranslations: LanguageQuestionTranslations = {
  ko: {},
  en: {
    1: {
      scenario: "How do you spend your weekends?",
      situation: "Free time on the weekend",
      optionA: "Meet people, attend gatherings",
      optionB: "Depends on the situation",
      optionC: "Prefer resting alone at home"
    },
    2: {
      scenario: "At a networking event!",
      situation: "Business networking",
      optionA: "Actively talk to new people",
      optionB: "Talk when opportunity arises",
      optionC: "Quietly wait for others to approach"
    },
    3: {
      scenario: "At a party where you don't know many people!",
      situation: "Friend's gathering",
      optionA: "Introduce myself and mingle",
      optionB: "Stick with people I know first",
      optionC: "Stay quiet and observe"
    },
    4: {
      scenario: "When learning something new!",
      situation: "Work or hobby learning",
      optionA: "Prefer practical, applicable knowledge",
      optionB: "Balance theory and practice",
      optionC: "Understand theoretical concepts first"
    },
    5: {
      scenario: "What kind of books do you like?",
      situation: "Choosing a book",
      optionA: "Self-help and practical guides",
      optionB: "Various genres",
      optionC: "Novels, philosophy, creative works"
    },
    6: {
      scenario: "Working style is...",
      situation: "Work approach",
      optionA: "Based on proven methods and data",
      optionB: "Combine experience and new ideas",
      optionC: "Try innovative approaches"
    },
    7: {
      scenario: "Colleague is having personal problems!",
      situation: "Office situation",
      optionA: "Offer practical advice",
      optionB: "Listen and show understanding",
      optionC: "Emotionally support and empathize"
    },
    8: {
      scenario: "Making an important decision!",
      situation: "Career or life choice",
      optionA: "Analyze pros and cons logically",
      optionB: "Consider both logic and feelings",
      optionC: "Follow my heart and values"
    },
    9: {
      scenario: "Handling conflict at work!",
      situation: "Disagreement with a team member",
      optionA: "Stick to principles and present facts",
      optionB: "Find middle ground",
      optionC: "Prioritize harmony and relationships"
    },
    10: {
      scenario: "When planning a project!",
      situation: "Project kickoff",
      optionA: "Create detailed plan with deadlines",
      optionB: "Have flexible milestones",
      optionC: "Adapt as the project evolves"
    },
    11: {
      scenario: "Your daily schedule is...",
      situation: "Daily routine",
      optionA: "Structured and planned",
      optionB: "Somewhat organized",
      optionC: "Flexible and spontaneous"
    },
    12: {
      scenario: "Travel planning style!",
      situation: "Planning a trip",
      optionA: "Plan everything in detail beforehand",
      optionB: "Book essentials, leave room for spontaneity",
      optionC: "Decide on the spot, go with the flow"
    },
    13: {
      scenario: "Ideal work environment!",
      situation: "Workplace preference",
      optionA: "Collaborative, social environment",
      optionB: "Balance of teamwork and solo work",
      optionC: "Independent, quiet workspace"
    },
    14: {
      scenario: "Solving a complex problem!",
      situation: "Challenging situation",
      optionA: "Follow step-by-step methodical approach",
      optionB: "Combine method and intuition",
      optionC: "Trust instincts and creative solutions"
    },
    15: {
      scenario: "At a job interview!",
      situation: "Interview setting",
      optionA: "Highlight achievements and skills",
      optionB: "Balance skills and personality",
      optionC: "Emphasize values and team fit"
    },
    16: {
      scenario: "Receiving feedback at work!",
      situation: "Performance review",
      optionA: "Focus on objective improvement areas",
      optionB: "Consider the feedback holistically",
      optionC: "Feel personally affected initially"
    },
    17: {
      scenario: "Deadline approaching!",
      situation: "Time pressure",
      optionA: "Already prepared ahead of time",
      optionB: "Working steadily towards it",
      optionC: "Do best work under pressure"
    },
    18: {
      scenario: "When making new friends!",
      situation: "Social situations",
      optionA: "Take initiative and reach out",
      optionB: "Depends on the chemistry",
      optionC: "Wait for others to approach"
    },
    19: {
      scenario: "After work relaxation!",
      situation: "Evening routine",
      optionA: "Meet friends or go to events",
      optionB: "Sometimes social, sometimes quiet",
      optionC: "Enjoy solitude and personal time"
    },
    20: {
      scenario: "Investing money!",
      situation: "Financial decision",
      optionA: "Safe, proven investment options",
      optionB: "Balanced portfolio approach",
      optionC: "Willing to take calculated risks for returns"
    },
    21: {
      scenario: "When giving advice!",
      situation: "Friend needs guidance",
      optionA: "Give direct, practical suggestions",
      optionB: "Share perspective and options",
      optionC: "Empathize and support emotionally first"
    },
    22: {
      scenario: "Planning for the future!",
      situation: "Life goals",
      optionA: "Have clear 5-10 year plan",
      optionB: "General direction with flexibility",
      optionC: "Focus on present, future will unfold"
    },
    23: {
      scenario: "When stressed!",
      situation: "Dealing with stress",
      optionA: "Create action plan to solve the cause",
      optionB: "Combination of action and self-care",
      optionC: "Need emotional processing time"
    },
    24: {
      scenario: "Dream career!",
      situation: "Thinking about ideal job",
      optionA: "Stable position with clear growth path",
      optionB: "Balance of stability and interest",
      optionC: "Meaningful work aligned with passion"
    }
  },
  ja: {
    1: {
      scenario: "週末はどう過ごす？",
      situation: "週末の自由時間",
      optionA: "人に会う、集まりに参加する",
      optionB: "状況による",
      optionC: "家で一人で休むのが好き"
    },
    2: {
      scenario: "ネットワーキングイベントで！",
      situation: "ビジネスネットワーキング",
      optionA: "積極的に新しい人と話す",
      optionB: "機会があれば話す",
      optionC: "静かに誰かが近づいてくるのを待つ"
    },
    3: {
      scenario: "知らない人が多いパーティーで！",
      situation: "友達の集まり",
      optionA: "自己紹介して交流する",
      optionB: "まず知っている人と一緒にいる",
      optionC: "静かに観察する"
    },
    4: {
      scenario: "新しいことを学ぶ時！",
      situation: "仕事や趣味の学習",
      optionA: "実用的で適用できる知識が好き",
      optionB: "理論と実践のバランス",
      optionC: "まず理論的な概念を理解する"
    },
    5: {
      scenario: "どんな本が好き？",
      situation: "本を選ぶ時",
      optionA: "自己啓発と実用的なガイド",
      optionB: "いろんなジャンル",
      optionC: "小説、哲学、創作物"
    },
    6: {
      scenario: "仕事のスタイルは...",
      situation: "仕事のアプローチ",
      optionA: "実績のある方法とデータに基づく",
      optionB: "経験と新しいアイデアを組み合わせる",
      optionC: "革新的なアプローチを試す"
    },
    7: {
      scenario: "同僚が個人的な問題を抱えている！",
      situation: "オフィスの状況",
      optionA: "実用的なアドバイスを提供する",
      optionB: "話を聞いて理解を示す",
      optionC: "感情的にサポートして共感する"
    },
    8: {
      scenario: "重要な決断をする！",
      situation: "キャリアや人生の選択",
      optionA: "論理的に長所と短所を分析する",
      optionB: "論理と感情の両方を考慮する",
      optionC: "心と価値観に従う"
    },
    9: {
      scenario: "仕事での対立を処理する！",
      situation: "チームメンバーとの意見の相違",
      optionA: "原則を守り事実を提示する",
      optionB: "中間点を見つける",
      optionC: "調和と関係を優先する"
    },
    10: {
      scenario: "プロジェクトを計画する時！",
      situation: "プロジェクト開始",
      optionA: "期限付きの詳細な計画を作る",
      optionB: "柔軟なマイルストーンを設定する",
      optionC: "プロジェクトの進行に合わせて適応する"
    },
    11: {
      scenario: "日々のスケジュールは...",
      situation: "日常のルーティン",
      optionA: "構造的で計画的",
      optionB: "ある程度整理されている",
      optionC: "柔軟で自発的"
    },
    12: {
      scenario: "旅行の計画スタイル！",
      situation: "旅行を計画する時",
      optionA: "事前にすべて詳細に計画する",
      optionB: "必要なものを予約し、余地を残す",
      optionC: "その場で決める、流れに任せる"
    },
    13: {
      scenario: "理想的な仕事環境！",
      situation: "職場の好み",
      optionA: "協力的で社交的な環境",
      optionB: "チームワークと個人作業のバランス",
      optionC: "独立した静かなワークスペース"
    },
    14: {
      scenario: "複雑な問題を解決する！",
      situation: "難しい状況",
      optionA: "ステップバイステップの方法論的アプローチに従う",
      optionB: "方法と直感を組み合わせる",
      optionC: "直感と創造的な解決策を信頼する"
    },
    15: {
      scenario: "就職面接で！",
      situation: "面接の場",
      optionA: "実績とスキルを強調する",
      optionB: "スキルと人格のバランス",
      optionC: "価値観とチームへの適合を強調する"
    },
    16: {
      scenario: "仕事でフィードバックを受ける！",
      situation: "パフォーマンスレビュー",
      optionA: "客観的な改善点に焦点を当てる",
      optionB: "フィードバックを総合的に考慮する",
      optionC: "最初は個人的に影響を受ける"
    },
    17: {
      scenario: "締め切りが近い！",
      situation: "時間のプレッシャー",
      optionA: "すでに前もって準備している",
      optionB: "着実に進めている",
      optionC: "プレッシャーの下で最高の仕事をする"
    },
    18: {
      scenario: "新しい友達を作る時！",
      situation: "社交的な状況",
      optionA: "主導権を取って連絡する",
      optionB: "相性による",
      optionC: "他の人が近づいてくるのを待つ"
    },
    19: {
      scenario: "仕事後のリラックス！",
      situation: "夜のルーティン",
      optionA: "友達に会ったりイベントに行く",
      optionB: "時々社交的、時々静か",
      optionC: "一人の時間を楽しむ"
    },
    20: {
      scenario: "お金を投資する！",
      situation: "財務上の決断",
      optionA: "安全で実績のある投資オプション",
      optionB: "バランスの取れたポートフォリオアプローチ",
      optionC: "リターンのために計算されたリスクを取る"
    },
    21: {
      scenario: "アドバイスをする時！",
      situation: "友達がガイダンスを必要としている",
      optionA: "直接的で実用的な提案をする",
      optionB: "視点と選択肢を共有する",
      optionC: "まず共感して感情的にサポートする"
    },
    22: {
      scenario: "将来を計画する！",
      situation: "人生の目標",
      optionA: "明確な5-10年計画がある",
      optionB: "柔軟性のある一般的な方向性",
      optionC: "現在に集中、将来は展開していく"
    },
    23: {
      scenario: "ストレスを感じた時！",
      situation: "ストレスに対処する",
      optionA: "原因を解決するための行動計画を作る",
      optionB: "行動とセルフケアの組み合わせ",
      optionC: "感情を処理する時間が必要"
    },
    24: {
      scenario: "夢のキャリア！",
      situation: "理想の仕事を考える時",
      optionA: "明確な成長パスのある安定したポジション",
      optionB: "安定と興味のバランス",
      optionC: "情熱に沿った意味のある仕事"
    }
  },
  zh: {
    1: {
      scenario: "周末怎么过？",
      situation: "周末空闲时间",
      optionA: "见人，参加聚会",
      optionB: "看情况",
      optionC: "喜欢一个人在家休息"
    },
    2: {
      scenario: "在社交活动上！",
      situation: "商务社交",
      optionA: "积极与新认识的人交谈",
      optionB: "有机会就聊",
      optionC: "安静等待别人来搭话"
    },
    3: {
      scenario: "在不太认识人的派对上！",
      situation: "朋友的聚会",
      optionA: "自我介绍并交流",
      optionB: "先和认识的人待在一起",
      optionC: "安静观察"
    },
    4: {
      scenario: "学习新东西时！",
      situation: "工作或爱好学习",
      optionA: "喜欢实用、可应用的知识",
      optionB: "理论和实践平衡",
      optionC: "先理解理论概念"
    },
    5: {
      scenario: "喜欢什么样的书？",
      situation: "选书的时候",
      optionA: "自我提升和实用指南",
      optionB: "各种类型",
      optionC: "小说、哲学、创意作品"
    },
    6: {
      scenario: "工作风格是...",
      situation: "工作方式",
      optionA: "基于经过验证的方法和数据",
      optionB: "结合经验和新想法",
      optionC: "尝试创新方法"
    },
    7: {
      scenario: "同事有私人问题！",
      situation: "办公室情况",
      optionA: "提供实用建议",
      optionB: "倾听并表示理解",
      optionC: "在情感上支持和共情"
    },
    8: {
      scenario: "做重要决定！",
      situation: "职业或人生选择",
      optionA: "逻辑分析利弊",
      optionB: "考虑逻辑和感受",
      optionC: "跟随内心和价值观"
    },
    9: {
      scenario: "处理工作冲突！",
      situation: "与团队成员意见不合",
      optionA: "坚持原则陈述事实",
      optionB: "找到中间地带",
      optionC: "优先考虑和谐与关系"
    },
    10: {
      scenario: "规划项目时！",
      situation: "项目启动",
      optionA: "创建带截止日期的详细计划",
      optionB: "设置灵活的里程碑",
      optionC: "随项目发展调整"
    },
    11: {
      scenario: "日常安排是...",
      situation: "日常作息",
      optionA: "有结构有计划",
      optionB: "有一定组织",
      optionC: "灵活随意"
    },
    12: {
      scenario: "旅行计划风格！",
      situation: "规划旅行",
      optionA: "事先详细规划一切",
      optionB: "预订必需品留出余地",
      optionC: "当场决定随遇而安"
    },
    13: {
      scenario: "理想的工作环境！",
      situation: "工作场所偏好",
      optionA: "合作性强社交环境",
      optionB: "团队合作和独立工作平衡",
      optionC: "独立安静的工作空间"
    },
    14: {
      scenario: "解决复杂问题！",
      situation: "挑战性情况",
      optionA: "按步骤系统性方法",
      optionB: "结合方法和直觉",
      optionC: "相信直觉和创造性解决方案"
    },
    15: {
      scenario: "在面试中！",
      situation: "面试场景",
      optionA: "强调成就和技能",
      optionB: "平衡技能和个性",
      optionC: "强调价值观和团队契合度"
    },
    16: {
      scenario: "在工作中收到反馈！",
      situation: "绩效评估",
      optionA: "关注客观改进领域",
      optionB: "全面考虑反馈",
      optionC: "最初会感到个人影响"
    },
    17: {
      scenario: "截止日期临近！",
      situation: "时间压力",
      optionA: "已经提前准备好了",
      optionB: "稳步推进中",
      optionC: "在压力下表现最好"
    },
    18: {
      scenario: "交新朋友时！",
      situation: "社交场合",
      optionA: "主动出击联系",
      optionB: "看缘分",
      optionC: "等待别人来找"
    },
    19: {
      scenario: "下班后放松！",
      situation: "晚间作息",
      optionA: "见朋友或参加活动",
      optionB: "有时社交有时安静",
      optionC: "享受独处和个人时间"
    },
    20: {
      scenario: "投资金钱！",
      situation: "财务决策",
      optionA: "安全经过验证的投资选择",
      optionB: "平衡的投资组合方式",
      optionC: "愿意为回报承担可控风险"
    },
    21: {
      scenario: "给建议时！",
      situation: "朋友需要指导",
      optionA: "给出直接实用的建议",
      optionB: "分享观点和选择",
      optionC: "先共情在情感上支持"
    },
    22: {
      scenario: "规划未来！",
      situation: "人生目标",
      optionA: "有明确的5-10年计划",
      optionB: "大方向但保持灵活",
      optionC: "专注当下未来自然展开"
    },
    23: {
      scenario: "压力大的时候！",
      situation: "应对压力",
      optionA: "制定行动计划解决原因",
      optionB: "行动和自我照顾结合",
      optionC: "需要情绪处理时间"
    },
    24: {
      scenario: "梦想的职业！",
      situation: "思考理想工作",
      optionA: "有明确成长路径的稳定职位",
      optionB: "稳定和兴趣的平衡",
      optionC: "与热情一致的有意义的工作"
    }
  }
};

export function getTranslatedQuestion(
  question: ScenarioQuestion,
  language: Language,
  ageGroup: 'elementary' | 'middle' | 'high' | 'adult'
): ScenarioQuestion {
  if (language === 'ko') {
    return question;
  }

  let translations: LanguageQuestionTranslations;
  switch (ageGroup) {
    case 'elementary':
      translations = elementaryTranslations;
      break;
    case 'middle':
      translations = middleTranslations;
      break;
    case 'high':
      translations = highTranslations;
      break;
    case 'adult':
      translations = adultTranslations;
      break;
  }

  const translation = translations[language]?.[question.id];
  if (!translation) {
    return question;
  }

  return {
    ...question,
    scenario: translation.scenario,
    situation: translation.situation || question.situation,
    optionA: { ...question.optionA, text: translation.optionA },
    optionB: { ...question.optionB, text: translation.optionB },
    optionC: { ...question.optionC, text: translation.optionC },
  };
}

export function getTranslatedQuestions(
  questions: ScenarioQuestion[],
  language: Language,
  ageGroup: 'elementary' | 'middle' | 'high' | 'adult'
): ScenarioQuestion[] {
  return questions.map(q => getTranslatedQuestion(q, language, ageGroup));
}
