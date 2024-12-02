const { execSync, exec } = require("child_process");
const { select } = require('@inquirer/prompts');

const runCommand = (command) => {
  try {
    return execSync(command, { encoding: "utf-8" }).trim();
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    process.exit(1);
  }
};

const getIOSRuntimes = () => {
  const outputJson = runCommand("xcrun simctl list runtimes -j");
  const output = JSON.parse(outputJson);

  return output.runtimes;
};

const getIOSDevices = (runtime) => {
  const outputJson = runCommand("xcrun simctl list devices -j");
  const output = JSON.parse(outputJson);
  
  if (!(runtime in output.devices)) {
    console.error(`Error not found runtime in output`);
    process.exit(1);
  }

  return output.devices[runtime];
};

const execIOSLaunch = async () => {
  const runtimes = getIOSRuntimes();
  const selectedRuntime = await select({
    message: 'Select a runtime',
    loop: true,
    choices: runtimes.map((v) => ({
      name: v.name,
      value: v.identifier,
    })),
  });

  const devices = getIOSDevices(selectedRuntime);
  const selectedDeviceId = await select({
    message: 'Select a device type',
    loop: true,
    choices: devices.map((v) => ({
      name: v.name,
      value: v.udid,
    })),
  });

  console.log(`Booting device: ${selectedDeviceId} with ${selectedRuntime}...`);
  runCommand(`xcrun simctl boot ${selectedDeviceId}`);

  console.log("Opening Simulator app...");
  runCommand("open -a Simulator");

  console.log(`Simulator is ready: ${selectedDeviceId} with ${selectedRuntime}`);
}

const getAndroidVirtualDevices = () => {
  const output = runCommand("emulator -list-avds");

  return output.split("\n").filter((v) => v);
}

const execAndroidLaunch = async () => {
  const devices = getAndroidVirtualDevices();
  const selectedAvd = await select({
    message: 'Select a device',
    loop: true,
    choices: devices.map((v) => ({
      value: v,
    })),
  });

  console.log(`Booting device: ${selectedAvd} ...`);
  runCommand(`emulator -avd ${selectedAvd}`);

}

const main = async () => {
  const osNames = ['iOS', 'Android'];
  const selectedOSName = await select({
    message: 'Select a OS',
    loop: true,
    choices: osNames.map((v) => ({
      value: v,
    })),
  });

  switch (selectedOSName) {
    case 'iOS':
      execIOSLaunch();
      break;
    case 'Android':
      execAndroidLaunch();
      break;
    default:
      console.error("Invalid OS name");
      process.exit(1);
  }
};

main();
