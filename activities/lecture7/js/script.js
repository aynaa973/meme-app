// In this example, I want to create an interactive form that allows Newt Scamander create a sort of inventory of the Fantastic Beasts he's rescuing
// Here's what we'll need to do:
// 1. Grab the input a user enters into our form
// 2. Represent this input in a meaningful way, let's say an Object
// 3. Push the contents of that Object into an Array
// 4. Reset our form so that the user can add a new creature if they want without having to manually delete the previous input
// 5. Display the new creature in our Array back to the user on our page

let creatures = [];
const form = document.getElementById("addCreatureForm"),
    creat = document.getElementById("creatureSanctuary");
const searchin = document.createElement("input");
searchin.type = "text";
searchin.id = "search";
searchin.placeholder = "Search";
searchin.className = "form-control mb-3";
searchin.addEventListener("input", () => displaycreat(searchin.value));

document.querySelector(".container").insertBefore(searchin, creat);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const creature = {
        id: Date.now(),
        name: form.creatureName.value,
        type: form.creatureType.value,
        habitat: form.creatureHabitat.value,
        imageUrl: form.imageUrl.value || null,
        notes: form.notes.value || "",
    };
    creatures.push(creature);
    displaycreat();
    form.reset();
});

const displaycreat = (filter = "") => {
    creat.innerHTML = creatures
        .filter(({ name }) => !filter || name.toLowerCase().startsWith(filter.toLowerCase()))
        .map(
            ({ id, name, type, habitat, imageUrl, notes }) => `
            <div class="card mb-3 p-3">
                <h3>${name}</h3>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Habitat:</strong> ${habitat}</p>
                <p><strong>Notes:</strong> ${notes || "No notes"}</p>
                ${imageUrl ? `<img src="${imageUrl}" alt="${name}" class="img-fluid mb-2">` : ""}
                <button class="btn btn-danger btn-sm" onclick="removecreat(${id})">Remove</button>
            </div>`
        )
        .join("");
};
const removecreat = (id) => {
    creatures = creatures.filter((creature) => creature.id !== id);
    displaycreat();
};