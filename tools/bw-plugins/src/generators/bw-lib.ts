import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  logger,
  names
} from '@nx/devkit';
import * as path from 'path';
import { libraryGenerator } from '@nx/angular/generators';
import { BwLibGeneratorSchema } from './schema';

export async function bwLibGenerator(
  tree: Tree,
  options: BwLibGeneratorSchema
) {
  // Error Handling for Required Fields
  if (!options.domain) {
    throw new Error('The "domain" option is required. Please provide a domain for the library.');
  }
  if (!options.name) {
    throw new Error('The "name" option is required. Please provide a name for the library.');
  }
  if (!options.type) {
    throw new Error('The "type" option is required. Please provide a type for the library (feature, core, ui, or data-access).');
  }

  // Validate type
  const allowedTypes = ['feature', 'core', 'ui', 'data-access'];
  if (!allowedTypes.includes(options.type)) {
    throw new Error(
      `Invalid "type" provided: "${options.type}". Allowed types are: ${allowedTypes.join(', ')}.`
    );
  }

  // Construct Path and Name
  const preFixName =`${names(options.domain).fileName}-${options.type}-${names(options.name).fileName}`;
  const projectDirectory = `${options.domain}/${preFixName}/${options.name}-${options.type}`;
  const projectRoot = `libs/${projectDirectory}`;
  const importPath = `@bw/${names(options.domain).fileName}/${options.name}-${options.type}`;

  // Check if the directory already exists
  if (tree.exists(projectRoot)) {
    throw new Error(`The directory ${projectRoot} already exists. Choose a different name.`);
  }

  // Generate Angular Library using Nx's Angular Library Generator
  await libraryGenerator(tree, {
    name: preFixName,
    directory: projectRoot,
    tags: `${options.type}`,
    style: 'scss',
    standaloneConfig: true,
    commonModule:false,
    changeDetection: 'OnPush',
    importPath: importPath,
    prefix: preFixName,
  });

  logger.info(`Angular library created at: ${projectRoot}`);
  logger.info(`Import path: ${importPath}`);
}

export default bwLibGenerator;
