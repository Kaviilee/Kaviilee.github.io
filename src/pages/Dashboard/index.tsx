import React from 'react';

import Empty from 'Components/Empty';
import { Card } from 'Components/Card';
import { fetchRSS, recommendList, toolsList, books } from 'Config/site/dashboard';
import { CustomLinks, LinkItem } from './components/CustomLinks';

import styles from './index.less';

export const Dashboard: React.FC = () => {
  const [latestPosts, setLatestPost] = React.useState<LinkItem[]>([]);

  React.useEffect(() => {
    fetchRSS(14).then((list) => {
      setLatestPost(list);
    });
  }, []);

  return (
    <section className={styles.container}>
      <Card title="最近文章">
        <CustomLinks links={latestPosts}></CustomLinks>
      </Card>
      <section className={styles.column}>
        <Card title="推荐阅读">
          <CustomLinks links={recommendList}></CustomLinks>
        </Card>
        <Card title="在线工具">
          <CustomLinks links={toolsList}></CustomLinks>
        </Card>
      </section>
      <Card title="前端书单">
        {books.map((book) => (
          <a href={book.url} className={styles.link} target="blank" key={book.urlTitle}>
            {book.urlTitle}
          </a>
        ))}
      </Card>
      <Card style={{ minHeight: 295 }}>
        <Empty></Empty>
      </Card>
    </section>
    // <Grid fluid>
    // <Row>
    //   <Col xs={12} md={6}>
    //     <Card title="最近文章">
    //       <CustomLinks links={latestPosts}></CustomLinks>
    //     </Card>
    //   </Col>
    //   <Col xs={12} md={6}>
    //     <Card title="最近文章">
    //       <CustomLinks links={latestPosts}></CustomLinks>
    //     </Card>
    //   </Col>
    // </Row>
    // </Grid>
    // <section className={styles.container}>

    //   <section className={styles.column}>
    //     <Card title="推荐阅读">
    //       <CustomLinks links={recommendList}></CustomLinks>
    //     </Card>
    //     <Card title="在线工具">
    //       <CustomLinks links={toolsList}></CustomLinks>
    //     </Card>
    //   </section>
    //   <Card style={{height: 300}}>
    //     <Empty></Empty>
    //   </Card>
    // </section>
  );
};

export default () => <Dashboard></Dashboard>;
