<script lang="ts">
    import { createRsvp, getRsvps } from "./data.remote";
</script>

<h2>Kollegiums-Weihnachtsfeier am Steinbart</h2>
<p>
    Bitte füllt dieses Formular aus, um bei der Weihnachtsfeier zuzusagen. Das
    erleichtert uns die Planung.
</p>

<h2>Anmeldung</h2>
<form {...createRsvp}>
    <label>
        Name
        <input type="text" name="name" required />
    </label>

    <fieldset>
        <legend>Teilnahme</legend>

        <label>
            <input type="radio" name="status" value="ja" required />
            Ja
        </label>

        <label>
            <input type="radio" name="status" value="nein" />
            Nein
        </label>

        <label>
            <input type="radio" name="status" value="vielleicht" />
            Vielleicht
        </label>
    </fieldset>
    <label>
        (Primärer) Getränkewunsch
        <select name="drinkCategory">
            <option value="Egal">Egal</option>
            <option value="Wasser">Wasser</option>
            <option value="Softdrinks">Softdrinks</option>
            <option value="Bier">Bier</option>
            <option value="Wein">Wein</option>
            <option value="Glühwein">Glühwein</option>
            <option value="Sonderwunsch">Siehe Sonderwunsch</option>
        </select>
    </label>
    <label>
        Sonderwünsche
        <input
            type="text"
            name="drinkNote"
            placeholder="Schorle aus meinem Geburtsjahr"
        />
    </label>
    <label>
        Fingerfood fürs Buffet
        <input type="text" name="food" placeholder="Pizzaschnecken" />
    </label>
    <label>
        Musikwünsche
        <input type="text" name="music" placeholder="Irgendwas vom Robbie" />
    </label>
    <label>
        Kommentar/Beitrag
        <input
            type="text"
            name="comment"
            placeholder="Beispiel: Auf der Bühne könnte ich ..."
        />
    </label>

    <button type="submit">Absenden</button>
</form>

<h2>Teilnehmende</h2>
<div class="overflow-auto">
    <table class="striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Fingerfood</th>
                <th>Getränkewunsch</th>
                <th>Sonderwunsch</th>
                <th>Musikwünsche</th>
                <th>Kommentar</th>
            </tr>
        </thead>
        <tbody>
            {#each await getRsvps() as rsvp}
                <tr>
                    <td>{rsvp.name}</td>
                    <td>{rsvp.status}</td>
                    <td>{rsvp.food}</td>
                    <td>{rsvp.drinkCategory}</td>
                    <td>{rsvp.drinkNote}</td>
                    <td>{rsvp.music}</td>
                    <td>{rsvp.comment}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
