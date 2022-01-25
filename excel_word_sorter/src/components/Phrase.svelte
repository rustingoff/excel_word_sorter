<script>
    import copy from "clipboard-copy";
    import {CopyButton} from "carbon-components-svelte";
    import {phraseStore} from "../store/phraseStore";
    import {outputStore} from "../store/outputStore";

    const translateLink = 'https://translate.google.com/?hl=ru#en/ru/';
    const mLink = 'https://www.amazon.com/s/?url=search-alias%3Daps&field-keywords=';

    const mIcon = "./img/icons/amazon-brands.svg";
    const translateIcon = "./img/icons/language-solid.svg";

    const deleteIcon = './img/2849797_trash_basket_multimedia_icon.png';

    async function deleteKeywords() {
        await outputStore.update(store => {
            return [...$phraseStore, ...store];
        });
        await phraseStore.set([]);
    }

    async function deletePhrase(phr) {
        await phraseStore.update(pStore => {
            return pStore.filter(item => {
                if (item === phr) {
                    outputStore.update(store => {
                        return [item, ...store];
                    });
                }
                return item !== phr
            });
        })
    }

</script>

<div class="container">
    <div class="control-header">
        <h3>Phrases</h3>
        <span class="count-words">{$phraseStore.length}</span>
        <div class="buttons">
            <CopyButton feedback="Copy" on:click={() => { copy($phraseStore.join("\n"))}} class="bx--btn"/>
            <button on:click={deleteKeywords}><img src="{deleteIcon}" alt="Delete"></button>
        </div>
    </div>
    <div class="output-content">
        <ul>
            {#each $phraseStore as phrase, id (id)}
                <li>
                    <a href="{mLink + phrase}" class="amazon-logo" target="_blank"><img src={mIcon} alt="Amazon search"></a>
                    <div class="word">
                        <div>
                            <span on:click={() => {deletePhrase(phrase);}}>{phrase}&nbsp;</span>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</div>


<style>
    span {
        cursor: no-drop;
    }

    :global(.bx--btn):hover {
        cursor: copy;
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

        max-width: 30rem;
        min-width: 30rem;
        min-height: 5rem;
        max-height: 65vh;
        overflow: scroll;
    }

    .output-content:hover {
        border: 1px solid #333;
    }

    a img {
        margin-right: 3px;
        width: 25px;
        height: 25px;
        transition: all .1s ease-in-out;
    }

    a img:hover {
        transform: scale(1.1);
    }

    ul > li {
        display: flex;
    }

    .word {
        display: flex;
    }

</style>