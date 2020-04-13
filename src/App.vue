<template>
  <v-app>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <h1>Vuetify v-treeview and v-treeview-draggable</h1>

        <v-row>

          <v-col cols="4">
            <h3>v-treeview-draggable - with dragging within branch only</h3>
            <v-treeview-draggable v-model="animals"></v-treeview-draggable>
          </v-col>

          <v-col cols="4">
            <h3>v-treeview-draggable - with dragging within whole tree, with slots</h3>
            <v-treeview-draggable v-model="animals" group="all">
              <template v-slot:prepend="{ item }">
                {{item.id}}
              </template>
              <template v-slot:append="{ item }">
                {{item.name}}
              </template>
            </v-treeview-draggable>
          </v-col>

          <v-col cols="4">
            <h3>Vuetify's v-treeview - no dragging</h3>
            <div>
              <v-treeview :items="animals"></v-treeview>
            </div>
          </v-col>

        </v-row>

      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

import VTreeviewDraggable from "./components/VTreeviewDraggable";

export default {
  name: 'App',

  components: {
    VTreeviewDraggable
  },

  data: () => ({
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
  })
}
</script>
