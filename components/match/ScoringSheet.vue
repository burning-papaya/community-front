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
    <PlayerScoringSheet class="mt-4" />
    <PlayerScoringSheet class="mt-4" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PlayerScoringSheet from '~/components/match/PlayerScoringSheet.vue'
import { Player, PlayerType } from '~/types/matched/player'
import { Objective, PrimaryObjective, ScoringType, SecondaryObjective } from '~/types/matched/objectives'

export default Vue.extend({
  name: 'ScoringSheet',
  components: {
    PlayerScoringSheet
  },
  data () {
    const objectives: Array<Objective> = []

    const primaries = [
      new PrimaryObjective(1, 'No mercy', 'Kill everyone and score 20pts'),
      new PrimaryObjective(2, 'Hold position', 'Secure all objective points and score 25 points', 25)
    ]

    primaries.forEach(pr => objectives.push(pr))

    const secondaries = [
      new SecondaryObjective(1, 'Hunt the witch', 'Kill a psyker and score 3 pts', ScoringType.PROGRESSIVE, 15),
      new SecondaryObjective(1, 'Kill the head', 'Kill a warlord and score 13 pts', ScoringType.END_GAME, 13)
    ]

    secondaries.forEach(sc => objectives.push(sc))

    return {
      message: 'This is a message',
      attacker: {
        id: 1,
        name: '',
        type: PlayerType.ATTACKER
      } as Player,
      objectives
    }
  }
})
</script>

<style scoped>

</style>
