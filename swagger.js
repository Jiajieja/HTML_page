const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })

const doc = {
  info: {
    version: '1.0.0',
    title: 'Restful API of Artshow',
    description: 'Documentation automatically generated by the <b>swagger-autogen</b> module.'
  },
  host: '127.0.0.1:3000',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {
    Artist: {
      name: 'name',
      bio: 'I feel lucky',
      id: 123,
      avatar: 'http://example.jpg'
    },
    Artwork: {
      url: '',
      author_id: '',
      id: 12
    }
  }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./routes.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./server.js') // Your project's root file
})
