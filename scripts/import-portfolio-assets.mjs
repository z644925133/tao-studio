import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceRoot = process.env.PORTFOLIO_SOURCE ?? 'E:/工作/成果';
const siteRoot = path.resolve(import.meta.dirname, '..');
const outputRoot = path.join(siteRoot, 'public', 'portfolio');
const generatedDataFile = path.join(siteRoot, 'src', 'data', 'project-media.generated.ts');

const categoryDefinitions = [
  { folder: '精选', slug: 'selected', label: { zh: '精选', en: 'Selected' } },
  { folder: '住宅', slug: 'residential', label: { zh: '住宅', en: 'Residential' } },
  { folder: '办公', slug: 'office', label: { zh: '办公', en: 'Office' } },
  { folder: '商业', slug: 'commercial', label: { zh: '商业', en: 'Commercial' } },
  { folder: '展厅', slug: 'exhibition', label: { zh: '展厅', en: 'Exhibition' } },
  { folder: '酒店', slug: 'hotel', label: { zh: '酒店', en: 'Hotel' } }
];

const slugByProject = {
  '精选/01 2023 酉阳悦涧里民宿': 'youyang-yuejianli',
  '精选/02 2022 青艾文宿': 'qingai-wensu',
  '精选/03 2019 四川 大英永逸酒店': 'daying-yongyi-hotel',
  '精选/04 2023 中税网办公室': 'ctn-office',
  '精选/05 2024 科技办公室': 'tech-office',
  '精选/06 2023 图书馆': 'library',
  '精选/07 2023 睿高国际': 'ruigao-international',
  '住宅/2019 莱芜·绿岛花园联排别墅': 'lvdao-townhouse',
  '住宅/2023 万科悦湾': 'vanke-yuewan',
  '住宅/2024 住宅': 'residence-2024',
  '住宅/2024 桃源世家': 'taoyuan-residence',
  '住宅/2025 HUOSE': 'house-2025',
  '住宅/2025 伊顿庄园': 'yidun-residence',
  '住宅/2025 天辰雅墅': 'tianchen-villa',
  '住宅/2025 样板间': 'show-flat-2025',
  '住宅/2025 跃层住宅': 'duplex-residence',
  '住宅/2026 荣昌住宅': 'rongchang-residence',
  '办公/2019 马健国际建筑设计办公室': 'majian-office',
  '办公/2020 衡水研发办公楼': 'hengshui-office',
  '办公/2020 重庆中斯加特集团办公室': 'zhongsite-office',
  '办公/2022 重庆办公金消': 'jinxiao-office',
  '办公/2024 智慧医药': 'smart-medical-office',
  '商业/2018 特斯拉专卖店': 'tesla-showroom',
  '商业/2018 重庆 爱情谷 销售中心': 'love-valley-sales-center',
  '商业/2019 贵州国坛直营店': 'guotan-store',
  '商业/2019 贵阳保税区大数据购物中心': 'guiyang-shopping-center',
  '商业/2019 重庆.保利天汇泳池': 'poly-pool-club',
  '商业/2020 西安保利和光尘樾售房部': 'xian-poly-sales-center',
  '商业/2023 理发店': 'barbershop',
  '商业/2023 重庆 瑞利宝': 'ruilibao-retail',
  '商业/2024 北京 匠人理发': 'artisan-barbershop',
  '商业/2025 印度餐厅': 'indian-restaurant',
  '商业/2025 重庆 SPA会所': 'chongqing-spa',
  '展厅/2024 下浩展厅': 'xiahao-gallery',
  '展厅/2024 重庆大礼堂展厅': 'great-hall-gallery',
  '展厅/2025 千方综合厅': 'qianfang-gallery',
  '酒店/2019  重庆 佳宇英皇酒店改造': 'jiayu-hotel-renovation',
  '酒店/2019 达州腾龙酒店': 'tenglong-hotel',
  '酒店/2020 重庆 金佛山民宿': 'jinfoshan-lodge-chongqing',
  '酒店/2020 金佛山民宿': 'jinfoshan-lodge',
  '酒店/2024 城拓酒店': 'chengtuo-hotel',
  '酒店/2025 四川酒店': 'sichuan-hotel',
  '酒店/2025 海口酒店': 'haikou-hotel'
};

const plansByProject = {
  '精选/01 2023 酉阳悦涧里民宿': ['图片1.png'],
  '精选/02 2022 青艾文宿': ['图片13.png'],
  '住宅/2023 万科悦湾': ['图片12.png'],
  '住宅/2024 桃源世家': ['图片23.png'],
  '住宅/2025 伊顿庄园': ['图片34.png'],
  '住宅/2025 天辰雅墅': ['图片2.png'],
  '住宅/2026 荣昌住宅': ['图片46.png'],
  '商业/2018 特斯拉专卖店': ['13.jpg'],
  '商业/2023 重庆 瑞利宝': ['图片25.png']
};

const categoryOverrides = {
  '精选/01 2023 酉阳悦涧里民宿': 'hotel',
  '精选/02 2022 青艾文宿': 'hotel'
};

const heroPattern = /^(01|02|03)\.(jpe?g|png|webp)$/i;
const imagePattern = /\.(jpe?g|png|webp)$/i;
const preferredPattern = /(大堂|大厅|客厅|入口|门头|前厅|接待|展厅|餐厅|外观|沙盘|泳池)/;
const lastPattern = /(卫生间|主卫|女卫|男更衣|更衣间|过道|走廊)/;

