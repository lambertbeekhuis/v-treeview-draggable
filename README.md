# v-treeview-draggable

This repo contains a Vuetify-draggable-treeview component based upon [Suusan2go/vuetify-draggable-treeview](https://github.com/suusan2go/vuetify-draggable-treeview), but now supporting Vuetify 2.2 

Above library is based upon vuetify 2.1, and in vuetify 2.2 the alignment is handled differently [fix VTreeview](https://github.com/vuetifyjs/vuetify/pull/9640).

So what I did:
- made a @vue/cli project
- added the 2 [Suusan2go] components DraggableTreeview.vue and DraggableTreeviewNode.vue
- renamed them
- removed the TypeScript functionality from the components, as I do not have this in my current project and I want to keep it simple
- added the Vuetify 2.2 classes for correct alignment with Vuetify 2.2
- made a simple demo 

When I was working to make it a npm-package, the builds become quite big (300 kb), so apparantly some external dependencies are added to the build, so I have to work on this some more

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
