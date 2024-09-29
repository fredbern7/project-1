const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'Contacts Api',
        desciption: 'Contacts Api'
    },
    host: 'https://project-1-t0mj.onrender.com/',
    schemes: ['http', 'https']
};

const outputFile = 'swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);