function getYear(name) {
  const cleanedName = name.replace(/^\d{2}\s+(?=\d{4}\s)/, '');
  const matched = cleanedName.match(/^(\d{4})\s/);
  return matched ? Number(matched[1]) : 2024;
}

function getDisplayName(name) {
  return name
    .replace(/^\d{2}\s+(?=\d{4}\s)/, '')
    .replace(/^\d{4}\s+/, '')
    .trim();
}

function rankImage(file, isSelected) {
  if (isSelected && heroPattern.test(file)) return Number(file.slice(0, 2));
  if (/^0?1\.(jpe?g|png|webp)$/i.test(file)) return 8;
  if (preferredPattern.test(file)) return 10;
  if (lastPattern.test(file)) return 90;
  return 40;
}

function sourceKey(categoryFolder, sourceName) {
  return `${categoryFolder}/${sourceName}`;
}

async function createWebp(source, target, width, quality) {
  await sharp(source)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(target);
}

function asTypeScript(value) {
  return JSON.stringify(value, null, 2);
}

const relativeOutput = path.relative(siteRoot, outputRoot);
if (relativeOutput !== path.join('public', 'portfolio')) {
  throw new Error(`Refusing to clear unexpected output directory: ${outputRoot}`);
}

await fs.rm(outputRoot, { recursive: true, force: true });
await fs.mkdir(outputRoot, { recursive: true });

const mediaProjects = [];
let sourceImageCount = 0;

for (const category of categoryDefinitions) {
  const categoryRoot = path.join(sourceRoot, category.folder);
  const directoryEntries = await fs.readdir(categoryRoot, { withFileTypes: true });
  const projects = directoryEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((left, right) => {
      if (category.slug === 'selected') {
        return left.localeCompare(right, 'zh-CN', { numeric: true });
      }
      return getYear(right) - getYear(left) || left.localeCompare(right, 'zh-CN', { numeric: true });
    });

  for (const sourceName of projects) {
    const key = sourceKey(category.folder, sourceName);
    const slug = slugByProject[key];
    if (!slug) throw new Error(`Missing slug mapping: ${key}`);

    const projectRoot = path.join(categoryRoot, sourceName);
    const targetRoot = path.join(outputRoot, slug);
    const allFiles = (await fs.readdir(projectRoot))
      .filter((file) => imagePattern.test(file));
    const planFiles = new Set(plansByProject[key] ?? []);
    const projectCategory = categoryOverrides[key] ?? category.slug;
    const isSelected = projectCategory === 'selected';
    const imageFiles = allFiles
      .filter((file) => !planFiles.has(file))
      .sort((left, right) => (
        rankImage(left, isSelected) - rankImage(right, isSelected)
        || left.localeCompare(right, 'zh-CN', { numeric: true })
      ));
    const drawingFiles = allFiles
      .filter((file) => planFiles.has(file))
      .sort((left, right) => left.localeCompare(right, 'zh-CN', { numeric: true }));
    const heroFiles = isSelected
      ? imageFiles.filter((file) => heroPattern.test(file)).slice(0, 3)
      : [];

    await fs.mkdir(targetRoot, { recursive: true });
    const images = [];
    const plans = [];
    const heroImages = [];

    for (const [index, file] of imageFiles.entries()) {
      const outputName = `image-${String(index + 1).padStart(2, '0')}.webp`;
      await createWebp(path.join(projectRoot, file), path.join(targetRoot, outputName), 1920, 76);
      images.push(`/portfolio/${slug}/${outputName}`);
    }

    for (const [index, file] of drawingFiles.entries()) {
      const outputName = `plan-${String(index + 1).padStart(2, '0')}.webp`;
      await createWebp(path.join(projectRoot, file), path.join(targetRoot, outputName), 2200, 82);
      plans.push(`/portfolio/${slug}/${outputName}`);
    }

    for (const [index, file] of heroFiles.entries()) {
      const outputName = `hero-${String(index + 1).padStart(2, '0')}.webp`;
      await createWebp(path.join(projectRoot, file), path.join(targetRoot, outputName), 2200, 74);
      heroImages.push(`/portfolio/${slug}/${outputName}`);
    }

    await createWebp(path.join(projectRoot, imageFiles[0]), path.join(targetRoot, 'cover.webp'), 1400, 80);
    sourceImageCount += allFiles.length;
    mediaProjects.push({
      slug,
      name: getDisplayName(sourceName),
      year: getYear(sourceName),
      category: projectCategory,
      cover: `/portfolio/${slug}/cover.webp`,
      images,
      plans,
      heroImages
    });
  }
}

const categoryOrder = categoryDefinitions.map((category) => category.slug);
mediaProjects.sort((left, right) => {
  const categoryDifference = categoryOrder.indexOf(left.category) - categoryOrder.indexOf(right.category);
  if (categoryDifference !== 0) {
    return categoryDifference;
  }
  if (left.category === 'selected') {
    return 0;
  }
  return right.year - left.year || left.name.localeCompare(right.name, 'zh-CN', { numeric: true });
});

const generatedSource = `/* Generated by scripts/import-portfolio-assets.mjs from E:/工作/成果. */\n`
  + `import type { ProjectMedia } from './projects';\n\n`
  + `export const importedProjectMedia: ProjectMedia[] = ${asTypeScript(mediaProjects)};\n`;

await fs.writeFile(generatedDataFile, generatedSource, 'utf8');
console.log(`Imported ${mediaProjects.length} projects / ${sourceImageCount} source images.`);
console.log(`Optimised assets: ${outputRoot}`);
console.log(`Media manifest: ${generatedDataFile}`);
