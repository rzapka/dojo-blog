<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" >
      <PostList :posts="posts" />
      <TagCloud :posts="posts"/>
  </div>
    <div v-else>
      <Spinner />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner";
import TagCloud from "../components/TagCloud";
export default {

  name: 'Home',
  components: {
    TagCloud,
    Spinner,
    PostList,
  },
  setup() {
    const {posts, error, load} = getPosts()

    load()

    return {posts, error}
  },
}
</script>
