<script>
    import Input from "./components/Input.svelte";
    import Output from "./components/Output.svelte";
    import Word from "./components/Word.svelte";
    import Phrase from "./components/Phrase.svelte";


</script>

<main>
    <Input />
    <Output />
    <Word />
    <Phrase />
</main>

<svelte:head>
    <title>Word Sorter</title>
</svelte:head>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    main {
        display: flex;
        max-width: 100%;
        justify-content: space-around;
    }
</style>