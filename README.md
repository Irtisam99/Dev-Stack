# React + TypeScript + Vite

# Dev Stack Builder

A responsive Dev Stack Builder website where developers can explore different technologies and build their own development stack. Users can browse technologies by category, add technologies to their stack, remove individual technologies, or clear the entire stack.

## 🌐 Live Website
[ ]
---

## ✨ Features

* 🧩 Explore frontend, backend, database, language, styling, DevOps, and development tools.
* 🛠️ Build a personal technology stack by adding and removing technologies.
* 🔔 Get real-time toast notifications when technologies are added, removed, or duplicated.
* 📱 Fully responsive design for mobile, tablet, and desktop devices.
* ⏳ Loading state while technology data is being loaded from a JSON file.
* 🎨 Gradient-based brand theme for the logo, hero section, and primary buttons.

---

## 🛠️ Technologies Used

* **React.js** — Building the user interface
* **TypeScript** — Type-safe JavaScript
* **Tailwind CSS** — Styling and responsive design
* **React-Toastify** — Toast notifications
* **JSON** — Storing technology data
* **Vite** — Development and build tool
* **React Icons** — Icons used in the interface

---

## 📋 Project Features

### Technology Cards

Each technology card displays:

* Technology icon
* Technology name
* Description
* Category
* Difficulty level
* Rating
* Badge
* Add to Stack button

### Your Stack

Users can:

* Add technologies to their stack
* See the number of selected technologies
* Remove individual technologies
* Remove all selected technologies
* See an empty state when no technologies are selected

The same technology cannot be added twice.

### Responsive Design

The website is designed to work across:

* 📱 Mobile devices
* 📱 Tablets
* 💻 Desktop screens

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to write and understand because we can describe the UI directly inside the component.

Example:

```tsx
const App = () => {
  return <h1>Hello React</h1>;
};
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component that can change over time.

For example, in this project, `technology` is passed to `TechnologyCard` as a prop, while `selectedTechnologies` is managed as state in `App`.

---

## 3. What does the `useState` hook do, and where did I use it in this project?

The `useState` hook lets us create and manage changing data inside a React component.

In this project, I used `useState` to store the selected technologies:

```tsx
const [selectedTechnologies, setSelectedTechnologies] =
  useState<ITechnology[]>([]);
```

I also used `useState` to store the promise used to load the technology data.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component, such as fetching data from an API or working with external resources.

In this project, the JSON data is loaded asynchronously. However, this implementation uses React's `Suspense` and `use()` approach to load the JSON data instead of `useEffect`.

The promise is created in `App`, and the `Technologies` component reads the promise using React's `use()` function.

```tsx
const technologies = use(technologyPromise);
```

`Suspense` displays the loading message while the data is being loaded.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

A unique key helps React understand which items were added, removed, or changed, so it can update the UI efficiently.

In this project, I used the technology `id` as the key:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, I used it to show an empty message when no technology has been selected.

```tsx
{selectedTechnologies.length === 0 ? (
  <div>
    Your stack is empty.
  </div>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

When the stack is empty, the empty message is displayed. Otherwise, the selected technologies are shown.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child through **props**.

In this project, `App` passes the technology data and functions to `Technologies`, and `Technologies` passes technology information and functions to `TechnologyCard`.

For example:

```tsx
<TechnologyCard
  technology={technology}
  isAdded={isAdded}
  addToStack={addToStack}
/>
```

The child can send information back to the parent by calling a function that the parent passed as a prop.

For example:

```tsx
onClick={() => addToStack(technology)}
```

Here, `TechnologyCard` calls `addToStack`, which is a function defined in the parent component.

---

## 📁 Project Structure

```text
src/
├── assets/
│   ├── logo-text.png
│   └── banner-stack.png
│
├── types/
│   └── technologyType.ts
│
├── App.tsx
├── Nav.tsx
├── Hero.tsx
├── Technologies.tsx
├── TechnologyCard.tsx
├── Footer.tsx
└── data.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd your-project-folder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the website.

---

## 👨‍💻 Author

**Irtisam Alavi**

