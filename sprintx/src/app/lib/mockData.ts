export const mockStudents = {
  "2tca": [
    { id: 1, name: "Jan de Vries", class: "2tca", yearStarted: 2023 },
    { id: 2, name: "Emma Bakker", class: "2tca", yearStarted: 2023 },
  ],
  "2tcb": [
    { id: 3, name: "Lucas van Dijk", class: "2tcb", yearStarted: 2023 },
    { id: 4, name: "Sophie Jansen", class: "2tcb", yearStarted: 2023 },
  ],
  "3tca": [
    { id: 5, name: "Tim Hendriks", class: "3tca", yearStarted: 2022 },
    { id: 6, name: "Lisa Visser", class: "3tca", yearStarted: 2022 },
  ],
  "3tcb": [
    { id: 7, name: "Daan Smit", class: "3tcb", yearStarted: 2022 },
    { id: 8, name: "Anna Mulder", class: "3tcb", yearStarted: 2022 },
  ],
  "4tca": [
    { id: 9, name: "Thomas Peters", class: "4tca", yearStarted: 2021 },
    { id: 10, name: "Julia de Boer", class: "4tca", yearStarted: 2021 },
  ],
  "4tcb": [
    { id: 11, name: "Max van den Berg", class: "4tcb", yearStarted: 2021 },
    { id: 12, name: "Eva Vermeulen", class: "4tcb", yearStarted: 2021 },
  ],
};

export const mockProjects = {
  1: {
    id: "1",
    title: "Metalen Doos Project",
    description: "Ontwerp en maak een decoratieve metalen doos met eigen ontwerp",
    status: "completed" as const,
    grade: 85,
    studentWork: "Ik heb een doos gemaakt met bloemmotieven. De afmetingen zijn 20x15x10 cm. Voor de decoratie heb ik verschillende metaalbewerkingstechnieken gebruikt.",
    teacherFeedback: "Uitstekend werk! De afwerking is zeer netjes en de decoratieve elementen zijn creatief toegepast. Let volgende keer op de symmetrie van het patroon.",
    exampleWork: "Voorbeeld van een basis metalen doos met technische tekeningen en afmetingen. De doos moet minimaal één scharnier en een sluitmechanisme bevatten.",
    yearLevel: 2
  },
  2: {
    id: "2",
    title: "Basis Lassen",
    description: "Leer de fundamentele lastechnieken en pas deze toe in een eenvoudig project",
    status: "in_progress" as const,
    exampleWork: "Demonstratie van verschillende lastechnieken: MIG/MAG lassen, puntlassen en booglassen. Inclusief veiligheidsvoorschriften en materiaalkennis.",
    yearLevel: 2
  },
  3: {
    id: "3",
    title: "Gevorderd Lassen",
    description: "Complexe lastechnieken toepassen in een praktijkproject",
    status: "completed" as const,
    grade: 78,
    studentWork: "Project over TIG-lassen met verschillende materialen",
    teacherFeedback: "Goede beheersing van de techniek, werk aan de consistentie",
    exampleWork: "Voorbeelden van TIG-laswerk en materiaalcombinaties",
    yearLevel: 3
  },
  4: {
    id: "4",
    title: "Metalen Meubel",
    description: "Ontwerp en vervaardig een functioneel meubelstuk van metaal",
    status: "in_progress" as const,
    exampleWork: "Voorbeelden van metalen stoelen, tafels en andere meubelstukken",
    yearLevel: 3
  },
  5: {
    id: "5",
    title: "Eindproject Metaaltechniek",
    description: "Zelfstandig een complex metaalproject uitvoeren",
    status: "in_progress" as const,
    exampleWork: "Diverse voorbeelden van eindprojecten uit voorgaande jaren",
    yearLevel: 4
  }
};

export const mockStudentProjects = {
  1: ["1", "2"],
  2: ["2"],
  3: ["1"],
  4: ["2"],
  5: ["3", "4", "1", "2"],
  6: ["3", "1"],
  7: ["4", "1", "2"],
  8: ["3", "2"],
  9: ["5", "3", "4", "1", "2"],
  10: ["5", "3", "1"],
  11: ["5", "4", "1", "2"],
  12: ["5", "3", "2"]
}; 