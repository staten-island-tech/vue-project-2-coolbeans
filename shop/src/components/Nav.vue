<template>
  <div class="views">
    <span class="logo">
      <slot name="logo" />
    </span>
    <nav>
      <ul class="links">
        <li class="pages">
          <slot name="page" />
        </li>
      </ul>
    </nav>
    <div class="button">
      <slot name="clicky" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Form from "./Modal.vue";
export default {
  components: {
    Button,
    Form,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
.views {
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1%;
  align-items: baseline;
  background-color: var(--gray-black);
}
.logo {
  font-size: 6rem;
  padding: 1rem;
  margin-right: auto;
  padding-top: 0;
}

.pages {
  font-size: 3rem;
  padding: 1rem;
  margin: auto;
  margin-right: 0;
  list-style-type: none;
}
</style>
