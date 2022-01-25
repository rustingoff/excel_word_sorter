<script>
    import Link from "./Link.svelte";
    import {outputStore} from "../store/outputStore";
    import {wordStore} from "../store/wordStore";
    import {phraseStore} from "../store/phraseStore";

    const mLink = 'https://www.amazon.com/s/?url=search-alias%3Daps&field-keywords=';
    const mIcon = "./img/icons/amazon-brands.svg";

    export let out;

    async function deleteWord(w) {
        await wordStore.update(wStore => {
            return [...wStore, w];
        });
        await outputStore.update((currentStore => {
            return currentStore.filter((item) => {
                for (let i = 0; i < item.split(" ").length;) {
                    if (item.split(" ").includes(w)) {
                        phraseStore.update(pStore => {
                            return [item, ...pStore];
                        });
                    }
                    return !item.split(" ").includes(w);
                }
            })
        }));
    }

</script>
<div class="container">
    <li>
        <a href="{mLink + out}" class="amazon-logo" target="_blank"><img src={mIcon} alt="Amazon search"></a>
        <div class="word">
            {#each out.split(" ") as word, id (id)}
                <Link {word} on:click={() => {
                deleteWord(word)
            }}/>
            {/each}
        </div>
    </li>
</div>

<style>

    a img {
        margin-right: 3px;
        width: 25px;
        height: 25px;
        transition: all .1s ease-in-out;
    }

    a img:hover {
        transform: scale(1.1);
    }

    div > li {
        display: flex;
        align-items: center;
    }

    .word {
        display: flex;
    }

</style>