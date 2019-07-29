<template>
  <div :ref="ref"
    class="stack-wrapper"
  ><poker-card
      v-for="poker in list"
      :key="`${poker.poker}${Math.random().toString().substr(-6, 6)}`"
      :poker="poker"
      @card-press="(...evt) => $emit('card-press', evt)"
      @card-release="(evt) => {
        $emit('card-release', evt)
      }"
  ></poker-card>
  </div>
</template>

<script>
import Sortable, { MultiDrag } from 'sortablejs';
import Card from '../Card.vue';

Sortable.mount(new MultiDrag());

export default {
  components: {
    'poker-card': Card,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    sortConfigs: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    ref: `stack${Math.random().toString().substr(-6, 6)}`,
    logPrint: true,
    sortable: undefined,
  }),
  mounted() {
    const configOfGroup = Object.assign(
      { put: true },
      this.sortConfigs.group || {},
      { name: 'cards', pull: !'clone' || true },
    );
    this.sortable = new Sortable(
      this.$refs[this.ref],
      Object.assign(
        {
          setData: this.setData,
          onChoose: this.onChoose,
          // onUnchoose: this.onUnchoose,
          onStart: this.onStart,
          onEnd: this.onEnd,
          onAdd: this.onAdd,
          onUpdate: this.onUpdate,
          onSort: this.onSort,
          onRemove: this.onRemove,
          // onFilter: this.onFilter,
          // onMove: this.onMove,
          // onClone: this.onClone,
          // onChange: this.onChange,
        },
        {
          removeCloneOnHide: true,
          animation: 150,
          sort: false,
          disabled: !true, // | false,
          swapThreshold: 0,
          ghostClass: 'ghost-soldier',
          dragoverBubble: true,
          dragClass: 'soldier-dragged',
          draggable: '.extra-soldier, :last-child',
          // draggable: '.extra-soldier',
          // draggable: ':last-child',
          chosenClass: 'soldier-standby',
          dataIdAttr: 'data-card',
        },
        {
          onSelect: this.onSelect,
          // onDeselect: this.gotevent,

          // multiDrag: !true,
          // multiDragKey: null, // Key that must be down for items to be selected
          selectedClass: 'extra-soldier',
        },
        this.sortConfigs,
        { group: configOfGroup },
      ),
    );
    // console.log(stack);
  },
  methods: {
    // setData(...e) {
    //   console.log('setData');
    // },
    // setData(/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
    //   // `dataTransfer` object of HTML5 DragEvent
    //   const x = dataTransfer.setData('Text', dragEl.textContent);
    //   console.log(x, dragEl.textContent, dataTransfer, dragEl);
    // },
    onChoose(/** Event */evt) {
      console.log('onChoose', evt);
    },
    onSelect(/** Event */evt) {
      console.log('onSelect', evt);
    },
    onUnchoose(/** Event */evt) {
      console.log('onUnchoose', evt);
    },
    onStart(/** Event */evt) {
      console.log('onStart', evt);
      this.$emit('start');
    },
    onEnd(/** Event */evt) {
      console.log('onEnd', evt);
      this.$emit('end');
    },
    onUpdate(/** Event */evt) {
      console.log('onUpdate', evt);
    },
    onAdd(/** Event */evt) {
      console.log('onAdd', evt);
    },
    onSort(/** Event */evt) {
      console.log('onSort', evt);
    },
    onRemove(/** Event */evt) {
      console.log('onRemove', evt);
    },
    onFilter(/** Event */evt) {
      console.log('onFilter', evt);
    },
    onMove(/** Event */evt, /** Event */originalEvent) {
      console.log('onMove', evt, originalEvent);
    },
    onClone(/** Event */evt) {
      console.log('onClone', evt);
    },
    onChange(/** Event */evt) {
      console.log('onChange', evt);
    },
    gotevent(...e) {
      console.log('gotevent');

      if (this.logPrint) { console.log(e[0].type, ...e); }
      // this.finalPipe();
    },
    finalPipe() {
      const evts = ['setData', 'onChoose', 'onUnchoose',
        'onStart', 'onEnd', 'onAdd', 'onUpdate',
        'onSort', 'onRemove', 'onFilter', 'onMove',
        'onClone', 'onChange',
      ];
      const yes = [
        'onUnchoose',
      ];
      console.log('finalPipe');
      this.$emit('card-press', 'finalPipe'); // cascade
    },
  },
  beforeDestroy() {
    if (this.sortable !== undefined) this.sortable.destroy();
  },
};
</script>


