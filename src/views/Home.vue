<template>
  <div class="home">
    <h1>Vuetify v-treeview and v-treeview-draggable</h1>

    <v-row>
      <v-col cols="4">
        <h3 >Vuetify v-treeview - no dragging</h3>
        <div>
          <v-treeview :items="animals"></v-treeview>
        </div>
      </v-col>


      <v-col cols="4">
        <h3>v-treeview-draggable - with dragging</h3>
          <v-treeview-draggable v-model="animals"></v-treeview-draggable>
      </v-col>
    </v-row>

  </div>
</template>

<script>
// @ is an alias to /src

import VTreeviewDraggable from "../components/VTreeviewDraggable";

export default {
  name: 'Home',

  data () {
    return {
      animals: [
        {id: 1, name: 'mamals', children: [
            {id: 10, name: 'elephant', children: [
                {id: 101, name: 'indian', children: []},
                {id: 102, name: 'african', children: []},
              ]},
            {id: 11, name: 'lion', children: []},
            {id: 12, name: 'buffalo', children: []},
          ]
        },
        {id: 2, name: 'amfibies', children: [
            {id: 20, name: 'salamander', children: []},
          ]
        },
        {id: 3, name: 'reptiles', children: [
            {id: 30, name: 'crocodile', children: []},
            {id: 31, name: 'snake', children: []},
          ]
        },
        {id: 4, name: 'birds', children: []},
      ]
    }
  },

  components: {
    VTreeviewDraggable
  }
}
</script>
