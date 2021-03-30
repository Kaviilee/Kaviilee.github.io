import Parser from 'rss-parser';
import config from './index';

export const toolsList = [
  {
    url: 'https://tc39.es/ecma262/',
    urlTitle: 'ECMAScript Language Specfication'
  },
  {
    url: 'https://regexper.com/',
    urlTitle: 'Regexper | 正则匹配可视化'
  },
  {
    url: 'https://tool.lu/imageholder/?tdsourcetag=s_pctim_aiomsg',
    urlTitle: '图片占位 | 生成空白占位图片'
  },
  {
    url: 'https://www.favicon-generator.org/',
    urlTitle: 'favicon 生成 | 生成成套的favicon'
  },
  {
    url: 'https://github.com/conwnet/github1s',
    urlTitle: 'Github1s | One second to read GitHub code with VS Code.'
  },
  {
    url: 'https://github.com/trending',
    urlTitle: 'Github Trending | See what the GitHub community is most excited about today.'
  },
  {
    url: 'https://iconpark.bytedance.com/',
    urlTitle: 'IconPark | Bytedance icon source.'
  }
];

export const recommendList = [
  {
    url: 'https://www.codesky.me/',
    urlTitle: '敖天羽的博客'
  },
  {
    url: 'https://www.zhangxinxu.com/',
    urlTitle: '张鑫旭的个人主页'
  },
  {
    url: 'https://www.liaoxuefeng.com/',
    urlTitle: '廖雪峰的官方网站'
  }
];

export const books = [
  {
    url: 'https://book.douban.com/subject/10546125/',
    urlTitle: 'JavaScript高级程序设计'
  },
  {
    url: 'https://book.douban.com/subject/26745943/',
    urlTitle: 'CSS揭秘'
  },
  {
    url: 'https://es6.ruanyifeng.com/',
    urlTitle: 'ES6标准入门'
  }
]

export const fetchRSS = async (limit?: number) => {
  const parser = new Parser();
  const { items = [] } = await parser.parseURL(config.blogRSS);

  const result = items.map((item) => ({
    url: item.link || '',
    urlTitle: item.title || '',
    date: item.pubDate || ''
  }));

  let res = [] as typeof result

  limit && (res = result.slice(0, limit));

  return res;
}
