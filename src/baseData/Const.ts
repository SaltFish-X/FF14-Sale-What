interface ListItem {
  value: string | number;
  label: string;
}
interface OptionsGroup {
  label: string;
  options: ListItem[];
}

interface checkListItem {
  label: string;
  data: ListItem[];
}

export const World: OptionsGroup[] = [
  {
    label: '陆行鸟',
    options: [
      { value: 1167, label: '红玉海' },
      { value: 1081, label: '神意之地' },
      { value: 1042, label: '拉诺西亚' },
      { value: 1044, label: '幻影群岛' },
      { value: 1060, label: '萌芽池' },
      { value: 1173, label: '宇宙和音' },
      { value: 1174, label: '沃仙曦染' },
      { value: 1175, label: '晨曦王座' },
    ],
  },
  {
    label: '蘑古力',
    options: [
      { value: 1172, label: '白银乡' },
      { value: 1076, label: '白金幻象' },
      { value: 1171, label: '神拳痕' },
      { value: 1170, label: '潮风亭' },
      { value: 1113, label: '旅人栈桥' },
      { value: 1121, label: '拂晓之间' },
      { value: 1166, label: '龙巢神殿' },
      { value: 1176, label: '梦羽宝境' },
    ],
  },
  {
    label: '猫小胖',
    options: [
      { value: 1043, label: '紫水栈桥' },
      { value: 1169, label: '延夏' },
      { value: 1106, label: '静语庄园' },
      { value: 1045, label: '摩杜纳' },
      { value: 1177, label: '海猫茶屋' },
      { value: 1178, label: '柔风海湾' },
      { value: 1179, label: '琥珀原' },
    ],
  },
  {
    label: '小柴柴',
    options: [
      { value: 1192, label: '水晶塔' },
      { value: 1183, label: '银泪湖' },
      { value: 1180, label: '太阳海岸' },
      { value: 1186, label: '伊修加德' },
      { value: 1201, label: '红茶川' },
      { value: 1068, label: '黄金谷' },
      { value: 1064, label: '月牙湾' },
      { value: 1187, label: '雪松原' },
    ],
  },
];

 

export const checkList: checkListItem[] = [
  { label: '清空',  data: [] },
  {
    label: '礼服列表',

    data: [
      {
        value: '34090',
        label: '伽迦象革魔导书',
      },
      {
        value: '35334',
        label: '马栗木泥岩砂轮机',
      },
      {
        value: '34241',
        label: '山鸡革魔导典',
      },
      {
        value: '34127',
        label: '黑麻治愈半指护手',
      },
      {
        value: '34096',
        label: '辉翠银环刃',
      },
      {
        value: '34276',
        label: '阿尔马斯提治愈外套',
      },
      {
        value: '34563',
        label: '绛红草布升龙束膝裤',
      },
      {
        value: '34533',
        label: '铁木长枪',
      },
      {
        value: '34398',
        label: '铋金战镰',
      },
      {
        value: '34107',
        label: '辉翠银制敌护臂',
      },
      {
        value: '34251',
        label: '辉翠银御敌战甲',
      },
      {
        value: '34706',
        label: '球粒陨石制敌上装',
      },
      {
        value: '34247',
        label: '白镴振空摆',
      },
      {
        value: '34544',
        label: '锰钢刺剑',
      },
      {
        value: '35408',
        label: '伽迦象革足袋',
      },
      {
        value: '34401',
        label: '赛加羚羊革御敌长衣',
      },
    ],
  },
  {
    label: '590',

    data: [
      {
        value: '36717',
        label: '条约大地矮靴',
      },
      {
        value: '36716',
        label: '条约大地马裤',
      },
      {
        value: '36715',
        label: '条约大地手套',
      },
      {
        value: '36714',
        label: '条约大地外套',
      },
      {
        value: '36713',
        label: '条约大地毛帽',
      },
      {
        value: '36712',
        label: '条约巧匠浅口鞋',
      },
      {
        value: '36711',
        label: '条约巧匠垮裤',
      },
      {
        value: '36710',
        label: '条约巧匠半指手套',
      },
      {
        value: '36709',
        label: '条约巧匠坎肩',
      },
      {
        value: '36708',
        label: '条约巧匠包头巾',
      },
      {
        value: '36707',
        label: '条约园艺镰',
      },
      {
        value: '36706',
        label: '条约碎石锤',
      },
      {
        value: '36705',
        label: '条约厨刀',
      },
      {
        value: '36704',
        label: '条约研钵',
      },
      {
        value: '36703',
        label: '条约纺车',
      },
      {
        value: '36702',
        label: '条约平斩',
      },
      {
        value: '36701',
        label: '条约砂轮机',
      },
      {
        value: '36700',
        label: '条约手钳',
      },
      {
        value: '36699',
        label: '条约锉刀',
      },
      {
        value: '36698',
        label: '条约羊角锤',
      },
      {
        value: '36697',
        label: '条约钓竿',
      },
      {
        value: '36696',
        label: '条约手斧',
      },
      {
        value: '36695',
        label: '条约鹤嘴锄',
      },
      {
        value: '36694',
        label: '条约悌阳象煎锅',
      },
      {
        value: '36693',
        label: '条约蒸馏器',
      },
      {
        value: '36692',
        label: '条约缝针',
      },
      {
        value: '36691',
        label: '条约制革刀',
      },
      {
        value: '36690',
        label: '条约工艺锤',
      },
      {
        value: '36689',
        label: '条约圆头锤',
      },
      {
        value: '36688',
        label: '条约横头锤',
      },
    ],
  },
  {
    label:'圆桌',
    data:[
      {
          "value": "37289",
          "label": "圆桌之枪刃"
      },
      {
          "value": "37290",
          "label": "圆桌之战轮"
      },
      {
          "value": "37291",
          "label": "圆桌之蛇石针"
      },
      {
          "value": "37292",
          "label": "圆桌之夺命镰"
      }
  ]
  }
];
