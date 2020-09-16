<template>
  <div>
    <el-card shadow="never">
      <el-menu >
        <g-link
          class="nav-link"
          :to="item.path"
          v-for="item in constantRouterMap"
          :key="item.path"
        >
          <el-menu-item
            :class="{'is-active': path === item.path}"
          >
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
        </g-link>
        
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
      menuList: []
    };
  },
  computed: {
    path() {
      return this.$route.path;
    },
  },
};
</script>