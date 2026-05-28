import { importedProjectMedia } from './project-media.generated';

export type WorkCategorySlug = 'selected' | 'residential' | 'office' | 'commercial' | 'exhibition' | 'hotel';

export type ProjectMedia = {
  slug: string;
  name: string;
  year: number;
  category: WorkCategorySlug;
  cover: string;
  images: string[];
  plans: string[];
  heroImages: string[];
};

export type Project = ProjectMedia & {
  description: {
    zh: string;
    en: string;
  };
};

export const workCategories: {
  slug: WorkCategorySlug;
  label: { zh: string; en: string };
}[] = [
  { slug: 'selected', label: { zh: '精选', en: 'Selected' } },
  { slug: 'residential', label: { zh: '住宅', en: 'Residential' } },
  { slug: 'office', label: { zh: '办公', en: 'Office' } },
  { slug: 'commercial', label: { zh: '商业', en: 'Commercial' } },
  { slug: 'exhibition', label: { zh: '展厅', en: 'Exhibition' } },
  { slug: 'hotel', label: { zh: '酒店', en: 'Hotel' } }
];

const projectDescriptions: Record<string, Project['description']> = {
  'youyang-yuejianli': {
    zh: '面向山景的公共空间与客房以温暖木色连接，窗景、灯光与低矮家具共同营造安静的停留感。',
    en: 'Facing the mountain view, shared spaces and guest rooms are tied together in warm timber, soft light and low furniture for a quiet sense of pause.'
  },
  'qingai-wensu': {
    zh: '项目以明亮庭院串联住宿与公共活动，克制的白色界面和木质细部让室内更接近日常居住。',
    en: 'Bright courtyards connect accommodation and shared activity, while restrained white surfaces and timber details bring the interior close to everyday dwelling.'
  },
  'daying-yongyi-hotel': {
    zh: '深色木格栅、挑空空间与层叠灯光塑造出具有仪式感的酒店公共区域，并延续至客房体验。',
    en: 'Dark timber screens, lofty volumes and layered lighting form a ceremonial hotel interior that continues into the guest-room experience.'
  },
  'ctn-office': {
    zh: '开放办公区以清晰的结构和通透界面组织协作，浅色材料让工作环境保持明亮、平静。',
    en: 'The open workplace is organised by clear structure and transparent boundaries, with a pale material palette keeping the setting bright and calm.'
  },
  'tech-office': {
    zh: '裸露顶面与线性灯光形成有秩序的办公背景，木色和软装为理性的空间加入适度温度。',
    en: 'Exposed ceilings and linear light create an ordered workplace backdrop, softened by timber tones and carefully placed furnishings.'
  },
  library: {
    zh: '环形书架与中央阅读空间构成连续的浏览路径，暖色木材与天光强调阅读的沉浸感。',
    en: 'Circular shelving and a central reading field form a continuous route, with warm timber and overhead light reinforcing immersion in books.'
  },
  'ruigao-international': {
    zh: '鲜明色彩与框景式动线赋予空间识别度，开放展示与休憩区域在连续序列中展开。',
    en: 'Strong colour and framed circulation give the interior its identity, unfolding display and lounge spaces as one continuous sequence.'
  },
  'rongchang-residence': {
    zh: '住宅以舒展的公共起居空间为核心，木作、浅色织物与自然采光形成温和的居住氛围。',
    en: 'The home centres on a generous living space, where joinery, pale textiles and daylight create a gentle domestic atmosphere.'
  },
  'house-2025': {
    zh: '紧凑住宅通过木质界面与通透开口整合功能，在有限尺度中保持光线和空间的流动。',
    en: 'Timber surfaces and open thresholds consolidate the compact home, preserving light and spatial flow within a limited footprint.'
  },
  'yidun-residence': {
    zh: '室内以连续客餐厅组织家庭生活，暖色木作与窗边绿意回应轻松、自然的日常状态。',
    en: 'A continuous living and dining area organises family life, with warm joinery and garden views supporting an easy, natural routine.'
  },
  'tianchen-villa': {
    zh: '多层住宅通过开敞客厅与庭院视线建立联系，细腻石材和木色控制空间的安静质感。',
    en: 'The multi-level home connects living areas to courtyard views, using refined stone and timber tones to hold a quiet material character.'
  },
  'show-flat-2025': {
    zh: '样板间以简洁体块和柔和色调铺陈生活场景，客厅与卧室在一致的细节语言中展开。',
    en: 'Simple volumes and soft tones stage the model home, carrying a consistent language of detail from living room to bedroom.'
  },
  'duplex-residence': {
    zh: '跃层空间借由挑高尺度与明暗层次增强纵向体验，公共区保持开放而富有层次。',
    en: 'Double-height proportions and tonal layering strengthen the vertical experience of the duplex, keeping shared areas open yet articulated.'
  },
  'residence-2024': {
    zh: '浅色木作、柔和软装与充足采光共同构成清爽的家庭空间，功能布置直接而舒适。',
    en: 'Pale joinery, soft furnishings and abundant daylight produce a fresh family interior with direct, comfortable organisation.'
  },
  'taoyuan-residence': {
    zh: '公共空间围绕客厅与餐区展开，沉稳木色和克制陈设强调住宅的松弛与秩序。',
    en: 'Living and dining spaces anchor the home, where grounded timber tones and restrained furnishing bring ease and order together.'
  },
  'vanke-yuewan': {
    zh: '开阔景观面成为住宅主线，客餐厅与卧室以统一的木色和柔光回应窗外视野。',
    en: 'An expansive outlook drives the interior, with living spaces and bedrooms responding through a unified timber palette and gentle light.'
  },
  'lvdao-townhouse': {
    zh: '联排住宅采用偏深的材质与精细陈设塑造稳重气质，不同功能房间保持一致的尺度感。',
    en: 'Darker finishes and detailed furnishing lend the townhouse a composed character, maintained consistently across its rooms.'
  },
  'smart-medical-office': {
    zh: '接待、会议与展示区域由柔和曲面和浅木色串联，专业空间呈现安定而友好的形象。',
    en: 'Reception, meeting and display areas are joined by gentle curves and pale timber, presenting a calm and welcoming professional setting.'
  },
  'jinxiao-office': {
    zh: '办公空间以黑白对比和开放会议场景形成清晰识别，通透隔断保持交流与专注的平衡。',
    en: 'Strong black-and-white contrast and open meeting settings define the workplace, while glazed boundaries balance exchange with focus.'
  },
  'hengshui-office': {
    zh: '大堂与共享空间通过木格栅、天光和连续动线组织，营造适合交流的办公公共界面。',
    en: 'Lobby and shared areas are structured by timber screens, daylight and continuous circulation, forming a social workplace frontage.'
  },
  'zhongsite-office': {
    zh: '低饱和材质与平整光线构成稳健的商务环境，接待与办公之间保持简洁的空间过渡。',
    en: 'Muted materials and even lighting shape a steady business interior, with concise transitions between reception and work areas.'
  },
  'majian-office': {
    zh: '开放工位、书架与会议空间被置于明亮框架之中，呈现适合设计工作的灵活氛围。',
    en: 'Open desks, shelving and meeting areas sit within a bright framework, creating a flexible setting for design work.'
  },
  'indian-restaurant': {
    zh: '拱形语汇、暖色灯光和图案地面共同构成浓郁的用餐氛围，入口与大厅具有清晰记忆点。',
    en: 'Arched forms, warm lighting and patterned flooring build a rich dining atmosphere, giving both entrance and hall a clear identity.'
  },
  'chongqing-spa': {
    zh: '深色石材与局部照明收拢视线，接待与护理空间呈现内向、安静的休憩体验。',
    en: 'Dark stone and focused lighting draw the gaze inward, shaping reception and treatment rooms as a quiet retreat.'
  },
  'artisan-barbershop': {
    zh: '理发空间以白色基调和均匀顶光强化洁净感，镜面工位形成清晰高效的使用秩序。',
    en: 'A white palette and even overhead light reinforce clarity, while mirrored stations establish an efficient working order.'
  },
  barbershop: {
    zh: '紧凑空间通过镜面、灰白材质与简洁工位配置放大视觉尺度，保持轻盈的服务体验。',
    en: 'Mirrors, pale finishes and concise stations enlarge the compact interior visually while keeping the service experience light.'
  },
  'ruilibao-retail': {
    zh: '透明展示界面与醒目的品牌装置围合出开放店面，灯光重点强化产品与入口识别。',
    en: 'Transparent display surfaces and prominent brand elements frame an open storefront, with focused light strengthening entry and product presence.'
  },
  'xian-poly-sales-center': {
    zh: '销售中心以中央装置和开阔洽谈区组织到访流程，冷静的材质组合衬托展示主题。',
    en: 'A central installation and broad consultation area organise arrival, while a cool material palette supports the display narrative.'
  },
  'guotan-store': {
    zh: '木色货架、暖光与街面开口形成亲近的零售界面，产品陈列成为空间的主要表达。',
    en: 'Timber shelving, warm light and an open street frontage create an approachable retail setting led by product display.'
  },
  'guiyang-shopping-center': {
    zh: '商业体以清晰体量和开放到达界面回应城市环境，整体形象强调可见性与聚集感。',
    en: 'Clear massing and an open arrival edge respond to the urban setting, giving the commercial complex visibility and a sense of gathering.'
  },
  'poly-pool-club': {
    zh: '泳池、健身与更衣空间以明亮线性界面组织，水面与采光共同强化空间的舒展感。',
    en: 'Pool, fitness and changing spaces are organised by bright linear surfaces, with water and daylight amplifying openness.'
  },
  'love-valley-sales-center': {
    zh: '挑高木构空间围绕展示与洽谈展开，结构节奏和景观界面构成项目的主要特征。',
    en: 'A tall timber-framed volume gathers display and consultation areas, defined by structural rhythm and landscape-facing edges.'
  },
  'tesla-showroom': {
    zh: '展车空间以强烈品牌色与开敞界面回应产品展示需求，清晰动线连接到访与体验。',
    en: 'Strong brand colour and open frontage serve the vehicle display, with clear movement linking arrival and experience.'
  },
  'qianfang-gallery': {
    zh: '展陈、阅读与活动场景在拱形构件和多样光环境中切换，形成可自由游走的综合空间。',
    en: 'Display, reading and event scenes shift through arched elements and varied light conditions, forming a freely navigable mixed-use interior.'
  },
  'xiahao-gallery': {
    zh: '深色屋架与连续白墙构成沉静的展览背景，作品被置于清晰、克制的观看序列中。',
    en: 'Dark roof structure and continuous white walls form a quiet exhibition ground, setting works within a clear and restrained viewing sequence.'
  },
  'great-hall-gallery': {
    zh: '狭长空间以天光、色彩装置和连续展墙组织参观路径，在转换中保持节奏变化。',
    en: 'Skylight, coloured installations and continuous display walls guide movement through the long gallery with measured changes of rhythm.'
  },
  'sichuan-hotel': {
    zh: '餐厅与客房以轻暖色调和简洁构造统一呈现，空间表达更贴近舒适、日常的旅居体验。',
    en: 'Dining and guest rooms share a light, warm palette and concise detailing, placing comfort at the centre of the stay.'
  },
  'haikou-hotel': {
    zh: '明亮材质与开放公共区回应度假气息，客房延续轻盈色彩与松弛的起居布置。',
    en: 'Bright finishes and open public areas answer a resort atmosphere, continued in guest rooms through light colour and relaxed living layouts.'
  },
  'chengtuo-hotel': {
    zh: '弧形界面、金属细节与柔和灯光营造精致的到达体验，客房保持安静而温润的尺度。',
    en: 'Curved surfaces, metal details and soft light refine the arrival experience, while guestrooms remain quiet and warmly scaled.'
  },
  'jinfoshan-lodge-chongqing': {
    zh: '民宿以餐厅、客房与室外景观建立连续关系，深木色和暖光加强山居的包裹感。',
    en: 'Dining, guestrooms and outdoor views form a continuous lodge experience, enclosed by dark timber and warm light.'
  },
  'jinfoshan-lodge': {
    zh: '木结构气质贯穿公共区与客房，开敞立面将自然景观带入简洁而温暖的室内。',
    en: 'A timber character runs through shared spaces and guestrooms, with open facades drawing landscape into a simple, warm interior.'
  },
  'jiayu-hotel-renovation': {
    zh: '改造后的客房与配套空间采用沉稳色调和细部灯光，重建酒店的安静休憩体验。',
    en: 'Renovated rooms and amenity spaces use composed tones and detailed lighting to restore a calm hospitality experience.'
  },
  'tenglong-hotel': {
    zh: '入口大堂与客房以明晰的材质层次组织，公共空间的通透感延续至住宿体验。',
    en: 'Lobby and guestrooms are organised through clear material layers, carrying the openness of public space into the stay.'
  }
};

