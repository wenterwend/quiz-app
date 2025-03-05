# Quiz Application

This is a lightweight and accessible quiz application that allows users to create terms and definitions, from which quizzes can be generated on-the-fly. The application is designed to be easy to use and extensible, making it suitable for various quiz formats.

## Features

- Create and manage terms and definitions.
- Generate quizzes in an ad-hoc manner.
- Support for multiple quiz formats:
  - Terms
  - Definitions
  - Both
  - True or False
  - Multiple Choice
  - Matching Terms to Definitions

## Project Structure

```
quiz-app
├── public
│   ├── index.html        # Main HTML document
│   └── styles.css       # Styles for the application
├── src
│   ├── components
│   │   ├── QuizForm.js   # Component for inputting terms and definitions
│   │   ├── QuizModal.js   # Modal for selecting quiz options
│   │   └── QuizOptions.js  # Component for presenting quiz options
│   ├── data
│   │   └── terms.js      # Data source for terms and definitions
│   ├── App.js            # Main application component
│   └── index.js          # Entry point of the application
├── package.json          # npm configuration file
├── .babelrc              # Babel configuration
├── .eslintrc.json        # ESLint configuration
└── README.md             # Project documentation
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd quiz-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Use the `QuizForm` component to input your terms and definitions.
- Open the `QuizModal` to select the type of quiz you want to create.
- Choose from the available options to generate your quiz.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.