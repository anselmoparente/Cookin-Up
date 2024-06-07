<script lang="ts">
import { ref } from 'vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import Tag from './Tag.vue';

export default {
    setup() {
        const ingredients = ref<string[]>([]);

        function addIngredient(ingredient: string) {
            ingredients.value.push(ingredient);
        }

        function removeIngredient(ingredient: string) {
            ingredients.value = ingredients.value.filter(element => ingredient !== element);
        }

        return {
            ingredients,
            addIngredient,
            removeIngredient,
        }
    },

    components: { SelecionarIngredientes, Tag },
}
</script>

<template>
    <main class="conteudo-principal">
        <section>
            <span class="subtitulo-lg sua-lista-texto">
                Sua lista:
            </span>

            <ul v-if="ingredients.length" class="ingredientes-sua-lista">
                <li v-for="ingrediente in ingredients" :key="ingrediente">
                    <Tag :text="ingrediente" :is-active="true" />
                </li>
            </ul>

            <p v-else class="paragrafo lista-vazia">
                <img src="../assets/imagens/icones/lista-vazia.svg" alt="Ícone de pesquisa">
                Sua lista está vazia, selecione ingredientes para iniciar.
            </p>
        </section>

        <SelecionarIngredientes @add-ingredient="addIngredient" @remove-ingredient="removeIngredient" />
    </main>

</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

.sua-lista-texto {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}

.lista-vazia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #F0633C);
    text-align: center;
}

@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>