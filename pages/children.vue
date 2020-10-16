<template>
  <section class="container">
    <ul class="players">
      <li v-for="user in nested" :key="user.id">
        <NuxtLink :to="'/children/' + user.id">
          {{ user.name }}
        </NuxtLink>
      </li>
    </ul>
    <div class="right">
      <NuxtChild :key="$route.params.id" />
    </div>
  </section>
</template>

<script>
export default {
  name: "children",
  components: {},
  data() {
    return {
      nested: [
        { id: 0, name: "00" },
        { id: 1, name: "11" },
        { id: 2, name: "22" },
        { id: 3, name: "33" }
      ]
    };
  }
};
</script>
