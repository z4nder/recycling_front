<template>
  <div class="bg-white shadow px-4 py-3 sm:rounded-lg sm:p-6">   
    <router-link :to="{name: 'product.index'}">
    <ArrowSmLeftIcon 
      class="h-10 w-10 text-indigo-600 mb-3 cursor-pointer" 
      aria-hidden="true" 
    /> 
    </router-link>
    <h1 class="py-2 text-xl font-semibold text-gray-900">Edite um produto do sistema</h1>      
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form @submit.prevent="submit">
        <div class="grid grid-cols-8 gap-6">

          <div class="col-span-4 sm:col-span-4">
            <v-input
              class="mt-10"
              label="Nome"
              type="text"
              v-model="product.name"   
              :value="product.name" 
              :error="errors?.name"
            />
          </div>
          <div class="col-span-4 sm:col-span-4">
            <v-textarea
              class="mt-10"
              label="Descrição"
              type="text"  
              v-model="product.description"   
              :value="product.description"  
              :error="errors?.description"     
            />
          </div>

        </div>
        <div class="grid grid-cols-8 gap-6">
          <div class="col-span-4 sm:col-span-4">            
              <v-select
                class="mt-10"
                label="Categorias"
                type="text"  
                v-model="product.categories"   
                :selectedValue="product.categories"  
                :error="errors?.categories" 
                :options="categories"    
              />
          </div>
          
          <div class="col-span-4 sm:col-span-4 pt-14">
            <v-toggle
              label="Habilitada"   
              v-model="product.enable"  
            />
          </div>
        </div>
        <div class="flex justify-end">
          <button 
            type="submit" 
            class="
              inline-flex items-center justify-center 
              rounded-md border border-transparent 
              bg-indigo-600 px-4 py-2 text-sm font-medium 
              text-white shadow-sm hover:bg-indigo-700 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 
              focus:ring-offset-2 sm:w-auto"
          >
          Criar
          </button>
        </div>
      </form>
    </div>      
  </div>
</template>


<script setup>
import {reactive, onBeforeMount} from 'vue'
import {
  ArrowSmLeftIcon
} from '@heroicons/vue/outline'
import useProducts from '../../../composables/product'
import useCategories from '../../../composables/categories'

const props = defineProps({
  id: {
    type: [String, Number],
    default: false
  },
})

const { product, errors, findProduct, updateProduct } = useProducts()
const { categories, getCategories } = useCategories()

onBeforeMount(async () => {
  await findProduct(props.id)
  await getCategories()
})

const submit = async () => {
  await updateProduct(product)
}

</script>