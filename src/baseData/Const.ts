export interface ListItem {
  value: string | number;
  label: string;
}
export interface OptionsGroup {
  label: string;
  options: ListItem[];
}

export interface checkListItem {
  label: string;
  data: ListItem[];
}

// var a = []
// world.forEach(e=>{
//   const regionId = a.findIndex( ele => ele.label === e.region)
//   // const worldsId = worldId.find( eles =>eles.id == e.)
//   if(!~regionId ){
//     a.push(  {
//       label: e.region,
//       value:e.region,
//       children: [{ label: e.name,value:e.name, children: [{label: e.name,value:e.name}].concat(e.worlds.map(mapId)) }],
//     },)
//   } else (
//     a[regionId].children.push({ label: e.name,value:e.name, children: [{label: e.name,value:e.name+'all'}].concat(e.worlds.map(mapId)) })
//   )

// })

// function mapId(e){
//   const data = worldId.find( eles =>eles.id == e)
//   return{value:String(data.id), label:data.name}
// }

export const WorldAll = [
  {
    label: 'Japan',
    value: 'Japan',
    children: [
      {
        label: 'Elemental',
        value: 'Elemental',
        children: [
          {
            label: 'Elemental',
            value: 'Elemental',
          },
          {
            value: '45',
            label: 'Carbuncle',
          },
          {
            value: '49',
            label: 'Kujata',
          },
          {
            value: '50',
            label: 'Typhon',
          },
          {
            value: '58',
            label: 'Garuda',
          },
          {
            value: '68',
            label: 'Atomos',
          },
          {
            value: '72',
            label: 'Tonberry',
          },
          {
            value: '90',
            label: 'Aegis',
          },
          {
            value: '94',
            label: 'Gungnir',
          },
        ],
      },
      {
        label: 'Gaia',
        value: 'Gaia',
        children: [
          {
            label: 'Gaia',
            value: 'Gaia',
          },
          {
            value: '43',
            label: 'Alexander',
          },
          {
            value: '46',
            label: 'Fenrir',
          },
          {
            value: '51',
            label: 'Ultima',
          },
          {
            value: '59',
            label: 'Ifrit',
          },
          {
            value: '69',
            label: 'Bahamut',
          },
          {
            value: '76',
            label: 'Tiamat',
          },
          {
            value: '92',
            label: 'Durandal',
          },
          {
            value: '98',
            label: 'Ridill',
          },
        ],
      },
      {
        label: 'Mana',
        value: 'Mana',
        children: [
          {
            label: 'Mana',
            value: 'Mana',
          },
          {
            value: '23',
            label: 'Asura',
          },
          {
            value: '28',
            label: 'Pandaemonium',
          },
          {
            value: '44',
            label: 'Anima',
          },
          {
            value: '47',
            label: 'Hades',
          },
          {
            value: '48',
            label: 'Ixion',
          },
          {
            value: '61',
            label: 'Titan',
          },
          {
            value: '70',
            label: 'Chocobo',
          },
          {
            value: '96',
            label: 'Masamune',
          },
        ],
      },
      {
        label: 'Meteor',
        value: 'Meteor',
        children: [
          {
            label: 'Meteor',
            value: 'Meteor',
          },
          {
            value: '24',
            label: 'Belias',
          },
          {
            value: '29',
            label: 'Shinryu',
          },
          {
            value: '30',
            label: 'Unicorn',
          },
          {
            value: '31',
            label: 'Yojimbo',
          },
          {
            value: '32',
            label: 'Zeromus',
          },
          {
            value: '52',
            label: 'Valefor',
          },
          {
            value: '60',
            label: 'Ramuh',
          },
          {
            value: '82',
            label: 'Mandragora',
          },
        ],
      },
    ],
  },
  {
    label: 'North-America',
    value: 'North-America',
    children: [
      {
        label: 'Aether',
        value: 'Aether',
        children: [
          {
            label: 'Aether',
            value: 'Aether',
          },
          {
            value: '40',
            label: 'Jenova',
          },
          {
            value: '54',
            label: 'Faerie',
          },
          {
            value: '57',
            label: 'Siren',
          },
          {
            value: '63',
            label: 'Gilgamesh',
          },
          {
            value: '65',
            label: 'Midgardsormr',
          },
          {
            value: '73',
            label: 'Adamantoise',
          },
          {
            value: '79',
            label: 'Cactuar',
          },
          {
            value: '99',
            label: 'Sargatanas',
          },
        ],
      },
      {
        label: 'Primal',
        value: 'Primal',
        children: [
          {
            label: 'Primal',
            value: 'Primal',
          },
          {
            value: '35',
            label: 'Famfrit',
          },
          {
            value: '53',
            label: 'Exodus',
          },
          {
            value: '55',
            label: 'Lamia',
          },
          {
            value: '64',
            label: 'Leviathan',
          },
          {
            value: '77',
            label: 'Ultros',
          },
          {
            value: '78',
            label: 'Behemoth',
          },
          {
            value: '93',
            label: 'Excalibur',
          },
          {
            value: '95',
            label: 'Hyperion',
          },
        ],
      },
      {
        label: 'Crystal',
        value: 'Crystal',
        children: [
          {
            label: 'Crystal',
            value: 'Crystal',
          },
          {
            value: '34',
            label: 'Brynhildr',
          },
          {
            value: '37',
            label: 'Mateus',
          },
          {
            value: '41',
            label: 'Zalera',
          },
          {
            value: '62',
            label: 'Diabolos',
          },
          {
            value: '74',
            label: 'Coeurl',
          },
          {
            value: '75',
            label: 'Malboro',
          },
          {
            value: '81',
            label: 'Goblin',
          },
          {
            value: '91',
            label: 'Balmung',
          },
        ],
      },
    ],
  },
  {
    label: 'Europe',
    value: 'Europe',
    children: [
      {
        label: 'Chaos',
        value: 'Chaos',
        children: [
          {
            label: 'Chaos',
            value: 'Chaos',
          },
          {
            value: '39',
            label: 'Omega',
          },
          {
            value: '71',
            label: 'Moogle',
          },
          {
            value: '80',
            label: 'Cerberus',
          },
          {
            value: '83',
            label: 'Louisoix',
          },
          {
            value: '85',
            label: 'Spriggan',
          },
          {
            value: '97',
            label: 'Ragnarok',
          },
          {
            value: '400',
            label: 'Sagittarius',
          },
          {
            value: '401',
            label: 'Phantom',
          },
        ],
      },
      {
        label: 'Light',
        value: 'Light',
        children: [
          {
            label: 'Light',
            value: 'Light',
          },
          {
            value: '33',
            label: 'Twintania',
          },
          {
            value: '36',
            label: 'Lich',
          },
          {
            value: '42',
            label: 'Zodiark',
          },
          {
            value: '56',
            label: 'Phoenix',
          },
          {
            value: '66',
            label: 'Odin',
          },
          {
            value: '67',
            label: 'Shiva',
          },
          {
            value: '402',
            label: 'Alpha',
          },
          {
            value: '403',
            label: 'Raiden',
          },
        ],
      },
    ],
  },
  {
    label: 'Oceania',
    value: 'Oceania',
    children: [
      {
        label: 'Materia',
        value: 'Materia',
        children: [
          {
            label: 'Materia',
            value: 'Materia',
          },
          {
            value: '21',
            label: 'Ravana',
          },
          {
            value: '22',
            label: 'Bismarck',
          },
          {
            value: '86',
            label: 'Sephirot',
          },
          {
            value: '87',
            label: 'Sophia',
          },
          {
            value: '88',
            label: 'Zurvan',
          },
        ],
      },
    ],
  },
  {
    label: '中国',
    value: '中国',
    children: [
      {
        label: '陆行鸟',
        value: '陆行鸟',
        children: [
          {
            label: '陆行鸟',
            value: '陆行鸟',
          },
          {
            value: '1167',
            label: '红玉海',
          },
          {
            value: '1081',
            label: '神意之地',
          },
          {
            value: '1042',
            label: '拉诺西亚',
          },
          {
            value: '1044',
            label: '幻影群岛',
          },
          {
            value: '1060',
            label: '萌芽池',
          },
          {
            value: '1173',
            label: '宇宙和音',
          },
          {
            value: '1174',
            label: '沃仙曦染',
          },
          {
            value: '1175',
            label: '晨曦王座',
          },
        ],
      },
      {
        label: '莫古力',
        value: '莫古力',
        children: [
          {
            label: '莫古力',
            value: '莫古力',
          },
          {
            value: '1172',
            label: '白银乡',
          },
          {
            value: '1076',
            label: '白金幻象',
          },
          {
            value: '1171',
            label: '神拳痕',
          },
          {
            value: '1170',
            label: '潮风亭',
          },
          {
            value: '1113',
            label: '旅人栈桥',
          },
          {
            value: '1121',
            label: '拂晓之间',
          },
          {
            value: '1166',
            label: '龙巢神殿',
          },
          {
            value: '1176',
            label: '梦羽宝境',
          },
        ],
      },
      {
        label: '猫小胖',
        value: '猫小胖',
        children: [
          {
            label: '猫小胖',
            value: '猫小胖',
          },
          {
            value: '1043',
            label: '紫水栈桥',
          },
          {
            value: '1169',
            label: '延夏',
          },
          {
            value: '1106',
            label: '静语庄园',
          },
          {
            value: '1045',
            label: '摩杜纳',
          },
          {
            value: '1177',
            label: '海猫茶屋',
          },
          {
            value: '1178',
            label: '柔风海湾',
          },
          {
            value: '1179',
            label: '琥珀原',
          },
        ],
      },
      {
        label: '豆豆柴',
        value: '豆豆柴',
        children: [
          {
            label: '豆豆柴',
            value: '豆豆柴',
          },
          {
            value: '1192',
            label: '水晶塔',
          },
          {
            value: '1183',
            label: '银泪湖',
          },
          {
            value: '1180',
            label: '太阳海岸',
          },
          {
            value: '1186',
            label: '伊修加德',
          },
          {
            value: '1201',
            label: '红茶川',
          },
          {
            value: '1068',
            label: '黄金谷',
          },
          {
            value: '1064',
            label: '月牙湾',
          },
          {
            value: '1187',
            label: '雪松原',
          },
        ],
      },
    ],
  },
];

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
    label: '圆桌',
    data: [
      {
        value: '37289',
        label: '圆桌之枪刃',
      },
      {
        value: '37290',
        label: '圆桌之战轮',
      },
      {
        value: '37291',
        label: '圆桌之蛇石针',
      },
      {
        value: '37292',
        label: '圆桌之夺命镰',
      },
    ],
  },
  {
    "label": "礼服材料",
    "data": [
        {
            "label": "山鸡革",
            "value": 36248
        },
        {
            "label": "辉翠银附魔墨水",
            "value": 36237
        },
        {
            "label": "伽迦象革",
            "value": 36247
        },
        {
            "label": "铋金锭",
            "value": 36170
        },
        {
            "label": "辉翠银锭",
            "value": 36169
        },
        {
            "label": "绿片岩磨刀石",
            "value": 36188
        },
        {
            "label": "阿尔马斯提哔叽",
            "value": 36209
        },
        {
            "label": "阿尔马斯提毛",
            "value": 36203
        },
        {
            "label": "山鸡的粗皮",
            "value": 36243
        },
        {
            "label": "黄明矾",
            "value": 27817
        },
        {
            "label": "白镴锭",
            "value": 36183
        }
    ]
},
{
    "label": "590材料",
    "data": [
        {
            "value": "37280",
            "label": "艾布拉纳赛黄晶"
        },
        {
            "value": "37281",
            "label": "萨维奈纤维"
        },
        {
            "value": "36223",
            "label": "晓月灵砂"
        },
        {
            "label": "艾布拉纳赛黄晶原石",
            "value": 37279
        },
        {
            "label": "萨维奈玉米",
            "value": 37278
        },
        {
            "label": "黄金丝绸",
            "value": 36213
        },
        {
            "label": "月精金锭",
            "value": 36173
        },
        {
            "label": "两栖犀革",
            "value": 36252
        },
        {
            "label": "萨维奈卡拉墨鱼",
            "value": 36686
        }
    ]
},
{
    "label": "水晶价格监控",
    "data": [
        {
            "label": "火之水晶",
            "value": 8
        },
        {
            "label": "冰之水晶",
            "value": 9
        },
        {
            "label": "风之水晶",
            "value": 10
        },
        {
            "label": "土之水晶",
            "value": 11
        },
        {
            "label": "雷之水晶",
            "value": 12
        },
        {
            "label": "水之水晶",
            "value": 13
        },
        {
            "label": "火之晶簇",
            "value": 14
        },
        {
            "label": "冰之晶簇",
            "value": 15
        },
        {
            "label": "风之晶簇",
            "value": 16
        },
        {
            "label": "土之晶簇",
            "value": 17
        },
        {
            "label": "雷之晶簇",
            "value": 18
        },
        {
            "label": "水之晶簇",
            "value": 19
        }
    ]
},
{
    "label": "藏宝图",
    "data": [
        {
            "label": "陈旧的鞣革地图",
            "value": 6688
        },
        {
            "label": "陈旧的山羊革地图",
            "value": 6689
        },
        {
            "label": "陈旧的野猪革地图",
            "value": 6691
        },
        {
            "label": "陈旧的飞龙革地图",
            "value": 12242
        },
        {
            "label": "陈旧的巨龙革地图",
            "value": 12243
        },
        {
            "label": "陈旧的巨蟾蜍革地图",
            "value": 6690
        },
        {
            "label": "陈旧的毒蜥蜴革地图",
            "value": 6692
        },
        {
            "label": "鞣革制的隐藏地图",
            "value": 8156
        },
        {
            "label": "陈旧的古鸟革地图",
            "value": 12241
        },
        {
            "label": "陈旧的瞪羚革地图",
            "value": 17836
        },
        {
            "label": "陈旧的绿飘龙革地图",
            "value": 26744
        },
        {
            "label": "陈旧的缠尾蛟革地图",
            "value": 26745
        },
        {
            "label": "陈旧的赛加羚羊革地图",
            "value": 36611
        },
        {
            "label": "陈旧的金毗罗鳄革地图",
            "value": 36612
        },
        {
            "label": "陈旧的迦迦纳怪鸟革地图",
            "value": 17835
        }
    ]
},

