# CPanelX Deployment Workflow for ThinqMedia

To deploy this Next.js application to CPanelX, follow these precise steps:

## 1. Upload the Code
*   **Option A (Git)**: Use the CPanel **Git™ Version Control** tool to clone this repository.
*   **Option B (ZIP)**: Upload the repository files directly to your CPanel folder.

## 2. Setup Node.js Application
1.  Search for **Setup Node.js App** in CPanel.
2.  Click **Create Application**.
3.  **Node.js version**: Select `18.x` or higher.
4.  **Application mode**: Select `Production`.
5.  **Application root**: Path to your code (e.g., `thinqmedia`).
6.  **Application URL**: Your domain (e.g., `thinqmedia.com`).
7.  **Application startup file**: Set this to `server.js`.
8.  Click **Create**.

## 3. Install Dependencies & Build
Once the app is created, you will see a command to enter the virtual environment at the top of the page. Copy and run it in your CPanel Terminal, then:

```bash
# Install all dependencies
npm install

# Generate Prisma Client (CRITICAL)
npx prisma generate

# Build the Next.js application
npm run build
```

## 4. Run the App
In the **Setup Node.js App** interface:
1.  Click **Edit** on your application.
2.  Click **Restart**.

## 5. Persistence (Important)
Since we have hardcoded the database connection in `src/lib/prisma.ts`, you do NOT need to set up a `.env` file on CPanel for the database to work. However, ensure that the CPanel MySQL user has access to the database as configured.

---
**ThinqMedia Tech Support**
