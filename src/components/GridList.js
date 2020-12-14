import React, { useEffect } from "react";
import Plot from 'react-plotly.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChartDetailsAction } from '../actions';
import { Skeleton , Table } from "antd"

function GridList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChartDetailsAction.fetchGridList());
  }, []);
  const isLoading = useSelector(state => state.chartListReducer.isGridLoading);
  const gridData = useSelector(state => state.chartListReducer.gridList);
  const columns = [
    {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
      },
      {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      }
  ]


  function showChart() {
    if (isLoading) {
      return <Skeleton />
    } else {
      return (
        <Table columns={columns} dataSource={gridData} size="small"/>
      );
    }

  }


  return (<React.Fragment>
    {showChart()}
  </React.Fragment>)
}

export { GridList }