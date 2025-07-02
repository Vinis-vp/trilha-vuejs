<template>
  <div class="container mt-4">
    <h2 class="mb-3">Lista de Produtos</h2>

    <div v-if="carregando" class="text-muted">Carregando produtos...</div>
    <div v-if="erro" class="text-danger">{{ erro }}</div>

    <div v-if="produtos.length" class="row g-3">
      <div
        v-for="produto in produtos"
        :key="produto.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <div class="card h-100">
          <img
            :src="produto.image"
            :alt="produto.title"
            class="card-img-top p-3"
            style="height: 250px; object-fit: contain"
          />
          <div class="card-body">
            <h5 class="card-title">{{ produto.title }}</h5>
            <p class="card-text">R$ {{ produto.price.toFixed(2) }}</p>
          </div>
            <button
            class="btn btn-primary mt-2"
            @click="carrinho.adicionarProduto(produto)"
            >
            Adicionar ao carrinho
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProdutoStore } from '../stores/produtoStore'
import { useCarrinhoStore } from '../stores/carrinhoStore'

const carrinho = useCarrinhoStore()

const produtoStore = useProdutoStore()
const { produtos, carregando, erro, buscarProdutos } = produtoStore

onMounted(() => {
  if (produtos.length === 0) buscarProdutos()
})
</script>
