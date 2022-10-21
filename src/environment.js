const Environment = {
    production: (process.env.REACT_APP_PRODUCTION === 'true'),
    // production: false,
    api: process.env.REACT_APP_API,
    // api: 'http://192.168.106.248:8000/',
    statics: process.env.REACT_APP_STATICS
}

export default Environment;


