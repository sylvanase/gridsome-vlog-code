<template>
<Layout>
  <div>
    <el-card shadow="never" style="min-height: 400px;margin-bottom: 20px;padding: 0px 0px 20px 0px">
      <el-tabs v-model="activeTab" type="card" @tab-click="onSelect">
        <el-tab-pane :label="'粉丝 '+$page.followers.totalCount" name="followers" style="padding: 5px">
          <div>
            <div v-if="$page.followers.edges.length">
              <el-row style="min-height: 200px; ">
                <el-col
                  :span="8"
                  v-for="(item,index) in $page.followers.edges"
                  :key="'followers'+index"
                  style="padding: 10px"
                >
                  <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                    <i class="el-icon-star-off"></i>&emsp;
                    <g-link :to="'/social/follower/' + item.node.id">{{item.node.name}}</g-link>
                    <br />
                    <i class="el-icon-message"></i>&emsp;
                    <a
                      :href="item.node.htmlUrl"
                      target="_blank"
                      style=" text-decoration:none;cursor:pointer"
                    >TA的主页</a>
                    <br />
                    <img
                      :src="'http://101.133.173.90:1337'+item.node.avatarUrl.url"
                      style="width: 100%;border-radius:5px;margin-top: 5px"
                    />
                  </el-card>
                </el-col>
              </el-row>
              <div style="text-align: center;margin-top: 10px">
              </div>
            </div>
            <div
              style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
              v-else
            >
              <font style="font-size: 30px;color:#dddddd ">
                <b>(￢_￢) 没有一个粉丝</b>
              </font>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="'关注 '+$page.followings.totalCount" name="following" style="padding: 5px">
          <div>
            <div v-if="$page.followings.edges.length">
              <el-row style="min-height: 200px; ">
                <el-col
                  :span="8"
                  v-for="(item,index) in $page.followings.edges"
                  :key="'following'+index"
                  style="padding: 10px"
                >
                  <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                    <i class="el-icon-star-off"></i>&emsp;
                    <g-link :to="'/social/following/' + item.node.id ">{{item.node.name}}</g-link>
                    <br />
                    <i class="el-icon-message"></i>&emsp;
                    <a
                      :href="item.node.htmlUrl"
                      target="_blank"
                      style=" text-decoration:none;cursor:pointer"
                    >TA的主页</a>
                    <br />
                    <img
                      :src="'http://101.133.173.90:1337' + item.node.avatarUrl.url"
                      style="width: 100%;border-radius:5px;margin-top: 5px"
                    />
                  </el-card>
                </el-col>
              </el-row>
              <div style="text-align: center;margin-top: 10px">
              </div>
            </div>
            <div
              style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
              v-else
            >
              <font style="font-size: 30px;color:#dddddd ">
                <b>(￢_￢) 还没有关注一个人</b>
              </font>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</Layout>
</template>
<page-query>
query ($page: Int){
  followers: allStrapiFollowers (perPage: 10, page: $page) @paginate{
    totalCount
    pageInfo {
      perPage
      currentPage
      totalPages
      totalItems
    }
    edges {
	    node {
        id
        name
        htmlUrl
        avatarUrl {
            url
        }
      } 
    }
  }

  followings: allStrapiFollowings (perPage: 10, page: $page) @paginate{
    totalCount
    pageInfo {
      perPage
      currentPage
      totalPages
      totalItems
    }
    edges {
		node {
            id
            name
            htmlUrl
            avatarUrl {
                url
            }
        } 
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      activeTab: "followers",
    };
  },
  methods: {
    onSelect() {
    //   switch (this.activeTab) {
    //     case "followers":
    //       this.listFollowers();
    //       break;
    //     case "following":
    //       this.listFollowing();
    //       break;
    //     default:
    //       break;
    //   }
    },
    listFollowers() {
      this.followers.loading = true;
    //   UserApi.followers(this.followers.query)
    //     .then(response => {
    //       let result = response.data;
    //       let pageNumber = this.$util.parseHeaders(response.headers);
    //       if (pageNumber) {
    //         this.followers.query.pageNumber = pageNumber;
    //       }
    //       this.followers.list = [];
    //       for (let i = 0; i < result.length; i++) {
    //         let data = {};
    //         data.name = result[i]["login"];
    //         data.avatarUrl = result[i]["avatar_url"];
    //         data.htmlUrl = result[i]["html_url"];
    //         this.followers.list.push(data);
    //       }
    //     })
    //     .then(() => (this.followers.loading = false));
    },
    listFollowing() {
      this.following.loading = true;
    //   UserApi.following(this.following.query)
    //     .then(response => {
    //       let result = response.data;
    //       let pageNumber = this.$util.parseHeaders(response.headers);
    //       if (pageNumber) {
    //         this.following.query.pageNumber = pageNumber;
    //       }
    //       this.following.list = [];
    //       for (let i = 0; i < result.length; i++) {
    //         let data = {};
    //         data.name = result[i]["login"];
    //         data.avatarUrl = result[i]["avatar_url"];
    //         data.htmlUrl = result[i]["html_url"];
    //         this.following.list.push(data);
    //       }
    //     })
    //     .then(() => (this.following.loading = false));
    }
  }
};
</script>