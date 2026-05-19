export const t = {
  zh: {
    nav: { works: '作品', about: '工作室', contact: '联络' },
    site: {
      name: '涛-设计',
      brandZh: '涛-设计',
      brandEn: 'T-design',
      role: '室内设计'
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
        '涛-设计是一间立足于中国重庆的室内设计工作室,由设计师张振宇主理,自 2016 年起持续从事工装空间的设计实践,作品涵盖酒店、办公、医疗康养、样板间与小型商业空间。',
        '工作室相信,真正动人的空间从不是被「装饰」出来的,而是从结构、动线、光线与材质的关系之中,被一点点收拢出来的。我们以「适用、实用、合理、完整」作为工作准则,在多种类型的反复切换中,逐渐形成了一种偏向克制、注重落地与材料关系的工作方式。',
        '在工作流上,我们坚持从概念草图直接进入施工细部,亲自跟进现场深化与节点把控,而不是让设计在「方案—深化—施工」的层层转译中被稀释。这种从始至终的全程介入,是我们对设计「落地性」的承诺。'
      ],
      credits: [
        '主理设计师 张振宇 · 现任 马健国际(重庆)主案设计师',
        '本科毕业于 四川农业大学 产品设计(室内/家具方向)',
        '风格语汇 现代极简 / 新中式 / LOFT',
        '工作工具 AutoCAD · SketchUp · Photoshop · 天正建筑 T20',
        '工作室 中国 重庆 渝中区'
      ]
    },
    contact: {
      title: '联络',
      lines: [
        ['工作室', '中国 重庆 渝中区'],
        ['项目合作', '644925133@qq.com'],
        ['电话', '177 2625 8047'],
        ['微信', '同手机号'],
        ['关注', 'WeChat · Xiaohongshu(待补充)']
      ]
    },
    footer: {
      copy: '© 2026 涛-设计'
    }
  },
  en: {
    nav: { works: 'Works', about: 'Studio', contact: 'Contact' },
    site: {
      name: 'T-design',
      brandZh: '涛-设计',
      brandEn: 'T-design',
      role: 'Interior Design'
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
        'T-design is an interior design studio based in Chongqing, China, led by designer Zhang Zhengyu. Since 2016, the studio has practiced exclusively in commercial interiors — hospitality, offices, healthcare, model homes and small-scale retail.',
        'We believe the spaces that move us are never the product of decoration, but are slowly drawn out of the relationships between structure, circulation, light and material. The studio works to a set of principles — applicability, utility, reason, completeness — and, across the constant shifting between project types, has arrived at a method that favours restraint, executable detail and the legible relationship of materials.',
        'Methodically, we move from concept sketch directly into construction detail, following each project personally onto site rather than allowing the design to be diluted across the standard concept–development–construction relay. This continuous involvement is, for us, the only honest commitment to a project actually being built.'
      ],
      credits: [
        'Founder · Zhang Zhengyu, Lead Designer at Ma Jian International (Chongqing)',
        'B.A., Product Design (Interiors / Furniture), Sichuan Agricultural University',
        'Working vocabularies — Modern minimalism / Contemporary Chinese / LOFT',
        'Tools — AutoCAD · SketchUp · Photoshop · Tangent T20',
        'Studio — Yuzhong District, Chongqing, China'
      ]
    },
    contact: {
      title: 'Contact',
      lines: [
        ['Studio', 'Yuzhong District, Chongqing, China'],
        ['Project enquiries', '644925133@qq.com'],
        ['Phone', '+86 177 2625 8047'],
        ['WeChat', 'Same as mobile'],
        ['Follow', 'WeChat · Xiaohongshu (TBD)']
      ]
    },
    footer: {
      copy: '© 2026 T-design'
    }
  }
} as const;

export type Lang = keyof typeof t;