{
    "label": "搓艇",
    "data": [
        {
            "label": "钴铁矿",
            "value": 5116
        },
        {
            "label": "玄钢块",
            "value": 5061
        },
        {
            "label": "玄铁矿",
            "value": 5121
        },
        {
            "label": "玫瑰金块",
            "value": 5068
        },
        {
            "label": "金矿",
            "value": 5118
        },
        {
            "label": "玫瑰金锭",
            "value": 5067
        },
        {
            "label": "斑铜矿",
            "value": 5119
        },
        {
            "label": "玄钢锭",
            "value": 5060
        },
        {
            "label": "阿尔基克薰衣草",
            "value": 15857
        },
        {
            "label": "虚无界风茄",
            "value": 15858
        },
        {
            "label": "苍天石原石",
            "value": 12223
        },
        {
            "label": "水淙石原石",
            "value": 12551
        },
        {
            "label": "白云母",
            "value": 12539
        },
        {
            "label": "黄玉原石",
            "value": 5149
        },
        {
            "label": "银矿",
            "value": 5113
        },
        {
            "label": "铁刀木",
            "value": 12221
        },
        {
            "label": "白金矿",
            "value": 5120
        },
        {
            "label": "云杉原木",
            "value": 5395
        },
        {
            "label": "云杉木材",
            "value": 5378
        },
        {
            "label": "胡桃木材",
            "value": 5371
        },
        {
            "label": "胡桃原木",
            "value": 5388
        },
        {
            "label": "玄钢板",
            "value": 5075
        },
        {
            "label": "玄钢铆钉",
            "value": 5095
        }
    ]
},
{
    "label": "幻巧战坐骑",
    "data": [
        {
            "label": "巨魔角笛",
            "value": 36904
        },
        {
            "label": "英西塔土斯角笛",
            "value": 30865
        },
        {
            "label": "建筑06S号的核心",
            "value": 33145
        },
        {
            "label": "卡吕冬堤斯角笛",
            "value": 36003
        }
    ]
}
];
