// ฐานข้อมูลคะแนนจริงราย Business Unit (省区/事业线)
const BU_DATA = {
    "安徽区 Anhui Area": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 20, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "水产事业（育种/研发）Aquaculture Business": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 6, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "农牧食品北京总部 Beijing Headquarter": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 1, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "北京战区 Beijing Strategic Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 15, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "正大康地 Chia Tai Conti": { g1_1: 0, g1_2: 2, g1_3: 5, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 15, g4_2: 5, extra_score: 5, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 6, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "重庆区 Chongqing Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 12, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "商业地产（上海帝泰项目）Commercial Real Estate (Shanghai Kinghill)": { g1_1: 5, g1_2: 0, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 5, g3_2: 15, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "商业地产企业中国区Commercial Real Estate China Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "正大生物 CP Bio": { g1_1: 5, g1_2: 2, g1_3: 5, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 15, g4_2: 5, extra_score: 5, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "正大制药 CP Pharmacy": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 10, g3_1: 5, g3_2: 0, g4_1: 5, g4_2: 5, extra_score: 10, c1_1: 20, c1_2: 20, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "植物一条龙 Crop Intergration Business": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 20, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "电商事业 E-commerce Business": { g1_1: 0, g1_2: 0, g1_3: 10, g1_4: 0, g2_1: 15, g2_2: 10, g3_1: 5, g3_2: 15, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 4, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "农牧工程技术 Engineering Technology": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 12, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "食品事业段佩财SVC区 Food Business Duan Peicai SVC Area": { g1_1: 5, g1_2: 0, g1_3: 10, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "食品事业魏范波区 Food Business Wei Fanbo Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 12, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 6, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "食品事业邢继宪SVC区 Food Business Xing Jixian SVC Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 12, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "福建区 Fujian Area": { g1_1: 5, g1_2: 0, g1_3: 10, g1_4: 0, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "甘肃&宁夏&青海区 Gansu & Ningxia & Qinghai Area": { g1_1: 0, g1_2: 5, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 1, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "广东湛江&海南区 Guangdong Zhanjiang & Hainan Area": { g1_1: 5, g1_2: 0, g1_3: 5, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "广西区 Guangxi Area": { g1_1: 0, g1_2: 0, g1_3: 10, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 15, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 20, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "贵州区 Guizhou Area": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "黑龙江&吉林区 Heilongjiang & Jilin Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 0, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "河南区 Henan Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "湖北区 Hubei Area": { g1_1: 5, g1_2: 0, g1_3: 10, g1_4: 0, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "湖南区 Hunan Area": { g1_1: 5, g1_2: 0, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 0, g3_1: 10, g3_2: 15, g4_1: 5, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "内蒙古&山西区 Inner Mongolia & Shanxi Area": { g1_1: 5, g1_2: 0, g1_3: 5, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 5, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "江苏区 Jiangsu Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "江西区 Jiangxi Area": { g1_1: 5, g1_2: 5, g1_3: 5, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "京津冀区 Jingjinji Area": { g1_1: 5, g1_2: 0, g1_3: 5, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 5, g4_2: 5, extra_score: 5, c1_1: 12, c1_2: 12, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "辽宁区 Liaoning Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 15, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "机电事业 Mechanical Business": { g1_1: 5, g1_2: 0, g1_3: 5, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "现代食品 Modern Food": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 20, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "种植事业 Plant Business": { g1_1: 5, g1_2: 5, g1_3: 5, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 10, g4_2: 5, extra_score: 5, c1_1: 12, c1_2: 12, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "预混料区 Premix Business": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 12, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 4, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "零售事业（上海）Retail Business (Shanghai)": { g1_1: 5, g1_2: 1, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 15, g4_1: 5, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "零售事业（广东广西）Retail Business (Guangdong&Guangxi)": { g1_1: 5, g1_2: 5, g1_3: 0, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 5, g3_2: 15, g4_1: 0, g4_2: 5, extra_score: 1, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 4, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "陕西区 Shaanxi Area": { g1_1: 5, g1_2: 5, g1_3: 5, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 10, g3_2: 10, g4_1: 10, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "山东区 Shandong Area": { g1_1: 5, g1_2: 0, g1_3: 10, g1_4: 0, g2_1: 15, g2_2: 10, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "东营项目 Shandong DongYing Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "四川区 Sichuan Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 5, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "新疆区 Xinjiang Area": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 10, g3_1: 5, g3_2: 10, g4_1: 10, g4_2: 5, extra_score: 1, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "云南区 Yunnan Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 0, g3_1: 10, g3_2: 0, g4_1: 0, g4_2: 5, extra_score: 10, c1_1: 16, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "浙江区 Zhejiang Area": { g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 15, g2_2: 10, g3_1: 5, g3_2: 15, g4_1: 0, g4_2: 5, extra_score: 1, c1_1: 12, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 8, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 },
    "正信银行 Zheng Xin Bank": { g1_1: 5, g1_2: 5, g1_3: 10, g1_4: 5, g2_1: 15, g2_2: 5, g3_1: 5, g3_2: 0, g4_1: 5, g4_2: 5, extra_score: 10, c1_1: 20, c1_2: 16, c2_1: 'n/a', c2_2: 5, c3_1: 10, c3_2: 5, c3_3: 10, c3_4: 5, c4_1: 5, c4_2: 5, c4_3: 6 }
};

// ข้อมูลโครงสร้างเกณฑ์การประเมิน
const CRITERIA_DATA = {
    governance: {
        title: "治理",
        weight: 60,
        theme: "gov",
        iconId: "building-2",
        categories: [
            {
                id: "g1", title: "1. 董事会治理 (25%)", icon: "building-2",
                items: [
                    { id: "g1_1", title: "1.1 治理机构成员出席率", max: 5 },
                    { id: "g1_2", title: "1.2 会议议程及相关文件的提前分发", max: 5 },
                    { id: "g1_3", title: "1.3 治理机构决议的落实与执行", max: 10 },
                    { id: "g1_4", title: "1.4 董事参与绩效评估", max: 5 },
                ]
            },
            {
                id: "g2", title: "2. 治理落实 (25%)", icon: "target",
                items: [
                    { id: "g2_1", title: "2.1 公司治理实施计划的完成情况", max: 15 },
                    { id: "g2_2", title: "2.2 反腐败自我评估报告建议的落实情况", max: 10 },
                ]
            },
            {
                id: "g3", title: "3. 企业文化 (25%)", icon: "heart-handshake",
                items: [
                    { id: "g3_1", title: "3.1 推动道德与公司治理文化的相关活动", max: 10 },
                    { id: "g3_2", title: "3.2 员工完成公司治理培训情况", max: 15 },
                ]
            },
            {
                id: "g4", title: "4. 透明度与信息披露 (25%)", icon: "search",
                items: [
                    { id: "g4_1", title: "4.1 公司网站设立公司治理（CG）专页", max: 20 },
                    { id: "g4_2", title: "4.2 向集团提交公司治理报告", max: 5 },
                ]
            },
            {
                id: "g5", title: "附加分 (参与奖励)", icon: "star", isExtra: true,
                items: [
                    { id: "extra_score", title: "CG 可持续发展协同论坛", max: 10 }
                ]
            }
        ]
    },
    compliance: {
        title: "合规",
        weight: 40,
        theme: "comp",
        iconId: "shield-check",
        categories: [
            {
                id: "c1", title: "1. 成熟度等级 (40%)", icon: "shield-check",
                items: [
                    { id: "c1_1", title: "1.1 合规成熟度", max: 20 },
                    { id: "c1_2", title: "1.2 举报机制成熟度", max: 20 },
                ]
            },
            {
                id: "c2", title: "2. 活动参与率 (10%)", icon: "users",
                items: [
                    { id: "c2_1", title: "2.1 合规网络会议参与情况", max: 5 },
                    { id: "c2_2", title: "2.2 制度流程培训", max: 5 },
                ]
            },
            {
                id: "c3", title: "3. 合规落实 (25%)", icon: "file-text",
                items: [
                    { id: "c3_1", title: "3.1 法规合规清单管理", max: 10 },
                    { id: "c3_2", title: "3.2 不合规事件报告", max: 5 },
                    { id: "c3_3", title: "3.3 合规管理培训", max: 10 },
                    { id: "c3_4", title: "3.4 合规成熟度评估", max: 5 },
                ]
            },
            {
                id: "c4", title: "4. 举报机制落实 (25%)", icon: "megaphone",
                items: [
                    { id: "c4_1", title: "4.1 举报统计报告", max: 5 },
                    { id: "c4_2", title: "4.2 举报机制成熟度评估", max: 5 },
                    { id: "c4_3", title: "4.3 举报机制宣传与沟通", max: 10 },
                ]
            }
        ]
    }
};

// สถานะคะแนนเริ่มต้น
let scores = {
    g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0,
    g2_1: 0, g2_2: 0,
    g3_1: 0, g3_2: 0,
    g4_1: 0, g4_2: 0,
    extra_score: 0,
    c1_1: 0, c1_2: 0,
    c2_1: 0, c2_2: 0,
    c3_1: 0, c3_2: 0, c3_3: 0, c3_4: 0,
    c4_1: 0, c4_2: 0, c4_3: 0
};

// ฟังก์ชันโหลดข้อมูลเข้า Dropdown
function initBUDropdown() {
    const select = document.getElementById('bu-selector');
    Object.keys(BU_DATA).forEach(bu => {
        const opt = document.createElement('option');
        opt.value = bu;
        opt.innerText = bu;
        select.appendChild(opt);
    });
}

// เมื่อเลือกจาก Dropdown
function loadBUData() {
    const buSelect = document.getElementById('bu-selector');
    const buName = buSelect.value;
    
    if(buName && BU_DATA[buName]) {
        const data = BU_DATA[buName];
        Object.keys(data).forEach(key => scores[key] = data[key]);
    } else {
        scores = {
            g1_1: 0, g1_2: 0, g1_3: 0, g1_4: 0, g2_1: 0, g2_2: 0, g3_1: 0, g3_2: 0, g4_1: 0, g4_2: 0, extra_score: 0,
            c1_1: 0, c1_2: 0, c2_1: 0, c2_2: 0, c3_1: 0, c3_2: 0, c3_3: 0, c3_4: 0, c4_1: 0, c4_2: 0, c4_3: 0
        };
    }
    
    const sectionsContainer = document.getElementById('detail-sections');
    sectionsContainer.innerHTML = generateSectionHTML(CRITERIA_DATA.governance) + generateSectionHTML(CRITERIA_DATA.compliance);
    
    calculateAndUpdate();
    lucide.createIcons();
}

// ฟังก์ชันสร้าง UI 
function generateSectionHTML(sectionData) {
    let html = `
        <div class="section-card section-${sectionData.theme}">
            <div class="section-header">
                <h2 class="section-title">
                    <i data-lucide="${sectionData.iconId}"></i>
                    ${sectionData.title} (${sectionData.weight}%)
                </h2>
                <div class="text-right">
                    <div class="section-raw-score">
                        <span id="${sectionData.theme}-raw-score">0.00</span><span class="raw-percent">%</span>
                    </div>
                    <div class="raw-label">原始分数</div>
                </div>
            </div>
            <div class="categories">
    `;

    sectionData.categories.forEach(category => {
        const extraClass = category.isExtra ? "category-extra" : "";
        const sliderClass = category.isExtra ? "slider-extra" : `slider-${sectionData.theme}`;
        
        html += `
            <div class="category-card ${extraClass}">
                <h3 class="category-title">
                    <i data-lucide="${category.icon}" style="width: 16px; height: 16px;"></i>
                    ${category.title}
                </h3>
                <div class="item-list">
        `;

        category.items.forEach(item => {
            let valueDisplay = scores[item.id];
            let isNA = valueDisplay === 'n/a';
            let sliderVal = isNA ? 0 : (valueDisplay || 0);
            let disabledAttr = isNA ? 'disabled' : '';

            html += `
                <div class="item-row">
                    <div class="item-name">${item.title}</div>
                    <div>
                        <input 
                            type="range" 
                            id="slider-${item.id}"
                            min="0" 
                            max="${item.max}" 
                            step="1"
                            value="${sliderVal}"
                            oninput="handleScoreChange('${item.id}', this.value)"
                            class="${sliderClass}"
                            ${disabledAttr}
                        />
                    </div>
                    <div class="text-right">
                        <span class="item-score-box" style="${isNA ? 'background: var(--gray-200); color: var(--gray-500);' : ''}">
                            ${isNA ? 'N/A' : `<span id="val-${item.id}">${sliderVal}</span> / ${item.max}`}
                        </span>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    html += `</div></div>`;
    return html;
}

// ฟังก์ชันคำนวณและอัปเดตหน้าจอ
function calculateAndUpdate() {
    let govBaseTotal = 0;
    let govMax = 0;
    let extraTotal = scores['extra_score'] || 0;

    CRITERIA_DATA.governance.categories.forEach(cat => {
        cat.items.forEach(item => {
            if(item.id !== 'extra_score' && scores[item.id] !== 'n/a') {
                govBaseTotal += Number(scores[item.id]) || 0;
                govMax += item.max;
            }
        });
    });

    let govPercent = govMax > 0 ? (govBaseTotal / govMax) * 100 : 0;
    let govTotalWithExtra = govPercent + extraTotal;
    let finalGovRaw = Math.min(100, govTotalWithExtra);

    const capIndicator = document.getElementById('cap-indicator');
    if(govTotalWithExtra > 100) {
        capIndicator.innerText = `(Capped at 100%)`;
    } else {
        capIndicator.innerText = ``;
    }

    let compTotal = 0;
    let compMax = 0;
    CRITERIA_DATA.compliance.categories.forEach(cat => {
        cat.items.forEach(item => {
            if(scores[item.id] !== 'n/a') {
                compTotal += Number(scores[item.id]) || 0;
                compMax += item.max;
            }
        });
    });

    let compPercent = compMax > 0 ? (compTotal / compMax) * 100 : 0;

    const weightedGov = finalGovRaw * 0.6;
    const weightedComp = compPercent * 0.4;
    const finalScore = weightedGov + weightedComp;

    const displayGovWeighted = weightedGov.toFixed(2);
    const displayCompWeighted = weightedComp.toFixed(2);
    const displayFinalScore = finalScore.toFixed(2);
    const displayGovRaw = finalGovRaw.toFixed(2);
    const displayCompRaw = compPercent.toFixed(2);

    document.getElementById('gov-weighted-score').innerText = displayGovWeighted;
    document.getElementById('comp-weighted-score').innerText = displayCompWeighted;
    document.getElementById('final-score').innerText = displayFinalScore;

    document.getElementById('gov-progress-text').innerText = displayGovRaw + '%';
    document.getElementById('gov-progress-bar').style.width = Math.min(100, finalGovRaw) + '%';
    
    document.getElementById('comp-progress-text').innerText = displayCompRaw + '%';
    document.getElementById('comp-progress-bar').style.width = Math.min(100, compPercent) + '%';

    document.getElementById('gov-raw-score').innerText = displayGovRaw;
    document.getElementById('comp-raw-score').innerText = displayCompRaw;
}

// เมื่อมีการเลื่อน Slider
function handleScoreChange(id, value) {
    if(scores[id] !== 'n/a') {
        scores[id] = Number(value);
        document.getElementById(`val-${id}`).innerText = scores[id];
        
        // หากผู้ใช้เลื่อนเอง ให้รีเซ็ต Dropdown เป็นค่าว่าง
        const buSelect = document.getElementById('bu-selector');
        if (buSelect) buSelect.value = ""; 
        
        calculateAndUpdate();
    }
}

// เริ่มต้นการทำงานเมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    const sectionsContainer = document.getElementById('detail-sections');
    sectionsContainer.innerHTML = generateSectionHTML(CRITERIA_DATA.governance) + generateSectionHTML(CRITERIA_DATA.compliance);

    initBUDropdown(); // สร้างตัวเลือก Business Unit ทั้งหมด
    calculateAndUpdate();
    lucide.createIcons();
});