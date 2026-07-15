# Frames Web Application Documentation

## Overview
The **Frames Web App** is a client-side JavaScript application built with Vite, designed to help aluminum window and door manufacturers calculate the required materials and optimal cutting plans for their projects. 

Users can input specifications for various "Openings" (Aberturas), specifying the series, color, glass type, pre-frame (premarco), width, height, and quantity. The application computes the individual pieces needed, generates a production report, groups identical frames, and performs a bin-packing optimization to minimize the amount of raw aluminum bars used.

## Tech Stack
- **Build Tool:** Vite
- **Language:** JavaScript (ES Modules, `.mjs` extensions for logic)
- **Styling:** Vanilla CSS (`style.css`)
- **State Management:** LocalStorage
- **Package Manager:** pnpm

## File Structure
```
frames-webapp/frames/
├── index.html                 # Main HTML entry point
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── src/
    ├── main.js                # App entry point, UI state and event listeners
    ├── style.css              # Main stylesheet
    └── js/                    # Domain logic and models
        ├── opening.mjs        # Class representing an Opening/Window
        ├── calulatePieces.mjs # Mathematical formulas for piece lengths
        ├── calculateMaterials.mjs # Bin-packing logic for bars & aggregation
        ├── reporteDeAccesorios.mjs# Aggregation of accessories
        ├── bar.mjs            # Data model for a raw aluminum bar
        ├── frame.mjs          # Data model for a frame piece
        ├── displayBars.mjs    # UI generation for calculated materials
        ├── displayCuttingPlan.mjs # UI generation for the cutting plan
        └── utils.mjs          # Utilities for LocalStorage
```

## Complete Workflow

The complete end-to-end workflow of the application is as follows:

1. **User Input (`main.js`):** The user fills out the HTML form with the details of the desired opening (serie, color, width, height, glass type, quantity, etc.) and clicks "Agregar Abertura".
2. **Opening Initialization (`opening.mjs`):** The form data is passed to a new `Opening` instance. 
   - The `Opening` object invokes specific mathematical functions (from `calulatePieces.mjs`) based on the selected serie to determine the exact length of every required piece (frames, sashes, screen, glass dimensions).
   - It instantiates `Frame` objects for each calculated part (e.g., `Horizontal Frame`, `Lateral Shash`) and maps them to their respective supplier product codes.
3. **Data Persistence (`utils.mjs`):** The fully initialized `Opening` object's raw configuration is pushed into a `LocalStorage` array. This ensures the list of openings persists across page reloads.
4. **Action - Production Report (`main.js`):** If the user clicks "Production", the app iterates over the saved openings, calls `getStringFrames()` on each `Opening` instance, and prints a text-based summary of all pieces (grouped per opening) to the screen.
5. **Action - Calculate Materials (`main.js` -> `calculateMaterials.mjs`):** 
   - When the user clicks "Calculate Materials", the app reconstructs all `Opening` objects from `LocalStorage`.
   - It instantiates `calculateMaterials` passing the list of all openings.
   - **Grouping:** `calculateMaterials` extracts every single `Frame` from all openings and groups them together if they share the exact same profile code, color, and serie.
   - **Optimization:** For each unique group of lengths, it calculates the minimum number of 6m (or 6.75m) raw bars required by using Bin Packing algorithms.
   - **Accessories:** It also aggregates the required hardware accessories (screws, wheels, locks).
6. **Display Results (`displayBars.mjs`, `displayCuttingPlan.mjs`):** The optimized list of raw `Bar` objects (including cutting plans) and accessories is converted to HTML. The user can interact with the results to toggle the "Cutting Plan" which shows visually how to slice each raw bar.

## Core Modules Breakdown

### 1. `main.js` (UI & Orchestration)
The entry point that orchestrates the user interface.
- Dynamically injects the form to add openings into the `#app` container.
- Captures form submissions to instantiate `Opening` objects.
- Uses `utils.mjs` to persist data in LocalStorage.
- Handles the "Production" view (text-based list of pieces and lengths).
- Handles the "Calculate Materials" view by invoking `calculateMaterials.mjs` and rendering the results via `displayBars.mjs`.
- Implements print functionality.

### 2. `opening.mjs` (Domain Model)
The `Opening` class represents a single type of window or door.
- It uses the dimensions, serie, and features (DVH, pre-frame) to invoke the correct piece calculation logic from `calulatePieces.mjs`.
- Maps the calculated pieces to specific aluminum profiles (including part codes for suppliers like Abasur, Urualum, Juan, Aluminios del Uruguay).
- Creates instances of `Frame` for each calculated part (e.g., Vertical Frame, Horizontal Shash, etc.).
- Exposes `getStringFrames()` for the text-based Production report.

### 3. `calulatePieces.mjs` (Calculations)
Contains the exact mathematical formulas to calculate the lengths of the aluminum pieces and the dimensions of the glass based on the total width and height of the opening. Supports several structural series:
- Serie 20 (`s20`)
- Serie 25 (`s25`, `s25TripleRiel`)
- Probba Corrediza (`probbaCorrediza`, `probbaCorredizaTripleRiel`, `probbaCorredizaTresHojasEnDosRieles`)
- Gala Corrediza (`galaCorrediza`, `galaCorredizaTripleRiel`, `galaCorredizaCuatroRieles`)

