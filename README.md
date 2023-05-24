# Chatboy

# Chatbot Documentation

This documentation provides an overview of the Chatboy project, which is an Angular-based chatbot application that utilizes the OpenAI API, RxJS, and SCSS. For this project, we'll be using the MVC (
Model-View-Controller) structural design pattern which separates the application logic into three interconnected components: the Model, the View, and the Controller. The Model represents the data, the View is responsible for displaying the data, and the Controller handles the interactions between the Model and the View. This will allow us to have a codebase that is easy to read and maintain.

Here is a simple example of how this work:

**Model (user.model.ts):**

```typescript
export class User {
  id: number;
  name: string;
  email: string;
}
```

**View (user.component.html):**

```html
<div>
  <h1>User Details</h1>
  <p>ID: {{ user.id }}</p>
  <p>Name: {{ user.name }}</p>
  <p>Email: {{ user.email }}</p>
</div>
```

**Controller (user.component.ts):**

```typescript
import { Component, OnInit } from "@angular/core";
import { User } from "./user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: User;

  ngOnInit() {
    // Simulating data retrieval from a service
    this.getUserDetails();
  }

  getUserDetails() {
    // Simulating API call or data retrieval
    this.user = {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    };
  }
}
```

In this example, we have a `User` model that represents user data. The view template displays the user details using interpolation (`{{ }}`). The controller component `UserComponent` initializes the `user` property and retrieves the user details in the `getUserDetails` method (which could simulate an API call or data retrieval).

This is a basic illustration of the MVC pattern in Angular, where the model (user.model.ts) represents the data, the view (user.component.html) handles the presentation, and the controller (user.component.ts) manages the logic and data flow between the model and the view.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Configuration](#configuration)
5. [Components](#components)
6. [Services](#services)
7. [Styling](#styling)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

The Chatbot project is a conversational interface built with Angular that leverages the OpenAI API to generate responses. It utilizes RxJS for handling asynchronous operations and SCSS for styling.

## Installation

To install the Chatbot project, follow these steps:

1. Clone the repository from GitHub:

```
git clone https://github.com/your-username/chatbot.git
```

2. Navigate to the project directory:

```
cd chatbot
```

3. Install the project dependencies:

```
npm install
```

## Usage

To run the Chatbot application locally, use the following command:

```
ng serve
```

Access the application in your browser at `http://localhost:4200`.

## Configuration

The Chatbot project requires an OpenAI API key for integration. Follow these steps to set up the API key:

1. Sign up for an account on the OpenAI platform (https://openai.com).
2. Generate an API key in the OpenAI developer dashboard.
3. In the project directory, create a file named `config.ts`.
4. Add the following code to `config.ts`:

```typescript
export const environment = {
  production: false,
  openAiApiKey: "YOUR_API_KEY",
};
```

Replace `'YOUR_API_KEY'` with your actual OpenAI API key.

## Components

The Chatbot project consists of the following Angular components:

1. **ChatComponent**: Responsible for displaying the chat interface and user messages.
2. **MessageComponent**: Renders individual chat messages.
3. **InputComponent**: Handles user input and triggers message generation.

## Services

The project utilizes the following Angular services:

1. **ChatService**: Manages the state of the chat conversation and interacts with the OpenAI API to generate responses.
2. **ApiService**: Provides an interface for making HTTP requests to the OpenAI API.

## Styling

The Chatbot application uses SCSS for styling. The project's styles are organized as follows:

```
src/
  styles/
    _variables.scss       # Variables and global styles
    _mixins.scss          # Reusable SCSS mixins
    main.scss             # Entry point for styles
```

Feel free to customize the styles to match your project's requirements.

## Contributing

Contributions to the Chatbot project are welcome. If you encounter any issues or have suggestions for improvements, please create an issue or submit a pull request on the GitHub repository.

## License

The Chatbot project is released under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the code as per the terms of this license.

---

This documentation provides a high-level overview of the Chatbot project. For more detailed information, refer to the source code and comments within the project files.

If you have any further questions or need assistance, please don't hesitate to reach out to the project maintainers.
