# Asma-web-developer

projet perso

application, présentation de projets réalisés 

# lien vers le projet 
https://asma-web-developer.vercel.app

# langages utilisés 
    - Next.js
    - Nest.js 
    - Postgres 
    - deploiement : vercel + render 

# Se connecter à la BDD
psql -U asma -d postgres
Quitter postgres
\q

Lancer le front : 
pm run dev

Lancer la back : 
npm run start:dev



/my-portfolio
├── public/                 # Images, CV PDF, favicon, etc.
├── styles/                # Fichiers globaux (ex: tailwind.css)
│   └── globals.css
├── components/            # Composants réutilisables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── SkillBadge.tsx
│   └── ...
├── sections/              # Sections de page (HomeHero, AboutSection, etc.)
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── ...
├── app/                   # (Si tu utilises le router App de Next 13+)
│   ├── layout.tsx
│   ├── page.tsx           # page d'accueil
│   ├── projects/
│   │   └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/               # Routes API internes (si besoin)
│       └── contact/       # Exemple de POST email de contact
│           └── route.ts
├── lib/                   # Fonctions utilitaires / helpers
│   ├── fetchProjects.ts
│   └── ...
├── constants/             # Données statiques / mocks temporaires
│   └── skills.ts
├── types/                 # Interfaces et types TypeScript
│   └── index.ts
├── tailwind.config.js
├── tsconfig.json
├── .eslintrc.js
├── package.json
└── README.md
