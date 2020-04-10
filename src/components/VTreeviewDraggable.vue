<template>
    <draggable
        :value="localValue"
        :group="group"
        class="v-treeview v-treeview-draggable"
        :class="themeClassName"
        ghost-class="ghost"
        @input="updateValue"
    >
        <v-treeview-draggable-node
            v-for="item in value"
            :key="item.id"
            :group="group"
            :value="item"
            @input="updateItem"
        >
            <template v-if="hasSlotPrepend" v-slot:prepend="{ item, open }">
                <slot name="prepend" v-bind="{ item, open }"></slot>
            </template>
            <template v-slot:label="{ item, open }">
                <slot name="label" v-bind="{ item, open }"></slot>
            </template>
            <template v-if="hasSlotAppend" v-slot:append="{ item, open }">
                <slot name="append" v-bind="{ item, open }"></slot>
            </template>
        </v-treeview-draggable-node>
    </draggable>
</template>

<script>
    // import Vue, { PropType } from "vue";
    import draggable from "vuedraggable";
    import VTreeviewDraggableNode from "./VTreeviewDraggableNode.vue";
    export default {
        components: {
            draggable,
            VTreeviewDraggableNode
        },
        props: {
            value: {
                type: Array,
                // type: Array as PropType<{ id: string | number }[]>,
                default: function () {
                    return []
                }
                // default: (): { id: string | number }[] => {
                //    return [];
                // }
            },
            group: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                localValue: [...this.value]
            };
        },
        computed: {
          themeClassName: function () {
            return this.$vuetify.theme.isDark ? "theme--dark" : "theme--light";
          },

          hasSlotPrepend () {
            return !!this.$scopedSlots['prepend'] || !!this.$slots['prepend'];
          },

          hasSlotAppend () {
            let result = !!this.$slots['append'] || !!this.$scopedSlots['append'];
            console.log('append-root', !!this.$scopedSlots['append']);
            return !!this.$scopedSlots['append'] || !!this.$slots['append'] ;
          },
        },
        watch: {
            value(value) {
                console.log('WatchValue/DraggableTreeView: this.localValue', this.localValue, 'value', value);
                this.localValue = [...value];
            }
        },
        methods: {
            updateValue: function (value) {
                this.localValue = value;
                this.$emit("input", this.localValue);
            },
            updateItem: function (itemValue) {
                const index = this.localValue.findIndex(v => v.id === itemValue.id);
                this.$set(this.localValue, index, itemValue);
                this.$emit("input", this.localValue);
            }
        }
    };
</script>