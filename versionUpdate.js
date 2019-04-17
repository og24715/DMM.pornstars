const fs = require('fs');
const inquirer = require('inquirer');
const semver = require('semver');
const git = require('simple-git')();

const manifestPath = './chrome/src/manifest.json';
const packagePath = './package.json';

const package = require(packagePath);
const manifest = require(manifestPath);

const currentVersion = manifest.version;

async function interactiveVersionUpdate() {
  const { nextVersion } = await inquirer.prompt([{
    type: 'input',
    name: 'nextVersion',
    message: `Please provide a version (current: ${currentVersion}):`,
  }]);

  if (!semver.valid(nextVersion)) {
    console.error(`Invalid version: ${nextVersion}`);
    process.exit(1);
  }

  if (semver.lt(nextVersion, currentVersion)) {
    console.error(
      `New version (${nextVersion}) cannot be lower than current version (${currentVersion}).`
    );
    process.exit(1);
  }

  const confirm = await inquirer.prompt([{
    type: 'confirm',
    name: 'yes',
    message: `Release ${nextVersion}?`,
  }]);

  if (confirm.yes) {
    package.version = nextVersion;
    manifest.version = nextVersion;
    fs.writeFile(
      packagePath,
      JSON.stringify(package, null, 2) + '\n',
      () => {
        console.log('package.json has been updated version!');
      },
    );
    fs.writeFile(
      manifestPath,
      JSON.stringify(manifest, null, 2) + '\n',
      () => {
        console.log('manifest.json has been updated version!');
      },
    );
    git.addTag(nextVersion, () => {
      console.log(`Created ${nextVersion} tag as a release points.`);
    })
  } else {
    process.exit(1);
  }
}

interactiveVersionUpdate();
