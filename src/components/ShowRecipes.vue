<script lang="ts">
import { getReceipes } from '@/http';
import type IRecipe from '@/interfaces/IRecipe';
import MainButton from './MainButton.vue';
import CardRecipe from './CardRecipe.vue';

export default {
    components: { CardRecipe, MainButton },

    data() {
        return {
            recipesFound: [] as IRecipe[]
        };
    },

    async created() {
        const receipes = await getReceipes();

        this.recipesFound = receipes.slice(0, receipes.length);
    },

    emits: ['editReceipes'],
}
</script>

<template>
    <section class="mostrar-receitas">
        <h1 class="cabecalho titulo-receitas">
            Receitas
        </h1>

        <p class="paragrafo-lg resultados-encontrados">
            Resultados encontrados: {{ recipesFound.length }}
        </p>

        <div v-if="recipesFound.length" class="receitas-wrapper">
            <p class="paragrafo-lg informacoes">
                Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
            </p>

            <ul class="receitas">
                <li v-for="recipe in recipesFound" :key="recipe.nome">
                    <CardRecipe :recipe="recipe" />
                </li>
            </ul>
        </div>

        <div v-else class="receitas-nao-encontradas">
            <p class="paragrafo-lg receitas-nao-encontradas__info">
                Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
            </p>

            <img src="../assets/imagens/sem-receitas.png"
                alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste.">
        </div>

        <MainButton text="Editar lista" @click="$emit('editReceipes')" />
    </section>
</template>

<style scoped>
.mostrar-receitas {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.titulo-receitas {
    color: var(--verde-medio, #3D6D4A);
    margin-bottom: 1.5rem;
}

.resultados-encontrados {
    color: var(--verde-medio, #3D6D4A);
    margin-bottom: 0.5rem;
}

.receitas-wrapper {
    margin-bottom: 3.5rem;
}

.informacoes {
    margin-bottom: 2rem;
}

.receitas {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.receitas-nao-encontradas {
    margin-bottom: 2rem;
}

.receitas-nao-encontradas__info {
    margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
    .receitas-wrapper {
        margin-bottom: 2rem;
    }
}
</style>