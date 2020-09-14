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
          path: '/social',
          meta: {
            type: 'user',
            icon: 'el-icon-mobile-phone',
            title: '社交圈',
          },
        },
        {
          path: '/blog',
          meta: {
            icon: 'el-icon-edit-outline',
            title: '博客列表',
          },
        },
        {
          path: '/project',
          meta: {
            icon: 'el-icon-service',
            title: '开源项目',
          },
        },
      ],
    }
  },
}
