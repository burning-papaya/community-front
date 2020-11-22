<template>
  <table class="table table-bordered">
    <thead>
      <tr class="bg-danger">
        <td><strong>Attacker</strong></td>
        <td colspan="4">
          Attacker's name
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3">
          <strong>Battle Round</strong>
        </td>
        <td colspan="4">
          Attacker's VP: 0
        </td>
      </tr>
      <tr>
        <td>Primary Objectives</td>
        <td>Secondary Objective I</td>
        <td>Secondary Objective II</td>
        <td>Secondary Objective III</td>
      </tr>
      <tr>
        <td>
          <ul>
            <li>One</li>
            <li>Two</li>
          </ul>
        </td>
        <td>
          <b-select>
            <option>Incursion</option>
            <option>Strike Force</option>
          </b-select>
        </td>
        <td>
          <b-select>
            <option>Incursion</option>
            <option>Strike Force</option>
          </b-select>
        </td>
        <td>
          <b-select>
            <option>Incursion</option>
            <option>Strike Force</option>
          </b-select>
        </td>
      </tr>
      <tr><td>I</td><td /><td /><td /><td /></tr>
      <tr><td>II</td><td /><td /><td /><td /></tr>
      <tr><td>III</td><td /><td /><td /><td /></tr>
      <tr><td>IV</td><td /><td /><td /><td /></tr>
      <tr><td>V</td><td /><td /><td /><td /></tr>
      <tr><td>End game</td><td /><td /><td /><td /></tr>
      <tr><td>Objective totals</td><td>0 / 45</td><td>0 / 15</td><td>0 / 15</td><td>0 / 15</td></tr>
      <tr>
        <td>Battle ready score</td><td colspan="4">
          <b-radio-group><b-radio>10</b-radio><b-radio>0</b-radio></b-radio-group>
        </td>
      </tr>
      <tr><td colspan="3" /><td>Victory points total</td><td>0 / 100</td></tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default {
  name: 'PlayerScoringSheet'
}
</script>

<style scoped>

</style>
