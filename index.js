const { execSync } = require("child_process");
const { select } = require('@inquirer/prompts');

const runCommand = (command) => {
  try {
    return execSync(command, { encoding: "utf-8" }).trim();
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    process.exit(1);
  }
};

const getRuntimes = () => {
  const outputJson = runCommand("xcrun simctl list runtimes -j");
  const output = JSON.parse(outputJson);

  return output.runtimes;
};

const getDeviceTypes = (runtime) => {
  const outputJson = runCommand("xcrun simctl list devices -j");
  const output = JSON.parse(outputJson);
  
  if (!(runtime in output.devices)) {
    console.error(`Error not found runtime in output`);
    process.exit(1);
  }

  return output.devices[runtime];
};

const main = async () => {
  const runtimes = getRuntimes();
  const selectedRuntime = await select({
    message: 'select a runtime',
    loop: true,
    choices: runtimes.map((v) => ({
      name: v.name,
      value: v.identifier,
    })),
  });

  const deviceTypes = getDeviceTypes(selectedRuntime);
  const selectedDeviceId = await select({
    message: 'select a device type',
    loop: true,
    choices: deviceTypes.map((v) => ({
      name: v.name,
      value: v.udid,
    })),
  });

  console.log(`Booting device: ${selectedDeviceId} with ${selectedRuntime}...`);
  runCommand(`xcrun simctl boot ${selectedDeviceId}`);

  console.log("Opening Simulator app...");
  runCommand("open -a Simulator");

  console.log(`Simulator is ready: ${selectedDeviceId} with ${selectedRuntime}`);
};

main();
