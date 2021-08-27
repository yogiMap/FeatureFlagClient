import React from 'react';
import { get } from 'lodash';
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { Link, withRouter } from 'umi';
import { RouteComponentProps } from 'react-router-dom';

import { IGroup } from '@/pages/group/types';
import ActionMenu from '@/pages/group/dashboard/search/ActionMenu';

interface IProps extends RouteComponentProps {
  items: IGroup[];
}

const GroupViewFlagList = (props: IProps) => {
  const queryParams = get(props, 'location.query', {});
  const items = get(props, 'items', []);

  const columns: ColumnProps<IGroup>[] = [
    {
      title: 'Name',
      key: 'name',
      render: (row) => <Link to={`/group/${row._id}`}>{row.name}</Link>,
    },
    {
      title: 'Value',
      key: 'value',
      dataIndex: 'value',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      className: 'actions',
      width: 80,
      render: (row) => <ActionMenu row={row} queryParams={queryParams} />,
    },
  ];

  return (
    <Table
      rowKey="_id"
      columns={columns}
      dataSource={items}
      size="middle"
      className="table-middle"
      pagination={false}
    />
  );
};

// state: any
const mapStateToProps = () => ({});

//dispatch: any
const mapDispatchToProps = () => ({});

export default withRouter(GroupViewFlagList);
