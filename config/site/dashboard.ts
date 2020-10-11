import config from './index'
import Parser from 'rss-parser';

export const toolsList = [
  {
    url: 'https://www.zhangxinxu.com/sp/base64.html',
    urlTitle: '任意文件转base64'
  },
  {
    url: 'https://regexper.com/',
    urlTitle: 'Regexper | 正则匹配可视化'
  },
  {
    url: 'https://tool.lu/imageholder/?tdsourcetag=s_pctim_aiomsg',
    urlTitle: '图片占位'
  },
  {
    url: 'https://www.favicon-generator.org/',
    urlTitle: 'favicon生成'
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

export const fetchRSS = async (limit?: number) => {
  const parser = new Parser();
  const { items = [] } = await parser.parseURL(config.blogRSS);

  const result = items.map((item) => ({
    url: item.link || '',
    urlTitle: item.title || '',
    date: item.pubDate || ''
  }));

  limit && result.slice(0, limit);

  return result;
}
