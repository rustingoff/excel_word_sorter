<script>
    import Input from "../components/Input.svelte";
    import Output from "../components/Output.svelte";
    import Word from "../components/Word.svelte";
    import Phrase from "../components/Phrase.svelte";
</script>

<div class="content">
        <Input />
        <Output />
        <Word />
        <Phrase />
</div>

<style>
    .content {
        display: flex;
        justify-content: space-around;

    }
</style>