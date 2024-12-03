export default {
  disableEmoji: true,
  list: [
    "feat",
    "fix",
    "refactor",
    "merge",
    "ci",
    "docs",
    "perf",
    "chore",
    "test",
  ],
  maxMessageLength: 100,
  minMessageLength: 3,
  questions: ["type", "subject", "breaking", "issues"],
  types: {
    chore: {
      description: "Build process or auxiliary tool changes",
      value: "chore",
    },
    docs: {
      description: "Documentation only changes",
      value: "docs",
    },
    feat: {
      description: "A new feature",
      value: "feat",
    },
    fix: {
      description: "A bug fix",
      value: "fix",
    },
    perf: {
      description: "A code change that improves performance",
      value: "perf",
    },
    refactor: {
      description: "A code change that neither fixes a bug or adds a feature",
      value: "refactor",
    },
    test: {
      description: "Adding missing tests",
      value: "test",
    },
    ci: {
      description: "CI related changes",
      value: "ci",
    },
    merge: {
      description: "Merge branch",
      value: "merge",
    },
  },
};
