<h1><div align="left">
  <img alt="moss" width="500px" height="auto" src="logo/moss-wordmark-dark.svg" />
</div></h1>

Welcome to the Moss documentation repository! This project contains the official [documentation](https://docs.moss.dev) for the Moss project.

This repository is deployed on [docs.moss.dev](https://docs.moss.dev).

## What is Moss?

Moss is the real-time semantic search for conversational AI. Things like [voice support agents](https://docs.moss.dev/docs/integrations/pipecat), [product documentation bots](https://docs.moss.dev/docs/build/offline-first-search), [knowledge-grounded assistants](https://docs.moss.dev/docs/build/voice-agent-livekit), customer FAQ helpers, and AI copilots that need instant access to your data.

It delivers sub-10ms semantic lookups with instant index updates - no extra infrastructure needed. Run it in the browser, on-device, or in the cloud, wherever your agent lives.

## Documentation Structure

This repository is dedicated to maintaining up-to-date, high-quality documentation to support users and contributors. Here you’ll find:

- **User Guides**: Step-by-step instructions to get started with Moss.
- **API Documentation**: Detailed API references.
- **Integrations**: Hands-on tutorials to help you automate your workflows.

## Contributing to the Documentation

We welcome contributions of all kinds! Whether you're fixing a typo, adding a new section, or improving the readability of the existing content, your help is appreciated. Follow these steps to get involved:

1. **Fork this repository**: Start by forking the Moss Docs repository to your GitHub account.

2. **Clone the repository**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/moss-docs
   ```
3. **Create a branch**: For your contribution, create a new branch.
   ```bash
   git checkout -b your-branch-name
   ```
4. **Make your changes**: Edit or add files as necessary.
5. **Test your changes**: Ensure that your changes look correct and follow the style guide. Refer to **Development** section to test portal locally.
6. **Commit your changes**: Once you're satisfied with your changes, commit them with a meaningful message.

```bash
git commit -m "Description of your changes"
```

7. **Push your changes**: Push your branch to your forked repository.

```bash
git push origin your-branch-name
```

9. **Submit a Pull Request (PR)**: Open a PR from your forked repository to the main branch of this repo. Describe the changes you've made clearly.

Our maintainers will review your PR, and once everything is good, your contributions will be merged!

### Development

The documentation is using [Mintlify](https://mintlify.com/) to render beautifuly. Mintlify comes with a set of [components](https://mintlify.com/docs/content/components/) to help you write better more interactive documentation.

Install the [Mint CLI](https://www.npmjs.com/package/mint) to preview the documentation changes locally. To install, use the following command

```
npm i -g mint
```

Run the following command at the root of your documentation (where mint.json is)

```
mint dev
```

Open `https://localhost:3000` in your browser and check your changes.

#### Troubleshooting

- Mintlify dev isn't running - Run `mint update` to get the latest version.
- Page loads as a 404 - Make sure you are running in a folder with `mint.json`