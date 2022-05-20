<script>
    export let word;
</script>

<button class="link" on:click >{word}&nbsp;</button>

<style>
    .link {
        cursor: pointer;
        text-decoration: none;
        font-size: 1.1em;
        align-items: center;
        background: transparent;
        border: none;
    }

    .link:hover {
        color: darkred;
    }

</style>