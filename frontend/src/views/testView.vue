<template>
    <div>
        <div class="container-fluid">
            <b-row>
                <draggable group="people" :list="list4">
                    <div
                            class="list-group-item"
                            v-for="(element, index) in list4"
                            :key="element.name"
                    >
                        {{ element.name }} {{ index }}
                    </div>
                </draggable>
                <div class="col-3">
                    <h3>Draggable 1</h3>
                    <draggable class="list-group" :list="list1" group="people" @change="log">
                        <div
                                class="list-group-item"
                                v-for="(element, index) in list1"
                                :key="element.name"
                        >
                            {{ element.name }} {{ index }}
                        </div>
                    </draggable>
                </div>
                <div class="col-3">
                    <h3>Draggable 2</h3>
                    <draggable class="list-group" :list="list2" group="people" @change="log">
                        <div
                                class="list-group-item"
                                v-for="(element, index) in list2"
                                :key="element.name" draggable="true"
                        >
                            {{ element.name }} {{ index }}
                        </div>
                    </draggable>
                </div>
                <div class="col-3">
                    <h3>Draggable 3</h3>
                    <draggable class="list-group" :list="list3" group="people" @change="log">
                        <div
                                class="list-group-item"
                                v-for="(element, index) in list3"
                                :key="element.name" draggable="true"
                        >
                            {{ element.name }} {{ index }}
                        </div>
                    </draggable>
                </div>
            </b-row>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'


    export default {
        name: "testView",
        components: {
            draggable,
        },
        data: () => ({
            list4: [
                {name: "asd", id: 1},
                {name: "qwe", id: 2},
                {name: "zxc", id: 3},
            ],
            list1: [
                {name: "John", id: 1},
                {name: "Joao", id: 2},
                {name: "Jean", id: 3},
                {name: "Gerard", id: 4}
            ],
            list2: [
                {name: "Juan", id: 5},
                {name: "Edgard", id: 6},
                {name: "Johnson", id: 7}
            ],
            list3: [
                {name: "Juan", id: 5},
                {name: "Edgard", id: 6},
                {name: "Johnson", id: 7}
            ]
        }),
        methods: {
            add: function () {
                this.list1.push({name: "Juan", id: this.list1.length + this.list2.length});
            },
            replace: function () {
                this.list = [{name: "Edgard"}];
            },
            clone: function (el) {
                return {
                    name: el.name + " cloned"
                };
            },
            log: function (evt) {
                window.console.log(evt);
            }
        }
    }
</script>

<style scoped>

</style>