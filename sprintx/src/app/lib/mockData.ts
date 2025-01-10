export type ClassName = "2tca" | "2tcb" | "3tca" | "3tcb" | "4tca" | "4tcb";

export const mockStudents: Record<ClassName, Array<{
  id: number;
  name: string;
  class: string;
  yearStarted: number;
}>> = {
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

type BaseProject = {
  id: string;
  title: string;
  description: string;
  exampleWork: string;
  yearLevel: number;
  subject: Subject;
};

type CompletedProject = BaseProject & {
  status: "completed";
  grade: number;
  studentWork: string;
  teacherFeedback: string;
};

type InProgressProject = BaseProject & {
  status: "in_progress";
};

type Project = CompletedProject | InProgressProject;

export type Subject = "metaal" | "hout" | "elektro" | "engineering";

export const mockProjects: Record<string, Project> = {
  1: {
    id: "1",
    title: "Metalen Doos Project",
    description: "Ontwerp en maak een decoratieve metalen doos met eigen ontwerp",
    status: "completed" as const,
    grade: 85,
    studentWork: "Ik heb een doos gemaakt met bloemmotieven. De afmetingen zijn 20x15x10 cm. Voor de decoratie heb ik verschillende metaalbewerkingstechnieken gebruikt.",
    teacherFeedback: "Uitstekend werk! De afwerking is zeer netjes en de decoratieve elementen zijn creatief toegepast. Let volgende keer op de symmetrie van het patroon.",
    exampleWork: "Voorbeeld van een basis metalen doos met technische tekeningen en afmetingen. De doos moet minimaal één scharnier en een sluitmechanisme bevatten.",
    yearLevel: 2,
    subject: "metaal"
  },
  2: {
    id: "2",
    title: "Basis Lassen",
    description: "Leer de fundamentele lastechnieken en pas deze toe in een eenvoudig project",
    status: "in_progress" as const,
    exampleWork: "Demonstratie van verschillende lastechnieken: MIG/MAG lassen, puntlassen en booglassen. Inclusief veiligheidsvoorschriften en materiaalkennis.",
    yearLevel: 2,
    subject: "metaal"
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
    yearLevel: 3,
    subject: "metaal"
  },
  4: {
    id: "4",
    title: "Metalen Meubel",
    description: "Ontwerp en vervaardig een functioneel meubelstuk van metaal",
    status: "in_progress" as const,
    exampleWork: "Voorbeelden van metalen stoelen, tafels en andere meubelstukken",
    yearLevel: 3,
    subject: "metaal"
  },
  5: {
    id: "5",
    title: "Houten Meubel",
    description: "Ontwerp en maak een functioneel houten meubelstuk",
    status: "completed" as const,
    grade: 82,
    studentWork: "Een moderne salontafel gemaakt van eikenhout. De afmetingen zijn 120x80 cm. Voor de decoratie heb ik verschillende houtbewerkingstechnieken gebruikt.",
    teacherFeedback: "Goede materiaalkeuze en afwerking. De afmetingen zijn juist en de decoratieve elementen zijn creatief toegepast.",
    exampleWork: "Voorbeelden van verschillende meubeltypes. De meubel moet minimaal één scharnier en een sluitmechanisme bevatten.",
    yearLevel: 2,
    subject: "hout"
  },
  6: {
    id: "6",
    title: "Eindproject Metaaltechniek",
    description: "Zelfstandig een complex metaalproject uitvoeren",
    status: "in_progress" as const,
    exampleWork: "Diverse voorbeelden van eindprojecten uit voorgaande jaren",
    yearLevel: 4,
    subject: "metaal"
  },
  7: {
    id: "7",
    title: "Basis Schakelingen",
    description: "Ontwerp en bouw elektrische basis schakelingen",
    status: "in_progress" as const,
    exampleWork: "Schema's van verschillende basis schakelingen",
    yearLevel: 2,
    subject: "elektro"
  },
  8: {
    id: "8",
    title: "3D-Ontwerp Basis",
    description: "Leer werken met CAD-software voor 3D-ontwerp",
    status: "completed" as const,
    grade: 88,
    studentWork: "3D-model van een mechanisch onderdeel. De afmetingen zijn 100x100x100 mm. Voor de ontwerp heb ik verschillende CAD-software gebruikt.",
    teacherFeedback: "Uitstekend begrip van de software. De afmetingen zijn juist en de technische tekeningen zijn correct.",
    exampleWork: "Voorbeelden van 3D-modellen en technische tekeningen",
    yearLevel: 2,
    subject: "engineering"
  },
  9: {
    id: "9",
    title: "Basis Schakelingen",
    description: "Ontwerp en bouw elektrische basis schakelingen",
    status: "in_progress" as const,
    exampleWork: "Schema's van verschillende basis schakelingen",
    yearLevel: 2,
    subject: "elektro"
  },
  10: {
    id: "10",
    title: "Metalen Meubel",
    description: "Ontwerp en vervaardig een functioneel meubelstuk van metaal",
    status: "in_progress" as const,
    exampleWork: "Voorbeelden van metalen stoelen, tafels en andere meubelstukken",
    yearLevel: 3,
    subject: "metaal"
  },
  11: {
    id: "11",
    title: "Eindproject Metaaltechniek",
    description: "Zelfstandig een complex metaalproject uitvoeren",
    status: "in_progress" as const,
    exampleWork: "Diverse voorbeelden van eindprojecten uit voorgaande jaren",
    yearLevel: 4,
    subject: "metaal"
  },
  12: {
    id: "12",
    title: "Basis Schakelingen",
    description: "Ontwerp en bouw elektrische basis schakelingen",
    status: "in_progress" as const,
    exampleWork: "Schema's van verschillende basis schakelingen",
    yearLevel: 2,
    subject: "elektro"
  },
  13: {
    id: "13",
    title: "3D-Ontwerp Basis",
    description: "Leer werken met CAD-software voor 3D-ontwerp",
    status: "completed" as const,
    grade: 88,
    studentWork: "3D-model van een mechanisch onderdeel. De afmetingen zijn 100x100x100 mm. Voor de ontwerp heb ik verschillende CAD-software gebruikt.",
    teacherFeedback: "Uitstekend begrip van de software. De afmetingen zijn juist en de technische tekeningen zijn correct.",
    exampleWork: "Voorbeelden van 3D-modellen en technische tekeningen",
    yearLevel: 2,
    subject: "engineering"
  },
  14: {
    id: "14",
    title: "Houten Kist",
    description: "Ontwerp en maak een decoratieve houten kist met eigen ontwerp",
    status: "completed" as const,
    grade: 83,
    studentWork: "Een kist gemaakt van eikenhout met traditionele houtverbindingen",
    teacherFeedback: "Goede uitvoering van de houtverbindingen. Let op de afwerking.",
    exampleWork: "Voorbeelden van verschillende houtverbindingen en afwerkingstechnieken",
    yearLevel: 2,
    subject: "hout"
  },
  15: {
    id: "15",
    title: "Basis Houtbewerking",
    description: "Leer fundamentele houtverwerkingstechnieken",
    status: "in_progress" as const,
    exampleWork: "Demonstratie van zagen, schaven, en verschillende verbindingstechnieken",
    yearLevel: 2,
    subject: "hout"
  },
  16: {
    id: "16",
    title: "Huisinstallatie",
    description: "Ontwerp en installeer een basis elektrische huisinstallatie",
    status: "completed" as const,
    grade: 85,
    studentWork: "Complete installatie met schakelingen voor verlichting en stopcontacten",
    teacherFeedback: "Nette bedrading en goede toepassing van veiligheidsvoorschriften",
    exampleWork: "Schema's en voorbeelden van huisinstallaties",
    yearLevel: 3,
    subject: "elektro"
  },
  17: {
    id: "17",
    title: "Arduino Basis",
    description: "Programmeer en bouw basis Arduino projecten",
    status: "in_progress" as const,
    exampleWork: "Voorbeelden van LED-besturing en sensortoepassingen",
    yearLevel: 2,
    subject: "elektro"
  },
  18: {
    id: "18",
    title: "3D-Printer Project",
    description: "Ontwerp en print een functioneel 3D-object",
    status: "completed" as const,
    grade: 90,
    studentWork: "Een zelf ontworpen en geprinte behuizing voor een Arduino project",
    teacherFeedback: "Uitstekend ontwerp met goede aandacht voor printbaarheid",
    exampleWork: "Voorbeelden van 3D-printbare ontwerpen en materiaalgebruik",
    yearLevel: 3,
    subject: "engineering"
  },
  19: {
    id: "19",
    title: "Robotica Introductie",
    description: "Bouw en programmeer een eenvoudige robot",
    status: "in_progress" as const,
    exampleWork: "Voorbeelden van robotontwerpen en basis programmeertaken",
    yearLevel: 2,
    subject: "engineering"
  }
};

export type StudentId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const mockStudentProjects: Record<StudentId, string[]> = {
  // 2nd year students (current year projects + some in progress)
  1: ["1", "2", "14", "17", "15", "19"],          // 2 metal, 2 wood, 1 elektro, 1 engineering
  2: ["2", "15", "17", "19", "1", "14"],          // 1 metal, 2 wood, 1 elektro, 1 engineering
  3: ["1", "14", "17", "19", "2", "15"],          // 1 metal, 2 wood, 1 elektro, 1 engineering
  4: ["2", "15", "17", "19", "1", "14"],          // 1 metal, 2 wood, 1 elektro, 1 engineering

  // 3rd year students (current year + previous year projects)
  5: ["3", "4", "16", "18",                       // Current year: advanced projects
      "1", "2", "14", "17", "19"],                // Previous year: basic projects
  6: ["3", "16", "18", "4",                       // Current year: advanced projects
      "1", "14", "17", "15", "19"],               // Previous year: basic projects
  7: ["4", "16", "18", "3",                       // Current year: advanced projects
      "2", "15", "17", "14", "19"],               // Previous year: basic projects
  8: ["3", "16", "18", "4",                       // Current year: advanced projects
      "1", "2", "14", "17", "19"],                // Previous year: basic projects

  // 4th year students (current year + previous years projects)
  9: ["5", "6", "16", "18",                       // Current year: final projects
      "3", "4", "14", "15",                       // Previous year: advanced projects
      "1", "2", "17", "19"],                      // 2nd year: basic projects
  10: ["5", "6", "16", "18",                      // Current year: final projects
       "3", "4", "14", "15",                      // Previous year: advanced projects
       "1", "2", "17", "19"],                     // 2nd year: basic projects
  11: ["5", "6", "16", "18",                      // Current year: final projects
       "3", "4", "14", "15",                      // Previous year: advanced projects
       "1", "2", "17", "19"],                     // 2nd year: basic projects
  12: ["5", "6", "16", "18",                      // Current year: final projects
       "3", "4", "14", "15",                      // Previous year: advanced projects
       "1", "2", "17", "19"]                      // 2nd year: basic projects
};

export type { Project, CompletedProject, InProgressProject }; 