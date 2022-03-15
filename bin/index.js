#!/usr/bin/env node

"use strict";

const chalk = require("chalk");
const path = require("path");
const fs = require("fs-extra");
const os = require("os");
const execSync = require("child_process").execSync;
const rimraf = require("rimraf");
const packageJson = require("../package.json");

init(process.argv);

function init(argv) {
  if (argv.length < 3) {
    usage();
    process.exit(1);
  }

  const projectName = argv[2];

  if (fs.existsSync(projectName)) {
    console.log();
    console.log(
      `  ${chalk.red(projectName)} already exists, please give it another name.`
    );
    process.exit(1);
  }
  fs.mkdirSync(projectName);

  const boilerplatePath = path.join(__dirname, "../boilerplate");
  const projectPath = path.join(process.cwd(), projectName);

  copyBoilerplate(boilerplatePath, projectPath);

  console.log();
  console.log(`Creating a new App in ${chalk.green(projectPath)}.`);
  console.log();

  process.chdir(projectPath);

  buildPackageJson(projectName, projectPath);
  gitInit();
  install();
  success(projectName, projectPath);
}

function usage() {
  console.log();
  console.log("Please specify the project name:");
  console.log(
    `  ${chalk.cyan(packageJson.name)} ${chalk.green("<project-name>")}`
  );
  console.log();
  console.log("For example:");
  console.log(`  ${chalk.cyan(packageJson.name)} ${chalk.green("my-app")}`);
  console.log();
  process.exit(1);
}

function copyBoilerplate(srcDir, destDir) {
  try {
    fs.copySync(srcDir, destDir, {
      recursive: true,
    });
  } catch (error) {
    console.log(`${chalk.red(error)}`);
  }
}

function buildPackageJson(projectName, projectPath) {
  const packageJsonPath = path.join(projectPath, "package.json");

  const packageJson = require(packageJsonPath);

  const newPackageJson = {
    ...packageJson,
    name: projectName,
    version: "0.1.0",
    private: true,
  };

  fs.writeFileSync(
    path.join(projectPath, "package.json"),
    JSON.stringify(newPackageJson, null, 2) + os.EOL
  );
}

function install() {
  console.log("Installing packages. This might take a couple of minutes.");
  console.log();
  execSync("npm install", { stdio: "ignore" });
}

function gitInit() {
  console.log("Initialize a git repository.");
  console.log();

  rimraf.sync("./.git");

  fs.renameSync(".npmignore", ".gitignore");

  execSync("git init", { stdio: "ignore" });
  execSync("git checkout -b main", { stdio: "ignore" });
  execSync("git add --all", { stdio: "ignore" });
  execSync('git commit -m "Initial commit from Create Avikus App"', {
    stdio: "ignore",
  });
  execSync("git config commit.template .gitmessage", { stdio: "ignore" });
}

function success(projectName, projectPath) {
  console.log(
    `${chalk.green("Success!")} Created ${projectName} at ${projectPath}`
  );
  console.log();
  console.log("We suggest that you begin by typing:");
  console.log();
  console.log(chalk.cyan("  cd"), projectName);
  console.log(`  ${chalk.cyan("npm run dev")}`);
  console.log();
}
