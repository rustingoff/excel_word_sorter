<script>
    import Content from './content.svelte';
    import { store } from '../hooks/auth';
    import LoginComponent from './login.svelte';

</script>

{#if $store != null }
    <Content />
{:else }
    <LoginComponent />
{/if}