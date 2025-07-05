# Portfolio Website

A modern, responsive portfolio website built with Angular 17, featuring a clean design and smooth animations.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Angular 17**: Built with the latest Angular features using standalone components
- **Optimized**: Fast loading with optimized assets and code splitting
- **SEO Friendly**: Meta tags and structured data for better search engine visibility
- **Accessible**: Built with accessibility in mind

## Sections

- **Header**: Navigation bar with smooth scrolling to sections
- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal introduction with statistics and highlights
- **Skills**: Technical skills organized by category with visual indicators
- **Projects**: Portfolio of work with project details and technologies used
- **Contact**: Contact form and social links

## Technologies Used

- Angular 17
- TypeScript
- HTML5 & CSS3
- Responsive Design
- CSS Grid & Flexbox
- CSS Animations
- Google Fonts

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio-website/portfolio-app
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

To customize the portfolio for your own use:

1. **Personal Information**: Update the content in each component template
2. **Colors**: Modify the CSS variables in the component styles
3. **Projects**: Replace the project data in the projects component
4. **Skills**: Update the skills array in the skills component
5. **Contact**: Replace contact information in the contact component

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── projects/
│   │   └── contact/
│   ├── app.component.*
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
├── index.html
└── styles.css
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

John Doe - john.doe@email.com

Project Link: [https://github.com/johndoe/portfolio-website](https://github.com/johndoe/portfolio-website)