<style lang="less" scoped>
.stack-wrapper {
  display: flex;
  width: 100px;
  min-height: $width * 1.5;
  flex-direction: column;
  transition: filter 0.3s;
}

.extra-soldier:only-of-type,
.ghost-soldier {
  filter:
    drop-shadow(2px 4px 6px #FFF)
    contrast(175%)
    brightness(30%)
  ;
}

.extra-soldier {
  filter:
    drop-shadow(2px 4px 6px #FFF)
    contrast(175%)
    brightness(50%)
    hue-rotate(180deg)
    saturate(50%)
    sepia(50%)
  ;
  &:::before {
    content: 'extra-soldier';
  }
}

.soldier-standby {
  position: relative;
  top: 30px;
  right: 15px;
}
</style>


swapThreshold="0.66"
invertSwap="false"
invertedSwapThreshold="0"
direction="horizontal|vertical"|fn()

fallbackClass="sortable-fallback"
fallbackTolerance=4
forceFallback=false
fallbackOnBody=false

dragoverBubble="false"
removeCloneOnHide="true"
emptyInsertThreshold="5" (感應區大小 預設 5px)


setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
  dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
},

// Element is chosen
onChoose: function (/**Event*/evt) {
  evt.oldIndex;  // element index within parent
},

// Element is unchosen
onUnchoose: function(/**Event*/evt) {
  // same properties as onEnd
},

// Element dragging started
onStart: function (/**Event*/evt) {
  evt.oldIndex;  // element index within parent
},

// Element dragging ended
onEnd: function (/**Event*/evt) {
  var itemEl = evt.item;  // dragged HTMLElement
  evt.to;    // target list
  evt.from;  // previous list
  evt.oldIndex;  // element's old index within old parent
  evt.newIndex;  // element's new index within new parent
  evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
  evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
  evt.clone // the clone element
  evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
},

// Element is dropped into the list from another list
onAdd: function (/**Event*/evt) {
  // same properties as onEnd
},

// Changed sorting within list
onUpdate: function (/**Event*/evt) {
  // same properties as onEnd
},

// Called by any change to the list (add / update / remove)
onSort: function (/**Event*/evt) {
  // same properties as onEnd
},

// Element is removed from the list into another list
onRemove: function (/**Event*/evt) {
  // same properties as onEnd
},

// Attempt to drag a filtered element
onFilter: function (/**Event*/evt) {
  var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
},

// Event when you move an item in the list or between lists
onMove: function (/**Event*/evt, /**Event*/originalEvent) {
  // Example: https://jsbin.com/nawahef/edit?js,output
  evt.dragged; // dragged HTMLElement
  evt.draggedRect; // DOMRect {left, top, right, bottom}
  evt.related; // HTMLElement on which have guided
  evt.relatedRect; // DOMRect
  evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
  originalEvent.clientY; // mouse position
  // return false; — for cancel
  // return -1; — insert before target
  // return 1; — insert after target
},

// Called when creating a clone of element
onClone: function (/**Event*/evt) {
  var origEl = evt.item;
  var cloneEl = evt.clone;
},

// Called when dragging element changes position
onChange: function(/**Event*/evt) {
  evt.newIndex // most likely why this event is used is to get the dragging element's current index
  // same properties as onEnd
}

setData: this.gotevent,
onChoose: this.gotevent,
onUnchoose: this.gotevent,
onStart: this.gotevent,
onEnd: this.gotevent,
onAdd: this.gotevent,
onUpdate: this.gotevent,
onSort: this.gotevent,
onRemove: this.gotevent,
onFilter: this.gotevent,
onMove: this.gotevent,
onClone: this.gotevent,
onChange: this.gotevent,


multiDrag: false, // Enable the plugin
selectedClass: "sortable-selected", // Class name for selected item
multiDragKey: null, // Key that must be down for items to be selected

// Called when an item is selected
onSelect: function(/**Event*/evt) {
  evt.item // The selected item
},

// Called when an item is deselected
onDeselect: function(/**Event*/evt) {
  evt.item // The deselected item
}
