<template>
  <div class="row border border-dark">
    <div class="col-md-3 col-12 pt-2">
      <h5 class="pl-2">
        <router-link :to="{ name: 'Info', params: {bugId: bug.id} }">
          <span class="text-muted text-dark">{{ bug.title }}</span>
        </router-link>
      </h5>
    </div>
    <div class="col-md-4 col-12 pt-2">
      <h5 class="pl-2">
        {{ bug.creator.name }}
      </h5>
    </div>
    <div class="col-md-2 col-5 pt-2">
      <span class="d-flex" v-if="bug.closed === false">
        <h5 class="pl-2">Open </h5>
        <h5 class="pl-3 action" @click="close(bug.id)"> 🟢</h5>
      </span>
      <span class="d-flex" v-else>
        <h5 class="pl-2">Closed </h5>
        <h5 class="pl-1"> 🔴</h5>
      </span>
    </div>
    <div class="col-md-3 col-7 pt-2">
      <h5 class="pl-2">
        {{ date }}
      </h5>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
import { bugsService } from '../services/BugsService'
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
      date: computed(makeDate),
      async close(id) {
        try {
          if (await Pop.confirm('Ready To Close?', 'This cannot be reverted!', 'warning', 'Yes, Close It!')) {
            await bugsService.destroy(id)
            await bugsService.getAll()
          }
        } catch (error) {
          Pop.toast(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.action{
  cursor: pointer;
}
</style>
