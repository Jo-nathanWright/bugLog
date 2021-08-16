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
          {{ bug.creator?.name }}
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
      <h6 class="pt-3">
        {{ bug.description }}
      </h6>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-11 col-11 mt-3">
      <div class="row">
        <div class="col-md-6 col-6">
          <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#Edit">
            Edit
          </button>
        </div>
        <div class="col-md-6 col-6 d-flex justify-content-end">
          <button type="button" class="btn btn-danger">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-4 justify-content-center mb-2">
    <div class="col-md-10 col-10">
      <div class="row">
        <h3 class="pr-3">
          Notes
        </h3>
        <h3 class="text-light action bg-green rounded px-2" data-toggle="modal" data-target="#CreateNote">
          Add
        </h3>
      </div>
      <div class="row bg-dark text-light">
        <div class="col-md-3 col-12 pt-2">
          <h5>Name</h5>
        </div>
        <div class="col-md-8 col-12 pt-2">
          <h5>Reported By</h5>
        </div>
        <div class="col-md-1 col-12 pt-2">
          <h5>Delete</h5>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal For Bug Reports -->
  <div class="modal fade" id="Edit" tabindex="-1" aria-labelledby="EditLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="EditLabel">
            Edit Bug Report
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="edit()">
            <div class="form-group">
              <label for="exampleFormControlInput1">Title</label>
              <input type="text"
                     class="form-control"
                     id="exampleFormControlInput1"
                     v-model="state.report.title"
                     placeholder="New Bug Title..."
              >
            </div>
            <div class="form-group">
              <label for="BugDescription">Bug Infomation</label>
              <textarea class="form-control"
                        id="BugDescription"
                        v-model="state.report.description"
                        placeholder="New Bug Info..."
                        rows="4"
              ></textarea>
            </div>
            <hr>
            <div class="d-flex justify-content-end">
              <button type="submit" data-toggle="modal" data-target="#Edit" class="btn btn-primary mr-3">
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

  <div class="modal fade" id="CreateNote" tabindex="-1" aria-labelledby="CreateNoteLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="CreateNoteLabel">
            Add Note
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="create()">
            <div class="form-group">
              <label for="NoteComment">Comment</label>
              <textarea class="form-control"
                        id="NoteComment"
                        v-model="state.newNote.body"
                        placeholder="Comment..."
                        rows="4"
                        required
              ></textarea>
            </div>
            <hr>
            <div class="d-flex justify-content-end">
              <button type="submit" data-toggle="modal" data-target="#CreateNote" class="btn btn-primary mr-3">
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
import Pop from '../utils/Notifier'
import { bugsService } from '../services/BugsService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { notesService } from '../services/NotesService'
import { logger } from '../utils/Logger'
export default {
  name: 'Info',
  setup() {
    const route = useRoute()
    const state = reactive({
      report: {},
      newNote: {}
    })
    onMounted(async() => {
      try {
        await bugsService.getById(route.params.bugId)
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      state,
      bug: computed(() => AppState.activeBug),
      async edit() {
        try {
          await bugsService.edit(state.report, route.params.bugId)
          state.report = {}
        } catch (error) {
          Pop.toast(error)
        }
      },
      async create() {
        try {
          state.newNote.bug = AppState.activeBug.id
          await notesService.create(state.newNote)
          await bugsService.getNotes(route.params.bugId)
          state.newNote = {}
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
