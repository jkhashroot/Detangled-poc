import { BASE_URL } from '../config';
export const chartService = {
    fetchChartList,
    fetchGridList
   
};

function fetchChartList() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    console.log('Reached chart service');
    return fetch(`${BASE_URL}/chart/list` , requestOptions)
        .then(handleResponse)
        .then(chartList => {
            

            return chartList;
        });
}

function fetchGridList() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return fetch(`${BASE_URL}/grid/list` , requestOptions)
        .then(handleResponse)
        .then(gridList => {
            return gridList;
        });
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