---

## Deep Dive: `calculateMaterials.mjs`

The `calculateMaterials.mjs` module is the core computational engine responsible for optimizing raw material usage. It acts as a bridge between individual cut lengths and the physical raw bars (Standard 5.95m or Custom 6.75m) ordered from suppliers.

### Step 1: `classificateFrames()`
This method performs an exhaustive classification. It iterates over all the `openings` passed into the constructor.
Instead of dealing with pieces randomly, it manually maps every single frame type (e.g., `horizontalFrame`, `lateralShash`) to a highly specific, pre-defined array based on **Serie**, **Color**, and **Frame Name**. 

> [!NOTE]
> For example, if it finds an opening of `Serie 20` painted `blanco` (white), it pushes the `horizontalFrame` pieces to `this.horizontalFramesS20Blanco`, and the `verticalFrame` pieces to `this.verticalFramesS20Blanco`.

Once all frames from all openings are bucketed, it gathers all these distinct arrays into a single `this.framesArrays` matrix.

### Step 2: `calculateLenghtGroups(frames)`
For each bucketed array of frames, this function extracts just the numerical lengths needed. If an opening requires 2 vertical frames, it pushes the length twice into a flat numerical array. This strips away object complexity and prepares a raw dataset of lengths (e.g., `[1200, 1200, 1500, 1500, 800]`) for optimization.

### Step 3: `calculateFrameBarsQuantityWithCustomLength(lenghtGroup, barLength)`
This is the heart of the material optimization. It solves a classic **1D Bin Packing Problem**: Given a set of required lengths (`lenghtGroup`) and a fixed raw bar length (`barLength`), find the absolute minimum number of bars needed, accounting for saw blade waste (the `slice = 4` mm constant per cut).

#### 1. Baseline: Greedy Bin Packing
The function first sorts the required lengths in descending order. It then runs a `greedyBinPacking` algorithm:
- It takes the largest piece and tries to fit it into the first available bin (bar).
- If it doesn't fit, it creates a new bin.
- This provides a very fast, "good enough" baseline result.

#### 2. Threshold Check
If there are more than 40 pieces in the `lenghtGroup`, the algorithm stops here and returns the Greedy result. Computing the absolute perfect mathematical optimum for > 40 pieces is highly computationally expensive (NP-Hard problem), and the greedy approach is usually within 1% of optimal anyway.

#### 3. Optimization: Branch and Bound (DFS)
If there are 40 pieces or fewer, the code applies a deeper **Depth-First Search (DFS)** with **Branch and Bound** pruning to attempt to beat the Greedy baseline.

- **State Tracking:** It uses a recursive `dfs_bnb` function to test every possible combination of pieces in different bins.
- **Pruning 1 (Current Best):** If the current branch being explored already requires as many bins as the `bestSolution` (the greedy baseline), it aborts that branch immediately.
- **Pruning 2 (Lower Bound Volume Check):** It calculates the total volume (length) of the remaining pieces. If mathematically `currentBins + (remainingVolume / barLength) >= bestSolution`, it knows this branch cannot possibly beat the best score, so it aborts early.
- **Pruning 3 (Symmetry Breaking):** If it's trying to place a piece in a bin, and another bin has the exact same amount of free space, it skips the duplicate branch to save compute time.

If the DFS algorithm finds a combination that uses fewer bars than the Greedy baseline, it updates the `bestSolution` and saves the exact `cuttingPlan` (which pieces go in which bar).

### Step 4: Structuring the Output
Once the optimization is done, it creates a `bar` object for that specific group (e.g., "Vertical Frame Serie 20 Blanco"). It stores the `quantity` of bars needed, the supplier `code`, the `cuttingPlan` matrix, and flags the calculation method (`"Optimal"` or `"Greedy"`). These bars are aggregated into `this.frameBars` and returned to the UI.

---

## State Management
The application uses the browser's `localStorage` to persist the list of added openings, so data is preserved if the page reloads mid-session.
- `utils.addToLocalStorage()`: Pushes a new opening's raw configuration to the array.
- `utils.getLocalStorage()`: Retrieves the stored array of openings on load.
- On initialization, `main.js` currently clears the LocalStorage to prevent stale sessions upon starting a fresh browser load.

## Getting Started

To run the web app locally:

1. Ensure `pnpm` and `Node.js` are installed on your system.
2. Navigate to the `frames` directory via terminal:
   ```bash
   cd c:\Users\fckol\OneDrive\Documentos\frames-webapp\frames
   ```
3. Install the dependencies:
   ```bash
   pnpm install
   ```
4. Run the development server:
   ```bash
   pnpm run dev
   ```
5. Open the local URL (e.g., `http://localhost:5173`) provided by Vite in your browser.

To build the application for production:
```bash
pnpm run build
```
This will bundle the app via Vite into the `dist` directory, optimizing all files using the `vite-plugin-singlefile` configuration for easy deployment.
