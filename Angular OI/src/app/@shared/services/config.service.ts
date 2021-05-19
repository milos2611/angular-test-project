import { IEnvironment } from '../models/environment-interface';

export function readJSONEnvironmentData(): IEnvironment {
  const request = new XMLHttpRequest();
  request.open('GET', '../assets/env.json', false);
  request.send();

  const env = JSON.parse(request.responseText);

  return env as IEnvironment;
}

export const environmentData = readJSONEnvironmentData();
