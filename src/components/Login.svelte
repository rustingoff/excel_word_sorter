<script>
    import {getUserDetails} from "../hooks/auth";
    import {store} from '../hooks/auth';

    let username = '';
    let password = '';
    let error = ''

    async function login() {
        const user = await getUserDetails(username, password)

        if (user) {
            console.log(user)
            $store = user
            if (error) error = ''
        } else {
            error = 'Incorrect username and password.'
            console.log("Incorrect username and password.")
        }
    }

</script>

<form on:submit|preventDefault={login} class="flex mx-auto col-6">

    <div >
        <label for="username">Username</label>
        <input type="text" id="username" bind:value={username}/>
    </div>

    <div >
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password}/>
    </div>

    <button type="submit">Submit</button>
    <div>
        <small>{error}</small>
    </div>

</form>
