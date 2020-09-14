export default {
  data() {
    return {
      githubUsername: 'sylvanase',
      blogTitle: 'sylvanase',
      blogDescribe: '使用gridsome的博客作业。',
      htmlTitle: 'sylvanase的博客',
      fontColor: '#ffffff',
      useBackgroundImage: false,
      backgroundColorLeft: '#2690F9',
      backgroundColorRight: '#FC2D2D',
      audioUrl: 'http://music.163.com/song/media/outer/url?id=1442191755.mp3',
      mini: false,
      webSites: [{ name: 'baidu', url: 'https://www.baidu.com' }],
      avatarUrl:
        'https://avatars2.githubusercontent.com/u/15664476?s=400&u=c3551a8b93ff10297e9f0447f7634dca7ddd9c00&v=4',
      location: 'shanghai',
      constantRouterMap: [
        {
          path: '/',
          meta: {
            type: 'user',
            icon: 'el-icon-star-off',
            title: '最新动态',
          },
          children: [
            {
              path: 'main',
              meta: { title: '最新动态' },
            },
          ],
        },
        {
          path: '/user/social',
          meta: {
            type: 'user',
            icon: 'el-icon-mobile-phone',
            title: '社交圈',
          },
          children: [
            {
              path: 'main',
              meta: { title: '社交圈' },
            },
            {
              path: 'details/:name',
              meta: { title: '用户资料' },
            },
          ],
        },
        {
          path: '/user',
          meta: {
            type: 'user',
            icon: 'el-icon-edit-outline',
            title: '博客列表',
          },
          children: [
            {
              path: 'main',
              meta: { title: '博客列表' },
            },
            {
              path: 'add',
              meta: { title: '发表博客' },
            },
            {
              path: 'edit/:id',
              meta: { title: '编辑博客' },
            },
            {
              path: 'details/:id',
              meta: { title: '博客详情' },
            },
          ],
        },
        {
          path: '/user/project',
          meta: {
            type: 'user',
            icon: 'el-icon-service',
            title: '开源项目',
          },
          children: [
            {
              path: 'main',
              meta: { title: '项目列表' },
            },
            {
              path: 'details/:name',
              meta: { title: '项目详情' },
            },
          ],
        },
      ],
    }
  },
}
