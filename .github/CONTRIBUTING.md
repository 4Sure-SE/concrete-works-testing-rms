## Contributing Guidelines

- [Commit Message](#commit-message)
- [Branch Naming](#branch-naming)
- [Pull Requests](#pull-requests)
- [File Naming](#file-naming)
- [Additional Guidelines](#additional-guidelines)

## Commit Message

When creating a commit, use the following format for the message:

`category: message`

### Categories

Use one of the following categories for your commits:

- `feat` - changes that introduce new code or features.

- `fix` - changes that fix a bug

- `refactor` - changes that refactor an implementation or are neither fixes nor features.

- `docs` - changes to existing documentation or creating new documentation.

- `build` - changes related to the build process, dependencies, or adding new dependencies.

- `test` - changes related to tests (e.g., adding new tests or modifying existing ones).

- `ci`: changes to the configuration of CI (e.g., GitHub Actions workflow).

- `chore`- changes that do not fit into any of the above categories, utility changes

### Examples

- `feat: add work item tables`
- `fix: resolve login redirect issue`
- `docs: update installation instructions`
- `refactor: separate work items table into components`
- `test: add unit tests for utils.ts`
- `build: upgrade next.js to version 15`
- `ci: add testing step to github actions workflow`
- `chore: change project list styles`
- `chore: update TableHeader styling for consistency`
- `chore: remove unused props from WorkItemRow component`
- `chore: adjust margin and padding in header on main layout`
- `chore: rearrange imports and cleanup in components/ui folder`
- `chore: update project list structure for better readability`

---

## Branch Naming

> [!NOTE]
> Check first if the issue you are assigned to has an existing branch before creating one.

- Use the format: `category/issue-id-description`.
- Use lowercase with hyphens (`-`) to separate words.
- Use `category` from the [commit categories](#categories) (e.g., `feat/dev-123-feature`, `fix`, etc.).

> [!NOTE]
> A branch can refer to the parent of the issues you are assigned to. For example, the branch `feature/dev-22-auth` has sub issues log in and sign up, both of which you are assigned to.

### Examples

- `feature/dev-1-auth` – for implementing sign up and log in.
- `fix/dev-3-project-redirect-bug` – For fixing a bug in authentication redirects.

## Pull Requests

To submit a pull request (PR), follow these steps:

1. **Create a new branch** from `main` or `develop` for your changes (see [Branch Naming](#branch-naming))

    or

    **Switch to an existing branch**

    ```bash
    # Given an existing branch `feature/dev-2-auth` on the remote repository
    git fetch
    git checkout -b feature/dev-2-auth origin/feature/dev-2-auth
    ```

2. **Make your changes** and ensure they follow the project's standards.
3. **Test your changes**
4. **Commit your changes** using the commit conventions outlined above.
5. **Push your branch** to the repository

6. **Open a pull request**:

    - Navigate to the repository on GitHub and click the "Pull Requests" tab.
    - Click "New Pull Request" and select your branch.
    - Fill out the [pull request template](PULL_REQUEST_TEMPLATE.md)

7. **Code Review**:

    - Assigned reviewers (if any) will review your pull request. Be prepared to address feedback and make necessary changes.
    - Ensure all CI checks (e.g., linting, testing, building) pass. If they fail, fix the issues and update your branch.

8. **Merge**:
    - Once approved, your pull request will be merged into the develop branch.

---

## File Naming

To maintain consistency across the project, follow this file naming convention:

- `kebab-case` - **Use lowercase** for file and directory names, with hyphens (`-`) to separate words (e.g., `add-work-item`).

---

## Additional Guidelines

### Avoid adding unnecessary dependencies

If a new dependency is required, justify its inclusion in your pull request.
Make sure that the dependency is compatible with the existing stack.
