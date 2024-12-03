#!/usr/bin/env node

import { execSync } from "node:child_process";
import { select } from "@inquirer/prompts";

const runCommand = (command) => {
  try {
    return execSync(command, { encoding: "utf-8" }).trim();
  } catch (error) {
    throw new Error(`Error executing command: ${command}`);
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
    throw new Error("Error not found runtime in output");
  }

  return output.devices[runtime];
};

const execIOSLaunch = async () => {
  const runtimes = getIOSRuntimes();

  const selectedRuntime = await select({
    message: "Select a runtime",
    loop: true,
    choices: runtimes.map((v) => ({
      name: v.name,
      value: v.identifier,
    })),
  });

  const devices = getIOSDevices(selectedRuntime);

  const selectedDeviceId = await select({
    message: "Select a device",
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
};

const getAndroidVirtualDevices = () => {
  const output = runCommand("emulator -list-avds");
  return output.split("\n").filter((v) => v);
};

const execAndroidLaunch = async () => {
  const devices = getAndroidVirtualDevices();

  const selectedAvd = await select({
    message: "Select a device",
    loop: true,
    choices: devices.map((v) => ({
      value: v,
    })),
  });

  console.log(`Booting device: ${selectedAvd} ...`);
  runCommand(`emulator -avd ${selectedAvd}`);
};

const main = async () => {
  const osNames = ["iOS", "Android"];

  try {
    const selectedOSName = await select({
      message: "Select a OS",
      loop: true,
      choices: osNames.map((v) => ({
        value: v,
      })),
    });

    switch (selectedOSName) {
      case "iOS":
        await execIOSLaunch();
        break;
      case "Android":
        await execAndroidLaunch();
        break;
      default:
        throw new Error("Invalid OS name");
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

main();
