export type Project = {
  slug: string;
  poeticTitle: { zh: string; en: string };
  venue: { zh: string; en: string };
  type: { zh: string; en: string };
  imageCount: number;
  meta: {
    area: string;
    status: { zh: string; en: string };
    completion: { zh: string; en: string };
    duration: { zh: string; en: string };
    location: { zh: string; en: string };
  };
  description: { zh: string[]; en: string[] };
};

export const projects: Project[] = [
  {
    slug: 'chengtuo-hotel',
    poeticTitle: { zh: '栖境', en: 'Dwelling' },
    venue: { zh: '城拓酒店', en: 'Chengtuo Hotel' },
    type: { zh: '酒店与餐饮', en: 'Hospitality' },
    imageCount: 15,
    meta: {
      area: '4,800 m²',
      status: { zh: '建成', en: 'Built' },
      completion: { zh: '2024 年 6 月', en: 'June 2024' },
      duration: { zh: '2023 年 1 月 – 2024 年 6 月', en: 'Jan 2023 – Jun 2024' },
      location: { zh: '中国 重庆', en: 'Chongqing, China' }
    },
    description: {
      zh: [
        '酒店并非旅程的终点,而是一段叙事的中场。城拓酒店尝试以东方意境重塑现代旅居:大堂、套房、茶室、干景庭院,以一种连续而克制的语调被组织起来,在喧嚣的城市边缘留出一处可以停顿的空间。',
        '材料层面,设计选择了沉静的灰、原始的木与雾面石材作为主调,以单一构件的反复排列建立秩序感,而非以装饰堆叠制造仪式。光是另一层语言——透过纸面与帘幕被滤过的光线柔化了所有边缘,让空间在不同时段呈现不同的表情。',
        '套房并非传统意义上的房间,而是一组「介于室内与园林之间」的容器。窗、屏、榻、几之间留有充分的呼吸,让客人可以自行决定一天的节奏。'
      ],
      en: [
        'A hotel is rarely the destination of a journey — more often, it is the pause between movements. Chengtuo Hotel reframes modern hospitality through an Eastern sensibility: lobby, suites, tea pavilion and dry-landscape courtyard are composed in a continuous, restrained register, offering refuge at the edge of a clamorous city.',
        'Material choices favour quiet grey, raw timber and matte stone, with order arising through the patient repetition of a single component rather than the layering of ornament. Light is the second language — filtered through paper and drapery, softening every edge, allowing the space to wear different expressions across the day.',
        'The suites are not rooms in the conventional sense, but vessels suspended between interior and garden. Window, screen, daybed and side-table leave generous breathing room, allowing each guest to set the tempo of the day.'
      ]
    }
  },
  {
    slug: 'tech-office',
    poeticTitle: { zh: '栅格', en: 'The Grid' },
    venue: { zh: '科技集团办公空间', en: 'Tech Group Office' },
    type: { zh: '办公与零售', en: 'Office' },
    imageCount: 7,
    meta: {
      area: '1,600 m²',
      status: { zh: '建成', en: 'Built' },
      completion: { zh: '2024 年 10 月', en: 'October 2024' },
      duration: { zh: '2024 年 4 月 – 2024 年 10 月', en: 'Apr 2024 – Oct 2024' },
      location: { zh: '中国 重庆', en: 'Chongqing, China' }
    },
    description: {
      zh: [
        '科技公司的办公室常常被理解为一种「效率」的表达,但效率并不只意味着更密的工位与更亮的灯。本案以工业语汇与极简秩序为出发点,试图在理性与温度之间找到一个新的中间地带。',
        '裸露的混凝土顶面、阳极氧化金属与原木台面共同建立了主调;开放工区与会议盒子被一组连续的栅格统一,栅格既是动线的提示,也是声学与照明的载体。空间的开放感并非来自取消边界,而是来自边界的可见与可控。',
        '从入口到核心工区,一条贯通的轴线串联起接待、休憩与协作三种状态。员工可以在这条轴线上自由切换工作模式,而不必每次都依赖会议室的预约。'
      ],
      en: [
        'A technology company\'s workplace is too often read as a diagram of efficiency — denser desks, brighter light. This project departs from that reading, seeking instead a middle ground between rationality and warmth.',
        'Exposed concrete soffits, anodised metal and raw timber establish the primary register. Open work zones and meeting volumes are unified beneath a continuous grid that serves circulation, acoustics and lighting in equal measure. Openness here is not the absence of boundaries, but the careful articulation of them.',
        'A single axis runs from entry through to the core working floor, threading reception, retreat and collaboration into a continuous spatial sequence — allowing staff to shift modes without recourse to the booked meeting room.'
      ]
    }
  },
  {
    slug: 'ctn-office',
    poeticTitle: { zh: '案牍', en: 'Order' },
    venue: { zh: '中税网办公室', en: 'CTN Office' },
    type: { zh: '办公与零售', en: 'Office' },
    imageCount: 5,
    meta: {
      area: '800 m²',
      status: { zh: '建成', en: 'Built' },
      completion: { zh: '2024 年 6 月', en: 'June 2024' },
      duration: { zh: '2024 年 1 月 – 2024 年 6 月', en: 'Jan 2024 – Jun 2024' },
      location: { zh: '中国 重庆', en: 'Chongqing, China' }
    },
    description: {
      zh: [
        '专业服务业的办公空间需要在「严谨」与「不冷漠」之间维持平衡。中税网办公室以一组克制的木作与暖灰色调切入,让原本容易显得程式化的办公场景获得了一层人文温度。',
        '会客与办公被两条平行的动线分开,客户从前厅经礼仪通道直达会议室,而员工的日常路径几乎不与之交叉。这种动线上的礼仪——而非物理上的隔绝——是空间「专业感」的真正来源。',
        '细部上,踢脚、灯具、门套与家具被纳入同一套比例系统,使整个空间在被反复使用中仍保持一种安静的克制。'
      ],
      en: [
        'Workplaces for professional-services firms must hold a delicate equilibrium between rigour and warmth. The CTN office steps into that interval through a restrained palette of timber joinery and warm grey — granting human texture to a setting that easily slips into the formulaic.',
        'Two parallel circulation paths separate client meetings from staff routines: clients move from foyer through a ceremonial corridor to the meeting rooms, while everyday traffic remains almost entirely outside that sequence. The professionalism of the space resides in this choreography of paths rather than in any physical wall.',
        'At the detail scale, skirtings, lighting, door surrounds and furniture are tied to a single proportional system, allowing the rooms to remain quietly composed even under constant daily use.'
      ]
    }
  },
  {
    slug: 'ruigao-intl',
    poeticTitle: { zh: '门厅', en: 'Threshold' },
    venue: { zh: '睿高国际总部', en: 'Ruigao International Headquarters' },
    type: { zh: '办公与零售', en: 'Office' },
    imageCount: 7,
    meta: {
      area: '2,200 m²',
      status: { zh: '建成', en: 'Built' },
      completion: { zh: '2024 年 7 月', en: 'July 2024' },
      duration: { zh: '2023 年 11 月 – 2024 年 7 月', en: 'Nov 2023 – Jul 2024' },
      location: { zh: '中国 重庆', en: 'Chongqing, China' }
    },
    description: {
      zh: [
        '一家国际化企业的总部门厅,是这家公司向外界递出的第一句话。睿高国际的门厅以材料的重量与光的留白共同书写气度——深色石材构成基座,雾面金属作为节点,一道贯通空间的天光让所有元素彼此沉默地呼应。',
        '门厅之上是开放办公区,我们刻意保留了一段大尺度的双层挑空,用一组悬挂式照明界定出公司的核心动线。这个动线既是接待路径,也是日常会议的集结点,让企业的「公共性」始终保持在场。',
        '所有的家具、标识与灯具均被纳入同一份图纸,并由设计师亲自跟进现场深化。这种从概念到落地的全程把控,是空间气质得以延续到细部的真正原因。'
      ],
      en: [
        'The headquarters lobby is the first sentence a company speaks to the world. At Ruigao International, that sentence is composed in the weight of material and the room of light — a dark stone plinth anchors the floor, matte metal punctuates each junction, and a continuous skylight allows the elements to address one another in silence.',
        'Above the lobby, the open workfloor preserves a generous double-height void, marked by a suspended lighting fixture that defines the building\'s core spine. This spine is at once arrival sequence and daily gathering point — keeping the company\'s public face continuously present.',
        'Furniture, signage and lighting are drawn into a single set of documents and personally followed through to site by the designer. This continuity from concept to construction is the real reason the spatial register reaches the smallest detail.'
      ]
    }
  },
  {
    slug: 'library',
    poeticTitle: { zh: '卷帙', en: 'Volume' },
    venue: { zh: '城市图书馆', en: 'City Library' },
    type: { zh: '公共与文化', en: 'Civic & Cultural' },
    imageCount: 15,
    meta: {
      area: '3,200 m²',
      status: { zh: '建成', en: 'Built' },
      completion: { zh: '2024 年 8 月', en: 'August 2024' },
      duration: { zh: '2023 年 9 月 – 2024 年 8 月', en: 'Sep 2023 – Aug 2024' },
      location: { zh: '中国', en: 'China' }
    },
    description: {
      zh: [
        '在一个被屏幕主导的时代,图书馆作为一种公共建筑类型,需要重新被叙述。本案不再以「藏书量」为度量,而是把空间还给阅读这件事本身——让人愿意停下来、坐下来、在一本书里逗留。',
        '主体阅览空间以连续的木色与纵向的书架序列组织,漫射光从顶部均匀落下,避免了阅读区任何一处出现尖锐的阴影。书架之间嵌入一组小尺度的「阅读龛」,提供个人独处的可能,而中央长桌则容纳协作与学习。',
        '材料的克制使图书馆在全龄段访客之间保持一种安静的中性——它不偏袒任何一类读者,只为「停留」这件事提供一处可被信赖的容器。'
      ],
      en: [
        'In an age dominated by screens, the library as a civic type calls for renewed authorship. The project moves past the metric of collection size, returning the space to the act of reading itself — to the willingness to pause, to sit, to remain a while with a book.',
        'The main reading volume is organised through a continuous palette of warm timber and the vertical rhythm of shelving. Diffused light falls evenly from above, sparing the reading area any sharp shadow. Small reading alcoves are nested between the shelves for solitary use, while a long central table holds collaboration and study.',
        'Material restraint keeps the library tonally neutral across all ages of visitor — favouring no single reader, offering instead a trustworthy vessel for the act of staying.'
      ]
    }
  },
  {
    slug: 'barbershop',
    poeticTitle: { zh: '镜亭', en: 'The Mirror Pavilion' },
    venue: { zh: '理发店', en: 'Barbershop' },
    type: { zh: '办公与零售', en: 'Retail' },
    imageCount: 2,
    meta: {
      area: '80 m²',
      status: { zh: '建成', en: 'Built' },
      completion: { zh: '2024 年 9 月', en: 'September 2024' },
      duration: { zh: '2024 年 7 月 – 2024 年 9 月', en: 'Jul 2024 – Sep 2024' },
      location: { zh: '中国 重庆', en: 'Chongqing, China' }
    },
    description: {
      zh: [
        '小尺度商业空间的设计,关键不在于堆叠元素,而在于做减法。理发店全店仅以一镜、一灯、一椅作为空间的核心语汇,其余皆是背景。',
        '一面通高的镜面墙将原本仅有 80 平米的店面在视觉上扩展为两倍,而镜中的对望让顾客与理发师之间的关系变得更为平等——这是被设计巧妙安排的礼仪。',
        '材料上,深色金属、暖白瓷砖与黑胡桃木以三比一的比例配合,使空间在仪式感与日常感之间获得了准确的平衡。'
      ],
      en: [
        'Small-scale retail rests not on accumulation but on subtraction. This barbershop reduces its core vocabulary to mirror, light and chair — the rest serves only as ground.',
        'A full-height mirror wall visually doubles the eighty-square-metre tenancy, while the reflected gaze rebalances the relationship between client and barber — a quiet act of choreography embedded in the design.',
        'Dark metal, warm white tile and black walnut combine in a roughly three-to-one ratio, allowing the room to land precisely between ritual and the everyday.'
      ]
    }
  }
];
