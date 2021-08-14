<template>
  <div class="row justify-content-center mt-3">
    <div class="col-md-10">
      <h3>Bugs</h3>
      <div class="row">
        <div class="col-md-3 border-left border-top border-bottom border-dark pt-2">
          <h5>Title</h5>
        </div>
        <div class="col-md-3 border-top border-bottom border-dark pt-2">
          <h5>Reported By</h5>
        </div>
        <div class="col-md-3 border-top border-bottom border-dark pt-2">
          <h5>Status</h5>
        </div>
        <div class="col-md-3 border-top border-bottom border-right border-dark pt-2">
          <h5>Last Modified</h5>
        </div>
      </div>
      <div class="row">
        <BugCard v-for="b in bugs" :key="b.id" :bug="b" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { bugsService } from '../services/BugsService'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await bugsService.getAll()
      } catch (error) {
        Pop.toast('Error fetching Bugs : ', error)
      }
    })
    return {
      bugs: computed(() => AppState.bugs)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
