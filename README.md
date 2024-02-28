
# Admin Portal for Company Evaluation and Task Management

## Overview

<img src="https://github.com/velocitypanther/refine-kadan-dashboard/assets/112251957/55bf0c07-8cd2-4694-9c46-94724bd1bb5b" width="400" alt="Dashboard"/>
<img src="https://github.com/velocitypanther/refine-kadan-dashboard/assets/112251957/32d9068d-ed2e-44ac-b030-45ae1b98c9be" width="400" alt="Companies"/>
<img src="https://github.com/velocitypanther/refine-kadan-dashboard/assets/112251957/de4f41fe-2b9c-44bb-bcd2-efd1258cf28b" width="400" alt="Companies edit"/>
<img src="https://github.com/velocitypanther/refine-kadan-dashboard/assets/112251957/451ee964-5fff-4bf4-a7b9-8b876a5b4804" width="400" alt="Tasks Kadan"/>

This project is an admin portal designed to display recent evaluations of the company and manage tasks using a Kanban chart view. It is developed using React, Refine, TypeScript, and GraphQL, offering a robust and scalable solution for company administration.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Refine.js**: A React-based framework for building data-intensive applications with ease.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **GraphQL**: A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.
- **Vercel**: Deployment and hosting platform, enabling continuous deployment from Git across all of your projects.


## Deployment

The application is deployed on Vercel, offering a live demo accessible worldwide. Check it out:

[Live Demo](https://refine-kadan-dashboard.vercel.app/)

## Running Locally

To get the project running on your local machine, follow these steps:

### Prerequisites

- Node.js installed (version 12.x or later).
- A GraphQL backend/API endpoint to connect with (you may need to adjust `.env` file settings).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/velocitypanther/refine-kadan-dashboard
cd refine-kadan-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Setup your `.env` file according to the `.env.example` provided in the project.

4. Start the development server:

```bash
npm run dev
```

This will run the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

## Contributing

We welcome contributions to improve the admin portal! Please feel free to fork the repository, make changes, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the <MIT LICENSE>. See the LICENSE file for details.

```
MIT License

Copyright (c) 2024 Krish Makhijani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
