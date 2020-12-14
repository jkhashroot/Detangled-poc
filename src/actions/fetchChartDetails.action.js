import { CHART_CONSTANTS } from "../constants/";
import {chartService} from "../services/chartService";
import { alertActions } from "./alert.actions";

//create new trip

export const fetchChartDetailsAction = {
    fetchChartList,
    fetchGridList
};

function fetchChartList() {
    return dispatch => {
        dispatch(request());

        chartService.fetchChartList()
            .then(
                chart => { 
                    console.log(chart);

                    const trace1 = {
                        x: [],
                        y: [],
                        type: 'bar'
                    };
                    chart.map((chartItem) => {
                        trace1.x.push(chartItem.name);
                        trace1.y.push(chartItem.value);
                    })
                      
                    const data = [trace1];
                      
                    dispatch(success(data));
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: CHART_CONSTANTS.LOADING_CHART_TYPE, chartList : [] }}
    function success(data) { return { type: CHART_CONSTANTS.FETCH_CHART_LIST, chartList : data } }
}


function fetchGridList() {
    return dispatch => {
        dispatch(request());

        chartService.fetchGridList()
            .then(
                grid => { 
                    grid = grid.map((item , index) => {
                         item.key = index
                         return item;
                    })
                    dispatch(success(grid));
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: CHART_CONSTANTS.LOADING_GRID_LIST, gridList : [] }}
    function success(data) { return { type: CHART_CONSTANTS.FETCH_GRID_LIST, gridList : data } }
}
