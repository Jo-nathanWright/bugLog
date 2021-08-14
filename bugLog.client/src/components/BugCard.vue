<template>
  <div class="col-md-3 border-left border-top border-bottom border-dark pt-2">
    <h5 class="pl-2">
      {{ bug.title }}
    </h5>
  </div>
  <div class="col-md-3 border-top border-bottom border-dark pt-2">
    <h5 class="pl-2">
      {{ bug.creator.name }}
    </h5>
  </div>
  <div class="col-md-3 border-top border-bottom border-dark pt-2">
    <span v-if="bug.closed === false">
      <h5 class="pl-2">Open 🟢</h5>
    </span>
    <span v-else>
      <h5 class="pl-2">Closed 🔴</h5>
    </span>
  </div>
  <div class="col-md-3 border-top border-bottom border-right border-dark pt-2">
    <h5 class="pl-2">
      {{ date }}
    </h5>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    function makeDate() {
      const front = props.bug.updatedAt.split('T')[0]
      const year = front.split('-')[0]
      const month = front.split('-')[1]
      const day = front.split('-')[2]
      const date = `${month}-${day}-${year}`
      return date
    }
    return {
      date: computed(makeDate)
    }
  }
}
</script>
