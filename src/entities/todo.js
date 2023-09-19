// Definerer en klasse for at kunne oprette objekter med
// samme struktur på tværs af objekter.
export class Todo {
    constructor(content, created, deadline, priority, labels) {
        this.isCompleted = false;
        this.content = content;
        this.created = created;
        this.deadline = deadline;
        this.priority = priority;
        this.labels = labels;
    }

}