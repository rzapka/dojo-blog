<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="filteredPosts.length">
    <PostList :posts="filteredPosts"/>
    <TagCloud :posts="posts"/>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import {computed} from "vue";
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import {useRoute} from "vue-router";
import TagCloud from "../components/TagCloud";
export default {
  name: "Tag",
  components: {TagCloud, Spinner, PostList},
  props: ['tag'],
  setup() {
    const {posts, error , load} = getPosts()
    const route = useRoute()
    load()

    const filteredPosts = computed(() => {
      return posts.value.filter(post => post.tags.includes(route.params.tag))
    })
    return {posts, error, filteredPosts}
  }
}
</script>

<style scoped>

</style>