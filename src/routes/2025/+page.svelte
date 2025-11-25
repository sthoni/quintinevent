<script lang="ts">
    import { getRsvps } from "../data.remote";
</script>

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
