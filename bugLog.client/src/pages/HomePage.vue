<template>
  <div class="row justify-content-center mt-3">
    <div class="col-md-10 col-10 mb-2">
      <div class="row mb-2">
        <div class="col-md-1 col-4">
          <h3>Bugs</h3>
        </div>
        <div class="col-md-11 col-8 d-flex justify-content-end">
          <h4 class="action" data-toggle="modal" data-target="#Create">
            Report A Bug
          </h4>
        </div>
      </div>
      <div class="row border border-dark bg-dark text-light">
        <div class="col-md-3 col-12 pt-2">
          <h5>Title</h5>
        </div>
        <div class="col-md-4 col-12 pt-2">
          <h5>Reported By</h5>
        </div>
        <div class="col-md-2 col-5 pt-2">
          <h5>Status</h5>
        </div>
        <div class="col-md-3 col-7 pt-2">
          <h5>Last Modified</h5>
        </div>
      </div>
      <div>
        <BugCard v-for="b in bugs" :key="b.id" :bug="b" />
      </div>
    </div>
  </div>

  <!-- Modal For Bug Reports -->
  <div class="modal fade" id="Create" tabindex="-1" aria-labelledby="CreateLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="CreateLabel">
            Report Bug
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="create()">
            <div class="form-group">
              <label for="exampleFormControlInput1">Title</label>
              <input type="text"
                     class="form-control"
                     id="exampleFormControlInput1"
                     v-model="state.newBug.title"
                     placeholder="Bug Title..."
                     required
              >
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Bug Infomation</label>
              <textarea class="form-control"
                        id="exampleFormControlTextarea1"
                        v-model="state.newBug.description"
                        placeholder="Bug Info..."
                        rows="4"
                        required
              ></textarea>
            </div>
            <hr>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary mr-3">
                Submit
              </button>
              <button type="button" class="btn btn-light" data-dismiss="modal">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { bugsService } from '../services/BugsService'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      newBug: { }
    })
    onMounted(async() => {
      try {
        await bugsService.getAll()
      } catch (error) {
        Pop.toast('Error fetching Bugs : ', error)
      }
    })
    return {
      state,
      bugs: computed(() => AppState.bugs),
      async create() {
        try {
          await bugsService.create(state.newBug)
          await bugsService.getAll()
          state.newBug = {}
        } catch (error) {
          Pop.toast('We couldn\'t report that bug')
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
