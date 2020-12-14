import React, { useEffect } from "react";
import Plot from 'react-plotly.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChartDetailsAction } from '../actions';
import { Skeleton } from "antd"

function PanelChart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChartDetailsAction.fetchChartList());
  }, []);
  const isLoading = useSelector(state => state.chartListReducer.isChartLoading);
  const chartData = useSelector(state => state.chartListReducer.chartList);



  function showChart() {
    if (isLoading) {
      return <Skeleton />
    } else {
      return (
        <Plot
          data={chartData}
          layout={{ width: 550, height: 450, title: 'Chart' }}
          config={{responsive : true}}
        />
      );
    }

  }


  return (<React.Fragment>
    {showChart()}
  </React.Fragment>)
}

export { PanelChart }