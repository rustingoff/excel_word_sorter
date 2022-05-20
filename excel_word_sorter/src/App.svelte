<script>


import Dashboard from './routes/dashboard.svelte'

</script>

<main>
<Dashboard />

</main>

<svelte:head>
    <title>Word Sorter</title>
</svelte:head>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    main div {
        display: flex;
        max-width: 100%;
        justify-content: space-around;
    }
</style>