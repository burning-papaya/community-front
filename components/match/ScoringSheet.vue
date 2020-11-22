<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <td><strong>Battle size</strong> </td>
          <td>
            <b-select>
              <option>Incursion</option>
              <option>Strike Force</option>
              <option>3</option>
            </b-select>
          </td>
          <td colspan="3">
            <b-row>
              <b-col md="3">
                Mission
              </b-col>
              <b-col md="9">
                <b-select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </b-select>
              </b-col>
            </b-row>
          </td>
        </tr>
      </thead>
    </table>
    <PlayerScoringSheet class="mt-4"/>
    <PlayerScoringSheet class="mt-4"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PlayerScoringSheet from '~/components/match/PlayerScoringSheet.vue'
import {Player, PlayerType} from '~/types/matched/player'

export default Vue.extend({
  name: 'ScoringSheet',
  components: {
    PlayerScoringSheet
  },
  data () {
    return {
      message: 'This is a message',
      attacker: {
        id: 1,
        name: '',
        type: PlayerType.ATTACKER
      } as Player
    }
  }
})
</script>

<style scoped>

</style>
