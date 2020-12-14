import { CHART_CONSTANTS } from "../constants";
const initialChartState = {
    chartList: [],
    isChartLoading: false,
    gridList: [],
    isGridLoading: false
}

const chartListReducer = (state = initialChartState, action) => {
    switch (action.type) {
        case CHART_CONSTANTS.LOADING_CHART_TYPE:
            return {
                ...state,
                isChartLoading: true,
            };

        case CHART_CONSTANTS.FETCH_CHART_LIST:
            return {
                ...state,
                isChartLoading: false,
                chartList: action.chartList
            };
        case CHART_CONSTANTS.LOADING_GRID_LIST:
            return {
                ...state,
                isGridLoading: true,
            };

        case CHART_CONSTANTS.FETCH_GRID_LIST:
            return {
                ...state,
                isGridLoading: false,
                gridList: action.gridList
            };

        default:
            return state;
    }
};

export default chartListReducer