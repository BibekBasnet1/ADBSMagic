
# AdBsMagic

AdBsMagic is a Node.js project with TypeScript and Jest for testing. It provides functionality to manage and process various data related to your system. This README will guide you through setting up, running, and contributing to the project.

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/BibekBasnet1/ADBSMagic.git
cd AdBsMagic
```

### 2. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Build the Project

To compile the TypeScript files and prepare the project for running:

```bash
npm run build
```

### 4. Run Tests

To run the tests with Jest:

```bash
npm test
```

This will run all the test suites defined in your project.

## 📂 Folder Structure

```bash
├── dist/               # Compiled JavaScript files
├── node_modules/       # Node.js modules
├── src/                # Source code written in TypeScript
│   ├── utils/          # Utility functions
│   │   ├── calendarData.ts   # bsCalendar
│   │   ├── formatDate.ts       # Date Calculation Logic
│   │   ├── types.ts          # type definition
│   │   └── validateDate.ts   # validations
│   └── index.ts        # Main entry point of the app
├── package.json        # Project configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

## 🛠️ Development

### Running the Development Server

To run the development server:

```bash
npm run dev
```

This will start the server and allow you to make changes in the `src/` folder.

[//]: # (### Linting and Formatting)

[//]: # (We use `ESLint` and `Prettier` for code linting and formatting. To check and fix issues:)

[//]: # ()
[//]: # (```bash)

[//]: # (npm run lint)

[//]: # (npm run lint:fix)

[//]: # (```)

### Testing

We use Jest for testing. To run all tests:

```bash
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

### Build

To create a production build:

```bash
npm run build
```

This will transpile the TypeScript code into JavaScript and output it in the `dist/` directory.

## 📄 Configuration

This project uses `ts-jest` for TypeScript testing. Ensure that you have a valid `jest.config.js` file in your project directory.

## 👥 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new pull request

## 📝 License

This project is licensed under the MIT License.
