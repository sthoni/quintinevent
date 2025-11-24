<script lang="ts">
    import { createRsvp, getRsvps } from "./data.remote";
</script>

<h1>Kollegiums-Weihnachtsfeier am Steinbart</h1>
<form {...createRsvp}>
    <label>
        Name
        <input type="text" name="name" required />
    </label>

    <fieldset>
        <legend>Teilnahme</legend>

        <label>
            <input type="radio" name="status" value="yes" required />
            Ja
        </label>

        <label>
            <input type="radio" name="status" value="no" />
            Nein
        </label>

        <label>
            <input type="radio" name="status" value="maybe" />
            Vielleicht
        </label>
    </fieldset>
    <label>
        Getränkewunsch
        <select name="drinkCategory">
            <option value="any">Keine Angabe</option>
            <option value="water">Wasser</option>
            <option value="softdrink">Softdrinks</option>
            <option value="beer">Bier</option>
        </select>
    </label>

    <button type="submit">Absenden</button>
</form>
<ul>
    {#each await getRsvps() as rsvp}
        <li>{rsvp.name}</li>
    {/each}
</ul>
