import React from 'react';
import { connect } from 'dva';
import { Table, Pagination } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './ArticleList.css';
import { PAGE_SIZE } from '../../constants';

function ArticleList({ dispatch, list: dataSource, loading, total, page: current }) {
  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/article',
      query: { page },
    }));
  }

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '图片',
      dataIndex: 'img',
      key: 'img',
      render: (text, record) => (
        <img src={record.img} style={{ height: 20 }} alt={record.title} />
      ),
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
          ${record.id}
        </span>
      ),
    },
  ];
  return (
    <div className={styles.normal}>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={false}
      />
      <Pagination
        className="ant-table-pagination"
        total={total}
        current={current}
        pageSize={PAGE_SIZE}
        onChange={pageChangeHandler}
      />
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.article;
  return {
    loading: state.loading.models.article,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(ArticleList);
