import ChartJson  from '../config/char_data.json';
import GridJson from '../config/grid_data.json';
export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const { method, headers } = opts;
        const body = opts.body && JSON.parse(opts.body);

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    
                    case url.endsWith('/chart/list') && method === 'GET':
                        return fetchChartList();
                    case url.endsWith('/grid/list') && method === 'GET':
                            return fetchgridList();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            
            function fetchChartList() {
                const chartList = ChartJson;
                return ok(chartList);
            }

            function fetchgridList() {
                const gridList = GridJson;
                return ok(gridList);
            }

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            
            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

        });
    }
}