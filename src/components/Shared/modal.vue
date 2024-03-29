<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="props.open">
    <Dialog as="div" class="relative z-10" @close="emit('onClose')">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
              <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="emit('onClose')">
                  <span class="sr-only">Close</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="sm:flex sm:items-start">
                <div 
                  :class="iconBackGround"
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                >
                  <ExclamationIcon :class="iconType" class="h-6 w-6" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900"> {{ props.title }} </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">{{props.text}}</p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button 
                  type="button" 
                  :class="buttonClass"
                  class="
                      w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 
                      text-base font-medium text-whitefocus:outline-none focus:ring-2 
                      focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm text-white
                    " 
                    @click="emit('onSubmit')"
                  >
                  Deletar
                </button>
                <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm" @click="emit('onClose')">Cancelar</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationIcon, XIcon } from '@heroicons/vue/outline'

const props = defineProps({
  open: {
    type: [String, Boolean, Number],
    default: false
  },
  title: {
    type: [String],
    default: null
  },
  text: {
    type: [String],
    default: null
  },
  modalType: {
    type: [String],
    default: 'warning'
  }
})

const emit = defineEmits(['onClose', 'onSubmit']);

const buttonClass = computed(() => {
  switch (props.modalType) {
    case 'warning':
      return "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500"
    case 'error':
      return "bg-red-600 hover:bg-red-700 focus:ring-red-500"
    case 'success':
      return "bg-green-600 hover:bg-green-700 focus:ring-green-500"
  }
})

const iconBackGround = computed(() => {
  switch (props.modalType) {
    case 'warning':
      return "bg-yellow-100"
    case 'error':
      return "bg-red-100"
    case 'success':
      return "bg-green-100"
  }
})

const iconType = computed(() => {
  switch (props.modalType) {
    case 'warning':
      return "text-yellow-600"
    case 'error':
      return "text-red-600"
    case 'success':
      return "text-green-600"
  }
})
</script>