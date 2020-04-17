<template>
    <div :class="['v-treeview-node v-treeview-node--click', {'v-treeview-node--leaf' : !hasChildren}]">
        <div class="v-treeview-node__root" @click="open = !open">
            <div v-for="levelNr in levelsToAdd" :key="levelNr" class="v-treeview-node__level"></div>
            <button v-if="hasChildren" type="button"  class="v-icon notranslate v-treeview-node__toggle v-icon--link mdi mdi-menu-down"
                :class="{
                      'v-treeview-node__toggle--open': open,
                      'theme--dark': isDark,
                      'theme--light': !isDark
                    }"
            />
            <div class="v-treeview-node__content">
                <div v-if="hasSlotPrepend" class="v-treeview-node__prepend">
                    <slot name="prepend" v-bind="{ item: value, open }" />
                </div>
                <div class="v-treeview-node__label">
                    <slot name="label" v-bind="{ item: value, open }">
                        {{ value.name }}
                    </slot>
                </div>
                <div v-if="hasSlotAppend" class="v-treeview-node__append">
                    <slot name="append" v-bind="{ item: value, open }" />
                </div>
            </div>
        </div>
        <div v-if="hasChildren && open" class="v-treeview-node__children v-treeview-node__children__draggable">
            <draggable
                :group="group"
                :value="value.children"
                ghost-class="ghost"
                @input="updateValue"
            >
                <v-treeview-draggable-node
                    v-for="child in value.children"
                    :key="child.id"
                    :group="group"
                    :level="level+1"
                    :value="child"
                    @input="updateChildValue"
                >
                    <template v-if="hasSlotPrepend" v-slot:prepend="{ item, open }">
                        <slot name="prepend" v-bind="{ item, open }" />
                    </template>
                    <template v-slot:label="{ item, open }">
                        <slot name="label" v-bind="{ item, open }" />
                    </template>
                    <template v-if="hasSlotAppend" v-slot:append="{ item, open }">
                        <slot name="append" v-bind="{ item, open }" />
                    </template>
                </v-treeview-draggable-node>
            </draggable>
        </div>
    </div>
</template>

<script>
    import draggable from "vuedraggable";
    /*
    type TreeItem = {
        id: number;
        name: string;
        children: TreeItem[];
    };
    */
    export default {
        name: "VTreeviewDraggableNode",
        components: {
            draggable
        },
        props: {
            value: {
                type: Object,
                // type: Object as PropType<TreeItem>,
                default: function () {
                    return {
                        id: 0,
                        name: "",
                        children: []
                    }
                }
            },
            root: {
                type: Boolean,
                default: function () {
                  return false;
                }
            },
            level: {
              type: Number,
              default: function () {
                return 0;
              }
            },
            group: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                open: false,
                localValue: { ...this.value }
            };
        },
        computed: {
            hasChildren: function () {
                return this.value.children != null && this.value.children.length > 0;
            },
            hasSlotPrepend () {
              return !!this.$scopedSlots['prepend'] || !!this.$slots['prepend'];
            },
            hasSlotAppend () {
              let result = !!this.$slots['append'] || !!this.$scopedSlots['append'];
              console.log('append', !!this.$scopedSlots['append']);
              return !!this.$slots['append'] || !!this.$scopedSlots['append'];
            },
            isDark: function () {
                return this.$vuetify.theme.isDark;
            },
            levelsToAdd: function () {
              return this.level + (this.hasChildren ? 0 : 1);
            }
        },
        watch: {
            value: function (value) {
              console.log('WatchValue/DraggableTreeViewNODE: this.localValue', this.localValue, 'value', value);
              this.localValue = { ...value };
            }
            /*
            value(value): void {
                this.localValue = { ...value };
            }
            */
        },
        methods: {
            updateValue: function (value) {
                console.log('Node: updateValue', value)
                this.localValue.children = [...value];
                this.$emit("input", this.localValue);
            },
            updateChildValue: function (value) {
                console.log('Node: updateChildValue', value);
                const index = this.localValue.children.findIndex(c => c.id === value.id);
                this.$set(this.localValue.children, index, value);
                this.$emit("input", this.localValue);
            }
        }
    };
</script>