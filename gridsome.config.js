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
        contentTypes: ['newlists', 'followers', 'followings'],
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
  templates: {
    StrapiFollowers: [ // 集合的名字，与上方plugin对应关系
      {
        path: '/social/detail/:name',
        component: './src/templates/SocialDetail.vue'
      }
    ],
    StrapiFollowings: [
      {
        path: '/social/detail/:name',
        component: './src/templates/SocialDetail.vue'
      }
    ]
  }
}
