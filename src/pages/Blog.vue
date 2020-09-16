<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card shadow="never" style="margin-bottom: 20px">
        <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
        <el-button icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
        <el-button
          @click="$share()"
          style="margin-left: 10px"
          icon="el-icon-share"
          type="warning"
          plain
          circle
        ></el-button>
        <el-button
          type="primary"
          icon="el-icon-edit"
          round
          plain
          style="float: right;"
          @click="goAdd"
        >
        写博文
        </el-button>
      </el-card>

      <div v-if="blogList&&blogList.length>0">
        <el-card
          shadow="hover"
          v-for="(item,index) in blogList"
          :key="'p'+index"
          style="margin-bottom: 20px"
        >
          <div slot="header">
            <el-row>
              <el-col :span="16">
                <span>
                  <g-link
                  :to="'/blog/detail/' + item.id"
                  >
                    <i class="el-icon-edit-outline"></i>
                    &nbsp;&nbsp; {{item.title}}
                  </g-link>
                </span>
              </el-col>
              <el-col :span="8">
                <div style="text-align: right;">
                  <el-button
                    @click="$share('/blog/detail/'+item.id)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-share"
                  ></el-button>
                  <!-- <el-button
                    @click="editBlog(item.id)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-edit"
                  ></el-button> -->
                  <!-- <el-button @click="deleteBlog(item.id)" style="padding: 3px 0" type="text" icon="el-icon-delete"></el-button> -->
                </div>
              </el-col>
            </el-row>
          </div>
          <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">最近更新 {{item.updateTime}}</div>
          <div
            style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px"
          >{{item.description}}</div>
        </el-card>
      </div>

      <el-card
        shadow="never"
        style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
        v-if="blogList.length==0"
      >
        <font style="font-size: 30px;color:#dddddd ">
          <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
        </font>
      </el-card>
    </div>
  </Layout>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return {
      blogList: [],
      searchKey: ''
    }
  },
  mounted(){
    this.list()
  },
  methods: {
    async list() {
      const {data} = await axios({
        method: 'GET',
        url: 'http://101.133.173.90:1337/blogs'
      })
      console.log(data);
      this.blogList = data;
    },
    goAdd() {
      this.$router.push('/blog/add')
    },
  }
};
</script>

<style>
</style>