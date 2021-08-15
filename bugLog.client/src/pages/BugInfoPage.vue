<template>
  <div class="row justify-content-center">
    <div class="col-md-11">
      <h6 class="pt-5">
        Title
      </h6>
      <h1 class="pl-2">
        {{ bug.title }}
      </h1>
    </div>
  </div>
  <div class="row pt-3 justify-content-center">
    <div class="col-md-9 col-12 d-flex">
      <div class="row">
        <div class="col">
          <h6 class="pt-2">
            Reported By:
          </h6>
        </div>
        <h3 class="pl-3">
          Person who reported
        </h3>
      </div>
    </div>
    <div class="col-md-2 d-flex justify-content-md-end ">
      <h6 class="pt-2">
        Status:
      </h6>
      <h3 class="pl-4 text-green" v-if="bug.closed === false">
        Open
      </h3>
      <h3 class="pl-4 text-red" v-else>
        Closed
      </h3>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-11 col-11 border border-dark">
      {{ bug.description }}
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
import { bugsService } from '../services/BugsService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'Info',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await bugsService.getById(route.params.bugId)
      } catch (error) {
        Pop.toast('Error Fetching That Bug : ', error)
      }
    })
    return {
      bug: computed(() => AppState.activeBug)
    }
  }
}
</script>
