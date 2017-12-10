import React from 'react';
import { connect } from 'dva';
import styles from './Article.css';
import ArticleList from '../components/Article/ArticleList';
import MainLayout from '../components/MainLayout/MainLayout';

function Article({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ArticleList />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Article);
