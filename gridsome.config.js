module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost', 
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['newlists'],
        // singleTypes: ['general'],
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],
  transformers:{
    remark: {
    }
  },
}
