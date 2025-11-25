<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import styles from "$lib/assets/style.css";
    import logo from "$lib/assets/logo.svg";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<header>
    <div>
        <a href="/">
            <img src={logo} alt="Steinbart-Gymnasium Logo" />
        </a>
        <h1>Quintin-Events</h1>
    </div>
    <nav>
        <a href="/">Anmeldung</a>
        <a href="/2025">Teilnehmende</a>
    </nav>
</header>
<main class="container">
    {@render children()}
</main>

<footer>
    <p>&copy; 2025 Quintin-Events</p>
</footer>
