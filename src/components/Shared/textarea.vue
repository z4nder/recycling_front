<template>
<div>
    <label v-if="label" :for="id"  class="block text-sm font-medium text-gray-700">
        {{ label }}
    </label>
    <div class="mt-1">
      <textarea 
        :class="computedClass"
        :id="id"
        :name="name"
        :disabled="disabled"
        :value="value"
        :required="required"
        @input="$emit('update:modelValue', $event.target.value)"
        rows="4"         
        class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md" 
      />
      <div v-if="error" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
      </div>
    </div>
    <p v-if="error" class="mt-2 text-sm text-red-600" :id="`${id}-error`">{{ error }}</p>
</div>
</template>


<script>
import { ExclamationCircleIcon } from '@heroicons/vue/solid'
export default {
  inheritAttrs: false,
  components: {ExclamationCircleIcon},
  computed: {
    computedClass() {
      if(this.error) return 'border-red-300 text-red-900 placeholder-red-300  focus:ring-red-500 focus:border-red-500'
      if(this.disabled) return 'border-gray-300 text-gray-900 placeholder-gray-300  focus:ring-gray-500 focus:border-gray-500 cursor-not-allowed '
      return 'border-gray-300 text-indigo-900 placeholder-indigo-300  focus:ring-indigo-500 focus:border-indigo-500'
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default() {
        return false
      },
    },
    id: {
      type: String,
      default() {
        return `text-input-id`
      },
    },
    name: {
      type: String,
      default() {
        return `text-input-name`
      },
    },
    autocomplete: {
      type: String,
      default() {
        return `off`
      },
    },

    value: String,
    label: String,
    error: String,

    required: {
      type: Boolean,
      default() {
        return false
      }
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end)
    },
  },
}
</script>


