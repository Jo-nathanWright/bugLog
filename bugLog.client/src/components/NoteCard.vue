<template>
  <div class="row bg-light text-dark align-items-center border border-dark">
    <div class="col-md-3 col-12 pt-2 d-flex align-items-center">
      <div class="row align-items-center pb-md-2">
        <div class="col-md-2 pb-md-0 pb-2">
          <img :src="note.creator?.picture" alt="ProfilePicture" height="50" class="rounded rounded-circle">
        </div>
        <div class="col-md-10 pb-md-0 pb-2 pt-2">
          <h5 class="pl-3">
            {{ note.creator?.name }}
          </h5>
        </div>
      </div>
    </div>
    <div class="col-md-8 col-12 pt-2">
      <h5 class="pl-3">
        {{ note.body }}
      </h5>
    </div>
    <div class="col-md-1 col-12 pt-2 d-flex justify-content-md-center pr-md-5 justify-content-end">
      <h5 class="action" @click="destroy(note.id, note.bug)">
        🗑
      </h5>
    </div>
  </div>
</template>

<script>
import { bugsService } from '../services/BugsService'
import { notesService } from '../services/NotesService'
import Pop from '../utils/Notifier'
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      async destroy(id, bugId) {
        try {
          if (await Pop.confirm()) {
            await notesService.destroy(id)
            await bugsService.getNotes(bugId)
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
