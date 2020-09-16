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
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['newlists', 'followers', 'followings', 'projects', 'blogs'],
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
        path: '/social/follower/:id',
        component: './src/templates/FollowerDetail.vue'
      }
    ],
    StrapiFollowings: [
      {
        path: '/social/following/:id',
        component: './src/templates/FollowingDetail.vue'
      }
    ],
    StrapiProjects: [
      {
        path: '/project/detail/:id',
        component: './src/templates/ProjectDetail.vue'
      }
    ]
  }
}
