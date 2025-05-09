# AdBsMagic

AdBsMagic is a Node.js project with TypeScript and Jest for testing. It provides functionality to manage and process various data related to your system. This README will guide you through setting up, running, and contributing to the project.

## 📦 Installation

To get started with AdBsMagic, you need to install it as a dependency:

```bash
npm install adbsmagic
```

Or if you're using Yarn:

```bash
yarn add adbsmagic
```

## 🚀 Usage

Once installed, you can use the provided functions in your code. For example:

```ts
import { BSToAD, ADToBS } from "adbsmagic";

console.log(BSToAD('2082-01-26')); // Example BS to AD conversion
console.log(ADToBS('2082-01-25')); // Example AD to BS conversion
```

### Functions

- **BSToAD(date: string):** Converts a given BS date string to an AD date string.
- **ADToBS(date: string):** Converts a given AD date string to a BS date string.

## 🧪 Running Tests

To run the tests for this package, you can use Jest. Run the following command:

```bash
npm test
```

This will execute the tests and give you the results.

## 👥 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new pull request

## 📜 License

This project is licensed under the MIT License.
