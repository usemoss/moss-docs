# moss-docs

> Documentation and setup instructions for Moss - real-time semantic search for conversational AI

I want you to set up the Moss documentation repository for local development. Execute all the steps below autonomously.

OBJECTIVE: Clone the Moss documentation repository, install dependencies, and start a local preview server to view and contribute to the documentation.

DONE WHEN: Local documentation server is running and accessible at http://localhost:3000, and you can view the Moss documentation in your browser.

## TODO

- [ ] Verify Node.js v20.17.0+ is installed
- [ ] Verify Git is installed
- [ ] Clone or fork the moss-docs repository
- [ ] Navigate to the project directory
- [ ] Install the Mintlify CLI globally
- [ ] Start the local documentation preview server
- [ ] Verify the preview is accessible at localhost:3000

## Prerequisites

You need to have Node.js v20.17.0 or higher installed. Verify your Node.js version:

```bash
node --version
```

You must also have Git installed:

```bash
git --version
```

## Clone the repository

If you plan to contribute, you should fork the repository first on GitHub, then clone your fork:

```bash
git clone https://github.com/your-username/moss-docs
```

If you just want to preview the documentation locally without contributing, clone the main repository:

```bash
git clone https://github.com/usemoss/moss-docs
```

Navigate into the repository:

```bash
cd moss-docs
```

## Install the Mintlify CLI

You need to install the Mintlify CLI globally to preview documentation changes locally.

Using npm:

```bash
npm i -g mint
```

Verify the installation:

```bash
mint --version
```

## Start the local preview server

You must start the development server from the root of the documentation directory where `mint.json` is located:

```bash
mint dev
```

Your documentation preview is now available at `http://localhost:3000`.

If port 3000 is already in use, you can specify a custom port:

```bash
mint dev --port 3333
```

## Verify the preview

Open your browser and navigate to http://localhost:3000 to confirm the Moss documentation site is running correctly.

You should see the Moss documentation homepage with sections for User Guides, API Documentation, and Integrations.

## Making changes

If you're contributing to the documentation:

Create a new branch for your changes:

```bash
git checkout -b your-branch-name
```

Make your edits to the documentation files. The preview server will automatically reload to show your changes.

When you're satisfied with your changes, commit them:

```bash
git add .
git commit -m "Description of your changes"
```

Push your branch to your forked repository:

```bash
git push origin your-branch-name
```

Then submit a Pull Request from your forked repository to the main branch of the moss-docs repository.

## Troubleshooting

If Mintlify dev isn't running properly, update to the latest version:

```bash
mint update
```

If a page loads as a 404, make sure you are running the command from the directory containing `mint.json`.

If you encounter errors during installation, try reinstalling the CLI:

```bash
npm i -g mint@latest
```

## Additional CLI commands

Check for broken links in the documentation:

```bash
mint broken-links
```

Check for accessibility issues:

```bash
mint a11y
```

EXECUTE NOW: Complete the above TODO list to achieve: Local documentation server is running and accessible at http://localhost:3000, ready for viewing and contributing to Moss documentation.