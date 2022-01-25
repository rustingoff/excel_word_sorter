<script>
    import {outputStore} from "../store/outputStore";
    import {phraseStore} from "../store/phraseStore";
    import OutputDisplay from "../shared/OutputDisplay.svelte";
    import copy from "clipboard-copy";
    import { CopyButton } from "carbon-components-svelte";

    const deleteIcon = './img/2849797_trash_basket_multimedia_icon.png';

    async function deleteKeywords() {
        await outputStore.set([]);
    }

    async function deletePhrase(phrase) {
        await phraseStore.update(pStore => {
            return [phrase, ...pStore];
        });

        await outputStore.update(oStore => {
            return oStore.filter(item => {
                return item !== phrase;
            })
        });
    }

</script>
<div class="container">
    <div class="control-header">
        <h3>Output</h3>
        <span class="count-words">{$outputStore.length}</span>
        <div class="buttons">
            <CopyButton feedback="Copy" on:click={() => { copy($outputStore.join("\n"))}} class="bx--btn"/>
            <button on:click={deleteKeywords}><img src="{deleteIcon}" alt="Delete"></button>
        </div>
    </div>
    <div class="output-content">
        <ul>
            {#each $outputStore as out, i (i)}
                <div class="phrase">
                    <OutputDisplay out={out}/>
                    <span on:click={() => {deletePhrase(out)}}>+</span>
                </div>
            {/each}
        </ul>
    </div>
</div>

<style>
    :global(.bx--btn):hover {
        cursor: copy;
    }

    .buttons {
        display: flex;
        align-items: stretch;
        justify-content: space-around;
        gap: 5px;
    }

    button img{
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

        max-width: 30rem;
        min-width: 30rem;
        min-height: 5rem;
        max-height: 65vh;
        overflow: scroll;
    }

    .output-content:hover {
        border: 1px solid #333;
    }

    .phrase {
        display: flex;
        align-items: center;
    }

    .phrase span {
        cursor: pointer;
        font-size: 2em;
        font-weight: 700;
        margin-bottom: 5px;
        color: green;
    }

    .phrase span:hover {
        color: darkgreen;
    }

</style>