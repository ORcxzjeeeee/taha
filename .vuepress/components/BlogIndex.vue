<template>
<div>
  <table class = "blog-index-list" v-bind:style="{direction: directionType}">
    <tbody>
      <tr v-for="post in posts">
        <td>{{ formateDate(post.frontmatter.date) }}</td>
        <td><router-link :to="post.path">{{ post.frontmatter.title }}</router-link></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import moment from "moment"

export default {
  props: {
    limit: 0,
    directionType: 'ltr'
  },
  methods: {
    formateDate(date, format = 'YYYY-MM-DD') {
      return moment(date).format(format)
    },
  },
  computed: {
    posts() {
      let posts = this.$site.pages
        .filter(post => !post.frontmatter.blog_index)
        .filter(post => !post.path.startsWith('/archived/'))
        .filter(post => post.path.startsWith(this.$route.path))
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
      if (this.limit > 0) {
        posts = posts.slice(0, this.limit);
      }
      
      if(this.$route.path.includes('/blog/fa')) {
        this.directionType = 'rtl'
        console.log(this.directionType)
      }

      return posts;
    }
  }
}
</script>

<style scoped>
@import "../../node_modules/vazir-font/dist/font-face.css";

.blog-index-list {
  font-family: Vazir;
  display: table;
  width: 100%;
  table-layout: auto;
}
.blog-index-list td {
  overflow: hidden;
  text-overflow: ellipsis;
}
.blog-index-list td:first-child {
  width: 1px;
  white-space: nowrap;
}
</style>