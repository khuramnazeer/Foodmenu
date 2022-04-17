<template>
  <div class="about">
  <v-list
      flat
      v-for="task in tasks"
      :key="task.id"
    >
        <v-list-item>
          <template v-slot:default="{ active, }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{task.title}}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
    </v-list>
  </div>
</template>

<script>
   export default {
    name: 'Home',
    data () {
      return {
        tasks: [
          {
            id: 1,
            title: 'Break Fast'
          },
          {
            id: 2,
            title: 'Lunch'
          },
          {
            id: 3,
            title: 'Dinner'
          },
          {
            id: 4,
            title: 'Tea'
          },
        ]
      }
    }
    
  }
</script>
