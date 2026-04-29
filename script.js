// รายชื่อ Business Unit (44 หน่วย)
const buNames = [
    "安徽区 Anhui Area", "水产事业（育种/研发）Aquaculture Business", "农牧食品北京总部 Beijing Headquarter", "北京战区 Beijing Strategic Area", "正大康地 Chia Tai Conti", 
    "重庆区 Chongqing Area", "商业地产（上海帝泰项目）Commercial Real Estate Business China Area Ditai Project", "商业地产企业中国区Commercial Real Estate China", "正大生物 CP Bio", "正大制药 CP Pharmacy", 
    "植物一条龙 Crop Integration Business", "电商事业 E-commerce Business", "农牧工程技术 Engineering Technology", "食品事业段佩财SVC区 Food Business Duan Peicai SVC Area", "食品事业魏范波区 Food Business Wei Fanbo Area", 
    "食品事业邢继宪SVC区 Food Business Xing Jixian SVC Area", "福建区 Fujian Area", "甘肃&宁夏&青海区 Gansu & Ningxia & Qinghai Area", "广东湛江&海南区 Guangdong Zhanjiang & Hainan Area", "广西区 Guangxi Area", 
    "贵州区 Guizhou Area", "黑龙江&吉林区 Heilongjiang & Jilin Area", "河南区 Henan Area", "湖北区 Hubei Area", "湖南区 Hunan Area", 
    "内蒙古&山西区 Inner Mongolia & Shanxi Area", "江苏区 Jiangsu Area", "江西区 Jiangxi Area", "京津冀区 Jingjinji Area", "辽宁区 Liaoning Area", 
    "机电事业 Mechanical Business", "现代食品 Modern Food Business", "种植事业 Plant Business", "预混料区 Premix Business", "Retail Business (Shanghai)", 
    "Retail Business (Guangdong&Guangxi)", "陕西区 Shaanxi Area", "山东区 Shandong Area", "东营项目 Shandong DongYing Area", "四川区 Sichuan Area", 
    "新疆区 Xinjiang Area", "云南区 Yunnan Area", "浙江区 Zhejiang Area", "正信银行 Zheng Xin Bank"
];

// ข้อมูล Governance ดิบเรียงตาม buNames
const govData = {
    g1_1: [0,0,0,0,0,5,0,5,0,0,0,0,5,0,0,5,0,5,0,5,0,0,5,5,5,0,5,5,0,5,0,5,0,5,5,5,5,0,0,5,0,0,5,5],
    g1_2: [0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,5,0,0,5,0,0,0,0,0,0,5,0,0,0,0,5,0,1,5,5,0,0,0,5,0,0,0,5],
    g1_3: [0,0,0,0,0,10,0,5,0,0,10,0,10,0,0,10,0,5,10,10,0,0,10,10,5,0,5,5,0,5,0,5,0,10,0,5,10,0,0,10,0,0,10,5],
    g1_4: [0,0,0,0,0,5,0,5,0,5,0,0,0,0,0,0,0,0,0,5,5,0,0,5,5,0,5,5,0,5,0,5,0,5,5,5,0,0,0,5,0,0,5,0],
    g2_1: Array(44).fill(15),
    g2_2: [0,0,0,0,0,10,0,10,10,10,10,0,0,0,0,10,0,0,0,10,10,0,10,0,10,0,10,10,0,10,0,10,0,10,10,10,10,0,0,10,0,10,5,10],
    g3_1: [5,5,5,5,5,5,5,10,5,10,5,5,5,5,5,10,5,5,5,10,10,5,10,10,10,5,10,10,5,5,5,10,5,10,5,10,5,5,5,5,10,5,5,5],
    g3_2: [0,0,15,0,0,15,0,15,0,15,15,0,0,0,0,15,0,0,15,15,0,0,15,15,15,0,15,15,15,0,0,15,0,15,15,10,0,0,0,10,0,15,0,15],
    g4_1: [0,0,0,0,0,0,0,15,5,20,0,0,0,0,0,0,0,0,0,1,0,0,0,5,5,0,0,5,0,0,0,10,0,5,0,10,0,0,0,10,0,0,0,5],
    g4_2: Array(44).fill(5),
    // อัปเดตคะแนน Extra Points ตามตารางใหม่
    extra_score: [10, 10, 1, 10, 5, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 10, 10, 1, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 5, 10, 10, 1, 10, 10, 10, 10, 1, 10, 1, 10]
};

// ข้อมูล Compliance ดิบ (แปลงจาก % เป็นคะแนนเต็มในแต่ละข้อ) เรียงตาม buNames
const compData = {
    c1_1: [16,12,12,16,12,12,16,16,12,20,16,12,16,12,12,12,16,16,16,16,16,16,16,12,16,12,16,12,12,12,12,16,12,16,12,16,16,12,12,16,12,16,12,20],
    c1_2: [16,16,16,16,16,12,16,16,16,20,16,16,12,16,12,12,16,16,16,20,16,16,16,16,16,16,16,16,12,16,16,20,12,12,16,16,16,16,16,16,16,16,16,16],
    c2_1: Array(44).fill('n/a'),
    c2_2: Array(44).fill(5),
    c3_1: Array(44).fill(10),
    c3_2: Array(44).fill(5),
    c3_3: [10,6,8,8,6,10,10,8,8,10,10,4,8,8,6,8,10,8,8,8,10,8,8,10,10,8,8,10,10,8,10,10,10,4,8,4,8,10,8,10,10,10,8,10],
    c3_4: Array(44).fill(5),
    c4_1: Array(44).fill(5),
    c4_2: Array(44).fill(5),
    c4_3: Array(44).fill(6)
};

// สร้างฐานข้อมูล BU_DATA อัตโนมัติจากการจับคู่ Array ด้านบน
const BU_DATA = {};
for (let i = 0; i < buNames.length; i++) {
    BU_DATA[buNames[i]] = {
        g1_1: govData.g1_1[i], g1_2: govData.g1_2[i], g1_3: govData.g1_3[i], g1_4: govData.g1_4[i],
        g2_1: govData.g2_1[i], g2_2: govData.g2_2[i],
        g3_1: govData.g3_1[i], g3_2: govData.g3_2[i],
        g4_1: govData.g4_1[i], g4_2: govData.g4_2[i],
        extra_score: govData.extra_score[i],
        c1_1: compData.c1_1[i], c1_2: compData.c1_2[i],
        c2_1: compData.c2_1[i], c2_2: compData.c2_2[i],
        c3_1: compData.c3_1[i], c3_2: compData.c3_2[i], c3_3: compData.c3_3[i], c3_4: compData.c3_4[i],
        c4_1: compData.c4_1[i], c4_2: compData.c4_2[i], c4_3: compData.c4_3[i]
    };
}

// ข้อมูลโครงสร้างเกณฑ์การประเมิน (ภาษาจีน)
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
    const buDropdownArea = document.querySelector('.subtitle-area');
    if (buDropdownArea) {
        buDropdownArea.style.display = 'flex'; 
    }

    const sectionsContainer = document.getElementById('detail-sections');
    sectionsContainer.innerHTML = generateSectionHTML(CRITERIA_DATA.governance) + generateSectionHTML(CRITERIA_DATA.compliance);

    initBUDropdown(); 
    calculateAndUpdate();
    lucide.createIcons();
});