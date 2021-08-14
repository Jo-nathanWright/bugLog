<template>
  <div class="col-md-3 border-left border-top border-bottom border-dark pt-2">
    <h5>{{ bug.title }}</h5>
  </div>
  <div class="col-md-3 border-top border-bottom border-dark pt-2">
    <h5>{{ bug.creator.name }}</h5>
  </div>
  <div class="col-md-3 border-top border-bottom border-dark pt-2">
    <span v-if="bug.closed === false">
      <h5>Open 🟢</h5>
    </span>
    <span v-else>
      <h5>Closed 🔴</h5>
    </span>
  </div>
  <div class="col-md-3 border-top border-bottom border-right border-dark pt-2">
    <h5>{{ bug.updatedAt.split("T")[0] }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
  setup() {

  }
}
</script>
