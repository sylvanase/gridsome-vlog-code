<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active" @select="onSelect">
        <el-menu-item
          v-for="item in constantRouterMap"
          :key="item.path"
          :index="item.path"
        >
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
import CommonConfig from "../../config/common";
export default {
  mixins: [CommonConfig],
  data() {
    return {
      active: "",
      parentUrl: "",
      menuList: []
    };
  },
  mounted() {
    let arr = this.$route.path.split("/");
    console.log(this.$route.path);
    console.log(arr);
    this.active = "/" + arr[1] + "/" + arr[2];
  },
  methods: {
    onSelect(index) {
        this.$router.push(index)
    },
    // openTokenDialog() {
    //     this.$refs.tokenDialog.open(() => {
    //     })
    // },
    // cancellation() {
    //     this.$store.dispatch("Cancellation")
    // }
  }
};
</script>