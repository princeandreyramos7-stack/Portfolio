# Prince Andrey A. Ramos - Portfolio Website

A sleek, professional portfolio website built with React and Tailwind CSS featuring dark mode, smooth animations, and responsive design.

## Features

- **Dark/Light Mode Toggle**: Seamless theme switching with persistent preferences
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Scroll-based animations and hover effects
- **Interactive Components**: Modal popups for project details
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Sections**:
  - Home with hero section
  - About Me
  - Projects with detailed modals (Courseware, LandCert, PIMS, ISAT e-TRACES)
  - Skills showcase (HTML, CSS, JS, React, Bootstrap, Tailwind, Laravel, MySQL, Git, PHP, Java)
  - Experience (Competitions & Client Projects)
  - Education & Certifications with images
  - Contact form

## Tech Stack

- React 18
- Tailwind CSS 3
- React Icons
- Context API for theme management
- Intersection Observer for scroll animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Update Content

- **Personal Info**: Edit `src/pages/Home.js`
- **Projects**: Modify the projects array in `src/pages/Projects.js`
- **Skills**: Update skills data in `src/pages/Skills.js`
- **Experience**: Edit experience array in `src/pages/Experience.js`
- **Education**: Modify education data in `src/pages/Education.js`
- **Blog Posts**: Update posts array in `src/pages/Blog.js`

### Styling

- **Colors**: Customize theme colors in `tailwind.config.js`
- **Animations**: Modify animation settings in `tailwind.config.js`
- **Global Styles**: Edit `src/index.css`

### Images

Add your images to the public folder:
- Project images: Place in `public/project_pictures/`
  - courseware.png
  - cpdo.png
  - pims.png
  - ISAT e-TRACES.jpg
- Certificate images: Place in `public/certificates/`
  - device-configuration.jpg
  - databases.jpg
  - roadshow.jpg
  - tron.jpg

## Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Button.js
│   │   ├── ProjectCard.js
│   │   ├── SkillCard.js
│   │   ├── BlogCard.js
│   │   └── Modal.js
│   ├── context/
│   │   └── ThemeContext.js
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Education.js
│   │   ├── Blog.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## License

MIT License - feel free to use this project for your own portfolio!

## Contact

For questions or suggestions, feel free to reach out!
