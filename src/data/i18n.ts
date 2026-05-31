export const t = {
  zh: {
    nav: { works: '作品', about: '工作室', contact: '联系我们' },
    site: {
      name: '涛-设计',
      brandZh: '涛-设计',
      brandEn: 'Tao-design',
      role: '全案设计'
    },
    works: {
      title: '作品',
      selected: '精选',
      all: '全部',
      back: '返回',
      relatedTitle: '相关作品',
      meta: {
        area: '面积',
        status: '项目状态',
        completion: '竣工时间',
        duration: '项目周期',
        location: '地址',
        type: '项目类型'
      }
    },
    about: {
      title: '工作室',
      paragraphs: [
        '涛-设计是一间立足于中国重庆的室内设计工作室,由设计师 黄涛 主理,自 2016 年起持续从事公共空间的设计实践,设计项目涵盖酒店、办公、医疗康养、地产与商业空间。',
        '我们相信,真正动人的空间从不是被「装饰」出来的,而是从结构、动线、光线与材质的关系之中,被一点点收拢出来的。在多种类型的反复切换中,逐渐形成了一种偏向克制、注重落地与材料关系的工作方式。',
        '在工作流上,我们坚持从概念草图直接进入施工细部,亲自跟进现场深化与节点把控,而不是让设计在「方案—深化—施工」的层层转译中被稀释。这种从始至终的全程介入,是我们对设计「落地性」的承诺。'
      ],
      credits: [
        '主理设计师 黄涛 · 现任 Tao-design 主案设计师',
        '本科毕业于 四川农业大学',
        '履历 曾任 马建国际建筑设计顾问有限公司-主任设计师 ',
        '         重庆银桥工程设计（集团）有限公司-方案设计师 ',
        '工作室 中国 重庆 渝北 金山意库3号楼'
      ]
    },
    contact: {
      title: '联系我们',
      lines: [
        ['工作室', '中国 重庆 渝北 金山意库3号楼'],
        ['项目合作', '644925133@qq.com'],
        ['电话', '177 2625 8047'],
        ['微信', '同手机号'],
        ['关注', 'WeChat · Xiaohongshu']
      ]
    },
    footer: {
      copy: '© 2026 涛-设计'
    }
  },
  en: {
    nav: { works: 'Works', about: 'Studio', contact: 'Contact' },
    site: {
      name: 'Tao-design',
      brandZh: '涛-设计',
      brandEn: 'Tao-design',
      role: 'End-to-End Design'
    },
    works: {
      title: 'Works',
      selected: 'Selected',
      all: 'All',
      back: 'Back',
      relatedTitle: 'Related Works',
      meta: {
        area: 'Area',
        status: 'Status',
        completion: 'Completion',
        duration: 'Duration',
        location: 'Location',
        type: 'Type'
      }
    },
    about: {
      title: 'Studio',
      paragraphs: [
        'Tao-design is an interior design studio based in Chongqing, China, led by designer Tao Huang. Since 2016, the studio has continued to work across public interior practices, with projects spanning hospitality, workplace, healthcare, real estate and commercial spaces.',
        'We believe that a truly moving space is never produced by decoration alone. It is gradually shaped through the relationships between structure, circulation, light and material. Moving repeatedly between different project types, the studio has developed a restrained working method that values buildability and the precise dialogue of materials.',
        'In our workflow, concept sketches are carried directly into construction details. We stay closely involved in site development and detail control, rather than allowing the design to be diluted through the conventional relay from concept to development to construction. This full-process involvement is our commitment to the realisation of design.'
      ],
      credits: [
        'Principal Designer · Tao Huang, Lead Designer at Tao-design',
        'B.A., Sichuan Agricultural University',
        'Experience — Lead Designer, Ma Jian International Architectural Design Consulting (2018–2022)',
        '                       Scheme Designer, Chongqing Yinqiao Engineering Design Group (2016–2018)',
        'Studio — 3F, Building 3, Jinshan Yiku, Yubei District, Chongqing, China'
      ]
    },
    contact: {
      title: 'Contact',
      lines: [
        ['Studio', 'Building 3, Jinshan Yiku, Yubei District, Chongqing, China'],
        ['Project enquiries', '644925133@qq.com'],
        ['Phone', '+86 177 2625 8047'],
        ['WeChat', 'Same as mobile'],
        ['Follow', 'WeChat · Xiaohongshu (TBD)']
      ]
    },
    footer: {
      copy: '© 2026 Tao-design'
    }
  }
} as const;

export type Lang = keyof typeof t;