const editorialDescriptions: Partial<Record<string, Project['description']>> = {
  'youyang-yuejianli': {
    zh: '项目将山地旅居的松弛感转译为连续的室内体验：以温润木色、低照度光线与面向景观的开口，建立大堂到客房之间安静而克制的过渡。空间不追求装饰性的喧闹，而是在材质触感与停留尺度中回应一段缓慢的度假日常。',
    en: 'The retreat translates its mountain setting into a continuous hospitality experience. Warm timber, low-level light and landscape-facing openings create a restrained transition from shared spaces to guestrooms, allowing material texture and measured scale to shape a slower stay.'
  },
  'qingai-wensu': {
    zh: '院落与室内被组织为层层展开的日常场景，通透界面将光线、植物与人的活动引入同一条游走路径。白色基底配合细腻木作，使民宿在清朗之外保留亲切、可居的温度。',
    en: 'Courtyards and interiors unfold as a sequence of everyday scenes, drawing light, planting and movement into a shared route. A white base and finely detailed timber keep the guesthouse clear in expression while gently domestic in atmosphere.'
  },
  'daying-yongyi-hotel': {
    zh: '挑空公共区域以深色木格栅与垂直光线强化到达仪式，形成沉稳而具有识别度的酒店核心。由大堂延伸至客房的材质节奏被有意收敛，使公共气度与休憩感保持平衡。',
    en: 'A tall public volume is defined by dark timber screens and vertical light, giving arrival a composed ceremonial presence. The material rhythm quietens toward the guestrooms, balancing public grandeur with the intimacy of rest.'
  },
  'ctn-office': {
    zh: '清晰的动线与透明界面重新组织办公协作关系，接待、会议及工作区域在连续视线中保持联系。浅色材料与均匀照明削弱边界压力，呈现专业而开放的工作氛围。',
    en: 'Clear circulation and transparent boundaries reorganise collaboration, keeping reception, meeting and work areas visually connected. Pale materials and even lighting reduce the weight of enclosure to create an open yet professional workplace.'
  },
  'tech-office': {
    zh: '裸露顶面与线性灯光构成理性的空间骨架，开放工位和交流节点在秩序中自然展开。木色介入冷静的技术语汇，为高效办公加入适当的触感与停留意愿。',
    en: 'An exposed ceiling and linear lighting establish a rational spatial framework in which desks and informal meeting points unfold with clarity. Timber accents temper the technical language, adding tactility and a reason to pause.'
  },
  library: {
    zh: '环形书架与中央阅读场地共同构成可探索的知识场景，连续曲线将视线和步行路径轻柔牵引。温暖木色与点状天光营造沉浸氛围，使阅读成为空间中的核心活动。',
    en: 'Circular shelving and a central reading field create an exploratory setting for books, with continuous curves guiding both sight and movement. Warm timber and patterned overhead light make reading the quiet centre of the interior.'
  },
  'ruigao-international': {
    zh: '鲜明色彩与框景式构件建立到达记忆，展示、交流与休憩被串联成富有节奏的连续界面。空间以开放的姿态回应品牌识别，同时维持轻盈而有秩序的使用体验。',
    en: 'Bold colour and framed elements give arrival a memorable identity, linking display, conversation and lounge areas in a rhythmic sequence. The interior expresses the brand openly while retaining a light and ordered experience.'
  },
  'rongchang-residence': {
    zh: '公共起居区以舒展比例承载家庭生活，自然采光穿过木作与织物，形成柔和且稳定的日常背景。空间的精致来自尺度、触感与收纳秩序的协调，而非外显装饰。',
    en: 'A generous living area accommodates family life while daylight moves across joinery and textiles to form a soft, stable backdrop. Refinement is achieved through proportion, tactility and ordered storage rather than overt decoration.'
  },
  'house-2025': {
    zh: '紧凑住宅以整合木作释放有限面积，开放门洞保持视线与光线的流动。功能被收纳于简洁的界面之中，使日常活动获得清爽、从容的空间余量。',
    en: 'Integrated joinery frees the compact home while open thresholds preserve the movement of light and views. Functions are absorbed into quiet surfaces, leaving everyday life a clear and unhurried setting.'
  },
  'yidun-residence': {
    zh: '连续的客餐厅面向自然展开，将家庭聚合与窗外景致置于同一生活轴线。细腻木作和低饱和软装控制空间语气，让居住感在克制中显得温润。',
    en: 'A continuous living and dining space opens toward nature, placing family gathering and outward views along one domestic axis. Fine joinery and muted furnishings hold a warm residential character within a restrained language.'
  },
  'tianchen-villa': {
    zh: '多层住宅借助开敞尺度与庭院视线建立上下空间的关联，石材与木饰面呈现平静、持久的质感。光线在不同高度间缓慢移动，使居住体验兼具开阔与私密。',
    en: 'Open proportions and courtyard views connect the levels of the villa, with stone and timber establishing a calm, enduring material character. Light shifts through different heights, balancing openness with privacy.'
  },
  'show-flat-2025': {
    zh: '样板空间以简洁体块和柔和色调描绘真实可感的生活图景，避免过度陈设对空间尺度的干扰。客厅至卧室延续统一细节，使观看过程自然转化为居住想象。',
    en: 'Simple volumes and gentle tones stage a credible image of living without crowding the proportions with display. Consistent detailing from living room to bedroom lets viewing turn naturally into an idea of home.'
  },
  'duplex-residence': {
    zh: '跃层住宅以挑高空间作为公共生活的视觉中心，明暗材质的层次强化纵向伸展感。上下层之间保持开放联系，同时通过细部控制建立安静的居住秩序。',
    en: 'A double-height volume becomes the visual centre of shared life, with tonal layers reinforcing its vertical reach. The two levels remain connected while controlled detailing gives the home a quiet order.'
  },
  'residence-2024': {
    zh: '住宅以浅色木作、柔和织物和充足日光形成轻盈的家庭氛围，功能关系直接而不失舒适。克制的材料组合让空间在长期使用中保有清爽与松弛。',
    en: 'Pale joinery, soft textiles and abundant daylight establish a light family atmosphere with direct yet comfortable organisation. A restrained material palette allows the home to remain fresh and relaxed over time.'
  },
  'taoyuan-residence': {
    zh: '客厅与餐厨围绕家庭交流展开，稳定木色为开放公共区域提供温和背景。陈设被控制在恰当分寸之内，使空间表达更关注日常行为与居住节奏。',
    en: 'Living and dining areas are organised around family interaction, with grounded timber providing a warm background to the open public zone. Furnishing is measured so the interior remains centred on routine and rhythm.'
  },
  'vanke-yuewan': {
    zh: '宽阔景观成为室内组织的起点，起居、餐饮与休息空间均以面向窗外的姿态展开。统一木色与柔光弱化室内边界，让视野成为住宅最重要的材质。',
    en: "The expansive outlook becomes the starting point of the interior, orienting living, dining and resting spaces toward the view. Unified timber tones and gentle light soften boundaries, allowing the landscape to act as the home's principal material."
  },
  'lvdao-townhouse': {
    zh: '联排住宅通过偏深材质与精细陈设确立沉稳气质，不同功能房间在同一尺度逻辑下延续。空间既保有私宅的包裹感，也以细节回应更从容的生活方式。',
    en: 'Darker finishes and carefully judged furnishings establish a composed townhouse character carried consistently between rooms. The interior retains a sense of enclosure while detailing supports a more unhurried way of living.'
  },
  'smart-medical-office': {
    zh: '接待、展示与会议空间以柔和曲面和浅木色建立亲和的专业形象，动线清晰且具有引导性。光线和材质共同缓解医疗办公的距离感，使交流更自然。',
    en: 'Reception, display and meeting areas use gentle curves and pale timber to create an approachable professional identity. Clear circulation, light and material soften the distance often associated with medical workplaces.'
  },
  'jinxiao-office': {
    zh: '黑白对比构成明确的办公基调，玻璃界面让会议、交流与专注工作保持可见关联。空间以简洁秩序支撑效率，同时保留团队互动的开放性。',
    en: 'Black-and-white contrast sets a precise workplace tone, while glazed boundaries keep meeting, exchange and focused work visibly connected. Concise organisation supports efficiency without closing down team interaction.'
  },
  'hengshui-office': {
    zh: '大堂与共享区域以木格栅、天光和连续流线组织，形成具有停留价值的办公前厅。空间将接待形象与日常交流并置，使公共界面兼具秩序和温度。',
    en: 'Timber screens, daylight and continuous circulation structure the lobby and shared areas as a workplace frontage worth occupying. Reception presence and everyday exchange are held together in a public interface of order and warmth.'
  },
  'zhongsite-office': {
    zh: '低饱和材料和均匀光线控制商务空间的语气，接待到工作区之间形成清楚而安静的过渡。精简界面弱化视觉噪音，将注意力留给沟通与工作本身。',
    en: 'Muted materials and even light control the tone of the business interior, establishing a clear and quiet transition from reception to workplace. Reduced surfaces limit visual noise and leave focus for communication and work.'
  },
  'majian-office': {
    zh: '开放工位、书架和讨论空间被置于轻盈框架中，形成可调整的设计工作环境。明亮背景与灵活节点鼓励交流，也为专注状态保留适当边界。',
    en: 'Open desks, shelving and discussion zones sit within a light framework to form an adaptable design workplace. A bright backdrop and flexible nodes invite exchange while preserving suitable limits for concentration.'
  },
  'indian-restaurant': {
    zh: '拱形构件、图案地面与温暖灯光共同塑造富有层次的餐饮氛围，入口即建立清晰记忆。座席之间的尺度与光影变化，使用餐过程呈现由热烈至亲密的节奏。',
    en: 'Arched elements, patterned flooring and warm lighting build a layered dining atmosphere with an immediate sense of arrival. Changes in scale and illumination between seats allow the experience to move from lively to intimate.'
  },
  'chongqing-spa': {
    zh: '深色石材与局部照明将感官收拢于安静的护理体验，接待和休憩空间保持内向而克制。触感丰富的表面与柔弱光线共同制造脱离日常的缓慢时间。',
    en: 'Dark stone and focused lighting draw the senses inward toward a quiet treatment experience, keeping reception and rest areas composed. Textured surfaces and soft light create a slower interval apart from daily life.'
  },
  'artisan-barbershop': {
    zh: '明亮基调与均匀照明强化理发空间的洁净和专业感，镜面工位以清晰节奏排布。有限面积因此获得开阔视觉，同时维持高效、舒适的服务流程。',
    en: 'A bright palette and even illumination reinforce a clean professional salon atmosphere, with mirrored stations arranged in a clear rhythm. The compact footprint gains visual breadth while maintaining an efficient, comfortable service flow.'
  },
  barbershop: {
    zh: '镜面与灰白材质将紧凑店面放大为轻盈的服务空间，简洁工位保持动线流畅。克制设计将注意力集中于体验本身，也让小尺度空间显得更从容。',
    en: 'Mirrors and pale grey materials enlarge the compact shop into a light service environment, with concise stations preserving easy movement. Restrained design keeps attention on the experience and lends the small footprint calmness.'
  },
  'ruilibao-retail': {
    zh: '透明展示界面与醒目品牌构件形成开放店面，产品在精准灯光下获得清晰层次。由入口至展示深处的视线连续，强化零售空间的到达感和识别度。',
    en: 'Transparent display planes and prominent brand elements form an open storefront, giving products clarity under precise light. Continuous views from entry into the display field strengthen arrival and retail identity.'
  },
  'xian-poly-sales-center': {
    zh: '中央装置与开阔洽谈区共同组织参观路径，材质的冷静质感为展示内容提供稳定背景。空间通过尺度与视线的控制，将到达、了解和交流编排为连续体验。',
    en: 'A central installation and broad consultation area organise the visitor route, with cool, composed materials supporting the display content. Scale and sightlines sequence arrival, discovery and conversation as one experience.'
  },
  'guotan-store': {
    zh: '木色货架与暖光构成亲近的街边零售表情，开放入口使陈列直接参与城市界面。空间以产品为主角，在朴素材质中建立可停留的日常消费氛围。',
    en: 'Timber shelving and warm light form an approachable street retail expression, with the open entry letting display participate directly in the urban edge. Products remain central within a modest, inhabitable shopping atmosphere.'
  },
  'guiyang-shopping-center': {
    zh: '清晰体量和开放到达面回应城市流量，将商业建筑塑造成易识别的聚集场所。立面与入口的连续关系强化公共性，使消费活动自然连接外部街区。',
    en: 'Clear massing and an open arrival edge respond to urban movement, shaping the commercial building as a legible gathering place. The continuous relationship between facade and entrance strengthens its public role and connection to the street.'
  },
  'poly-pool-club': {
    zh: '泳池、健身和更衣功能以明亮线性界面组织，水面反光延展了室内的水平尺度。干净材质与自然采光共同强化运动空间的舒展、清新感受。',
    en: 'Pool, fitness and changing facilities are organised through bright linear surfaces, with reflected water extending the interior horizontally. Clean materials and daylight reinforce a generous, fresh environment for activity.'
  },
  'love-valley-sales-center': {
    zh: '挑高木构空间围绕展示与洽谈展开，结构节奏直接成为室内最鲜明的表达。面向景观的界面引入自然光线，让销售场景获得更具停留感的公共气质。',
    en: 'A tall timber-framed volume gathers display and consultation around the expressive rhythm of its structure. Landscape-facing edges admit natural light, lending the sales setting a more inhabitable public character.'
  },
  'tesla-showroom': {
    zh: '开放展厅以纯粹界面和品牌色回应车辆展示，通透到达路径保持产品的视觉主导地位。空间语言直接而精准，将参观过程转化为清晰、高效的体验序列。',
    en: 'The open showroom uses pure surfaces and brand colour to serve the vehicles, with transparent arrival paths maintaining their visual priority. Direct and precise spatial language turns a visit into a clear, efficient sequence.'
  },
  'qianfang-gallery': {
    zh: '展陈、阅读与活动功能在拱形构件和多层光环境中自由转换，形成可漫游的复合文化空间。不同尺度的停留节点让作品观看与公共交流彼此交织。',
    en: 'Exhibition, reading and event uses move freely through arched elements and layered light, forming a navigable cultural interior. Pauses at varied scales allow viewing and public exchange to overlap naturally.'
  },
  'xiahao-gallery': {
    zh: '深色屋架与连续白墙构成沉静的展览背景，作品在被净化的观看序列中获得突出位置。光线与尺度被压低处理，使参观者更专注于作品和空间之间的关系。',
    en: 'Dark roof structure and continuous white walls provide a quiet exhibition ground, allowing works to occupy a purified viewing sequence. Reduced light and scale encourage attention to the relationship between art and room.'
  },
  'great-hall-gallery': {
    zh: '狭长展厅由天光、色彩装置与连续展墙引导参观方向，移动过程具有明确节拍。空间在不同节点调整光线和视野，使线性路径保持丰富而不过度喧闹。',
    en: 'Skylight, coloured installations and continuous walls direct movement through the long gallery with a measured rhythm. Adjustments of light and view at key moments keep the linear route varied without becoming overstated.'
  },
  'sichuan-hotel': {
    zh: '餐厅与客房采用轻暖色调和简洁构造建立一致的旅居气质，以舒适而非装饰制造记忆。细部控制光线与触感，让短暂停留也具有安定的生活尺度。',
    en: 'Dining and guestrooms share a light, warm language of concise construction, placing comfort rather than ornament at the centre of memory. Detailed control of light and touch gives even a short stay a settled domestic scale.'
  },
  'haikou-hotel': {
    zh: '明亮材料与开敞公共区回应滨海度假的轻松氛围，流动动线让到达过程保持清爽。客房延续轻盈色彩和松弛布置，将外部气候转化为室内感受。',
    en: 'Bright materials and open public spaces answer the ease of a coastal stay, with flowing circulation keeping arrival fresh. Guestrooms continue the light palette and relaxed arrangement, translating climate into interior atmosphere.'
  },
  'chengtuo-hotel': {
    zh: '弧形界面、金属细节与柔和灯光塑造精致到达体验，大堂具有明确而不张扬的识别度。客房将材质语言适度收敛，在温润尺度中提供安静休憩。',
    en: 'Curved planes, metal details and softened lighting refine the arrival experience, giving the lobby identity without excess. In the guestrooms the material language recedes, offering quiet rest at a warm human scale.'
  },
  'jinfoshan-lodge-chongqing': {
    zh: '餐厅、客房与山景之间建立连续关系，深木色和暖光强化林地旅居的包裹感。公共空间向自然打开，而私密区域保持内敛，使度假体验拥有清楚层次。',
    en: 'Dining, guestrooms and mountain views are joined in a continuous relationship, with dark timber and warm light enhancing the shelter of a woodland stay. Public spaces open outward while private areas remain inward and quiet.'
  },
  'jinfoshan-lodge': {
    zh: '木构气质贯穿共享空间与客房，开敞立面将景观带入简洁的室内背景。设计以材质真实感和光线变化回应山居状态，在朴素表达中保留温度。',
    en: 'A timber character runs across shared spaces and guestrooms, while open facades draw the landscape into a simple interior background. Material authenticity and changing light respond to mountain living with understated warmth.'
  },
  'jiayu-hotel-renovation': {
    zh: '改造以沉稳色调和精确照明重建酒店的休憩体验，旧有空间获得更清晰的秩序与质感。客房及配套区域在统一语言中更新，使停留回归安静与舒适。',
    en: "The renovation rebuilds the hotel's sense of rest through composed tones and precise lighting, giving existing spaces clearer order and texture. Rooms and amenities are renewed in one language, returning the stay to quiet comfort."
  },
  'tenglong-hotel': {
    zh: '入口大堂以明晰的材质层次组织到达与停留，公共空间呈现通透而从容的气度。相同的细节逻辑延伸至客房，让旅居过程从第一印象到休息状态保持连续。',
    en: 'The entrance lobby organises arrival and pause through clear material layers, offering an open and unhurried public presence. The same detailing continues into guestrooms so the stay remains coherent from first impression to rest.'
  }
};

export const projects: Project[] = importedProjectMedia.map((media) => ({
  ...media,
  description: editorialDescriptions[media.slug] ?? projectDescriptions[media.slug]
}));

export const selectedProjects = projects.filter((project) => project.category === 'selected');

export const homeSlides = selectedProjects.flatMap((project) => (
  project.heroImages.map((image) => ({ project, image }))
));

export const getProjectCategorySlug = (project: Project): WorkCategorySlug => project.category;
