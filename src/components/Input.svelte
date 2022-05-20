<script context="module">
    import {outputStore} from "../store/outputStore";

    let keywords;

    const submitIcon = './img/6843068_business_launch_launching_rocket_spaceship_icon.png';
    const deleteIcon = './img/2849797_trash_basket_multimedia_icon.png';

    function submitKeywords() {
        if (keywords.split("\n") !== []) {
            outputStore.set(keywords.split("\n").filter((item) => {
                return item !== "";
            }));
        } else {
            outputStore.set([]);
        }
    }

    function deleteKeywords() {
        keywords = "";
        document.querySelector('#word_input').value = "";
    }
</script>

<div>
    <div class="control-header">
        <h3>Keywords</h3>
        <div class="buttons">
            <button on:click={submitKeywords}><img src="{submitIcon}" alt="Submit"></button>
            <button on:click={deleteKeywords}><img src="{deleteIcon}" alt="Delete"></button>
        </div>
    </div>
    <textarea bind:value={keywords} name="word_input" id="word_input"></textarea>
</div>

<style>
    .control-header {
        display: flex;
        justify-content: space-between;
    }

    .control-header h3 {
        font-size: 1.3em;
        line-height: 4px;
    }

    textarea {
        font-size: 1.1em;
        min-width: 20vw;
        min-height: 60vh;
    }

    button img{
        cursor: pointer;
        width: 25px;
        height: 25px;
    }
</style>
