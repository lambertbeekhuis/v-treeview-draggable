# v-treeview-draggable-app

This repo contains a draggable treeview component based upon [Suusan2go/vuetify-draggable-treeview](https://github.com/suusan2go/vuetify-draggable-treeview). 

Above library is based upon vuetify 2.1, and in vuetify 2.2 the alignment is handled differently.

So what I did:
- made a @vue/cli project
- added the 2 [Suusan2go] components
- removed the TypeScript functionality from the components, as I do not have this in my current project
- added the Vuetify 2.2 classes for alignment
- made a simple demo 

I was working on making an npm-package for it, but when making the builds using, they become quite big (300 kb), so apparantly some external dependencies are added to the build

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
