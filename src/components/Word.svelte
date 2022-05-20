<script>
    import copy from "clipboard-copy";
    import {CopyButton} from "carbon-components-svelte";
    import {wordStore} from "../store/wordStore";
    import {phraseStore} from "../store/phraseStore";
    import {outputStore} from "../store/outputStore";

    const deleteIcon = './img/2849797_trash_basket_multimedia_icon.png';

    async function deleteKeywords() {
        await wordStore.set([]);
        await outputStore.update(store => {
            return [...$phraseStore, ...store];
        });
        await phraseStore.set([]);
    }

    async function deleteKeywordPhrase(w) {
        wordStore.update(wStore => {
            return wStore.filter(item => {
                return item !== w;
            })
        })
        await phraseStore.update(pStore => {
            return pStore.filter(item => {
                outputStore.update(store => {
                    return [item, ...store];
                });
               return !item.split(" ").includes(w);
            });
        });
    }
</script>


<div class="container">
    <div class="control-header">
        <h3>Words</h3>
        <div class="buttons">
            <CopyButton feedback="Copy" on:click={() => { copy($wordStore.join("\n"))}} class="bx--btn"/>
            <button on:click={deleteKeywords}><img src="{deleteIcon}" alt="Delete"></button>
        </div>
    </div>
    <div class="output-content">
        <ul>
            {#each $wordStore as word, id (id)}
                {#if $phraseStore.length > 0}
                    <li on:click={() => {deleteKeywordPhrase(word)}}>{word}&nbsp;</li>
                {/if}
            {/each}
        </ul>
    </div>
</div>


<style>
    :global(.bx--btn):hover {
        cursor: copy;
    }

    ul {
        list-style: none;
        font-size: 1.1em;
    }

    ul li {
        cursor: no-drop;
    }

    ul li:hover {
        color: red;
    }

    .buttons {
        display: flex;
        align-items: stretch;
        justify-content: space-around;
        gap: 5px;
    }

    button img {
        cursor: pointer;
        width: 25px;
        height: 25px;
    }

    .control-header {
        display: flex;
        justify-content: space-between;
    }

    .control-header h3 {
        font-size: 1.3em;
        line-height: 4px;
    }

    .output-content {
        border: 1px solid #aaa;
        font-size: 1.1em;
        min-width: 20vw;
        min-height: 60vh;
        overflow: scroll;
        overflow-scrolling: touch;
    }

    .output-content:hover {
        border: 1px solid #333;
    }

</style>